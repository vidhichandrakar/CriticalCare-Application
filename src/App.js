import logo from './logo.svg';
import './App.css';
import { HomeComponent } from './Components/LoginComponent/HomeComponent';
import DashboardMain from './Components/DashboardComponents/DashboardMain';
import DashboardRouter from './Components/DashboardComponents/DashboardRouter/DashboardRouter';

function App() {
  return (
    <div className="App">
     {/* <HomeComponent/> */}
     {/* <DashboardMain /> */}
     <DashboardRouter/>
    </div>
  );
}

export default App;
