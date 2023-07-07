import logo from './1574.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ez egy NEM HIVATALOS webApp, ami az OMSZ kivonuló állományának készült egy hobbi project keretében!
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
      <a href="https://www.freepik.com/free-vector/prints-eagle_10704782.htm#query=eagle%20svg&position=2&from_view=keyword&track=ais">Image by macrovector</a> on Freepik
      </footer>
    </div>
  );
}

export default App;
