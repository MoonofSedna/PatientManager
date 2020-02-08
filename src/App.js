import React, { Fragment, useState, useEffect } from "react";
import Form from "./components/Form";
import Appointment from "./components/Appointment";

function App() {

  //****Appointments at the localstorage****//

    let AppIni =       JSON.parse(localStorage.getItem("list"));

          if (!AppIni) {
            AppIni = [];
          }

  //****Appointment arrangement****//

    const [list, savelist] = useState(AppIni);

  //****UseEffect to perform certain operations when the status changes****//

    useEffect(() => {
        if (AppIni) {
          localStorage.setItem("list", JSON.stringify(list));
        } else {
          localStorage.setItem("list", JSON.stringify([]));
        }
    }, [list, AppIni]);

  //****Function to save current appointments and add new ones****//

    const createapp = appointment => {
        savelist([...list, appointment]);
    };

  //****Function that eliminates the appointment by id****//

    const deleteapp = id => {
        const newapp = list.filter(appointment =>
            appointment.id !== id);
            savelist(newapp);
    };

  //****Message with condition****//

  const title = list.length === 0 ? "No pending appointments" : "Manage appointments";

    return (
        <Fragment>
          <h1>Patient Manager</h1>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <Form createapp={createapp} />
              </div>


              <div className="col-md-6">
                   <h2 className="list-title">{title}</h2>
                  <div className=" appdiv">
                      {list.map(appointment => (
                        <Appointment
                          key={appointment.id}
                          appointment={appointment}
                          deleteapp={deleteapp}
                        />
                      ))}
                  </div>

              </div>
            </div>
          </div>
        </Fragment>
    );
}

export default App;
