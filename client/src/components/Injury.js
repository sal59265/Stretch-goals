import React from 'react';

const Injury = ({ injuries, history }) => {
  const showInjuries = (id) => {
    history.push(`/Injuries/${id}`);
  };
  return (
    <div className="injury">
      {injuries.map(({ _id, name }) => (
        <div className="injury-card" onClick={() => showInjuries(_id)}>
          <h3>{name}</h3>
        </div>
      ))}
    </div>
  );
};
//work on the connection first
export default Injury;
