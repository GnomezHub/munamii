import React from "react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <main className="flex-grow text-gray-800 m-2 mt-4">
      <div className="container max-w-4xl mx-auto p-2 my-6 pt-8 md:px-6 bg-teal-50 diagonal-stripes rounded-3xl shadow-xl">
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
              processing and availability. Tuesday to Saturday 9 a.m. at 2 p.m.
            </p>

            <p className="mt-4">
              For any questions, please fill out the form below and we will get
              back to you as soon as possible.
            </p>
     
            <div className="my-8">
              <ContactForm />
            </div>
                   {/* Map section */}
            <div className="mt-12 mb-4">
              <h3 className="text-teal-600 font-cakery text-3xl text-center mb-2">
                Find us
              </h3>
              <p className="text-center mb-4">
                Cakery Lane 42, 111 22 Stockholm
              </p>
              <div className="relative w-full overflow-hidden rounded-xl shadow-md border border-gray-200 bg-white">
                {/* 16:9 responsive container */}
                <div className="relative" style={{ paddingTop: "56.25%" }}>
                  <iframe
                    title="Munamii Cakery Karta"
                    src="https://www.google.com/maps?q=Cakery%20Lane%2042%2C%20111%2022%20Stockholm&z=14&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="text-center mt-6">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Cakery+Lane+42%2C+111+22+Stockholm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-munamii px-4 py-2 my-1 rounded-full ring-2 text-amber-900 hover:bg-teal-100 hover:text-teal-600 hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Open i Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
