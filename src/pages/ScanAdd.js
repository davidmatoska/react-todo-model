import React, { useState } from "react";

export default function ScanAdd(props) {
  const [scan, setScan] = useState({
    scanname: "",
    scancategory: "",
    scandescription: "",
  });

  const { handleAddTechno: handleAddScan } = props;

  function handleChange(evt) {
    const { name, value } = evt.target;
    setScan({ ...scan, [name]: value });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleAddScan(scan);
    setScan({
      scanname: "",
      scancategory: "",
      scandescription: "",
    });
  }

  return (
    <div className="scan-add">
      <h1>Ajout Scan</h1>
      <div>
        <form onSubmit={(evt) => handleSubmit(evt)}>
          <label htmlFor="scanname">Scan matricule</label>
          <br />
          <input
            type="text"
            name="scanname"
                      id="scanname"
            value={scan.scanname}
            onChange={(evt) => handleChange(evt)}
          />
          <br />
          <label htmlFor="scancategory">Categorie:</label>
          <br />
          <select
            name="scancategory"
                      id="scancategory"
            value={scan.scancategory}
            onChange={(evt) => handleChange(evt)}
          >
            <option value="">Choix catégorie</option>
            <option value="cat1">cat 1</option>
            <option value="cat2">cat 2</option>
            <option value="cat3">cat 3</option>
            <option value="other">Autre</option>
          </select>
          <br />
          <label htmlFor="scandescription">Commentaire</label>
          <br />
          <textarea
            name="scandescription"
            id="scandescription"
            cols="30"
                      rows="10"
            value={scan.scandescription}
            onChange={(evt) => handleChange(evt)}
          ></textarea>
          <br />
          <input type="submit" value="AJOUT" className="btn" />
        </form>
      </div>
      <br />
    </div>
  );
}
