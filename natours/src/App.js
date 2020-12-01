import './App.css';
import logo from './img/logo-white.png'

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo-box">
          <img src={logo} alt="Logo" className="logo"></img>
        </div>
        <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Outdoors</span>
          <span className="heading-primary-sub"> is where life happens</span>
          </h1>
          </div>
      </header>
    </div>
  );
}

export default App;
