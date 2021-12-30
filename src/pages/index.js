import * as React from "react";

import Layout from "../components/layout";
import HeadTag from "../components/head";
import SplitHeros from "../components/split-heros";
import SimpleSwiper from "../components/simple-swiper";
import Blog from "../components/blogs";

const IndexPage = () => (
  <Layout>
    <HeadTag title="Home" />
    <SplitHeros />
    <br></br>
    <SimpleSwiper />
    <br></br>
    <Blog />
  </Layout>
);

export default IndexPage;
