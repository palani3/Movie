import React from "react";
import Navbar from "../Components/Navbar";

export default function TrendingMovies() {
  return (
    <div>
      <section className="flex bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <div className=" justify-cente pl-9">
          <div className="rounded-lg shadow-lg bg-white max-w-sm max-h-96">
            <a href="#!">
              <img
                className="rounded-t-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                alt=""
              />
            </a>
           
          </div>
          <p>ill get 12LP more enjoy the ride maga you will achive</p>

        </div>
      </section>
    </div>
  );
}
