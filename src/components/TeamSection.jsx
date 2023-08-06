import React from 'react';
import TeamMemberCard from './TeamMemberCard';

const teamMembers = [
  {
    name: 'John Doe',
    position: 'CEO',
    linkedinURL: 'https://www.linkedin.com/in/johndoe/',
    imageUrl: 'url-to-john-doe-image',
  },
  {
    name: 'John Doe',
    position: 'CEO',
    linkedinURL: 'https://www.linkedin.com/in/johndoe/',
    imageUrl: 'url-to-john-doe-image',
  },
  {
    name: 'John Doe',
    position: 'CEO',
    linkedinURL: 'https://www.linkedin.com/in/johndoe/',
    imageUrl: 'url-to-john-doe-image',
  },
  {
    name: 'John Doe',
    position: 'CEO',
    linkedinURL: 'https://www.linkedin.com/in/johndoe/',
    imageUrl: 'url-to-john-doe-image',
  },
  {
    name: 'John Doe',
    position: 'CEO',
    linkedinURL: 'https://www.linkedin.com/in/johndoe/',
    imageUrl: 'url-to-john-doe-image',
  },
  {
    name: 'John Doe',
    position: 'CEO',
    linkedinURL: 'https://www.linkedin.com/in/johndoe/',
    imageUrl: 'url-to-john-doe-image',
  },
  {
    name: 'John Doe',
    position: 'CEO',
    linkedinURL: 'https://www.linkedin.com/in/johndoe/',
    imageUrl: 'url-to-john-doe-image',
  },
  {
    name: 'John Doe',
    position: 'CEO',
    linkedinURL: 'https://www.linkedin.com/in/johndoe/',
    imageUrl: 'url-to-john-doe-image',
  },
  {
    name: 'John Doe',
    position: 'CEO',
    linkedinURL: 'https://www.linkedin.com/in/johndoe/',
    imageUrl: 'url-to-john-doe-image',
  },
  {
    name: 'John Doe',
    position: 'CEO',
    linkedinURL: 'https://www.linkedin.com/in/johndoe/',
    imageUrl: 'url-to-john-doe-image',
  },
  {
    name: 'John Doe',
    position: 'CEO',
    linkedinURL: 'https://www.linkedin.com/in/johndoe/',
    imageUrl: 'url-to-john-doe-image',
  },
  {
    name: 'John Doe',
    position: 'CEO',
    linkedinURL: 'https://www.linkedin.com/in/johndoe/',
    imageUrl: 'url-to-john-doe-image',
  },
  {
    name: 'John Doe',
    position: 'CEO',
    linkedinURL: 'https://www.linkedin.com/in/johndoe/',
    imageUrl: 'url-to-john-doe-image',
  }

  // Add more team members here...
];

const TeamSection = () => {
  return (
    <section className=" items-center container mx-auto my-8 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {teamMembers.map((member) => (
        <TeamMemberCard key={member.name} {...member} />
      ))}
    </section>
  );
};

export default TeamSection;
