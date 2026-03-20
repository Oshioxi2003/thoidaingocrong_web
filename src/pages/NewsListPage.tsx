import { useState } from "react";
import { Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allNews, typeColors, typeLabels } from "@/data/newsData";

const filterTabs = [
  { label: "Tất cả", value: "all" },
  { label: "Cập nhật", value: "update" },
  { label: "Sự kiện", value: "event" },
  { label: "Hướng dẫn", value: "guide" },
];

const NewsListPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all"
    ? allNews
    : allNews.filter((n) => n.type === activeFilter);

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
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeFilter === tab.value
                    ? "bg-gradient-gold text-primary-foreground"
                    : "border border-primary/30 text-primary hover:bg-primary/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* News list */}
          <div className="space-y-4">
            {filtered.map((item) => (
              <a
                key={item.id}
                href={`/news/${item.id}`}
                className="block bg-gradient-card rounded-xl p-6 border border-gold/10 hover:border-primary/30 transition-all duration-300 cursor-pointer group"
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
              </a>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              Không có bài viết nào trong mục này.
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewsListPage;
