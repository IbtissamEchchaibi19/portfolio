import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ExternalLink, Github, Calendar, Clock, Code, Brain, Database, Cpu, Rocket } from 'lucide-react'
import { AnimatedBackground } from '@/components/3d/animated-background'

export const metadata: Metadata = {
  title: 'Projects | Reda El Hadfi - AI Architect & Full-Stack Engineer',
  description: 'Explore my portfolio of AI and full-stack development projects, showcasing innovative solutions and technical excellence.',
}

// Updated project list with live links from freelancer.com
const projects = [
  {
    id: 'email-assistant-agent',
    title: 'Autonomous Email Assistant Agent',
    description: 'Built an AI-powered Gmail assistant using LangGraph and Gemini AI for triaging, drafting responses, and scheduling meetings.',
    image: null,
    imageGradient: 'from-indigo-500 to-purple-600',
    tags: ['LangGraph', 'Gemini AI', 'LangSmith', 'Google APIs', 'FastAPI', 'Docker'],
    category: 'AI/ML',
    status: 'Completed',
    timeline: '2 months',
    year: '2024',
    client: 'Personal Project',
    featured: true,
    links: [{ type: 'github', url: '#' }],
  },
  {
    id: 'github-mcp-agent',
    title: 'GitHub MCP Tools Agent',
    description: 'Developed an intelligent interface with LangGraph and LLaMA 3.3 to automate GitHub MCP operations using semantic search and tool execution.',
    image: null,
    imageGradient: 'from-blue-500 to-indigo-600',
    tags: ['LangGraph', 'LLaMA 3.3', 'Docker MCP', 'LangSmith', 'FastAPI'],
    category: 'AI/ML',
    status: 'Completed',
    timeline: '1 month',
    year: '2025',
    client: 'Personal Project',
    featured: true,
    links: [{ type: 'github', url: '#' }],
  },
  {
    id: 'ai-podcast-platform',
    title: 'AI-Powered Podcast Knowledge Extraction',
    description: 'End-to-end platform converting podcasts into searchable insights using AWS Transcribe, Comprehend, OpenSearch, SageMaker, and DeepSeek LLMs.',
    image: null,
    imageGradient: 'from-green-500 to-teal-600',
    tags: ['AWS', 'CrewAI', 'DeepSeek', 'SageMaker', 'OpenSearch'],
    category: 'AI/ML',
    status: 'Completed',
    timeline: '3 months',
    year: '2025',
    client: 'Personal Project',
    featured: true,
    links: [{ type: 'github', url: '#' }],
  },
  {
    id: 'personalized-learning',
    title: 'Generative AI Personalized Learning Platform',
    description: 'Adaptive English learning system using Qwen LLM, RLHF, Vertex AI, and Google Speech-to-Text/TTS for interactive learning.',
    image: null,
    imageGradient: 'from-red-500 to-orange-600',
    tags: ['Qwen', 'Vertex AI', 'RLHF', 'Google Speech APIs', 'ElasticSearch'],
    category: 'EdTech',
    status: 'Completed',
    timeline: '4 months',
    year: '2025',
    client: 'Personal Project',
    featured: true,
    links: [{ type: 'github', url: '#' }],
  },
  {
    id: 'smart-retrieval-system',
    title: 'Smart Retrieval System for R&D Insights',
    description: 'Hackathon project leveraging LlamaIndex and Llama 2 to extract and interact with text and images from PDFs, generating summaries and reports.',
    image: null,
    imageGradient: 'from-pink-500 to-rose-600',
    tags: ['Python', 'LlamaIndex', 'Llama 2', 'ChromaDB', 'Streamlit'],
    category: 'AI/ML',
    status: 'Prototype',
    timeline: '3 days',
    year: '2024',
    client: 'Hackathon (Leyton)',
    featured: false,
    links: [{ type: 'github', url: '#' }],
  },
  {
    id: 'job-coaching-rag',
    title: 'RAG-powered Job Coaching Platform',
    description: 'Developed during internship at 3D Smart Factory, providing personalized interview coaching, CV insights, and job market intelligence using LangChain and Gemini.',
    image: null,
    imageGradient: 'from-cyan-500 to-blue-600',
    tags: ['LangChain', 'Gemini', 'Pinecone', 'FastAPI', 'Docker', 'AWS'],
    category: 'AI/ML',
    status: 'Completed',
    timeline: '3 months',
    year: '2024',
    client: '3D Smart Factory',
    featured: false,
    links: [{ type: 'github', url: '#' }],
  },
]


const categories = ['All', 'AI/ML', 'Full-Stack', 'Distributed Systems']

const getProjectIcon = (category: string) => {
  switch (category) {
    case 'AI/ML':
      return <Brain className="w-8 h-8" />
    case 'Full-Stack':
      return <Code className="w-8 h-8" />
    case 'Distributed Systems':
      return <Database className="w-8 h-8" />
    default:
      return <Cpu className="w-8 h-8" />
  }
}

// Small icon variant for category tabs
const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'AI/ML':
      return <Brain className="w-4 h-4" />
    case 'Full-Stack':
      return <Code className="w-4 h-4" />
    case 'Distributed Systems':
      return <Database className="w-4 h-4" />
    default:
      return <Cpu className="w-4 h-4" />
  }
}

