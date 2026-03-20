import sectionBg1 from "@/assets/section-bg-1.jpg";
import { Monitor, Smartphone, Apple, HelpCircle } from "lucide-react";

const platforms = [
  {
    icon: Monitor,
    name: "Windows PC",
    desc: "Tải bản cài đặt cho Windows",
    button: "Tải cho PC",
    primary: true,
  },
  {
    icon: Smartphone,
    name: "Android",
    desc: "Tải APK hoặc từ cửa hàng",
    button: "Tải cho Android",
    primary: true,
  },
  {
    icon: Apple,
    name: "iOS",
    desc: "Hướng dẫn cài đặt trên iPhone/iPad",
    button: "Hướng dẫn cài",
    primary: false,
  },
  {
    icon: HelpCircle,
    name: "Hỗ trợ",
    desc: "Hướng dẫn sửa lỗi thường gặp",
    button: "Xem hướng dẫn",
    primary: false,
  },
];

const DownloadSection = () => {
  return (
    <section id="download" className="py-24 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={sectionBg1} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-gradient-gold mb-4">
          Tải Game
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
          Chọn nền tảng phù hợp và bắt đầu hành trình của bạn
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {platforms.map((p, i) => (
            <div
              key={i}
              className="bg-gradient-card rounded-xl p-6 border border-gold/10 text-center hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <p.icon className="text-primary" size={32} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{p.name}</h3>
              <p className="text-sm text-muted-foreground mb-5 flex-1">{p.desc}</p>
              <button
                className={`w-full py-3 rounded-lg font-semibold text-sm transition-all mt-auto ${
                  p.primary
                    ? "bg-gradient-gold text-primary-foreground hover:opacity-90"
                    : "border border-primary/50 text-primary hover:bg-primary/10"
                }`}
              >
                {p.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
