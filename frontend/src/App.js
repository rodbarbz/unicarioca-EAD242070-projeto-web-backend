import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ name: '', description: '' });
  const [editingProject, setEditingProject] = useState(null);
  const [loading, setLoading] = useState(false);

  // Função para buscar projetos do backend
  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://localhost:5000/projects');
      setProjects(response.data);
    } catch (error) {
      console.error('Erro ao buscar projetos:', error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Função para lidar com mudanças nos campos de formulário
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject(prevState => ({ ...prevState, [name]: value }));
  };

  // Função para adicionar um novo projeto
  const handleAddProject = async () => {
    if (!newProject.name || !newProject.description) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/projects', newProject);
      setProjects([...projects, { ...newProject, _id: response.data }]);
      setNewProject({ name: '', description: '' });
      scrollToSection('projectList');
    } catch (error) {
      console.error('Erro ao adicionar projeto:', error);
    } finally {
      setLoading(false);
    }
  };

  // Função para deletar um projeto
  const handleDeleteProject = async (projectId) => {
    setLoading(true);
    try {
      await axios.delete(`http://localhost:5000/projects/${projectId}`);
      setProjects(projects.filter(project => project._id !== projectId));
    } catch (error) {
      console.error('Erro ao deletar projeto:', error);
    } finally {
      setLoading(false);
    }
  };

  // Função para iniciar a edição de um projeto
  const handleEditProject = (project) => {
    setEditingProject(project._id);
    setNewProject({ name: project.name, description: project.description });
    scrollToSection(`updateProject_${project._id}`);
  };

  // Função para atualizar um projeto existente
  const handleUpdateProject = async () => {
    if (!newProject.name || !newProject.description) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    setLoading(true);
    try {
      await axios.put(`http://localhost:5000/projects/${editingProject}`, newProject);
      setProjects(projects.map(project =>
        project._id === editingProject ? { ...project, ...newProject } : project
      ));
      setEditingProject(null);
      setNewProject({ name: '', description: '' });
    } catch (error) {
      console.error('Erro ao atualizar projeto:', error);
    } finally {
      setLoading(false);
    }
  };

  // Função para rolar a tela para uma seção específica
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Menu superior */}
      <nav style={{ backgroundColor: '#f5f5f5', padding: '10px', marginBottom: '20px' }}>
        <button onClick={() => scrollToSection('projectList')}>Lista de Projetos</button>
        <button onClick={() => scrollToSection('addProject')}>Adicionar Projeto</button>
      </nav>

      {/* Seção de Lista de Projetos */}
      <section id="projectList">
        <h2>Lista de Projetos da ONG</h2>
        {projects.length === 0 ? (
          <p>Nenhum projeto foi adicionado ainda.</p>
        ) : (
          <ul>
            {projects.map((project) => (
              <li key={project._id}>
                <strong>Nome:</strong> {project.name} <br />
                <strong>Descrição:</strong> {project.description} <br />
                <button onClick={() => handleDeleteProject(project._id)}>Deletar</button>
                <button onClick={() => handleEditProject(project)}>Editar</button>
                {editingProject === project._id && (
                  <section id={`updateProject_${project._id}`} style={{ marginTop: '20px' }}>
                    <h3>Atualizar Projeto</h3>
                    <input
                      type="text"
                      name="name"
                      value={newProject.name}
                      onChange={handleInputChange}
                      placeholder="Nome do Projeto"
                    />
                    <br />
                    <input
                      type="text"
                      name="description"
                      value={newProject.description}
                      onChange={handleInputChange}
                      placeholder="Descrição do Projeto"
                    />
                    <br />
                    <button onClick={handleUpdateProject}>Salvar Alterações</button>
                  </section>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Seção para Adicionar Novo Projeto */}
      <section id="addProject" style={{ marginTop: '50px' }}>
        <h2>Adicionar Novo Projeto</h2>
        <input
          type="text"
          name="name"
          value={newProject.name}
          onChange={handleInputChange}
          placeholder="Nome do Projeto"
        />
        <br />
        <input
          type="text"
          name="description"
          value={newProject.description}
          onChange={handleInputChange}
          placeholder="Descrição do Projeto"
        />
        <br />
        <button onClick={handleAddProject} disabled={loading}>
          {loading ? 'Adicionando...' : 'Adicionar Projeto'}
        </button>
      </section>
    </div>
  );
}

export default App;