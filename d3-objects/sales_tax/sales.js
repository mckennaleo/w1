const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


const calculateSalesTax = (salesData, taxRates) => {
  const result = {};
  const newSalesData = salesData.map((provider) => {
    let aggregatedSalesData = 0;
    for (const sale of provider.sales) {
      aggregatedSalesData += sale;
    }
    return {name: provider.name, province: provider.province, aggregatedSalesData};
  });
  for (const provider of newSalesData) {
    result[provider.name] = result[provider.name] || {totalSales: 0, totalTaxes: 0};
    result[provider.name].totalSales += provider.aggregatedSalesData;
    const provincialTax = taxRates[provider.province];
    result[provider.name].totalTaxes += provider.aggregatedSalesData * provincialTax;
  }
  return result;
};




console.log(calculateSalesTax(companySalesData, salesTaxRates));

