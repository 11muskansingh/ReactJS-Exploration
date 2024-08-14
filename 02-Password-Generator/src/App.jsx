import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";
import "./index.css";

function App() {
  const [length, setlength] = useState(8);
  const [symbolsIncluded, setSymbolsIncluded] = useState(false);
  const [numbersIncluded, setnumbersIncluded] = useState(false);
  const [password, setpassword] = useState("");

  const passwordRef = useRef(null); //for taking reference of the password

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (symbolsIncluded) str += "!@#$%&*:;'/,.<>`~-";
    if (numbersIncluded) str += "0123456789";

    for (let i = 0; i < length; i++) {
      let idx = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(idx);
    }
    setpassword(pass);
  }, [length, symbolsIncluded, numbersIncluded]);

  const copyToClipboard = () => {
    passwordRef.current?.select(); //for selecting the password
    window.navigator.clipboard.writeText(password); //for copying the password
  };

  useEffect(() => {
    passwordGenerator();
  }, [length, symbolsIncluded, numbersIncluded]); //passwordGenerator() runs when any of these fields are changed
  return (
    <div className="main-container">
      <h1 className="title">Password Generator</h1>
      <div className="input-container">
        <input
          type="text"
          style={{ color: " orange" }}
          readOnly
          className="password-input"
          placeholder="Password"
          value={password}
          ref={passwordRef}
        />
        <button className="copy-button" onClick={copyToClipboard}>
          copy
        </button>
      </div>

      <div className="main-items">
        <div className="input-field">
          <input
            type="range"
            min={8}
            max={100}
            value={length}
            onChange={(e) => {
              setlength(e.target.value);
            }}
          />
          <label style={{ color: " orange" }}>Length:{length}</label>
        </div>
        <div className="numbers-check">
          <input
            type="checkbox"
            defaultChecked={numbersIncluded}
            value={numbersIncluded}
            onChange={() => {
              setnumbersIncluded((prev) => !prev);
            }}
          />
          <label style={{ color: " orange" }}>Numbers</label>
        </div>
        <div className="char-check">
          <input
            type="checkbox"
            defaultChecked={symbolsIncluded}
            onChange={() => {
              setSymbolsIncluded((prev) => !prev);
            }}
          />
          <label style={{ color: " orange" }}>Symbols</label>
        </div>
      </div>
    </div>
  );
}

export default App;
