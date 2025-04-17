import { useState } from "react";
import mockData from "./components/mockData";
import CVPreview from "./components/CVPreview";
import CVForm from "./components/CVForm";
import Button from "./components/Button";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import "./App.css";

function App() {
  const [cvData, setCvData] = useState(mockData);
  const [isEditing, setIsEditing] = useState(true);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    contentRef: componentRef,
  });

  function handleAddEducation() {
    setCvData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          schoolName: "",
          titleOfStudy: "",
          dateOfStudy: "",
        },
      ],
    }));
  }

  function handleAddExperience() {
    setCvData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          companyName: "",
          positionTitle: "",
          mainResponsibilities: "",
          dateFrom: "",
          dateUntil: "",
        },
      ],
    }));
  }

  function handleRemoveEducation(index) {
    setCvData((prev) => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index),
    }));
  }

  function handleRemoveExperience(index) {
    setCvData((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index),
    }));
  }

  function handleEdit() {
    setIsEditing((prev) => !prev);
  }

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
      <div className="app-container">
        <CVPreview data={cvData} ref={componentRef} />
        {isEditing ? (
          <CVForm
            data={cvData}
            onGeneralChange={handleGeneralChange}
            onEducationChange={handleEducationChange}
            onExperienceChange={handleExperienceChange}
            disabled={!isEditing}
            onAddEducation={handleAddEducation}
            onAddExperience={handleAddExperience}
            onRemoveEducation={handleRemoveEducation}
            onRemoveExperience={handleRemoveExperience}
          />
        ) : null}
        <Button
          buttonClass={"edit"}
          text={isEditing ? "Save" : "Edit"}
          isEditing={isEditing}
          onClick={handleEdit}
        />
        <Button
          buttonClass={"print"}
          text={"Print"}
          onClick={handlePrint}
          disabled={isEditing}
        />
      </div>
    </>
  );
}

export default App;
