const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [100, 200, 400]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [80, 20, 10, 100, 90, 500]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [500, 100]
  }
];

const calculateSalesTax = function (salesData, taxRates) {
  // Implement your code here
  let results = {};
  for (let companySale of salesData) {
    let sales = companySale.sales;
    let totalSales = 0;
    let totalTax = 0;
    for (let sale of sales) {
      totalSales += sale;
      totalTax += (sale * salesTaxRates[companySale.province]);
    }
    // console.log("name: ", companySale.name, "sales: ", totalSales, "tax: ", totalTax)
    let companyResults = {};
    if (results[companySale.name] === undefined) {
      results[companySale.name] = companyResults;
      if (companyResults["totalSales"] === undefined && companyResults["totalTax"] === undefined) {
        companyResults["totalSales"] = totalSales;
        companyResults["totalTax"] = totalTax;
      } else {
        companyResults.totalSales += totalSales;
        companyResults.totalTax += totalTax;
      }
    } else {
      results[companySale.name]["totalSales"] += totalSales;
      results[companySale.name]["totalTax"] += totalTax;

    }
  }
  return results;
};

const results = calculateSalesTax(companySalesData, salesTaxRates);

console.log(results);


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

