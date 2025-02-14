import React, { useState } from "react";

const TaxCalculator = () => {
  const [totalIncome, setTotalIncome] = useState("");
  const [taxWithheld, setTaxWithheld] = useState("");
  const [deductions, setDeductions] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "totalIncome") setTotalIncome(value);
    if (name === "taxWithheld") setTaxWithheld(value);
    if (name === "deductions") setDeductions(value);
  };

  const calculateTax = (e) => {
    e.preventDefault();

    let taxPayable = 0;
    let taxRefund = 0;

    const income = parseInt(totalIncome) || 0;
    const withheld = parseInt(taxWithheld) || 0;
    const deduction = parseInt(deductions) || 0;

    if (income < 1 || withheld < 1 || deduction < 1) {
      setResult("All values must be positive!");
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

    taxRefund = withheld - taxPayable;

    if (taxRefund < 0) {
      setResult(`You owe $${Math.abs(taxRefund)} in taxes.`);
    } else if (taxRefund > 0) {
      setResult(`You will receive a tax refund of $${taxRefund}.`);
    } else {
      setResult("Your tax payable for this year is $0.");
    }
  }
    return ( 
        <>
        <div className="col-lg-3"></div>
        <div>
            <div className="container rounded bg-dark text-light">
                <div id="head-box">
                    <h1 className="heading-input">Estimate Your<span className="text-warning"> 2025 Tax Refund</span></h1>                    
                </div>
                <div class="container bg-dark text-light">
                <div class="row">
                  <form action="">
                  <div class="col  w-75">
                    <label for="total_income" className="col-form-label">Gross payment or total income:</label>
                    <input name="total_income" type="number" autocomplete="off" autofocus className="form-control"/>
                  </div>
                  <div class="col">
                    <label for="tax_withheld" className="col-form-label">Total tax withheld:</label>
                    <input name="tax_withheld" type="number" autocomplete="off" className="form-control"/>
                  </div>
                  <div class="w-100"></div>
                  <div class="col">
                    <label for="deductions" className="col-form-label">Total deductions:</label>
                    <input name="deductions" type="text" autocomplete="off" className="form-control"/>
                  </div>
                  <div class="col pt-4">
                    <button className="btn btn-primary" onClick={ (e) => {handleChange}} type="submit" >Calculate tax return</button>
                  </div>
                  </form>
                </div>
              </div>
              
                    {result && <h3>{result}</h3>}
                </div>                            
            </div>
        
        </>
    );
}
export default TaxCalculator