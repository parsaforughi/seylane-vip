import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadFile, api } from "../api/client";
import GlassCard from "../components/GlassCard";
import NeonButton from "../components/NeonButton";
import PageContainer from "../components/PageContainer";

function Display() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    imageUrl: "",
    brand: "",
    location: "",
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
      setError(err.message || "آپلود ناموفق بود.");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.imageUrl) {
      setError("تصویر چیدمان الزامی است.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      await api.post("/display", form);
      setMessage("چیدمان ثبت شد و در انتظار تایید است.");
      setTimeout(() => navigate("/missions"), 800);
    } catch (err) {
      setError(err.message || "ثبت چیدمان ناموفق بود.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageContainer>
      <GlassCard className="animated-section">
        <h2>ثبت چیدمان</h2>
        <form onSubmit={handleSubmit} className="form-grid">
          <label>
            تصویر
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
            برند
            <input name="brand" value={form.brand} onChange={handleChange} />
          </label>
          <label>
            موقعیت
            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="مثلا: شعبه مرکزی"
            />
          </label>
          <label>
            توضیحات
            <textarea name="notes" value={form.notes} onChange={handleChange} />
          </label>
          <NeonButton type="submit" disabled={loading}>
            {loading ? "در حال ارسال..." : "ثبت چیدمان"}
          </NeonButton>
        </form>
        {message && <p>{message}</p>}
        {error && <p className="error">{error}</p>}
      </GlassCard>
    </PageContainer>
  );
}

export default Display;
