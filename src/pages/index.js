import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="front-page-link"
            to="/developers/optimism-on-celestia">
              <p className="button-heading">Smart Contracts</p>
              Deploy Applications on a Rollup
          </Link>
          <Link
            className="front-page-link"
            to="/developers/celestia-ethermint">
              <p className="button-heading">Settlement</p>
              Deploy a Rollup on Ethermint
          </Link>
          <Link
            className="front-page-link"
            to="/developers/wordle">
               <p className="button-heading">Sovereign Chain</p>
              Deploy a Chain to Celestia
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentation Site for Celestia Network<head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
