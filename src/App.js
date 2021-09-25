import "./App.css";
import Nav from "./components/Nav/Nav";
import UserList from "./components/UserList/UserList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter } from "react-router-dom";
import Detail from "./components/Detail/Detail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Route path="/" component={UserList} exact/>
        <Route path="/users/:id" component={Detail}/>

      </BrowserRouter>
    </div>
  );
}

export default App;
