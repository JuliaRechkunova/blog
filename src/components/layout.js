import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';
import './layout.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            theme {
              maxWidth
            }
          }
        }
      }
    `}
    render={({ site: { siteMetadata: { theme }}}) => (
      <React.Fragment>
        <Header />
        <div
          style={{
            margin: '0 auto',
            maxWidth: theme.maxWidth,
            padding: '1.5rem 1rem',
            minHeight: 'calc(100vh - 8rem - 4px)'
          }}
        >
          <main>{children}</main>
        </div>
        <Footer />
      </React.Fragment>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
