import { useState } from "react";
import sectionBgGift from "@/assets/section-bg-gift.jpg";
import { Gift, CheckCircle, XCircle } from "lucide-react";

const GiftcodeSection = () => {
  const [code, setCode] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) return;
    // Demo: show success for demo
    setStatus("success");
    setTimeout(() => setStatus("idle"), 3000);
    setCode("");
  };

  return (
    <section id="giftcode" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={sectionBgGift} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-gradient-gold mb-4">
          Nhập Giftcode
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Nhập mã giftcode để nhận quà miễn phí. Bạn cần đăng nhập để sử dụng chức năng này.
        </p>

        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="bg-gradient-card rounded-xl p-8 border border-gold/10" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="flex items-center gap-3 mb-6">
              <Gift className="text-primary" size={28} />
              <span className="font-display text-xl font-semibold text-foreground">Nhập mã quà tặng</span>
            </div>

            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Nhập giftcode tại đây..."
              className="w-full px-4 py-3 rounded-lg bg-muted border border-gold/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 mb-4 text-sm"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-gold text-primary-foreground font-bold text-sm hover:opacity-90 transition-opacity"
            >
              Nhận quà
            </button>

            {status === "success" && (
              <div className="mt-4 flex items-center gap-2 text-green-400 text-sm">
                <CheckCircle size={18} />
                <span>Nhận quà thành công! Kiểm tra trong game nhé.</span>
              </div>
            )}
            {status === "error" && (
              <div className="mt-4 flex items-center gap-2 text-destructive text-sm">
                <XCircle size={18} />
                <span>Mã giftcode không hợp lệ hoặc đã hết hạn.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default GiftcodeSection;
