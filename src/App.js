import logo from './logo.svg';
import './App.css';
import { HomeComponent } from './Components/LoginComponent/HomeComponent';
import DashboardMain from './Components/DashboardComponents/DashboardMain';
import DashboardRouter from './Components/DashboardComponents/DashboardRouter/DashboardRouter';
import history from './Components/DashboardComponents/DashboardRouter/history';
function App({}) {
  return (
    <div className="App">
     {/* <HomeComponent/> */}
     {/* <DashboardMain /> */}
     <DashboardRouter history={history}/>
    </div>
  );
}

export default App;
