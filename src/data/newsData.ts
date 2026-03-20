import { Newspaper, CalendarDays, BookOpen, LucideIcon } from "lucide-react";

export interface NewsItem {
  id: string;
  type: "update" | "event" | "guide";
  icon: LucideIcon;
  date: string;
  title: string;
  desc: string;
  content: string;
}

export const allNews: NewsItem[] = [
  {
    id: "cap-nhat-3-5-namek",
    type: "update",
    icon: Newspaper,
    date: "20/03/2026",
    title: "Cập Nhật Phiên Bản 3.5 - Hành Tinh Namek",
    desc: "Mở rộng bản đồ Hành Tinh Namek, thêm boss mới và hệ thống nhiệm vụ hấp dẫn.",
    content: `Chào các chiến binh!\n\nChúng tôi vui mừng thông báo phiên bản 3.5 đã chính thức ra mắt với nhiều nội dung hấp dẫn:\n\n🌍 **Hành Tinh Namek**\n- Bản đồ mới rộng lớn với nhiều khu vực khám phá\n- Hệ thống nhiệm vụ chính tuyến mới\n- NPC mới với các câu chuyện thú vị\n\n👹 **Boss Mới**\n- Frieza Form 1-4: Xuất hiện theo lịch cố định\n- Ginyu Force: Boss nhóm cần team 5 người\n- Drop trang bị huyền thoại cấp 3.5\n\n⚔️ **Hệ Thống Nhiệm Vụ**\n- 50+ nhiệm vụ mới\n- Phần thưởng kinh nghiệm x2 trong tuần đầu\n- Nhiệm vụ ẩn với phần thưởng đặc biệt\n\nCập nhật ngay để trải nghiệm!`,
  },
  {
    id: "dai-hoi-vo-thuat",
    type: "event",
    icon: CalendarDays,
    date: "18/03/2026",
    title: "Sự Kiện Đại Hội Võ Thuật Thiên Hạ Đệ Nhất",
    desc: "Tham gia giải đấu PVP lớn nhất server với tổng giải thưởng cực khủng!",
    content: `🏆 **Đại Hội Võ Thuật Thiên Hạ Đệ Nhất**\n\nGiải đấu PVP lớn nhất server chính thức khởi tranh!\n\n📅 **Thời gian**\n- Đăng ký: 18/03 - 22/03/2026\n- Vòng loại: 23/03 - 25/03/2026\n- Chung kết: 26/03/2026 lúc 20h00\n\n🎁 **Giải thưởng**\n- Top 1: Trang bị Huyền Thoại + 10.000 Ngọc Rồng + Danh hiệu "Thiên Hạ Đệ Nhất"\n- Top 2: Trang bị Sử Thi + 5.000 Ngọc Rồng\n- Top 3: Trang bị Hiếm + 3.000 Ngọc Rồng\n- Top 4-8: 1.000 Ngọc Rồng\n\n📋 **Điều kiện tham gia**\n- Level tối thiểu: 100\n- Đã hoàn thành nhiệm vụ chính tuyến\n- Đăng ký qua NPC Thiên Sứ tại Làng Kami\n\nĐăng ký ngay để không bỏ lỡ!`,
  },
  {
    id: "huong-dan-tan-thu",
    type: "guide",
    icon: BookOpen,
    date: "15/03/2026",
    title: "Hướng Dẫn Tân Thủ - Từ A đến Z",
    desc: "Cẩm nang đầy đủ cho người mới bắt đầu, từ tạo nhân vật đến PVP.",
    content: `📖 **Hướng Dẫn Tân Thủ Toàn Diện**\n\n**1. Tạo Nhân Vật**\n- Chọn chủng tộc: Người Trái Đất, Namek, Xayda\n- Mỗi chủng tộc có ưu điểm riêng\n- Người Trái Đất: cân bằng, phù hợp newbie\n\n**2. Làm Nhiệm Vụ Chính Tuyến**\n- Theo dõi mũi tên chỉ dẫn\n- Hoàn thành để nhận EXP và trang bị\n- Không bỏ qua nhiệm vụ nào!\n\n**3. Nâng Cấp Sức Mạnh**\n- Luyện tập tại phòng Trọng Lực\n- Tìm Thầy để học chiêu thức\n- Nâng cấp trang bị tại Thợ Rèn\n\n**4. Tham Gia PVP**\n- Đấu trường mở từ level 50\n- Xếp hạng theo mùa\n- Phần thưởng hấp dẫn mỗi tuần\n\n**5. Mẹo Quan Trọng**\n- Luôn mang theo Đậu Thần\n- Tham gia Bang Hội sớm\n- Check sự kiện mỗi ngày`,
  },
  {
    id: "bao-tri-nang-cap-server",
    type: "update",
    icon: Newspaper,
    date: "12/03/2026",
    title: "Bảo Trì Định Kỳ - Nâng Cấp Server",
    desc: "Server sẽ bảo trì từ 6h-8h sáng để nâng cấp hệ thống và tối ưu hiệu năng.",
    content: `🔧 **Thông Báo Bảo Trì**\n\n⏰ **Thời gian**: 6h00 - 8h00 ngày 12/03/2026\n\n📋 **Nội dung bảo trì**\n- Nâng cấp phần cứng server\n- Tối ưu database giảm lag\n- Fix bug skill Xayda\n- Cân bằng sát thương PVP\n\n🎁 **Quà bù bảo trì**\n- 500 Ngọc Rồng\n- 10 Đậu Thần\n- 2h EXP x2\n\nQuà sẽ được gửi vào hòm thư sau khi server mở lại. Xin lỗi vì sự bất tiện!`,
  },
  {
    id: "san-boss-x2",
    type: "event",
    icon: CalendarDays,
    date: "10/03/2026",
    title: "Sự Kiện Săn Boss Thế Giới - Phần Thưởng x2",
    desc: "Trong tuần này, tất cả Boss Thế Giới sẽ drop phần thưởng gấp đôi.",
    content: `🐉 **Sự Kiện Săn Boss x2**\n\n⏰ **Thời gian**: 10/03 - 17/03/2026\n\n📋 **Chi tiết**\n- Tất cả Boss Thế Giới drop x2\n- Boss hiếm xuất hiện thường xuyên hơn\n- Tỷ lệ drop đồ Huyền Thoại tăng 50%\n\n🗺️ **Vị trí Boss**\n- Piccolo Đại Ma Vương: Hoang Mạc (18h hàng ngày)\n- Vegeta: Núi Lửa (20h hàng ngày)\n- Cell: Đấu Trường Cell (Thứ 7, CN)\n\nRủ team và săn boss ngay!`,
  },
  {
    id: "cam-nang-bien-hinh",
    type: "guide",
    icon: BookOpen,
    date: "08/03/2026",
    title: "Cẩm Nang Biến Hình - Mở Khóa Super Saiyan",
    desc: "Hướng dẫn chi tiết cách mở khóa các cấp biến hình từ SSJ1 đến SSJ Blue.",
    content: `⚡ **Cẩm Nang Biến Hình**\n\n**SSJ1 - Super Saiyan**\n- Yêu cầu: Level 80, hoàn thành nhiệm vụ "Giận Dữ"\n- Vật phẩm: 7 Ngọc Rồng + 1000 Zenni\n- Buff: ATK +30%, SPD +20%\n\n**SSJ2**\n- Yêu cầu: Level 120, đánh bại Cell\n- Vật phẩm: Mảnh Năng Lượng x50\n- Buff: ATK +50%, SPD +30%\n\n**SSJ3**\n- Yêu cầu: Level 160, hoàn thành chuỗi nhiệm vụ Buu\n- Vật phẩm: Tinh Thể Saiyan x20\n- Buff: ATK +80%, SPD +40%\n\n**SSJ God**\n- Yêu cầu: Level 200, 5 Saiyan cùng thực hiện nghi thức\n- Buff: ATK +120%, DEF +60%\n\n**SSJ Blue**\n- Yêu cầu: Level 250, tu luyện với Whis\n- Buff: All stats +100%`,
  },
  {
    id: "khai-mo-s10",
    type: "update",
    icon: Newspaper,
    date: "05/03/2026",
    title: "Khai Mở Máy Chủ Mới - S10 Vũ Trụ",
    desc: "Máy chủ S10 Vũ Trụ chính thức mở cửa!",
    content: `🚀 **Khai Mở Máy Chủ S10 - Vũ Trụ**\n\n📅 **Thời gian mở**: 05/03/2026 lúc 10h00\n\n🎁 **Quà tân thủ S10**\n- 2000 Ngọc Rồng miễn phí\n- Trang bị starter cấp Hiếm\n- Pet đồng hành Dragon\n- 7 ngày VIP miễn phí\n\n🏆 **Sự kiện khai mở**\n- Đua Top Level: phần thưởng cho top 50\n- Đua Top Sức Mạnh: phần thưởng cho top 30\n- First Kill Boss: danh hiệu đặc biệt\n\nĐăng ký ngay để nhận quà!`,
  },
  {
    id: "dua-top-thang-3",
    type: "event",
    icon: CalendarDays,
    date: "01/03/2026",
    title: "Sự Kiện Đua Top Tháng 3 - Giải Thưởng Khủng",
    desc: "Đua top sức mạnh, level và PVP trong tháng 3 để nhận phần thưởng giá trị.",
    content: `🏅 **Đua Top Tháng 3**\n\n⏰ **Thời gian**: 01/03 - 31/03/2026\n\n📋 **Hạng mục**\n\n**Top Level**\n- Top 1: 10.000 Ngọc + Danh hiệu\n- Top 2-3: 5.000 Ngọc\n- Top 4-10: 2.000 Ngọc\n\n**Top Sức Mạnh**\n- Top 1: Trang bị Huyền Thoại\n- Top 2-3: Trang bị Sử Thi\n- Top 4-10: 3.000 Ngọc\n\n**Top PVP**\n- Top 1: Khung viền Huyền Thoại + 8.000 Ngọc\n- Top 2-3: Khung viền Sử Thi + 4.000 Ngọc\n- Top 4-10: 1.500 Ngọc\n\nPhần thưởng sẽ được phát vào ngày 01/04/2026.`,
  },
];

export const typeColors: Record<string, string> = {
  update: "bg-primary/20 text-primary",
  event: "bg-fire-orange/20 text-fire-orange",
  guide: "bg-gold-light/20 text-gold-light",
};

export const typeLabels: Record<string, string> = {
  update: "Cập nhật",
  event: "Sự kiện",
  guide: "Hướng dẫn",
};
