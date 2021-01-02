import './App.css';
import Leftlink from './Leftlink';
import Rightlink from './Rightlink';
function App() {
  return (
    <div className="app">
       <div className="left">
         <Leftlink />
       </div>
       
       <div className="right">
         <Rightlink />
       </div>
    </div>
  );
}

export default App;
