import logo from './logo.svg';
import './App.css';
import MyComponent from './Components/greet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <p class="text-3xl bg-blue-400 font-bold">
    Hello world!
  </p>
  <MyComponent  />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
