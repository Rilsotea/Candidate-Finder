import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>(
    JSON.parse(localStorage.getItem('savedCandidates') || '[]')
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    searchGithub()
      .then((data: Candidate[]) => {
        setCandidates(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching candidates:", error);
        setLoading(false);
      });
  }, []);

  const saveCandidate = () => {
    if (candidates[currentIndex]) {
      const updatedSaved = [...savedCandidates, candidates[currentIndex]];
      setSavedCandidates(updatedSaved);
      localStorage.setItem('savedCandidates', JSON.stringify(updatedSaved));
    }
    nextCandidate();
  };

  const nextCandidate = () => {
    setCurrentIndex(prevIndex => prevIndex + 1);
  };

  if (loading) {
    return <h1>Loading candidates...</h1>;
  }

  if (currentIndex >= candidates.length) {
    return <h1>No more candidates available</h1>;
  }

  const candidate = candidates[currentIndex];

  return (
    <div>
      <h1>Candidate Search</h1>;
      <h1>{candidate.name} ({candidate.username})</h1>
      <img src={candidate.avatar_url} alt={candidate.name} width={100} />
      <p>Location: {candidate.location}</p>
      <p>Email: {candidate.email}</p>
      <p>Company: {candidate.company}</p>
      <p><a href={candidate.html_url} target="_blank">GitHub Profile</a></p>
      <button onClick={saveCandidate}>+</button>
      <button onClick={nextCandidate}>-</button>
    </div>
  );
};

export default CandidateSearch;

