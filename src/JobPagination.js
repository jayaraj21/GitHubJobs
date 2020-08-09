import React from 'react';
import {Pagination}  from "react-bootstrap"

function JobPagination({page, setPage}) {
    const adjustPage = (amount)  =>{
                setPage(prevPage => prevPage + amount)
    } 
    return (
        <Pagination>
           { page !== 1 &&  < Pagination.Prev onClick={() => adjustPage(-1)}/> } 
               { page !== 1 && <Pagination.Item>{page - 1}</Pagination.Item>}
               <Pagination.Item active>{page}</Pagination.Item>
               <Pagination.Item>{page + 1}</Pagination.Item>
            <Pagination.Next  onClick={() => adjustPage(+1)}/>

        </Pagination  >
    )
}

export default JobPagination;
