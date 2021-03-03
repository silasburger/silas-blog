import React from "react";
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