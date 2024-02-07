import styles from './Field.module.scss';
import classNames from 'classnames';

export const Field = ({ size = 5 }) => {
  const squares = Array(size * size).fill(0).map((_, i) => {
    const isLastColumn = (i + 1) % size === 0;
    const isLastRow = Math.floor(i / size) === size - 1;

    return (
      <li
        key={i}
        className={classNames(`${styles.square}`, {
          [styles.lastColumn]: isLastColumn,
          [styles.lastRow]: isLastRow
        })}
      ></li>
    );
  });

  const fieldWidth = size * 50 + 'px';

  return (
    <ul className={styles.field} style={{ width: fieldWidth }}>
      {squares}
    </ul>
  );
};
