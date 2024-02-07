import Select from 'react-select';
import styles from './ModeSection.module.scss';
import { Field } from '../Field/Field';

const customStyles = {
  control: base => ({
    ...base,
    boxShadow: 'none',
    caretColor: 'transparent',
    cursor: 'pointer',
    '[class$="-indicatorSeparator"]': {
      display: 'none',
    },
  }),
};

export const ModeSection = ({
  options,
  onHoverSquare,
  hovered,
  onSubmit,
  currentMode,
  onSelectMode,
  currentSize,
}) => (
  <section>
    <form
      className={styles.modeContainer}
      onSubmit={onSubmit}
    >
      <Select
        placeholder='Pick mode'
        styles={customStyles}
        options={options}
        value={currentMode}
        onChange={onSelectMode}
      />

      <button
        type='submit'
        className={styles.start}
      >
        Start
      </button>
    </form>
    
    <Field
      size={currentSize}
      onHoverSquare={onHoverSquare}
      hovered={hovered}
    />
  </section>
);
