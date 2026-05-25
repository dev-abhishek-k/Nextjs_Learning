import React from 'react'
type PageProps = {
  params: {
    id: string
  }
}
const ProductPage = async({params}: PageProps) => {
    const {id} = await params
  return (
    <div>
      <h1>This is a product page</h1>
      <p>Product ID: {id}</p>   
    </div>
  )
}

export default ProductPage
