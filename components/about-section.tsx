import { Card, CardContent } from "@/components/ui/card"
import { Award, Clock, Shield, Users2 } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "Hơn 15 Năm Kinh Nghiệm",
    description: "Phục vụ hàng nghìn gia đình với sự tận tâm và chuyên nghiệp",
  },
  {
    icon: Users2,
    title: "Đội Ngũ Chuyên Nghiệp",
    description: "Nhân viên được đào tạo bài bản, tận tâm và chu đáo",
  },
  {
    icon: Shield,
    title: "Uy Tín & Tin Cậy",
    description: "Cam kết chất lượng dịch vụ và giá cả minh bạch",
  },
  {
    icon: Award,
    title: "Dịch Vụ Trọn Gói",
    description: "Hỗ trợ toàn diện từ A-Z, gia đình không phải lo lắng",
  },
]

export function AboutSection() {
  return (
    <section id="gioi-thieu" className="py-24 bg-secondary/30 relative">
      {/* Vietnamese decorative corners */}
      <div className="vietnamese-corner vietnamese-corner-tl" />
      <div className="vietnamese-corner vietnamese-corner-tr" />
      <div className="vietnamese-corner vietnamese-corner-bl" />
      <div className="vietnamese-corner vietnamese-corner-br" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-serif font-bold mb-4 text-primary"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            VỀ MARTINO
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground text-lg">Martino Funeral</strong> là đơn vị cung cấp dịch vụ tang lễ
                uy tín hàng đầu tại TP.HCM. Chúng tôi tự hào đã đồng hành cùng hàng nghìn gia đình trong những khoảnh
                khắc khó khăn nhất với hơn 15 năm kinh nghiệm trong ngành.
              </p>
              <p>
                Với đội ngũ nhân viên chuyên nghiệp, tận tâm và cơ sở vật chất hiện đại, chúng tôi cam kết mang đến dịch
                vụ tang lễ chất lượng cao nhất, đáp ứng mọi nhu cầu của gia đình từ tang lễ Phật giáo đến Công giáo.
              </p>
              <p className="text-primary font-semibold">
                "Chúng tôi hiểu rằng việc mất đi người thân là nỗi đau lớn nhất. Vì vậy, sứ mệnh của chúng tôi là giảm
                bớt gánh nặng cho gia đình."
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-lg overflow-hidden border-4 border-primary/20">
                <img
                  src="/respectful-funeral-service-ceremony-with-family.jpg"
                  alt="Funeral ceremony"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden border-4 border-primary/20">
                <img
                  src="/elegant-funeral-home-chapel-interior.jpg"
                  alt="Funeral home"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={index}
                  className="border-2 border-primary/20 hover:border-primary transition-all hover:shadow-lg"
                >
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-primary">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
