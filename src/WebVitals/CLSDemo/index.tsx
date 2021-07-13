import React, { useState, useEffect } from "react";
import styled from "styled-components";
import random from "lodash/random";

// TODO: Layout the items properly in the grid
// TODO: What should the props type be for the functional component props
// TODO: Add example of image placeholder

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
          <Card>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur consequatur id ipsa placeat sunt, tempora tenetur unde
              voluptates. Accusamus amet ducimus inventore numquam odit placeat
              porro? Autem facilis libero reiciendis?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              assumenda at, aut consequatur consequuntur dolores, doloribus ea
              eos libero maiores natus nihil odit pariatur quaerat quasi, quia
              repudiandae unde voluptatum.
            </p>
          </Card>
        </Delay>
      </Content>
    </Wrapper>
  );
}

function Delay(props: { maxDelay?: number }) {
  const { maxDelay = 5000 } = props;
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(function () {
      setShow(true);
    }, random(0, maxDelay));
  }, [maxDelay]);

  if (show) {
    return props.children;
  }

  return <Card>&nbsp;</Card>;
}

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Selector = styled.div``;
const Content = styled.div``;

const Card = styled.div`
  background: #e2e2e2;
  min-height: 50vh;
`;

export default CLSDemo;
