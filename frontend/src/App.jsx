import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import DashboardLayout from "./components/DashboardLayout";

import Overview from "./pages/Overview";
import HospitalNetwork from "./pages/HospitalNetwork";
import FederatedTraining from "./pages/FederatedTraining";
import PrivacyCenter from "./pages/PrivacyCenter";
import Results from "./pages/Results";
import HowItWorks from "./pages/HowItWorks";

function App() {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/hospitals" element={<HospitalNetwork />} />
          <Route path="/training" element={<FederatedTraining />} />
          <Route path="/privacy" element={<PrivacyCenter />} />
          <Route path="/results" element={<Results />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  );
}

export default App;