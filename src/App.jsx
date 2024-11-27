import Header from "./components/Header";
import ToggleNavigation from "./components/ToggleNavigation";
import Breadcrumb from "./components/Breadcrumb";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "preline/preline";
import Content from "./components/Content";

function App() {
  return (
    <Router>
      <Header />
      {/* Breadcrumb in mobile mode */}
      <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 lg:px-8 lg:hidden dark:bg-neutral-800 dark:border-neutral-700">
        <div className="flex items-center py-2">
          <ToggleNavigation />
          <Breadcrumb />
        </div>
      </div>
      <Routes>
        <Route path="/users" element={<Content />} />
      </Routes>
      {/* End Breadcrumb */}
      <Sidebar />
    </Router>
  );
}

export default App;
