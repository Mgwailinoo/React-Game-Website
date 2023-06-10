import React, { useState, useEffect } from "react";
import { GAME_API_ROOT, APP_KEY } from "../../Constants/api";
import { Skeleton, useTheme, Typography } from "@mui/material";

import GameList from "../../Components/GameList";

const YearlyGame = () => {
  const [searchByYearlyGame, setSearchByYearlyGame] = useState([]);
  const [selectedYear, setSelectedYear] = useState(2000);
  const [loading, setLoading] = useState(false);

  const theme = useTheme();

  const years = [];

  for (let year = 2000; year <= 2023; year++) {
    years.push(year);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const url = `${GAME_API_ROOT}games?dates=${selectedYear}-01-01,${selectedYear}-12-31&ordering=-added&key=${APP_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        setSearchByYearlyGame(data.results);
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (selectedYear) {
      fetchData();
    }
  }, [selectedYear]);

  const handleYearChange = (event) => {
    const year = event.target.value;
    setSelectedYear(year === "" ? null : parseInt(year));
  };

  return (
    <div className="w-[90%] mx-auto md:py-24">
      <div className="md:flex md:justify-between md:items-center">
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            color: theme.palette.secondary.main,
            padding: "10px 0",
            textAlign: "center",
          }}
        >
          (2000 - 2023) Games
        </Typography>
        <div className="w-[40%] ml-auto">
          <label
            htmlFor="years"
            className="md:block mb-2 hidden text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Select a year to search game
          </label>
          <select
            id="years"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={selectedYear || ""}
            onChange={handleYearChange}
          >
            <option value="">Choose a year</option>
            {years.map((year) => (
              <option value={year}>{year}</option>
            ))}
          </select>
        </div>
      </div>
      {loading ? (
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
            {searchByYearlyGame.map((game) => (
              <div
                key={game.id}
                className="relative mx-auto w-full max-w-sm md:w-[250px] lg:w-[270px]"
              >
                <Skeleton variant="rectangular" width="100%" height={200} />
                <Skeleton variant="text" width="70%" height={24} />
                <Skeleton variant="text" width="50%" height={24} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="container mx-auto">
          <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
            {searchByYearlyGame.map((game) => (
              <GameList key={game.id} game={game} loading={loading} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default YearlyGame;
