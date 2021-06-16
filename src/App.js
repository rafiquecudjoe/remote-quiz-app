import AppRouter from './AppRouter';
import './App.css';
import { BrowserRouter } from "react-router-dom"
import Layout from "./pages/dashboard/Layout"




function App() {
  return (
    
    <BrowserRouter>
      <Layout/>
      {/* <AppRouter/> */}
    </BrowserRouter>
    
      

  );
}

export default App;
