import css from './App.module.css';
import NavBarSimple from './components/NavBarSimple';
import NavBarForm from './components/NavBarForm';

function App() {
  return (
    <div className={css.App}>
      <NavBarForm />
    </div>
  );
}

export default App;