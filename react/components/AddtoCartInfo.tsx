import React from 'react'
import { useProduct } from 'vtex.product-context'
import { useOrderForm } from 'vtex.order-manager/OrderForm'

import ButtonGroup from './ButtonGroup'

const AddtoCartInfo = () => {
  const productInfo = useProduct()
  const { orderForm } = useOrderForm()

  console.log('esta ', orderForm, productInfo)

  return (
    <>
      <ButtonGroup /> {/*   acciones */}
    </>
  )
}

export default AddtoCartInfo
