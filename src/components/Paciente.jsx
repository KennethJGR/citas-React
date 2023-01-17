import React from "react";

const Paciente = () => {
    return (
        <div className="bg-white shadow-md mx-5 my-5 px-5 py-10 rounded-xl">
            {/**name */}
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Pet's Name: <span className="font-normal normal-case">Dog</span>
            </p>
            {/**ownerName*/}
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Owner's Name: <span className="font-normal normal-case">Owner</span>
            </p>
            {/**mail */}
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Email: <span className="font-normal normal-case">Mail@mail.com</span>
            </p>
            {/**Date */}
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Date: <span className="font-normal normal-case">Date</span>
            </p>
            {/**sintomas */}
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Symptoms:{" "}
                <span className="font-normal normal-case">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam sequi
                    dolorum vitae laborum expedita magnam molestias molestiae animi quae
                    dolorem, ex obcaecati! Quae voluptates laudantium eveniet. Magnam non
                    eveniet ratione.
                </span>
            </p>
        </div>
    );
};

export default Paciente;
