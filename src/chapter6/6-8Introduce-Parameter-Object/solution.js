export default () => {
  // eslint-disable-next-line no-unused-vars
  class NumberRange {
    constructor(min, max) {
      this._data = { min: min, max: max };
    }
    get min() {
      return this._data.min;
    }
    get max() {
      return this._data.max;
    }
  }

  const station = {
    name: "ZB1",
    readings: [
      { temp: 47, time: "2016-11-10 09:10" },
      { temp: 53, time: "2016-11-10 09:20" },
      { temp: 58, time: "2016-11-10 09:30" },
      { temp: 53, time: "2016-11-10 09:40" },
      { temp: 51, time: "2016-11-10 09:50" },
    ],
  };

  // eslint-disable-next-line no-unused-vars
  function readingsOutsideRange(station, min, max, range) {
    return station.readings.filter((r) => r.temp < min || r.temp > max);
  }

  const operatingPlan = {
    temperatureFloor: 50,
    temperatureCeiling: 55,
  };

  const alerts = readingsOutsideRange(
    station,
    operatingPlan.temperatureFloor,
    operatingPlan.temperatureCeiling,
    null
  );

  return alerts;
};
