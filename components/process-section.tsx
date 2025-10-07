const steps = [
  {
    number: "01",
    title: "Liên Hệ & Tư Vấn",
    description:
      "Gọi hotline hoặc liên hệ trực tiếp. Đội ngũ tư vấn sẽ lắng nghe và tư vấn chi tiết về các dịch vụ phù hợp.",
  },
  {
    number: "02",
    title: "Lập Kế Hoạch",
    description: "Cùng gia đình lập kế hoạch chi tiết về nghi lễ, thời gian, địa điểm và các dịch vụ cần thiết.",
  },
  {
    number: "03",
    title: "Chuẩn Bị & Tổ Chức",
    description:
      "Đội ngũ chuyên nghiệp sẽ lo tất cả các công việc chuẩn bị, từ thủ tục giấy tờ đến trang trí, âm thanh.",
  },
  {
    number: "04",
    title: "Tổ Chức Tang Lễ",
    description: "Điều phối và tổ chức tang lễ trang trọng, chu đáo theo đúng kế hoạch và nguyện vọng của gia đình.",
  },
  {
    number: "05",
    title: "Hỗ Trợ Sau Tang Lễ",
    description: "Tiếp tục hỗ trợ gia đình hoàn tất các thủ tục hành chính và các dịch vụ hậu sự nếu cần.",
  },
]

export function ProcessSection() {
  return (
    <section id="quy-trinh" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="text-4xl md:text-5xl font-serif font-semibold mb-6 text-balance"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Quy Trình Phục Vụ
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Quy trình làm việc chuyên nghiệp, minh bạch và tận tâm, đảm bảo mọi công việc được thực hiện chu đáo nhất.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <span className="text-2xl font-serif font-semibold" style={{ fontFamily: "var(--font-cormorant)" }}>
                      {step.number}
                    </span>
                  </div>
                </div>
                <div className="flex-1 pb-8 border-l-2 border-border pl-6 -ml-8 relative">
                  {index < steps.length - 1 && <div className="absolute left-0 top-16 bottom-0 w-0.5 bg-border" />}
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary" />
                  <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
