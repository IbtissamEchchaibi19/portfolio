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

const projects = [
   {
  id: 'food-honey-verification-api',
  title: 'Food & Honey Quality Verification API',
  description: 'Prototype API built with FastAPI for automated document verification and compliance certification. Delivered for two clients with different purposes: honey quality verification against GCC honey standards, and food safety verification against SFDA standards. The system integrates Azure Document Intelligence for OCR, HuggingFace NLP models (BART-Large-MNLI, RoBERTa) for compliance verification, and a modular rules engine. While final production systems remain private, this prototype demonstrates a flexible architecture that can be adapted to any verification scenario by changing only the compliance standards or model purpose and the api can be adapted and integrate to any frontend.',
  image: null,
  imageGradient: 'from-amber-500 to-yellow-600',
  tags: [
    'FastAPI',
    'Docker',
    'Azure Document Intelligence',
    'HuggingFace Transformers',
    'PyTorch',
    'BART-Large-MNLI',
    'RoBERTa QA',
    'PDF Processing',
    'Compliance Verification'
  ],
  category: 'Document Verification & Compliance',
  status: 'Prototype',
  timeline: '2 months',
  year: '2025',
  client: 'Private (2 clients)',
  featured: true,
  links: [
    { type: 'github', url: 'https://github.com/IbtissamEchchaibi19/qualityapi/tree/master' },
    { type: 'demo', url: 'https://vimeo.com/1117823921?share=copy'},
    { type: 'demo 2', url: 'https://vimeo.com/1117823921?share=copy'},
  ],
},
{
  id: 'document-analytics-api',
  title: 'Document Analytics & Visualization API',
  description: 'Prototype API built with FastAPI for automated extraction, processing, and analytics from PDFs and documents. Implemented for a client with use cases including invoices, honey production reports, and hive tracking dashboards. The system integrates PyMuPDF and Camelot for PDF intelligence, regex-based pattern extraction, and Plotly Dash for interactive, real-time visualizations. While the final production system remains private, this prototype demonstrates how documents can serve as flexible data sources for generating analytics and insights, and it can be adapted to any reporting or visualization scenario by adjusting extraction logic and business rules.',
  image: null,
  imageGradient: 'from-emerald-500 to-cyan-600',
  tags: [
    'FastAPI',
    'Docker',
    'PyMuPDF',
    'Camelot',
    'Plotly Dash',
    'Azure Blob Storage',
    'Regex Extraction',
    'Document Intelligence',
    'Business Analytics'
  ],
  category: 'Document Intelligence & Analytics',
  status: 'Prototype',
  timeline: '2 months',
  year: '2025',
  client: 'Private (Invoice & Honey Producer Client)',
  featured: true,
  links: [
    { type: 'github', url: 'https://github.com/IbtissamEchchaibi19/invoicesdashapi/blob/master' },
    { type: 'demo', url: 'https://vimeo.com/1117865542?share=copy' }
  ],
}
,
{
  id: 'rag-beekeeping-expert',
  title: 'RAG-Powered Expert System & Evaluation Framework',
  description: 'Prototype enterprise-grade Retrieval-Augmented Generation (RAG) system built with Python, LangChain, Pinecone, and Groq for domain-specific expert guidance. Initially designed for professional apiculture use cases, the system integrates semantic vector search, contextual conversational memory, and a comprehensive evaluation framework for accuracy, relevance, and hallucination detection. This repository showcases only a prototype with fake data; the exact architecture and real client datasets remain private. The goal is to demonstrate the capabilities and power of advanced RAG systems. The same architecture can be adapted to any domain requiring document-grounded verification, expert assistance, or compliance-based Q&A by simply changing the knowledge base and evaluation criteria.',
  image: null,
  imageGradient: 'from-amber-500 to-yellow-600',
  tags: [
    'LangChain',
    'FastAPI',
    'Pinecone',
    'Groq',
    'HuggingFace Embeddings',
    'Gradio',
    'RAG Evaluation',
    'Vector Search',
    'LLM Integration'
  ],
  category: 'Retrieval-Augmented Generation & Expert Systems',
  status: 'Prototype',
  timeline: '5 months',
  year: '2025',
  client: 'Private (Beekeeping & Knowledge Management)',
  featured: true,
  links: [
    { type: 'github', url: 'https://github.com/IbtissamEchchaibi19/beekeepchatbot' },
    { type: 'demo', url: 'https://www.loom.com/share/4bdcc5864fa84e80a6b863e23876e9b3?sid=db383b17-768d-49de-b7dc-8f36b260df0a' }
  ],
},
{
  id: 'graph-rag-lab-reports',
  title: 'GraphRAG Document Analysis & Query System',
  description: 'Prototype enterprise-grade GraphRAG (Graph-based Retrieval-Augmented Generation) system built with Python, Streamlit, Neo4j, and Google Gemini for intelligent laboratory report analysis. This prototype demonstrates how knowledge graphs, semantic search, and AI-driven response generation can be combined for advanced document intelligence. The showcased version uses only fake/sample data; the exact architecture and real project remain private for clients. The framework can be adapted to any type of technical documentation or compliance-based reports by simply changing the document sources and domain standards.',
  image: null,
  imageGradient: 'from-cyan-600 to-blue-700',
  tags: [
    'GraphRAG',
    'Neo4j',
    'Streamlit',
    'Google Gemini',
    'SentenceTransformers',
    'Knowledge Graphs',
    'Semantic Search',
    'Document Intelligence'
  ],
  category: 'Graph-Based RAG & Document Analysis',
  status: 'Prototype',
  timeline: '4 months',
  year: '2025',
  client: 'Private (Laboratory & Technical Documentation)',
  featured: true,
  links: [
    { type: 'github', url: 'https://github.com/IbtissamEchchaibi19/GraphRAG-Retreving-Reports/tree/master' },
    { type: 'demo', url: 'https://vimeo.com/manage/videos/1118154921' }
  ],
}


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