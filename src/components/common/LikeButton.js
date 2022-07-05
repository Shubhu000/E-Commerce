import React, { useEffect, useState } from "react";
import Heart1Jpg from "../../assets/images/icons/icon-heart-01.png";
import Heart2Jpg from "../../assets/images/icons/icon-heart-02.png";
import swal from "sweetalert";
import { useSelector, useDispatch } from "react-redux";
import { addToFavourite, removeFromFavourite } from "../../store/actions";

export const LikeButton = ({ id }) => {
  const { Favourite } = useSelector((state) => state.Shop);
  const dispatch = useDispatch();
  const [addToFavouriteItem, setAddToFavouriteItem] = useState();
  useEffect(() => {
    setAddToFavouriteItem(window.localStorage.getItem("is_Favourite"));
    localStorage.getItem("product_id");
  }, []);

  const handleAddToFavorite = () => {
    if (addToFavouriteItem) {
      setAddToFavouriteItem(!addToFavouriteItem);
      window.localStorage.setItem("is_Favourite", !addToFavouriteItem);
      dispatch(addToFavourite({ id: id.id, title: id.title, image: id.image }));
      localStorage.setItem("product_id", id.id);
      swal("FAVOURITE", "is added to wishlist !", "success");
    } else {
      dispatch(removeFromFavourite({ id: id.id }));
      setAddToFavouriteItem(!addToFavouriteItem);
    }
  };
  console.log(addToFavouriteItem);
  return (
    <button
      className=" dis-block pos-relative js-addwish-b2"
      onClick={handleAddToFavorite}
    >
      {!addToFavouriteItem ? (
        <img
          className="icon-heart2 dis-block trans-04 selected"
          src={Heart2Jpg}
          alt="ICON"
        />
      ) : (
        <img
          className="icon-heart1 dis-block trans-04 "
          src={Heart1Jpg}
          alt="ICON"
        />
      )}
    </button>
  );
};
