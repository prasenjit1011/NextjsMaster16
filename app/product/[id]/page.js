"use client";
import { useEffect,useState } from "react";
import { useRouter } from "next/navigation";
import ProductForm from "@/components/ProductForm";

export default function Page({params}){
  const [data,setData]=useState(null);
  const router=useRouter();

  useEffect(()=>{
    fetch(`/api/product/${params.id}`)
    .then(r=>r.json()).then(setData);
  },[]);

  if(!data) return <p>Loading...</p>;

  const submit=async(f)=>{
    await fetch(`/api/product/${params.id}`,{
      method:"PUT",body:JSON.stringify(f)
    });
    router.push("/product");
  };

  return <ProductForm initialData={data} onSubmit={submit}/>;
}
