import React from 'react'
type PageProps = {
  params: {
    slug: string[]
  }
}
const DynamicDocesPage = async({params}: PageProps) => {
  const {slug} = await params;
  return (
    <div>
      <h1>Dynamic Doces Page</h1>
      <p>Product Slug: {slug.join('/')}</p>   
    </div>
  )
}

export default DynamicDocesPage
