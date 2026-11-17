import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { supabase } from "../integrations/supabase/client";

export const Route = createFileRoute("/admin")({ component: AdminPage });

type Registration = {
  id: string;
  registration_code: string;
  full_name: string;
  mobile_phone: string;
  whatsapp_phone: string;
  district: string;
  course_fee: number;
  payment_status: string;
  enrollment_status: string;
  created_at: string;
};

type Payment = {
  id: string;
  payment_method: string;
  sender_mobile: string;
  transaction_id: string;
  amount: number;
  created_at: string;
};

function AdminPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [rows, setRows] = useState<Registration[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  async function load() {
    setLoading(true);
    setMessage("");
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        setUser("");
        return;
      }
      setUser(user.email || "admin");
      const [{ data: students, error: e1 }, { data: paymentRows, error: e2 }] = await Promise.all([
        supabase
          .from("student_registrations")
          .select("*")
          .order("created_at", { ascending: false }),
        supabase.from("payment_submissions").select("*").order("created_at", { ascending: false }),
      ]);
      if (e1) throw e1;
      if (e2) throw e2;
      setRows((students || []) as Registration[]);
      setPayments(paymentRows || []);
    } catch (e) {
      setMessage(
        e instanceof Error ? e.message : "ড্যাশবোর্ড লোড করা যায়নি। Admin role/RLS পরীক্ষা করুন।",
      );
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    void load();
  }, []);
  async function signIn(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      await load();
    } catch (e) {
      setMessage(e instanceof Error ? e.message : "লগইন ব্যর্থ হয়েছে।");
    } finally {
      setLoading(false);
    }
  }
  async function update(id: string, field: "payment_status" | "enrollment_status", value: string) {
    setMessage("");
    const { error } = await supabase
      .from("student_registrations")
      .update({ [field]: value } as never)
      .eq("id", id);
    if (error) {
      setMessage(error.message);
      return;
    }
    await load();
  }
  if (!user)
    return (
      <main className="admin-page">
        <form className="registration-form" onSubmit={signIn}>
          <h1>Admin Dashboard Login</h1>
          <label>
            Email
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button className="button button-primary" disabled={loading}>
            লগইন করুন
          </button>
          {message && <p role="status">{message}</p>}
        </form>
      </main>
    );
  const paid = rows.filter((r) => r.payment_status === "paid").length;
  const pending = rows.filter((r) => r.payment_status !== "paid").length;
  const confirmed = rows.filter((r) => r.enrollment_status === "confirmed").length;
  return (
    <main className="admin-page container">
      <div className="admin-head">
        <div>
          <span className="section-kicker">Online Women Madrasah</span>
          <h1>Admin Dashboard</h1>
          <p>{user}</p>
        </div>
        <button
          className="button button-outline"
          onClick={async () => {
            await supabase.auth.signOut();
            setUser("");
          }}
        >
          Logout
        </button>
      </div>
      <div className="admin-stats">
        <article>
          <b>{rows.length}</b>
          <span>মোট রেজিস্ট্রেশন</span>
        </article>
        <article>
          <b>{paid}</b>
          <span>পেমেন্ট সম্পন্ন</span>
        </article>
        <article>
          <b>{pending}</b>
          <span>পেমেন্ট বাকি/যাচাই</span>
        </article>
        <article>
          <b>{confirmed}</b>
          <span>ভর্তি নিশ্চিত</span>
        </article>
      </div>
      {message && <p role="status">{message}</p>}
      {loading && <p>লোড হচ্ছে…</p>}
      <h2>শিক্ষার্থীদের তালিকা</h2>
      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>রেজি. নম্বর</th>
              <th>নাম ও যোগাযোগ</th>
              <th>জেলা</th>
              <th>পেমেন্ট</th>
              <th>ভর্তি</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id}>
                <td>{r.registration_code}</td>
                <td>
                  {r.full_name}
                  <small>
                    {r.mobile_phone} · WhatsApp {r.whatsapp_phone}
                  </small>
                </td>
                <td>{r.district}</td>
                <td>
                  <select
                    value={r.payment_status}
                    onChange={(e) => void update(r.id, "payment_status", e.target.value)}
                  >
                    <option value="awaiting_payment">পেমেন্ট বাকি</option>
                    <option value="under_review">যাচাই চলছে</option>
                    <option value="paid">পরিশোধিত</option>
                  </select>
                </td>
                <td>
                  <select
                    value={r.enrollment_status}
                    onChange={(e) => void update(r.id, "enrollment_status", e.target.value)}
                  >
                    <option value="pending">অপেক্ষমাণ</option>
                    <option value="confirmed">নিশ্চিত</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2>জমা দেওয়া পেমেন্ট</h2>
      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>মাধ্যম</th>
              <th>প্রেরকের নম্বর</th>
              <th>Transaction ID</th>
              <th>টাকা</th>
              <th>সময়</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p) => (
              <tr key={p.id}>
                <td>{p.payment_method}</td>
                <td>{p.sender_mobile}</td>
                <td>{p.transaction_id}</td>
                <td>৳{p.amount}</td>
                <td>{new Date(p.created_at).toLocaleString("bn-BD")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
