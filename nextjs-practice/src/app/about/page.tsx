import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const page = () => {
  return (
    <div>
      <h1>This is about page</h1>
      <Link href="/contact">Contact</Link>
      <Link href="/products/1">Product</Link>
      <Image src="/genai-light-Djz8ZFFK.webp" alt="Sample Image" width={500} height={300} />  
    </div>
  )
}

export default page
