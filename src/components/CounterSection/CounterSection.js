import styles from './CounterSection.module.scss';

export const CounterSection = () => {
  return (
    <section>
      <h1 className={styles.title}>Hover squares</h1>

      <div className={styles.item}>row 2 col 1</div>
    </section>
  );
};
