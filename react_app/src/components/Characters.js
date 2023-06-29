import { React, useState } from "react";
import axios from "axios";
import { uniqid } from "uniqid";
import Buttons from "./Buttons";
import {TextField} from "@mui/material";

function Characters() {
  const [characters, setCharacters] = useState("");
  const [character, setCharacter] = useState("");
  const [next, setNext] = useState("");
  const [previous, setPrevious] = useState("");
  const [textInput,setTextInput] = useState("");
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    // setCharacters('');
    setCharacter('');
    var lowerCase = e.target.value.toLowerCase();
    setTextInput(lowerCase);
    axios
    .get(`https://swapi.dev/api/people/?search=${textInput}`)
    .then(function (response) {
      // handle success
    //   if (response.data.previous != null) {
    //     setPrevious(response.data.previous);
    //   }

    //   if (response.data.next != null) {
    //     setNext(response.data.next);
    //   }
      setCount(response.data.count);

      setCharacters(response.data.results);
      // console.log(response.data);
      return response.data.results;
      // alert(response.data.results);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
      // console.log('finally');
    });
  }

  const handleCharacterDetail = async (url) => {
    console.log("detail");
    // nextPage();
    setCharacters("");
    // console.log();
    axios
      .get(url)
      .then(function (response) {
        // handle success
        if (response.data.previous != null) {
          setPrevious(response.data.previous);
        }

        if (response.data.next != null) {
          setNext(response.data.next);
        }

        setCount(response.data.count);
        setCharacter(response.data);
        console.log("nextData");
        console.log(response.data.results);
        console.log(characters);
        // return response.data.results;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
        // console.log('finally');
      });
  };

  const handlePrevious = async (previousPage) => {
    console.log("previous");
    // previousPage();
    setCharacters("");
    axios
      .get(previous)
      .then(function (response) {
        // handle success
        if (response.data.previous != null) {
          setPrevious(response.data.previous);
        }

        if (response.data.next != null) {
          setNext(response.data.next);
        }
        setCount(response.data.count);
        setCharacters(response.data.results);
        // console.log(response.data);
        return response.data.results;
        // alert(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
        // console.log('finally');
      });
  };

  const handleNext = async (nextPage) => {
    console.log("next");
    // nextPage();
    setCharacters("");
    // console.log();
    axios
      .get(next)
      .then(function (response) {
        // handle success
        if (response.data.previous != null) {
          setPrevious(response.data.previous);
        }

        if (response.data.next != null) {
          setNext(response.data.next);
        }

        setCount(response.data.count);
        setCharacters(response.data.results);
        console.log("nextData");
        console.log(response.data.results);
        console.log(characters);
        // return response.data.results;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
        // console.log('finally');
      });
  };

  const data = async () => {
    axios
      .get(`https://swapi.dev/api/people/?search=${textInput}`)
      .then(function (response) {
        // handle success
        if (response.data.previous != null) {
          setPrevious(response.data.previous);
        }

        if (response.data.next != null) {
          setNext(response.data.next);
        }

        setCount(response.data.count);
        setCharacters(response.data.results);
        // console.log(response.data);
        return response.data.results;
        // alert(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
        // console.log('finally');
      });
  };

  if (characters == "" && next == "") {
    data();
  }
  console.log(characters);
  if (characters != "" && character == "") {
    return (
        <div className="main">
        <h1>Welcome to the Star Wars UNIVERSE_</h1>
        <div className="search">
          <TextField
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            fullWidth
            label="Search"
          />
        </div>
        <ul>
          {characters.map((item) => (
            <li key={item.name} onClick={() => handleCharacterDetail(item.url)}>
              {item.name}
            </li>
          ))}
        </ul>

        <Buttons
          next={next}
          previous={previous}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          count={count}
        />
      </div>
    );
  }

  if (character != "") {
    return (
        <div className="main">
        <h1>Welcome to the Star Wars UNIVERSE_</h1>
        <div className="search">
          <TextField
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            fullWidth
            label="Search"
          />
        </div>
        <ul>
          {/* {character.map((item) => (
                <li key={item}>{item}</li>
              ))} */}
          <pre>
            <code>{JSON.stringify(character, null, 4)}</code>
          </pre>
        </ul>
      </div>
    );
  }
}

export default Characters;
