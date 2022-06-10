export default () => {
  function priceOrder(product, quantity, shippingMethod) {
    const basePrice = product.basePrice * quantity;
    const discount =
      Math.max(quantity - product.discountThreshold, 0) *
      product.basePrice *
      product.discountRate;
    const shippingPerCase =
      basePrice > shippingMethod.discountThreshold
        ? shippingMethod.discountedFee
        : shippingMethod.feePerCase;
    const shippingCost = quantity * shippingPerCase;
    const price = basePrice - discount + shippingCost;
    return price;
  }

  function print() {
    const chocolate = {
      basePrice: 1000,
      discountThreshold: 50,
      discountRate: 0.1,
    };
    const shippingMethod = {
      discountThreshold: 800,
      discountedFee: 100,
      feePerCase: 120,
    };
    const price = priceOrder(chocolate, 100, shippingMethod);
    console.log(`${price} 원`);
  }

  print();
};
