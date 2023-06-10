import React, { useState, useEffect } from "react";
import { GAME_API_ROOT, APP_KEY } from "../../Constants/api";

import GameList from "../../Components/GameList";
import { Skeleton, Typography, useTheme } from "@mui/material";

const PlatformGame = () => {
  const [gameList, setGameList] = useState([]);

  const [selectedTag, setSelectedTag] = useState(1);

  const [loading, setLoading] = useState(false);

  const theme = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      const endpoints = [
        {
          key: "gameList",
          url: `${GAME_API_ROOT}games?dates=2001-01-01,2023-12-31&ordering=-added&platforms=${selectedTag}&key=${APP_KEY}`,
        },
      ];

      try {
        setLoading(true);
        const responses = await Promise.all(
          endpoints.map((endpoint) =>
            fetch(endpoint.url).then((response) => response.json())
          )
        );

        const data = responses.reduce((acc, response, index) => {
          const { key } = endpoints[index];
          acc[key] = response.results;
          return acc;
        }, {});

        setGameList(data.gameList);
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedTag]);

  const handleTagClick = (event) => {
    const tag = event.target.value;
    setSelectedTag(tag === "" ? null : parseInt(tag));
  };

  console.log("GameList", gameList);

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
          Multi platform
        </Typography>
        <div className="w-[40%]  ml-auto">
          <label
            htmlFor="years"
            className="md:block mb-2 hidden  text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Select platform to search game
          </label>
          <select
            id="years"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={selectedTag || ""}
            onChange={handleTagClick}
          >
            <option value="">Choose a platform</option>
            <option value="4">PC</option>
            <option value="187">PlayStation 5</option>
            <option value="1">Xbox One</option>
            <option value="18">PlayStation 4</option>
            <option value="186">Xbox Series S/X</option>
            <option value="7">Nintendo Switch</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
            {gameList.map((game) => (
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
            {gameList.map((game) => (
              <GameList key={game.id} game={game} loading={loading} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PlatformGame;
