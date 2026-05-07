import React from "react";
import { socialLinks, ContactDetail } from "../../../data/data";

export const ContactInfo = () => (
  <div className="w-full lg:flex-[1] rounded-2xl flex flex-col gap-5 p-5 card">
    
    <h2 className="text-xl font-bold text-primary">Direct Contact</h2>

    {ContactDetail.map((item, index) => (
      <a
        key={index}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-4 items-center bg-[#0a0a0a] border border-white/10 p-4 rounded-xl"
      >
        {item.icon}
        <div>
          <p className="font-bold">{item.ContactName}</p>
          <p className="text-muted">{item.label}</p>
        </div>
      </a>
    ))}

    <h2 className="text-lg font-bold text-primary">Social</h2>

    <div className="flex gap-3">
      {socialLinks.map((item, index) => (
        <a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-[#0a0a0a] border border-white/10 rounded-xl"
        >
          {item.icon}
        </a>
      ))}
    </div>
  </div>
);