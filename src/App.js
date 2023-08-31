import './App.css';
import CheckboxList from './CheckboxList/CheckboxList'
import { gamesList } from './data';

function App() {
  return (
    <div className="App">
      <CheckboxList {...gamesList}/>
    </div>
  );
}

export default App;
