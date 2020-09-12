import styled from "styled-components";

export const LayoutContainer = styled.div`

    font-family: "Raleway", sans-serif;
    background-color: #f2f3f4;
    line-height: 1.5;

    width: 100%;
    display: grid;
    grid-template: 80px 350px 1fr 10% / 1fr ;

    grid-template-areas:
    "header"
    "hero"
    "main"
    "footer";

    p, div {
      font-size: 16px;
    }

`