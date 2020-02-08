import React, { Fragment, useState } from "react";
import uuid from "uuid/v4";
import PropTypes from "prop-types";

const Form = ({ createapp }) => {
  //****Create state of appointment****//
  const [appointment, updateapp] = useState({
    species: "",
    pet: "",
    owner: "",
    date: "",
    time: "",
    symptom: ""
  });

  const [error, updaterror] = useState(false);

  //****Function when writing to an input****//

  const handleChange = e => {
    updateapp({
      ...appointment,
      [e.target.name]: e.target.value
    });
  };

  //****Extract Values****//

  const { species, pet, owner, time, date, symptom } = appointment;

  //****When the form is submitted****//

  const submitapp = e => {
    e.preventDefault();

    //**** Valid ****//
    if (
      species.trim() === "" ||
      pet.trim() === "" ||
      owner.trim() === "" ||
      date.trim() === "" ||
      time.trim() === "" ||
      symptom.trim() === ""
    ) {
      updaterror(true);
      return;
    }

    //****Delete previous message error****//

    updaterror(false);

    //****Assign id****//
    appointment.id = uuid();

    //****Create appointment****//
    createapp(appointment);

    //****Reset the form****//
    updateapp({
      species: "",
      pet: "",
      owner: "",
      date: "",
      time: "",
      symptom: ""
    });
  };

  return (
    <Fragment>
      <h2>Create appointment</h2>
      {error ? <p className="alertError">All fields are required</p> : null}

      <form className="card" onSubmit={submitapp}>
        <div className="card-body">
          <div className="form-group">
            <label>Species</label>
            <select
              type="text"
              placeholder="Species"
              className="form-control"
              name="species"
              onChange={handleChange}
              value={species}>
              <option>Select</option>
              <option>Canine</option>
              <option>Feline</option>
              <option>Bird</option>
              <option>Rodent</option>
              <option>Exotic</option>
            </select>
          </div>
          <div className="form-group">
            <label> Pet name</label>
            <input
              type="text"
              placeholder="Pet Name"
              className="form-control"
              name="pet"
              onChange={handleChange}
              value={pet}
            />
          </div>
          <div className="form-group">
            <label> Pet owner</label>
            <input
              type="text"
              placeholder="Pet owner"
              className="form-control"
              name="owner"
              onChange={handleChange}
              value={owner}
            />
          </div>
          <div className="form-group">
            <label> Date</label>
            <input
              type="date"
              className="form-control"
              name="date"
              onChange={handleChange}
              value={date}
            />
          </div>
          <div className="form-group">
            <label> Time</label>
            <input
              type="time"
              className="form-control"
              name="time"
              onChange={handleChange}
              value={time}
            />
          </div>
          <div className="form-group">
            <label>Symptom</label>
            <textarea
              className="form-control"
              name="symptom"
              rows="5"
              cols="30"
              onChange={handleChange}
              value={symptom}
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-get-started  btn-info btn-block"
          >
            Add
          </button>
        </div>
      </form>
    </Fragment>
  );
};

Form.propTypes = {
  createapp: PropTypes.func.isRequired
};

export default Form;
