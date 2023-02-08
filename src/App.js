import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import "./css/app.css";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import ScanAdd from "./pages/ScanAdd";
import ScanList from "./pages/ScanList";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [scans, setScans] = useState([]);

  const STORAGE_KEY = "scans";
  const [storedScans, setStoredScans] = useLocalStorage(STORAGE_KEY, []);

  // On first App component mount
  useEffect(() => {
    setScans(storedScans);
    console.log("App component mounted");
  }, []);

  // On every technos change
  useEffect(() => {
    setStoredScans(scans);
    console.log("Technos changed");
  }, [scans]);

  function handleAddScan(scan) {
    setScans([...scans, { ...scan, scanid: uuidv4() }]);
  }

  function handleDeleteScan(scanId) {
    setScans(scans.filter((scan) => scan.scanid !== scanId));
  }

  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/add"
          element={<ScanAdd handleAddTechno={handleAddScan} />}
        />
        handleDeleteTechno={handleDeleteScan}
        <Route
          path="/list"
          element={
            <ScanList
              scans={scans}
              handleDeleteScan={handleDeleteScan}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
