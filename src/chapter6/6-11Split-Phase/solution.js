import { chocolate, shippingMethod } from "./conditions";
export default () => {
  function priceOrder(product, quantity, shippingMethod) {
    const basePrice = product.basePrice * quantity;
    const discount =
      Math.max(quantity - product.discountThreshold, 0) *
      product.basePrice *
      product.discountRate;
    const priceData = { basePrice: basePrice };
    const price = applyShipping(priceData, shippingMethod, quantity, discount);
    return price;
  }

  function applyShipping(priceData, shippingMethod, quantity, discount) {
    const shippingPerCase =
      priceData.basePrice > shippingMethod.discountThreshold
        ? shippingMethod.discountedFee
        : shippingMethod.feePerCase;
    const shippingCost = quantity * shippingPerCase;
    const price = priceData.basePrice - discount + shippingCost;
    return price;
  }

  function print() {
    const price = priceOrder(chocolate, 100, shippingMethod);
    console.log(`${price} 원`);
  }

  print();
};
