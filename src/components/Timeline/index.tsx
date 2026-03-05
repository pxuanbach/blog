import React, { useState } from "react";
import {
  FaBriefcase,
  FaGraduationCap,
  FaCertificate,
  FaTrophy,
  FaLaptopCode,
} from "react-icons/fa";
import { motion } from "framer-motion";
import {
  timelineData,
  builtData,
  BuiltItem,
  TimelineItem,
  TimelineItemType,
} from "@site/src/data/timeline";
import styles from "./index.module.css";

// Hoisted outside component — static data never changes between renders
// (rendering-hoist-jsx + js-combine-iterations)

function getIcon(type: TimelineItemType): React.ReactNode {
  switch (type) {
    case "work":
      return <FaBriefcase />;
    case "education":
      return <FaGraduationCap />;
    case "certification":
      return <FaCertificate />;
    case "achievement":
      return <FaTrophy />;
    case "personal_project":
      return <FaLaptopCode />;
    default:
      return <>?</>;
  }
}

function TimelineCard({
  item,
  index,
  isExpanded,
  onToggle,
}: {
  item: TimelineItem;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      className={`${styles.timelineRow} ${isLeft ? styles.left : styles.right}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Node on the center line */}
      <div className={styles.node} />

      {/* Card */}
      <div className={styles.cardWrapper} onClick={onToggle}>
        <div
          className={`${styles.card} ${isExpanded ? styles.cardExpanded : ""}`}
        >
          <div className={styles.cardHeader}>
            <span className={styles.icon}>{getIcon(item.iconType)}</span>
            <h3 className={styles.title}>{item.title}</h3>{" "}
            {item.url && (
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                🔗
              </a>
            )}
          </div>
          <p className={styles.company}>{item.company}</p>
          <p className={styles.duration}>{item.duration}</p>
          <p className={styles.description}>{item.description}</p>

          {/* Achievements — animated expand / collapse */}
          <motion.div
            initial={false}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className={styles.achievements}
          >
            {item.achievements.length > 0 && (
              <div className={styles.achievementsInner}>
                <h4 className={styles.achievementsTitle}>Key Achievements</h4>
                <ul>
                  {item.achievements.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>

          {item.achievements.length > 0 && (
            <span className={styles.expandHint}>
              {isExpanded ? "▲ less" : "▼ more"}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// BuiltCard: React.memo prevents re-renders when parent state changes (rerender-memo)
const BuiltCard = React.memo(function BuiltCard({
  item,
  index,
}: {
  item: BuiltItem;
  index: number;
}) {
  return (
    <motion.div
      className={styles.builtCard}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      {/* Image — left side */}
      {item.imageUrl ? (
        <img
          src={item.imageUrl}
          alt={item.title}
          className={styles.builtCardImage}
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = "none";
            const placeholder = target.nextElementSibling as HTMLElement | null;
            if (placeholder) placeholder.style.display = "flex";
          }}
        />
      ) : null}
      <div
        className={styles.builtCardImagePlaceholder}
        style={{ display: item.imageUrl ? "none" : "flex" }}
      >
        <FaLaptopCode />
      </div>

      {/* Content — right side */}
      <div className={styles.builtCardBody}>
        <div className={styles.builtCardHeader}>
          <h3 className={styles.builtTitle}>{item.title}</h3>
          {item.url ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.builtUrl}
            >
              🔗
            </a>
          ) : null}
          <p className={styles.builtDuration}>{item.duration}</p>
        </div>
        <p className={styles.builtDescription}>{item.description}</p>
        {item.achievements.length > 0 ? (
          <ul className={styles.builtAchievements}>
            {item.achievements.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </motion.div>
  );
});

export function JourneyTimeline(): JSX.Element {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggle = (id: number) =>
    setExpandedId((prev) => (prev === id ? null : id));

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.twoColumnGrid}>
          {/* Left column: My Journey timeline */}
          <div className={styles.leftColumn}>
            <h2 className={styles.columnTitle}>My Journey</h2>
            <div className={styles.timeline}>
              {/* Vertical center line */}
              <div className={styles.line} />

              {timelineData.map((item, index) => (
                <TimelineCard
                  key={item.id}
                  item={item}
                  index={index}
                  isExpanded={expandedId === item.id}
                  onToggle={() => toggle(item.id)}
                />
              ))}
            </div>
          </div>

          {/* Right column: What I Built */}
          <div className={styles.rightColumn}>
            <div className={styles.rightColumnInner}>
              <h2 className={styles.columnTitle}>What I Built</h2>
              <div className={styles.builtList}>
                {builtData.map((item, index) => (
                  <BuiltCard key={item.id} item={item} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
