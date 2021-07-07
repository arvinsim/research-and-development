import React from "react";
import Puppy200w from "./puppy-200w.png";
import Puppy800w from "./puppy-800w.png";

function PictureSrcSet() {
  return (
    <div>
      <div>Picture</div>
      <picture>
        <source media="(max-width: 376px)" srcSet={Puppy200w} />
        <source media="(min-width: 480px)" srcSet={Puppy800w} />
        <img src={Puppy800w} alt="Puppy" />
      </picture>
    </div>
  );
}

export default PictureSrcSet;
