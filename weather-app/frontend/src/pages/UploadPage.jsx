import { useState } from "react";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";

export default function UploadPage() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) return alert("Please select a CSV file.");
    alert(`Uploading: ${selectedFile.name}`);
  };

  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-xl bg-white border border-neutral-200 rounded-2xl shadow-xl p-10 md:p-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900 text-center mb-3">
          Upload Weather Data
        </h1>
        <p className="text-center text-neutral-500 text-base mb-8">
          Upload a clean CSV to visualize trends and power our AI engine.
        </p>

        <label
          htmlFor="fileUpload"
          className="flex flex-col items-center justify-center gap-2 py-10 px-6 border border-dashed border-neutral-300 bg-neutral-50 hover:bg-neutral-100 rounded-xl transition cursor-pointer"
        >
          <ArrowUpTrayIcon className="h-8 w-8 text-neutral-400" />
          <span className="text-neutral-600 font-medium">
            {selectedFile ? "Change file" : "Click or drag to upload"}
          </span>
          <p className="text-xs text-neutral-400">CSV only • 5MB max</p>
          <input
            id="fileUpload"
            type="file"
            accept=".csv"
            onChange={handleFileChange}
            className="hidden"
          />
          {selectedFile && (
            <p className="text-sm text-neutral-500 mt-2">📄 {selectedFile.name}</p>
          )}
        </label>

        <button
          onClick={handleUpload}
          className="mt-8 w-full py-3 bg-neutral-900 hover:bg-neutral-800 text-white text-base font-medium rounded-lg transition"
        >
          Upload File
        </button>
      </div>
    </div>
  );
}
