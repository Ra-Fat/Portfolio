import React from "react";
import { Check, XCircle } from "lucide-react";

type Props = {
  type: "success" | "error" | null;
  onClose: () => void;
};

export const ContactStatusModal = ({ type, onClose }: Props) => {
  if (!type) return null;

  const isSuccess = type === "success";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4">
      <div className="bg-white dark:bg-neutral-900 border border-black/[0.06] dark:border-white/[0.08] rounded-2xl p-8 w-full max-w-sm flex flex-col items-center gap-3 text-center">

        {/* Icon */}
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
          isSuccess
            ? "bg-green-50 dark:bg-green-950"
            : "bg-red-50 dark:bg-red-950"
        }`}>
          {isSuccess
            ? <Check size={22} className="text-green-600 dark:text-green-400" />
            : <XCircle size={22} className="text-red-500 dark:text-red-400" />
          }
        </div>

        {/* Title */}
        <p className="text-[15px] font-medium text-neutral-900 dark:text-white mt-1">
          {isSuccess ? "Message sent" : "Something went wrong"}
        </p>

        {/* Description */}
        <p className="text-[13.5px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
          {isSuccess
            ? "Thank you for reaching out. I'll get back to you as soon as possible."
            : "We couldn't send your message. Please try again or contact me directly."
          }
        </p>

        {/* Button */}
        <button
          onClick={onClose}
          className="mt-2 w-full py-2.5 rounded-xl text-[13.5px] font-medium bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:opacity-90 transition-opacity"
        >
          {isSuccess ? "Done" : "Try again"}
        </button>

      </div>
    </div>
  );
};