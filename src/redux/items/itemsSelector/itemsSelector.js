import { createSelector } from "reselect";

export const selectCartData = (state) => state.items;

export const selectCartItemsCount = createSelector([selectCartData], (item) =>
  item.reduce((number_of_items, item) => number_of_items + item.quantity, 0)
);

export const selectCartSubTotal = createSelector([selectCartData], (item) =>
  item.reduce((item_subTotal, item) => item_subTotal + item.subTotal_price, 0)
);

export const selectCartTaxTotal = createSelector([selectCartData], (item) =>
  item.reduce(
    (tax_total, item) => tax_total + item.subTotal_tax * item.price,
    0
  )
);

export const selectCartTotal = createSelector([selectCartData], (item) =>
  item.reduce(
    (item_total, item) =>
      item_total + item.subTotal_price + item.subTotal_tax + 1000,
    0
  )
);
