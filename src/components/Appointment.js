import React from "react";
import PropTypes from "prop-types";

const Appointment = ({ appointment, deleteapp }) => (
  <div className="appointment">
    <p>
      {" "}
      Species: <span>{appointment.species}</span>{" "}
    </p>
    <p>
      {" "}
      Pet Name: <span>{appointment.pet}</span>{" "}
    </p>
    <p>
      {" "}
      Owner: <span>{appointment.owner}</span>{" "}
    </p>
    <p>
      {" "}
      Date: <span>{appointment.date}</span>{" "}
    </p>
    <p>
      {" "}
      Time: <span>{appointment.time}</span>{" "}
    </p>
    <p>
      {" "}
      Symptom: <span>{appointment.symptom}</span>{" "}
    </p>
    <button
      className=" btn btn-get-started  btn-danger btn-list"
      onClick={() => deleteapp(appointment.id)}
    >
      {" "}
      &times; Delete
    </button>
  </div>
);

Appointment.propTypes = {
  appointment: PropTypes.object.isRequired,
  deleteapp: PropTypes.func.isRequired
};

export default Appointment;
