import React, { useState } from "react";
import "./textform.css";
import  Toast  from "react-hot-toast";

const Textform = (props) => {
  const [text, setText] = useState("write the text here...");
 

  function Upper() {
    let newtext = text.toUpperCase();
    setText(newtext);
    Toast.success('Converted to UpperCase');
  }
  function Lower() {
    let newtext = text.toLowerCase();
    setText(newtext);
    Toast.success('Converted to LowerCase');
  }
  function Clear() {
    setText("");
    Toast.success('Cleared');
  }
  function Sentence() {
    let char = text.charAt(0).toUpperCase();
    setText(char + text.slice(1));
    Toast.success('Converted the first character to Uppercase');
  }
  function space() {
    let newtext = text.replace(/\s+/g, " ").trim();
    setText(newtext);
    Toast.success('Extra space has been removed');

  }

  function handleOnChange(event) {
    setText(event.target.value);
  }

  
  let word=text.trim().split(' ');
  let sentence = text.split(".");
  let wps = word.length / (sentence.length - 1);
  let cpw = text.length / word.length;

  return (
    <div
      className="container"
      style={{ backgroundColor: props.mode === "light" ? "#F6AE2D" : "black" }}
    >
      <div className="main max-w-[80%]">
        <h1
          className="text-3xl"
          style={{ color: props.mode === "light" ? "black" : "white" }}
        >
          {props.heading}
        </h1>
        <div className="form">
          <textarea
            onChange={handleOnChange}
            value={text}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
          ></textarea>
        </div>
        <div className="buttons">
          <button
            type="button"
            className="btn btn-black"
            onClick={Upper}
            style={{
              backgroundColor: props.mode === "light" ? "black" : "#F6AE2D",
              color: props.mode === "light" ? "white" : "black",
            }}
          >
            Uppercase
          </button>
          <button
            type="button"
            className="btn btn-black"
            onClick={Lower}
            style={{
              backgroundColor: props.mode === "light" ? "black" : "#F6AE2D",
              color: props.mode === "light" ? "white" : "black",
            }}
          >
            lowercase
          </button>
          <button
            type="button"
            className="btn btn-black"
            onClick={Clear}
            style={{
              backgroundColor: props.mode === "light" ? "black" : "#F6AE2D",
              color: props.mode === "light" ? "white" : "black",
            }}
          >
            Clear
          </button>
          <button
            type="button"
            className="btn btn-black"
            onClick={Sentence}
            style={{
              backgroundColor: props.mode === "light" ? "black" : "#F6AE2D",
              color: props.mode === "light" ? "white" : "black",
            }}
          >
            Sentence
          </button>
          <button
            type="button"
            className="btn btn-black"
            onClick={space}
            style={{
              backgroundColor: props.mode === "light" ? "black" : "#F6AE2D",
              color: props.mode === "light" ? "white" : "black",
            }}
          >
            Remove space
          </button>
        </div>

        <div className="summary">
          <h3 className="text-2xl mb-2">Text Summary :</h3>
          <h5>Words Count : {word.length}</h5>
          <h5>Characters Count : {text.length}</h5>
          <h5>Minutes Read : {word.length * 0.008}</h5>
          <h5>Number of Sentences : {sentence.length - 1}</h5>
          <h5>Characters per word : {cpw}</h5>
          <h5>Words per Sentence : {wps}</h5>
        </div>
        <div className="preview">
          <h3 className="mb-2 text-xl">Preview</h3>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Textform;
