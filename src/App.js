import Maincontent from "./components/main-content/Maincontent";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Sidebar />
        <Maincontent />
      </div>
    </div>
  );
}

export default App;
