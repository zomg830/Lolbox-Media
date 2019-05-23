import "./GifList.css";
import React from "react";
import GifCard from "./GifCard";

const GifList = props => {
  const gifs = props.gifs.map(gif => {
    return <GifCard key={gif.id} gif={gif} />;
  });
  return (
    <div>
      <div className="ui gif-list" style={{ marginTop: "10px" }}>
        {gifs}
      </div>
    </div>
  );
};
export default GifList;
