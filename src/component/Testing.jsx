import React, { useState } from 'react';
const Testing = () => {
  const [selectedOption, setSelectedOption] = useState(''); // Initialize state to keep track of the selected option
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  console.log('tusahr')
  return (
    <div>
      <h1>Select an option:</h1>
      {options.map((option, index) => (
        <div key={index}>
          <label>
            <input
              type="radio"
              name="options" // All radio buttons should share the same name
              value={option}
              checked={selectedOption === option} // Check the radio button if it matches the selected option
              onChange={handleChange} // Update state when selection changes
            />
            {option}
          </label>
        </div>
      ))}
      <p>Selected option: {selectedOption}</p> {/* Display the selected option */}
    </div>
  );
};
export default Testing;