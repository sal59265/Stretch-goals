import React, { useState, useEffect } from 'react';

const PartsDetail = (props) => {
  const [selectedPart, setPart] = useState('');
  console.log(selectedPart);
  useEffect(() => {
    let selectedPart = props.parts.find(
      (part) => part._id === props.match.params.id
    );
    setPart(selectedPart);
  }, []);

  return selectedPart ? (
    <div className="injuryDetail">
      <h1>{selectedPart.name}</h1>
      <div>
        {selectedPart.injuries.map((injury, index) => (
          <div key={index}>{injury}</div>
        ))}
      </div>
    </div>
  ) : null;
};

export default PartsDetail;
