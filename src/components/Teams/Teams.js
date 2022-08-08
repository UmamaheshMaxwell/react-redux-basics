import React from 'react'

const Teams = ({teams, loading}) => {
  return (
    <div className='container'>
    <h1>Team List</h1>
    <table className="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Body</th>
            </tr>
        </thead>
        <tbody>
            {
                teams.map(team => {
                    const { id, name, email, body } = team;
                    return <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>
                          <a href={`mailto:${email}`}>{email}</a>
                        </td>
                        <td>{body}</td>
                    </tr>
                })
            }
        </tbody>
    </table>
    {/* <Pagination style={{display:"flex",  justifyContent: "center"}}> */}
</div>
  )
}

export default Teams