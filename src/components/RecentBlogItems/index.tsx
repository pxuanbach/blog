import clsx from "clsx";

import styles from './index.module.css'


export function RecentBlogItems({ index, metadata, context }): JSX.Element {
    return (
      <div className={`${clsx("col")} ${styles.card}`}>
        <a className={styles.permalink} href={metadata.permalink}></a>
        <div className={`${clsx("text--center")} ${styles.thumbnail}`}>
          <img src={metadata.frontMatter?.image} alt={metadata.title} width="100" />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{metadata.title}</h3>
          <p className={styles.description}>{metadata.description}</p>
        </div>
      </div>
    );
  }