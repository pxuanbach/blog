import { FiFeather } from 'react-icons/fi';
import type { JSX } from 'react';
import styles from './index.module.css';

export function Stamp({ label = 'Immersed in Code' }: { label?: string }): JSX.Element {
  return (
    <span className={styles.stamp} role="img" aria-label={`${label} attribution stamp`}>
      <svg viewBox="0 0 120 120" className={styles.ring} aria-hidden="true">
        <defs>
          <path id="iic-stamp-circle" d="M 60,60 m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0" />
        </defs>
        <circle cx="60" cy="60" r="58" className={styles.disc} />
        <circle cx="60" cy="60" r="30" className={styles.inner} />
        <text className={styles.ringText}>
          <textPath href="#iic-stamp-circle">BACH PHAM · PRACTITIONER'S QUARTERLY ·</textPath>
        </text>
      </svg>
      <FiFeather className={styles.nib} aria-hidden="true" />
    </span>
  );
}
