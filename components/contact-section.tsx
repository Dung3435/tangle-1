"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="lien-he" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="text-4xl md:text-5xl font-serif font-semibold mb-6 text-balance"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Liên Hệ Với Chúng Tôi
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn 24/7. Hãy liên hệ ngay để được tư vấn miễn phí.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-border/50">
              <CardContent className="p-6 flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Hotline 24/7</h3>
                  <p className="text-muted-foreground">1900 xxxx</p>
                  <p className="text-muted-foreground">0909 xxx xxx</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6 flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">info@antamtangle.vn</p>
                  <p className="text-muted-foreground">hotro@antamtangle.vn</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6 flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Địa Chỉ</h3>
                  <p className="text-muted-foreground">123 Đường ABC, Quận 1</p>
                  <p className="text-muted-foreground">Thành phố Hồ Chí Minh</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6 flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Giờ Làm Việc</h3>
                  <p className="text-muted-foreground">Phục vụ 24/7</p>
                  <p className="text-muted-foreground">Cả ngày lễ và cuối tuần</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Gửi Tin Nhắn</h3>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Họ và tên *" required />
                </div>
                <div>
                  <Input type="tel" placeholder="Số điện thoại *" required />
                </div>
                <div>
                  <Input type="email" placeholder="Email" />
                </div>
                <div>
                  <Textarea placeholder="Nội dung tin nhắn *" rows={5} required />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Gửi Tin Nhắn
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
