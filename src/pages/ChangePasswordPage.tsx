import { useState } from "react";
import { Lock, Eye, EyeOff, ArrowLeft, CheckCircle } from "lucide-react";

const ChangePasswordPage = () => {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.newPassword !== form.confirmPassword) {
      alert("Mật khẩu mới không khớp!");
      return;
    }
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
    setForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
  };

  const PasswordInput = ({
    label,
    name,
    value,
    show,
    onToggle,
    placeholder,
  }: {
    label: string;
    name: string;
    value: string;
    show: boolean;
    onToggle: () => void;
    placeholder: string;
  }) => (
    <div>
      <label className="block text-sm font-medium text-foreground mb-1.5">
        {label}
      </label>
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          name={name}
          value={value}
          onChange={handleChange}
          required
          placeholder={placeholder}
          className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 text-sm pr-11"
        />
        <button
          type="button"
          onClick={onToggle}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-dark flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-md">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Quay lại trang chủ
        </a>

        <div
          className="bg-gradient-card rounded-2xl p-8 border border-gold/10"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Lock className="text-primary" size={28} />
            </div>
            <h1 className="font-display text-2xl font-bold text-gradient-gold">
              Đổi Mật Khẩu
            </h1>
            <p className="text-sm text-muted-foreground mt-2">
              Cập nhật mật khẩu để bảo vệ tài khoản
            </p>
          </div>

          {success && (
            <div className="mb-6 flex items-center gap-2 text-green-400 text-sm bg-green-400/10 rounded-lg p-3">
              <CheckCircle size={18} />
              <span>Đổi mật khẩu thành công!</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <PasswordInput
              label="Mật khẩu hiện tại"
              name="currentPassword"
              value={form.currentPassword}
              show={showCurrent}
              onToggle={() => setShowCurrent(!showCurrent)}
              placeholder="Nhập mật khẩu hiện tại"
            />
            <PasswordInput
              label="Mật khẩu mới"
              name="newPassword"
              value={form.newPassword}
              show={showNew}
              onToggle={() => setShowNew(!showNew)}
              placeholder="Nhập mật khẩu mới"
            />
            <PasswordInput
              label="Nhập lại mật khẩu mới"
              name="confirmPassword"
              value={form.confirmPassword}
              show={showConfirm}
              onToggle={() => setShowConfirm(!showConfirm)}
              placeholder="Xác nhận mật khẩu mới"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-gold text-primary-foreground font-bold text-sm hover:opacity-90 transition-opacity mt-2"
            >
              Đổi mật khẩu
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
