import React from "react";
import { CDN_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/redux/slices/cart";

const ItemsList = ({ items = [], onClick = null }) => {
  const dispatch = useDispatch();

  const handleAddCart = (cartItem) => {
    dispatch(addItem(cartItem));
  };

  return items?.map((item) => {
    const { name, description, imageId } = item?.card?.info || {};
    const itemPrice =
      item?.card?.info?.price || item?.card?.info?.defaultPrice || {};

    return (
      <div
        onClick={() => {
          if(typeof onClick == 'function'){
            onClick();
          }
          else{
            handleAddCart(item);
          }
        }}
        className="mb-10 flex border-1 py-4 px-2"
      >
        <div className="w-full">
          <div className="w-full flex flex-row">
            <h2 className="font-sans text-lg">{name}</h2>
            <h2 className="font-sans text-lg font-semibold ml-1">
              - ₹ {itemPrice / 100}
            </h2>
          </div>
          <h3 className="mt-2 text-xs leading-4">{description}</h3>
        </div>

        <div className="flex justify-end  w-[20%]">
          <img className="h-auto rounded-md" src={`${CDN_URL}/${imageId}`} />
        </div>
      </div>
    );
  });
};

export default ItemsList;
