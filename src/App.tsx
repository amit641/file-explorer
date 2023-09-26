import "./App.css";
import { Files } from "./data/explorer";
import Folder from "./components/Folder/Folder";

function App() {
  return (
    <div className="App">
      <div className="folderContainer">
        <Folder explorer={Files} />
      </div>
    </div>
  );
}

export default App;
