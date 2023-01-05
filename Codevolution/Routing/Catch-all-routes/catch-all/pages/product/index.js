import React from 'react'
import Link from "next/link";

export default function Product({productId=100}) {

return (
<div>
  <h1>product</h1>
  <Link href="/">Home</Link>
  <Link href={`/product/${productId}`} replace={true}>Product {productId}</Link>
</div>
);
}