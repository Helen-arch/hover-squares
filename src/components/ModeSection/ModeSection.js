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

export const ModeSection = () => {
  return (
    <section>
      <div className={styles.modeContainer}>
        <Select
          placeholder='Pick mode'
          styles={customStyles}
        />

        <button
          className={styles.start}
        >
          Start
        </button>
      </div>
      
      <Field />
    </section>
  );
};
