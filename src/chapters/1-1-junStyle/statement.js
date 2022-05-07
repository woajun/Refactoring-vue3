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

function calcFee(key, audience) {
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
  let result = "";
  let totalAmount = 0;
  let volumeCredits = 0;
  let feeResult = "";

  for (const perf of invoice.performances) {
    const audience = perf.audience;
    const type = plays[perf.playID].type;
    const name = plays[perf.playID].name;
    const fee = calcFee(type, audience);

    feeResult += ` ${name}: ${USD(fee)}(${audience}석)\n`;
    volumeCredits += calcVolumeCredits(audience, type);
    totalAmount += fee;
  }

  const billingDetails = `청구 내역 (고객명: ${invoice.customer})\n`;
  const total = `총액: ${USD(totalAmount)}\n`;
  const credits = `적립 포인트: ${volumeCredits}점\n`;

  result += billingDetails;
  result += feeResult;
  result += total;
  result += credits;
  return result;
}

function calcVolumeCredits(audience, type) {
  let volumeCredits = 0;
  volumeCredits += Math.max(audience - 30, 0);
  if ("comedy" === type) volumeCredits += Math.floor(audience / 5);
  return volumeCredits;
}
