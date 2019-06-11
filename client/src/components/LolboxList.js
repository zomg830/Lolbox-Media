import "./GifList.css";
import React from "react";
import LolboxCard from "./LolboxCard";
import StackGrid, { transitions } from "react-stack-grid";
const { scaleDown } = transitions;

const LolboxList = props => {
  const items = props.lolbox.map(item => {
    return <LolboxCard key={item.id} item={item} />;
  });
  return (
    <div style={{ marginTop: "10px" }}>
      <StackGrid
        columnWidth={250}
        monitorImagesLoaded={true}
        appear={scaleDown.appear}
        appeared={scaleDown.appeared}
        enter={scaleDown.enter}
        entered={scaleDown.entered}
        leaved={scaleDown.leaved}
      >
        {items}
      </StackGrid>
    </div>
  );
};
export default LolboxList;
