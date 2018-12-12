import React from "react";

import Container from "../src/components/Container";
import Layout from "../src/components/Layout";
import getStories from "../src/modules/stories/getStories";

interface IndexProps {
  page: number;
  stories: any[];
}
export default class extends React.Component<IndexProps> {
  protected static async getInitialProps({ query }) {
    const { p } = query;
    const page = Number(p || 1);
    const stories = await getStories("topstories", { page });
    return { page, stories };
  }

  public render() {
    const { stories } = this.props;
    return (
      <Layout>
        <Container stories={stories}/>
      </Layout>
    );
  }
}
