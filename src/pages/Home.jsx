import { useEffect, useState, useReducer } from 'react'
const Home = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then((res) => res.json())
      .then((res) => setProducts(res))
  }, [])

  return (
    <div className='w-full'>
      <aside className=' w-1/3'>hi</aside>
      <div className='w-3/4'>
        <ul className='flex justify-between items-center flex-wrap m-12   '>
          {products.map((item) => {
            return <Products key={item.id} {...item} />
          })}
        </ul>
      </div>
    </div>
  )
}
const Products = (props) => {
  const { image, id, title, price } = props
  return (
    <div className='flex-col items-center justify-center ' key={id}>
      <img className=' w-28' src={image} alt='' />
      <div className='flex gap-3'>
        <p>{title}</p>
        <p>{price}</p>
      </div>
      <button className='bg-slate-300 p-2'>Add to cart</button>
    </div>
  )
}

export default Home
