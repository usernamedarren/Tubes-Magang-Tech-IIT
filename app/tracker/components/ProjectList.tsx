"use client";
import React, { useState } from 'react';

interface Project {
  id: number;
  name: string;
  status: string;
  startDate: string;
  endDate?: string;
  user: string;
  developer: string;
  imageUrl: string; // Tambahkan atribut gambar
}

const ProjectList: React.FC<{ projects: Project[] }> = ({ projects }) => {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  const handleProjectClick = (id: number) => {
    setSelectedProjectId(selectedProjectId === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <h1 className="text-3xl font-bold text-center text-gray-800">Project List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-md rounded-lg p-5 transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
            onClick={() => handleProjectClick(project.id)}
          >
            <img src={project.imageUrl} alt={project.name} className="w-full h-32 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold text-gray-900">{project.name}</h2>
            <p
              className={`mt-2 text-sm font-medium ${
                project.status === 'Completed'
                  ? 'text-green-600'
                  : project.status === 'In Progress'
                  ? 'text-yellow-500'
                  : 'text-red-500'
              }`}
            >
              Status: {project.status}
            </p>
            {selectedProjectId === project.id && (
              <div className="mt-4">
                <p className="text-sm text-gray-700">Start Date: {project.startDate}</p>
                {project.endDate && <p className="text-sm text-gray-700">End Date: {project.endDate}</p>}
                <p className="text-sm text-gray-700">User: {project.user}</p>
                <p className="text-sm text-gray-700">Developer: {project.developer}</p>
                <p className="text-sm text-gray-700">Project ID: {project.id}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;