"use client";
import React, { useState, useMemo } from 'react';

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

type SortField = 'name' | 'status' | 'startDate';
type SortOrder = 'asc' | 'desc';

const projects = [
  { id: 1, name: 'Project Alpha', status: 'Sedang Berjalan', startDate: '2023-01-01', user: 'User A', developer: 'Dev A', imageUrl: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Project Beta', status: 'Selesai', startDate: '2022-01-01', endDate: '2022-12-31', user: 'User B', developer: 'Dev B', imageUrl: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Project Gamma', status: 'Belum Dimulai', startDate: '2023-05-01', user: 'User C', developer: 'Dev C', imageUrl: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Project Delta', status: 'Sedang Berjalan', startDate: '2023-03-01', user: 'User D', developer: 'Dev D', imageUrl: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Project Epsilon', status: 'Sedang Berjalan', startDate: '2023-04-01', user: 'User E', developer: 'Dev E', imageUrl: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Project Zeta', status: 'Selesai', startDate: '2022-02-01', endDate: '2022-11-30', user: 'User F', developer: 'Dev F', imageUrl: 'https://via.placeholder.com/150' },
  { id: 7, name: 'Project Eta', status: 'Belum Dimulai', startDate: '2023-06-01', user: 'User G', developer: 'Dev G', imageUrl: 'https://via.placeholder.com/150' },
  { id: 8, name: 'Project Theta', status: 'Sedang Berjalan', startDate: '2023-07-01', user: 'User H', developer: 'Dev H', imageUrl: 'https://via.placeholder.com/150' },
  { id: 9, name: 'Project Iota', status: 'Selesai', startDate: '2022-03-01', endDate: '2022-12-31', user: 'User I', developer: 'Dev I', imageUrl: 'https://via.placeholder.com/150' },
  { id: 10, name: 'Project Kappa', status: 'Sedang Berjalan', startDate: '2023-08-01', user: 'User J', developer: 'Dev J', imageUrl: 'https://via.placeholder.com/150' },
  { id: 11, name: 'Project Lambda', status: 'Belum Dimulai', startDate: '2023-09-01', user: 'User K', developer: 'Dev K', imageUrl: 'https://via.placeholder.com/150' },
  { id: 12, name: 'Project Mu', status: 'Sedang Berjalan', startDate: '2023-10-01', user: 'User L', developer: 'Dev L', imageUrl: 'https://via.placeholder.com/150' },
  { id: 13, name: 'Project Nu', status: 'Selesai', startDate: '2022-04-01', endDate: '2022-12-31', user: 'User M', developer: 'Dev M', imageUrl: 'https://via.placeholder.com/150' },
  { id: 14, name: 'Project Xi', status: 'Sedang Berjalan', startDate: '2023-11-01', user: 'User N', developer: 'Dev N', imageUrl: 'https://via.placeholder.com/150' },
  { id: 15, name: 'Project Omega', status: 'Belum Dimulai', startDate: '2023-12-01', user: 'User O', developer: 'Dev O', imageUrl: 'https://via.placeholder.com/150' },
  { id: 16, name: 'Project Pi', status: 'Sedang Berjalan', startDate: '2023-01-15', user: 'User P', developer: 'Dev P', imageUrl: 'https://via.placeholder.com/150' },
  { id: 17, name: 'Project Rho', status: 'Selesai', startDate: '2022-05-01', endDate: '2022-12-31', user: 'User Q', developer: 'Dev Q', imageUrl: 'https://via.placeholder.com/150' },
  { id: 18, name: 'Project Sigma', status: 'Sedang Berjalan', startDate: '2023-02-01', user: 'User R', developer: 'Dev R', imageUrl: 'https://via.placeholder.com/150' },
  { id: 19, name: 'Project Tau', status: 'Belum Dimulai', startDate: '2023-03-01', user: 'User S', developer: 'Dev S', imageUrl: 'https://via.placeholder.com/150' },
  { id: 20, name: 'Project Upsilon', status: 'Sedang Berjalan', startDate: '2023-04-15', user: 'User T', developer: 'Dev T', imageUrl: 'https://via.placeholder.com/150' },
];

const ProjectList: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [sortField, setSortField] = useState<SortField>('name');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  // Filter and sort projects
  const filteredAndSortedProjects = useMemo(() => {
    return projects
      .filter(project => {
        const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'all' || project.status === statusFilter;
        return matchesSearch && matchesStatus;
      })
      .sort((a, b) => {
        if (sortOrder === 'asc') {
          return a[sortField] > b[sortField] ? 1 : -1;
        }
        return a[sortField] < b[sortField] ? 1 : -1;
      });
  }, [projects, searchTerm, statusFilter, sortField, sortOrder]);

  const handleProjectClick = (id: number) => {
    setSelectedProjectId(selectedProjectId === id ? null : id);
  };

  const handleSortChange = (field: SortField) => {
    if (field === sortField) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <h1 className="text-3xl font-bold text-center text-gray-800">Project List</h1>
      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search projects..."
          className="p-2 border rounded-md flex-1"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="p-2 border rounded-md"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">Semua Status</option>
          <option value="Belum Dimulai">Belum Dimulai</option>
            <option value="Sedang Berjalan">Sedang Berjalan</option>
          <option value="Selesai">Selesai</option>
        </select>
        <select
          className="p-2 border rounded-md"
          value={`${sortField}-${sortOrder}`}
          onChange={(e) => {
            const [field, order] = e.target.value.split('-');
            setSortField(field as SortField);
            setSortOrder(order as SortOrder);
          }}
        >
          <option value="name-asc">Nama (A-Z)</option>
          <option value="name-desc">Nama (Z-A)</option>
          <option value="status-asc">Status (A-Z)</option>
          <option value="status-desc">Status (Z-A)</option>
          <option value="startDate-asc">Tanggal Mulai (Terlawas)</option>
          <option value="startDate-desc">Tanggal Selesai (Teranyar)</option>
        </select>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredAndSortedProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-md rounded-lg p-5 transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
            onClick={() => handleProjectClick(project.id)}
          >
            <img src={project.imageUrl} alt={project.name} className="w-full h-32 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold text-gray-900">{project.name}</h2>
            <p
              className={`mt-2 text-sm font-medium ${
                project.status === 'Selesai'
                  ? 'text-green-600'
                  : project.status === 'Sedang Berjalan'
                  ? 'text-yellow-500'
                  : 'text-red-500'
              }`}
            >
              Status: {project.status}
            </p>
            {selectedProjectId === project.id && (
              <div className="mt-4">
                <p className="text-sm text-gray-700">Tanggal Mulai: {project.startDate}</p>
                {project.endDate && <p className="text-sm text-gray-700">Tanggal Selesai: {project.endDate}</p>}
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