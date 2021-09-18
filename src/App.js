import styled from "styled-components";
import Tile from "./components/Tile";

const StyledApp = styled.div`
    height: 100vh;
    display: grid;
    place-items: center;
`;

const App = () => {
    return (
        <StyledApp>
            <Tile></Tile>
        </StyledApp>
    );
};

export default App;
