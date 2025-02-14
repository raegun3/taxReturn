import React, { useState } from "react";

const TaxCalculator = () => {
  const [totalIncome, setTotalIncome] = useState("");
  const [taxWithheld, setTaxWithheld] = useState("");
  const [deductions, setDeductions] = useState("");
  const [result, setResult] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "totalIncome") setTotalIncome(value);
    if (name === "taxWithheld") setTaxWithheld(value);
    if (name === "deductions") setDeductions(value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    let taxPayable = 0;
    let taxRefund = 0;

    const income = parseFloat(totalIncome) || 0;
    const withheld = parseFloat(taxWithheld) || 0;
    const deduction = parseFloat(deductions) || 0;

    if (income < 1 || withheld < 1 || deduction < 0) {
      setResult("All values must be valid and positive!");
      return;
    }

    const totalTaxableIncome = income - deduction;

    if (totalTaxableIncome < 18201) {
      taxPayable = 0;
    } else if (totalTaxableIncome < 37001) {
      taxPayable = (totalTaxableIncome - 18200) * 0.19;
    } else if (totalTaxableIncome < 80001) {
      taxPayable = (totalTaxableIncome - 37000) * 0.325 + 3572;
    } else if (totalTaxableIncome < 180001) {
      taxPayable = (totalTaxableIncome - 80000) * 0.37 + 17547;
    } else {
      taxPayable = (totalTaxableIncome - 180000) * 0.47 + 54547;
    }

    taxRefund = Math.floor(withheld - taxPayable);

    if (taxRefund < 0) {
      setResult(`You owe $${Math.abs(taxRefund)} to Australian Tax office.
      contact your tax agent now!`);
    } else if (taxRefund > 0) {
      setResult(`You will receive a tax refund of $${taxRefund}.`);
    } else {
      setResult("Your tax payable for this year is $0.");
    }
  };

  return (
    <>
      <div className="col-lg-3"></div>
      <div>
        <div className="container rounded bg-dark text-light p-4">
          <div id="head-box">
            <h1 className="heading-input">
              Estimate Your <span className="text-warning">2025 Tax Refund</span>
            </h1>
          </div>
          <div className="container bg-dark text-light">
            <form method="post" onSubmit={handleSubmit}>
              <div className="row justify-content-center">
                <div className="col-sm-10">
                  <label className="col-form-label">Gross payment:</label>
                  <input
                    name="totalIncome"
                    type="number"
                    autoComplete="off"
                    className="form-control"
                    required
                    value={totalIncome}
                    onChange={handleChange}
                    placeholder="$.&#248;&#248;"
                  />
                </div>
                <div className="col-sm-10 ">
                  <label className="col-form-label">Total tax withheld:</label>
                  <input
                    name="taxWithheld"
                    type="number"
                    autoComplete="off"
                    className="form-control"
                    required
                    value={taxWithheld}
                    onChange={handleChange}
                    placeholder="$.&#248;&#248;"
                  />
                </div>
                <div className="col-sm-10">
                  <label className="col-form-label">Total deductions:</label>
                  <input
                    name="deductions"
                    type="number"
                    autoComplete="off"
                    className="form-control"
                    value={deductions}
                    onChange={handleChange}
                    placeholder="$.&#248;&#248;"
                  />
                </div>
                <div className="col-sm-10 pt-3">
                  <button className="btn btn-primary" type="submit">
                    Calculate tax return
                  </button>
                </div>
              </div>
            </form>
          </div>

          {result && <h3 className="mt-3">{result}</h3>}
        </div>
      </div>
    </>
  );
};

export default TaxCalculator;
