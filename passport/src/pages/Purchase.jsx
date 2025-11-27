import { useState } from "react";
import { submitPurchaseRequest } from "../api/client";

function Purchase() {
  const [form, setForm] = useState({
    imageUrl: "",
    amount: "",
    purchaseDate: "",
    brands: "",
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
        purchaseDate: form.purchaseDate,
        brands: form.brands,
        notes: form.notes,
      });
      setMessage("خرید ثبت شد و در انتظار تایید است.");
    } catch (err) {
      setError(err.message || "ثبت خرید ناموفق بود.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h2>ثبت خرید</h2>
      <form onSubmit={handleSubmit} className="form-grid">
        <label>
          لینک تصویر فاکتور
          <input
            name="imageUrl"
            value={form.imageUrl}
            onChange={handleChange}
            placeholder="URL"
            required
          />
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
            name="purchaseDate"
            type="date"
            value={form.purchaseDate}
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
        <button className="login-btn" type="submit" disabled={loading}>
          {loading ? "در حال ارسال..." : "ثبت خرید"}
        </button>
      </form>
      {message && <p>{message}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Purchase;
