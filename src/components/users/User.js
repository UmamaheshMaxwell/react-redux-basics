import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fakeUserApi } from '../../fakeUserApi/fakeUserApi'
import { getUsers } from '../../redux/actions/userAction'
import { GET_USERS } from '../../redux/constants/user-types'

const User = () => {
  const users = useSelector(state => state.userList.users)
  const dispatch = useDispatch()

const fetchUsers = async() => {
  // fetch("https://jsonplaceholder.typicode.com/users")
  // .then(response => response.json())
  // .then(data => dispatch(getUsers(data)))
  const response = await fakeUserApi().get("/users")
  dispatch(getUsers(response.data))
}

  useEffect(() => {
    fetchUsers()
  }, [])
  return (
    <div className="container">
      <h1>User List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Zipcode</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
                <td>{user.address.zipcode}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>{user.company.name}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default User