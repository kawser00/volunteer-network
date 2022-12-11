import React, { useContext } from "react";
import "./Registration.css";
import logo from "../../logos/logo.png";
import { Link, useHistory, useParams } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import { useEffect } from "react";

const Registration = () => {
  const { loggedInUser } = useContext(UserContext);
  const { volunteeringData } = useContext(UserContext);
  const [volunteer, setVolunteer] = useState(null);
  const history = useHistory();
  const { key } = useParams();

  useEffect(() => {
    const volunteerItem = volunteeringData.find((data) => data.key === key);
    setVolunteer(volunteerItem);
  }, [key, volunteeringData]);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch(
      "https://volunteer-network-server-jv30.onrender.com/addRegisterData",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          history.push("/item");
        }
      });
  };

  return (
    <div>
      <div className="container-fluid text-center py-5">
        <Link to="/home">
          <img className="mb-5" height="60" src={logo} alt="" />
        </Link>
        <div className="w-50 box-style m-auto">
          <h3 className="font-weight-bold text-left mb-5">
            Register as a Volunteer
          </h3>
          {volunteer && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <input
                  name="name"
                  defaultValue={loggedInUser.name}
                  ref={register}
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  defaultValue={loggedInUser.email}
                  name="email"
                  ref={register}
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Username or Email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  name="date"
                  ref={register}
                  type="date"
                  className="form-control"
                  placeholder="Date"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  name="description"
                  ref={register}
                  type="text"
                  className="form-control"
                  placeholder="Description"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  name="title"
                  ref={register}
                  type="text"
                  className="form-control"
                  defaultValue={volunteer.title}
                />
              </div>

              <button type="submit" className="btn btn-primary w-100 my-4">
                Registration
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Registration;
