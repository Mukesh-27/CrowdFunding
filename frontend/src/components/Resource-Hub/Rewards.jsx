import React, { useState } from 'react';

const Rewards = () => {
  const [items, setItems] = useState([{ details: '', includedIn: '', image: null }]);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (index, event) => {
    const values = [...items];
    values[index][event.target.name] = event.target.value;
    setItems(values);
  };

  const handleImageUpload = (index, event) => {
    const values = [...items];
    values[index].image = event.target.files[0];
    setItems(values);
  };

  const addItem = () => {
    setItems([...items, { details: '', includedIn: '', image: null }]);
  };

  const removeItem = (index) => {
    const values = [...items];
    values.splice(index, 1);
    setItems(values);
  };

  const validateItems = () => {
    for (const item of items) {
      if (!item.details || !item.includedIn) {
        setError('Please fill in all fields for each item.');
        return false;
      }
    }
    setError('');
    return true;
  };

  const handleSubmit = () => {
    if (validateItems()) {
      // Logic to handle saving rewards
      const formData = new FormData();
      items.forEach((item, index) => {
        formData.append(`item_${index}_details`, item.details);
        formData.append(`item_${index}_includedIn`, item.includedIn);
        if (item.image) {
          formData.append(`item_${index}_image`, item.image);
        }
      });

      // Simulate saving to a backend or local storage
      console.log('Saving rewards:', formData);
      setSuccessMessage('Rewards saved successfully!');
      setItems([{ details: '', includedIn: '', image: null }]); // Reset items
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Create Your Rewards</h1>
      <div className="flex space-x-4 mb-8">
        <button className="py-2 px-4 bg-gray-200 rounded-lg text-gray-700 font-semibold">Items</button>
        <button className="py-2 px-4 bg-white rounded-lg text-gray-700 font-semibold hover:bg-gray-100">Reward tiers</button>
        <button className="py-2 px-4 bg-white rounded-lg text-gray-700 font-semibold hover:bg-gray-100">Add-ons</button>
      </div>
      <p className="text-lg text-gray-600 mb-8">
        Including items in your rewards and add-ons makes it easy for backers to understand and compare your offerings. An item can be anything you plan to offer your backers. Some examples include playing cards, a digital copy of a book, a ticket to a play, or even a thank-you in your documentary.
      </p>
      <p className="text-teal-500 mb-4 cursor-pointer">
        <a href="#">Learn about creating items</a>
      </p>

      {error && <p className="text-red-500 mb-4">{error}</p>}
      {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Items</h2>
          <button
            onClick={addItem}
            className="flex items-center bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-200"
          >
            <span className="mr-2">+</span> New Item
          </button>
        </div>

        {items.map((item, index) => (
          <div key={index} className="mb-6 border-b pb-4">
            <div className="flex mb-4">
              <input
                type="text"
                name="details"
                placeholder="Item Details"
                value={item.details}
                onChange={(event) => handleInputChange(index, event)}
                className="border border-gray-300 rounded-lg p-4 w-1/2 mr-2 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
                required
              />
              <input
                type="text"
                name="includedIn"
                placeholder="Included in (e.g., Reward Tier)"
                value={item.includedIn}
                onChange={(event) => handleInputChange(index, event)}
                className="border border-gray-300 rounded-lg p-4 w-1/2 ml-2 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
                required
              />
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={(event) => handleImageUpload(index, event)}
              className="border border-gray-300 rounded-lg p-4 w-full mb-2 cursor-pointer"
            />
            <p className="text-gray-500 text-sm mb-4">
              Upload an image for this item (optional).
            </p>
            <button
              onClick={() => removeItem(index)}
              className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition duration-200"
            >
              Remove Item
            </button>
          </div>
        ))}

        {items.length === 0 && (
          <p className="text-gray-500">No items added yet.</p>
        )}
      </div>

      <button
        onClick={handleSubmit}
        className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition duration-300"
      >
        Save Rewards
      </button>
    </div>
  );
};

export default Rewards;
