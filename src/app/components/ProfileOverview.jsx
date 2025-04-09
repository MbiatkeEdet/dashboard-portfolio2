import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Twitter, Download, Mail } from "lucide-react"

export default function ProfileOverview() {
  return (
    <section id="profile" className="py-12">
      <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-600">
            <Image
              src="/mbiatke.jpg"
              alt="Profile"
              width={200}
              height={200}
              className="object-cover"
            />
          </div>

          <div className="flex gap-3 mt-2">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-slate-300 hover:text-blue-500 hover:bg-slate-900"
            >
              <Github className="h-5 w-5 py-5 px-3" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-slate-300 hover:text-blue-500 hover:bg-slate-900"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-slate-300 hover:text-blue-500 hover:bg-slate-900"
            >
              <Twitter className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-slate-300 hover:text-blue-500 hover:bg-slate-900"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          <Button className="mt-2 bg-blue-600 hover:bg-blue-700">
            <Download className="mr-2 h-4 w-4" /> Download Resume
          </Button>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">Mbiatke Nkanta</h1>
            <p className="text-xl text-blue-500 mt-1">Front-End Developer</p>
          </div>

          <p className="text-slate-600">
            I am a passionate front-end developer with over 3 years of experience building web applications. I
            specialize in creating responsive, user-friendly interfaces and robust backend systems. My goal is to
            deliver high-quality solutions that exceed client expectations.
          </p>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Skills</h2>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-blue-600 hover:bg-blue-700">JavaScript</Badge>
              <Badge className="bg-blue-600 hover:bg-blue-700">React</Badge>
              <Badge className="bg-blue-600 hover:bg-blue-700">Next.js</Badge>
              <Badge className="bg-blue-600 hover:bg-blue-700">Node.js</Badge>
              <Badge className="bg-blue-600 hover:bg-blue-700">Express</Badge>
              <Badge className="bg-blue-600 hover:bg-blue-700">MongoDB</Badge>
              <Badge className="bg-blue-600 hover:bg-blue-700">PostgreSQL</Badge>
              <Badge className="bg-blue-600 hover:bg-blue-700">Tailwind CSS</Badge>
              <Badge className="bg-blue-600 hover:bg-blue-700">AWS</Badge>
              <Badge className="bg-blue-600 hover:bg-blue-700">Docker</Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <Card className="bg-slate-900 border-blue-900/20">
              <CardContent className="p-4 text-center">
                <p className="text-3xl font-bold text-blue-500">120+</p>
                <p className="text-slate-300">Projects Completed</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-900 border-blue-900/20">
              <CardContent className="p-4 text-center">
                <p className="text-3xl font-bold text-blue-500">95%</p>
                <p className="text-slate-300">Client Satisfaction</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-900 border-blue-900/20">
              <CardContent className="p-4 text-center">
                <p className="text-3xl font-bold text-blue-500">8+</p>
                <p className="text-slate-300">Years Experience</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
