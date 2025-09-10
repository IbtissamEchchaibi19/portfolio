// Client component for interactive resume page
'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { AnimatedBackground } from '@/components/3d/animated-background'
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Calendar,
  Building,
  GraduationCap,
  Award,
  Code,
  Star,
  ExternalLink,
  Phone
} from 'lucide-react'

const personalInfo = {
  name: 'Ibtissam Ech-Chaibi',
  title: 'AI Engineer focused on Generative AI, LLMs, and multi-agent systems',
  email: 'ibtissam.echchaibi@gmail.com',
  phone: '+212610233997',
  location: 'Morocco',
  linkedin: 'linkedin.com/in/ibtissam-ech-chaibi',
  github: 'github.com/IbtissamEchchaibi19',
}

const professionalSummary = `AI Engineer focused on Generative AI, LLMs, and multi-agent systems, skilled in RAG pipelines, fine-tuning, and agentic AI, building scalable, real-world AI solutions. Expert in developing advanced AI systems with comprehensive experience in cloud platforms, evaluation frameworks, and deployment strategies.`

const experience = [
  {
    title: 'Applied AI & ML Engineer',
    company: 'Fujairah Research Center',
    location: 'UAE, Fujairah (On site)',
    period: 'Feb 2025 - Sept 2025',
    achievements: [
      'Developed a multi-agent AI system for Honey Quality Verification and Beekeeper Support, integrating honey quality verification, automated document processing, and analytics dashboards',
      'Implemented Honey Expert Agent by fine-tuning Mistral Instruct 7B on specialized honey datasets for expert knowledge retrieval, with monitoring and evaluation via Weights & Biases (W&B)',
      'Built Honey Quality Verification Agent to automate extraction and compliance validation from lab reports using Azure Document Intelligence, deepset/roberta-base-squad2, and facebook/bart-large-mnli',
      'Created Automated Dashboard Analytics Generation Agent to produce dashboards from production reports and invoices using Plotly, Dash, pdfplumber, and Azure Document Intelligence',
      'Developed a RAG pipeline with LangChain, Neo4j, and LLaMA 4 for intelligent document retrieval, with evaluation and monitoring via LangSmith',
      'Orchestrated Coordination and Deployment Agent to integrate all components into a single unified platform via multi-LLM interactions using MCP and LangGraph, deploying scalable FastAPI microservices with Docker on Azure',
    ],
    technologies: ['Python', 'HuggingFace', 'LangChain', 'LangGraph', 'LangSmith', 'Pinecone', 'Azure AI', 'FastAPI', 'Docker', 'MCP', 'W&B', 'LLaMA', 'Mistral']
  },
  {
    title: 'Applied AI & ML Engineer',
    company: 'Independent Consultant',
    location: 'UAE (Remote)',
    period: 'Jul 2025 - Aug 2025',
    achievements: [
      'Assisted in a consulting engagement focused on enhancing an aviation medical chatbot using Retrieval-Augmented Generation (RAG), NLP, and vector search',
      'Contributed to system architecture design: data preprocessing (NER, synonym mapping), knowledge base structuring, and vector database integration',
      'Built vector embeddings using domain-specific language models (BioBERT, ClinicalBERT) and integrated them into FAISS for efficient semantic search',
      'Supported roadmap planning for testing, validation, and deployment, aligning the chatbot with aviation safety and regulatory compliance requirements',
    ],
    technologies: ['Python', 'BioBERT', 'FAISS', 'NLTK']
  },
  {
    title: 'Applied AI Cloud Engineer',
    company: 'Devtospace',
    location: 'France, Paris (Remote)',
    period: 'Oct 2024 - Dec 2024',
    achievements: [
      'Developed a cloud-based KYC system using AI-powered computer vision and automated document processing on AWS infrastructure',
      'Automated identity document processing with Amazon Textract, PyTorch and OpenCV to extract structured personal data and facial images',
      'Engineered AI-driven liveness detection using Amazon Rekognition for real-time facial landmark tracking to capture authentic live user photos',
      'Designed a Flask-based REST API with screenshot prevention and session management to enhance user security',
      'Dockerized the complete application for consistent deployment and scalability, then deployed on AWS EC2 with Amazon S3 for secure document storage',
    ],
    technologies: ['PyTorch', 'OpenCV', 'Amazon Rekognition', 'Amazon Textract', 'Amazon S3', 'Flask', 'Docker', 'AWS EC2', 'AWS CloudWatch']
  },
  {
    title: 'Applied AI Engineer Intern',
    company: '3D Smart Factory',
    location: 'Morocco, Mohammedia',
    period: 'Jul 2024 - Sept 2024',
    achievements: [
      'Engineered a RAG-powered AI platform using LangChain with Google Gemini to provide personalized interview coaching, CV insights, and auto-generated application letters',
      'Developed NLP pipelines using NLTK and Hugging Face Transformers for semantic search, entity extraction, and intelligent document understanding',
      'Integrated vector search with Pinecone for fast and accurate document indexing and retrieval',
      'Designed a context-aware conversational agent that generates user-specific responses by retrieving relevant chunks from resume embeddings',
      'Implemented a job market intelligence module combining Google News and Job Search APIs to extract labor trends and power adaptive job recommendations',
      'Built a robust backend with FastAPI, exposing RESTful endpoints, then containerized the application using Docker and deployed services to AWS',
      'RAG evaluation and performance monitoring using LangSmith to track retrieval accuracy, conversational quality, and system performance',
    ],
    technologies: ['LangChain', 'Gemini Pro Vision', 'NLTK', 'SpaCy', 'Transformers', 'Pinecone', 'FastAPI', 'MongoDB', 'AWS', 'Google APIs', 'Docker', 'LangSmith']
  },
  {
    title: 'Data Scientist Hackathon Participant',
    company: 'Leyton',
    location: 'Morocco, Casablanca',
    period: 'Mar 2024 - Mar 2024',
    achievements: [
      'Engineered a Smart Retrieval System that efficiently extracts and interacts with text and images from PDFs, delivering valuable R&D insights',
      'Developed a comprehensive document analysis tool leveraging LlamaIndex and Llama 2, enabling users to query content, generate summaries, and auto-create detailed Word reports',
      'Centralized all functionalities by designing an intuitive, user-friendly interface using Streamlit',
    ],
    technologies: ['Python', 'LlamaIndex', 'LLM (Llama 2)', 'ChromaDB', 'Streamlit']
  },
]

