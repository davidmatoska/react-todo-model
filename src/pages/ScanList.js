import React from "react";
import ScanItem from "../components/ScanItem";

export default function ScanList(props) {
    const { scans, handleDeleteScan: handleDeleteScan } = props;
  return (
    <div className="scan-list">
      <h1>Tous les scans</h1>
      <div>
        {scans.map((scan) => (
          <ScanItem
            key={scan.scanid}
            scan={scan}
            handleDeleteScan={handleDeleteScan}
          />
        ))}
      </div>
    </div>
  );
}
