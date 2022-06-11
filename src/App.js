
import './App.css';
import Features from './components/Features/Features';
import Header from './components/Header/Header';
import Results from './components/MatchResults/Results';
import Matches from './components/MatchUpdate/Matches';
import Navbar from './components/Navbar/Navbar';
import Upcoming from './components/UpcominFitures/Upcoming';

function App() {
  return (
    <main>
     <Navbar />
     <Header />
     <Features />
     <Matches/>
     <Upcoming />
     <Results />
    </main>
  );
}

export default App;
