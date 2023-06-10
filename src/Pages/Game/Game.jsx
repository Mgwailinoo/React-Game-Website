import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { Rawgapi } from "../../Rawg";
import CardData from "../../Components/Card";
import { Typography, Box } from "@mui/material";
import Loading from "../../Components/Loading";
import Slide from "../../Components/Slide";
const Game = () => {
  const [loading, setLoading] = useState(false);
  const [games, setGames] = useState([]);
  const theme = useTheme();
  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://api.rawg.io/api/games?key=${Rawgapi}`);
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await res.json();
        setGames(data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  console.log(games);

  return (
    <>
      <div className="min-h-screen bg-white flex justify-center items-center md:pt-20 ">
        <div className="container p-10 mx-auto bg-gray-100 rounded-xl">
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              color: theme.palette.secondary.main,
              padding: "10px 0",
              textAlign: "center",
            }}
          >
            Best Games Ever
          </Typography>
          <Box sx={{ width: "100%" }}>
            {loading ? (
              <Loading />
            ) : (
              // <div className="flex w-full md:flex-col-3 flex-wrap gap-3 justify-center items-center">
              <>
                <Slide>
                  {games.map((game) => (
                    <CardData key={game.id} game={game} loading={loading} />
                  ))}
                </Slide>
              </>

              // </div>
            )}
          </Box>
        </div>
      </div>
    </>
  );
};

export default Game;
