import React from "react";

const Error = ({ children }) => {
    return (
        <div className="bg-red-700 text-white text-center uppercase font-bold rounded-md p-3 mb-3">
            <p>{children}</p>
        </div>
    );
};

export default Error;
