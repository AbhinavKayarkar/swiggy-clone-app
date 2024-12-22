import React from "react";
import { IMG_URL } from "../../../utils/constants";
import star from "../../assets/imgs/star-rating.png";

const RestaurantCard = (props) => {
  return (
    <>
      <div className="card" key={props.item.info.id}>
        <img src={`${IMG_URL}` + `${props.item?.info?.cloudinaryImageId}`} />
        <div className="card-text-content">
          <h3 style={{ marginBottom: "-1px" }}>
            {props.item?.info?.name?.substring(0, 25)}
          </h3>
          <p className="parent-rating">
            <img className="rating-img" src={star} />
            <span>
              {props.item?.info?.avgRating}{" "}
              <span style={{ paddingLeft: "6px" }}>•</span>
              <b style={{ paddingLeft: "6px" }}>{props.item?.info?.sla?.slaString}</b>
            </span>
          </p>
          <p style={{ margin: "0px" }}>
            {props.item?.info?.cuisines?.join(", ")?.substring(0, 21)}
          </p>
          <p style={{ margin: "0px" }}>{props.item?.info?.locality}</p>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
