import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            theme {
              maxWidth,
              textColorLight,
              borderColor
            }
          }
        }
      }
    `}
    render={({ site: { siteMetadata: { theme }}}) => (
      <footer>
        <div
          style={{
            margin: '0 auto',
            maxWidth: theme.maxWidth,
            padding: '0 1rem',
            color: theme.textColorLight,
            fontSize: '0.875rem',
            textAlign: 'right',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: '4rem'
          }}
        >
          © {new Date().getFullYear()}
        </div>
      </footer>
    )}
  />
);

export default Footer;
