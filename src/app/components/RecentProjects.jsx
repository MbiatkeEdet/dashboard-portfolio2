import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export default function RecentProjects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with payment integration, user authentication, and admin dashboard.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      id: 2,
      title: "Real Estate App",
      description: "Property listing application with advanced search, map integration, and user messaging system.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "Express", "PostgreSQL", "Google Maps API"],
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      id: 3,
      title: "Task Management System",
      description: "Collaborative task management tool with real-time updates, file sharing, and team management.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Firebase", "Tailwind CSS", "Socket.io"],
      demoUrl: "#",
      repoUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-12">
      <div className="space-y-4 mb-8">
        <h2 className="text-3xl font-bold text-white">Recent Projects</h2>
        <p className="text-slate-300">Check out some of my latest work</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} className="bg-slate-900 border-blue-900/20 overflow-hidden flex flex-col">
            <div className="relative h-48 w-full">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>
            <CardContent className="p-6 flex-1">
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-slate-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-blue-900/30 text-blue-300">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0 flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 border-blue-900/20 text-slate-300 hover:text-blue-500 hover:bg-slate-800"
              >
                <Github className="mr-2 h-4 w-4" /> Code
              </Button>
              <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                <ExternalLink className="mr-2 h-4 w-4" /> Demo
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button variant="outline" className="border-blue-900/20 text-slate-300 hover:text-blue-500 hover:bg-slate-800">
          View All Projects
        </Button>
      </div>
    </section>
  )
}
