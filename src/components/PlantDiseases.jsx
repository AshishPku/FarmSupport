import React, { useState } from "react";
import {
  Upload,
  Camera,
  AlertTriangle,
  Search,
  FileCheck,
  Leaf,
  FileX,
  Info,
  VolumeX,
  Microscope,
  Pill,
  PanelRightOpen,
  PanelRightClose,
  Check,
  X,
  ArrowRight,
  Beaker,
  ScanFace,
} from "lucide-react";

const IdentifyPlantDiseases = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("idle"); // idle, uploading, success, error
  const [diagnosisExpanded, setDiagnosisExpanded] = useState(true);
  const [activeTreatment, setActiveTreatment] = useState(0);

  // Simulate diagnosis results - would come from ML model in production
  const [diagnosisResults, setDiagnosisResults] = useState(null);

  // Sample diagnosis results
  const sampleDiagnosis = {
    disease: "Late Blight",
    scientificName: "Phytophthora infestans",
    confidence: 97,
    hostPlant: "Tomato",
    severity: "High",
    spreadRisk: "High",
    symptoms: [
      "Brown/black water-soaked lesions on leaves",
      "White fuzzy growth on undersides of leaves in humid conditions",
      "Rapidly spreading brown patches on foliage",
      "Dark lesions on stems and petioles",
      "Brown, firm rot on green or ripening fruit",
    ],
    treatments: [
      {
        type: "Chemical",
        icon: <Beaker className="text-blue-500" />,
        options: [
          "Apply chlorothalonil fungicide at 7-day intervals",
          "Copper-based fungicides can be effective in early stages",
          "Mancozeb or maneb products if conditions are favorable for disease",
        ],
        timing: "Apply immediately and repeat after any rainfall",
        precautions:
          "Follow label directions. Wear protective equipment. Observe pre-harvest intervals.",
      },
      {
        type: "Organic",
        icon: <Leaf className="text-green-500" />,
        options: [
          "Copper-based organic fungicides (Bordeaux mixture)",
          "Bacillus subtilis biological fungicides",
          "Neem oil solutions applied weekly",
        ],
        timing: "Start at first symptoms and repeat every 5-7 days",
        precautions:
          "Even organic treatments require safety measures and timing considerations.",
      },
      {
        type: "Cultural",
        icon: <VolumeX className="text-red-500" />,
        options: [
          "Remove and destroy all infected plant parts",
          "Improve air circulation by proper plant spacing",
          "Avoid overhead watering - use drip irrigation",
          "Practice crop rotation (do not plant tomatoes/potatoes in same location for 3-4 years)",
        ],
        timing: "Implement immediately and maintain throughout growing season",
        precautions:
          "Dispose of infected material away from garden areas. Don't compost.",
      },
    ],
    prevention: [
      "Plant resistant varieties (look for varieties with late blight resistance)",
      "Ensure proper spacing between plants for air circulation",
      "Use mulch to prevent soil splashing onto leaves",
      "Water at the base rather than overhead",
      "Maintain preventative fungicide program in high-risk areas",
    ],
    additionalInfo:
      "Late blight is the same disease that caused the Irish Potato Famine in the 1840s. It thrives in cool, wet conditions (60-70°F with high humidity). It can destroy entire crops within 7-10 days if left untreated in favorable conditions.",
  };

  // Handle file upload simulation
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadStatus("uploading");

      // Create a URL for the uploaded image
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);

      // Simulate API call delay
      setTimeout(() => {
        setUploadStatus("success");
        setDiagnosisResults(sampleDiagnosis);
      }, 2000);
    }
  };

  // Handle camera capture simulation
  const handleCameraCapture = () => {
    // In a real app, this would access the device camera
    // For now, we'll just set a placeholder
    setUploadStatus("uploading");

    // Simulate placeholder image (would be camera capture in real app)
    setUploadedImage("/api/placeholder/400/320");

    // Simulate API call delay
    setTimeout(() => {
      setUploadStatus("success");
      setDiagnosisResults(sampleDiagnosis);
    }, 2000);
  };

  // Handle reset of the form
  const handleReset = () => {
    setUploadedImage(null);
    setUploadStatus("idle");
    setDiagnosisResults(null);
  };

  // Function to get severity color
  const getSeverityColor = (severity) => {
    switch (severity) {
      case "Low":
        return "bg-green-500";
      case "Medium":
        return "bg-yellow-500";
      case "High":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <section
      id="plantDiseases"
      className="py-16 bg-gradient-to-b from-green-50 to-blue-50"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-full h-64 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-green-600"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-blue-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center mb-4">
            <Microscope className="h-8 w-8 text-green-600 mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold text-green-800">
              Identify Plant Diseases
            </h2>
          </div>
          <p className="text-lg text-green-700 max-w-3xl mx-auto">
            Upload photos of plant issues and receive instant disease
            identification and treatment options
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-green-200">
          {/* Header section */}
          <div className="bg-gradient-to-r from-green-700 to-blue-600 text-white p-6 md:p-8">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Plant Health Diagnostics
              </h3>
              <p className="opacity-90">
                Our AI-powered system can identify over 50 common plant diseases
                and provide science-backed treatment recommendations.
              </p>
              <div className="flex items-center mt-4 text-sm opacity-80">
                <ScanFace className="h-5 w-5 mr-1" />
                <span>
                  Advanced machine learning technology with 96% diagnostic
                  accuracy
                </span>
              </div>
            </div>
          </div>

          {/* Upload Area */}
          <div className="p-6">
            <div className="max-w-4xl mx-auto">
              {uploadStatus === "idle" && (
                <div className="bg-green-50 rounded-xl p-8 border-2 border-dashed border-green-200">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Upload className="h-10 w-10 text-green-600" />
                    </div>
                    <h4 className="text-xl font-medium text-green-800 mb-2">
                      Upload a Photo for Diagnosis
                    </h4>
                    <p className="text-gray-600 max-w-md mx-auto mb-6">
                      Take a clear photo of the affected plant part (leaves,
                      stems, fruit) for the most accurate diagnosis
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <label className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg font-medium cursor-pointer">
                        <FileCheck className="h-5 w-5 mr-2" />
                        Upload Photo
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleFileUpload}
                        />
                      </label>

                      <button
                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium"
                        onClick={handleCameraCapture}
                      >
                        <Camera className="h-5 w-5 mr-2" />
                        Take Photo
                      </button>
                    </div>

                    <div className="mt-6 text-sm text-gray-500">
                      <p>Supported formats: JPG, PNG, HEIC • Max size: 20MB</p>
                    </div>
                  </div>
                </div>
              )}

              {uploadStatus === "uploading" && (
                <div className="bg-blue-50 rounded-xl p-8 border-2 border-blue-200">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
                    </div>
                    <h4 className="text-xl font-medium text-blue-800 mb-2">
                      Analyzing Your Image
                    </h4>
                    <p className="text-gray-600 max-w-md mx-auto mb-6">
                      Our AI is examining leaf patterns, discoloration, and
                      tissue damage to identify the issue...
                    </p>

                    <div className="w-full max-w-md mx-auto bg-blue-100 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full animate-pulse w-2/3"></div>
                    </div>

                    {uploadedImage && (
                      <div className="mt-8 relative max-w-md mx-auto">
                        <div className="aspect-w-4 aspect-h-3 bg-gray-100 rounded-lg overflow-hidden">
                          <img
                            src={uploadedImage}
                            alt="Uploaded plant"
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute inset-0 bg-blue-900 bg-opacity-20 flex items-center justify-center">
                            <div className="p-2 bg-white bg-opacity-90 rounded-lg">
                              <Search className="h-8 w-8 text-blue-600 animate-pulse" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {uploadStatus === "success" && diagnosisResults && (
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-medium text-green-800 mb-1">
                        Diagnosis Results
                      </h4>
                      <p className="text-sm text-gray-600">
                        Analysis completed • {new Date().toLocaleTimeString()}
                      </p>
                    </div>
                    <button
                      className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200"
                      onClick={handleReset}
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="grid md:grid-cols-5 gap-6">
                    {/* Image Column */}
                    <div className="md:col-span-2">
                      <div className="bg-gray-100 rounded-lg overflow-hidden">
                        <img
                          src={uploadedImage}
                          alt="Infected plant"
                          className="object-cover w-full h-full"
                        />
                      </div>

                      <div className="mt-4 bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                        <div className="flex">
                          <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5 mr-2" />
                          <div>
                            <h5 className="font-medium text-yellow-800 mb-1">
                              Disease Alert
                            </h5>
                            <p className="text-sm text-yellow-700">
                              This condition requires prompt attention to
                              prevent spread to healthy plants
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Diagnosis Column */}
                    <div className="md:col-span-3 space-y-5">
                      <div className="bg-white rounded-lg p-5 border border-green-200">
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              {diagnosisResults.confidence}% Confidence
                            </span>
                            <h4 className="text-xl font-bold text-gray-900 mt-2">
                              {diagnosisResults.disease}
                            </h4>
                            <p className="text-sm italic text-gray-500 mt-1">
                              {diagnosisResults.scientificName}
                            </p>
                          </div>
                          <button
                            className="p-1 rounded-full bg-green-50 text-green-600"
                            onClick={() =>
                              setDiagnosisExpanded(!diagnosisExpanded)
                            }
                          >
                            {diagnosisExpanded ? (
                              <PanelRightClose className="h-5 w-5" />
                            ) : (
                              <PanelRightOpen className="h-5 w-5" />
                            )}
                          </button>
                        </div>

                        {diagnosisExpanded && (
                          <div className="mt-4 pt-4 border-t border-green-100">
                            <div className="grid grid-cols-3 gap-4 mb-4">
                              <div>
                                <h5 className="text-xs font-medium text-gray-500 mb-1">
                                  Host Plant
                                </h5>
                                <p className="text-sm font-medium">
                                  {diagnosisResults.hostPlant}
                                </p>
                              </div>
                              <div>
                                <h5 className="text-xs font-medium text-gray-500 mb-1">
                                  Severity
                                </h5>
                                <div className="flex items-center">
                                  <div
                                    className={`w-2 h-2 rounded-full ${getSeverityColor(
                                      diagnosisResults.severity
                                    )} mr-1`}
                                  ></div>
                                  <p className="text-sm font-medium">
                                    {diagnosisResults.severity}
                                  </p>
                                </div>
                              </div>
                              <div>
                                <h5 className="text-xs font-medium text-gray-500 mb-1">
                                  Spread Risk
                                </h5>
                                <div className="flex items-center">
                                  <div
                                    className={`w-2 h-2 rounded-full ${getSeverityColor(
                                      diagnosisResults.spreadRisk
                                    )} mr-1`}
                                  ></div>
                                  <p className="text-sm font-medium">
                                    {diagnosisResults.spreadRisk}
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="mb-4">
                              <h5 className="text-sm font-medium text-gray-700 mb-2">
                                Symptoms Identified
                              </h5>
                              <ul className="space-y-1 pl-5 list-disc text-sm text-gray-600">
                                {diagnosisResults.symptoms.map(
                                  (symptom, index) => (
                                    <li key={index}>{symptom}</li>
                                  )
                                )}
                              </ul>
                            </div>

                            <div>
                              <div className="flex items-center">
                                <Info className="h-4 w-4 text-blue-500 mr-1" />
                                <h5 className="text-sm font-medium text-gray-700">
                                  Additional Information
                                </h5>
                              </div>
                              <p className="text-sm text-gray-600 mt-1">
                                {diagnosisResults.additionalInfo}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Treatment Options */}
                      <div className="bg-white rounded-lg p-5 border border-blue-200">
                        <h4 className="text-lg font-medium text-blue-800 mb-4">
                          Treatment Recommendations
                        </h4>

                        <div className="flex space-x-2 mb-4">
                          {diagnosisResults.treatments.map(
                            (treatment, index) => (
                              <button
                                key={index}
                                className={`px-4 py-2 rounded-lg font-medium text-sm flex items-center ${
                                  activeTreatment === index
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                                onClick={() => setActiveTreatment(index)}
                              >
                                <span className="mr-2">{treatment.icon}</span>
                                {treatment.type}
                              </button>
                            )
                          )}
                        </div>

                        <div className="bg-blue-50 rounded-lg p-4">
                          <div className="space-y-3">
                            <div>
                              <h5 className="font-medium text-blue-800 mb-2">
                                Recommended Actions
                              </h5>
                              <ul className="space-y-2">
                                {diagnosisResults.treatments[
                                  activeTreatment
                                ].options.map((option, index) => (
                                  <li key={index} className="flex items-start">
                                    <Check className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5 mr-2" />
                                    <span className="text-gray-700">
                                      {option}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-3 border-t border-blue-100">
                              <div>
                                <h5 className="text-sm font-medium text-blue-800 mb-1">
                                  Application Timing
                                </h5>
                                <p className="text-sm text-gray-700">
                                  {
                                    diagnosisResults.treatments[activeTreatment]
                                      .timing
                                  }
                                </p>
                              </div>
                              <div>
                                <h5 className="text-sm font-medium text-blue-800 mb-1">
                                  Safety Precautions
                                </h5>
                                <p className="text-sm text-gray-700">
                                  {
                                    diagnosisResults.treatments[activeTreatment]
                                      .precautions
                                  }
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Prevention Tips */}
                      <div className="bg-white rounded-lg p-5 border border-purple-200">
                        <h4 className="text-lg font-medium text-purple-800 mb-3">
                          Prevention Tips
                        </h4>

                        <ul className="space-y-2">
                          {diagnosisResults.prevention.map((tip, index) => (
                            <li key={index} className="flex items-start">
                              <div className="flex-shrink-0 p-1 bg-purple-100 rounded-full mt-0.5 mr-2">
                                <Pill className="h-4 w-4 text-purple-600" />
                              </div>
                              <span className="text-gray-700 text-sm">
                                {tip}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="bg-green-50 px-6 py-4 text-center text-sm text-gray-600 border-t border-green-100">
            <p>
              Disease diagnosis is powered by agricultural research and machine
              learning algorithms.
            </p>
            <button className="text-green-600 font-medium hover:underline flex items-center mx-auto mt-1">
              View disease reference library{" "}
              <ArrowRight className="h-4 w-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdentifyPlantDiseases;
