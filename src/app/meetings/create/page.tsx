"use client";

import { useState } from "react";
import { Check, Bot, X, AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";

const steps = [
  "Details",
  "Participants",
  "Agenda",
  "Resources",
  "Visitors",
  "Review"
];

export default function CreateMeeting() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showAiPlanner, setShowAiPlanner] = useState(false);
  const [aiPrompt, setAiPrompt] = useState("");
  const router = useRouter();

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Simulate creation
      router.push("/");
    }
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleAiPlan = () => {
    // Simulate AI planning
    setShowAiPlanner(false);
    setCurrentStep(5); // Jump to review
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-text-main">Create Meeting</h1>
          <p className="text-text-muted mt-1">Plan and organize a new meeting.</p>
        </div>
        <button
          onClick={() => setShowAiPlanner(true)}
          className="btn-secondary flex items-center gap-2 text-primary border-primary"
        >
          <Bot className="h-5 w-5" />
          AI Planner
        </button>
      </div>

      {/* Stepper */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center flex-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm ${
                idx < currentStep ? "bg-primary text-white" :
                idx === currentStep ? "border-2 border-primary text-primary bg-white" :
                "bg-gray-100 text-gray-400"
              }`}>
                {idx < currentStep ? <Check className="h-4 w-4" /> : idx + 1}
              </div>
              <span className={`text-xs mt-2 ${idx <= currentStep ? "text-text-main font-medium" : "text-text-muted"}`}>
                {step}
              </span>
              {idx < steps.length - 1 && (
                <div className="hidden sm:block absolute w-full h-[2px] bg-gray-200 top-4 -z-10" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className="card min-h-[400px]">
        {currentStep === 0 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold border-b border-border pb-2">Meeting Details</h2>
            <div>
              <label className="block text-sm font-medium text-text-main mb-1">Meeting Title</label>
              <input type="text" className="input-field" placeholder="e.g. Weekly Sync" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-text-main mb-1">Date</label>
                <input type="date" className="input-field" />
              </div>
              <div className="flex gap-2">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-text-main mb-1">Start Time</label>
                  <input type="time" className="input-field" />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-text-main mb-1">End Time</label>
                  <input type="time" className="input-field" />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-main mb-1">Mode</label>
              <select className="input-field">
                <option>Physical</option>
                <option>Online</option>
                <option>Hybrid</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-main mb-1">Description</label>
              <textarea className="input-field" rows={3} placeholder="Brief description..."></textarea>
            </div>
          </div>
        )}

        {currentStep === 1 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold border-b border-border pb-2">Participants</h2>
            <div>
              <input type="text" className="input-field mb-4" placeholder="Search users by name or email..." />
              <div className="border border-border rounded-lg p-4 bg-gray-50 text-center text-text-muted">
                No participants added yet.
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold border-b border-border pb-2">Agenda</h2>
            <button className="btn-secondary text-sm w-full border-dashed">+ Add Agenda Item</button>
            <div className="space-y-2">
              <div className="p-3 border border-border rounded-lg bg-white flex justify-between items-center">
                <div>
                  <div className="font-medium">1. Introduction</div>
                  <div className="text-xs text-text-muted">10 mins</div>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Low</span>
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold border-b border-border pb-2">Resources</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Projector', 'Whiteboard', 'Microphone', 'Wi-Fi'].map((res) => (
                <label key={res} className="flex items-center gap-2 p-3 border border-border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input type="checkbox" className="rounded text-primary focus:ring-primary" />
                  <span className="text-sm">{res}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold border-b border-border pb-2">Visitors & Safety</h2>
            <button className="btn-secondary text-sm w-full border-dashed">+ Add External Visitor</button>
            <div className="p-4 bg-yellow-50 text-yellow-800 rounded-lg text-sm flex items-start gap-2">
              <AlertCircle className="h-5 w-5 shrink-0" />
              <p>Ensure room capacity is not exceeded. Current participants: 0, Visitors: 0.</p>
            </div>
          </div>
        )}

        {currentStep === 5 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold border-b border-border pb-2">Review & Create</h2>
            <div className="bg-gray-50 p-4 rounded-lg space-y-4">
              <div className="flex justify-between">
                <span className="text-text-muted">Readiness Score</span>
                <span className="font-bold text-success">91%</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-text-muted block">Date & Time</span>
                  <span className="font-medium">Not set</span>
                </div>
                <div>
                  <span className="text-text-muted block">Mode</span>
                  <span className="font-medium">Physical</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-6">
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className={`btn-secondary ${currentStep === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="btn-primary"
        >
          {currentStep === steps.length - 1 ? "Create Meeting" : "Next"}
        </button>
      </div>

      {/* AI Planner Modal */}
      {showAiPlanner && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-lg w-full p-6 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Bot className="text-primary" /> AI Planner
              </h2>
              <button onClick={() => setShowAiPlanner(false)} className="text-gray-400 hover:text-gray-600">
                <X className="h-6 w-6" />
              </button>
            </div>
            <p className="text-sm text-text-muted mb-4">
              Describe your meeting needs in natural language, and AI will suggest a complete plan.
            </p>
            <textarea
              className="input-field mb-4"
              rows={4}
              placeholder="e.g., I need a project review with 8 people next Tuesday. We need a projector and one external visitor."
              value={aiPrompt}
              onChange={(e) => setAiPrompt(e.target.value)}
            ></textarea>
            <div className="flex justify-end gap-2">
              <button onClick={() => setShowAiPlanner(false)} className="btn-secondary">Cancel</button>
              <button onClick={handleAiPlan} className="btn-primary">Generate Plan</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
