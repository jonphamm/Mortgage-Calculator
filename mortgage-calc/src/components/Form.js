// shortcut to generate react form is "rfce"
import React, { useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import FormInputGroup from "./FormInputGroup";

function Form() {
    
    const [homeValue, setHomeValue] = useState("");
    const [downPayment, setDownPayment] = useState("");
    const [loanAmount, setLoanAmount] = useState("");
    const [interestRate, setInterestRate] = useState("");
    const [loanDuration, setLoanDuration] = useState("");
    const [monthlyPayment, setMonthlyPayment] = useState(0);

    function calculateLoanAmount() {
    setLoanAmount(homeValue - downPayment);
    return loanAmount;
    }

    function calculateMonthlyPayment() {
    // percentage conversion
    function percentageToDecimal(percent) {
        return percent / 12 / 100;
    }

    // years to month conversion
    function yearsToMonths(year) {
        return year * 12;
    }

     // google interest rate formula
    setMonthlyPayment(
        (percentageToDecimal(interestRate) * loanAmount) /
        (1 -
            Math.pow(
            1 + percentageToDecimal(interestRate),
            -yearsToMonths(loanDuration)
            ))
    );

    return monthlyPayment;
    }

    // onSubmit prevents CALCULATE from submitting and refreshing page
    return (
    <form onSubmit={(e) => e.preventDefault()}>
        <FormInputGroup
        text="Home Value"
        icon={<FaDollarSign />}
        placeholder={"Enter the value of the home..."}
        value={homeValue}
        onInput={(e) => setHomeValue(e.target.value)}
        onkeyup={calculateLoanAmount}
        />
        <FormInputGroup
        text="Down Payment"
        icon={<FaDollarSign />}
        placeholder={"Enter your funds..."}
        value={downPayment}
        onInput={(e) => setDownPayment(e.target.value)}
        onkeyup={calculateLoanAmount}
        />
        <FormInputGroup
        text="Loan Amount"
        icon={<FaDollarSign />}
        readOnly={true}
        value={loanAmount}
        />
        <FormInputGroup
        text="Interest Rate %"
        placeholder={"Enter your interest rate..."}
        value={interestRate}
        onInput={(e) => setInterestRate(e.target.value)}
        />
        <FormInputGroup
        text="Loan Duration (years)"
        placeholder={"Enter the duration of your loan in years..."}
        value={loanDuration}
        onInput={(e) => setLoanDuration(e.target.value)}
        />
        <h4 className="alert alert-info fw-bold">
        Monthly Payment: <FaDollarSign />
        {parseFloat(monthlyPayment.toFixed(2))}
        </h4>

        <button
        type="submit"
        onClick={calculateMonthlyPayment}
        className="btn btn-primary btn-lg w-100 center mb-3"
        >
        Calculate
        </button>
    </form>
    );
}

export default Form;