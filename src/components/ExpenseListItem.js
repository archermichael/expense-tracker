import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}><h3>{ description }</h3></Link>
        <p>Amount: { amount/100 }</p>
        <p>Created At: { moment.unix(createdAt/1000).format('MM/DD/YYYY') }</p>
    </div>
)


export default ExpenseListItem