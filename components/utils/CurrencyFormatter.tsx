interface DigitProp {
  digit: number;
}

function CurrencyFormatter({ digit }: DigitProp) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(digit);

  return formatter;
}

export default CurrencyFormatter;
