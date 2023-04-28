import logo from './logo.svg';
import './App.css';

import Card from './components/card/card.jsx';

function App() {
  return (
    <div className="App">
      <div className="Content">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <div className="Skills">
          <Card className="WebDevelopment" message="I am a trained web developer specialized in Node.js and React.js."/>
          <Card className="Payments" message="I have experience working with a variety of payment systems and have created software fit to handle and process transactions."/>
        </div>

        <div className="Links">
          <Card className="Links Github" link="https://github.com/claysamuelc" message="LinkedIn"/>
          <Card className="Links LinkedIn" link="https://linkedin.com/in/samuel-clay" message="Github"/>
          <Card className="Links Email" link="mailto: claysamuelc@gmail.com" message="Email"/>
        </div>
      </div>
    </div>
  );
}

export default App;
