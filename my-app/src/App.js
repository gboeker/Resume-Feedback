import './App.css';
import {useState} from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState(null);

  function handleInputChange(event) {
    const value = event.target.value;
    setInputValue(value);

    // if (value.length < 1) {
    //   setInputError('no link submitted');
    // } else {
    //   setInputError(null);
    // }

  }

  function handleSubmit(event) {
    // event.preventDefault();
    // if (inputValue.length >= 1) {
    //   // submit form
    // } else {
    //   setInputError('no link submitted');
    // }
  }

  return (
    <>
    <div className="App">
    <h1>
      Youtube Video Summarizator
    </h1>
  
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" value={inputValue} onChange={handleInputChange} placeholder='Enter Link'/>
      </label>
      {inputError && <div style={{ color: 'red' }}>{inputError}</div>}
      <button type="submit">Submit</button>
    </form>
    </div>
    </>
  );
}

export default App;