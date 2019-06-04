import "./GifList.css";
import React from "react";
import PicCard from "./PicCard";
import StackGrid, { transitions } from "react-stack-grid";
const { fade } = transitions;

const PicList = props => {
  const pics = props.pics.map(pic => {
    return <PicCard key={pic.id} pic={pic} />;
  });

  return (
    <div style={{ marginTop: "10px" }}>
      <StackGrid
        columnWidth={250}
        monitorImagesLoaded={true}
        appear={fade.appear}
        appeared={fade.appeared}
        enter={fade.enter}
        entered={fade.entered}
        leaved={fade.leaved}
      >
        {pics}
      </StackGrid>
    </div>
  );
};
export default PicList;
