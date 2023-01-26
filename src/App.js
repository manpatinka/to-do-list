import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import EditTask from "./pages/EditTask";
import CreateTask from "./pages/CreateTask";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/createtask" element={<CreateTask />} />
          <Route path="/todos/:id" element={<EditTask />} />
        </Routes>
      </div>
    </Router> 
  );
}

export default App;
