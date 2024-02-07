import styles from './CounterSection.module.scss';

export const CounterSection = ({ hovered }) => {
  return (
    <section>
      <h1 className={styles.title}>Hover squares</h1>

      {hovered.map(({ row, col }) => (
        <div className={styles.item} key={row + 'id' + col}>
          {`row ${row} col ${col}`}
        </div>
      ))}
    </section>
  );
};
