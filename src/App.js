import About from './About';
import './App.css';
import Cursor from './Cursor';
import Header from './Header';
import Navbar from './Navbar';

function App() {
  
  return (
    <>
    <div className="App">
      <Cursor/>
      {/* Navbar */}
      <Navbar/>
      {/* Header*/}
      <Header/>
      {/* About */}
      <About/>
    </div>
    </>
  );
}

export default App;
