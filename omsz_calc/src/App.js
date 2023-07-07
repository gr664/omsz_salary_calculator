import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          12Ez egy NEM HIVATALOS webApp, ami az OMSZ kivonuló állományának készült egy hobbi project keretében!
          A dolgozott műszakok megadása után a program kiszámolja a bruttó fizetés nagyságát.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kiszámolom a fizetésem
        </a>
      </header>
      <footer>
      Icon by <a href="https://freeicons.io/profile/350417">Barudak Lier</a> on <a href="https://freeicons.io">freeicons.io</a>
      </footer>
    </div>
  );
}

export default App;