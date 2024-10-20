import { useState } from "react";
import { Download, X } from "lucide-react";

const FileManagement = () => {
  const [files, setFiles] = useState<string[]>([
    "Vendor_Registration.pdf",
    "10K_Report.pdf",
    "Annual_Report.pdf",
    "IP_CUSD_Presentation.pptx",
  ]);
  const [newFile, setNewFile] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const addFile = () => {
    if (newFile.trim()) {
      setFiles([...files, newFile]);
      setNewFile("");
    }
  };

  const fakeDownloadFile = (fileName: string) => {
    alert(`Downloading ${fileName}`);
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const filteredFiles = files.filter((file) =>
    file.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-myblack p-6 rounded-lg w-full mt-12 mb-12">
      <h2 className="font-[Montserrat] font-bold text-2xl text-myoffwhite mb-4">
        File Management
      </h2>
      <div className="mb-4">
        <input
          type="text"
          value={newFile}
          onChange={(e) => setNewFile(e.target.value)}
          className="font-[Outfit] p-2 rounded w-full font-montserrat"
          placeholder="Add a new file"
        />
        <button
          onClick={addFile}
          className="font-[Outfit] mt-2 bg-mymint text-myblack p-2 rounded w-full"
        >
          Add File
        </button>
      </div>
      <div className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="font-[Outfit] p-2 rounded w-full font-montserrat"
          placeholder="Search files"
        />
      </div>
      <ul className="space-y-2">
        {filteredFiles.map((file, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-myoffwhite p-2 rounded w-full"
          >
            <span className="flex-1">{file}</span>
            <div className="flex space-x-2">
              <Download
                className="cursor-pointer text-mylightblue"
                onClick={() => fakeDownloadFile(file)}
              />
              <X
                className="cursor-pointer text-red-500"
                onClick={() => removeFile(index)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileManagement;
