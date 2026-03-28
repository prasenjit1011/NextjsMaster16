"use client";
import Link from "next/link";

export default function ProductTable({ products, onDelete }) {
  return (
    <table border="1" style={{width:'600px', borderCollapse:'collapse', borderColor:'red', borderWidth:'2px'}}>
      <thead>
        <tr><td>ID</td><td>Name</td><td>Price</td><td>Action</td></tr>
      </thead>
      <tbody>
        {products.map(p=>(
          <tr key={p.id}>
            <td>{p.id}</td>
            <td>{p.name}</td>
            <td>{p.price}</td>
            <td>
              <Link href={`/product/${p.id}`}>Edit</Link> &nbsp; | &nbsp;
              <button onClick={()=>onDelete(p.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
