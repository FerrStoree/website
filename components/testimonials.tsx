import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const testimonials = [
  {
    name: "Ahmad Rizki",
    role: "Game Developer",
    content:
      "Layanan VPS Digital Ocean dari FerrStoree sangat membantu project game saya. Performa stabil dan harga terjangkau!",
    avatar: "https://img1.pixhost.to/images/5416/593836112_ferrstoree.jpg",
  },
  {
    name: "Budi Santoso",
    role: "Web Developer",
    content: "Panel Pterodactyl unlimited sangat worth it. Support responsive dan setup cepat. Recommended!",
    avatar: "https://img1.pixhost.to/images/5416/593836112_ferrstoree.jpg",
  },
  {
    name: "Citra Dewi",
    role: "Content Creator",
    content:
      "Digital Ocean dari FerrStoree membantu saya menjalankan website dengan lancar. Tidak pernah ada masalah downtime.",
    avatar: "https://img1.pixhost.to/images/5416/593836112_ferrstoree.jpg",
  },
  {
    name: "Deni Kurniawan",
    role: "Gamer",
    content: "SC Simple Create v2.5 sangat mudah digunakan. Saya bisa setup server game dengan cepat tanpa ribet.",
    avatar: "https://img1.pixhost.to/images/5416/593836112_ferrstoree.jpg",
  },
]

export default function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {testimonials.map((testimonial, index) => (
        <Card key={index}>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-4">
              <div className="relative h-10 w-10 rounded-full overflow-hidden">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <CardTitle className="text-base">{testimonial.name}</CardTitle>
                <CardDescription>{testimonial.role}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">{testimonial.content}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
