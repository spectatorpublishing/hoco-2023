import './App.css';
import NavigationBar from './components/NavigationBar';
import Logo from './components/Logo';
import Title from './components/Title';
import Credits from './components/Credits'
import NewsSection from './components/LightsComponent/NewsSection'

function App() {
  return (
    <div className="App">
      <Logo></Logo>
      <NavigationBar></NavigationBar>
      <Title/>
      <NewsSection title="University News"/>
      <NewsSection title="City News"/>
      <Credits/>
    </div>
  );
}

export default App;
