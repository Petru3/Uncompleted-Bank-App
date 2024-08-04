import {createStore, combineReducers } from 'redux'

// const ACCOUNT_WITHDRAW = 'account/withdraw'
// const ACCOUNT_REQUESTLOAN = 'account/requestLoan'
// const ACCOUNT_PAYLOAN = 'account/payLoan'

// const CUSTOMER_CREATECUSTOMER = 'customer/createCustomer'
// const CUSTOMER_UPDATE_NAME = 'account/updateName'


import accountReducer from './featured/account/accountSlice';
import customerReducer from './featured/customers/customersSlice';

const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer,
})

const store = createStore(rootReducer);

export default store;