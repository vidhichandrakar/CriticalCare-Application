import logo from './logo.svg';
import './App.css';
import { HomeComponent } from './Components/LoginComponent/HomeComponent';
import DashboardMain from './Components/DashboardComponents/DashboardMain';

function App() {
  return (
    <div className="App">
     {/* <HomeComponent/> */}
     <DashboardMain />
    </div>
  );
}

export default App;
