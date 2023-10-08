import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Credits from './components/Credits'
import LightsComponent from './components/LightsComponent/LightsComponent'

function App() {
  return (
    <div className="App">
      <Title/>
      <LightsComponent/>
      <Credits/>
    </div>
  );
}

export default App;
