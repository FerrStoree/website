"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/hooks/use-cart"
import { useToast } from "@/hooks/use-toast"

export default function CartPage() {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart()
  const { toast } = useToast()
  const [paymentMethod, setPaymentMethod] = useState<string>("")
  const [showQris, setShowQris] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  const handleCheckout = () => {
    if (!paymentMethod) {
      toast({
        title: "Pilih metode pembayaran",
        description: "Silakan pilih metode pembayaran terlebih dahulu.",
        variant: "destructive",
      })
      return
    }

    if (paymentMethod === "qris") {
      setShowQris(true)
    } else {
      setOrderComplete(true)
      clearCart()
    }
  }

  const handleQrisConfirm = () => {
    setOrderComplete(true)
    setShowQris(false)
    clearCart()
  }

  if (orderComplete) {
    return (
      <div className="container max-w-4xl mx-auto py-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Pesanan Berhasil!</CardTitle>
            <CardDescription>Terima kasih telah berbelanja di FerrStoree</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Silakan kirim bukti pembayaran ke WhatsApp owner:</p>
            <p className="font-bold">WA: +6289603429352</p>
            <p>Pesanan Anda akan segera diproses setelah konfirmasi pembayaran.</p>
          </CardContent>
          <CardFooter>
            <Link href="/">
              <Button>Kembali ke Beranda</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    )
  }

  if (showQris) {
    return (
      <div className="container max-w-4xl mx-auto py-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Pembayaran QRIS</CardTitle>
            <CardDescription>Silakan scan QR code berikut untuk melakukan pembayaran</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            <div className="relative w-64 h-64">
              <Image
                src="https://img1.pixhost.to/images/5392/593548117_ferrstoree.jpg"
                alt="QRIS Payment"
                fill
                className="object-contain"
              />
            </div>
            <p className="font-bold text-xl">Total: Rp {totalPrice.toLocaleString("id-ID")}</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => setShowQris(false)}>
              Kembali
            </Button>
            <Button onClick={handleQrisConfirm}>Saya Sudah Bayar</Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="container max-w-4xl mx-auto py-12">
      <div className="flex items-center mb-6">
        <Link href="/">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Kembali Belanja
          </Button>
        </Link>
        <h1 className="text-2xl font-bold ml-4">Keranjang Belanja</h1>
      </div>

      {cart.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <p className="text-lg text-gray-500 mb-4">Keranjang belanja Anda kosong</p>
            <Link href="/">
              <Button>Mulai Belanja</Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Item Keranjang</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <div className="relative w-16 h-16 rounded overflow-hidden">
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-sm text-gray-500">Rp {item.price.toLocaleString("id-ID")}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      >
                        -
                      </Button>
                      <span>{item.quantity}</span>
                      <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        +
                      </Button>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Hapus</span>
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Ringkasan Pesanan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rp {totalPrice.toLocaleString("id-ID")}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>Rp {totalPrice.toLocaleString("id-ID")}</span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Metode Pembayaran</h3>
                  <RadioGroup onValueChange={setPaymentMethod} value={paymentMethod}>
                    <div className="flex items-center space-x-2 border rounded-md p-3">
                      <RadioGroupItem value="ewallet" id="ewallet" />
                      <Label htmlFor="ewallet">E-Wallet</Label>
                    </div>
                    {paymentMethod === "ewallet" && (
                      <div className="ml-6 mt-2 space-y-2">
                        <div className="flex items-center space-x-2 border rounded-md p-3">
                          <RadioGroupItem value="dana" id="dana" />
                          <Label htmlFor="dana">DANA - 085773533497 (Ferdian)</Label>
                        </div>
                        <div className="flex items-center space-x-2 border rounded-md p-3">
                          <RadioGroupItem value="gopay" id="gopay" />
                          <Label htmlFor="gopay">GoPay - 085773533497 (Ferdian)</Label>
                        </div>
                        <div className="flex items-center space-x-2 border rounded-md p-3">
                          <RadioGroupItem value="shopee" id="shopee" />
                          <Label htmlFor="shopee">ShopeePay - 085773533497 (Ferdian)</Label>
                        </div>
                      </div>
                    )}
                    <div className="flex items-center space-x-2 border rounded-md p-3">
                      <RadioGroupItem value="bank" id="bank" />
                      <Label htmlFor="bank">Bank</Label>
                    </div>
                    {paymentMethod === "bank" && (
                      <div className="ml-6 mt-2">
                        <div className="flex items-center space-x-2 border rounded-md p-3">
                          <RadioGroupItem value="seabank" id="seabank" />
                          <Label htmlFor="seabank">SeaBank - 901265095132 (Ferdian)</Label>
                        </div>
                      </div>
                    )}
                    <div className="flex items-center space-x-2 border rounded-md p-3">
                      <RadioGroupItem value="qris" id="qris" />
                      <Label htmlFor="qris">QRIS</Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={handleCheckout}>
                  Checkout
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}
    </div>
  )
}
