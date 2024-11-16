import React from 'react';
import Layout from './components/Layout';
import ProjectList from './components/ProjectList';

const Home: React.FC = () => {
  const projects = [
    { id: 1, name: 'Project Alpha', status: 'In Progress', startDate: '2023-01-01', user: 'User A', developer: 'Dev A', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Project Beta', status: 'Completed', startDate: '2022-01-01', endDate: '2022-12-31', user: 'User B', developer: 'Dev B', imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Project Gamma', status: 'Not Started', startDate: '2023-05-01', user: 'User C', developer: 'Dev C', imageUrl: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Project Delta', status: 'In Progress', startDate: '2023-03-01', user: 'User D', developer: 'Dev D', imageUrl: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Project Epsilon', status: 'In Progress', startDate: '2023-04-01', user: 'User E', developer: 'Dev E', imageUrl: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Project Zeta', status: 'Completed', startDate: '2022-02-01', endDate: '2022-11-30', user: 'User F', developer: 'Dev F', imageUrl: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Project Eta', status: 'Not Started', startDate: '2023-06-01', user: 'User G', developer: 'Dev G', imageUrl: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Project Theta', status: 'In Progress', startDate: '2023-07-01', user: 'User H', developer: 'Dev H', imageUrl: 'https://via.placeholder.com/150' },
    { id: 9, name: 'Project Iota', status: 'Completed', startDate: '2022-03-01', endDate: '2022-12-31', user: 'User I', developer: 'Dev I', imageUrl: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Project Kappa', status: 'In Progress', startDate: '2023-08-01', user: 'User J', developer: 'Dev J', imageUrl: 'https://via.placeholder.com/150' },
    { id: 11, name: 'Project Lambda', status: 'Not Started', startDate: '2023-09-01', user: 'User K', developer: 'Dev K', imageUrl: 'https://via.placeholder.com/150' },
    { id: 12, name: 'Project Mu', status: 'In Progress', startDate: '2023-10-01', user: 'User L', developer: 'Dev L', imageUrl: 'https://via.placeholder.com/150' },
    { id: 13, name: 'Project Nu', status: 'Completed', startDate: '2022-04-01', endDate: '2022-12-31', user: 'User M', developer: 'Dev M', imageUrl: 'https://via.placeholder.com/150' },
    { id: 14, name: 'Project Xi', status: 'In Progress', startDate: '2023-11-01', user: 'User N', developer: 'Dev N', imageUrl: 'https://via.placeholder.com/150' },
    { id: 15, name: 'Project Omega', status: 'Not Started', startDate: '2023-12-01', user: 'User O', developer: 'Dev O', imageUrl: 'https://via.placeholder.com/150' },
    { id: 16, name: 'Project Pi', status: 'In Progress', startDate: '2023-01-15', user: 'User P', developer: 'Dev P', imageUrl: 'https://via.placeholder.com/150' },
    { id: 17, name: 'Project Rho', status: 'Completed', startDate: '2022-05-01', endDate: '2022-12-31', user: 'User Q', developer: 'Dev Q', imageUrl: 'https://via.placeholder.com/150' },
    { id: 18, name: 'Project Sigma', status: 'In Progress', startDate: '2023-02-01', user: 'User R', developer: 'Dev R', imageUrl: 'https://via.placeholder.com/150' },
    { id: 19, name: 'Project Tau', status: 'Not Started', startDate: '2023-03-01', user: 'User S', developer: 'Dev S', imageUrl: 'https://via.placeholder.com/150' },
    { id: 20, name: 'Project Upsilon', status: 'In Progress', startDate: '2023-04-15', user: 'User T', developer: 'Dev T', imageUrl: 'https://via.placeholder.com/150' },
  ];

  return (
    <Layout>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-700">Project Inkubator IT</h2>
        <p className="text-gray-500 mt-2">Halaman ini menampilkan daftar proyek yang sedang dikerjakan.</p>
      </div>
      <ProjectList projects={projects} />
    </Layout>
  );
};

export default Home;