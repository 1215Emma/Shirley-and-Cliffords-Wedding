import React, { useState } from 'react'
import { FiEdit } from 'react-icons/fi';

// Only shows the edit button if an admin is logged in
export const ShowEditor = (isLoggedIn, setIsEditable, isEditable) => {
  const [showEditOptions, setShowEditOptions] = useState(false);

    setIsEditable(!isEditable);
    return (
      <div className="edit-button-container">
        <button
          className="edit-button"
          type="submit"
          onClick={() => {
            setShowEditOptions(true)
          }}
        >
          <FiEdit />
        </button>
      </div>
    );
  
};
