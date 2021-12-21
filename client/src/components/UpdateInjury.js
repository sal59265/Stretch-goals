import axios from 'axios';
import React, { useState } from 'react';

const UpdateInjury = (props) => {
  const [newIjury, setNewInjury] = useState({
    name: '',
    cause: [],
    symptom: [],
    diagnosis: '',
    instruction: [],
    bodyPart: ''
  });

  // const updateInjury = async () => {
  //   const res = await axios.put('http://localhost/updateinjury:id')
  //   console.log(res.data)
  //   setNewInjury(res.data)
  return (
    <div>
      {/* <input
        type="text"
        placeholder="Possible cause"
        onChange={(event) => {
          setNewCause(event.target.value);
        }}
      /> */}
      <button
      // onClick={() => {
      //   updateCause(id);
      // }}
      >
        Update
      </button>
      Update Injury Here
    </div>
  );
};

export default UpdateInjury;
