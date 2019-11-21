import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
    display:flex;
    margin:0;
    padding:0;
`;
const Item = styled.li`
    display:flex;
    width:60px;
    justify-content:center;
`;

const LinkTag = styled(Link)`
    text-decoration:none;
    color:black;
`;

export default () => {
    return (
        <List>
            <Item>
                <LinkTag to="/">Home</LinkTag>
            </Item>
            <Item>
                <LinkTag to="/TV">TV</LinkTag>
            </Item>
            <Item>
                <LinkTag to="/Search">Search</LinkTag>
            </Item>
            <Item>
                <LinkTag to="/Detail">Detail</LinkTag>
            </Item>
        </List>
    )
}