const RATES = {
  bath: 0.442,
};

function convert(rub, currency) {
  if (!RATES[currency]) {
    return null;
  }

  return rub * RATES[currency];
}
