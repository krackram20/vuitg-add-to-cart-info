import React from 'react'
import { useProduct } from 'vtex.product-context'

const AddtoCartInfo = () => {
  const productInfo = useProduct()

  console.log('este producto tiene esta info', productInfo)

  return <div>Aqui va el tercer componente </div>
}

export default AddtoCartInfo
