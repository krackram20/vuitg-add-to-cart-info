import React from 'react'
import { useProduct } from 'vtex.product-context'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import { generateBlockClass } from '@vtex/css-handles'

import ButtonGroup from './ButtonGroup'
import styles from './styles.css'

const AddtoCartInfo = ({ blockClass }: { blockClass: string }) => {
  const classes = generateBlockClass(styles.container, blockClass)
  const productInfo = useProduct()
  const {
    orderForm: { items, totalizers },
  } = useOrderForm()

  console.log('estos son mis items ', items)
  console.log('estos son mis totales ', totalizers)
  console.log('este es mi producto ', productInfo)

  return (
    <div className={classes}>
      {items.map((item: any, index: number) => {
        console.log(item)

        return (
          <div key={index}>
            <div>
              <img src={item.imageUrls.at1x} alt="product" />
            </div>
            <div>
              <p>{item.name}</p>
              <p>{item.id}</p>
              <p>${item.price / 100}</p>
              <p>Qnty: {item.quantity}</p>
            </div>
          </div>
        )
      })}
      <div>
        <p>Total: {totalizers[0]?.value / 100}</p>
      </div>
      <ButtonGroup /> {/*   acciones */}
    </div>
  )
}

export default AddtoCartInfo
