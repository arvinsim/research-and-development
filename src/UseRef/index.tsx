import React, { useRef, useState } from "react";

export function UseRef() {
  const childRef = useRef(null);
  const onButtonClick = () => {
    console.log(childRef.current);
  };

  return (
    <div>
      <ChildComponent ref={childRef} />
      <button onClick={onButtonClick}>On Button Click</button>
    </div>
  );
}

function ChildComponent(props: any) {
  const age = useState(10);
  return <div {...props}>Age: {age}</div>;
}
