import logo from "./logo.svg";
import "./App.css";
import Users from "./components/Users";

/** FETCH:
 * Herhangi bir veri kaynağından veri çekip gösterme
 * Bu işlem için jsonplaceholde.typicode.com sitesinden fake bir api kullanacağız.
 * Bu kısımda user end-pointinden kullanıcıları döneceğiz.
 *
 */

function App() {
  return (
    <div className="App">
      <Users />
    </div>
  );
}

export default App;
