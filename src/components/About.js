import React from "react";

export default function About(props) {
  let myStyle = {
    color: props.mode === "light" ? "black" : "white",
    backgroundColor: props.mode === "light" ? "white" : "#2B3035",
    boxShadow: props.mode === "light" ? "0px 0px 5px #dcdcdc" : "",
  };

  return (
    <>
      <div className="about-wrapper" style={myStyle}>
        <h2 className="about-heading">About TextUtils</h2>
        <div className="about-data">
          <strong>Analyze your text</strong>
          <p>
            Textutils gives you a way to analyze your text quickly and
            efficiently. Be it word count, character count, coping text,
            removing extra spaces ande more...
          </p>
          <strong>Free to use</strong>
          <p>
            Textutils is a free character counting tool that provides instant
            character count and word count statistics for given text. Textutils
            reports the number of characters and words. Thus it is suitable for
            writing text with word/chracter limit.
          </p>
          <strong>Browser Compatible</strong>
          <p>
            This word counter software work with any web browser such as Chrome,
            Firefox, Safari, Internet Explorer, Opera. It suits to count
            characters in facebook, blogs book , excel document, pdf documents ,
            etc.
          </p>
        </div>
      </div>
    </>
  );
}
