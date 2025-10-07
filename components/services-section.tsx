import { Card, CardContent } from "@/components/ui/card"
import { Flower2, Heart, Users, Home, Car, Sparkles } from "lucide-react"

const services = [
  {
    icon: Flower2,
    title: "Tổ Chức Tang Lễ Trọn Gói",
    description: "Dịch vụ tổ chức tang lễ hoàn chỉnh từ A-Z, bao gồm tất cả các thủ tục và nghi lễ cần thiết.",
    image: "/traditional-funeral-ceremony-setup-with-flowers-an.jpg",
  },
  {
    icon: Heart,
    title: "Tư Vấn & Hỗ Trợ 24/7",
    description: "Đội ngũ tư vấn viên chuyên nghiệp luôn sẵn sàng hỗ trợ gia đình mọi lúc, mọi nơi.",
    image: "/professional-consultant-helping-family-with-compas.jpg",
  },
  {
    icon: Users,
    title: "Nhân Viên Chuyên Nghiệp",
    description: "Đội ngũ nhân viên được đào tạo bài bản, tận tâm và chu đáo trong từng chi tiết.",
    image: "/professional-funeral-service-staff-team-in-formal-.jpg",
  },
  {
    icon: Home,
    title: "Nhà Tang Lễ Hiện Đại",
    description: "Cơ sở vật chất hiện đại, trang nghiêm với đầy đủ tiện nghi phục vụ gia đình.",
    image: "/modern-funeral-home-interior-with-elegant-decor.jpg",
  },
  {
    icon: Car,
    title: "Xe Tang Lễ Cao Cấp",
    description: "Đội xe tang lễ đa dạng, hiện đại, phục vụ mọi nhu cầu của gia đình.",
    image: "/luxury-funeral-hearse-vehicle-black-elegant.jpg",
  },
  {
    icon: Sparkles,
    title: "Dịch Vụ Trang Trí",
    description: "Trang trí hoa tang lễ trang trọng, nghệ thuật theo phong tục truyền thống.",
    image: "/beautiful-funeral-flower-arrangements-white-chrysa.jpg",
  },
]

export function ServicesSection() {
  return (
    <section id="dich-vu" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="text-4xl md:text-5xl font-serif font-bold mb-6 text-balance text-primary"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Dịch Vụ Của Chúng Tôi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Chúng tôi cung cấp đầy đủ các dịch vụ tang lễ chuyên nghiệp, đáp ứng mọi nhu cầu của gia đình trong thời
            điểm khó khăn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-xl overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
