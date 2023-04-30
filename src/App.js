import logos from './assets/logos.js';
import './App.css';

import Card from './components/card/card.jsx';

function App() {
  return (
    <div className="App">
      <div className="Content">
        <div className="Skills">
          <Card heading="About Me"/>
          <Card logo={logos.contact} heading="Links">
            <div className="Contact">
              <div>
                <img className="logo" src={logos.github} alt=""></img>
                <a href="https://github.com/ClaySamuelC">Github</a>
              </div>
              <div>
                <img className="logo" src={logos.linkedin} alt=""></img>
                <a href="https://linkedin.com/in/samuel-clay">LinkedIn</a>
              </div>
              <div>
                <img className="logo" src={logos.email} alt=""></img>
                <a href="mailto: claysamuelc@gmail.com">Email</a>
              </div>
            </div>
          </Card>
        </div>

        <div className="Links">
          <Card logo={logos.webdev} heading="Web Development">
            <div>I am a trained web developer specialized in the Node/React/MySQL stack.</div>
          </Card>
          <Card logo={logos.payments} heading="Payment Platform">
            <div>I have experience working with a variety of payment systems and have created software fit to handle and process transactions.</div>
          </Card>
          <Card heading="Data Science"/>
        </div>
      </div>
    </div>
  );
}

export default App;
