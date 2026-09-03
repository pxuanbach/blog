import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {RecentBlogItems} from '../RecentBlogItems';
import {TopTagItems} from '../TopTagItems';
import {JourneyTimeline} from '../Timeline';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={clsx('container', styles.heroInner)}>
        <div className={styles.heroCopy}>
          <p className={styles.heroKicker}>FIELD NOTES / SOFTWARE ENGINEERING</p>
          <Heading as="h1" className={styles.heroTitle}>Ideas worth <em>building</em> down.</Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline} A personal notebook on systems, security, and the craft of making software work.</p>
          <div className={styles.buttons}>
            <Link className={styles.primaryButton} to="/blog">Read the latest <span>↗</span></Link>
            <Link className={styles.textButton} to="/about">More about me</Link>
          </div>
        </div>
        <div className={styles.heroImage} aria-label="Abstract view of the author's engineering workspace" role="img" />
        <div className={styles.heroNote}>Writing from<br /><strong>Ho Chi Minh City</strong><br />since 2024</div>
      </div>
    </header>
  );
}

export default function Home({recentPosts, topTags}): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="A personal notebook on software engineering, systems, and security.">
      <HomepageHeader />
      <main>
        <div className={styles.recentBlogsContainer}>
          <div className={styles.sectionIntro}><div><p className={styles.sectionLabel}>LATEST TRANSMISSIONS</p><h2>From the notebook</h2></div><p className={styles.sectionDescription}>Practical notes from building APIs, distributed systems, and the tools around them.</p></div>
          <div className={styles.recentBlogsList}>{recentPosts?.map((post, index) => <RecentBlogItems key={index} index={index} metadata={post.metadata} context="home" />)}</div>
          <div className={styles.viewAll}><Link to="/blog"><span>View all writing</span><span aria-hidden="true">↗</span></Link></div>
        </div>
        <JourneyTimeline />
        <div className={styles.topTagsContainer}>
          <div className={styles.sectionIntro}><div><p className={styles.sectionLabel}>FOLLOW THE THREAD</p><h2>Explore by topic</h2></div><p className={styles.sectionDescription}>Jump into a subject, stay for the rabbit hole.</p></div>
          <div className={styles.topTagsList}>{topTags?.map((tag, index) => <TopTagItems key={index} index={index} metadata={tag.metadata} context="home" />)}<TopTagItems index={9999} metadata={{permalink: '/blog/tags', label: 'View all topics', total: 0}} context="home" /></div>
        </div>
      </main>
    </Layout>
  );
}
