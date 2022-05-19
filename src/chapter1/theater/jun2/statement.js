export function statement(invoice, plays) {
  const mockInvoice = { ...invoice };

  mockInvoice.performances.forEach((perf) => {
    perf.play = plays[perf.playID];
  });

  console.log(mockInvoice);

  let result = `청구 내역 (고객명: ${mockInvoice.customer})\n`;

  for (let performance of mockInvoice.performances) {
    const play = plays[performance.playID];
    result +=
      //
      ` ${play.name}: ${usd(amountFor(play, performance))}(${
        performance.audience
      }석)\n`;
  }

  result += `총액: ${usd(totalAmount(mockInvoice, plays))}\n`;
  result += `적립 포인트: ${calcVolumeCredits(mockInvoice, plays)}점\n`;
  return result;
}

function totalAmount(invoice, plays) {
  let totalAmount = 0;
  for (let perf of invoice.performances) {
    const play = plays[perf.playID];
    totalAmount += amountFor(play, perf);
  }
  return totalAmount;
}

function calcVolumeCredits(invoice, plays) {
  let volumeCredits = 0;
  for (let perf of invoice.performances) {
    const play = plays[perf.playID];
    volumeCredits += Math.max(perf.audience - 30, 0);
    if ("comedy" === play.type) volumeCredits += Math.floor(perf.audience / 5);
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

function amountFor(play, perf) {
  let thisAmount = 0;
  switch (play.type) {
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
      throw new Error(`알 수 없는 장르: ${play.type}`);
  }
  return thisAmount;
}
