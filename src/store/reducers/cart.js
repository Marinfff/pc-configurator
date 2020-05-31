import {ADD_PRODUCT, CLEAR_CART, DELETE_PRODUCT, MODIFY_PRODUCT} from "../actionTypes";

const initialState = [];

export default function (state = initialState, {type, payload}) {
  switch (type) {
    case ADD_PRODUCT: {
      const itemIndex = state.findIndex(item => item.type === payload.type)
      const cart = state.slice();

      if (itemIndex !== -1) {
        if (payload.product.id === state[itemIndex].product.id) {
          cart[itemIndex].quantity++
        } else {
          const product = {
            quantity: 1,
            ...payload
          }
          cart.splice(itemIndex, 1, product)
        }
      } else {
        const product = {
          quantity: 1,
          ...payload
        }
        cart.push(product)
      }


      return cart;
    }
    case DELETE_PRODUCT: {
      const cart = state.slice()
      cart.splice(payload, 1)
      return cart
    }

    case MODIFY_PRODUCT: {
      const cart = state.slice()
      cart.splice(payload.index, 1, {
        ...state[payload.index],
        quantity: payload.itemQuantity
      })
      return cart
    }
    default:
      return state;
  }
}
