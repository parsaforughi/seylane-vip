import { useState } from "react";
import { submitPurchaseRequest, uploadFile } from "../api/client";
import { useNavigate } from "react-router-dom";
import GlassCard from "../components/GlassCard";
import NeonButton from "../components/NeonButton";
import PageContainer from "../components/PageContainer";

function Purchase() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    imageUrl: "",
    amount: "",
    date: "",
    brands: "",
    notes: "",
  });
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError(null);
    try {
      const res = await uploadFile(file);
      setForm((prev) => ({ ...prev, imageUrl: res.url }));
    } catch (err) {
      setError(err.message || "آپلود فایل ناموفق بود.");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.imageUrl || !form.amount) {
      setError("تصویر فاکتور و مبلغ الزامی است.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      await submitPurchaseRequest({
        imageUrl: form.imageUrl,
        amount: Number(form.amount),
        date: form.date,
        brands: form.brands,
        notes: form.notes,
      });
      setMessage("خرید ثبت شد و در انتظار تایید است.");
      setTimeout(() => navigate("/missions"), 800);
    } catch (err) {
      setError(err.message || "ثبت خرید ناموفق بود.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageContainer>
      <GlassCard className="animated-section">
        <h2>ثبت خرید</h2>
        <form onSubmit={handleSubmit} className="form-grid">
          <label>
            تصویر فاکتور
            <input type="file" accept="image/*" onChange={handleFile} />
            <div className="file-preview">
              {uploading
                ? "در حال آپلود..."
                : form.imageUrl
                ? "تصویر انتخاب شد"
                : "فایل خود را انتخاب کنید"}
            </div>
          </label>
          <label>
            مبلغ
            <input
              name="amount"
              type="number"
              value={form.amount}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            تاریخ خرید
            <input
              name="date"
              type="date"
              value={form.date}
              onChange={handleChange}
            />
          </label>
          <label>
            برندها (اختیاری)
            <input name="brands" value={form.brands} onChange={handleChange} />
          </label>
          <label>
            توضیحات
            <textarea name="notes" value={form.notes} onChange={handleChange} />
          </label>
          <NeonButton type="submit" disabled={loading}>
            {loading ? "در حال ارسال..." : "ثبت خرید"}
          </NeonButton>
        </form>
        {message && <p>{message}</p>}
        {error && <p className="error">{error}</p>}
      </GlassCard>
    </PageContainer>
  );
}

export default Purchase;
