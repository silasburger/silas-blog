import React from "react";
import { styled } from "twin.macro";

const GlobalFooter = styled.footer`
  position: absolute;
  bottom: 0px;
`

export default function Footer() {
  return (
    <GlobalFooter>
      Footer
    </GlobalFooter>
  );
}