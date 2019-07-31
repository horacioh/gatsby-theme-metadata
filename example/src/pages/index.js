import React from 'react';
import { graphql } from 'gatsby';

export default ({ data }) => (
  <div>
    <h1>Homepage in a user's site</h1>
    <p>{JSON.stringify(data)}</p>
  </div>
);

export const query = graphql`
  query MyQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