const education = [
  {
    degree: 'Engineering degree, software engineering and digitalization',
    school: 'National High School of Electricity and Mechanics (ENSEM)',
    location: 'Morocco',
    period: 'Sept 2022 - Jun 2025',
    details: [
      'Software Engineering and Digitalization specialization',
      'Focus on AI, Machine Learning, and Digital Systems',
      'Final year student',
    ],
  },
  {
    degree: 'Diploma for Admission to National Engineering Schools',
    school: 'Preparatory Classes for Major Engineering Schools (CPGE)',
    location: 'Morocco',
    period: 'Sept 2020 - Jun 2022',
    details: [
      'Preparatory program for engineering schools',
      'Strong foundation in mathematics and science fundamentals',
      'Successfully qualified for ENSEM engineering program',
    ],
  },
]

const skills = {
  'Programming & Scripting': [
    'Python', 'JavaScript', 'Node.js', 'SQL'
  ],
  'Data Preparation & Augmentation': [
    'pandas', 'NumPy', 'NLTK', 'spaCy', 'regex', 'NLPAug', 'BeautifulSoup', 'OpenCV'
  ],
  'Databases & Vector Stores': [
    'MongoDB', 'PostgreSQL', 'MySQL', 'Weaviate', 'Pinecone', 'ChromaDB', 'FAISS', 'Elasticsearch'
  ],
  'AI Development Tools': [
    'PyTorch', 'TensorFlow', 'Hugging Face Transformers', 'LangChain', 'LangGraph', 'CrewAI', 'LlamaIndex', 'LLMs (LLaMA, Mistral, DeepSeek, Qwen)', 'MCP'
  ],
  'Cloud AI Solutions': [
    'AWS (SageMaker, Transcribe, Lex, Rekognition, Comprehend, Textract, CloudWatch, OpenSearch)', 
    'Azure (Document Intelligence, OpenAI Service, Blob Storage)', 
    'GCP (Google AI Studio, Vertex AI, Gemini, Gamma, Speech-to-Text, Dialogflow)'
  ],
  'Evaluation, Monitoring & Versioning': [
    'LangSmith', 'Weights & Biases (W&B)', 'MLflow', 'scikit-learn'
  ],
  'Deployment & Prototyping': [
    'AWS EC2', 'Docker', 'FastAPI', 'Flask', 'Hugging Face Inference', 'Streamlit', 'Gradio', 'React', 'Dash'
  ],
  'Tools & Platforms': [
    'Git/GitHub', 'Jupyter Notebook', 'VS Code', 'GitHub Copilot', 'GitHub MCP', 'n8n', 'Anaconda Prompt', 'Windows Terminal', 'Cursor'
  ],
}

