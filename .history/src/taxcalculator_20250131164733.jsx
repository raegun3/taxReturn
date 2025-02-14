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
        
            <div class="container justify-content-center">
                <div id="head-box">
                    <h1 class="heading-input">Estimate Your<span className="text-warning"> 2025 Tax Refund</span></h1>                    
                </div>
                <div class="form-group row align-itmes-center">
                    <form onSubmit={calculateTax}>
                        <label for="total_income" class="col-sm-2 col-form-label">Gross payment or total income:</label>
                        <div class="col-sm-10 w-75">
                            <input name="total_income" type="number" autocomplete="off" autofocus class="form-control"/>
                        </div>
                        <label for="tax_withheld" class="col-sm-2 col-form-label">Total tax withheld:</label>
                        <div class="col-sm-10 w-75">
                            <input name="tax_withheld" type="number" autocomplete="off" class="form-control"/>
                        </div>
                        <label for="deductions" class="col-sm-2 col-form-label">Total deductions:</label>
                        <div class="col-sm-10 w-75">
                            <input name="deductions" type="text" autocomplete="off" class="form-control"/>
                        </div>
                        <div class="align-itmes-center">
                            <button class="btn btn-primary" type="submit" >Calculate tax return</button>
                        </div>
                    </form>
                    {result && <h3>{result}</h3>}
                </div>                            
            </div>
                
    );
}
export default TaxCalculator