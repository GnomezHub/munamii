import React from "react";
import Header from "../components/Header";

export default function About() {
  return (
    <main className="flex-grow text-gray-800 m-4">
      <div className="container max-w-4xl mx-auto p-2 my-6 bg-teal-50 rounded-3xl shadow-xl">
        <div className="rounded-2xl p-2 mx-0 my-4 shadow-lg border bg-white border-gray-200 pt-4">
          <h2 className="text-teal-600 font-cakery text-4xl text-center mb-2">
            About Us
          </h2>
                    <p className="text-lg m-auto p-4 max-w-xl font-sans">
            At Munamii Cakery, each cake, each box of cupcakes that we make has
            a very special value for us. We not only want to bring a dessert to
            your table but rather a unique experience for you, which will become
            an unforgettable memory. We have been in the pastry market for more
            than 8 years and now we offer you a new way to shop through our
            website.
          </p>
          <img src="./assets/bredbak.jpg" alt="Bakery Image" className="mx-auto m-4 rounded-xl shadow-xl object-cover" />

        </div>
      </div>
    </main>
  );
}
