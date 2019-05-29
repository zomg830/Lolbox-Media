import "./GifList.css";
import React from "react";
import LolboxCard from "./LolboxCard";

const LolboxList = props => {
  console.log(props.lolbox);
  // return <div />;
  const items = props.lolbox.map(item => {
    return <LolboxCard key={item.id} item={item} />;
  });
  return (
    <div>
      <div className="ui attached gif-list" style={{ marginTop: "10px" }}>
        {items}
      </div>
    </div>
  );
};
export default LolboxList;
