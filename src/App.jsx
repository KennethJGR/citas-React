import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [patients, setPatients] = useState(
    JSON.parse(localStorage.getItem("patients")) ?? []
  );
  const [patient, setPatient] = useState({});

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const deletePatient = (id) => {
    const updatedPatients = patients.filter((pat) => pat.id !== id);
    setPatients(updatedPatients);
  };

  return (
    <div className="container mx-auto mt-10">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <ListadoPacientes
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  );
}

export default App;
