import { useState } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [savedCandidates] = useState<Candidate[]>(
    JSON.parse(localStorage.getItem('savedCandidates') || '[]')
  );

  if (savedCandidates.length === 0) {
    return <h1>No candidates have been accepted</h1>;
  }

  return (
    <>
      <h1>Potential Candidates</h1>
      {savedCandidates.map((candidate, index) => (
        <div key={index}>
          <h2>{candidate.name} ({candidate.username})</h2>
          <img src={candidate.avatar_url} alt={candidate.name} width={100} />
          <p>Location: {candidate.location}</p>
          <p>Email: {candidate.email}</p>
          <p>Company: {candidate.company}</p>
          <p><a href={candidate.html_url} target="_blank">GitHub Profile</a></p>
        </div>
      ))}
    </>
  );
};

export default SavedCandidates;
