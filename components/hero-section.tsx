import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/peaceful-serene-nature-landscape-with-misty-mounta.jpg"
          alt="Peaceful landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/70 via-amber-900/60 to-amber-950/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2
            className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight text-balance drop-shadow-lg"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            DỊCH VỤ TANG LỄ
            <br />
            <span className="text-amber-300">MARTINO FUNERAL</span>
          </h2>

          <p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto leading-relaxed text-pretty drop-shadow">
            Dịch vụ tang lễ & Martino với đội ngũ nhân viên chuyên nghiệp, tận tâm và chu đáo. Chúng tôi hiểu rằng đây
            là khoảng thời gian khó khăn nhất, và chúng tôi ở đây để hỗ trợ bạn với tất cả sự tôn trọng và chuyên
            nghiệp.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="gap-2 text-base px-8 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Phone className="h-5 w-5" />
              Gọi Ngay: 1900 xxxx
            </Button>
            <Button size="lg" className="gap-2 text-base px-8 bg-accent hover:bg-accent/90 text-accent-foreground">
              <MessageCircle className="h-5 w-5" />
              Tư Vấn Miễn Phí 24/7
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-amber-300/70 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-amber-300/70 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
