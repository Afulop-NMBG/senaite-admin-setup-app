import React from 'react'

export const InputField = ({ label, value, onChange, placeholder, mono = false }) => {
  return (
    <div className="flex flex-col gap-1.5 mb-5">
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">
            {label}
        </label>
        <input 
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className={`w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all text-sm ${
                mono ? 'font-mono text-blue-600' : 'text-slate-700'
            }`}
        />
    </div>
  );
};


export default InputField; 
