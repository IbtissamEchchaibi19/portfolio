'use client' // Add this line at the very top

import { Metadata } from 'next'
import { AnimatedBackground } from '@/components/3d/animated-background'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Award, Calendar, ExternalLink, BookOpen, Trophy, Star } from 'lucide-react'

// Note: You'll need to move metadata to a separate layout or parent component
// since client components can't export metadata
// export const metadata: Metadata = {
//   title: 'Certifications | Ibtissam Ech-Chaibi',
//   description: 'Professional certifications and courses completed in AI, Machine Learning, Data Science, and Web Development.',
// }

const certifications = [
  {
    title: 'Data Analysis with Python',
    provider: 'IBM',
    issued: 'Apr 2024',
    skills: ['Matplotlib', 'SQL', 'Python (Programming Language)', 'pandas', 'Seaborn'],
    logo: 'IBM',
    hasCredential: true,
    link: 'https://www.your-credential-link.com/python-data-analysis'
  },
  {
    title: 'HTML & CSS & BOOTSTRAP',
    provider: 'Noble Work Foundation',
    issued: 'Feb 2023',
    skills: ['HTML', 'CSS', 'Bootstrap'],
    logo: 'Noble Work Foundation',
    hasCredential: true,
    link: 'https://www.your-credential-link.com/html-css-bootstrap'
  },
  {
    title: 'How the internet works & the web development process',
    provider: 'Udemy',
    issued: 'Feb 2023',
    skills: ['Web Development', 'Internet Protocols'],
    logo: 'Udemy',
    hasCredential: true,
    link: 'https://www.your-credential-link.com/internet-web'
  },
  {
    title: 'AWS Cloud Technical Essentials',
    provider: 'Amazon Web Services (AWS)',
    issued: 'Aug 2024',
    skills: ['Amazon S3', 'Amazon EC2'],
    logo: 'AWS',
    hasCredential: true,
    link: 'https://www.your-credential-link.com/aws-technical-essentials'
  },
  {
    title: 'Deep Learning with Python (TensorFlow)',
    provider: 'freeCodeCamp',
    issued: 'Jul 2024',
    skills: ['Keras', 'CNC', 'spaCy', 'LSTM', 'Python (Programming Language)'],
    logo: 'freeCodeCamp',
    hasCredential: true,
    link: 'https://www.your-credential-link.com/dl-python-tensorflow'
  },
  {
    title: 'Foundational Generative AI - Certificate',
    provider: 'iNeuron.ai',
    issued: 'Jul 2024',
    skills: ['Large Language Models (LLM)', 'Pinecone', 'LlamaIndex', 'LSTM', 'Python (Programming Language)'],
    logo: 'iNeuron.ai',
    hasCredential: true,
    link: 'https://www.your-credential-link.com/foundational-generative-ai'
  },
  {
    title: 'IBM Data Science Proficiency Certificate',
    provider: 'IBM',
    issued: 'Jan 2024',
    skills: ['Matplotlib', 'Scikit-Learn', 'Applied Mathematics', 'pandas'],
    logo: 'IBM',
    hasCredential: true,
    link: 'https://www.your-credential-link.com/ibm-data-science-proficiency'
  },
  {
    title: 'Data Visualization with Python',
    provider: 'IBM',
    issued: 'May 2024',
    skills: ['Matplotlib', 'Python (Programming Language)', 'pandas', 'Seaborn'],
    logo: 'IBM',
    hasCredential: true,
    link: 'https://www.your-credential-link.com/data-visualization-python'
  },
  {
    title: 'AI Career Essentials',
    provider: 'ALX AiCE',
    issued: 'Feb 2024',
    skills: ['AI Fundamentals', 'Career Development'],
    logo: 'ALX',
    hasCredential: true,
    link: 'https://www.your-credential-link.com/ai-career-essentials'
  },
  {
    title: 'Machine Learning with Python',
    provider: 'IBM',
    issued: 'Mar 2024',
    skills: ['Scikit-Learn', 'Python (Programming Language)'],
    logo: 'IBM',
    hasCredential: true,
    link: 'https://www.your-credential-link.com/machine-learning-python'
  },
  {
    title: 'Python for Data Science, AI & Development',
    provider: 'IBM',
    issued: 'Mar 2024',
    skills: ['FastAPI', 'Matplotlib', 'Flask', 'Python (Programming Language)'],
    logo: 'IBM',
    hasCredential: true,
    link: 'https://www.your-credential-link.com/python-data-science-ai'
  },
  {
    title: 'Data Science Methodology',
    provider: 'IBM',
    issued: 'Feb 2024',
    skills: ['Data Science', 'Methodology'],
    logo: 'IBM',
    hasCredential: true,
    link: 'https://www.your-credential-link.com/data-science-methodology'
  },
  {
    title: 'Tools for Data Science',
    provider: 'IBM',
    issued: 'Feb 2024',
    skills: ['Data Science Tools'],
    logo: 'IBM',
    hasCredential: true,
    link: 'https://www.your-credential-link.com/tools-data-science'
  },
  {
    title: 'What is Data Science?',
    provider: 'IBM',
    issued: 'Feb 2024',
    skills: ['Data Science Fundamentals'],
    logo: 'IBM',
    hasCredential: true,
    link: 'https://www.your-credential-link.com/what-is-data-science'
  },
  {
    title: 'Developing Back-End Apps with Node.js and Express',
    provider: 'IBM',
    issued: 'Jan 2024',
    skills: ['React.js', 'Express.js', 'Node.js'],
    logo: 'IBM',
    hasCredential: true,
    link: 'https://www.your-credential-link.com/backend-node-express'
  },
  {
    title: 'Developing Front-End Apps with React',
    provider: 'IBM',
    issued: 'Dec 2023',
    skills: ['React.js', 'Frontend Development'],
    logo: 'IBM',
    hasCredential: true,
    link: 'https://www.your-credential-link.com/frontend-react'
  },
  {
    title: 'Introduction to Cloud Computing',
    provider: 'IBM',
    issued: 'Jan 2024',
    skills: ['Amazon S3', 'Amazon EC2'],
    logo: 'IBM',
    hasCredential: true,
    link: 'https://www.your-credential-link.com/cloud-computing'
  },
  {
    title: 'Git command',
    provider: 'Udemy',
    issued: 'Aug 2023',
    skills: ['Git'],
    logo: 'Udemy',
    hasCredential: true,
    link: 'https://www.your-credential-link.com/git-command'
  },
  {
    title: 'What is a web development framework?',
    provider: 'Udemy',
    issued: 'Apr 2023',
    skills: ['Web Development Frameworks'],
    logo: 'Udemy',
    hasCredential: true,
    link: 'https://www.your-credential-link.com/web-development-framework'
  },
  {
    title: 'TailwindCSS',
    provider: 'Udemy',
    issued: 'Apr 2023',
    skills: ['TailwindCSS'],
    logo: 'Udemy',
    hasCredential: true,
    link: 'https://www.your-credential-link.com/tailwindcss'
  }
]

