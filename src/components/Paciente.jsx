import React from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const Paciente = ({ patient, setPatient, deletePatient }) => {
    const { name, owner, email, date, symp, id } = patient;

    const handleDelete = () => {
        Swal.fire({
            title: "Do you want to delete this patient?",
            text: "You can't undo this action",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                deletePatient(id);
                Swal.fire("Deleted!", "Your date was deleted.", "success");
            }
        });
    };

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

            <div className="flex justify-between">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white font-bold uppercase rounded-md"
                    onClick={() => {
                        setPatient(patient);
                    }}
                >
                    Edit
                </button>

                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-800 text-white font-bold uppercase rounded-md"
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Paciente;
