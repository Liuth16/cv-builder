import { useState } from "react";
import InputField from "./components/InputField";
import mockData from "./components/mockData";
import CVPreview from "./components/CVPreview";
import CVForm from "./components/CVForm";
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

  function handleEducationChange(e, index) {
    const { name, value } = e.target;
    setCvData((prev) => ({
      ...prev,
      education: prev.education.map((edu, i) =>
        i === index ? { ...edu, [name]: value } : edu
      ),
    }));
  }

  function handleExperienceChange(e, index) {
    const { name, value } = e.target;
    setCvData((prev) => ({
      ...prev,
      experience: prev.experience.map((exp, i) =>
        i === index ? { ...exp, [name]: value } : exp
      ),
    }));
  }

  return (
    <>
      <div>
        <CVForm
          data={cvData}
          onGeneralChange={handleGeneralChange}
          onEducationChange={handleEducationChange}
          onExperienceChange={handleExperienceChange}
        />
        <CVPreview data={cvData} />
      </div>
    </>
  );
}

export default App;
