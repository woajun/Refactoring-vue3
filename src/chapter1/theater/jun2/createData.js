export function createData(invoice, plays) {
  const data = { ...invoice };
  data.performances.forEach(enrichPerformance);
  data.totalAmount = totalAmount(data);
  data.totalVolumeCredits = totalVolumeCredits(data);
  return data;

  function enrichPerformance(aPerformance) {
    aPerformance.play = palyFor(aPerformance);
    aPerformance.amount = amountFor(aPerformance);
    aPerformance.volumeCredits = volumeCreditsFor(aPerformance);
  }

  function palyFor(aPerformance) {
    return plays[aPerformance.playID];
  }

  function volumeCreditsFor(aPerformance) {
    let volumeCredits = 0;
    volumeCredits += Math.max(aPerformance.audience - 30, 0);
    if (aPerformance.play.type === "comedy") {
      volumeCredits += Math.floor(aPerformance.audience / 5);
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

  function totalAmount(data) {
    return data.performances.reduce((total, p) => total + p.amount, 0);
  }

  function totalVolumeCredits(data) {
    return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
  }
}
