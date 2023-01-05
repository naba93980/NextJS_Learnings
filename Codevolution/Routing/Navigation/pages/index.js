import React from 'react'
import Link from "next/link";
import {useRouter} from "next/router";

export default function Home() {
  const router = useRouter();
  const handleClick = () => { 
    console.log('Placing your order');
    router.push('/product');
    }

  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/product">Product</Link>
      <button onClick={handleClick}>Placing ur order</button>
    </div>
  )
}
