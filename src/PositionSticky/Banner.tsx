import React, { useState } from "react";
import styled from "styled-components";

export function Banner() {
  const [visible, setVisible] = useState(true);
  return (
    <BannerContainer visible={visible}>
      <p>This is the Banner</p>
      <p>Click on the button below to close this!</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus
        libero, porta at vehicula sed, bibendum eget velit. Sed non enim nec
        magna facilisis placerat. Vivamus sit amet scelerisque tellus. Aliquam
        viverra volutpat euismod. Vestibulum et sapien ullamcorper, tincidunt
        velit pretium, tristique ante. Proin nec rhoncus sem, sit amet semper
        nisi. Vivamus nec venenatis nunc, et egestas mauris. Sed id risus
        dapibus, cursus sem vitae, sagittis magna. Phasellus elit elit, auctor
        porttitor pharetra et, consectetur in leo. Maecenas at massa ut neque
        rhoncus dictum eget a leo. Maecenas risus urna, cursus at ex ac,
        suscipit vulputate erat. Fusce id lorem dictum, congue lacus id,
        condimentum lectus.
      </p>
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
  max-height: 0;
  transition: max-height 1000ms ease;

  /* WORKS BUT HAS A WEIRD PAUSE AT THE BEGINNING */
  ${(props): string => {
    if (props.visible) {
      return `
        max-height: 100vh;
        `;
    } else {
      return `
      max-height: 0;
      `;
    }
  }}
`;
