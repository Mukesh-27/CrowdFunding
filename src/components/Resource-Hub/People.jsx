import React, { useState } from 'react';

const People = () => {
  const [collaborators, setCollaborators] = useState([{ name: '', role: '' }]);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (index, event) => {
    const values = [...collaborators];
    values[index][event.target.name] = event.target.value;
    setCollaborators(values);
  };

  const addCollaborator = () => {
    setCollaborators([...collaborators, { name: '', role: '' }]);
  };

  const removeCollaborator = (index) => {
    const values = [...collaborators];
    values.splice(index, 1);
    setCollaborators(values);
  };

  const validateCollaborators = () => {
    for (const collaborator of collaborators) {
      if (!collaborator.name || !collaborator.role) {
        setError('Please fill in all fields for each collaborator.');
        return false;
      }
    }
    setError('');
    return true;
  };

  const handleSubmit = () => {
    if (validateCollaborators()) {
      // Logic to handle saving collaborators
      alert('Collaborators saved successfully!');
      setSuccessMessage('Your collaborators have been saved!');
      // Reset collaborators if needed
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">People</h1>
      <p className="text-lg text-gray-600 mb-8">
        Add collaborators to your project. This helps backers know who is involved and their roles.
      </p>

      {error && <p className="text-red-500 mb-4">{error}</p>}
      {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Collaborators</h2>
        {collaborators.map((collaborator, index) => (
          <div key={index} className="flex mb-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={collaborator.name}
              onChange={(event) => handleInputChange(index, event)}
              className="border border-gray-300 rounded-lg p-4 w-1/2 mr-2 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
              required
            />
            <input
              type="text"
              name="role"
              placeholder="Role"
              value={collaborator.role}
              onChange={(event) => handleInputChange(index, event)}
              className="border border-gray-300 rounded-lg p-4 w-1/2 ml-2 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
              required
            />
            <button
              onClick={() => removeCollaborator(index)}
              className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition duration-200 ml-2"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          onClick={addCollaborator}
          className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-200"
        >
          Add Collaborator
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Project Team</h2>
        <p className="text-gray-600 mb-4">
          Ensure that everyone involved in your project is listed here. This transparency builds trust with your backers.
        </p>
        <p className="text-gray-500 mb-4">
          You can add or remove collaborators at any time before launching your project.
        </p>
        <button
          onClick={handleSubmit}
          className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition duration-300"
        >
          Save Collaborators
        </button>
      </div>
    </div>
  );
};

export default People;
