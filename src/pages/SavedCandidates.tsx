import { useState, useEffect } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const storedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    setSavedCandidates(storedCandidates);
  }, []);

  if (savedCandidates.length === 0) {
    return <h1 className="no-candidates">No candidates have been accepted</h1>;
  }

  return (
    <div className="saved-candidates">
      <h1>Potential Candidates</h1>
      {savedCandidates.map((candidate, index) => (
        <div key={index} className="candidate-card">
          <h2>{candidate.name} ({candidate.username})</h2>
          <img src={candidate.avatar_url} alt={candidate.name} width={100} />
          <p>Location: {candidate.location || 'Not provided'}</p>
          <p>Email: {candidate.email || 'Not provided'}</p>
          <p>Company: {candidate.company || 'Not provided'}</p>
          <p><a href={candidate.html_url} target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
        </div>
      ))}
    </div>
  );
};

export default SavedCandidates;

