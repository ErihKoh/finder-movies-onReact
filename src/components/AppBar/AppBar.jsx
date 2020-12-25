import Navigation from '../Navigation';
import s from './AppBar.module.css';

export default function AppBar() {
  return (
    <div>
      <header className={s.header}>
        <Navigation />
      </header>
      <button type="button" className={s.button}>
        Go to back
      </button>
    </div>
  );
}
