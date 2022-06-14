import { chocolate, shippingMethod } from "./conditions";
export default () => {
  function priceOrder(product, quantity, shippingMethod) {
    const priceData = calculatePricingData(product, quantity);
    const price = applyShipping(priceData, shippingMethod);
    return price;
  }

  function calculatePricingData(product, quantity) {
    const basePrice = product.basePrice * quantity;
    const discount =
      Math.max(quantity - product.discountThreshold, 0) *
      product.basePrice *
      product.discountRate;
    return { basePrice: basePrice, quantity: quantity, discount: discount };
  }

  function applyShipping(priceData, shippingMethod) {
    const shippingPerCase =
      priceData.basePrice > shippingMethod.discountThreshold
        ? shippingMethod.discountedFee
        : shippingMethod.feePerCase;
    const shippingCost = priceData.quantity * shippingPerCase;
    const price = priceData.basePrice - priceData.discount + shippingCost;
    return price;
  }

  function print() {
    const price = priceOrder(chocolate, 100, shippingMethod);
    console.log(`${price} 원`);
  }

  print();
};
