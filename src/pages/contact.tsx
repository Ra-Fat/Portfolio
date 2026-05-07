import React, { useState, useEffect } from "react";
import * as v from "valibot";
import emailjs from "@emailjs/browser";
import { SectionTitle } from "../components/atoms/section-title";
import { ContactForm } from "../components/modules/contact/contact-form";
// import ContactInfo from "../components/modules/contact/contact-info";
import { ContactInfo } from "../components/modules/contact/contact-info";
import {
  ContactSchema,
  ContactFormErrors,
} from "../components/modules/contact/schema/contact-schema";
import { ContactStatusModal } from "../components/modules/contact/status-model";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [loading, setLoading] = useState(false);
  const [modalType, setModalType] = useState<"success" | "error" | null>(null);

  useEffect(() => {
    if (!modalType) return;
    const timer = setTimeout(() => setModalType(null), 3000);
    return () => clearTimeout(timer);
  }, [modalType]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // clear error on change
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = v.safeParse(ContactSchema, formData);

    if (!result.success) {
      const fieldErrors: ContactFormErrors = {};
      result.issues.forEach((issue) => {
        const field = issue.path?.[0]?.key as keyof ContactFormErrors;
        if (field && !fieldErrors[field]) fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    emailjs
      .send(
        "service_dv10yry",
        "template_ntx1wpn",
        { ...formData, time: new Date().toLocaleString() },
        "J1YYVQo0cdMoz8_DR",
      )
      .then(
        () => {
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
          setModalType("success");
        },
        () => {
          setLoading(false);
          setModalType("error");
        },
      );
  };

  return (
    <div className="w-full lg:px-0 xl:px-16 relative">
      <div className="flex flex-col items-center justify-center xl:px-10">
        <ContactStatusModal type={modalType} onClose={() => setModalType(null)} />
        <SectionTitle title="Contact" subtitle="Get In Touch" />
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 mt-15 w-full max-w-6xl">
          <ContactForm
            formData={formData}
            errors={errors}
            loading={loading}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};
