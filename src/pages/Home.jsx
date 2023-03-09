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
      <div className=''>
        <ul className='flex justify-evenly flex-wrap gap-3 overflow-hidden'>
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
    <div className=' w-64 mb-2 p-3 border-2 rounded-lg relative' key={id}>
      <div className='flex-col '>
        <img className='flex w-100 h-40' src={image} alt={title} />
        <div className='flex items-center gap-3'>
          <h3 className='m-4 ' alt={title}>
            {title.slice(0, 50)}
          </h3>
          <p className='font-bold'>{price}</p>
        </div>
      </div>

      <button className=' bg-slate-300 p-2 m-2 absolute bottom-0 '>
        Add to cart
      </button>
    </div>
  )
}

export default Home
