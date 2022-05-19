export function createData(invoice, plays) {
  const data = { ...invoice };
  data.performances.forEach(enrichPerformance);
  data.totalAmount = totalAmount(data);
  data.totalVolumeCredits = calcVolumeCredits(data);
  return data;

  function enrichPerformance(aPerformance) {
    aPerformance.play = plays[aPerformance.playID];
    aPerformance.amount = amountFor(aPerformance);
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
}
