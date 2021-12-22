import axios from 'axios';
import React from 'react';

const UpdateInjury = async (props) => {
  const updateInjury = async (e) => {
    return await axios.put('http://localhost/updateinjury:id');
  };

  const handleChange = (e) => {};

  return (
    <div className="updateInjury">
      <form>
        <div className="values">
          <label>Name:</label>
          <input type="text" name={'name'} placeholder={'name'} />
        </div>
        <div>
          <label>Cause:</label>
          <input type="text" name={'cause'} placeholder={'Cause'} />
        </div>
        <div>
          <label>Symptom:</label>
          <input type="text" name={'symptom'} placeholder={'Symptoms'} />
        </div>
        <div>
          <label>Diagnosis:</label>
          <input type="text" name={'diagnosis'} placeholder={'Diagnosis'} />
        </div>
        <div>
          <label>Instruction:</label>
          <input type="text" name={'instruction'} placeholder={'Instruction'} />
        </div>
        <div>
          <label>Body Part:</label>
          <input type="text" name={'bodypart'} placeholder={'Body Part'} />
        </div>
        <button className="addButton">Post your injury</button>
      </form>
    </div>
  );
};

export default UpdateInjury;
