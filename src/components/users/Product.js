import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fakeProductApi } from '../../fakeUserApi/fakeProductApi'
import { getProducts } from '../../redux/actions/productAction'
import ProductDetail from './ProductDetail'

const Product = () => {
    const {products} = useSelector(state => state.productList)
    const dispatch = useDispatch()

    const fetchProducts = async () =>{
        const response = await fakeProductApi.get("/products")
        dispatch(getProducts(response.data))
    }

    useEffect(() => {
        fetchProducts()
    }, [])
  return (
    <div className="container">
        <h1 style={{"textAlign": "left"}}>Product List</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>
                                <Link to={`/product/${product.id}`} element={<ProductDetail />}>{product.title}</Link>
                            </td>
                            <td>{product.price}</td>
                            <td>
                                <img src={product.image} alt={product.title} height="150px" width="100px"/>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Product