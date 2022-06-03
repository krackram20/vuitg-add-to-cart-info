import React from 'react'

type Total = {
  id: string
  name: string
  value: number
}

const Totalizers = (totalizers: Total) => {
  const { id, name, value } = totalizers

  console.log('Mis totales son igual a: ', id, name, value)

  return (
    <div>
      <p>Tenemos x items en tu compra</p>
      <p>Total: x</p>
    </div>
  )
}

export default Totalizers
