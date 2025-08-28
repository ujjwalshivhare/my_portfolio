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
      title: 'Multi-Tier Web Application on AWS',
      description: 'Complete multi-tier architecture deployed on AWS with load balancing, auto-scaling, and database integration for high availability and scalability.',
      category: 'Cloud Architecture',
      githubUrl: 'https://github.com/ujjwalshivhare/Multi-Tier-Web-Application-on-AWS',
      technologies: ['AWS', 'EC2', 'RDS', 'Load Balancer', 'Auto Scaling', 'VPC', 'CloudFormation']
    },
    {
      id: '2',
      title: 'Netflix Clone DevOps Project',
      description: 'End-to-end DevOps pipeline for Netflix clone with containerization, CI/CD, monitoring, and automated deployment using Jenkins and Docker.',
      category: 'Full DevOps Pipeline',
      githubUrl: 'https://github.com/ujjwalshivhare/Netflix-clone-DevOps-Project',
      technologies: ['Docker', 'Jenkins', 'Kubernetes', 'React', 'CI/CD', 'Monitoring', 'SonarQube']
    },
    {
      id: '3',
      title: 'Swiggy Clone DevOps',
      description: 'Complete DevOps implementation for Swiggy clone application with containerization, orchestration, and automated deployment workflows.',
      category: 'DevOps Implementation',
      githubUrl: 'https://github.com/ujjwalshivhare/Swiggy-clone-devops',
      technologies: ['Docker', 'Kubernetes', 'CI/CD', 'Microservices', 'Monitoring', 'Grafana']
    },
    {
      id: '4',
      title: 'Tetris Game DevOps',
      description: 'Classic Tetris game with complete DevOps pipeline including containerization, automated testing, and deployment strategies.',
      category: 'Game Development + DevOps',
      githubUrl: 'https://github.com/ujjwalshivhare/Tetris-game-devops',
      technologies: ['JavaScript', 'Docker', 'Jenkins', 'CI/CD', 'Testing', 'Deployment']
    },
    {
      id: '5',
      title: 'Reddit Clone DevOps',
      description: 'Reddit clone application with comprehensive DevOps practices including containerization, monitoring, and scalable deployment architecture.',
      category: 'Social Media + DevOps',
      githubUrl: 'https://github.com/ujjwalshivhare/Reddit-clone-devops',
      technologies: ['React', 'Docker', 'Kubernetes', 'CI/CD', 'Monitoring', 'Scaling', 'Jenkins']
    },
    {
      id: '6',
      title: 'Dockerized App using Ansible',
      description: 'Python application automated with Ansible playbooks and Docker for seamless deployment and configuration management across environments.',
      category: 'Automation & IaC',
      githubUrl: 'https://github.com/ujjwalshivhare/dockerized_app_using_ansible',
      technologies: ['Ansible', 'Docker', 'Python', 'YAML', 'Configuration Management', 'Automation']
    },
    {
      id: '7',
      title: 'CI/CD Project',
      description: 'Complete CI/CD pipeline implementation with automated testing, building, and deployment workflows using modern DevOps tools.',
      category: 'CI/CD & DevOps',
      githubUrl: 'https://github.com/ujjwalshivhare/CICD_project',
      technologies: ['Jenkins', 'Docker', 'Git', 'CI/CD', 'Automation', 'Pipeline']
    },
    {
      id: '8',
      title: 'Dockerization of Python App',
      description: 'Python application containerized using Dockerfile with multi-stage builds, automated builds and Docker Hub integration.',
      category: 'Containerization',
      githubUrl: 'https://github.com/ujjwalshivhare/Dockerization_of_app.py-file1',
      technologies: ['Docker', 'Python', 'Docker Hub', 'Multi-stage Build', 'Container Registry']
    },
    {
      id: '9',
      title: 'Kubernetes Cluster Setup',
      description: 'Complete Kubernetes cluster setup and configuration with worker nodes, networking, and application deployment examples.',
      category: 'Container Orchestration',
      githubUrl: 'https://github.com/ujjwalshivhare/kubernetes-cluster-setup',
      technologies: ['Kubernetes', 'Docker', 'Cluster Management', 'Networking', 'YAML']
    },
    {
      id: '10',
      title: 'Terraform AWS Infrastructure',
      description: 'Infrastructure as Code using Terraform to provision and manage AWS resources with best practices and modular approach.',
      category: 'Infrastructure as Code',
      githubUrl: 'https://github.com/ujjwalshivhare/terraform-aws-infrastructure',
      technologies: ['Terraform', 'AWS', 'IaC', 'CloudFormation', 'Infrastructure Management']
    },
    {
      id: '11',
      title: 'Monitoring Stack with Prometheus',
      description: 'Complete monitoring solution using Prometheus, Grafana, and AlertManager for application and infrastructure monitoring.',
      category: 'Monitoring & Observability',
      githubUrl: 'https://github.com/ujjwalshivhare/prometheus-monitoring-stack',
      technologies: ['Prometheus', 'Grafana', 'AlertManager', 'Monitoring', 'Observability', 'Metrics']
    },
    {
      id: '12',
      title: 'GitOps with ArgoCD',
      description: 'GitOps workflow implementation using ArgoCD for continuous deployment and application lifecycle management in Kubernetes.',
      category: 'GitOps & CD',
      githubUrl: 'https://github.com/ujjwalshivhare/gitops-argocd',
      technologies: ['ArgoCD', 'GitOps', 'Kubernetes', 'Continuous Deployment', 'Git', 'YAML']
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
            Explore my DevOps projects showcasing automation, containerization, cloud infrastructure, and modern deployment practices.
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

        {/* GitHub Profile Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/ujjwalshivhare"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-600 hover:border-cyan-500/50 rounded-lg px-6 py-3 text-white hover:text-cyan-400 transition-all duration-300 group"
          >
            <Github size={20} className="group-hover:text-cyan-400" />
            <span className="font-medium">View All Projects on GitHub</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;