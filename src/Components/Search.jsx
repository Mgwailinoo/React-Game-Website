import React, { useState } from "react";
import CardData from "./Card";
const Search = () => {
  const [searchGame, setSearchGame] = useState("");
  const [gameResults, setGameResults] = useState([]);

  const handleChange = (e) => {
    setSearchGame(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let slug = searchGame.split(" ").join("-").toLowerCase();
  };

  return <div></div>;
};

export default Search;
