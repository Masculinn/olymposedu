import React, { useState } from "react";
import * as XLSX from "xlsx";

export const Converter = () => {
  const [transformMode, setTransformMode] = useState(false);
  const [fileContent, setFileContent] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      const transformedData = transformData(json);
      setFileContent(transformedData);
    };

    reader.readAsArrayBuffer(file);
  };

  const transformData = (data) => {
    const rows = data.slice(1);

    return rows
      .map((row) => {
        if (!row || row.length < 4) {
          return null;
        }

        let calcPrice;
        const pivot = row[2] || "";

        const extractNumber = (potNum) => {
          if (typeof potNum !== "string") {
            return potNum;
          }

          const numberString = potNum.replace(/[^0-9]+/g, "");
          const numberMultiplier = potNum.includes("Bin") ? 1e9 : 1;
          return parseInt(numberString) * numberMultiplier;
        };

        if (
          row[3] &&
          (row[3].toLowerCase().includes("year") ||
            row[3].toLowerCase().includes("yıl"))
        ) {
          calcPrice = extractNumber(pivot) / 2;
        } else {
          calcPrice = extractNumber(pivot);
        }

        return {
          program: row[1] || "",
          type: "lisans",
          uni: row[0] || "",
          price: calcPrice + " Euro",
        };
      })
      .filter((item) => item !== null);
  };

  const inputData = `
Varşova Teknoloji Üniversitesi Mimarlık 1.400 Euro dönem
Varşova Teknoloji Üniversitesi Şehir ve bölge planlama 1.650 Euro dönem
Varşova Teknoloji Üniversitesi Çevre Mühendisliği 2.400 Euro dönem
Varşova Teknoloji Üniversitesi Kimya ve Proses mühendisliği 2.400 Euro dönem
Varşova Teknoloji Üniversitesi İnşaat Mühendisliği 4.900 Euro dönem
Varşova Teknoloji Üniversitesi Elektrik mühendisliği 3.900 Euro dönem
Varşova Teknoloji Üniversitesi Bilgisayar Bilimleri 1.650 Euro dönem
Varşova Teknoloji Üniversitesi Telekominasyon 6.950 Euro dönem
SWPS University Psikoloji 7.750 Euro yıllık ücret
SWPS University Yönetim ve Liderlik 5.850 Euro yıllık ücret
`;

  const lines = inputData.trim().split("\n");

  const transformedData = lines.map((line) => {
    const parts = line.split(" ");
    const uni = parts.slice(0, 3).join(" ");
    const program = parts.slice(3, -3).join(" ");
    const price = parts.slice(-3, -1).join(" ") + " " + parts.slice(-1);

    return {
      program: program,
      role: "yüksek lisans",
      uni: uni,
      price: price,
    };
  });

  return (
    <div className="w-1/2 h-auto overflow-scroll">
      <button onClick={() => setTransformMode((prev) => !prev)}>
        Transfer
      </button>
      {transformMode && (
        <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      )}
      {transformMode && <pre>{JSON.stringify(fileContent, null, 2)}</pre>}
      {!transformMode && <pre>{JSON.stringify(transformedData, null, 2)}</pre>}
    </div>
  );
};
