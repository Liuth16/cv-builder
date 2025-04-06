import { useState } from "react";
import UserInputs from "./components/UserInputs";
import InputField from "./components/InputField";
import mockData from "./components/mockData";
import CVPreview from "./components/CVPreview";
import "./App.css";

function App() {
  const [cvData, setCvData] = useState(mockData);

  function handleGeneralChange(e) {
    const { name, value } = e.target;
    setCvData((prev) => ({
      ...prev,
      generalInfo: {
        ...prev.generalInfo,
        [name]: value,
      },
    }));
  }

  return (
    <>
      <div>
        <h1></h1>
      </div>
      <InputField
        data={cvData}
        label="First name"
        id="firstName"
        name="firstName"
        type="text"
        value={cvData.generalInfo.firstName}
        onChange={(e) => handleGeneralChange(e)}
      />
      <CVPreview data={cvData} />
    </>
  );
}

export default App;
