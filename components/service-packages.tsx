import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const packages = [
  {
    title: "GÓI HÒA TĂNG ĐẠI PHÚC",
    subtitle: "HÒA TĂNG PHẬT GIÁO | GÓI ĐẠI PHÚC",
    price: "75.000.000 ₫",
    image: "/buddhist-funeral-ceremony-with-monks-yellow-decora.jpg",
    features: [
      "Trang trí hoa tang lễ cao cấp",
      "Hòa tăng Phật giáo 7-9 vị",
      "Xe tang lễ hạng sang",
      "Quách gỗ cao cấp",
      "Dịch vụ trang điểm",
      "Nhân viên phục vụ 24/7",
    ],
  },
  {
    title: "GÓI AN TĂNG ĐẠI PHÚC",
    subtitle: "AN TĂNG PHẬT GIÁO | GÓI ĐẠI PHÚC",
    price: "170.000.000 ₫",
    image: "/elegant-buddhist-funeral-altar-with-white-flowers.jpg",
    features: [
      "Trang trí hoa tang lễ VIP",
      "An tăng Phật giáo 12-15 vị",
      "Đoàn xe tang lễ cao cấp",
      "Quách gỗ quý hiếm",
      "Dịch vụ trang điểm cao cấp",
      "Đội ngũ phục vụ chuyên nghiệp",
    ],
  },
  {
    title: "GÓI HÒA TĂNG VẠN PHƯỚC",
    subtitle: "HÒA TĂNG PHẬT GIÁO | GÓI VẠN PHƯỚC",
    price: "65.000.000 ₫",
    image: "/traditional-buddhist-funeral-setup-with-yellow-clo.jpg",
    features: [
      "Trang trí hoa tang lễ đẹp",
      "Hòa tăng Phật giáo 5-7 vị",
      "Xe tang lễ tiêu chuẩn",
      "Quách gỗ chất lượng",
      "Dịch vụ trang điểm",
      "Nhân viên hỗ trợ",
    ],
  },
  {
    title: "GÓI AN TĂNG VẠN PHƯỚC",
    subtitle: "AN TĂNG PHẬT GIÁO | GÓI VẠN PHƯỚC",
    price: "135.000.000 ₫",
    image: "/premium-buddhist-funeral-ceremony-with-orange-deco.jpg",
    features: [
      "Trang trí hoa tang lễ sang trọng",
      "An tăng Phật giáo 10-12 vị",
      "Đoàn xe tang lễ sang trọng",
      "Quách gỗ cao cấp",
      "Dịch vụ trang điểm VIP",
      "Đội ngũ phục vụ tận tâm",
    ],
  },
  {
    title: "GÓI HÒA TĂNG BẢO KHÁNH",
    subtitle: "HÒA TĂNG PHẬT GIÁO | GÓI BẢO KHÁNH",
    price: "55.000.000 ₫",
    image: "/simple-buddhist-funeral-with-yellow-flowers.jpg",
    features: [
      "Trang trí hoa tang lễ cơ bản",
      "Hòa tăng Phật giáo 3-5 vị",
      "Xe tang lễ",
      "Quách gỗ",
      "Dịch vụ cơ bản",
      "Nhân viên hỗ trợ",
    ],
  },
  {
    title: "GÓI AN TĂNG BẢO KHÁNH",
    subtitle: "AN TĂNG PHẬT GIÁO | GÓI BẢO KHÁNH",
    price: "125.000.000 ₫",
    image: "/buddhist-funeral-altar-with-golden-decorations.jpg",
    features: [
      "Trang trí hoa tang lễ đẹp",
      "An tăng Phật giáo 8-10 vị",
      "Đoàn xe tang lễ",
      "Quách gỗ tốt",
      "Dịch vụ trang điểm",
      "Đội ngũ phục vụ",
    ],
  },
]

export function ServicePackages() {
  return (
    <section id="goi-dich-vu" className="py-24 bg-gradient-to-b from-background via-amber-50/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-bold text-lg mb-2">BÁO GIÁ</p>
          <h2
            className="text-4xl md:text-5xl font-serif font-bold mb-6 text-balance"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            <span className="text-primary">DỊCH VỤ TANG LỄ</span> TRỌN GÓI
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Martino cung cấp các gói dịch vụ tang lễ trọn gói từ cơ bản đến cao cấp, đáp ứng mọi nhu cầu của gia đình
            với giá cả minh bạch và chất lượng đảm bảo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className="border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-2xl overflow-hidden group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{pkg.title}</h3>
                  <p className="text-sm text-amber-200">{pkg.subtitle}</p>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="text-center mb-6 pb-6 border-b-2 border-primary/20">
                  <p className="text-3xl font-bold text-primary">{pkg.price}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold">
                  Tư Vấn Ngay
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
