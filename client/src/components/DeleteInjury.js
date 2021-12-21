import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DeleteInjury = (props) => {
  const [deleteInjury, setDeleteInjury] = useState(null);

  useEffect(() => {
    async function removeInjury(id) {
      await axios.delete(`http://localhost:3001/injuries/${id}`);
      setDeleteInjury('Delete successful');
    }

    removeInjury();
  }, []);

  return (
    <div>
      <div>this is Delete</div>
    </div>
  );
};

export default DeleteInjury;
