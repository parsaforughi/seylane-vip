import { useState } from "react";
import { submitDisplayRequest } from "../api/client";

function Display() {
  const [form, setForm] = useState({
    imageUrl: "",
    brand: "",
    location: "",
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
    if (!form.imageUrl) {
      setError("تصویر چیدمان الزامی است.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      await submitDisplayRequest(form);
      setMessage("چیدمان ثبت شد و در انتظار تایید است.");
    } catch (err) {
      setError(err.message || "ثبت چیدمان ناموفق بود.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h2>ثبت چیدمان</h2>
      <form onSubmit={handleSubmit} className="form-grid">
        <label>
          لینک تصویر
          <input
            name="imageUrl"
            value={form.imageUrl}
            onChange={handleChange}
            placeholder="URL"
            required
          />
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
        <button className="login-btn" type="submit" disabled={loading}>
          {loading ? "در حال ارسال..." : "ثبت چیدمان"}
        </button>
      </form>
      {message && <p>{message}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Display;