function CertificationCard({ cert, index }: { cert: typeof certifications[0], index: number }) {
  return (
    <div 
      className="group relative bg-card/50 backdrop-blur-sm border rounded-lg p-6 transition-all duration-300 hover:bg-card/70 hover:scale-[1.02] hover:shadow-lg animate-fade-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {cert.title}
          </h3>
          <div className="flex items-center text-muted-foreground text-sm mb-2">
            <BookOpen className="w-4 h-4 mr-2" />
            {cert.provider}
          </div>
          <div className="flex items-center text-muted-foreground text-xs">
            <Calendar className="w-3 h-3 mr-1" />
            Issued {cert.issued}
          </div>
        </div>
        <div className="flex items-center ml-4">
          <Trophy className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>

      {cert.skills && cert.skills.length > 0 && (
        <div className="mb-4">
          <p className="text-sm font-medium text-foreground mb-2">Skills:</p>
          <div className="flex flex-wrap gap-1">
            {cert.skills.map((skill, idx) => (
              <Badge key={idx} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {cert.hasCredential && cert.link && (
        <div className="flex justify-end pt-4 border-t border-border/30">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-xs opacity-70 hover:opacity-100"
            onClick={() => window.open(cert.link, '_blank')} // Now this will work!
          >
            <ExternalLink className="w-3 h-3 mr-1" />
            View Credential
          </Button>
        </div>
      )}
    </div>
  )
}

export default function CertificationsPage() {
  const totalSkills = new Set(certifications.flatMap(cert => cert.skills || [])).size
  const providers = new Set(certifications.map(cert => cert.provider)).size

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <AnimatedBackground />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-12 md:pt-28 md:pb-16 lg:pt-32 lg:pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              {/* Main Title */}
              <div className="flex flex-col items-center justify-center mb-6">
                <div className="relative mb-4">
                  <Award className="w-12 h-12 md:w-14 md:h-14 text-primary animate-pulse" />
                  <div className="absolute inset-0 w-12 h-12 md:w-14 md:h-14 bg-primary/20 rounded-full animate-ping"></div>
                  <div className="absolute inset-0 w-12 h-12 md:w-14 md:h-14 border-2 border-primary/30 rounded-full animate-spin-slow"></div>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                  Certifications
                </h1>
              </div>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Professional certifications and courses completed in AI, Machine Learning, 
                Data Science, and Web Development to stay current with industry trends.
              </p>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto mb-8">
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 md:p-6 transition-all hover:bg-card/70 animate-fade-up hover:scale-105" style={{ animationDelay: '0.1s' }}>
                  <div className="flex items-center justify-center mb-2">
                    <Award className="w-5 h-5 md:w-6 md:h-6 text-primary mr-2" />
                    <span className="text-2xl md:text-3xl font-bold text-foreground">{certifications.length}</span>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground">Total Certificates</p>
                </div>
                
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 md:p-6 transition-all hover:bg-card/70 animate-fade-up hover:scale-105" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-center justify-center mb-2">
                    <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-primary mr-2" />
                    <span className="text-2xl md:text-3xl font-bold text-foreground">{providers}</span>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground">Providers</p>
                </div>
                
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 md:p-6 transition-all hover:bg-card/70 animate-fade-up hover:scale-105" style={{ animationDelay: '0.3s' }}>
                  <div className="flex items-center justify-center mb-2">
                    <Star className="w-5 h-5 md:w-6 md:h-6 text-primary mr-2" />
                    <span className="text-2xl md:text-3xl font-bold text-foreground">{totalSkills}</span>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground">Skills Covered</p>
                </div>
              </div>

              {/* Decorative Separator */}
              <div className="flex items-center justify-center my-8">
                <Separator className="max-w-xs opacity-30" />
                <div className="mx-4 w-2 h-2 bg-primary rounded-full"></div>
                <Separator className="max-w-xs opacity-30" />
              </div>
            </div>
          </div>
        </section>

        {/* Certifications List */}
        <section className="pb-20 md:pb-28 lg:pb-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <CertificationCard key={cert.title + cert.issued} cert={cert} index={index} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}