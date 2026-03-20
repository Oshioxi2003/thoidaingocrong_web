const Footer = () => {
  return (
    <footer className="bg-navy-deep border-t border-gold/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/logo.svg" alt="Logo" className="h-10" />
              <span className="font-display text-lg font-bold text-gradient-gold">
                Thời Đại Ngọc Rồng
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Thời Đại Ngọc Rồng - hàng đầu với cộng đồng sôi động và gameplay cân bằng.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-4">Liên Kết</h4>
            <div className="space-y-2">
              {["Trang chủ", "Tải game", "Tin tức", "Giftcode", "Cộng đồng"].map((label) => (
                <a key={label} href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-4">Hỗ Trợ</h4>
            <div className="space-y-2">
              {["Hướng dẫn tân thủ", "Sửa lỗi thường gặp", "Liên hệ Admin", "Điều khoản sử dụng"].map((label) => (
                <a key={label} href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gold/10 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 Thời Đại Ngọc Rồng. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
