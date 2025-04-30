import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import ProductSlider from "@/components/product-slider"
import Testimonials from "@/components/testimonials"
import ProductCard from "@/components/product-card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="https://img1.pixhost.to/images/5416/593835320_ferrstoree.jpg" alt="FerrStoree Logo" width={40} height={40} className="rounded-md" />
            <span className="text-xl font-bold">FerrStoree</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="font-medium transition-colors hover:text-primary">
              Beranda
            </Link>
            <Link href="#produk" className="font-medium transition-colors hover:text-primary">
              Produk
            </Link>
            <Link href="#testimoni" className="font-medium transition-colors hover:text-primary">
              Testimoni
            </Link>
            <Link href="#kontak" className="font-medium transition-colors hover:text-primary">
              Kontak
            </Link>
          </nav>
          <Link href="/keranjang">
            <Button variant="outline" size="icon">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Keranjang</span>
            </Button>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Selamat Datang di FerrStoree
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Penyedia layanan hosting terpercaya dengan harga terjangkau dan kualitas terbaik
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <div className="flex space-x-2">
                  <Link href="#produk">
                    <Button className="w-full">Lihat Produk</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="produk" className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Produk Kami</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Pilih layanan terbaik sesuai kebutuhan Anda
                </p>
              </div>
            </div>
            <ProductSlider />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <ProductCard
                title="Digital Ocean"
                price={140000}
                description="Layanan cloud hosting terbaik dengan performa tinggi dan skalabilitas yang mudah"
                image="https://img1.pixhost.to/images/5416/593835090_ferrstoree.jpg"
                id="digital-ocean"
              />
              <ProductCard
                title="VPS Digital Ocean"
                price={20000}
                description="Virtual Private Server dengan pilihan spesifikasi sesuai kebutuhan Anda"
                image="https://img1.pixhost.to/images/5416/593836587_ferrstoree.jpg"
                id="vps-digital-ocean"
                hasOptions={true}
              />
              <ProductCard
                title="Panel Pterodactyl"
                price={1000}
                description="Panel game server yang mudah digunakan dengan berbagai pilihan kapasitas"
                image="https://img1.pixhost.to/images/5416/593835116_ferrstoree.jpg"
                id="panel-pterodactyl"
                hasOptions={true}
              />
              <ProductCard
                title="SC Simple Create v2.5"
                price={25000}
                description="Script pembuatan server game dengan fitur lengkap dan mudah digunakan"
                image="https://img1.pixhost.to/images/5416/593835161_ferrstoree.jpg"
                id="sc-simple-create"
              />
            </div>
          </div>
        </section>

        <section id="testimoni" className="py-12 md:py-16 lg:py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Testimoni Pelanggan</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Apa kata pelanggan tentang layanan kami
                </p>
              </div>
            </div>
            <Testimonials />
          </div>
        </section>

        <section id="kontak" className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Hubungi Kami</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Jika Anda memiliki pertanyaan, jangan ragu untuk menghubungi kami
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span>WhatsApp: +6289603429352</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
            © 2024 FerrStoree. Semua hak dilindungi.
          </p>
        </div>
      </footer>
    </div>
  )
}
