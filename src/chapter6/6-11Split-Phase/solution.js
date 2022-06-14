import { chocolate, shippingMethod } from "./conditions";
export default () => {
  function priceOrder(product, quantity, shippingMethod) {
    const basePrice = product.basePrice * quantity;
    const discount =
      Math.max(quantity - product.discountThreshold, 0) *
      product.basePrice *
      product.discountRate;
    const price = applyShipping(basePrice, shippingMethod, quantity, discount);
    return price;
  }

  function applyShipping(basePrice, shippingMethod, quantity, discount) {
    const shippingPerCase =
      basePrice > shippingMethod.discountThreshold
        ? shippingMethod.discountedFee
        : shippingMethod.feePerCase;
    const shippingCost = quantity * shippingPerCase;
    const price = basePrice - discount + shippingCost;
    return price;
  }

  function print() {
    const price = priceOrder(chocolate, 100, shippingMethod);
    console.log(`${price} 원`);
  }

  print();
};
