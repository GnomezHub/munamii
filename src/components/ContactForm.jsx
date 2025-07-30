export default function ContactForm() {
  return (
    <form name="contact" action="/Success" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label htmlFor="yourname">Your Name:</label> <br />
        <input
          type="text"
          name="name"
          id="yourname"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </p>
      <p>
        <label htmlFor="youremail">Your Email:</label> <br />
        <input
          type="email"
          name="email"
          id="youremail"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </p>
      <p>
        <label htmlFor="yourmessage">Message:</label> <br />
        <textarea
          name="message"
          id="yourmessage"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        ></textarea>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
}
