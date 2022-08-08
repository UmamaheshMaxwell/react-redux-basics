import React from 'react'

const Pagination = ({teamsPerPage, totalTeams, paginate, goToNextPage, goToPreviousPage, currentPage, totalCount}) => {
    const pageNumbers = []
    console.log(currentPage)
    for (let index = 1; index <= Math.ceil(totalTeams / (teamsPerPage*5)); index++) {
        pageNumbers.push(index)
    }

    let prevPageClass = currentPage>1 ? 'page-link' : 'page-link disabled'
    console.log(currentPage )
    console.log(totalTeams.length)
    console.log(currentPage < totalTeams.length)
    let nextPageClass = currentPage > totalTeams.length ? 'page-link disabled' : 'page-link'

    // if(currentPage>1) {
    //     console.log()
    //     prevPageClass = 'page-link'
    // } else {
    //     prevPageClass = 'page-link disabled'
    // }

  return (
    <nav className="d-flex justify-content-center">
        <ul className="pagination">
            <li className="page-item">
                <a className={prevPageClass} href="#" onClick={goToPreviousPage}>Prev</a>
            </li>
            { 
                pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() =>paginate(number)} href="#" className='page-link'>{number}</a>
                    </li>
                ))
            }
            <li className="page-item">
                <a className={nextPageClass} href="#" onClick={goToNextPage}>Next</a>
            </li>
        </ul>
    </nav>
  )
}

export default Pagination