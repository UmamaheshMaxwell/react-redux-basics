import React from 'react'
import {Pagination} from "react-bootstrap"

const PaginationComponent = () => {
    return (
        <Pagination className="d-flex justify-content-center">
            <Pagination.Prev />
            <Pagination.Ellipsis />
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Next />
        </Pagination>
    )
}

export default PaginationComponent