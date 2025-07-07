import React from 'react';
import { Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  githubUrl: string;
  technologies: string[];
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'Dockerized App using Ansible',
      description: 'Python application automated with Ansible & Docker for seamless deployment and configuration management.',
      category: 'CI/CD & Automation',
      githubUrl: 'https://github.com/ujjwalshivhare/dockerized_app_using_ansible',
      technologies: ['Ansible', 'Docker', 'Python', 'YAML']
    },
    {
      id: '2',
      title: 'CI/CD Project',
      description: 'Complete CI/CD pipeline implementation with automated testing, building, and deployment workflows.',
      category: 'CI/CD & DevOps',
      githubUrl: 'https://github.com/ujjwalshivhare/CICD_project',
      technologies: ['Jenkins', 'Docker', 'Git', 'CI/CD', 'Automation']
    },
    {
      id: '3',
      title: 'Dockerized Python App',
      description: 'Application containerized using Dockerfile with automated builds and Docker Hub integration.',
      category: 'Containers & Infra',
      githubUrl: 'https://github.com/ujjwalshivhare/Dockerization_of_app.py-file1',
      technologies: ['Docker', 'Python', 'Docker Hub', 'CI/CD']
    }
  ];

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my DevOps projects showcasing automation, containerization, and infrastructure management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-xs text-purple-400 bg-purple-500/20 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-800/50 text-gray-300 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Github size={16} />
                    <span className="text-sm">View Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;