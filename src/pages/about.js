import React from "react";
import tw from "twin.macro"
import NavBar from 'components/NavBar'

const Paragraph = tw.p`
  text-red-600
` 

export default function About() {
  return (
    <div>
      <NavBar />
      <Paragraph>I'm writing an about page and I'm curious if I can apply css to it</Paragraph>
    </div>
  );
}