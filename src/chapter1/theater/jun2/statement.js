export function statement(invoice, plays) {
  const mockInvoice = { ...invoice };

  mockInvoice.performances.forEach((perf) => {
    perf.play = plays[perf.playID];
    perf.amount = amountFor(perf);
  });

  console.log(mockInvoice);

  let result = `청구 내역 (고객명: ${mockInvoice.customer})\n`;

  for (let perf of mockInvoice.performances) {
    result +=
      ` ${perf.play.name}: ` + `${usd(perf.amount)}` + `(${perf.audience}석)\n`;
  }

  result += `총액: ${usd(totalAmount(mockInvoice))}\n`;
  result += `적립 포인트: ${calcVolumeCredits(mockInvoice)}점\n`;
  return result;
}

function totalAmount(invoice) {
  return invoice.performances //
    .reduce((total, perf) => total + perf.amount, 0);
}

function calcVolumeCredits(invoice) {
  let volumeCredits = 0;
  for (let perf of invoice.performances) {
    volumeCredits += Math.max(perf.audience - 30, 0);
    if ("comedy" === perf.play.type)
      volumeCredits += Math.floor(perf.audience / 5);
  }
  return volumeCredits;
}

function usd(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(amount / 100);
}

function amountFor(perf) {
  let thisAmount = 0;
  switch (perf.play.type) {
    case "tragedy": // 비극
      thisAmount = 40000;
      if (perf.audience > 30) {
        thisAmount += 1000 * (perf.audience - 30);
      }
      break;
    case "comedy": // 희극
      thisAmount = 30000;
      if (perf.audience > 20) {
        thisAmount += 10000 + 500 * (perf.audience - 20);
      }
      thisAmount += 300 * perf.audience;
      break;
    default:
      throw new Error(`알 수 없는 장르: ${perf.play.type}`);
  }
  return thisAmount;
}
