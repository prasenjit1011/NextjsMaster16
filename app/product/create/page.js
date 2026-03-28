"use client";
import { useRouter } from "next/navigation";
import ProductForm from "@/components/ProductForm";

export default function Page(){
  const router=useRouter();

  const submit=async(data)=>{
    await fetch("/api/product",{method:"POST",body:JSON.stringify(data)});
    router.push("/product");
  };

  return <ProductForm onSubmit={submit}/>;
}
