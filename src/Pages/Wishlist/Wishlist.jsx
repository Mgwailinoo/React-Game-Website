import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromWishlist } from "../../Redux/WishlistReducer";
import { IconButton, useTheme, Typography } from "@mui/material";
import { Clear } from "@mui/icons-material";
import Lottie from "lottie-react";
import sadCartAnimation from "../../assets/33740-sad-empty-box.json";
import PageTransition from "../../PageTransition/PageTransition";
const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const theme = useTheme();
  console.log("Wishlist", wishlist);
  const dispatch = useDispatch();
  const handleRemoveFromWishlist = (index) => {
    dispatch(removeFromWishlist(index));
  };
  return (
    <>
      <PageTransition>
        {wishlist.length == 0 ? (
          <div>
            <div className="flex justify-center items-center w-full h-screen ">
              <Lottie
                animationData={sadCartAnimation}
                width={"50%"}
                height={"50%"}
              />
            </div>
            <h1 className=" text-[25px] text-pink-900 font-bold text-center -mt-16 pb-10 ">
              Your wishlist is lonely. Add some
              <Link
                to="/"
                className="underline text-cyan-600 flex-2 cursor-pointer"
              >
                {" "}
                games{" "}
              </Link>
              to keep it !!
            </h1>
          </div>
        ) : (
          <div className="w-full mx-auto py-16 md:py-24 ">
            <h1 className="text-center text-[35px] text-pink-900 font-bold">
              Your Favourite items ({wishlist.length})
            </h1>
            <div className=" w-[90%] mx-auto grid gap-3 md:grid-cols-3 lg:grid-cols-4  ">
              {wishlist.map((wishlist, index) => (
                <div className="relative mx-auto w-full max-w-sm md:w-[300px] pt-6 px-1 ">
                  <div className="rounded-lg">
                    <div className="relative flex h-60 justify-center overflow-hidden rounded-lg">
                      <Link
                        to={`/detailgame/${wishlist.id}`}
                        className="relative inline-block w-full transform transition-transform duration-300 ease-in-out"
                      >
                        <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                          <img
                            src={wishlist.background_image}
                            className="w-full h-[200px] object-cover"
                          />
                        </div>
                      </Link>
                      <div className="absolute bottom-0 mb-3 flex justify-center">
                        <div className="flex space-x-5 overflow-hidden rounded-lg bg-white/70 px-4 py-1 shadow">
                          <p>{wishlist.released}</p>
                        </div>
                      </div>
                      <span className="absolute left-0 top-0 z-10 ml-3 mt-3 inline-flex select-none rounded-lg bg-red-500 px-3 py-2 text-sm font-medium text-white">
                        {wishlist.slug}
                      </span>
                    </div>
                    <div className="">
                      <div className="mt-4 grid grid-cols-2">
                        <div className="flex items-center">
                          <div className="relative">
                            <h2
                              className="line-clamp-1 text-base font-medium text-gray-800 md:text-lg"
                              title={wishlist.name}
                            >
                              {wishlist.name}
                            </h2>
                            <p
                              className="mt-2 line-clamp-1 text-sm text-gray-800"
                              title="New York, NY 10004, United States"
                            >
                              {wishlist.tags.name}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-end">
                          <IconButton
                            onClick={() =>
                              handleRemoveFromWishlist({ id: wishlist.id })
                            }
                          >
                            <Clear />
                          </IconButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </PageTransition>
    </>
  );
};

export default Wishlist;
