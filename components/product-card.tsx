"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { useCart } from "@/hooks/use-cart"

interface ProductCardProps {
  id: string
  title: string
  price: number
  description: string
  image: string
  hasOptions?: boolean
}

export default function ProductCard({ id, title, price, description, image, hasOptions = false }: ProductCardProps) {
  const { toast } = useToast()
  const { addToCart } = useCart()
  const [selectedOption, setSelectedOption] = useState<string>("")
  const [quantity, setQuantity] = useState(1)

  const getOptions = () => {
    if (id === "vps-digital-ocean") {
      return [
        { value: "4gb", label: "4GB 2Core - Rp 20.000" },
        { value: "8gb", label: "8GB 4Core - Rp 25.000" },
        { value: "16gb", label: "16GB 4Core - Rp 30.000" },
      ]
    } else if (id === "panel-pterodactyl") {
      return [
        { value: "1gb", label: "1GB - Rp 1.000" },
        { value: "2gb", label: "2GB - Rp 2.000" },
        { value: "3gb", label: "3GB - Rp 3.000" },
        { value: "4gb", label: "4GB - Rp 4.000" },
        { value: "5gb", label: "5GB - Rp 5.000" },
        { value: "6gb", label: "6GB - Rp 6.000" },
        { value: "7gb", label: "7GB - Rp 7.000" },
        { value: "8gb", label: "8GB - Rp 8.000" },
        { value: "9gb", label: "9GB - Rp 9.000" },
        { value: "10gb", label: "10GB - Rp 10.000" },
        { value: "unlimited", label: "Unlimited - Rp 12.000" },
      ]
    }
    return []
  }

  const getPrice = () => {
    if (id === "vps-digital-ocean") {
      switch (selectedOption) {
        case "4gb":
          return 20000
        case "8gb":
          return 25000
        case "16gb":
          return 30000
        default:
          return 20000
      }
    } else if (id === "panel-pterodactyl") {
      switch (selectedOption) {
        case "1gb":
          return 1000
        case "2gb":
          return 2000
        case "3gb":
          return 3000
        case "4gb":
          return 4000
        case "5gb":
          return 5000
        case "6gb":
          return 6000
        case "7gb":
          return 7000
        case "8gb":
          return 8000
        case "9gb":
          return 9000
        case "10gb":
          return 10000
        case "unlimited":
          return 12000
        default:
          return 1000
      }
    }
    return price
  }

  const handleAddToCart = () => {
    const productPrice = getPrice()
    const optionLabel = hasOptions ? getOptions().find((opt) => opt.value === selectedOption)?.label : ""

    addToCart({
      id: hasOptions ? `${id}-${selectedOption}` : id,
      title: hasOptions ? `${title} (${optionLabel})` : title,
      price: productPrice,
      quantity,
      image,
    })

    toast({
      title: "Ditambahkan ke keranjang",
      description: `${title} ${optionLabel ? `(${optionLabel})` : ""} telah ditambahkan ke keranjang.`,
    })
  }

  return (
    <Card id={id} className="overflow-hidden">
      <div className="aspect-video relative">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {hasOptions ? (
          <div className="space-y-4">
            <Select onValueChange={setSelectedOption} defaultValue={getOptions()[0]?.value}>
              <SelectTrigger>
                <SelectValue placeholder="Pilih opsi" />
              </SelectTrigger>
              <SelectContent>
                {getOptions().map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon" onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
                -
              </Button>
              <span>{quantity}</span>
              <Button variant="outline" size="icon" onClick={() => setQuantity((q) => q + 1)}>
                +
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-xl font-bold">Rp {price.toLocaleString("id-ID")}</p>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon" onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
                -
              </Button>
              <span>{quantity}</span>
              <Button variant="outline" size="icon" onClick={() => setQuantity((q) => q + 1)}>
                +
              </Button>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleAddToCart}>
          Tambahkan ke Keranjang
        </Button>
      </CardFooter>
    </Card>
  )
}
