import "./App.css";
import FilterItems from "./components/FilterItems";
import { Pagination } from "./components/layout/Pagination";
import Searchbar from "./components/layout/Searchbar";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <Searchbar />
      <Users />
      <Pagination />
      <FilterItems />
    </div>
  );
}

export default App;
