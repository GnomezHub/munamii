import React from "react";
import Header from "../components/Header";

export default function Contact() {
  return (
    <div>
      <h2 className="text-teal-500 font-cakery text-4xl text-center mb-6">
        Contact Us
      </h2>
      <p className="text-lg text-center m-auto p-6 max-w-xl font-munamii">
        Home delivery service: All the city of Stockholm (redacted) and Malmo
        (redacted) with additional cost.
       </p>
      <p className="text-lg text-center m-auto p-6 max-w-xl font-munamii">
        Place to pick up order: Via la Costa Avenue. Blue Port gated
        neighbourhood. We will send you the GPS Location via WhatsApp. Orders
        must be placed 2 days before for greater security, processing and
        availability. <br></br>Tuesday to Saturday 9 a.m. at 2 p.m.
      </p>
    </div>
  );
}
