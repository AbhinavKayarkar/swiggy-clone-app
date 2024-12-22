import React from "react";
import { IMG_URL } from "../../../utils/constants";
import star from "../../assets/imgs/star-rating.png";

const RestaurantCard = (props) => {
  return (
    <>
      <div className="h-34 w-60 border-spacing-1 my-5 mx-2">
        <img className="h-60 w-56 aspect-auto" src={`${IMG_URL}` + `${props.item?.info?.cloudinaryImageId}`} />
        <div>
          <h3 className="font-semibold text-xl">{props.item?.info?.name?.substring(0, 25)}</h3>
          <span className="flex">
            <span>
              <img className="w-6" src={star} />
            </span>
            <span>
              {props.item?.info?.avgRating} <span>•</span>
              <span className="font-semibold ml-1">{props.item?.info?.sla?.slaString}</span>
            </span>
          </span>
          <p>{props.item?.info?.cuisines?.join(", ")?.substring(0, 21)}</p>
          <p>{props.item?.info?.locality}</p>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
