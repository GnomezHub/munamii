import React from "react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <main className="flex-grow text-gray-800 m-6">
      <div className="container max-w-4xl mx-auto p-2 my-6 bg-teal-50 diagonal-stripes rounded-3xl shadow-xl">
        <div className="rounded-2xl p-2 mx-0 my-4 shadow-lg border bg-white border-gray-200 pt-4">
          <h2 className="text-teal-600 font-cakery text-4xl text-center mb-6">
            Contact Us
          </h2>
          <div className="text-lg m-auto p-4 max-w-xl font-sans">
            <p>
              Home delivery service: All the city of Stockholm (redacted) and
              Malmo (redacted) with additional cost.
            </p>
            <p>
              Place to pick up order: Via la Costa Avenue. Blue Port gated
              neighbourhood. We will send you the GPS Location via WhatsApp.
              Orders must be placed 2 days before for greater security,
              processing and availability.
              <p>Tuesday to Saturday 9 a.m. at 2 p.m.</p>
            </p>
            <br />
            <br />
            <p>
              For any questions, please fill out the form below and we will get
              back to you as soon as possible.
            </p>
            <div className="my-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
