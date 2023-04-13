import React from "react";

function DescCards(props) {
  const { imageUrl } = props;
  return (
    <div className="flex flex-col justify-center items-center">
      <img className="h-[200px]" src={imageUrl} alt="desc logo"></img>
      <div> some more content here</div>
    </div>
  );
}

export default DescCards;
