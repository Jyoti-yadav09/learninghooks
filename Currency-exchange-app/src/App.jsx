import { useState } from "react";
import axios from "axios";

const App = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);
  const [error, setError] = useState("");

  const apiKey = "f9c9cf7372b19de007768c29"; // Replace with your API key

  const fetchExchangeRate = async () => {
    if (!amount || !fromCurrency || !toCurrency) {
      setError("Please fill all fields!");
      return;
    }

    try {
      const response = await axios.get(
        `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`
      );

      console.log("API Response:", response.data); // Debugging
      const rate = response.data.conversion_rates[toCurrency];

      if (rate) {
        setExchangeRate(rate);
        setConvertedAmount(amount * rate);
        setError("");
      } else {
        setError("Currency not supported.");
        setConvertedAmount(null);
      }
    } catch (err) {
      console.error("API Error:", err);
      setError("Something went wrong!");
      setConvertedAmount(null);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Currency Exchange App
        </h1>
        
        {/* Amount Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">
            Amount:
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="1"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
          />
        </div>

        {/* From Currency Selection */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">
            From Currency:
          </label>
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="INR">INR</option>
          </select>
        </div>

        {/* To Currency Selection */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">
            To Currency:
          </label>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="INR">INR</option>
          </select>
        </div>

        {/* Convert Button */}
        <button
          onClick={fetchExchangeRate}
          className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Convert
        </button>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-center font-semibold mt-3">{error}</p>
        )}

        {/* Result */}
        {convertedAmount && (
          <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded-md text-center">
            <p className="text-lg font-semibold text-green-800">
              {amount} {fromCurrency} = {convertedAmount.toFixed(2)} {toCurrency}
            </p>
            <p className="text-sm text-gray-600">
              Exchange Rate: 1 {fromCurrency} = {exchangeRate.toFixed(2)} {toCurrency}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
