import { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AnimatedBackground } from '@/components/3d/animated-background'
import { Calendar, MapPin, Building, Code, Brain, Users, Award, ExternalLink, Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Experience | Ibtissam Ech Chaibi - AI Engineer & Full-Stack Developer',
  description: 'Explore Ibtissam Ech Chaibi’s professional experience, projects, and achievements in AI, ML, and full-stack development.',
}

const workExperience = [
  {
    title: 'Applied AI & ML Engineer',
    company: 'Fujairah Research Center',
    location: 'Fujairah, UAE (On site)',
    period: 'Feb 2025 - Sept 2025',
    type: 'Full-Time',
    description: 'Developed a multi-agent AI system for Honey Quality Verification and Beekeeper Support, integrating document processing and analytics dashboards.',
    achievements: [
      'Implemented Honey Expert Agent by fine-tuning Mistral Instruct 7B for expert knowledge retrieval with evaluation via W&B.',
      'Built Honey Quality Verification Agent automating lab report compliance using Azure Document Intelligence, deepset/roberta-base and facebook/bart-large-mnli.',
      'Created Automated Dashboard Analytics Agent using Plotly, Dash, pdfplumber, and Azure Document Intelligence.',
      'Developed RAG pipeline with LangChain, Neo4j, and LLaMA 4 for intelligent document retrieval.',
      'Orchestrated multi-LLM interactions using MCP and LangGraph, deploying FastAPI microservices on Azure.',
    ],
    technologies: ['Python', 'Hugging Face', 'LangChain', 'LangGraph', 'LangSmith', 'Pinecone', 'Azure AI', 'FastAPI', 'Docker', 'MCP', 'LLaMA', 'Mistral'],
  },
  {
    title: 'Applied AI & ML Engineer (Consultant)',
    company: 'Independent Consultant',
    location: 'UAE (Remote)',
    period: 'Jul 2025 - Aug 2025',
    type: 'Freelance',
    description: 'Enhanced an aviation medical chatbot using RAG, NLP, and vector search to improve medication compliance guidance for pilots and crew.',
    achievements: [
      'Contributed to system architecture design including data preprocessing, knowledge base structuring, and vector database integration.',
      'Built vector embeddings using domain-specific models (BioBERT, ClinicalBERT) integrated into FAISS for semantic search.',
      'Supported roadmap planning for testing, validation, and deployment aligned with aviation safety regulations.',
    ],
    technologies: ['Python', 'BioBERT', 'FAISS', 'NLTK'],
  },
  {
    title: 'Applied AI Cloud Engineer',
    company: 'Devtospace',
    location: 'Paris, France (Remote)',
    period: 'Oct 2024 - Dec 2024',
    type: 'Full-Time',
    description: 'Developed a cloud-based KYC system using AI-powered computer vision and automated document processing on AWS.',
    achievements: [
      'Automated identity document processing with Amazon Textract, PyTorch, and OpenCV.',
      'Engineered AI-driven liveness detection with Amazon Rekognition.',
      'Designed Flask-based REST API with screenshot prevention and session management.',
      'Dockerized application and deployed on AWS EC2 with S3 storage and CloudWatch monitoring.',
    ],
    technologies: ['PyTorch', 'OpenCV', 'Amazon Rekognition', 'Amazon Textract', 'Amazon S3', 'Flask', 'Docker', 'AWS EC2', 'AWS CloudWatch'],
  },
  {
    title: 'Applied AI Engineer Intern',
    company: '3DSmartFactory',
    location: 'Mohammedia, Morocco',
    period: 'Jul 2024 - Sept 2024',
    type: 'Internship',
    description: 'Engineered a RAG-powered AI platform for personalized interview coaching, CV insights, and auto-generated application letters.',
    achievements: [
      'Developed NLP pipelines using NLTK and Hugging Face Transformers for semantic search and entity extraction.',
      'Integrated vector search with Pinecone for accurate document retrieval.',
      'Implemented a context-aware conversational agent augmented with real-time web data.',
      'Built backend with FastAPI, containerized with Docker, deployed to AWS.',
      'Evaluated RAG performance using LangSmith.',
    ],
    technologies: ['LangChain', 'Gemini Pro Vision', 'NLTK', 'SpaCy', 'Transformers', 'Pinecone', 'FastAPI', 'MongoDB', 'AWS', 'Google APIs', 'Docker', 'LangSmith'],
  },
  {
    title: 'Data Scientist Hackathon Participant',
    company: 'Leyton',
    location: 'Casablanca, Morocco',
    period: 'Mar 2024',
    type: 'Hackathon',
    description: 'Engineered a Smart Retrieval System to extract and interact with text/images from PDFs for R&D insights.',
    achievements: [
      'Developed document analysis tool leveraging LlamaIndex and LLaMA 2 for querying content and generating reports.',
      'Designed user-friendly interface with Streamlit.',
    ],
    technologies: ['Python', 'LlamaIndex', 'LLaMA 2', 'ChromaDB', 'Streamlit'],
  },
]

