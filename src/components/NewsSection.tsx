import { Newspaper, CalendarDays, BookOpen } from "lucide-react";

const newsItems = [
  {
    type: "update",
    icon: Newspaper,
    date: "20/03/2026",
    title: "Cập Nhật Phiên Bản 3.5 - Hành Tinh Namek",
    desc: "Mở rộng bản đồ Hành Tinh Namek, thêm boss mới và hệ thống nhiệm vụ hấp dẫn.",
  },
  {
    type: "event",
    icon: CalendarDays,
    date: "18/03/2026",
    title: "Sự Kiện Đại Hội Võ Thuật Thiên Hạ Đệ Nhất",
    desc: "Tham gia giải đấu PVP lớn nhất server với tổng giải thưởng cực khủng!",
  },
  {
    type: "guide",
    icon: BookOpen,
    date: "15/03/2026",
    title: "Hướng Dẫn Tân Thủ - Từ A đến Z",
    desc: "Cẩm nang đầy đủ cho người mới bắt đầu, từ tạo nhân vật đến PVP.",
  },
  {
    type: "update",
    icon: Newspaper,
    date: "12/03/2026",
    title: "Bảo Trì Định Kỳ - Nâng Cấp Server",
    desc: "Server sẽ bảo trì từ 6h-8h sáng để nâng cấp hệ thống và tối ưu hiệu năng.",
  },
];

const typeColors: Record<string, string> = {
  update: "bg-primary/20 text-primary",
  event: "bg-fire-orange/20 text-fire-orange",
  guide: "bg-gold-light/20 text-gold-light",
};

const typeLabels: Record<string, string> = {
  update: "Cập nhật",
  event: "Sự kiện",
  guide: "Hướng dẫn",
};

const NewsSection = () => {
  return (
    <section id="news" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-gradient-gold mb-4">
          Tin Tức & Sự Kiện
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
          Cập nhật mới nhất từ Thời Đại Ngọc Rồng
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {newsItems.map((item, i) => (
            <article
              key={i}
              className="bg-gradient-card rounded-xl p-6 border border-gold/10 hover:border-primary/30 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-xs px-3 py-1 rounded-full font-medium ${typeColors[item.type]}`}>
                  {typeLabels[item.type]}
                </span>
                <span className="text-xs text-muted-foreground">{item.date}</span>
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
