import React from 'react';

const AddInjury = (props) => {
  const handleSubmit = (e) => {
    props.addInjury(e);
    props.history.push('/injuries');
  };

  const newInjury = props.newInjury;
  console.log(newInjury);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={newInjury.name}
            onChange={props.handleChange}
            name={'name'}
            placeholder={'name'}
          />
        </div>
        <div>
          <label>Cause:</label>
          <input
            type="text"
            value={newInjury.cause}
            onChange={props.handleChange}
            name={'cause'}
            placeholder={'Cause'}
          />
        </div>
        <div>
          <label>Symptom:</label>
          <input
            type="text"
            value={newInjury.symptom}
            onChange={props.handleChange}
            name={'symptom'}
            placeholder={'Symptoms'}
          />
        </div>
        <div>
          <label>Diagnosis:</label>
          <input
            type="text"
            value={newInjury.diagnosis}
            onChange={props.handleChange}
            name={'diagnosis'}
            placeholder={'Diagnosis'}
          />
        </div>
        <div>
          <label>Instruction:</label>
          <input
            type="text"
            value={newInjury.instruction}
            onChange={props.handleChange}
            name={'instruction'}
            placeholder={'Instruction'}
          />
        </div>
        <div>
          <label>Body Part:</label>
          <input
            type="text"
            value={newInjury.bodypart}
            onChange={props.handleChange}
            name={'bodypart'}
            placeholder={'Body Part'}
          />
        </div>
        <button>Here</button>
      </form>
    </div>
  );
};

export default AddInjury;
