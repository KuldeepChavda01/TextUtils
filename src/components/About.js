import React from "react";

export default function About(props) {
  return (
    <>
      <div
        className={`about-wrapper ${
          props.mode === "light" ? "box-light" : "box-dark"
        }`}
      >
        <h1 className="about-heading">About TextUtils</h1>
        <div className="about-data">
          <strong>Analyze your text</strong>
          <p>
            Textutils gives you a way to analyze your text quickly and
            efficiently. Be it word count, character count, coping text,
            removing extra spaces and manipulate text in way you want.
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
            characters in facebook, blogs book, excel document, pdf documents,
            etc.
          </p>
        </div>
      </div>
    </>
  );
}
