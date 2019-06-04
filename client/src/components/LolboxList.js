import "./GifList.css";
import React from "react";
import LolboxCard from "./LolboxCard";
import StackGrid, { transitions } from "react-stack-grid";
const { fade } = transitions;

const LolboxList = props => {
  const items = props.lolbox.map(item => {
    return <LolboxCard key={item.id} item={item} />;
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
        {items}
      </StackGrid>
    </div>
  );
};
export default LolboxList;
