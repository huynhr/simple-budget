import React, { useState } from 'react';
import './App.css';

const options = ['Groceries', 'Rent', 'Internet', 'Entertainment'];

function App(): JSX.Element {
  // Create the count state.
  const [formState, setFormState] = useState({
    amount: '',
    category: '',
    where: '',
  });

  /**
   * Create a page that allows you to enter budget details
   * Should have a cost
   * Allows you to select from a list of categories
   * Enter description
   * Location
   * Enter a date
   * Submit
   */
  const handleSubmit = (e: { preventDefault: () => void }): void => {
    e.preventDefault();

    console.log({ formState });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          min="0"
          name="amount"
          step="0.01"
          placeholder="0"
          value={formState.amount}
          onChange={(e) => {
            setFormState((prevState) => ({
              ...prevState,
              amount: e.target.value,
            }));
          }}
        />
        <label htmlFor="where">Where?</label>
        <label htmlFor="categories">Category</label>
        <select
          placeholder={options[0]}
          value={formState.category}
          onChange={(e) => {
            setFormState((prevState) => ({
              ...prevState,
              category: e.target.value,
            }));
          }}
        >
          {options.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="where"
          value={formState.where}
          onChange={(e) => {
            setFormState((prevState) => ({
              ...prevState,
              where: e.target.value,
            }));
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
