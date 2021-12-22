import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Injury = ({ injuries, history }) => {
  const showInjuries = (id) => {
    history.push(`/Injuries/${id}`);
  };

  const [deleteInjury, setDeleteInjury] = useState();
  const removeInjury = async (id) => {
    await axios.delete(`http://localhost:3001/injuries/${id}`);
    setDeleteInjury();
    window.location.reload();
  };

  return (
    <div className="injury">
      {injuries.map(({ _id, name, index }) => (
        <div key={index}>
          <div className="injury-card" onClick={() => showInjuries(_id)}>
            <h3>{name}</h3>
          </div>
          <Link to={`/updateinjury/${_id}`}>
            <button className="twoButton">Update</button>
          </Link>
          <button className="twoButton" onClick={() => removeInjury(_id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Injury;
