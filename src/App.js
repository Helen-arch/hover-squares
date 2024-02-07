import styles from './App.module.scss';
import { CounterSection } from './components/CounterSection/CounterSection';
import { ModeSection } from './components/ModeSection/ModeSection';

function App() {
  return (
    <main className={styles.app}>
      <ModeSection />

      <CounterSection />
    </main>
  );
}

export default App;
