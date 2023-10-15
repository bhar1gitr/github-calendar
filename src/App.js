import logo from './logo.svg';
import './App.css';
import GitHubCalendar from 'react-github-calendar';

function App() {
  return (
    <div>
     <GitHubCalendar style={{margin:'250px auto',color:'white'}} username="bhar1gitr" />
    </div>
  );
}

export default App;
