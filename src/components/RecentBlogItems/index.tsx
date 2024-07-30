import clsx from "clsx";
import styles from './index.module.css';
import dayjs from "dayjs";


export function RecentBlogItems({ index, metadata, context }): JSX.Element {
  const formatDate = (date?: string) => {
    if (!date) {
      return dayjs().format('MMMM DD, YYYY');
    }
    return dayjs(date).format('MMMM DD, YYYY');
  }

  return (
    <div className={`${clsx("col")} ${styles.card}`}>
      <a className={styles.permalink} href={metadata.permalink}></a>
      <div className={`${clsx("text--center")} ${styles.thumbnail}`}>
        <img src={metadata.frontMatter?.image} alt={metadata.title} width="100" />
      </div>
      <div className="padding-horiz--md padding-bottom--sm">
        <h4 className={styles.title}>{metadata.title}</h4>
        {/* <p className={styles.description}>{metadata.description}</p> */}
        <span className={styles.date}>{formatDate(metadata.frontMatter?.date)}</span>
      </div>
    </div>
  );
}
