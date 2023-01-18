import React from "react";
import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ patients, setPatients }) => {
    const [name, setName] = useState("");
    const [owner, setOwner] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [symp, setSymp] = useState("");

    const [error, setError] = useState(false);

    const idGeneration = () => {
        const random = Math.random().toString(36);
        console.log(random);
        return random;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //Form validation
        if ([name, owner, email, date, symp].includes("")) {
            setError(true);
            return;
        }
        //Delete the error if validation pass
        setError(false);

        //Patient object
        const patientObj = {
            name,
            owner,
            email,
            date,
            symp,
            id: idGeneration(),
        };

        setPatients([...patients, patientObj]);

        //Form Reset

        setName("");
        setOwner("");
        setEmail("");
        setDate("");
        setSymp("");
    };

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-center text-3xl">Patient's information</h2>

            <p className="text-lg mt-5 text-center mb-10 ">
                add patients and{" "}
                <span className="text-indigo-600 font-bold">administrate</span>
            </p>

            {/*Formulario*/}
            <form
                onSubmit={handleSubmit}
                action=""
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            >
                {error && <Error>All fields are required</Error>}

                {/*Pet name*/}
                <div className="mb-5">
                    <label
                        htmlFor="pet"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Pet's Name
                    </label>

                    <input
                        id="pet"
                        type="text"
                        placeholder="Pet's name"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                </div>
                {/*Owners name*/}
                <div className="mb-5">
                    <label
                        htmlFor="owner"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Owner's name
                    </label>

                    <input
                        id="owner"
                        type="text"
                        placeholder="Owner's name"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={owner}
                        onChange={(e) => {
                            setOwner(e.target.value);
                        }}
                    />
                </div>
                {/*Owner mail*/}
                <div className="mb-5">
                    <label
                        htmlFor="mail"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Owner's mail
                    </label>

                    <input
                        id="mail"
                        type="text"
                        placeholder="Owner's mail"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </div>
                {/*Date*/}
                <div className="mb-5">
                    <label
                        htmlFor="date"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Date
                    </label>

                    <input
                        id="date"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={date}
                        onChange={(e) => {
                            setDate(e.target.value);
                        }}
                    />
                </div>
                {/*Textarea*/}
                <div className="mb-5">
                    <label
                        htmlFor="Description"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Description
                    </label>

                    <textarea
                        name=""
                        id="Description"
                        cols="30"
                        rows="10"
                        className="border-2 w-full p-2 mt-2"
                        placeholder="Describe the symptoms"
                        value={symp}
                        onChange={(e) => {
                            setSymp(e.target.value);
                        }}
                    ></textarea>
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md shadow-lg hover:bg-indigo-700 cursor-pointer transition-all"
                    value="Send patient"
                />
            </form>
        </div>
    );
};

export default Formulario;
