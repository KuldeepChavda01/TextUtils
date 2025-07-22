import React, { useState } from "react";

export default function TextForm(props) {
  const { mode, showAlert } = props;
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpperCase = () => {
    const newText = text.toUpperCase();
    setText(newText);
    showAlert("Converted to uppercase", "Success");
  };

  const handleLowerCase = () => {
    const newText = text.toLowerCase();
    setText(newText);
    showAlert("Converted to lowercase", "Success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    showAlert("Copied to clipboard", "Success");
  };

  const handleClear = () => {
    const newText = "";
    setText(newText);
    showAlert("Text cleared", "Success");
  };

  const handleRemoveSpaces = () => {
    const newText = text.trim().split(/[ ]+/).join(" ");
    setText(newText);
    showAlert("Extra spaces removed", "Success");
  };

  const handleCapitalize = () => {
    const capitalizedText = text
      .split(" ")
      .map((word) => {
        const lowerText = word.toLowerCase();
        return lowerText.charAt(0).toUpperCase() + lowerText.slice(1);
      })
      .join(" ");
    setText(capitalizedText);
    showAlert("Converted to capitalized", "Success");
  };

  const words = text.split(/\s+/).filter((word) => {
    return word.length !== 0;
  });

  const timeInMinutes = words.length * 0.008;

  const seconds = Math.round(timeInMinutes * 60);

  const minutes = Math.floor(seconds / 60);

  return (
    <>
      <h1
        className={`heading text-${mode === "light" ? "secondary" : "light"}`}
      >
        Text to Manipulate
      </h1>
      <div className="mb-3">
        <textarea
          className={`text-box box-${mode === "light" ? "light" : "dark"}`}
          rows="8"
          onChange={handleOnChange}
          value={text}
        ></textarea>
      </div>
      <div className={`btn-wrapper box-${mode === "light" ? "light" : "dark"}`}>
        <div className="conversions">
          <button
            className={`btn cBtn btn-${
              mode === "light" ? "primary" : "secondary"
            } mx-2 my-1`}
            onClick={handleUpperCase}
            disabled={text.length === 0}
          >
            Convert to uppercase
          </button>
          <button
            className={`btn cBtn btn-${
              mode === "light" ? "primary" : "secondary"
            } mx-2 my-1`}
            onClick={handleLowerCase}
            disabled={text.length === 0}
          >
            Convert to lowercase
          </button>
          <button
            className={`btn cBtn btn-${
              mode === "light" ? "primary" : "secondary"
            } mx-2 my-1`}
            onClick={handleCapitalize}
            disabled={text.length === 0}
          >
            Convert to capitalized
          </button>
          <button
            className={`btn cBtn btn-${
              mode === "light" ? "primary" : "secondary"
            } mx-2 my-1`}
            onClick={handleRemoveSpaces}
            disabled={text.length === 0}
          >
            Remove extra spaces
          </button>
        </div>
        <div className="functionals">
          <button
            className={`btn fBtn btn-${
              mode === "light" ? "primary" : "secondary"
            } mx-2 my-1`}
            onClick={handleCopy}
            disabled={text.length === 0}
          >
            Copy Text
          </button>
          <button
            className={`btn fBtn btn-${
              mode === "light" ? "primary" : "secondary"
            } mx-2 my-1`}
            onClick={handleClear}
            disabled={text.length === 0}
          >
            Clear Text
          </button>
        </div>
      </div>
      <div
        className={`details text-${mode === "light" ? "secondary" : "light"}`}
      >
        <div className={`summary box-${mode === "light" ? "light" : "dark"}`}>
          <h2>Your Text Summary</h2>
          <p>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            words and {text.length} characters
          </p>
          <p>
            {minutes} Min {seconds} Sec to read
          </p>
        </div>
        <div className={`preview box-${mode === "light" ? "light" : "dark"}`}>
          <h2>Preview</h2>
          <p>{text.length === 0 ? "Nothing to preview" : text}</p>
        </div>
      </div>
    </>
  );
}
