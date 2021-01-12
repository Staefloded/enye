import "./App.css";
import FilterItems from "./components/FilterItems";
import { Pagination } from "./components/layout/Pagination";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <Users />
      <Pagination />
      <FilterItems />
    </div>
  );
}

export default App;
