import { useState } from "react";
import validator from "validator";

const Validator = () => {
  // Message to display
  const [errorMessage, setErrorMessage] = useState("");

  // Common words
  const commonWords = [
    "password",
    "123456",
    "qwerty",
    "letmein",
    "yourname",
    "birthdate",
    "admin",
    "user",
    "john",
    "jane",
    "doe",
  ];

  // Function to check pw for common words
  const containsCommonWord = (password) => {
    return commonWords.some((word) => password.toLowerCase().includes(word));
  };

  // Function to validate pw
  const validate = (password) => {
    if (password === "") {
      setErrorMessage("");
    } else if (containsCommonWord(password)) {
      setErrorMessage("Password contains a common word/phrase");
    } else if (
      validator.isStrongPassword(password, {
        minLength: 12,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("Is Strong Password");
    } else if (
      validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 0,
      })
    ) {
      setErrorMessage("Is Ok Password");
    } else {
      setErrorMessage("Is Weak Password");
    }
  };

  return (
    <form>
      <h3>Password Strength: {errorMessage}</h3>
      <div className="input-container">
        <label>Password: </label>
        <input onChange={(e) => validate(e.target.value)} type="text" />
      </div>
    </form>
  );
};

export default Validator;
