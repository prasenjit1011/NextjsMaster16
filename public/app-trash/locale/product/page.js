"use client";
import { useEffect, useState } from "react";
import ProductTable from "@/components/ProductTable";
import Link from "next/link";

export default function Page(){
  const [data,setData]=useState([]);

  const load=async()=>{
    const res=await fetch("/api/product");
    setData(await res.json());
  };

  useEffect(()=>{load();},[]);

  const del=async(id)=>{
    await fetch(`/api/product/${id}`,{method:"DELETE"});
    load();
  };

  return (
    <div>
      <h2>Products</h2>
      <Link href="/product/create">Add</Link>
      <ProductTable products={data} onDelete={del}/>
    </div>
  );
}
