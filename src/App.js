import './App.css';
import Homepage from './component/Homepage';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
        <div className="App">
          <Homepage/>
        </div>
  );
}

export default App;
