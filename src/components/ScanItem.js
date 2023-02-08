import React from "react";

export default function ScanItem(props) {
  const { scan, handleDeleteScan: handleDeleteScan } = props;
  return (
    <>
      <div key={scan.scanid} className="card">
        <h2>{scan.scanname}</h2>
        <h3>Categorie</h3>
        <p>{scan.scancategory}</p>
        <h3>Commentaire</h3>
        <p>{scan.scandescription}</p>
        <div className="footer">
          <button className="btn-delete" onClick={() => handleDeleteScan(scan.scanid)}>SUPPRIMER</button>
        </div>
      </div>
    </>
  );
}
