const speedUpTimesReduction = [24, 3, 1];

const costs = new Map();
costs.set(1, 0);
costs.set(1.5, 360);
costs.set(2, 2400);
costs.set(3, 20160);
costs.set(4, 80640);
costs.set(5, 285600);
costs.set(6, 1440000);

const getDayCost = (setup) => {
  let cost = 0;

  setup.forEach((s) => {
    cost += costs.get(s);
  });

  return cost;
};

const getTotalCost = (setup) => {
  let cost = 0;

  setup.forEach((s) => {
    cost += getSpeedUpCost(s);
  });

  return cost;
};

const getSpeedUpCost = (setup) => costs.get(setup[0]) / speedUpTimesReduction[setup[1]];

export { costs, getDayCost, getTotalCost, getSpeedUpCost };
