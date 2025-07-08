import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

interface EducationItem {
  degree: string;
  college: string;
  cgpa: string;
  passout: string;
}

interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
}

const Education: React.FC = () => {
  const education: EducationItem[] = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      college: 'Baderia Global Institute Of Engineering And Management',
      cgpa: '8.24',
      passout: '2025 (Graduated)'
    }
  ];

  const certifications: CertificationItem[] = [
    {
      name: 'Git Completion Certificate',
      issuer: 'Git',
      year: '2024'
    },
    {
      name: 'Docker Completion Certificate',
      issuer: 'Docker',
      year: '2024'
    },
    {
      name: 'Certified Jenkins Engineer',
      issuer: 'Jenkins',
      year: '2023'
    },
    {
      name: 'Kubernetes Fundamentals',
      issuer: 'CNCF',
      year: '2023'
    }
  ];

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Education & <span className="text-cyan-400">Certifications</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Academic foundation and professional certifications that drive my expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <GraduationCap className="text-cyan-400" size={28} />
              Education
            </h3>
            
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                      <GraduationCap className="text-white" size={20} />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                    <p className="text-gray-400 mb-2">{edu.college}</p>
                    
                    <div className="flex flex-wrap gap-4 mt-4">
                      <div className="flex items-center gap-2">
                        <Award className="text-yellow-400" size={16} />
                        <span className="text-yellow-400 font-semibold">CGPA: {edu.cgpa}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="text-purple-400" size={16} />
                        <span className="text-purple-400">{edu.passout}</span>
                      </div>
                    </div>
                    
                    {/* Professional Summary */}
                    <div className="mt-4 p-4 bg-gray-800/50 rounded-lg border border-cyan-500/20">
                      <h5 className="text-lg font-semibold text-cyan-400 mb-2">Professional Summary</h5>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Fresh B.Tech Computer Science graduate with a passion for DevOps and cloud technologies. 
                        Developed strong interest in coding and cloud infrastructure during academic years. 
                        Dedicated to continuous learning and exploring new technologies in the DevOps ecosystem. 
                        Eager to apply theoretical knowledge and hands-on project experience to contribute 
                        effectively in a professional DevOps environment.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full">Fresh Graduate</span>
                        <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">DevOps Enthusiast</span>
                        <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">Continuous Learner</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Award className="text-purple-400" size={28} />
              Certifications
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-900/80 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                        <Award className="text-white" size={16} />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white mb-1">{cert.name}</h4>
                      <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                      <div className="flex items-center gap-2">
                        <Calendar className="text-cyan-400" size={14} />
                        <span className="text-cyan-400 text-sm">{cert.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;