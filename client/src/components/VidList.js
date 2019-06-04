import "./GifList.css";
import React from "react";
import VidCard from "./VidCard";
import StackGrid, { transitions } from "react-stack-grid";
const { fade } = transitions;

const VidList = props => {
  const vids = props.vids.map(vid => {
    return (
      <VidCard key={vid.etag} vid={vid} onVideoSelect={props.onVideoSelect} />
    );
  });
  return (
    <div style={{ marginTop: "10px" }}>
      <StackGrid
        columnWidth={250}
        appearDelay={100}
        monitorImagesLoaded={true}
        appear={fade.appear}
        appeared={fade.appeared}
        enter={fade.enter}
        entered={fade.entered}
        leaved={fade.leaved}
      >
        {vids}
      </StackGrid>
    </div>
  );
};
export default VidList;
