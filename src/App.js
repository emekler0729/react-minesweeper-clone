import styled from "styled-components";
import Field from "./components/Field";

const StyledApp = styled.div`
    height: 100vh;
    display: grid;
    place-items: center;
`;

const App = () => {
    return (
        <StyledApp>
            <Field />
        </StyledApp>
    );
};

export default App;
