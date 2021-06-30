import React from 'react'
import moment from 'moment'
import 'react-dates/initialize'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'


export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        }
    }

    addExpense = (e) => {
        e.preventDefault()

        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({error: 'You must provide a description and an amount'}))
        } else {
            this.setState(() => ({error: ''}))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }

    amountChange = (e) => {
        const amount = e.target.value
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }

    noteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }

    descriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }

    render() {
        return (
            <form 
                className="form"
                onSubmit={this.addExpense}
            >
                {this.state.error && <p className="form__error" >{this.state.error}</p>}
                <input 
                    className="text-input"
                    type="text"
                    placeholder="Description"
                    autoFocus
                    value={this.state.description}
                    onChange={this.descriptionChange}
                />
                <input
                    className="text-input"
                    type="text"
                    placeholder="Amount"
                    value={this.state.amount}
                    onChange={this.amountChange}
                />
                <SingleDatePicker 
                    block
                    date={this.state.createdAt}
                    onDateChange={(createdAt) => {if (createdAt) {this.setState(({ createdAt }))}}}
                    focused={this.state.focused}
                    onFocusChange={({ focused }) => this.setState({ focused })}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
                <textarea
                    className="textarea"
                    placeholder="Add a note for your expense (optional)"
                    value={this.state.note}
                    onChange={this.noteChange}
                >
                </textarea>
                <div>
                    <button className="button">Save Expense</button>
                </div>
            </form>
        )
    }
}