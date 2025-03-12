import {
  Github,
  Mail,
  Linkedin,
  ExternalLink,
  FileCode,
  FileType,
  Atom,
  Server,
  Database,
  Code,
  Palette,
  GitBranch,
  Cloud,
  Box,
  Network,
  Container,
  Terminal,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MobileNav } from "@/components/mobile-nav"

export default function Home() {
  // Skills data with icons
  const skills = [
    { name: "Django", icon: <Server className="w-5 h-5 mr-2" /> },
    { name: "Python", icon: <FileCode className="w-5 h-5 mr-2" /> },
    { name: "JavaScript", icon: <FileCode className="w-5 h-5 mr-2" /> },
    { name: "SQL", icon: <Database className="w-5 h-5 mr-2" /> },
    { name: "Linux", icon: <Terminal className="w-5 h-5 mr-2" /> },
    { name: "AngularJS", icon: <Atom className="w-5 h-5 mr-2" /> },
    { name: "RESTful APIs", icon: <Network className="w-5 h-5 mr-2" /> },
    { name: "Next.js", icon: <Server className="w-5 h-5 mr-2" /> },
    { name: "HTML/CSS", icon: <Code className="w-5 h-5 mr-2" /> },
    { name: "Airbyte", icon: <Box className="w-5 h-5 mr-2" /> },
    { name: "Apache Airflow", icon: <Cloud className="w-5 h-5 mr-2" /> },
    { name: "CI/CD", icon: <GitBranch className="w-5 h-5 mr-2" /> },
    { name: "Docker", icon: <Container className="w-5 h-5 mr-2" /> },
    { name: "Data Engineering", icon: <Database className="w-5 h-5 mr-2" /> },
    { name: "TypeScript", icon: <FileType className="w-5 h-5 mr-2" /> },
    { name: "Figma", icon: <Palette className="w-5 h-5 mr-2" /> },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Portfolio
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="hover:text-teal-500 transition-colors">
              About
            </Link>
            <Link href="#experience" className="hover:text-teal-500 transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="hover:text-teal-500 transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="hover:text-teal-500 transition-colors">
              Skills
            </Link>
            <Link href="#education" className="hover:text-teal-500 transition-colors">
              Education
            </Link>
            <Link href="https://tim665.hashnode.dev/" target="_blank" className="hover:text-teal-500 transition-colors">
              Blog
            </Link>
            <Link href="#contact" className="hover:text-teal-500 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="hidden md:block">
            <Button variant="outline" className="border-teal-600 text-teal-500 hover:bg-teal-600/10">
            <a href="/Tim Maina.pdf" download="Tim_Maina_Resume.pdf">
                Resume
              </a>
            </Button>
          </div>
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 container mx-auto px-4">
        <div className="max-w-3xl">
          <Badge className="mb-4 bg-teal-500/20 text-teal-400 hover:bg-teal-500/30 transition-colors">
            Available for work
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-teal-500">Tim Maina</span>
            <br />
            Software Engineer
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl">
            I build scalable, efficient, and accessible software solutions that enhance digital experiences. Passionate
            about leveraging AI technologies to develop intelligent, high-performance applications that drive innovation
            and usability.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white">
              <a href="mailto:timmaina64@gmail.com">Get in touch</a>
            </Button>
            <Button variant="outline" className="border-white/20 hover:border-white/40">
              <a href="#projects">View Projects</a>
            </Button>
          </div>
          <div className="flex gap-4 mt-8">
            <Link
              href="https://github.com/t1m41n4"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/tim-maina-787461189"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:timmaina64@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square max-w-md mx-auto bg-zinc-800 rounded-xl overflow-hidden">
            <img src="/Tim.JPG" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-lg text-gray-300 mb-6">
              I'm a Software Engineer with 3+ years of experience in building scalable and efficient applications.
              I have expertise in frontend and backend development, data engineering, and technical support.
              </p>
              <p className="text-lg text-gray-300 mb-6">
              I enjoy collaborating with teams to solve complex problems and create impactful solutions.
              Currently, I'm exploring AI and its applications to enhance automation, data processing, and intelligent decision-making.
              </p>
              <p className="text-lg text-gray-300">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, and continuously expanding my technical knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Savannah Informatics */}
            <div className="relative">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-zinc-800 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold">SI</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Savannah Informatics</h3>
                  <p className="text-gray-400">Jun 2022 - Sep 2024</p>
                  <p className="text-gray-500 text-sm">One Padmore Place, George Padmore Road, Nairobi</p>
                </div>
              </div>

              <div className="ml-0 md:ml-8 pl-4 md:pl-12 border-l-2 border-teal-600/30 space-y-8 relative">
                {/* Role 1 */}
                <div className="relative">
                  <div className="absolute -left-[3.25rem] top-0 w-6 h-6 rounded-full bg-teal-600"></div>
                  <Card className="bg-zinc-900 border-zinc-800">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-white">Software Engineer</h4>
                          <p className="text-gray-400">Mar 2024 - Sep 2024 · 7 mos</p>
                          <p className="text-gray-500 text-sm">On-site · Full-time</p>
                        </div>
                      </div>
                      <ul className="text-gray-300 mb-4 list-disc pl-5 space-y-2">
                        <li>
                          Built and maintained scalable applications by following best backend and frontend development
                          practices, using frameworks such as Django for server-side logic and AngularJS for client-side
                          components.
                        </li>
                        <li>
                          Integrated frontend and backend components seamlessly through RESTful APIs to deliver a
                          cohesive user experience across platforms.
                        </li>
                        <li>
                          Collaborated with the data engineering team, leveraging tools like Airbyte and Apache Airflow
                          to devise efficient data extraction, transformation, and processing methods.
                        </li>
                        <li>
                          Refactored and optimized code to enhance performance, readability, and maintainability,
                          consistently adhering to industry best practices.
                        </li>
                        <li>
                          Wrote comprehensive unit and integration tests and conducted User Acceptance Testing (UAT).
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                          Django
                        </Badge>
                        <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                          SQL
                        </Badge>
                        <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                          Linux
                        </Badge>
                        <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                          Airbyte
                        </Badge>
                        <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                          CI/CD
                        </Badge>
                        <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                          ELT
                        </Badge>
                        <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                          JWT
                        </Badge>
                        <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                          Python
                        </Badge>
                        <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                          Apache Airflow
                        </Badge>
                        <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                          ETL
                        </Badge>
                        <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                          Next.js
                        </Badge>
                        <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                          Django REST
                        </Badge>
                        <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                          AngularJS
                        </Badge>
                        <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                          APIs
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Role 2 */}
                <div className="relative">
                  <div className="absolute -left-[3.25rem] top-0 w-6 h-6 rounded-full bg-teal-600/70"></div>
                  <Card className="bg-zinc-900 border-zinc-800">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-white">
                            Software Engineer | Technical Support Engineer
                          </h4>
                          <p className="text-gray-400">Nov 2022 - Mar 2024 · 1 yr 5 mos</p>
                          <p className="text-gray-500 text-sm">On-site · Full-time</p>
                        </div>
                      </div>
                      <ul className="text-gray-300 mb-4 list-disc pl-5 space-y-2">
                        <li>
                          Served as the first line of technical support for issues escalated by the Customer Experience
                          team, including those managed through the service desk and other channels. Collaborated with
                          cross-functional teams to diagnose, troubleshoot, and resolve complex problems, ensuring
                          efficient operations and reduced turnaround times (TATs).
                        </li>
                        <li>
                          Built and maintained scalable applications by following best backend and frontend development
                          practices, using frameworks such as Django for server-side logic and AngularJS for client-side
                          components.
                        </li>
                        <li>Enhanced code stability, scalability, and performance through optimization.</li>
                        <li>
                          Integrated frontend and backend components seamlessly through RESTful APIs to deliver a
                          cohesive user experience across platforms.
                        </li>
                        <li>
                          Utilized monitoring tools to track system health and performance, promptly identifying and
                          addressing potential issues.
                        </li>
                        <li>
                          Collaborated with product managers to implement automation projects, reducing manual tasks and
                          improving team productivity.
                        </li>
                        <li>
                          Wrote comprehensive unit and integration tests and conducted User Acceptance Testing (UAT).
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                          Django
                        </Badge>
                        <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                          JavaScript
                        </Badge>
                        <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                          SQL
                        </Badge>
                        <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                          Linux
                        </Badge>
                        <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                          CI/CD
                        </Badge>
                        <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                          Databases
                        </Badge>
                        <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                          Python
                        </Badge>
                        <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                          Django REST
                        </Badge>
                        <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                          Jira
                        </Badge>
                        <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                          AngularJS
                        </Badge>
                        <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                          Figma
                        </Badge>
                        <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                          APIs
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Role 3 */}
                <div className="relative">
                  <div className="absolute -left-[3.25rem] top-0 w-6 h-6 rounded-full bg-teal-600/50"></div>
                  <Card className="bg-zinc-900 border-zinc-800">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-white">Software Engineering Intern</h4>
                          <p className="text-gray-400">Jun 2022 - Nov 2022 · 6 mos</p>
                          <p className="text-gray-500 text-sm">Internship</p>
                        </div>
                      </div>
                      <ul className="text-gray-300 mb-4 list-disc pl-5 space-y-2">
                        <li>
                          Built a full-stack Twitter scraping application using Django for the backend and Django
                          templates with HTML/CSS for the frontend.
                        </li>
                        <li>Fixed bugs and improved system performance.</li>
                        <li>Developed new features and enhanced existing functionality.</li>
                        <li>Optimized database queries and API integrations.</li>
                        <li>Collaborated with the team to review code and improve software quality.</li>
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                          Django
                        </Badge>
                        <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                          SQL
                        </Badge>
                        <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                          Linux
                        </Badge>
                        <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                          Databases
                        </Badge>
                        <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                          Python
                        </Badge>
                        <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                          APIs
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Usalama Technology Limited */}
            <div className="relative">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-zinc-800 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold">UTL</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Usalama Technology Limited</h3>
                  <p className="text-gray-400">Jun 2019 - Aug 2019 · 3 mos</p>
                  <p className="text-gray-500 text-sm">Nairobi, Kenya</p>
                </div>
              </div>

              <div className="ml-0 md:ml-8 pl-4 md:pl-12 border-l-2 border-teal-600/30 space-y-8 relative">
                <div className="relative">
                  <div className="absolute -left-[3.25rem] top-0 w-6 h-6 rounded-full bg-teal-600/40"></div>
                  <Card className="bg-zinc-900 border-zinc-800">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-white">Junior Frontend Web Developer</h4>
                          <p className="text-gray-400">Jun 2019 - Aug 2019 · 3 mos</p>
                          <p className="text-gray-500 text-sm">Apprenticeship · Nairobi, Kenya</p>
                        </div>
                      </div>
                      <ul className="text-gray-300 mb-4 list-disc pl-5 space-y-2">
                        <li>
                          Utilised JavaScript, HTML, and CSS to create interactive and visually appealing web pages.
                        </li>
                        <li>
                          Developed and maintained responsive website designs, improving user experience across various
                          devices.
                        </li>
                        <li>
                          Integrated social media functionality into websites, boosting online presence and engagement.
                        </li>
                        <li>Implemented SEO strategies to improve website visibility and search engine rankings.</li>
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                          JavaScript
                        </Badge>
                        <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                          HTML
                        </Badge>
                        <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                          CSS
                        </Badge>
                        <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                          Responsive Design
                        </Badge>
                        <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                          SEO
                        </Badge>
                        <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                          Android Development
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Project 1 */}
            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
              <div className="aspect-video w-full bg-zinc-800">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop"
                  alt="High School Website"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">High School Website</h3>
                  <div className="flex gap-2">
                    <Link
                      href="https://github.com/t1m41n4/secondary-school-web"
                      target="_blank"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={20} />
                      <span className="sr-only">GitHub</span>
                    </Link>
                    <Link
                      href="https://secondary-school-website-two.vercel.app/"
                      target="_blank"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span className="sr-only">Live Demo</span>
                    </Link>
                  </div>
                </div>
                <p className="text-gray-400 mb-4">
                  A comprehensive website for a high school, featuring information about the school, programs,
                  admissions, and more.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="bg-blue-950/30 text-blue-400 border-blue-800 hover:bg-blue-900/40"
                  >
                    HTML
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-purple-950/30 text-purple-400 border-purple-800 hover:bg-purple-900/40"
                  >
                    CSS
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-yellow-950/30 text-yellow-400 border-yellow-800 hover:bg-yellow-900/40"
                  >
                    JavaScript
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-indigo-950/30 text-indigo-400 border-indigo-800 hover:bg-indigo-900/40"
                  >
                    PHP
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
              <div className="aspect-video w-full bg-zinc-800">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop"
                  alt="Rental Management App"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">Rental Management App</h3>
                  <div className="flex gap-2">
                    <Link
                      href="https://github.com/t1m41n4/rental-management-app"
                      target="_blank"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={20} />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </div>
                </div>
                <p className="text-gray-400 mb-4">
                  A full-stack application for managing rental properties, tenants, leases, and maintenance requests.
                  Built with Next.js and TypeScript for the frontend, FastAPI for the backend, and PostgreSQL/Redis for
                  data storage.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="bg-blue-950/30 text-blue-400 border-blue-800 hover:bg-blue-900/40">
                    Next.js
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-green-950/30 text-green-400 border-green-800 hover:bg-green-900/40">
                    FastAPI
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-indigo-950/30 text-indigo-400 border-indigo-800 hover:bg-indigo-900/40">
                    PostgreSQL
                  </Badge>
                  <Badge variant="outline" className="bg-red-950/30 text-red-400 border-red-800 hover:bg-red-900/40">
                    Redis
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-blue-950/30 text-blue-400 border-blue-800 hover:bg-blue-900/40">
                    Docker
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-teal-950/30 text-teal-400 border-teal-800 hover:bg-teal-900/40">
                    JavaScript
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
              <div className="aspect-video w-full bg-zinc-800">
                <img
                  src="/placeholder.svg?height=250&width=500&text=Project+3"
                  alt="Project 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">Coming Soon</h3>
                  <div className="flex gap-2">
                    <Link
                      href="https://github.com/t1m41n4"
                      target="_blank"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={20} />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </div>
                </div>
                <p className="text-gray-400 mb-4">
                  More exciting projects coming soon. Check my GitHub for the latest updates.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="bg-teal-950/30 text-teal-400 border-teal-800 hover:bg-teal-900/40"
                  >
                    Coming Soon
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" className="border-white/20 hover:border-white/40">
              <Link href="https://github.com/t1m41n4" target="_blank">
                View All Projects
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="bg-zinc-900 border-zinc-800 hover:border-teal-600/50 transition-colors group"
              >
                <CardContent className="p-6 flex items-center justify-center h-full">
                  <div className="flex items-center">
                    <div className="text-gray-400 group-hover:text-teal-500 transition-colors">{skill.icon}</div>
                    <span className="text-lg font-medium">{skill.name}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Education & Certifications</h2>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            <Card className="bg-zinc-900 border-zinc-800 mb-8">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h4 className="text-xl font-bold text-white">Meru University of Science and Technology (MUST)</h4>
                  <p className="text-gray-400">January 2017 - February 2022</p>
                </div>
                <p className="text-gray-300 mb-2">Bachelor's degree in Computer Technology, Computer Science</p>
                <p className="text-teal-500">Grade: Second Class Honours</p>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-bold mb-6 mt-12">Certifications</h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-white mb-2">Mobile Web Development</h4>
                  <p className="text-gray-300 mb-2">Google Developers Group</p>
                  <p className="text-gray-400 mb-4">February 2021 - Present</p>
                  <p className="text-sm text-gray-500">Credential ID: 8B2556C99F8C57ED</p>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-white mb-2">Google Cloud</h4>
                  <p className="text-gray-300 mb-2">Google Developers Group</p>
                  <p className="text-gray-400 mb-4">March 2023 - Present</p>
                  <p className="text-sm text-gray-500">Credential ID: DEC81D064502C95</p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-bold mb-6 mt-12">Volunteering</h3>
            <div className="space-y-6">
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between mb-2">
                    <h4 className="text-xl font-bold text-white">Information Technology Specialist</h4>
                    <p className="text-gray-400">August 2021 - April 2022 · 9 mos</p>
                  </div>
                  <p className="text-gray-300 mb-2">Asante Africa Foundation</p>
                  <p className="text-gray-400 mb-4">Education</p>
                  <ul className="text-gray-300 mb-4 list-disc pl-5 space-y-2">
                    <li>
                      Volunteered to develop tech-driven solutions to enhance learning by creating digital education
                      tools.
                    </li>
                    <li>
                      Designed and developed interactive educational content using HTML5, CSS3, and JavaScript for the
                      Kolibri learning platform, enabling offline access to quality learning materials for students.
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                      HTML5
                    </Badge>
                    <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                      CSS3
                    </Badge>
                    <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                      JavaScript
                    </Badge>
                    <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                      Kolibri
                    </Badge>
                    <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                      Education
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between mb-2">
                    <h4 className="text-xl font-bold text-white">Information Communication Technology Specialist</h4>
                    <p className="text-gray-400">April 2021 - June 2021 · 3 mos</p>
                  </div>
                  <p className="text-gray-300 mb-2">The Lewa Wildlife Conservancy</p>
                  <p className="text-gray-400 mb-4">Education</p>
                  <ul className="text-gray-300 mb-4 list-disc pl-5 space-y-2">
                    <li>
                      Developed and designed interactive educational content using HTML5, CSS3, and JavaScript for the
                      Kolibri learning platform, enabling offline access to quality learning materials for students.
                    </li>
                    <li>
                      Assisted in deploying and maintaining Kolibri systems in classrooms, ensuring seamless
                      functionality of digital learning resources.
                    </li>
                    <li>
                      Configured and connected student tablets to a central classroom screen, facilitating collaborative
                      learning and improving engagement.
                    </li>
                    <li>
                      Gained hands-on experience in IP networking and device connectivity, ensuring stable communication
                      between learning devices.
                    </li>
                    <li>
                      Supported educators and students in adopting and utilizing digital learning tools, enhancing their
                      ability to access educational resources without the Internet.
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                      HTML5
                    </Badge>
                    <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                      CSS3
                    </Badge>
                    <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                      JavaScript
                    </Badge>
                    <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                      Kolibri
                    </Badge>
                    <Badge variant="outline" className="bg-zinc-800/50 text-gray-300 border-zinc-700">
                      IP Networking
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col items-center md:items-start gap-2">
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="h-6 w-6 text-teal-500" />
                  <h3 className="text-xl font-semibold">Email</h3>
                </div>
                <a href="mailto:timmaina64@gmail.com" className="text-gray-300 hover:text-teal-500 transition-colors">
                  timmaina64@gmail.com
                </a>
              </div>

              <div className="flex flex-col items-center md:items-start gap-2">
                <div className="flex items-center gap-3 mb-2">
                  <Linkedin className="h-6 w-6 text-teal-500" />
                  <h3 className="text-xl font-semibold">LinkedIn</h3>
                </div>
                <a
                  href="https://www.linkedin.com/in/tim-maina-787461189"
                  target="_blank"
                  className="text-gray-300 hover:text-teal-500 transition-colors"
                  rel="noreferrer"
                >
                  linkedin.com/in/tim-maina-787461189
                </a>
              </div>

              <div className="flex flex-col items-center md:items-start gap-2">
                <div className="flex items-center gap-3 mb-2">
                  <Github className="h-6 w-6 text-teal-500" />
                  <h3 className="text-xl font-semibold">GitHub</h3>
                </div>
                <a
                  href="https://github.com/t1m41n4"
                  target="_blank"
                  className="text-gray-300 hover:text-teal-500 transition-colors"
                  rel="noreferrer"
                >
                  github.com/t1m41n4
                </a>
              </div>

              <div className="flex flex-col items-center md:items-start gap-2">
                <div className="flex items-center gap-3 mb-2">
                  <FileCode className="h-6 w-6 text-teal-500" />
                  <h3 className="text-xl font-semibold">Blog</h3>
                </div>
                <a
                  href="https://tim665.hashnode.dev/"
                  target="_blank"
                  className="text-gray-300 hover:text-teal-500 transition-colors"
                  rel="noreferrer"
                >
                  hashnode.com/@tim665
                </a>
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                <a href="mailto:timmaina64@gmail.com">Send me an email</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="text-xl font-bold">
                Portfolio
              </Link>
              <p className="text-gray-400 mt-2">© {new Date().getFullYear()} Tim Maina. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <Link
                href="https://github.com/t1m41n4"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/tim-maina-787461189"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:timmaina64@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

