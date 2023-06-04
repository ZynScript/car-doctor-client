import {data} from "autoprefixer";
import React, {useEffect, useState} from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(services);

  return (
    <div className="my-20">
      <div className="text-center space-y-5">
        <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
        <h2 className="text-5xl">Our Services Area</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          corrupti <br /> cumque ullam sequi nihil officiis ex sunt est tenetur
          beatae non adipisci laudantium
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
