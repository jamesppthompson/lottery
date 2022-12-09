const getContractsAddress = (networkId) => {
  switch (networkId) {
    case 97:
      return "0xa7F0b1c60DdDdc36468FAF0f652Bdc516436521f"; //new
    default:
      return "0xa7F0b1c60DdDdc36468FAF0f652Bdc516436521f"; //old -> 0x3fBbDCF88869c2c6D14A469d9FE028cb329Ae368
  }
};

export default getContractsAddress;
