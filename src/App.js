// Import data

// Import components
import './App.css';
import Searchbar from './components/searchbar.js';
import Gallery from './components/gallery.js';
import Sidebar from './components/sidebar.js';
import Directory from './components/directory.js';


function App(){
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        <Sidebar />
        <Gallery />
        <Directory />
        <Searchbar/>
      </div>
    </div>
  );
}

export default App;
