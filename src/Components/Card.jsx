import React from "react";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector, useDispatch } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../Redux/WishlistReducer";
const CardData = ({ game }) => {
  const dispatch = useDispatch();
  const isInWishlist = useSelector((state) =>
    state.wishlist.some((item) => item.id === game.id)
  );

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(game));
  };

  const handleRemoveFromWishlist = () => {
    dispatch(removeFromWishlist(game));
  };
  return (
    <>
      <div className="relative mx-auto w-full max-w-sm md:w-[300px] pt-6 px-1 ">
        <div className="rounded-lg">
          <div className="relative flex h-60 justify-center overflow-hidden rounded-lg">
            <Link
              to={`/detailgame/${game.id}`}
              className="relative inline-block w-full transform transition-transform duration-300 ease-in-out"
            >
              <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                <img
                  src={game.background_image}
                  className="w-full h-[200px] object-cover"
                />
              </div>
            </Link>
            <div className="absolute bottom-0 mb-3 flex justify-center">
              <div className="flex space-x-5 overflow-hidden rounded-lg bg-white/70 px-4 py-1 shadow">
                <p>{game.released}</p>
              </div>
            </div>
            <span className="absolute left-0 top-0 z-10 ml-3 mt-3 inline-flex select-none rounded-lg bg-red-500 px-3 py-2 text-sm font-medium text-white">
              {game.slug}
            </span>
          </div>
          <div className="">
            <div className="mt-4 grid grid-cols-2">
              <div className="flex items-center">
                <div className="relative">
                  <h2
                    className="line-clamp-1 text-base font-medium text-gray-800 md:text-lg"
                    title={game.name}
                  >
                    {game.name}
                  </h2>
                  <p
                    className="mt-2 line-clamp-1 text-sm text-gray-800"
                    title="New York, NY 10004, United States"
                  >
                    {game.tags.name}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-end">
                <p className="text-primary inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                  <StarIcon sx={{ color: "gold" }} />
                  <span className="text-lg ml-1">{game.rating}</span>
                </p>
              </div>
            </div>

            <div className="mt-2 grid grid-cols-2 grid-rows-2 gap-4 border-b border-t border-gray-200 pb-3 pt-3">
              <p className="flex items-center text-gray-800 xl:flex-row xl:items-center">
                <VisibilityIcon />
                <span className="xl:mt-0 ml-1">
                  reviews {game.reviews_count}
                </span>
              </p>
              {isInWishlist ? (
                <button
                  onClick={handleRemoveFromWishlist}
                  className="flex items-center text-gray-800"
                >
                  <FavoriteIcon sx={{ color: "red" }} />
                  <span className="ml-1">Remove from wishlist</span>
                </button>
              ) : (
                <button
                  onClick={handleAddToWishlist}
                  className="flex items-center text-gray-800"
                >
                  <FavoriteIcon />
                  <span className="ml-1">Add to wishlist</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardData;
