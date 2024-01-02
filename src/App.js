import logo from './logo.svg';
import './App.css';
import DashboardRouter from './Components/DashboardComponents/DashboardRouter/DashboardRouter';
import history from './Components/DashboardComponents/DashboardRouter/history';
function App({}) {
  return (
    <div className="App">
     <DashboardRouter history={history}/>
    </div>
  );
}

export default App;
