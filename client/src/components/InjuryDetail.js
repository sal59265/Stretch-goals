import React, { useState, useEffect } from 'react';

const InjuryDetail = (props) => {
  const [selectedInjury, setInjury] = useState('');

  useEffect(() => {
    let selectedInjury = props.injuries.find(
      (injury) => injury._id === props.match.params.id
    );
    setInjury(selectedInjury);
  }, []);

  return selectedInjury ? (
    <div className="injuryDetail">
      <h1>{selectedInjury.name}</h1>
      <div>
        {selectedInjury.cause.map((cause) => (
          <div>{cause}</div>
        ))}
      </div>
      <div>
        {selectedInjury.symptom.map((symptom) => (
          <div>{symptom}</div>
        ))}
      </div>
      <div>{selectedInjury.diagnosis}</div>
      <div>
        {selectedInjury.instruction.map((instruction) => (
          <div>{instruction}</div>
        ))}
      </div>
    </div>
  ) : null;
};

export default InjuryDetail;
