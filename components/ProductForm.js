"use client";
import { useState } from "react";

export default function ProductForm({ initialData = {}, onSubmit }) {
  const [form, setForm] = useState({
    name: initialData.name || "",
    price: initialData.price || "",
    status: initialData.status ?? true
  });

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(form); }}>
      <input placeholder="Name" value={form.name}
        onChange={(e)=>setForm({...form, name:e.target.value})} />

      <input type="number" placeholder="Price" value={form.price}
        onChange={(e)=>setForm({...form, price:e.target.value})} />

      <label>
        Active:
        <input type="checkbox" checked={form.status}
          onChange={(e)=>setForm({...form, status:e.target.checked})}/>
      </label>

      <button type="submit">Save</button>
    </form>
  );
}
