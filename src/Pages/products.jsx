import React , {useState, useEffect} from 'react'
import Nav from '../components/nav'
import request from '../utils/request'
import {Link} from '@reach/router'

const Products = () => {

  const [products, setproducts] = useState([])
  // const [loading , setLoading] = useState(false);
  const fetchProducts = async () => {
    try{
      // setLoading(true)
      const {data} = await request.get('/shop');
      console.log(data.data)
      setproducts(data.data)
    }catch(error){
      console.log(error)
    }finally{
      // setLoading(false)
    }
  }


  useEffect(() => {
    fetchProducts()
    
  }, [])
  
    return (
        <>
        <Nav />
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">All Products</h1>
              <div className="h-1 w-20 bg-purple-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 text-right"> 
                <button>
                  <Link to="/create" className="flex ml-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">
                    Create Product
                  </Link>
                </button>
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
              {products.map((e, i) => (
              <div className="xl:w-1/4 md:w-1/2 p-4" key={i}>
                <Link to={'/' + e.id}>
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="rounded w-full object-cover object-center mb-6" src={e.thumbnail_url} alt="content" style={{height:'300px'}}/>
                <h3 className="tracking-widest text-purple-500 text-xs font-medium title-font">NAME</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{e.name}</h2>
              </div>
              </Link>

            </div>)
             )}
           </div>
        </div>
      </section>
      </>
    )
}


export default Products