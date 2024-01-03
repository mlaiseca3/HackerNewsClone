import './App.css'
import SidePanel from './SidePanel';

function App() {

  return (
    <div className="app">
      <SidePanel />
      {/* Your main content goes here */}
      <div className="main-content">
        <h1>Main Content</h1>
        {/* Add your main content here */}
      </div>

      {/* Render the SidePanel component */}
    </div>
  );
}

export default App
