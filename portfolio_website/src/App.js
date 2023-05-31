import './App.css';
import Header from './Controllers/Header';
import Introduction from './Controllers/Introduction';
import Skills from './Controllers/Skills';
import Projects from './Controllers/Projects';
import Contact from './Controllers/Contact';
import Navigation from './Controllers/Navigation';
import Main from './Controllers/Main';


function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      <Main main={"main"}>
        <Introduction/>
        <Skills/>
        <Projects/>
        <Contact/>
      </Main>
    </div>
  );
}

export default App;
