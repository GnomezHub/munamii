import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);

    // Skapar en FormData-objekt
    const data = new FormData(e.target);

    try {
      const response = await fetch("/", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError(true);
      }
    } catch (err) {
      console.log("Error submitting form:", err);
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label htmlFor="yourname">Your Name:</label> <br />
        <input
          type="text"
          name="name"
          id="yourname"
          value={formData.name}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </p>
      <p>
        <label htmlFor="youremail">Your Email:</label> <br />
        <input
          type="email"
          name="email"
          id="youremail"
          value={formData.email}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </p>
      <p>
        <label htmlFor="yourmessage">Message:</label> <br />
        <textarea
          name="message"
          id="yourmessage"
          value={formData.message}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        ></textarea>
      </p>
      <p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="float-right px-1 md:px-2 my-4 py-0 m-2 rounded-full ring-2 transition-all duration-300 ease-in-out          
                          :text-amber-900 hover:bg-teal-100 hover:text-teal-600 hover:shadow-lg hover:scale-105                     
                      focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </p>
      {success && (
        <p className="text-green-600">Thank you! Your message was sent.</p>
      )}
      {error && (
        <p className="text-red-600">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