const projects = [
  'Email Assistant Agent – Developed an autonomous email assistant using LangGraph Google\'s Gemini AI model to triage messages, draft responses, and schedule meetings with Gmail/Calendar APIs. Integrated LangSmith for observability, memory persistence, and workflow optimization.',
  'GitHub MCP Tools Agent – Engineered an intelligent interface with LangGraph and LLaMA 3.3 to automate GitHub MCP operations via semantic search, parameter collection, and tool execution. Deployed with Docker MCP Toolkits and monitored through LangSmith.',
  'AI-Powered Podcast Knowledge Extraction Platform – Built an end-to-end system using AWS Transcribe, Comprehend, OpenSearch, SageMaker, CrewAI, and DeepSeek LLMs to convert podcasts into structured, searchable insights with automated evaluation and visualization.',
  'Generative AI Personalized Learning Platform – Built an adaptive English learning system using Qwen LLM on Vertex AI, RLHF for dynamic difficulty adjustment, Google Speech-to-Text/Text-to-Speech for interactive voice feedback, and ElasticSearch for fast retrieval and learner progress analytics.',
]

const languages = [
  'Arabic (Native)',
  'French (Working proficiency)', 
  'English (Working proficiency)'
]

export default function ResumePage() {
  useEffect(() => {
    document.title = 'Resume | Ibtissam Ech-Chaibi - AI Engineer'
  }, [])

  return (
    <div className="min-h-screen relative bg-transparent print:bg-white">
      <AnimatedBackground variant="resume" />

      {/* Resume Content */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-4xl mx-auto relative group">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-xl opacity-40 group-hover:opacity-60 transition-opacity print:hidden" />
          <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl border border-border/60 shadow-xl print:border-0 print:shadow-none print:bg-white print:backdrop-blur-none">
          <div className="p-8 print:p-6">
            {/* Personal Info Header */}
            <header className="text-center mb-10 print:mb-6">
              <h1 className="text-4xl font-bold text-foreground mb-2">{personalInfo.name}</h1>
              <h2 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mb-5">{personalInfo.title}</h2>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-1" />
                  {personalInfo.email}
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-1" />
                  {personalInfo.phone}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {personalInfo.location}
                </div>
              </div>
              
              {/* Link bar */}
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                <Link
                  href={`https://${personalInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-muted/60 to-muted/30 backdrop-blur-sm border border-border/50 text-[11px] sm:text-xs font-medium text-foreground/85 hover:text-foreground hover:from-primary/15 hover:to-accent/15 transition-all shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  <Linkedin className="w-3.5 h-3.5 text-primary/80 group-hover:text-primary transition-colors" />
                  <span className="tracking-wide">{personalInfo.linkedin}</span>
                </Link>
                <Link
                  href={`https://${personalInfo.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-muted/60 to-muted/30 backdrop-blur-sm border border-border/50 text-[11px] sm:text-xs font-medium text-foreground/85 hover:text-foreground hover:from-primary/15 hover:to-accent/15 transition-all shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  <Github className="w-3.5 h-3.5 text-primary/80 group-hover:text-primary transition-colors" />
                  <span className="tracking-wide">{personalInfo.github}</span>
                </Link>
              </div>

              <div className="mt-6 flex justify-center gap-4 print:hidden">
                <Button size="sm" variant="outline" onClick={() => window.print()} className="text-xs">Print / PDF</Button>
                <Button size="sm" asChild className="text-xs">
                  <Link href="/contact">Contact Me</Link>
                </Button>
              </div>
            </header>

            {/* Professional Summary */}
            <section className="mb-10">
              <h3 className="text-xl font-bold text-foreground mb-5 flex items-center relative">
                <span className="absolute -left-4 top-1/2 -translate-y-1/2 hidden sm:block w-2 h-6 bg-gradient-to-b from-primary to-accent rounded" />
                <Star className="w-5 h-5 mr-2 text-primary drop-shadow" />
                Professional Summary
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {professionalSummary}
              </p>
            </section>

            <Separator className="my-8" />

            {/* Experience */}
            <section className="mb-10">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                <Building className="w-5 h-5 mr-2 text-primary" />
                Work Experience
              </h3>
              <div className="relative pl-4 sm:pl-6 before:content-[''] before:absolute before:top-0 before:left-1 before:w-px before:h-full before:bg-border">
                {experience.map((job, index) => (
                  <div key={index} className="relative pb-10 last:pb-0 pl-2 sm:pl-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">{job.title}</h4>
                        <div className="flex flex-wrap items-center text-muted-foreground text-xs gap-x-3 gap-y-1">
                          <span className="inline-flex items-center"><Building className="w-3.5 h-3.5 mr-1" />{job.company}</span>
                          <span className="inline-flex items-center"><MapPin className="w-3.5 h-3.5 mr-1" />{job.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground mt-1 sm:mt-0">
                        <Calendar className="w-3.5 h-3.5 mr-1" />
                        {job.period}
                      </div>
                    </div>
                    <ul className="mt-2 space-y-1.5 text-[13px] leading-relaxed text-muted-foreground">
                      {job.achievements.map((achievement, idx) => (
                        <li key={idx} className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary/60">{achievement}</li>
                      ))}
                    </ul>
                    {job.technologies && (
                      <div className="mt-3">
                        <div className="flex flex-wrap gap-1">
                          {job.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-[9px] px-2 py-0.5">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <Separator className="my-8" />

            {/* Education */}
            <section className="mb-10">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                <GraduationCap className="w-5 h-5 mr-2 text-primary" />
                Education
              </h3>
              <div className="relative pl-4 sm:pl-6 before:content-[''] before:absolute before:top-0 before:left-1 before:w-px before:h-full before:bg-border">
                {education.map((edu, index) => (
                  <div key={index} className="relative pb-10 last:pb-0 pl-2 sm:pl-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <div>
                        <h4 className="text-base font-semibold text-foreground">{edu.degree}</h4>
                        <div className="flex flex-wrap items-center text-muted-foreground text-xs gap-x-3 gap-y-1">
                          <span className="inline-flex items-center"><Building className="w-3.5 h-3.5 mr-1" />{edu.school}</span>
                          <span className="inline-flex items-center"><MapPin className="w-3.5 h-3.5 mr-1" />{edu.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground mt-1 sm:mt-0">
                        <Calendar className="w-3.5 h-3.5 mr-1" />
                        {edu.period}
                      </div>
                    </div>
                    <ul className="mt-2 space-y-1.5 text-[13px] leading-relaxed text-muted-foreground">
                      {edu.details.map((detail, idx) => (
                        <li key={idx} className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent/60">{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <Separator className="my-8" />

            {/* Skills */}
            <section className="mb-10">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                <Code className="w-5 h-5 mr-2 text-primary" />
                Skills
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h4 className="font-semibold text-foreground mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-1">
                      {skillList.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-[10px] tracking-wide rounded-md bg-muted/70 hover:bg-muted">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <Separator className="my-8" />

            {/* Projects and Languages */}
            <div className="grid grid-cols-1 gap-10">
              <section>
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-primary" />
                  Key Projects
                </h3>
                <ul className="space-y-3">
                  {projects.map((project, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="w-2 h-2 bg-gradient-to-br from-primary to-accent rounded-full mr-3 mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{project}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-primary" />
                  Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {languages.map((language, index) => (
                    <Badge key={index} variant="outline" className="text-sm">
                      {language}
                    </Badge>
                  ))}
                </div>
              </section>
            </div>

            {/* Footer */}
            <footer className="mt-14 pt-8 border-t border-border/60 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                References available upon request
              </p>
              <div className="flex justify-center gap-4 print:hidden">
                <Button variant="outline" asChild>
                  <Link href="/projects">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Projects
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Me
                  </Link>
                </Button>
              </div>
            </footer>
          </div>
        </div>
      </div>
      </div>

      {/* Additional Actions */}
      <section className="py-16 bg-card print:hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Let&apos;s Connect
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Interested in working together? I&apos;d love to discuss how my skills and experience 
              can contribute to your next AI project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/projects">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Portfolio   
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}