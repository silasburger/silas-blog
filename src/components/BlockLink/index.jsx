import React from "react";
import tw from "twin.macro";
import { Link } from 'gatsby';

export default function LinkBlock(props) {
  return (
    <Link to={props.link}>
      <div>
        {props.children}
      </div>
    </Link>
  );
}