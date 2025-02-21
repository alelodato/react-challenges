import css from './App.module.css';
import NavBarSimple from './components/NavBarSimple';
import NavBarForm from './components/NavBarForm';
import Content from './components/Content';

function App() {
  return (
    <div className={css.App}>
      <Content />
    </div>
  );
}

export default App;