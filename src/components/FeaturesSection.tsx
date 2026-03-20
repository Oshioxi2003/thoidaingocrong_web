import { Swords, Users, Zap, Shield, Star, Trophy } from "lucide-react";

const features = [
  {
    icon: Swords,
    title: "PVP Kịch Tính",
    desc: "Hệ thống PVP đa dạng, đấu trường xếp hạng cùng các giải đấu hấp dẫn.",
  },
  {
    icon: Zap,
    title: "Sức Mạnh Vô Hạn",
    desc: "Nâng cấp nhân vật, mở khóa biến hình mới và chinh phục mọi giới hạn.",
  },
  {
    icon: Users,
    title: "Cộng Đồng Sôi Động",
    desc: "Hàng ngàn người chơi đang chờ đón bạn. Kết bạn, lập bang và chiến đấu.",
  },
  {
    icon: Shield,
    title: "Cân Bằng Gameplay",
    desc: "Server được cân bằng kỹ lưỡng, đảm bảo công bằng cho mọi người chơi.",
  },
  {
    icon: Star,
    title: "Sự Kiện Liên Tục",
    desc: "Các sự kiện ingame hấp dẫn diễn ra liên tục với phần thưởng giá trị.",
  },
  {
    icon: Trophy,
    title: "Phần Thưởng Hào Phóng",
    desc: "Giftcode miễn phí, quà tân thủ và nhiều phần thưởng giá trị khác.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-gradient-gold mb-4">
          Điểm Nổi Bật
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
          Khám phá những tính năng đặc biệt tại Thời Đại Ngọc Rồng
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-gradient-card rounded-xl p-6 border border-gold/10 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 group"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {f.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
