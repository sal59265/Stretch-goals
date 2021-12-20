import React from 'react';

const Parts = ({ parts, history }) => {
  const showParts = (id) => {
    history.push(`/Parts/${id}`);
  };

  return (
    <div className="parts">
      {parts.map(({ _id, name }) => (
        <div className="part-card" onClick={() => showParts(_id)}>
          <h3>{name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Parts;
