import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import AddExpense from '../components/AddExpense'
import EditExpense from '../components/EditExpense'
import ExpenseDashboard from '../components/ExpenseDashboard'
import Login from '../components/Login'
import NotFoundPage from '../components/NotFoundPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createBrowserHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute exact path="/" component={Login} />
                <PrivateRoute path="/dashboard" component={ExpenseDashboard} />
                <PrivateRoute path="/create" component={AddExpense} />
                <PrivateRoute path="/edit/:id" component={EditExpense} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
)

export default AppRouter