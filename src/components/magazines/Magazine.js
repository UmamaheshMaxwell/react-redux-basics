import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fakeMagazineApi } from '../../fakeUserApi/fakeMagazineApi'
import { getMagazines } from '../../redux/actions/magazineAction'

const Magazine = () => {
    const magazines = useSelector(state => state.magazineList.magazines)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMagazines())
    }, [])

  return (
    <div className='container'>
        <h1>List of Magazines</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>

                    <th>Name</th>
                    <th>Url</th>
                    <th>Count</th>
                </tr>
            </thead>
            <tbody>
                {
                    magazines.map(magazine => (
                        <tr key={magazine.mal_id}>
                            <td>{magazine.mal_id}</td>
                            <td>{magazine.name}</td>
                            <td>
                                <a href={magazine.url}>{magazine.url}</a>
                            </td>
                            <td>{magazine.count}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Magazine