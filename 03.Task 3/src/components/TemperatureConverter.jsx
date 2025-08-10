import React, { useState } from "react";

function TemperatureConverter() {
  const [inputTemp, setInputTemp] = useState("");
  const [inputType, setInputType] = useState("Fahrenheit");
  const [result, setResult] = useState("");

  const handleConvert = () => {
    const temp = parseFloat(inputTemp);
    if (isNaN(temp)) {
      setResult("Please enter a valid number.");
      return;
    }

    let converted;
    switch (inputType) {
      case "Fahrenheit":
        converted = ((temp - 32) * 5) / 9;
        setResult(`${converted.toFixed(4)} °C`);
        break;
      case "Celsius":
        converted = (temp * 9) / 5 + 32;
        setResult(`${converted.toFixed(4)} °F`);
        break;
      case "Kelvin":
        converted = temp - 273.15;
        setResult(`${converted.toFixed(4)} °C`);
        break;
      default:
        setResult("Unknown type");
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.title}>Temperature converter</h2>

        <div style={styles.fieldGroup}>
          <label style={styles.label}>Degrees</label>
          <input
            type="number"
            value={inputTemp}
            onChange={(e) => setInputTemp(e.target.value)}
            style={styles.input}
            placeholder="Enter temperature"
          />
        </div>

        <div style={styles.fieldGroup}>
          <label style={styles.label}>Type</label>
          <select
            value={inputType}
            onChange={(e) => setInputType(e.target.value)}
            style={styles.select}
          >
            <option value="Fahrenheit">Fahrenheit</option>
            <option value="Celsius">Celsius</option>
            <option value="Kelvin">Kelvin</option>
          </select>
        </div>

        <div style={styles.fieldGroup}>
          <label style={styles.label}>Result</label>
          <div style={styles.resultBox}>{result}</div>
        </div>

        <button onClick={handleConvert} style={styles.button}>
          Convert
        </button>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f5f8fc",
  },
  card: {
    width: "320px",
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    marginBottom: "20px",
    fontSize: "20px",
    fontWeight: "600",
  },
  fieldGroup: {
    marginBottom: "16px",
    textAlign: "left",
  },
  label: {
    display: "block",
    fontSize: "14px",
    color: "#555",
    marginBottom: "6px",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  select: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    backgroundColor: "#fff",
  },
  resultBox: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
    padding: "8px 0",
  },
  button: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default TemperatureConverter;
