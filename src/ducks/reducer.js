const initialState = {
  loanType: "Home Purchase",
  propertyType: "Single Family Home",
  city: "",
  propToBeUsedOn: "",
  found: false,
  realEstateAgent: "",
  cost: "",
  downPayment: "",
  credit: "",
  history: "",
  addressOne: "",
  addressTwo: "",
  addressThree: "",
  firstName: "",
  lastName: "",
  email: ""
}
const UPDATE_LOAN_TYPE = "UPDATE_LOAN_TYPE"
const UPDATE_PROPERTY_TYPE = "UPDATE_PROPERTY_TYPE"
const UPDATE_PROP = "UPDATE_PROP"
const UPDATE_CITY = "UPDATE_CITY"
const UPDATE_FOUND = "UPDATE_FOUND"
const UPDATE_AGENT = "UPDATE_AGENT"
const UPDATE_COST = "UPDATE_COST"
const UPDATE_DOWN_PAYMENT = "UPDATE_DOWN_PAYMENT"
const UPDATE_CREDIT = "UPDATE_CREDIT"
const UPDATE_HISTORY = "UPDATE_HISTORY"
const UPDATE_ADDRESS_1 = "UPDATE_ADDRESS_1"
const UPDATE_ADDRESS_2 = "UPDATE_ADDRESS_2"
const UPDATE_ADDRESS_3 = "UPDATE_ADDRESS_3"
const UPDATE_FIRST = "UPDATE_FIRST"
const UPDATE_LAST = "UPDATE_LAST"
const UPDATE_EMAIL = "UPDATE_EMAIL"

function reducer(state = initialState, action) {
  console.log("REDUCER HIT: Action ->", action)
  console.log("STATE: ", state)
  switch (action.type) {
    case UPDATE_EMAIL:
      return {
        ...state,
        email: action.payload
      }
    case UPDATE_FIRST:
      return {
        ...state,
        firstName: action.payload
      }
    case UPDATE_LAST:
      return {
        ...state,
        lastName: action.payload
      }
    case UPDATE_ADDRESS_1:
      return {
        ...state,
        addressOne: action.payload
      }
    case UPDATE_ADDRESS_2:
      return {
        ...state,
        addressTwo: action.payload
      }
    case UPDATE_ADDRESS_3:
      return {
        ...state,
        addressThree: action.payload
      }
    case UPDATE_HISTORY:
      return {
        ...state,
        history: action.payload
      }
    case UPDATE_CREDIT:
      return {
        ...state,
        credit: action.payload
      }
    case UPDATE_COST:
      return {
        ...state,
        cost: action.payload
      }
    case UPDATE_DOWN_PAYMENT:
      return {
        ...state,
        downPayment: action.payload
      }
    case UPDATE_AGENT:
      return {
        ...state,
        realEstateAgent: action.payload
      }
    case UPDATE_LOAN_TYPE:
      return {
        ...state,
        loanType: action.payload
      }
    case UPDATE_PROPERTY_TYPE:
      return {
        ...state,
        propertyType: action.payload
      }

    case UPDATE_CITY:
      return {
        ...state,
        city: action.payload
      }
    case UPDATE_PROP:
      return {
        ...state,
        propToBeUsedOn: action.payload
      }
    case UPDATE_FOUND:
      return {
        ...state,
        found: action.payload
      }
    default:
      return state
  }
}

export function updateEmail(x) {
  return {
    type: UPDATE_EMAIL,
    payload: x
  }
}

export function updateLast(x) {
  return {
    type: UPDATE_LAST,
    payload: x
  }
}

export function updateFirst(x) {
  return {
    type: UPDATE_FIRST,
    payload: x
  }
}

export function updateAddress3(x) {
  return {
    type: UPDATE_ADDRESS_3,
    payload: x
  }
}

export function updateAddress2(x) {
  return {
    type: UPDATE_ADDRESS_2,
    payload: x
  }
}

export function updateAddress1(x) {
  return {
    type: UPDATE_ADDRESS_1,
    payload: x
  }
}

export function updateHistory(x) {
  return {
    type: UPDATE_HISTORY,
    payload: x
  }
}

export function updateCredit(x) {
  return {
    type: UPDATE_CREDIT,
    payload: x
  }
}

export function updateDownPayment(x) {
  return {
    type: UPDATE_DOWN_PAYMENT,
    payload: x
  }
}

export function updateCost(input) {
  return {
    type: UPDATE_COST,
    payload: input
  }
}

export function updateAgent(input) {
  return {
    type: UPDATE_AGENT,
    payload: input
  }
}
export function updateLoanType(loanType) {
  return {
    type: UPDATE_LOAN_TYPE,
    payload: loanType
  }
}

export function updatePropertyType(property) {
  return {
    type: UPDATE_PROPERTY_TYPE,
    payload: property
  }
}

export function updateCity(input) {
  return {
    type: UPDATE_CITY,
    payload: input
  }
}

export function updateProp(prop) {
  return {
    type: UPDATE_PROP,
    payload: prop
  }
}

export function updateFound(found) {
  return {
    type: UPDATE_FOUND,
    payload: found
  }
}

export default reducer
