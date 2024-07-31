import { useState } from "react";
import { Input } from "@/components/ui/input";

const FileUploadSection = () => {
  const [files, setFiles] = useState([
    "Archivo_cargado_Ordenador_1",
    "Archivo_cargado_Ordenador_2",
  ]);

  const handleFileUpload = (event) => {
    const newFile = event.target.files[0];
    if (newFile) {
      setFiles([...files, newFile.name]);
      // Aquí irías la lógica para subir el archivo al servidor
      console.log("Archivo subido:", newFile.name);
    }
  };

  return (
    <div>
      <h3 className="mt-8 mb-4">Otros archivos</h3>
      <ul className="space-y-2">
        {files.map((file, index) => (
          <li
            key={index}
            className="p-2 border rounded"
          >
            {file}
          </li>
        ))}
      </ul>
      <form className="mt-4">
        <Input
          type="file"
          id="file-upload"
          className="hidden"
          onChange={handleFileUpload}
        />
        <img
          src="/icons/plus.svg"
          alt=""
        />
        <Input
          type="file"
          className="cursor-pointer text-blue-500"
        />
      </form>
    </div>
  );
};

export default FileUploadSection;
