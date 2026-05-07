import React from "react";
import { Send } from "lucide-react";
import { ContactFormErrors } from "./schema/contact-schema";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type Props = {
  formData: FormData;
  errors: ContactFormErrors;
  loading: boolean;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
};

export const ContactForm = ({
  formData,
  errors,
  loading,
  onChange,
  onSubmit,
}: Props) => (
  <div className="w-full lg:flex-[2] flex card flex-col gap-5 backdrop-blur-md rounded-2xl p-5">
    
    <h2 className="text-xl font-bold">Send a Message</h2>

    <form onSubmit={onSubmit} className="flex flex-col w-full gap-5 h-full">
      
      {/* Name */}
      <div className="flex flex-col gap-2">
        <label className="text-secondary">Your Name</label>
        <input
          name="name"
          placeholder="Jazz"
          value={formData.name}
          onChange={onChange}
          className="input px-3 py-3 rounded-xl"
        />
        {errors.name && (
          <span className="text-red-400 text-[12px]">{errors.name}</span>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label className="text-secondary">Email</label>
        <input
          name="email"
          placeholder="Jazz@example.com"
          value={formData.email}
          onChange={onChange}
          className="input px-3 py-3 rounded-xl"
        />
        {errors.email && (
          <span className="text-red-400 text-[12px]">{errors.email}</span>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2 flex-1">
        <label className="text-secondary">Message</label>
        <textarea
          name="message"
          placeholder="Your message here..."
          value={formData.message}
          onChange={onChange}
          className="input min-h-[150px] p-3 rounded-xl resize-none"
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        disabled={loading}
        className="flex items-center justify-center gap-2 button cursor-pointer p-3 hover:bg-[#111010] rounded-xl"
      >
        {loading ? "Sending..." : (
          <>
            <Send size={20} /> Send Message
          </>
        )}
      </button>

    </form>
  </div>
);