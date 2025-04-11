import { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { EmailJSResponseStatus } from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target as HTMLFormElement,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((res: EmailJSResponseStatus) => {
        console.log(res);
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Please try again."));
  };
  return (
    <RevealOnScroll>
      <section
        id="contact"
        className="min-h-screen relative flex justify-center items-center py-20"
      >
        <div className="min-w-lg mx-auto px-4 ">
          <h1 className=" text-center  text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 text-xs "
          >
            <div className="relative">
              <input
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Name..."
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                className=" w-full border border-gray-50/10 rounded p-2 bg-blue-500/5 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="relative">
              <input
                placeholder="example@gmail.com"
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                className=" w-full border border-gray-50/10 rounded p-2 bg-blue-500/5 focus:outline-none focus:border-blue-500"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div>
              <textarea
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Your Message..."
                value={formData.message}
                className="w-full border border-gray-50/10 focus:outline-none focus:border-blue-500 bg-blue-500/5 rounded p-2"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-4 rounded font-medium transition relative overflow-hidden hover:-translate-0.5 hover: shadow-[0_0_15px_rgba(59,130,246,0.1)]"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </RevealOnScroll>
  );
};

export default Contact;
