/** @jsx jsx */
import * as React from "react"
import { jsx } from "theme-ui"
import HeadTag from "../components/head"
import Layout from "../components/layout"

const NotFoundPage = () => (
  <Layout>
    <HeadTag title="404" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
