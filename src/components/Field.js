import React from "react";
import styled from "styled-components";
import Tile from "./Tile";

const StyledField = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
`;

const Field = () => {
    const tiles = [];
    for (let i = 0; i < 100; i++) {
        tiles.push(<Tile key={i} />);
    }

    return <StyledField>{tiles}</StyledField>;
};

export default Field;
