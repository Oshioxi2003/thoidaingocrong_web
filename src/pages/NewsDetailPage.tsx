import { useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allNews, typeColors, typeLabels } from "@/data/newsData";

const NewsDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const article = allNews.find((n) => n.id === id);

  if (!article) {
    return <Navigate to="/news" replace />;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-dark pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <a
            href="/news"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Quay lại danh sách tin tức
          </a>

          <article
            className="bg-gradient-card rounded-2xl p-8 md:p-10 border border-gold/10"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xs px-3 py-1 rounded-full font-medium ${typeColors[article.type]}`}>
                {typeLabels[article.type]}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock size={12} />
                {article.date}
              </span>
            </div>

            <h1 className="font-display text-2xl md:text-3xl font-bold text-gradient-gold mb-6">
              {article.title}
            </h1>

            <p className="text-muted-foreground mb-8 text-base leading-relaxed border-b border-border pb-6">
              {article.desc}
            </p>

            {/* Content */}
            <div className="prose-custom space-y-4">
              {article.content.split("\n").map((line, i) => {
                if (!line.trim()) return <br key={i} />;

                if (line.startsWith("**") && line.endsWith("**")) {
                  return (
                    <h3 key={i} className="font-display text-lg font-semibold text-foreground mt-6 mb-2">
                      {line.replace(/\*\*/g, "")}
                    </h3>
                  );
                }

                if (line.includes("**")) {
                  const parts = line.split(/\*\*(.*?)\*\*/g);
                  return (
                    <p key={i} className="text-foreground/80 leading-relaxed">
                      {parts.map((part, j) =>
                        j % 2 === 1 ? (
                          <strong key={j} className="text-foreground font-semibold">{part}</strong>
                        ) : (
                          <span key={j}>{part}</span>
                        )
                      )}
                    </p>
                  );
                }

                if (line.startsWith("- ")) {
                  return (
                    <div key={i} className="flex items-start gap-2 text-foreground/80 pl-4">
                      <span className="text-primary mt-1.5 text-xs">●</span>
                      <span className="leading-relaxed">{line.slice(2)}</span>
                    </div>
                  );
                }

                return (
                  <p key={i} className="text-foreground/80 leading-relaxed">
                    {line}
                  </p>
                );
              })}
            </div>
          </article>

          {/* Related articles */}
          <div className="mt-12">
            <h2 className="font-display text-xl font-semibold text-foreground mb-6">
              Bài viết liên quan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {allNews
                .filter((n) => n.id !== article.id && n.type === article.type)
                .slice(0, 2)
                .map((item) => (
                  <a
                    key={item.id}
                    href={`/news/${item.id}`}
                    className="bg-gradient-card rounded-xl p-5 border border-gold/10 hover:border-primary/30 transition-all group"
                  >
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${typeColors[item.type]}`}>
                      {typeLabels[item.type]}
                    </span>
                    <h3 className="font-display text-sm font-semibold text-foreground group-hover:text-primary transition-colors mt-2 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">{item.date}</p>
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewsDetailPage;
