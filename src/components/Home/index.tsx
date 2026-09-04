import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { RecentBlogItems } from '../RecentBlogItems';
import { TopTagItems } from '../TopTagItems';
import { JourneyTimeline } from '../Timeline';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={styles.heroInner}>
        <p className={styles.eyebrow}>Field notes from a software engineer</p>
        <Heading as="h1" className={styles.heroTitle}>{siteConfig.title}</Heading>
        <p className={styles.heroSubtitle}>Ideas, systems, and lessons learned while building software that has to hold up in the real world.</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/blog">Read the notes <span aria-hidden="true">↗</span></Link>
          <Link className={styles.secondaryLink} to="/about">A little about me</Link>
        </div>
      </div>
      <span className={styles.heroIndex}>01 / 04</span>
    </header>
  );
}

export default function Home({ recentPosts, topTags }): React.ReactElement {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Engineering notes on software, systems, and the work between them.">
      <HomepageHeader />
      <main>
        <section className={styles.recentBlogsContainer} aria-labelledby="recent-heading">
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>From the notebook</p>
            <Heading as="h2" id="recent-heading">Recent writing</Heading>
            <p>Practical guides and honest observations from the parts of engineering I keep coming back to.</p>
          </div>
          <div className={styles.recentBlogsList}>
            {recentPosts?.map((post, index) => <RecentBlogItems key={post.metadata.permalink || index} index={index} metadata={post.metadata} context="home" />)}
          </div>
          <Link className={styles.viewAll} to="/blog">Browse the full archive <span aria-hidden="true">↗</span></Link>
        </section>
        <JourneyTimeline />
        <section className={styles.topTagsContainer} aria-labelledby="tags-heading">
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Browse by thread</p>
            <Heading as="h2" id="tags-heading">Topics I return to</Heading>
          </div>
          <div className={styles.topTagsList}>
            {topTags?.map((tag, index) => <TopTagItems key={tag.metadata.permalink || index} index={index} metadata={tag.metadata} context="home" />)}
            <TopTagItems index={9999} metadata={{permalink: '/blog/tags', label: 'All topics', total: 0}} context="home" />
          </div>
        </section>
      </main>
    </Layout>
  );
}
