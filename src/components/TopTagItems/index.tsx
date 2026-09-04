import React from "react";
import clsx from "clsx";
import styles from './index.module.css';
import Link from '@docusaurus/Link';

export function TopTagItems({ index, metadata, context }): React.ReactElement {
    return (
      <div className={`${clsx("col")} ${styles.badge}`}>
        <Link className={styles.permalink} to={metadata.permalink}>
          {metadata.label} 
          {metadata.total > 0 ? <span>{metadata.total}</span> : <></>}
        </Link>
      </div>
    );
}
