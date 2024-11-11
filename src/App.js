import './App.css';
import Jatekter from './components/Jaterter';





function App() {

  return (
    
      <div className="App">
        <header className="App-header">
          <h2>Memory game</h2>
        </header>
        <article>
          <section className="kartyak">
            <Jatekter />
          </section>
        </article>
        <footer>
          Minaei Hajnalka
        </footer>
      </div>

  );
}


export default App;
