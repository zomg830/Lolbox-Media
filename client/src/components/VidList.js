import "./GifList.css";
import React from "react";
import VidCard from "./VidCard";
import StackGrid, { transitions } from "react-stack-grid";
const { scaleDown } = transitions;

const VidList = props => {
  const vids = props.vids.map(vid => {
    return (
      <VidCard key={vid.etag} vid={vid} onVideoSelect={props.onVideoSelect} />
    );
  });
  return (
    <div style={{ marginTop: "10px" }}>
      <StackGrid
        monitorImagesLoaded={true}
        appear={scaleDown.appear}
        appeared={scaleDown.appeared}
        enter={scaleDown.enter}
        entered={scaleDown.entered}
        leaved={scaleDown.leaved}
      >
        {vids}
      </StackGrid>
    </div>
  );
};
export default VidList;
