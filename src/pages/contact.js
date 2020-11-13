import React from "react";
import tw from "twin.macro"

const Container = tw.div`
  flex
  justify-center
` 

export default function About() {
  return (
    <>
      <h1>Contact Page</h1>
      <Container>
        <div>
          1
        </div>
        <div>
          2
        </div>
        <div>
          3
        </div>
      </Container>
    </>
  );
}