/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import './app.css';

const App = function App() {
  const [binary, setBinary] = useState('0');
  const [decimal, setDecimal] = useState('0');
  const [errorBinary, setErrorBinary] = useState(false);
  const [borderClass, setBorderClass] = useState('');

  useEffect(() => {
    let checkBinary = binary.split('');
    let isBinary = true;
    checkBinary.forEach((data) => {
      if (!(data === '0' || data === '1')) {
        isBinary = false;
      }
    });
    setErrorBinary(!isBinary);
    if (isBinary) {
      let convertedValue = 0;
      let iFor = 1;
      checkBinary.forEach((data) => {
        convertedValue += (Number(data) * (2 ** (checkBinary.length - iFor)));
        iFor += 1;
      });
      setDecimal(convertedValue.toString());
      setBorderClass('');
    } else {
      setDecimal('Invalid Value');
      setBorderClass('redBorder');
    }
  }, [binary]);

  return (
    <main>
      <h1>Welcome to Bin2Dec Calculator </h1>
      {errorBinary && <p className="red">Error: Invalid binary number. Please use only 0 and 1.</p>}
      {!errorBinary && <br style={{ marginBottom: '16px' }} />}
      <div className="calculator">
        <div className="input">
          <label htmlFor="binaryNumber">Binary Number: </label>
          <br />
          <input type="text" className={borderClass} id="binaryNumber" maxLength={8} value={binary} onChange={(e) => setBinary(e.target.value)} />
        </div>
        <div className="input">
          <label htmlFor="decimalNumber">Decimal Number: </label>
          <br />
          <input type="text" id="decimalNumber" disabled value={decimal} />
        </div>
      </div>
      <p>
        {' '}
        Developed by:
        {' '}
        <span style={{ fontWeight: 'bold' }}><a href="https://github.com/RubensOriginal" target="_blank" rel="noreferrer" style={{ color: '#000000' }}>RubensOriginal</a></span>
        {' '}
      </p>
    </main>
  );
};

export default App;