const education = [
  {
    degree: 'Engineering degree, Software Engineering and Digitalization',
    school: 'National High School of Electricity and Mechanics (ENSEM)',
    location: 'Morocco',
    period: 'Sept 2022 - Jun 2025',
    status: 'Current',
    description: 'Engineering program specializing in software engineering and digitalization.',
    achievements: [
      'Completed preparatory classes for major engineering schools (CPGE).',
      'Focused on advanced software engineering, AI, and cloud technologies.',
    ],
    coursework: ['Software Engineering', 'AI & ML', 'Data Structures', 'Algorithms', 'Cloud Computing'],
  },
]

const projects = [
  {
    title: 'EmailAssistant Agent',
    description: 'Autonomous email assistant using LangGraph and Gemini AI to triage, draft, and schedule emails with LangSmith integration.',
  },
  {
    title: 'GitHub MCP Tools Agent',
    description: 'Automated GitHub MCP operations via LangGraph, LLaMA 3.3, Docker, and LangSmith monitoring.',
  },
  {
    title: 'AI-Powered Podcast Knowledge Extraction Platform',
    description: 'Converts podcasts into structured insights using AWS Transcribe, Comprehend, OpenSearch, SageMaker, CrewAI, and DeepSeek LLMs.',
  },
  {
    title: 'Generative AI Personalized Learning Platform',
    description: 'Adaptive English learning platform using Qwen LLM on Vertex AI, RLHF, Google Speech APIs, and ElasticSearch for learner analytics.',
  },
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <AnimatedBackground />
      </div>

      <div className="relative z-10">
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Professional Experience
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                AI Engineer specialized in Generative AI, LLMs, and multi-agent systems with extensive hands-on experience in real-world AI solutions and cloud deployment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/resume">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Tabs defaultValue="experience" className="w-full">
                <div className="flex justify-center mb-12">
                  <TabsList className="grid w-full max-w-md grid-cols-4">
                    <TabsTrigger value="experience">Work</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="projects">Projects</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="experience">
                  <div className="space-y-8">
                    {workExperience.map((job, index) => (
                      <Card key={index} className="overflow-hidden">
                        <CardHeader className="pb-4">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                            <div>
                              <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center">
                                  <Building className="w-4 h-4 mr-1" />
                                  {job.company}
                                </div>
                                <div className="flex items-center">
                                  <MapPin className="w-4 h-4 mr-1" />
                                  {job.location}
                                </div>
                                <div className="flex items-center">
                                  <Calendar className="w-4 h-4 mr-1" />
                                  {job.period}
                                </div>
                              </div>
                            </div>
                            <Badge variant="default">{job.type}</Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <p className="text-muted-foreground">{job.description}</p>
                          <div>
                            <h4 className="font-semibold mb-3">Key Achievements</h4>
                            <ul className="space-y-2">
                              {job.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start">
                                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                                  <span className="text-muted-foreground">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                              {job.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="education">
                  <div className="space-y-8">
                    {education.map((edu, index) => (
                      <Card key={index} className="overflow-hidden">
                        <CardHeader className="pb-4">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                            <div>
                              <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center">
                                  <Building className="w-4 h-4 mr-1" />
                                  {edu.school}
                                </div>
                                <div className="flex items-center">
                                  <MapPin className="w-4 h-4 mr-1" />
                                  {edu.location}
                                </div>
                                <div className="flex items-center">
                                  <Calendar className="w-4 h-4 mr-1" />
                                  {edu.period}
                                </div>
                              </div>
                            </div>
                            <Badge variant={edu.status === 'Current' ? 'default' : 'secondary'}>{edu.status}</Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <p className="text-muted-foreground">{edu.description}</p>
                          <div>
                            <h4 className="font-semibold mb-3">Achievements</h4>
                            <ul className="space-y-2">
                              {edu.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start">
                                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                                  <span className="text-muted-foreground">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="projects">
                  <div className="space-y-6">
                    {projects.map((project, idx) => (
                      <Card key={idx} className="overflow-hidden">
                        <CardContent>
                          <CardTitle className="text-lg mb-2">{project.title}</CardTitle>
                          <p className="text-muted-foreground">{project.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="skills">
                  <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Technical Skills & Tools</h2>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {[
                        'Python', 'JavaScript', 'Node.js', 'SQL', 'pandas', 'NumPy', 'NLTK', 'spaCy', 'regex', 'NLPAug', 'BeautifulSoup', 'OpenCV',
                        'MongoDB', 'PostgreSQL', 'MySQL', 'Weaviate', 'Pinecone', 'ChromaDB', 'FAISS', 'Elasticsearch',
                        'PyTorch', 'TensorFlow', 'Hugging Face Transformers', 'LangChain', 'LangGraph', 'CrewAI', 'LLaMA', 'Mistral', 'DeepSeek', 'Qwen',
                        'AWS', 'Azure', 'GCP', 'LangSmith', 'W&B', 'MLflow', 'FastAPI', 'Flask', 'Streamlit', 'Gradio', 'React', 'Dash'
                      ].map(skill => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <Brain className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Leverage This Experience?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                I&apos;m ready to bring AI, ML, and cloud expertise to your next project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">Let&apos;s Discuss Your Project</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/projects">View My Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
