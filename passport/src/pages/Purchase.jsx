import { useState } from "react";
import { uploadFile, api } from "../api/client";
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

  const [file, setFile] = useState(null);

  const handleFile = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      let imageUrl = "";
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        const uploadRes = await uploadFile(formData);
        imageUrl = uploadRes.url;
      }

      await api.post("/purchase", {
        amount: form.amount,
        date: form.date,
        description: form.notes,
        imageUrl,
      });

      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setError("خطا در ثبت خرید");
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
                : file
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
