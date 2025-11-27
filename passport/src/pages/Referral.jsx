import { useState } from "react";
import { api } from "../api/client";
import GlassCard from "../components/GlassCard";
import NeonButton from "../components/NeonButton";
import PageContainer from "../components/PageContainer";

function Referral() {
  const [form, setForm] = useState({
    storeName: "",
    managerName: "",
    phone: "",
    city: "",
    notes: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.storeName || !form.managerName || !form.phone) {
      setError("فیلدهای الزامی را پر کنید.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      await api.post("/referral", form);
      setMessage("معرفی ثبت شد و در انتظار بررسی است.");
    } catch (err) {
      setError(err.message || "ثبت معرفی ناموفق بود.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageContainer>
      <GlassCard className="animated-section">
        <h2>معرفی مشتری VIP</h2>
        <form onSubmit={handleSubmit} className="form-grid">
          <label>
            نام فروشگاه
            <input
              name="storeName"
              value={form.storeName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            نام مدیر
            <input
              name="managerName"
              value={form.managerName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            تلفن
            <input name="phone" value={form.phone} onChange={handleChange} required />
          </label>
          <label>
            شهر
            <input name="city" value={form.city} onChange={handleChange} />
          </label>
          <label>
            توضیحات
            <textarea name="notes" value={form.notes} onChange={handleChange} />
          </label>
          <NeonButton type="submit" disabled={loading}>
            {loading ? "در حال ارسال..." : "ثبت معرفی"}
          </NeonButton>
        </form>
        {message && <p>{message}</p>}
        {error && <p className="error">{error}</p>}
      </GlassCard>
    </PageContainer>
  );
}

export default Referral;
