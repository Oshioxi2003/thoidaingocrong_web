import { useState } from "react";
import { KeyRound, ArrowLeft } from "lucide-react";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-gradient-dark flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-md">
        <a
          href="/login"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Quay lại đăng nhập
        </a>

        <div
          className="bg-gradient-card rounded-2xl p-8 border border-gold/10"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <KeyRound className="text-primary" size={28} />
            </div>
            <h1 className="font-display text-2xl font-bold text-gradient-gold">
              Quên Mật Khẩu
            </h1>
            <p className="text-sm text-muted-foreground mt-2">
              Nhập email để nhận liên kết đặt lại mật khẩu
            </p>
          </div>

          {!sent ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Nhập email đã đăng ký"
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-gold text-primary-foreground font-bold text-sm hover:opacity-90 transition-opacity"
              >
                Gửi liên kết đặt lại
              </button>
            </form>
          ) : (
            <div className="text-center py-4">
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                <KeyRound className="text-green-400" size={28} />
              </div>
              <p className="text-foreground font-medium mb-2">Đã gửi email!</p>
              <p className="text-sm text-muted-foreground">
                Vui lòng kiểm tra hộp thư <strong className="text-foreground">{email}</strong> để đặt lại mật khẩu.
              </p>
            </div>
          )}

          <p className="text-center text-sm text-muted-foreground mt-6">
            Nhớ mật khẩu rồi?{" "}
            <a href="/login" className="text-primary hover:underline font-medium">
              Đăng nhập
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
