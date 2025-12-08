"use client";
import { useState } from "react";

type FormData = {
  first: string;
  last: string;
  phone: string;
  email: string;
  subject: string;
  leadTime: string;
  message: string;
  attachments: FileList | [];
};

const DEFAULT_VALUES: FormData = {
  first: "",
  last: "",
  phone: "",
  email: "",
  subject: "",
  leadTime: "",
  message: "",
  attachments: [],
};

export default function Form() {
  const [form, setForm] = useState<FormData>(DEFAULT_VALUES);

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    if (name === "attachments") {
      setForm((f) => ({ ...f, attachments: files }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const data = new FormData();
    for (let key in form) {
      if (key === "attachments") {
        for (let file of form.attachments) data.append("attachments", file);
      } else {
        //@ts-ignore
        data.append(key, form[key]);
      }
    }

    try {
      await fetch("/api/upload", { method: "POST", body: data });
      alert("Successfully Submitted");
    } catch (error) {
      alert("Unable to submit" + error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 font-geist bg-neutral-900 p-6 rounded-lg">
      <div className="md:grid grid-cols-2 gap-6">
        <input
          name="first"
          required
          placeholder="First Name"
          onChange={handleChange}
          className="border-b border-gray-300 py-3 focus:outline-none w-full mb-6 md:mb-0"
        />

        <input
          name="last"
          required
          placeholder="Last Name"
          onChange={handleChange}
          className="border-b border-gray-300 py-3 focus:outline-none w-full"
        />
      </div>

      <div className="md:grid grid-cols-2 gap-6">
        <input
          name="phone"
          placeholder="Phone"
          type="tel"
          onChange={handleChange}
          className="w-full border-b border-gray-300 py-3 focus:outline-none mb-6 md:mb-0"
        />

        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          onChange={handleChange}
          className="w-full border-b border-gray-300 py-3 focus:outline-none"
        />
      </div>

      <input
        name="subject"
        type="subject"
        required
        placeholder="Subject"
        onChange={handleChange}
        className="w-full border-b border-gray-300 py-3 focus:outline-none"
      />

      <textarea
        name="message"
        rows={5}
        placeholder="Message"
        onChange={handleChange}
        className="w-full border-b border-gray-300 py-3 focus:outline-none"
      />

      <input
        name="leadTime"
        placeholder="Estimated lead time (e.g., 2-4 weeks)"
        onChange={handleChange}
        className="w-full border-b border-gray-300 py-3 focus:outline-none"
      />

      {/* FILE UPLOAD */}
      <div className="w-full">
        <label className="flex items-center justify-between border-b border-neutral-500 py-3 px-2 cursor-pointer">
          <span className="text-neutral-50 hover:bg-transparent">
            {form.attachments.length > 0 ? `${form.attachments.length} file(s) selected` : "Choose files"}
          </span>

          <span className="ml-2 px-3 py-2 bg-white text-sm rounded-sm">Browse</span>

          <input type="file" name="attachments" multiple onChange={handleChange} className="hidden hover:bg-transparent" />
        </label>
      </div>

      <button className="px-8 py-4 bg-white cursor-pointer rounded-md rounded-br-2xl">Submit</button>
    </form>
  );
}
