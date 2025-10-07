import { Card, CardContent } from "@/components/ui/card"
import { Eye, Target, Award } from "lucide-react"

const values = [
  {
    icon: Eye,
    title: "Tầm nhìn",
    description:
      "Martino luôn hướng đến mục tiêu trở thành đơn vị hàng đầu trong lĩnh vực dịch vụ tang lễ tại Việt Nam.",
  },
  {
    icon: Target,
    title: "Sứ mệnh",
    description:
      "Martino cam kết đồng hành cùng gia đình trong những giây phút khó khăn nhất với sự tận tâm và chuyên nghiệp.",
  },
  {
    icon: Award,
    title: "Giá trị",
    description: "Mỗi tang lễ đều được tổ chức với sự trang trọng, chu đáo và tôn trọng tối đa đến người đã khuất.",
  },
]

export function ValueCards() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <Card
                key={index}
                className="border-2 border-primary/30 bg-card hover:border-primary transition-all duration-300 hover:shadow-xl relative overflow-hidden group"
              >
                {/* Gold accent bar at top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />

                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
