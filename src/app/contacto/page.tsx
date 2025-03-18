import ContactForm, { ContactSideBar } from "@/components/ContactForm";
import React from "react";

export default function ContactoPage() {
  return (
    <main>
      <div className="flex   justify-between">
        <ContactForm />
        <ContactSideBar />
      </div>
    </main>
  );
}
