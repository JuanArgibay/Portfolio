import './App.css';
import {  DarkProviderComponent } from './context/darkMode';
import { CompletePage } from './Pages/CompletePage';

function App() {

  return (
    <div className="App">
      <DarkProviderComponent>
        <CompletePage/>
      </DarkProviderComponent>
    </div>
  );
}

export default App;
