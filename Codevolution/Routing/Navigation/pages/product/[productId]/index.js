import React, { useEffect } from 'react'
import { useRouter } from 'next/router';

export default function Product() {
  const router = useRouter();

  return (
    <div>
      <h1>product {router.query.productId}</h1>
      <h1>product {2+2}</h1>
    </div>
  )
}