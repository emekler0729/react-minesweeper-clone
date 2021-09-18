import React from "react";
import styled from "styled-components";

const CLICK_TYPE = {
    RIGHT: "contextmenu",
    LEFT: "click",
};

const StyledTile = styled.div`
    height: 50px;
    width: 50px;
    background: ${(props) => (props.revealed ? "brown" : "green")};
    display: grid;
    place-items: center;
`;

const Flag = styled.span`
    height: 30%;
    width: 30%;
    background-color: red;
    border-radius: 50%;
    display: ${(props) => (props.hidden ? "none" : "inline-block")};
`;

class Tile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            flagged: false,
            revealed: false,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        switch (event.type) {
            case CLICK_TYPE.LEFT:
                this.setState({ revealed: true });
                break;
            case CLICK_TYPE.RIGHT:
                this.setState((state) => {
                    return state.revealed ? state : { flagged: !state.flagged };
                });
                break;
            default:
        }
    }

    render() {
        return (
            <StyledTile revealed={this.state.revealed} onClick={this.handleClick} onContextMenu={this.handleClick}>
                <Flag hidden={!this.state.flagged} />
            </StyledTile>
        );
    }
}

export default Tile;
