import React from "react";

import { Link } from "react-router-dom";

import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector, useDispatch } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../Redux/WishlistReducer";

const GameList = ({ game, loading }) => {
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
    <div className="relative mx-auto w-full max-w-sm md:w-[250px] lg:w-[270px] px-1">
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
                alt={game.name}
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
        <div className="mt-2 grid grid-cols-2 gap-4 border-b border-t border-gray-200 pb-3 pt-3">
          <p className="flex items-center text-gray-800">
            <VisibilityIcon />
            <span className="ml-1">reviews {game.reviews_count}</span>
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
  );
};

export default GameList;
