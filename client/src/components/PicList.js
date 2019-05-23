import "./GifList.css";
import React from "react";
import PicCard from "./PicCard";

const PicList = props => {
  const pics = props.pics.map(pic => {
    return <PicCard key={pic.id} pic={pic} />;
  });
  return (
    <div>
      <div className="ui attached gif-list" style={{ marginTop: "10px" }}>
        {pics}
      </div>
    </div>
  );
};
export default PicList;
