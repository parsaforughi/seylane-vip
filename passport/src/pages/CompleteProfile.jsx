import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { completeProfileRequest } from "../api/client";
import { useAuthStore } from "../store/useAuthStore";

function CompleteProfile() {
  const navigate = useNavigate();
  const { setUser } = useAuthStore();
  const [form, setForm] = useState({
    storeName: "",
    managerName: "",
    city: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.storeName || !form.managerName || !form.city || !form.phone) {
      setError("تمام فیلدهای اجباری را تکمیل کنید.");
      return;
    }
    setError(null);
    setLoading(true);
    try {
      const user = await completeProfileRequest(form);
      setUser(user);
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("user", JSON.stringify(user));
      }
      navigate("/dashboard", { replace: true });
    } catch (err) {
      setError(err.message || "ثبت اطلاعات با خطا مواجه شد.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h2>تکمیل پروفایل</h2>
      <p>برای فعال‌سازی حساب VIP، اطلاعات فروشگاه را تکمیل کنید.</p>
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
          شهر
          <input name="city" value={form.city} onChange={handleChange} required />
        </label>
        <label>
          تلفن
          <input name="phone" value={form.phone} onChange={handleChange} required />
        </label>
        <button className="login-btn" type="submit" disabled={loading}>
          {loading ? "در حال ذخیره..." : "ثبت اطلاعات"}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default CompleteProfile;
