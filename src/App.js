import logo from './logo.svg';
import './App.css';

// TMS COMPONENTS
import TagManagementLibraryTag from '../src/tagManagementLibrary/components/tagManagementLibraryTag';
import SwitchContainer from './tagManagementLibrary/containers/switchContainer';

function App() {
  return (
    <div className="App">
      <TagManagementLibraryTag />
      <SwitchContainer />
    </div>
  );
}

export default App;
