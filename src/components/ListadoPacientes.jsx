import React from "react";
import Paciente from "./Paciente";

const ListadoPacientes = ({ patients }) => {
    return (
        <div className="md:w-1/2 lg:w-3/5 overflow-y-scroll md:h-screen">
            <h2 className="font-black text-center text-3xl ">Patient's list</h2>

            <p className="text-xl mt-5 mb-10 text-center">
                Administrate your{" "}
                <span className="font-bold text-indigo-600">patients and dates</span>
            </p>

            {patients.map((patient) => (
                <Paciente
                    key={}
                    patient={patient}
             
                />
            ))}
        </div>
    );
};

export default ListadoPacientes;
