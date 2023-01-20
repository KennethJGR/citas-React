import React from "react";
import Paciente from "./Paciente";
import { useEffect } from "react";

const ListadoPacientes = ({ patients, setPatient, deletePatient }) => {
    return (
        <div className="md:w-1/2 lg:w-3/5 overflow-y-scroll md:h-screen">
            {patients.length ? (
                <>
                    <h2 className="font-black text-center text-3xl ">Patient's list</h2>

                    <p className="text-xl mt-5 mb-10 text-center">
                        Administrate your{" "}
                        <span className="font-bold text-indigo-600">
                            patients and dates
                        </span>
                    </p>

                    {patients.map((patient) => (
                        <Paciente
                            key={patient.id}
                            patient={patient}
                            setPatient={setPatient}
                            deletePatient={deletePatient}
                        />
                    ))}
                </>
            ) : (
                <>
                    {" "}
                    <h2 className="font-black text-center text-3xl ">
                        There's no patients
                    </h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Add patients and they will{" "}
                        <span className="font-bold text-indigo-600">appear here</span>
                    </p>
                </>
            )}
        </div>
    );
};

export default ListadoPacientes;
