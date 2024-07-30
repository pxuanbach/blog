import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { RecentBlogItems } from '../RecentBlogItems';
import { TopTagItems } from '../TopTagItems';

import styles from './index.module.css';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/blog">
            Explore
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home({ homePageBlogMetadata, recentPosts, topTags }): JSX.Element {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <div className={styles.recentBlogsContainer}>
        <h1>Recent blogs</h1>
        <div className={styles.recentBlogsList}>
          {recentPosts && recentPosts.map((post, index) => (
            <RecentBlogItems 
              key={index}
              index={index}
              metadata={post.metadata}
              context={"home"}
            >
            </RecentBlogItems>
          ))}
        </div>
        <div className={styles.viewAll}>
          <Link
            to="/blog">
            <h4>View All Blogs >></h4>
          </Link>
        </div>
      </div>
      <div className={styles.topTagsContainer}>
        <h1>Top tags</h1>
        <div className={styles.topTagsList}>
          {topTags && topTags.map((tag, index) => (
            <TopTagItems 
              key={index}
              index={index}
              metadata={tag.metadata}
              context={"home"}
            >
            </TopTagItems>
          ))}
          <TopTagItems 
            key={9999}
            index={9999}
            metadata={{
              permalink: "/blog/tags",
              label: "View All Tags...",
              total: 0
            }}
            context={"home"}
          >
          </TopTagItems>
        </div>
      </div>
    </Layout>
  );
}
