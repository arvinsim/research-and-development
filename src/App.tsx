import React, { Suspense } from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const CreatePerson = React.lazy(() => import("./CreatePerson"));
const UseRef = React.lazy(() => import("./UseRef"));
const TranslatedText = React.lazy(() => import("./TranslatedText"));
const ReactSpring = React.lazy(() => import("./ReactSpring"));
const ReactSpringParallax = React.lazy(() => import("./ReactSpringParallax"));
const UploadFile = React.lazy(() => import("./UploadFile"));

const ZipMultipleFilesDownload = React.lazy(
  () => import("./ZipMultipleFilesDownload")
);
const PictureSrcSet = React.lazy(() => import("./PictureSrcSet"));
const AmountDateAreaChart = React.lazy(() => import("./AmountDateAreaChart"));
const Streaming = React.lazy(() => import("./Streaming"));
const PhotographyMap = React.lazy(() => import("./PhotographyMap"));
const D3Playground = React.lazy(() => import("./D3Playground"));
const CLSDemo = React.lazy(() => import("./WebVitals/CLSDemo"));
const ContextTest = React.lazy(() => import("./ContextTest"));
const ReducerTest = React.lazy(() => import("./ReducerTest"));
const SimpleDisplay = React.lazy(() => import("./SimpleDisplay"));

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <AppGrid>
            <div>
              <h1>Links</h1>
              <ul>
                <li>
                  <Link to={"/upload-file"}>Upload File</Link>
                </li>
                <li>
                  <Link to={"/streaming"}>Streaming</Link>
                </li>
                <li>
                  <Link to={"/photography-map"}>Photography Map</Link>
                </li>
                <li>
                  <Link to={"/simple-display"}>Simple Display</Link>
                </li>
              </ul>
            </div>
            <Switch>
              <Route exact path={"/react-hook-form"}>
                <CreatePerson />
              </Route>
              <Route exact path={"/use-ref"}>
                <UseRef />
              </Route>
              <Route exact path={"/translated"}>
                <TranslatedText />
              </Route>
              <Route exact path={"/react-spring"}>
                <ReactSpring />
              </Route>
              <Route exact path={"/react-spring/parallax"}>
                <ReactSpringParallax />
              </Route>
              <Route exact path={"/zip"}>
                <ZipMultipleFilesDownload />
              </Route>
              <Route exact path={"/picture"}>
                <PictureSrcSet />
              </Route>
              <Route exact path={"/web-vitals/cls"}>
                <CLSDemo />
              </Route>
              <Route exact path={"/upload-file"}>
                <UploadFile />
              </Route>
              <Route exact path={"/chart"}>
                <AmountDateAreaChart />
              </Route>
              <Route exact path={"/streaming"}>
                <Streaming />
              </Route>
              <Route exact path={"/photography-map"}>
                <PhotographyMap />
              </Route>
              <Route exact path={"/d3"}>
                <D3Playground />
              </Route>
              <Route exact path={"/context"}>
                <ContextTest />
              </Route>
              <Route exact path={"/reducer"}>
                <ReducerTest />
              </Route>
              <Route exact path={"/simple-display"}>
                <SimpleDisplay />
              </Route>
            </Switch>
          </AppGrid>
        </Suspense>
      </BrowserRouter>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: white;

  // NOTE: Experimental background
  //
  //linear-gradient(
  //        130deg
  //        ,#ff7a18,#af002d 41.07%,#319197 76.05%);
  //background-image: linear-gradient(
  //        130deg
  //        , rgb(255, 122, 24), rgb(175, 0, 45) 41.07%, rgb(49, 145, 151) 76.05%);
  //clip-path: polygon(100% 0,0 0,0 77.5%,1% 77.4%,2% 77.1%,3% 76.6%,4% 75.9%,5% 75.05%,6% 74.05%,7% 72.95%,8% 71.75%,9% 70.55%,10% 69.3%,11% 68.05%,12% 66.9%,13% 65.8%,14% 64.8%,15% 64%,16% 63.35%,17% 62.85%,18% 62.6%,19% 62.5%,20% 62.65%,21% 63%,22% 63.5%,23% 64.2%,24% 65.1%,25% 66.1%,26% 67.2%,27% 68.4%,28% 69.65%,29% 70.9%,30% 72.15%,31% 73.3%,32% 74.35%,33% 75.3%,34% 76.1%,35% 76.75%,36% 77.2%,37% 77.45%,38% 77.5%,39% 77.3%,40% 76.95%,41% 76.4%,42% 75.65%,43% 74.75%,44% 73.75%,45% 72.6%,46% 71.4%,47% 70.15%,48% 68.9%,49% 67.7%,50% 66.55%,51% 65.5%,52% 64.55%,53% 63.75%,54% 63.15%,55% 62.75%,56% 62.55%,57% 62.5%,58% 62.7%,59% 63.1%,60% 63.7%,61% 64.45%,62% 65.4%,63% 66.45%,64% 67.6%,65% 68.8%,66% 70.05%,67% 71.3%,68% 72.5%,69% 73.6%,70% 74.65%,71% 75.55%,72% 76.35%,73% 76.9%,74% 77.3%,75% 77.5%,76% 77.45%,77% 77.25%,78% 76.8%,79% 76.2%,80% 75.4%,81% 74.45%,82% 73.4%,83% 72.25%,84% 71.05%,85% 69.8%,86% 68.55%,87% 67.35%,88% 66.2%,89% 65.2%,90% 64.3%,91% 63.55%,92% 63%,93% 62.65%,94% 62.5%,95% 62.55%,96% 62.8%,97% 63.3%,98% 63.9%,99% 64.75%,100% 65.7%);
`;

const AppGrid = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 1fr 4fr;
`;

export default App;
