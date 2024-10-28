import React from "react";

const Heading = ({ title }) => {
  return (
    <section class="bg-white mb-5 shadow px-4 py-4">
      <h1 class="text-2xl font-bold tracking-tight text-gray-900">{title}</h1>
    </section>
  );
};

export default Heading;
