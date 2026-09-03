import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import type { JSX } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { RecentBlogItems } from '../RecentBlogItems';
import { TopTagItems } from '../TopTagItems';
import { JourneyTimeline } from '../Timeline';
import { Stamp } from '../Stamp';

import styles from './index.module.css';

function Folio({ totalPosts }: { totalPosts: number }) {
  const year = new Date().getFullYear();
  return (
    <p className={styles.folio} aria-label="Issue folio">
      <span>A practitioner&rsquo;s quarterly</span>
      <span aria-hidden="true" className={styles.folioRule} />
      <span>{totalPosts} plates in archive</span>
      <span aria-hidden="true" className={styles.folioRule} />
      <span>{year}</span>
    </p>
  );
}

function Masthead({ totalPosts }: { totalPosts: number }) {
  const { siteConfig } = useDocusaurusContext();
  return (
    <section className={styles.masthead}>
      <div className={styles.sheet}>
        <Folio totalPosts={totalPosts} />
        <h1 className={styles.title}>{siteConfig.title}</h1>
        <p className={styles.standfirst}>{siteConfig.tagline}</p>
      </div>
    </section>
  );
}

export default function Home({ homePageBlogMetadata, recentPosts, topTags }): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const totalPosts: number = homePageBlogMetadata?.totalPosts ?? recentPosts?.length ?? 0;
  const [lead, ...plates] = recentPosts ?? [];

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Field notes from real engineering work — deployment, frameworks, tooling."
    >
      <Masthead totalPosts={totalPosts} />

      {lead ? (
        <section className={styles.leadSection} aria-label="Lead story">
          <div className={styles.sheet}>
            <div className={styles.leadWrap}>
              <RecentBlogItems metadata={lead.metadata} variant="lead" figureNo="00" />
              <div className={styles.stampSlot} aria-hidden="false">
                <Stamp />
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className={styles.platesSection} aria-label="Recent plates">
        <div className={styles.sheet}>
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Recent plates</h2>
            <Link to="/blog" className={styles.sectionLink}>
              View all <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className={styles.platesGrid}>
            {plates?.map((post, i) => (
              <motion.div
                key={post.metadata.permalink ?? i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.19, 1, 0.22, 1] }}
              >
                <RecentBlogItems
                  metadata={post.metadata}
                  variant="plate"
                  figureNo={String(i + 1).padStart(2, '0')}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.sheet} aria-hidden="true">
        <div className="iic-dots" />
      </div>

      <JourneyTimeline />

      <section className={styles.indexSection} aria-label="Index of subjects">
        <div className={styles.sheet}>
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Index of subjects</h2>
            <Link to="/blog/tags" className={styles.sectionLink}>
              Full index <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className={styles.tokens}>
            {topTags?.map((tag, index) => (
              <TopTagItems key={index} index={index} metadata={tag.metadata} context="home" />
            ))}
            <TopTagItems
              key={9999}
              index={9999}
              metadata={{
                permalink: '/blog/tags',
                label: 'View all tags',
                total: 0,
              }}
              context="home"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
