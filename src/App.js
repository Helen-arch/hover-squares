import { useState, useEffect } from 'react';
import styles from './App.module.scss';
import { CounterSection } from './components/CounterSection/CounterSection';
import { ModeSection } from './components/ModeSection/ModeSection';
import { getModes } from './api/fetchClient';

function App() {
  const [modes, setModes] = useState([]);
  const [hovered, setHovered] = useState([]);
  const [currentMode, setCurrentMode] = useState(null)
  const [currentSize, setCurrentSize] = useState(null);

  useEffect(() => {
    getModes()
    .then((data) => {
      const newModes = data.map(mode => ({
        value: mode.field,
        label: mode.name
      }))
      setModes(newModes)
    })
    .catch((error) => {
      throw new Error(error);
    })
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();

    if (currentMode) {
      setCurrentSize(currentMode.value);
    }
  };

  const onSelectMode = (selected) => {
    setCurrentMode(selected);
    setHovered([]);
  }

  const handleHoverSquare = (index) => {
    if (currentMode && currentMode.value === currentSize) {
      if (hovered.find(item => item.id === index)) {
        setHovered(prev => prev.filter(item => item.id !== index))
      } else {
        setHovered(prev => [...prev, {
          id: index,
          row: Math.floor(index / currentSize) + 1,
          col: ((index % currentSize) / (1 % currentSize)) + 1,
        }])
      }
    }
  }

  return (
    <main className={styles.app}>
      <ModeSection
        options={modes}
        onHoverSquare={handleHoverSquare}
        hovered={hovered}
        onSubmit={onSubmit}
        onSelectMode={onSelectMode}
        currentMode={currentMode}
        currentSize={currentSize || 5}
      />

      <CounterSection 
        hovered={hovered}
      />
    </main>
  );
}

export default App;
