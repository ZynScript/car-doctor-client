import React, {useContext} from "react";
import {useLoaderData} from "react-router-dom";
import {AuthContext} from "../../providers/AuthProvider";

const CheckOut = () => {
  const checkout = useLoaderData();
  const {service_id, _id, title, price, img} = checkout;
  const {user} = useContext(AuthContext);

  const handleBookService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const booking = {
      customerName: name,
      email,
      date,
      img,
      service: title,
      id: _id,
      service_id: service_id,
      price: price,
    };
    console.log(booking);

    fetch("https://car-doctor-server-two-pink.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("service booked successfully");
        }
      });
  };

  return (
    <>
      <div className="text-3xl text-center">Book Service: {title}</div>
      <div className="card-body">
        <form onSubmit={handleBookService}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                name="name"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input type="date" name="date" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due Ammount</span>
              </label>
              <input
                type="text"
                readOnly
                name="due-ammount"
                defaultValue={`$ ${price}`}
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-block btn-primary"
              type="submit"
              value="Order Confirm"
            />
          </div>
        </form>
      </div>
    </>
  );
};
export default CheckOut;
