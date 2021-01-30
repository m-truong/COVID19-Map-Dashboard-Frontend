import styled, { css, keyframes } from "styled-components"
import numeral from "numeral"

const Heading = styled.h2`
    color: white;
    text-align: center;
    font-family: 'Fira Sans', sans-serif;
`;

const Stat = styled.h1`
    color: crimson;
    text-align: center;
    font-family: 'Fira Sans', sans-serif;
`;

const CardContainer = styled.div`
    background-color: black;
    border-radius: 0.5rem !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    &:hover {
        /* cursor: pointer; */
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
`;

export default function DataCard({ title, stat }) {
    return (
        <CardContainer>
            <Heading>Total {title}</Heading>
            <Stat>{numeral(stat).format("0,0")}</Stat>
        </CardContainer>
    )
}


