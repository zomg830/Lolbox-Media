import "./GifList.css";
import React from "react";
import GifCard from "./GifCard";
import StackGrid, { transitions } from "react-stack-grid";
const { fade } = transitions;

const GifList = props => {
  const gifs = props.gifs.map(gif => {
    return <GifCard key={gif.id} gif={gif} />;
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
        {gifs}
      </StackGrid>
    </div>
  );
};
export default GifList;
