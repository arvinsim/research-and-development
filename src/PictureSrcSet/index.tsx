import React from "react";

function PictureSrcSet() {
  return (
    <div>
      <div>
        <h1>SrcSet</h1>
        <img
          width="800"
          height="533"
          src="./puppy-800w.png"
          srcSet="./puppy-480w.png 480w, ./puppy-800w.png 800w"
          alt="SrcSet Puppy with balloons"
        />
      </div>
      <div>
        <h1>Picture</h1>
        <picture>
          <source media="(max-width: 799px)" srcSet="./puppy-480w.png" />
          <source media="(min-width: 800px)" srcSet="./puppy-800w.png" />
          <img
            src="/src/PictureSrcSet/puppy-800w.png"
            alt="Picture Puppy with balloons"
          />
        </picture>
      </div>
    </div>
  );
}

export default PictureSrcSet;
