import React from 'react';
import { 
  Container, 
  Settings, 
  GitBranch, 
  Cloud, 
  Code, 
  Activity, 
  BarChart3, 
  Rocket, 
  Terminal,
  Database,
  Server,
  Shield
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ComponentType<any>;
  level: number;
  category: string;
  color: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'Docker', icon: Container, level: 90, category: 'Containerization', color: 'text-blue-400' },
    { name: 'Kubernetes', icon: Settings, level: 85, category: 'Orchestration', color: 'text-blue-500' },
    { name: 'Jenkins', icon: Settings, level: 80, category: 'CI/CD', color: 'text-red-400' },
    { name: 'GitHub Actions', icon: GitBranch, level: 85, category: 'CI/CD', color: 'text-gray-300' },
    { name: 'AWS', icon: Cloud, level: 75, category: 'Cloud', color: 'text-orange-400' },
    { name: 'Terraform', icon: Code, level: 80, category: 'IaC', color: 'text-purple-400' },
    { name: 'Ansible', icon: Settings, level: 85, category: 'Automation', color: 'text-red-500' },
    { name: 'Prometheus', icon: Activity, level: 70, category: 'Monitoring', color: 'text-orange-500' },
    { name: 'Grafana', icon: BarChart3, level: 75, category: 'Monitoring', color: 'text-orange-600' },
    { name: 'ArgoCD', icon: Rocket, level: 70, category: 'GitOps', color: 'text-cyan-400' },
    { name: 'Linux', icon: Terminal, level: 90, category: 'OS', color: 'text-yellow-400' },
    { name: 'Python', icon: Database, level: 80, category: 'Programming', color: 'text-green-400' }
  ];

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Mastering the tools and technologies that power modern DevOps workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category}
              className="bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                {category}
              </h3>
              
              <div className="space-y-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name} className="group">
                      <div className="flex items-center gap-3 mb-2">
                        <skill.icon className={`w-5 h-5 ${skill.color}`} />
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-gray-400 text-sm ml-auto">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full transition-all duration-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;