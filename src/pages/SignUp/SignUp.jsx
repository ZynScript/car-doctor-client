import React, {useContext} from "react";
import img from "../../assets/images/login/login.svg";
import {Link} from "react-router-dom";
import {AuthContext} from "../../providers/AuthProvider";

const SignUp = () => {
  const {createUser} = useContext(AuthContext);
  const handleSingUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const logged = result.user;
        console.log(logged);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 mr-16">
            <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-4xl text-center  font-bold">Register</h1>
              <form onSubmit={handleSingUp}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Sign Up"
                  />
                </div>
              </form>
              <small>
                <p>
                  Already Have an Account?{" "}
                  <Link
                    to="/login"
                    className="link-hover font-bold text-orange-300">
                    Login
                  </Link>
                </p>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
