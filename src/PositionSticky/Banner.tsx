import React, { useState } from "react";
import styled from "styled-components";

export function Banner() {
  const [visible, setVisible] = useState(true);

  return (
    <BannerContainer visible={visible}>
      <p>This is the Banner</p>
      <p>Click on the button below to close this!</p>
      <button
        onClick={() => {
          setVisible(false);
        }}
      >
        Dismiss
      </button>
    </BannerContainer>
  );
}

const BannerContainer = styled.div<{ visible: boolean }>`
  overflow: hidden;

  ${(props): string => {
    if (props.visible === false) {
      return `height: 0; transition: height 1000ms ease;`;
    }
    return "";
  }}
`;
