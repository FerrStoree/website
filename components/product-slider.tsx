"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: "digital-ocean",
    title: "Digital Ocean",
    description: "Layanan cloud hosting terbaik dengan performa tinggi dan skalabilitas yang mudah",
    image: "https://img1.pixhost.to/images/5416/593835090_ferrstoree.jpg",
  },
  {
    id: "vps-digital-ocean",
    title: "VPS Digital Ocean",
    description: "Virtual Private Server dengan pilihan spesifikasi sesuai kebutuhan Anda",
    image: "https://img1.pixhost.to/images/5416/593836587_ferrstoree.jpg",
  },
  {
    id: "panel-pterodactyl",
    title: "Panel Pterodactyl",
    description: "Panel game server yang mudah digunakan dengan berbagai pilihan kapasitas",
    image: "https://img1.pixhost.to/images/5416/593835116_ferrstoree.jpg",
  },
  {
    id: "sc-simple-create",
    title: "SC Simple Create v2.5",
    description: "Script pembuatan server game dengan fitur lengkap dan mudah digunakan",
    image: "https://img1.pixhost.to/images/5416/593835161_ferrstoree.jpg",
  },
]

export default function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-8 overflow-hidden rounded-lg shadow-lg">
      <div className="relative h-64 md:h-96 bg-gray-200">
        <Image
          src={products[currentIndex].image || "/placeholder.svg"}
          alt={products[currentIndex].title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white p-4">
          <h3 className="text-2xl font-bold mb-2">{products[currentIndex].title}</h3>
          <p className="text-center max-w-md">{products[currentIndex].description}</p>
          <Button className="mt-4" asChild>
            <a href={`#${products[currentIndex].id}`}>Lihat Detail</a>
          </Button>
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next</span>
      </Button>
      <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
