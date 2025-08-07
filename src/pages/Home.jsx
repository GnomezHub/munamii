import React from "react";

export default function Home() {
  return (
    <main className="flex-grow text-gray-800 m-4">
      <div className="container max-w-4xl mx-auto p-2 my-6  bg-teal-50 diagonal-stripes rounded-3xl shadow-xl">
                <img
          src="./assets/munamii.png"
          alt="Munamii Cakery Logo"
          className="mx-auto m-4 rounded-full shadow-xl h-56"
        />
        <div className="rounded-2xl p-2 mx-0 shadow-lg border bg-white border-gray-200 pt-4">
          {/*           
          <h1 className="text-amber-950 font-munamii text-3xl font-extrabold text-center mt-2">
            Hi! Welcome to Munamii Cakery!
          </h1> */}
          <h2 className="text-teal-600 font-cakery text-4xl text-center mb-2">
            Hi! Welcome to Munamii Cakery!
          </h2>
          <p className="text-lg m-auto py-4 max-w-xl font-sans">
            We are a small business based in Sweden. We offer you the most
            delicious cakes and cupcakes for all kinds of events and
            celebrations. Browse around to discover what you would like to buy.
          </p>
          
          <img
            src="./assets/facecakes.jpg"
            alt="Bakery Image"
            className="mx-auto m-4 rounded-xl shadow-xl "
          />
        </div>

      </div>
    </main>
  );
}
