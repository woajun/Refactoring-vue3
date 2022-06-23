export default function isMoreThanThousand(anOrder) {
  let basePrice = anOrder.basePrice;
  return basePrice > 1000;
}
