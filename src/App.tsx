// src/App.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import Button from './components/Button/Button';

const App: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div
      style={{
        backgroundColor: theme === 'light' ? '#ffffff' : '#000000',
        color: theme === 'light' ? '#000000' : '#ffffff',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <h1>Light/Dark Theme with Redux Toolkit</h1>
      <Button />
    </div>
  );
};

export default App;
