import React from "react";

const Paciente = ({ patient }) => {
    const { name, owner, email, date, symp } = patient;

    return (
        <div className="bg-white shadow-md mx-5 my-5 px-5 py-10 rounded-xl">
            {/**name */}
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Pet's Name: <span className="font-normal normal-case">{name}</span>
            </p>
            {/**ownerName*/}
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Owner's Name: <span className="font-normal normal-case">{owner}</span>
            </p>
            {/**mail */}
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Email: <span className="font-normal normal-case">{email}</span>
            </p>
            {/**Date */}
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Date: <span className="font-normal normal-case">{date}</span>
            </p>
            {/**sintomas */}
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Symptoms: <span className="font-normal normal-case">{symp}</span>
            </p>
        </div>
    );
};

export default Paciente;
