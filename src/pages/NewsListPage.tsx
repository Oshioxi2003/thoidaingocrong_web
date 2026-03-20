import { Newspaper, CalendarDays, BookOpen, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const allNews = [
  {
    type: "update",
    icon: Newspaper,
    date: "20/03/2026",
    title: "Cập Nhật Phiên Bản 3.5 - Hành Tinh Namek",
    desc: "Mở rộng bản đồ Hành Tinh Namek, thêm boss mới và hệ thống nhiệm vụ hấp dẫn. Người chơi sẽ được khám phá vùng đất mới với nhiều thử thách chưa từng có.",
  },
  {
    type: "event",
    icon: CalendarDays,
    date: "18/03/2026",
    title: "Sự Kiện Đại Hội Võ Thuật Thiên Hạ Đệ Nhất",
    desc: "Tham gia giải đấu PVP lớn nhất server với tổng giải thưởng cực khủng! Đăng ký ngay để giành lấy danh hiệu chiến binh mạnh nhất.",
  },
  {
    type: "guide",
    icon: BookOpen,
    date: "15/03/2026",
    title: "Hướng Dẫn Tân Thủ - Từ A đến Z",
    desc: "Cẩm nang đầy đủ cho người mới bắt đầu, từ tạo nhân vật đến PVP. Bao gồm cách luyện tập, farm đồ và nâng cấp sức mạnh hiệu quả.",
  },
  {
    type: "update",
    icon: Newspaper,
    date: "12/03/2026",
    title: "Bảo Trì Định Kỳ - Nâng Cấp Server",
    desc: "Server sẽ bảo trì từ 6h-8h sáng để nâng cấp hệ thống và tối ưu hiệu năng. Sau bảo trì sẽ có quà bù cho toàn bộ người chơi.",
  },
  {
    type: "event",
    icon: CalendarDays,
    date: "10/03/2026",
    title: "Sự Kiện Săn Boss Thế Giới - Phần Thưởng x2",
    desc: "Trong tuần này, tất cả Boss Thế Giới sẽ drop phần thưởng gấp đôi. Đây là cơ hội vàng để farm trang bị hiếm!",
  },
  {
    type: "guide",
    icon: BookOpen,
    date: "08/03/2026",
    title: "Cẩm Nang Biến Hình - Mở Khóa Super Saiyan",
    desc: "Hướng dẫn chi tiết cách mở khóa các cấp biến hình từ SSJ1 đến SSJ Blue. Yêu cầu nhiệm vụ, vật phẩm và mẹo hoàn thành nhanh.",
  },
  {
    type: "update",
    icon: Newspaper,
    date: "05/03/2026",
    title: "Khai Mở Máy Chủ Mới - S10 Vũ Trụ",
    desc: "Máy chủ S10 Vũ Trụ chính thức mở cửa! Đăng ký sớm để nhận bộ quà tân thủ đặc biệt và nhiều ưu đãi hấp dẫn.",
  },
  {
    type: "event",
    icon: CalendarDays,
    date: "01/03/2026",
    title: "Sự Kiện Đua Top Tháng 3 - Giải Thưởng Khủng",
    desc: "Đua top sức mạnh, level và PVP trong tháng 3 để nhận phần thưởng giá trị. Top 1 mỗi hạng mục nhận trang bị huyền thoại!",
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

const NewsListPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-dark pt-24 pb-16">
        <div className="container mx-auto px-4">

        <div className="mb-10">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-gradient-gold mb-3">
            Tin Tức & Sự Kiện
          </h1>
          <p className="text-muted-foreground max-w-xl">
            Tổng hợp tất cả tin tức, sự kiện và hướng dẫn mới nhất từ Thời Đại Ngọc Rồng
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          {[
            { label: "Tất cả", value: "all" },
            { label: "Cập nhật", value: "update" },
            { label: "Sự kiện", value: "event" },
            { label: "Hướng dẫn", value: "guide" },
          ].map((tab) => (
            <button
              key={tab.value}
              className="px-5 py-2 rounded-lg text-sm font-medium border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* News list */}
        <div className="space-y-4">
          {allNews.map((item, i) => (
            <article
              key={i}
              className="bg-gradient-card rounded-xl p-6 border border-gold/10 hover:border-primary/30 transition-all duration-300 cursor-pointer group"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="text-primary" size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${typeColors[item.type]}`}>
                      {typeLabels[item.type]}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock size={12} />
                      {item.date}
                    </span>
                  </div>
                  <h2 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {item.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsListPage;
