import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { GAME_DETAILS_URL_API, APP_KEY } from "../../Constants/api";
import Loading from "../../Components/Loading";
import { Star } from "@mui/icons-material";
import PageTransition from "../../PageTransition/PageTransition";

const DetailGame = () => {
  const id = useParams().id;
  const [loading, setLoading] = useState(false);
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${GAME_DETAILS_URL_API}${id}?key=${APP_KEY}`);
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await res.json();
        setGames(data);
        console.log("Detail", data);
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
    <PageTransition>
      <>
        <>
          {loading ? (
            <Loading />
          ) : (
            <>
              <div
                className="bg-gray-200 text-white font-sans h-screen w-full flex flex-row justify-center items-center "
                style={{
                  background: `linear-gradient(to right, #332e2e, #8c5c2b)`,
                }}
              >
                <div
                  className="card w-full mx-auto bg-white shadow-xl hover:shadow px-5"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${games.background_image_additional})`,
                  }}
                >
                  <img
                    className="w-[50%] mx-auto rounded-sm mt-10  shadow-lg"
                    src={games.background_image}
                    alt={games.name}
                  />
                  <div className="text-center mt-2 text-3xl font-medium">
                    {games.name}
                  </div>
                  <div className="text-center mt-2 font-light text-sm">
                    {games &&
                      games.developers?.map((dev) => (
                        <span key={dev.id}>{dev.name} </span>
                      ))}
                  </div>
                  <div className="text-center font-normal text-lg">Kerala</div>
                  <div className="px-6  mt-2 font-light text-sm text-justify">
                    {games.description_raw ? (
                      <span> {games.description_raw.substring(0, 450)} </span>
                    ) : (
                      <span>N/A</span>
                    )}
                  </div>
                </div>
              </div>

              <div
                className="flex flex-col lg:flex-row w-full lg:px-5 px-3 pt-5 -mt-[10]"
                style={{
                  background: `linear-gradient(to right, #332e2e, #8c5c2b)`,
                }}
              >
                <div className="flex-auto lg:w-4/6">
                  <p className="lg:text-lg text-md text-red-500  ">
                    Release Date:
                  </p>
                  <p className="lg:text-lg text-md text-gray-300 mb-1">
                    {games.released ? (
                      <span>{games.released}</span>
                    ) : (
                      <span>N/A</span>
                    )}
                  </p>
                  <p className="lg:text-lg text-md text-red-500  ">Genres: </p>
                  <p className="lg:text-lg text-md text-gray-300 mb-1">
                    {games.genres &&
                      games.genres.slice(0, 3).map((genre, index) => (
                        <NavLink key={genre.id} to={`/games?genre=${genre.id}`}>
                          <span>{(index ? ", " : "") + genre.name}</span>
                        </NavLink>
                      ))}
                  </p>
                  <p className="lg:text-lg text-md text-red-500 ">Platforms</p>
                  <p className="lg:text-lg text-md text-gray-300 mb-1">
                    {games.platforms ? (
                      games.platforms.map((platform, index) => (
                        <NavLink
                          key={platform.platform.id}
                          to={`/games?platforms=${platform.platform.id}`}
                        >
                          <span>
                            {(index ? ", " : "") + platform.platform.name}
                          </span>
                        </NavLink>
                      ))
                    ) : (
                      <span>N/A</span>
                    )}
                  </p>
                  <p className="lg:text-lg text-md text-red-500">
                    Related Tags:{" "}
                  </p>
                  <p className="lg:text-lg text-md text-gray-300 mb-1">
                    {games.tags ? (
                      games.tags.map((tag, index) => (
                        <NavLink key={tag.id} to={`/games?tags=${tag.id}`}>
                          <span>{(index ? ", " : "") + tag.name}</span>
                        </NavLink>
                      ))
                    ) : (
                      <span>N/A</span>
                    )}
                  </p>
                </div>
                <div className="flex-auto lg:w-2/6">
                  <p className="lg:text-lg text-md text-red-500  ">
                    Metascore:
                  </p>
                  <p className="lg:text-lg text-md text-gray-300 mb-1">
                    {games.metacritic ? (
                      <span>{games.metacritic}</span>
                    ) : (
                      <span>N/A</span>
                    )}
                  </p>

                  <p className="lg:text-lg text-md text-red-500  ">Website:</p>
                  <p className="lg:text-lg text-md text-gray-300 mb-1 underline">
                    {games.website ? (
                      <a href={games.website}>{games.website}</a>
                    ) : (
                      <span>N/A</span>
                    )}
                  </p>
                  <p className="lg:text-lg text-md text-red-500 ">Developers</p>
                  <p className="lg:text-lg text-md text-gray-300 mb-1">
                    {games.developers ? (
                      games.developers.map((dev, index) => (
                        <NavLink
                          key={dev.id}
                          to={`/games?developers=${dev.id}`}
                        >
                          <span>{(index ? ", " : "") + dev.name}</span>
                        </NavLink>
                      ))
                    ) : (
                      <span>N/A</span>
                    )}
                  </p>
                  <p className="lg:text-lg text-md text-red-500  ">
                    Publishers:
                  </p>
                  <p className="lg:text-lg text-md text-gray-300 mb-1">
                    {games.publishers && games.publishers.length > 0 ? (
                      games.publishers.map((pub, index) => (
                        <NavLink
                          key={pub.id}
                          to={`/games?publishers=${pub.id}`}
                        >
                          <span>{(index ? ", " : "") + pub.name}</span>
                        </NavLink>
                      ))
                    ) : (
                      <span>N/A</span>
                    )}
                  </p>
                  <p className="lg:text-lg text-md text-red-500  ">Stores: </p>
                  <p className="lg:text-lg text-md text-gray-300 mb-1">
                    {games.stores ? (
                      games.stores.map((store, index) => (
                        <NavLink
                          key={store.id}
                          to={`/games?stores=${store.store.id}`}
                        >
                          <span>{store.store.name}</span>
                        </NavLink>
                      ))
                    ) : (
                      <span>N/A</span>
                    )}
                  </p>
                </div>
              </div>
            </>
          )}
        </>
      </>
    </PageTransition>
  );
};

export default DetailGame;
