import React from 'react'
import InputField from './InputField';

export const StepRenderer = ({ currentStep, formData, setFormData}) => {

    const updateField = (stepKey, field, value) => {
        setFormData({
            ...formData,
            [stepKey]: {...formData[stepKey], [field]: value }
        });
    };


  return (
    <div className="min-h-[300px]">
    {/* These fields will need updating if/for api hookup */}
        {/* Department */}
        {currentStep === 1 && (
            <div className="animate-in fade-in duration-300">
                <InputField label="Title" placeholder="Chemistry" value={formData.department.title} onChange={(val) => updateField('department', 'title', val)} />
                <InputField label="Description" placeholder="Analytical Chemistry Department" value={formData.department.description} onChange={(val) => updateField('department', 'description', val)} /> 
            </div>
        )}
        {/* Analysis Category */}
        {currentStep === 2 && (
            <div className="animate-in fade-in duration-300">
                <InputField label="Title" placeholder="Water Chemistry" value={formData.category.title} onChange={(val) => updateField('category', 'title', val)} /> 
                <InputField label="Description" placeholder="Chemical water analyses" value={formData.category.description} onChange={(val) => updateField('category', 'description', val)} />
                <InputField label="Department" placeholder="Chemistry" value={formData.category.department} onChange={(val) => updateField('category', 'department', val)} />
            </div>
        )}
        {/* Analysis Services */}
        {currentStep === 3 && (
            <div className="animate-in fade-in duration-300">
                <InputField label="Title" placeholder="Calcium" value={formData.service.title} onChange={(val) => updateField('service', 'title', val)} />
                <InputField label="Unit" placeholder="mg/L" value={formData.service.unit} onChange={(val) => updateField('service', 'unit', val)} /> 
                <InputField label="Analysis Keyword" placeholder="Ca" mono value={formData.service.keyword} onChange={(val) => updateField('service', 'keyword', val)} /> 
                <InputField label="Point of Capture" placeholder="Lab" value={formData.service.poc} onChange={(val) => updateField('service', 'poc', val)} />
            </div>
        )}
        {/* Sample Type */}
        {currentStep === 4 && (
            <div className="animate-in fade-in duration-300">
                <InputField label="Title" placeholder="Water" value={formData.sampleType.title} onChange={(val) => updateField('sampleType', 'title', val)} />
                <InputField label="Prefix" placeholder="H20" value={formData.sampleType.prefix} onChange={(val) => updateField('sampleType', 'prefix', val)} /> 
                <InputField label="Minimum Volume" placeholder="100 ml" value={formData.sampleType.volume} onChange={(val) => updateField('sampleType', 'volume', val)} /> 
            </div> 
        )}
        {/* Client */}
        {currentStep === 5 && (
            <div className="animate-in fade-in duration-300">
                <InputField label="Name" placeholder="Happy Hills" value={formData.client.name} onChange={(val) => updateField('client', 'name', val)} /> 
                <InputField label="Client ID" placeholder="HH" value={formData.client.id} onChange={(val) => updateField('client', 'id', val)} /> 
            </div>
        )}
        {/* Client Contact */}
        {currentStep === 6 && (
            <div className="animate-in fade-in duration-300">
                <InputField label="Full Name" placeholder="Person of Contact" value={formData.contact.name} onChange={(val) => updateField('contact', 'name', val)} />
                <InputField label="Email" placeholder="email@email.com" value={formData.contact.email} onChange={(val) => updateField('contact', 'email', val)} /> 
            </div>
        )}

    </div>
  )
}


export default StepRenderer;