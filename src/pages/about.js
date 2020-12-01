import React from "react";
import tw from "twin.macro";
import Layout from 'components/Layout';

const Paragraph = tw.p`
  text-red-600
` 

export default function About() {
  return (
    <Layout>
      <Paragraph>I'm writing an about page and I'm curious if I can apply css to it</Paragraph>
    </Layout>
  );
}