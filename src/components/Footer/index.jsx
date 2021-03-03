import React from "react";
import { styled } from "twin.macro";

const GlobalFooter = styled.footer`
  position: absolute;
  bottom: 0px;
`

export default function Footer({lang}) {
  return (
    <GlobalFooter>
      Footer
    </GlobalFooter>
  );
}