import React from 'react';

const TeamMemberCard = ({ name, position, linkedinURL, imageUrl }) => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-black p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow w-64 sm:w-56 md:w-48">
      <img className="w-32 h-32 rounded-full mx-auto mb-4" src={imageUrl} alt={name} />
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-gray-600">{position}</p>
      <a
        href={linkedinURL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 text-blue-600 hover:text-blue-800"
      >
        <i className="fab fa-linkedin mr-1"></i> LinkedIn
      </a>
    </div>
  );
};

export default TeamMemberCard;
