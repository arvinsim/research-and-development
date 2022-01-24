import React from "react";
import styled from "styled-components";
import { Banner } from "./Banner";


function PositionSticky() {
  const paragraphs = []
    for (let i = 0; i < 100; i++) {
      paragraphs.push(<ParagraphText />)
    }

    return (
    <Container>
      <TopContainer>
        <TopNavbar>This is the top navbar</TopNavbar>
        <Banner />
      </TopContainer>
      <BottomFixed>This is bottom fixed</BottomFixed>
      <Content>
        {paragraphs}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  background: black;
`;

const TopContainer = styled.div`
  color: white;
  background: gray;
  position: sticky;
  top: 0;
  width: 100%;
`;

const TopNavbar = styled.div`
  color: white;
  background: #3d3dbb;
  height: 100px;
`;

const Content = styled.div`
  color: white;
  background: #2fb22f;
  height: 100vh;
  width: 100%;
`;

const BottomFixed = styled.div`
  position: fixed;
  bottom: 0;
  height: 200px;
  background: black;
  color: white;
  font-size: 2em;
  width: 100%;
`

function ParagraphText() {
  return <p>
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
}

export default PositionSticky;
