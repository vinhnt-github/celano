import { 
    HOME_PRODUCT_WOMAN,
    HOME_PRODUCT_MAN,
    SINGLE_PRODUCT

} from './ActionTypes'



export function reducer(state, {type,payload}) {
    switch (type) {
      case SINGLE_PRODUCT:
        var product = payload.product;
        return {
          ...state,
          product : product
        };
      case HOME_PRODUCT_WOMAN:
        var woman_products = payload.products;
        return {
          ...state,
          woman_products : woman_products
        };
      case HOME_PRODUCT_MAN:
        var man_products = payload.products;
        return {
          ...state,
          man_products : man_products
        };
      default:
        throw new Error();
    }
}