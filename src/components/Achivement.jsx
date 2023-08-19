import React from "react";

const Achievement = ({ image, description }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <img className="w-screen h-screemn mb-4" src={image} alt="Achievement" />
            <p className="text-gray-700">{description}</p>
        </div>
    );
};

export default Achievement;
