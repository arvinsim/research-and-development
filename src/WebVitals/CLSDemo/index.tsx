import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import random from "lodash/random";
import { useLocation } from "react-router-dom";
import qs from "query-string";

import AbstractImage from "./abstract.png";

export default function CLSDemo() {
  return (
    <Wrapper>
      <Content>
        <ContentWrapper>
          <Delay>
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
          </Delay>
          <div>
            <img src={AbstractImage} alt={"Abstract Image"} />
            <p>
              Pass <Code>cls=true</Code> in the query param to enable CLS. Any
              other value will disable CLS.
            </p>
            <p>
              This is the initial content and image that is being shown in the
              page. Note that if
            </p>
          </div>
        </ContentWrapper>
      </Content>
    </Wrapper>
  );
}

const Delay: React.FunctionComponent<{ maxDelay?: number }> = (props) => {
  const { maxDelay = 5000, children } = props;
  const location = useLocation();
  const { cls } = qs.parse(location.search);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setLoading(false);
    }, random(0, maxDelay));
  }, [maxDelay]);

  return (
    <Card loading={loading} isCLS={cls === "true"}>
      {children}
    </Card>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: ". . ." ". content ." ". . .";
`;

const Content = styled.div`
  grid-area: content;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2fr 1fr;
  grid-gap: 16px;
`;

const Card = styled.div<{ readonly isCLS: boolean; readonly loading: boolean }>`
  background: #e2e2e2;
  border-radius: 4px;
  color: black;
  ${(props) => {
    const { loading, isCLS } = props;
    if (loading && isCLS) {
      return `display: none;`;
    }
    if (loading && !isCLS) {
      return `color: transparent`;
    }
  }}
`;

const Code = styled.code`
  background: black;
  color: gold;
  border-radius: 4px;
  padding: 2px;
`;
