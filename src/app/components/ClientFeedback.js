import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"
import React from "react"

export default function ClientFeedback() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "John delivered our project ahead of schedule and exceeded all our expectations. His attention to detail and problem-solving skills are exceptional.",
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "GrowthLabs",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "Working with John was a pleasure. He understood our requirements perfectly and implemented features we hadn't even thought of. Highly recommended!",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "Innovate Solutions",
      image: "/placeholder.svg?height=100&width=100",
      rating: 4,
      text: "John is a talented developer who brings creative solutions to complex problems. Our web application performance improved significantly after his optimizations.",
    },
    {
      id: 4,
      name: "David Wilson",
      company: "EcoSmart",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "We've worked with many developers, but John stands out for his communication skills and technical expertise. He's now our go-to developer for all projects.",
    },
  ]

  return (
    <section id="feedback" className="py-12">
      <div className="space-y-4 mb-8">
        <h2 className="text-3xl font-bold text-white">Client Feedback</h2>
        <p className="text-slate-300">What my clients say about my work</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="bg-slate-900 border-blue-900/20">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-sm text-blue-500">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex mt-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-600"
                    }`}
                  />
                ))}
              </div>

              <p className="text-slate-300">&quot;{testimonial.text}&quot;</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
