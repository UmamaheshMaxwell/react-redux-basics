import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fakeProductApi } from '../../fakeUserApi/fakeProductApi'
import { getProductbyId, removeProduct } from '../../redux/actions/productAction'

const ProductDetail = () => {
    const { product } = useSelector(state => state)
    const { id } = useParams()
    const dispatch = useDispatch()

    const fetchProductById = async () => {
        const response = await fakeProductApi.get(`/products/${id}`)
        dispatch(getProductbyId(response.data))
    }

    useEffect(() => {
        fetchProductById()
        return () => {
            dispatch(removeProduct())
        }
}, [])                                                  
    return (
        <div className="container">
            <h1>Product Details</h1>
            {   
                Object.keys(product).length === 0 ?
                    <div>Loading...</div> :
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <td>{product.id}</td>
                            </tr>
                            <tr>
                                <th>Title</th>
                                <td>{product.title}</td>
                            </tr>
                            <tr>
                                <th>Description</th>
                                <td>{product.description}</td>
                            </tr>
                            <tr>
                                <th>Category</th>
                                <td>{product.category}</td>
                            </tr>
                            <tr>
                                <th>Image</th>
                                <td><img src={product.image} alt={product.title} height="150px" width="100px" /></td>
                            </tr>
                            <tr>
                                <th>Rating</th>
                                <td>{product.rating?.rate}</td>
                            </tr>
                            <tr>
                                <th>Rating</th>
                                <td>{product.rating?.count}</td>
                            </tr>
                        </tbody>
                    </table>
            }
        </div>
    )
}

export default ProductDetail