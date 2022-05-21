export function statement(invoice, plays) {
  const statementData = {};
  statementData.customer = invoice.customer;
  statementData.performances = invoice.performances.map(enrichPerformance);
  return renderPlainText(statementData);

  function enrichPerformance(aPerformance) {
    const result = {};
    Object.assign(result, aPerformance);
    result.play = playFor(result);
    result.amount = amountFor(result);
    return result;
  }

  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }

  function amountFor(aPerformance) {
    let result = 0;
    switch (playFor(aPerformance).type) {
      case "tragedy":
        result = 40000;
        if (aPerformance.audience > 30) {
          result += 1000 * (aPerformance.audience - 30);
        }
        break;
      case "comedy":
        result = 30000;
        if (aPerformance.audience > 20) {
          result += 10000 + 500 * (aPerformance.audience - 20);
        }
        result += 300 * aPerformance.audience;
        break;
      default:
        throw new Error(`알 수 없는 장르: ${playFor(aPerformance).type}`);
    }
    return result;
  }

  function renderPlainText(data) {
    let result = `청구 내역 (고객명: ${data.customer})\n`;
    for (let perf of data.performances) {
      result += ` ${perf.play.name}: ${usd(perf.amount)} (${
        perf.audience
      }석)\n`;
    }
    result += `총액: ${usd(totalAmount())}\n`;
    result += `적립 포인트: ${totalVolumeCredits()}점\n`;
    return result;

    function usd(aNumber) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
      }).format(aNumber / 100);
    }

    function totalVolumeCredits() {
      return invoice.performances //
        .reduce((total, p) => total + volumeCreditsFor(p), 0);
    }

    function volumeCreditsFor(aPerformance) {
      let volumeCredits = 0;
      volumeCredits += Math.max(aPerformance.audience - 30, 0);
      if ("comedy" === playFor(aPerformance).type)
        volumeCredits += Math.floor(aPerformance.audience / 5);
      return volumeCredits;
    }

    function totalAmount() {
      return invoice.performances.reduce((total, p) => total + amountFor(p), 0);
    }
  }
}
