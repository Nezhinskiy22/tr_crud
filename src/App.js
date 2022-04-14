import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Create from "./components/create/Create";
import Read from "./components/read/Read";
import Update from "./components/update/Update";
import Delete from "./components/delete/Delete";

const App = () => {
  return (
    <Router>
      <div className="main">
        <div>
          <h3>React CRUD operations</h3>
        </div>

        <div>
          <Route exact path="/" component={Create} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path="/read" component={Read} />
        </div>
        <Route path="/update" component={Update} />
        <Route path="/delete" component={Delete} />
      </div>
    </Router>
  );
};

export default App;
