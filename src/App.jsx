import React, { useState } from 'react';
import StepRenderer from './components/StepRenderer';

const SetupWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // Persist data for each step so back doesn't delete input data
  const [formData, setFormData] = useState({
    department:{ title: '', description: ''},
    category: { title: '', description: '', department: ''},
    service: { title: '', unit: '', keyword: '', poc: '', category: '', department: ''},
    sampleType: { title: '', prefix: '', volume: ''},
    client: { name:'', id:''},
    contact: {name: '', email: ''}
  });

  const steps = [
    {id: 1, title: 'Lab Department', description: 'Top-level organizational container for laboratory activities' },
    {id: 2, title: 'Analysis Category', description: 'Classification groups for analysis service' },
    {id: 3, title: 'Analysis Services', description: 'Laboratory Tests and their technical specifications' },
    {id: 4, title: 'Sample Type', description: 'Material definitions and physical specimen characteristics' },
    {id: 5, title: 'Client', description: 'Entities requesting laboratory services and billing information' },
    {id: 6, title: 'Client Contact', description: 'Individual contact for client' },
  ];

  const currentStepData = steps[currentStep -1]

  const handleNext = () => setCurrentStep((prev) => Math.min(steps.length, prev + 1));
  const handleBack = () => setCurrentStep((prev) => Math.max(1, prev - 1))

  return (
    <div className="flex min-h-screen bg-gray-50 text-slate-900 font-sans">
      {/* Sidebar nav */}
      <aside className="w-80 bg-white border-r border-gray-200 p-8 flex flex-col">
        <div className="mb-10">
          <h1 className="text-xl font-bold tracking-tight text-blue-600">Senaite <span className="font-light text-slate-400">Admin Setup</span></h1>
        </div>
      
      <nav className="flex-1">
        <ul className="space-y-6">
          {steps.map((s) => (
            <li key={s.id} className="flex gap-4">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 text-sm font-bold
              ${currentStep === s.id ? 'border-blue-600 text-blue-600' : 
                currentStep > s.id ? 'border-green-500 bg-green-500 text-white' : 'border-gray-300 text-gray-400'}`}>
                  {currentStep > s.id ? 'x' : s.id}
                </div>
                <div>
                  <h3 className={`text-sm font-semibold ${currentStep === s.id ? 'text-slate-900' : 'text-slate-400'}`}>
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-400">{s.description}</p>
                </div>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="mt-auto pt-6 border-t border-gray-100 text-[10px] text-slate-400 uppercase tracking-widest">
        MVP v0.1.0
      </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center items-center p-12">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-gray-100 overflow-hidden">
          {/* Progress bar */}
          <div className="h-1 bg-gray-100 w-full">
            <div 
              className="h-full bg-blue-600 transition-all duration-500"
              style={{ width: `${(currentStep / steps.length) * 100}%` }}
            />
          </div>

          {/* Form container */}
          <div className="p-10">
            <h2 className="text-2xl font-bold mb-2 uppercase tracking-tight">{currentStepData.title}</h2>
            <p className="text-slate-500 mb-8 text-sm">{currentStepData.description}</p>             
              <StepRenderer
                currentStep={currentStep}
                formData={formData}
                setFormData={setFormData}
              />

            {/* Nav buttons */}
            <div className="flex justify-between mt-12 pt-8 border-t border-gray-100">
              {/* conditional back */}
              {currentStep > 1 ? (
                <button 
                  onClick={handleBack}
                  className="px-8 py-2 bg-slate-900 text-white font-medium rounded-lg hover:bg-blue-600 transition shadow-lg shadow-slate-200"
                >
                Back   
                </button>
              ) : ( 
                <div /> 
              )}

              {/* continue */}
              <button 
                onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
                className="px-8 py-2 bg-slate-900 text-white font-medium rounded-lg hover:bg-blue-600 transition shadow-lg shadow-slate-200"
            >
              {currentStep === steps.length ? 'Complete Setup' : 'Continue'}
            </button>
            </div>
            </div>
          </div>
        </main>
       </div>
  ); 
};


export default SetupWizard; 

