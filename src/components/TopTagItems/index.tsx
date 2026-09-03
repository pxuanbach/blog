import clsx from 'clsx';
import type { JSX } from 'react';
import styles from './index.module.css';
import Link from '@docusaurus/Link';

export function TopTagItems({ index, metadata, context }): JSX.Element {
  const isAll = metadata.total === 0;
  return (
    <span className={clsx(styles.token, isAll && styles.tokenAll)}>
      <Link
        className={styles.permalink}
        to={metadata.permalink}
        aria-label={isAll ? 'View all tags' : `${metadata.label}, ${metadata.total} posts`}
      >
        <span className={styles.no}>{isAll ? '∗' : String(index + 1).padStart(2, '0')}</span>
        <span className={styles.label}>{metadata.label}</span>
        {metadata.total > 0 ? <span className={styles.count}>[{metadata.total}]</span> : null}
      </Link>
    </span>
  );
}
