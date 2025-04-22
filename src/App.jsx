import { HashRouter  as Router } from 'react-router-dom';
import AppRoutes from "./routes/index.jsx";

function App() {

  return (
    <Router basename="/">
      <AppRoutes />
    </Router>
  )
}

export default App
