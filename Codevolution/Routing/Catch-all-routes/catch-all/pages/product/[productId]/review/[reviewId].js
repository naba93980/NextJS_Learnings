import React, { useEffect } from 'react'
import { useRouter } from 'next/router';

export default function Product() {
  const router = useRouter();

  return (
    <div>
      <h1>product {router.query.productId}</h1>
      <h1>review {router.query.reviewId}</h1>
    </div>
  )
}