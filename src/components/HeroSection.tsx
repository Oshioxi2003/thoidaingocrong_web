import heroBg from "@/assets/hero-bg.jpg";
import { Download, Gift, UserPlus, LogIn } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="animate-float mb-6">
          <img src="/images/logo.svg" alt="Thời Đại Ngọc Rồng" className="h-32 md:h-44 mx-auto drop-shadow-2xl" />
        </div>

        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-gradient-gold mb-4 tracking-wide">
          Thời Đại Ngọc Rồng
        </h1>

        <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 font-body">
          Huyền thoại trở lại! Tham gia ngay để trải nghiệm thế giới Dragon Ball đầy kịch tính và hấp dẫn.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a
            href="#download"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-gold text-primary-foreground font-bold text-lg animate-pulse-glow hover:scale-105 transition-transform"
          >
            <Download size={22} />
            Tải Game
          </a>
          <a
            href="#register"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-fire text-foreground font-bold text-lg hover:scale-105 transition-transform"
          >
            <UserPlus size={22} />
            Đăng Ký
          </a>
          <a
            href="#login"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-primary/50 text-primary font-bold text-lg hover:bg-primary/10 transition-colors"
          >
            <LogIn size={22} />
            Đăng Nhập
          </a>
          <a
            href="#giftcode"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-fire-orange/50 text-fire-orange font-bold text-lg hover:bg-fire-orange/10 transition-colors"
          >
            <Gift size={22} />
            Nhận Giftcode
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
