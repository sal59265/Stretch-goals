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
          <Link to="/updateinjury">
            <button>Update</button>
          </Link>
          <button onClick={() => removeInjury(_id)}>Delete</button>
        </div>
      ))}
      <div>
        If you don't see an injury that you have and want to share, please press
        this button
      </div>
      <Link to="/addinjury">
        <button>Post</button>
      </Link>
    </div>
  );
};

export default Injury;
