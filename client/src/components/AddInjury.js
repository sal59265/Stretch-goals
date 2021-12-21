import axios from 'axios';
import React, { useState } from 'react';

const AddInjury = () => {
  const [name, setName] = useState('');
  const [cause, setCause] = useState([]);
  const [symptom, setSymptom] = useState([]);
  const [diagnosis, setDiagnosis] = useState('');
  const [instruction, setInstruction] = useState([]);
  const [bodyPart, setBodyPart] = useState('');

  const addInjury = () => {
    axios
      .post('https:localhost:3001/injuries', {
        name: name,
        cause: cause,
        symptom: symptom,
        diagnosis: diagnosis,
        instruction: instruction,
        bodyPart: bodyPart
      })
      .then(() => {
        console.log('success');
      });
  };

  return (
    <div>
      <label>Name:</label>
      <input
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <label>Cause:</label>
      <input
        type="text"
        onChange={(event) => {
          setCause(event.target.value);
        }}
      />
      <label>Symptom:</label>
      <input
        type="text"
        onChange={(event) => {
          setSymptom(event.target.value);
        }}
      />
      <label>Diagnosis:</label>
      <input
        type="text"
        onChange={(event) => {
          setDiagnosis(event.target.value);
        }}
      />
      <label>Instruction:</label>
      <input
        type="text"
        onChange={(event) => {
          setInstruction(event.target.value);
        }}
      />
      <label>Body Part:</label>
      <input
        type="text"
        onChange={(event) => {
          setBodyPart(event.target.value);
        }}
      />
      <button onClick={addInjury}>Here</button>
    </div>
  );
};

export default AddInjury;
