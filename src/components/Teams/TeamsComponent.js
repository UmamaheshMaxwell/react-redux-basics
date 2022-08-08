import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { getTeams } from '../../redux/actions/teamAction'
import Teams from './Teams'
import PaginationComponent from './PaginationComponent'


const TeamsComponent = () => {
    const teams = useSelector(state => state.teamList.teams)
    const dispatch = useDispatch()

    // Pagination 
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [teamsPerPage, setTeamsPerPage] =useState(10)

    useEffect(() => {
        setLoading(false)
        dispatch(getTeams())
        setLoading(true)
    }, [])

    // Get Current posts
    const indexOfLastTeam = currentPage * teamsPerPage
    const indexOfFirstTeam = indexOfLastTeam-teamsPerPage
    const currentTeams = teams.slice(indexOfFirstTeam, indexOfLastTeam)

    const paginate = (number) => setCurrentPage(number)

    const goToNextPage = () => setCurrentPage((currentPage) => currentPage + 1)
    const goToPreviousPage = () => setCurrentPage((currentPage) => currentPage - 1)
      

    return (
            <>
                <Teams teams={currentTeams} loading={loading}/>
                <PaginationComponent />
                {/* <Pagination teamsPerPage={teamsPerPage} 
                            totalTeams={teams.length} 
                            paginate={paginate} 
                            goToNextPage={goToNextPage}
                            goToPreviousPage={goToPreviousPage}
                            currentPage={currentPage} 
                />*/}
            </>
            
    )
}

export default TeamsComponent