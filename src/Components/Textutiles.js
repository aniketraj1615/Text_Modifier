import React, { useState } from "react";

export default function Textutiles(props) {
  const handleUpClick = () => {
    console.log("convert to upper case" + text);
    const newText = text.toUpperCase();
    setText(newText);
    
    props.showAlert("Converted to upper case", "success");
  };
  const handleLowClick = () => {
    console.log("convert to upper case" + text);
    const newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", "success");
  };
  const handleCopyClick = () => {
    const copy = text;
    navigator.clipboard.writeText(copy);

    setText(text);
    props.showAlert("Clipboard is copied!", "success");
  };
  const handleClearClick = () => {
    console.log("convert to upper case" + text);
    const newText = "";
    setText(newText);
    props.showAlert("Text is cleared", "success");
  };

  const onChangeHnadle = (event) => {
    console.log("on change is hanlded");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <div className="mb-3">
          <label htmlFor="my-box" className="form-label">
            <h3>{props.heading}</h3>
          </label>
          <textarea
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#9a9a9a",
              color: props.mode === "dark" ? "white" : "black",
            }}
            className="form-control my-3"
            id="my-box"
            value={text}
            onChange={onChangeHnadle}
            rows="8"
          ></textarea>
          <button className="btn btn-primary " onClick={handleUpClick}>
            Convert to upper
          </button>
          <button className="btn btn-primary mx-2" onClick={handleLowClick}>
            Convert to lower
          </button>
          <button className="btn btn-primary mx-2" onClick={handleCopyClick}>
            Copy to clipboard
          </button>
          <button className="btn btn-primary mx-2" onClick={handleClearClick}>
            Clear Text
          </button>
        </div>
      </div>
      <div
        className="conatiner my-3"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h3
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          Text Summary
        </h3>
        <p
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <br />
        <h3
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          Preview
        </h3>
        <p
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          {text.length > 0
            ? text
            : "Enter something in above box to preview here"}
        </p>
      </div>
    </>
  );
}
