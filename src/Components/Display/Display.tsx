import React from "react";

interface DisplayProps {
    responseValue: number;
    random: number;
}

const Display = (props: DisplayProps) => {


  return (
    <>
      <span>0</span>
      <p>{props.random}</p>
    </>
  );
};

export default Display;
// turnary oparator

// {/* <span>
//   {randomNumber > 0.5 ? "Lczba większa od 0.5" : "Liczba mniejsza od 0.5"}
// </span>; */}