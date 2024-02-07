import styles from './Field.module.scss';
import classNames from 'classnames';

export const Field = ({ size, onHoverSquare, hovered }) => {
  const squareMeasure = size > 30 ? 15 : 50;

  const squares = Array(size * size).fill(0).map((_, i) => {
    const isLastColumn = (i + 1) % size === 0;
    const isLastRow = Math.floor(i / size) === size - 1;

    return (
      <li
        key={i}
        onMouseOver={() => onHoverSquare(i)}
        className={classNames(`${styles.square}`, {
          [styles.lastColumn]: isLastColumn,
          [styles.lastRow]: isLastRow,
          [styles.minimize]: size > 30,
          [styles.hovered]: hovered.find(item => item.id === i)
        })}
      ></li>
    );
  });

  const fieldWidth = size * squareMeasure + 'px';

  return (
    <ul
      className={styles.field}
      style={{ width: fieldWidth }}
    >
      {squares}
    </ul>
  );
};
