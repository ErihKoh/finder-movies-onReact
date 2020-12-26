import { useState, useEffect } from 'react';

export default function UseSessionStorage(key, defaultValue) {
  const [state, setState] = useState(
    () => JSON.parse(window.sessionStorage.getItem(key)) ?? defaultValue,
  );
  useEffect(() => {
    window.sessionStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);
  return [state, setState];
}
