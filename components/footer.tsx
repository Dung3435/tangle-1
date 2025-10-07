import { Facebook, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4" style={{ fontFamily: "var(--font-cormorant)" }}>
              MARTINO FUNERAL
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-4">
              Dịch vụ tang lễ chuyên nghiệp, tận tâm và chu đáo. Đồng hành cùng gia đình trong những giây phút khó khăn
              nhất với hơn 15 năm kinh nghiệm.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liên Kết</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#gioi-thieu"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Giới Thiệu
                </a>
              </li>
              <li>
                <a
                  href="#dich-vu"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Dịch Vụ
                </a>
              </li>
              <li>
                <a
                  href="#goi-dich-vu"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Gói Dịch Vụ
                </a>
              </li>
              <li>
                <a
                  href="#quy-trinh"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Quy Trình
                </a>
              </li>
              <li>
                <a
                  href="#lien-he"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Liên Hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liên Hệ</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">Hotline 24/7: 1900 xxxx</div>
                  <div>Mobile: 0909 xxx xxx</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <div>info@martinofuneral.vn</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Martino Funeral. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}
