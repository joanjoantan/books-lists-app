import './App.css';
import BooksList from './component/AllLists';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Books Lists App</h1>
      </header>
      <BooksList />
    </div>
  );
};

export default App;
