import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navItems = [
  { label: "Trang chủ", href: "#home" },
  { label: "Giới thiệu", href: "#features" },
  { label: "Tải game", href: "#download" },
  { label: "Tin tức", href: "#news" },
  { label: "Sự kiện", href: "#events" },
  { label: "Giftcode", href: "#giftcode" },
  { label: "Cộng đồng", href: "#community" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-deep/90 backdrop-blur-md border-b border-gold/20">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-3">
          <img src="/images/logo.svg" alt="Logo" className="h-10 w-auto" />
          <span className="font-display text-lg font-bold text-gradient-gold hidden sm:block">
            Thời Đại Ngọc Rồng
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="/login"
            className="px-4 py-2 rounded-md bg-gradient-gold text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Đăng nhập
          </a>
          <a
            href="/register"
            className="px-4 py-2 rounded-md border border-primary/50 text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
          >
            Đăng ký
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-deep/95 backdrop-blur-md border-t border-gold/10 pb-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block px-6 py-3 text-sm text-foreground/70 hover:text-primary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="px-6 pt-2 flex gap-3">
            <a href="#login" className="px-4 py-2 rounded-md bg-gradient-gold text-primary-foreground font-semibold text-sm">
              Đăng nhập
            </a>
            <a href="#register" className="px-4 py-2 rounded-md border border-primary/50 text-primary font-semibold text-sm">
              Đăng ký
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
