import './App.css';
import Title from './components/Title';
import Credits from './components/Credits'
import NewsSection from './components/LightsComponent/NewsSection'

function App() {
  return (
    <div className="App">
      <Title/>
      <NewsSection title="University News"/>
      <NewsSection title="City News"/>
      <Credits/>
    </div>
  );
}

export default App;