export default function ProjectsPage() {
  // Helper function to get details for each link type
  const getLinkDetails = (type: string) => {
    switch (type) {
      case 'github':
        return { text: 'View Code', icon: <Github className="w-4 h-4" /> }
      case 'freelancer':
        return { text: 'Project Details', icon: <ExternalLink className="w-4 h-4" /> }
      case 'live':
        return { text: 'Live Site', icon: <Rocket className="w-4 h-4" /> }
      case 'kaggle':
        return { text: 'View Notebook', icon: <ExternalLink className="w-4 h-4" /> }
      default:
        return { text: 'View Link', icon: <ExternalLink className="w-4 h-4" /> }
    }
  }

  // Counts per category for tab badges
  const categoryCounts: Record<string, number> = Object.fromEntries(
    categories.map((c) => [
      c,
      c === 'All' ? projects.length : projects.filter((p) => p.category === c).length,
    ])
  )

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* 3D Animated Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <AnimatedBackground />
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                My Projects
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                A showcase of innovative solutions, from AI-powered applications to full-stack platforms. Each project represents a unique challenge solved with cutting-edge technology and best practices.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary" className="text-sm">
                  {projects.length} Projects Completed
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  Multiple Industries
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  AI/ML Specialist
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="pb-16 lg:pb-24">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="All" className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="h-auto rounded-full bg-background/50 supports-[backdrop-filter]:bg-background/60 backdrop-blur border border-primary/10 shadow-sm p-1 gap-1">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category}
                      value={category}
                      className="group relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-all
                               hover:text-foreground hover:bg-background/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30
                               data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm data-[state=active]:ring-1 data-[state=active]:ring-primary/20"
                    >
                      <span className="flex items-center gap-2">
                        <span className="opacity-80">{getCategoryIcon(category)}</span>
                        <span>{category}</span>
                        <span
                          className="ml-1 inline-flex items-center justify-center text-[10px] font-semibold px-2 py-0.5 rounded-full
                                     bg-primary/10 text-primary group-data-[state=active]:bg-primary group-data-[state=active]:text-primary-foreground"
                        >
                          {categoryCounts[category]}
                        </span>
                      </span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {categories.map((category) => (
                <TabsContent key={category} value={category}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects
                      .filter((project) => category === 'All' || project.category === category)
                      .map((project) => (
                        <Card key={project.id} className="flex flex-col overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                          <div className="relative overflow-hidden">
                            {project.image ? (
                              <Image
                                src={project.image}
                                alt={project.title}
                                width={400}
                                height={240}
                                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            ) : (
                              <div className={`w-full h-60 bg-gradient-to-br ${project.imageGradient} flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-300 relative`}>
                                <div className="text-white text-center p-4 z-10">
                                  <div className="mb-3 opacity-80">
                                    {getProjectIcon(project.category)}
                                  </div>
                                  <h3 className="font-bold text-base mb-1 line-clamp-2">{project.title}</h3>
                                  <p className="text-xs opacity-80">{project.category}</p>
                                </div>
                                <div className="absolute inset-0 bg-black/20"></div>
                              </div>
                            )}
                            <div className="absolute top-4 left-4">
                              <Badge
                                variant={project.status === 'Completed' ? 'default' : 'secondary'}
                                className="text-xs"
                              >
                                {project.status}
                              </Badge>
                            </div>
                            {project.featured && (
                              <div className="absolute top-4 right-4">
                                <Badge variant="outline" className="text-xs bg-background/80 backdrop-blur-sm">
                                  Featured
                                </Badge>
                              </div>
                            )}
                          </div>

                          <div className="flex flex-col flex-grow">
                            <CardHeader>
                              <div className="flex items-center justify-between mb-2">
                                <Badge variant="outline" className="text-xs">
                                  {project.category}
                                </Badge>
                                <div className="flex items-center text-xs text-muted-foreground">
                                  <Calendar className="w-3 h-3 mr-1" />
                                  {project.year}
                                </div>
                              </div>
                              <CardTitle className="text-xl">{project.title}</CardTitle>
                              <CardDescription className="text-sm">
                                {project.description}
                              </CardDescription>
                            </CardHeader>

                            <CardContent className="flex-grow">
                              <div className="mb-4">
                                <div className="flex items-center text-xs text-muted-foreground mb-2">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {project.timeline}
                                </div>
                                <p className="text-sm text-muted-foreground">
                                  Client: {project.client}
                                </p>
                              </div>
                              <div className="flex flex-wrap gap-1">
                                {project.tags.slice(0, 4).map((tag) => (
                                  <Badge key={tag} variant="secondary" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                                {project.tags.length > 4 && (
                                  <Badge variant="secondary" className="text-xs">
                                    +{project.tags.length - 4}
                                  </Badge>
                                )}
                              </div>
                            </CardContent>

                            <CardFooter className="flex-wrap gap-x-4 gap-y-2 border-t pt-4 mt-auto">
                              {project.links && project.links.length > 0 ? (
                                project.links.map((link) => {
                                  const details = getLinkDetails(link.type)
                                  return (
                                    <Link
                                      key={link.type}
                                      href={link.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                                    >
                                      {details.icon}
                                      <span className="ml-2">{details.text}</span>
                                    </Link>
                                  )
                                })
                              ) : (
                                <p className="text-sm text-muted-foreground italic">No public links available.</p>
                              )}
                            </CardFooter>
                          </div>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how I can help bring your vision to life with innovative AI solutions and robust full-stack development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Start a Conversation</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/resume">Download Resume</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}