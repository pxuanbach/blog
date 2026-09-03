import clsx from 'clsx';
import type { JSX } from 'react';
import styles from './index.module.css';
import dayjs from 'dayjs';
import Link from '@docusaurus/Link';

function formatDate(date?: string): string {
  if (!date) {
    return dayjs().format('MMMM DD, YYYY');
  }
  return dayjs(date).format('MMMM DD, YYYY');
}

type Props = {
  index?: number;
  metadata: {
    title: string;
    description?: string;
    permalink: string;
    frontMatter?: { image?: string; date?: string };
  };
  context?: string;
  variant?: 'plate' | 'lead';
  figureNo?: string;
};

export function RecentBlogItems({ index = 0, metadata, variant = 'plate', figureNo }: Props): JSX.Element {
  const date = formatDate(metadata.frontMatter?.date);

  if (variant === 'lead') {
    return (
      <article className={styles.lead}>
        <p className={styles.leadFolio}>
          <span>Lead plate</span>
          <span aria-hidden="true">·</span>
          <span>{date}</span>
        </p>
        <h2 className={styles.leadTitle}>
          <Link to={metadata.permalink} className={styles.leadLink}>
            {metadata.title}
          </Link>
        </h2>
        {metadata.description ? <p className={styles.leadDesc}>{metadata.description}</p> : null}
        <Link to={metadata.permalink} className={clsx('button', 'button--outline', styles.leadCta)}>
          Read the plate
        </Link>
      </article>
    );
  }

  return (
    <article className={styles.plate}>
      <Link
        className={styles.permalink}
        to={metadata.permalink}
        aria-label={`Read: ${metadata.title}`}
      />
      <p className={styles.fig}>
        <span>Fig. {figureNo ?? String(index + 1).padStart(2, '0')}</span>
        <span className={styles.figDate}>{date}</span>
      </p>
      {metadata.frontMatter?.image ? (
        <div className={styles.thumb}>
          <img src={metadata.frontMatter.image} alt="" loading="lazy" />
        </div>
      ) : null}
      <h3 className={styles.title}>{metadata.title}</h3>
      {metadata.description ? <p className={styles.desc}>{metadata.description}</p> : null}
    </article>
  );
}
