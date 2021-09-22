export const handleItemPrice = ({ items }) => {
  return items.map((item) =>
    item.quantity > 1
      ? {
          ...item,
          subTotal_price: item.quantity * item.price,
          subTotal_tax: item.quantity * item.price * (item.tax_pct / 100),
        }
      : {
          ...item,
          subTotal_price: item.price,
          subTotal_tax: item.price * (item.tax_pct / 100),
        }
  );
};
