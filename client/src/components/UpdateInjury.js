import React, { useState } from 'react';
import axios from 'axios';

const UpdateInjury = (props) => {
  let _id = props.match.params.id;

  const [updateInjury, setUpdateInjury] = useState({
    cause: [],
    instruction: []
  });
  const updateNewInjury = async () => {
    return await axios.put(
      `http://localhost:3001/injuries/${_id}`,
      updateInjury
    );
  };

  const handleChange = (e) => {
    setUpdateInjury({ ...updateInjury, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateNewInjury();
    props.history.push(`/injuries/${_id}`);
  };

  return (
    <div className="newInjury">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Cause:</label>
          <input
            type="text"
            value={updateInjury.cause}
            onChange={handleChange}
            name={'cause'}
            placeholder={'Cause'}
          />
        </div>
        <div>
          <label>Instruction:</label>
          <input
            type="text"
            value={updateInjury.instruction}
            onChange={handleChange}
            name={'instruction'}
            placeholder={'Instruction'}
          />
        </div>
        <button className="addButton">Update your cause</button>
      </form>
    </div>
  );
};

export default UpdateInjury;
