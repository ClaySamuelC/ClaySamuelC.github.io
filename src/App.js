import logos from './assets/logos.js';
import './App.css';

import Card from './components/card/card.jsx';

function App() {
  return (
    <div className="App">
      <div className="Content">
        <div className="Skills">
          <Card 
            logo={logos.webdev}
            message="I am a trained web developer specialized in the Node/React/MySQL stack."
          />
          <Card
            logo={logos.payments}
            message="I have experience working with a variety of payment systems and have created software fit to handle and process transactions."
          />
        </div>

        <div className="Links">
          <Card
            link="https://github.com/claysamuelc"
            logo={logos.github}
            message="Github"
          />
          <Card
            link="https://linkedin.com/in/samuel-clay"
            logo={logos.linkedin}
            message="LinkedIn"
          />
          <Card
            link="mailto: claysamuelc@gmail.com"
            logo={logos.email}
            message="Email"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
