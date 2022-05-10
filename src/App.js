import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Master from './layouts/admin/Master';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/admin/dashboard"  element={<Master/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
