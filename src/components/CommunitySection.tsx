import sectionBg2 from "@/assets/section-bg-2.jpg";
import { MessageCircle, Facebook, Send } from "lucide-react";

const channels = [
  {
    icon: Facebook,
    name: "Fanpage Facebook",
    desc: "Theo dõi tin tức và cập nhật mới nhất",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    icon: Facebook,
    name: "Group Facebook",
    desc: "Tham gia cộng đồng người chơi",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: MessageCircle,
    name: "Zalo",
    desc: "Nhóm chat Zalo chính thức",
    color: "text-blue-300",
    bgColor: "bg-blue-300/10",
  },
  {
    icon: Send,
    name: "Discord / Telegram",
    desc: "Kênh giao lưu quốc tế",
    color: "text-indigo-400",
    bgColor: "bg-indigo-400/10",
  },
];

const CommunitySection = () => {
  return (
    <section id="community" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={sectionBg2} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background" style={{ opacity: 'var(--section-overlay-opacity)' }} />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-gradient-gold mb-4">
          Cộng Đồng
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
          Tham gia cộng đồng Thời Đại Ngọc Rồng trên các nền tảng
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {channels.map((c, i) => (
            <a
              key={i}
              href="#"
              className="bg-gradient-card rounded-xl p-6 border border-gold/10 text-center hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group block"
            >
              <div className={`w-14 h-14 rounded-full ${c.bgColor} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <c.icon className={c.color} size={28} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">{c.name}</h3>
              <p className="text-sm text-muted-foreground">{c.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
