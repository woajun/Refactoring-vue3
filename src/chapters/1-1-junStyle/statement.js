function USD(amount) {
  const format = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format;
  return format(amount / 100);
}

const fees = {
  tragedy: {
    performanceFee: 40000,
    admissionFee: 0,
    extraStandard: 30,
    extraPerformanceFee: 0,
    extraAdmissinFee: 1000,
  },
  comedy: {
    performanceFee: 30000,
    admissionFee: 300,
    extraStandard: 20,
    extraPerformanceFee: 10000,
    extraAdmissinFee: 500,
  },
};

function getPrice(key, audience) {
  if (!fees[key]) {
    return new Error(`알 수 없는 장르: ${key}`);
  }
  const performanceFee = fees[key].performanceFee;
  const admissionFee = fees[key].admissionFee;
  const extraStandard = fees[key].extraStandard;
  const extraPerformanceFee = fees[key].extraPerformanceFee;
  const extraAdmissinFee = fees[key].extraAdmissinFee;
  let fee = 0;

  fee += performanceFee;
  if (audience > extraStandard) {
    fee += extraPerformanceFee + extraAdmissinFee * (audience - extraStandard);
  }
  fee += admissionFee * audience;
  return fee;
}

export function statement(invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;

  let result = `청구 내역 (고객명: ${invoice.customer})\n`;

  for (let perf of invoice.performances) {
    const play = plays[perf.playID];
    let thisAmount = 0;
    thisAmount += getPrice(play.type, perf.audience);

    // 포인트를 적립한다.
    volumeCredits += Math.max(perf.audience - 30, 0);
    // 희극 관객 5명마다 추가 포인트를 제공한다.
    if ("comedy" === play.type) volumeCredits += Math.floor(perf.audience / 5);

    // 청구 내역을 출력한다.
    result += ` ${play.name}: ${USD(thisAmount)}(${perf.audience}석)\n`;
    totalAmount += thisAmount;
  }

  result += `총액: ${USD(totalAmount)}\n`;
  result += `적립 포인트: ${volumeCredits}점\n`;
  return result;
}
