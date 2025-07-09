import React, { useState } from "react";

export default function TextForm(props) {
  const { mode, showAlert } = props;
  const [text, setText] = useState("");

  const themeLight = {
    backgroundColor: "white",
    color: "black",
  };

  const themeDark = {
    backgroundColor: "#2B3035",
    color: "white",
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpperCase = () => {
    const newText = text.toUpperCase();
    setText(newText);
    showAlert("Converted to uppercase", "success");
  };

  const handleLowerCase = () => {
    const newText = text.toLowerCase();
    setText(newText);
    showAlert("Converted to lowercase", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    showAlert("Copied to clipboard", "success");
  };

  const handleClear = () => {
    const newText = "";
    setText(newText);
    showAlert("Text cleared", "success");
  };

  const handleRemoveSpaces = () => {
    const newText = text.trim().split(/[ ]+/).join(" ");
    setText(newText);
    showAlert("Extra spaces removed", "success");
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
    showAlert("Converted to capitalized", "success");
  };

  return (
    <>
      <div className="container">
        <h1 className={`text-${mode === "light" ? "dark" : "light"} mb-2`}>
          Text to Manipulate
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control text-box"
            id="myBox"
            rows="8"
            onChange={handleOnChange}
            value={text}
            style={mode === "light" ? themeLight : themeDark}
          ></textarea>
        </div>
        <div className="btn-wrapper d-flex justify-content-center flex-wrap">
          <button
            className={`btn btn-${
              mode === "light" ? "primary" : "secondary"
            } mx-2 my-1`}
            onClick={handleUpperCase}
            disabled={text.length === 0}
          >
            Convert to uppercase
          </button>
          <button
            className={`btn btn-${
              mode === "light" ? "primary" : "secondary"
            } mx-2 my-1`}
            onClick={handleCapitalize}
            disabled={text.length === 0}
          >
            Convert to capitalized
          </button>
          <button
            className={`btn btn-${
              mode === "light" ? "primary" : "secondary"
            } mx-2 my-1`}
            onClick={handleRemoveSpaces}
            disabled={text.length === 0}
          >
            Remove Extra Spaces
          </button>
          <button
            className={`btn btn-${
              mode === "light" ? "primary" : "secondary"
            } mx-2 my-1`}
            onClick={handleLowerCase}
            disabled={text.length === 0}
          >
            Convert to lowercase
          </button>
          <button
            className={`btn btn-${
              mode === "light" ? "primary" : "secondary"
            } mx-2 my-1`}
            onClick={handleCopy}
            disabled={text.length === 0}
          >
            Copy Text
          </button>
          <button
            className={`btn btn-${
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
        className={`container my-3 text-${mode === "light" ? "dark" : "light"}`}
      >
        <h1>Your Text Summary</h1>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes to read
        </p>
        <h2>Preview</h2>
        <p>{text.length === 0 ? "Nothing to preview" : text}</p>
      </div>
    </>
  );
}
