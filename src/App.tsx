import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Browse from "./pages/Browse";
import VideoDetails from "./pages/VideoDetails";
function App() {


  return (
    <>
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="p-4 bg-white shadow-sm flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold">Optimalvid</Link>
        </header>

        <Routes>
          <Route path="/" element={<Browse />} />
          <Route path="/video/:id" element={<VideoDetails />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
