import { useState } from "react";
import "./sass/app.scss";
import Index from "./pages/Index";

function App() {
  return (
    <div className="App">
      <Index />
      <footer className="bg-dark text-white p-3 text-center">

          <small>Created By JeanRosePrayco | <i className="bi bi-c-circle"></i> 2025 All right reserved.</small>

      </footer>
    </div>
  );
}

export default App;
