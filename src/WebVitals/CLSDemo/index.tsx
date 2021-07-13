import React, { useState, useEffect } from "react";
import styled from "styled-components";
import random from "lodash/random";

// TODO: What should the props type be for the functional component props
// TODO: Add example of image placeholder
// TODO: Add context wrapper for CLS Demo state

function CLSDemo() {
  return (
    <Wrapper>
      <Selector>
        <select>
          <option>With CLS</option>
          <option>Little or no CLS</option>
        </select>
      </Selector>
      <Content>
        <Delay>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
            consequatur id ipsa placeat sunt, tempora tenetur unde voluptates.
            Accusamus amet ducimus inventore numquam odit placeat porro? Autem
            facilis libero reiciendis?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            assumenda at, aut consequatur consequuntur dolores, doloribus ea eos
            libero maiores natus nihil odit pariatur quaerat quasi, quia
            repudiandae unde voluptatum.
          </p>
        </Delay>
      </Content>
    </Wrapper>
  );
}

function Delay(props: { maxDelay?: number }) {
  const { maxDelay = 5000, children } = props;
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(function () {
      setShow(true);
    }, random(0, maxDelay));
  }, [maxDelay]);

  if (show) {
    return <Card>{children}</Card>;
  }

  return <Card>&nbsp;</Card>;
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: ". selector ." ". content ." ". . .";
`;

const Selector = styled.div`
  grid-area: selector;
`;
const Content = styled.div`
  grid-area: content;
`;

const Card = styled.div`
  background: #e2e2e2;
  min-height: 50vh;
`;

export default CLSDemo;
