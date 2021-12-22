import React, { useState } from 'react';
import axios from 'axios';

const AddInjury = (props) => {
  const [newInjury, setNewInjury] = useState({
    name: '',
    cause: [],
    symptom: [],
    diagnosis: '',
    instruction: [],
    bodyPart: ''
  });
  const addInjury = async (e) => {
    return await axios.post('http://localhost:3001/injuries', newInjury);
  };

  const handleChange = (e) => {
    setNewInjury({ ...newInjury, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    addInjury();
    props.history.push('/injuries');
  };

  return (
    <div className="newInjury" key="createNewInjury">
      <form onSubmit={handleSubmit}>
        <div className="values">
          <label>Name:</label>
          <input
            type="text"
            value={newInjury.name}
            onChange={handleChange}
            name={'name'}
            placeholder={'name'}
          />
        </div>
        <div>
          <label>Cause:</label>
          <input
            type="text"
            value={newInjury.cause}
            onChange={handleChange}
            name={'cause'}
            placeholder={'Cause'}
          />
        </div>
        <div>
          <label>Symptom:</label>
          <input
            type="text"
            value={newInjury.symptom}
            onChange={handleChange}
            name={'symptom'}
            placeholder={'Symptoms'}
          />
        </div>
        <div>
          <label>Diagnosis:</label>
          <input
            type="text"
            value={newInjury.diagnosis}
            onChange={handleChange}
            name={'diagnosis'}
            placeholder={'Diagnosis'}
          />
        </div>
        <div>
          <label>Instruction:</label>
          <input
            type="text"
            value={newInjury.instruction}
            onChange={handleChange}
            name={'instruction'}
            placeholder={'Instruction'}
          />
        </div>
        <div>
          <label>Body Part:</label>
          <input
            type="text"
            value={newInjury.bodypart}
            onChange={handleChange}
            name={'bodypart'}
            placeholder={'Body Part'}
          />
        </div>
        <button className="addButton">Post your injury</button>
      </form>
    </div>
  );
};

export default AddInjury;
