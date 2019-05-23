import "./GifList.css";
import React from "react";
import VidCard from "./VidCard";

const VidList = props => {
  const vids = props.vids.map(vid => {
    return (
      <VidCard key={vid.etag} vid={vid} onVideoSelect={props.onVideoSelect} />
    );
  });
  return (
    <div>
      <div className="ui attached gif-list" style={{ marginTop: "10px" }}>
        {vids}
      </div>
    </div>
  );
};
export default VidList;
