import React, { useState } from 'react';
import axios from 'axios';

const UpdateInjury = (props) => {
  let _id = props.match.params.id;

  const [updateInjury, setUpdateInjury] = useState({
    cause: []
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
    <div className="updateInjury">
      <form onSubmit={handleSubmit}>
        {/* <div className="values">
            <label>Name:</label>
            <input
              type="text"
              value={updateInjury.name}
              onChange={handleChange}
              name={'name'}
              placeholder={'name'}
            />
          </div> */}
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
        {/* <div>
            <label>Symptom:</label>
            <input
              type="text"
              value={updateInjury.symptom}
              onChange={handleChange}
              name={'symptom'}
              placeholder={'Symptoms'}
            />
          </div>
          <div>
            <label>Diagnosis:</label>
            <input
              type="text"
              value={updateInjury.diagnosis}
              onChange={handleChange}
              name={'diagnosis'}
              placeholder={'Diagnosis'}
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
          <div>
            <label>Body Part:</label>
            <input
              type="text"
              value={updateInjury.bodyPart}
              name={'bodypart'}
              placeholder={'Body Part'}
            />
          </div> */}
        <button className="addButton">Update your cause</button>
      </form>
    </div>
  );
};

export default UpdateInjury;
