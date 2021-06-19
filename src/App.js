import AppRouter from './AppRouter';
import './App.css';
import { BrowserRouter } from "react-router-dom"
import Layout from "./pages/dashboard/Layout"
import Login from "./pages/Login"





function App() {
  return (
    
    <BrowserRouter>
    
  
      <AppRouter/>
    </BrowserRouter>
  
    
      

  );
}

export default App;
