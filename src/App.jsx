import styled from "styled-components";
import "./App.css";
import tw from "twin.macro";
import Home from "./app/containers/Home";

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
  `}
`;

const App = () => {
  return (
    <AppContainer>
      <Home />
    </AppContainer>
  );
};

export default App;
