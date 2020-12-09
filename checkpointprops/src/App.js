import './App.css';
import FullName from './Profil/fullName'
import Bio from './Profil/Bio'
import Profession from './Profil/Profession'
function App() {
  const textpro = "Prolific full stack web developer with a passion "
  return (
    <div className="App">
      <FullName hello="Hello my name is" name="MED_BM" text="and i make a this websites" />
      <Bio job="web developer" />
      <Profession textpro={textpro} />
    </div>
  );
}

export default App;
