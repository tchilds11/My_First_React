import logo from './logo.svg';
import './App.css';

function Hello(props) {
  return (
    <h1 className="title">Hello! {props.name}</h1>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello name="Terrence" />
      </header>
    </div>
  );
}

export default App;
