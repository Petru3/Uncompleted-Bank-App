const CUSTOMER_CREATECUSTOMER = 'customer/createCustomer'
const CUSTOMER_UPDATE_NAME = 'account/updateName'


const initialStateCustomer = {
    fullName: '',
    nationalID: '',
    createdAt: '',
}

export default function customerReducer(state = initialStateCustomer, action) {
    switch(action.type){
        case CUSTOMER_CREATECUSTOMER:
            return {
                ...state,
                fullName: action.payload.fullName,
                nationalID: action.payload.nationalID,
                createdAt: action.payload.createdAt
            }
        case CUSTOMER_UPDATE_NAME:
            return {
                ...state,
                fullName : action.payload
            }
        default:
            return state
    }
}

export function createCustomer(fullName, nationalID) {
    return {
        type : CUSTOMER_CREATECUSTOMER,
        payload : {
            fullName, 
            nationalID,
            createdAt: new Date().toISOString(),
        }
    }
}

export function updateName(fullName) { 
    return { 
        type: CUSTOMER_UPDATE_NAME,
        payload: fullName
    }
}