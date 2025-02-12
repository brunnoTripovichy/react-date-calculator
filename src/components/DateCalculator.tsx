import { useCallback, useState } from 'react';

const DateCalculator = () => {
  // Step and Count are the two states that we need to keep track of
  const [step, setStep] = useState<number>(1);
  const [count, setCount] = useState<number>(0);

  // Today's date cont so we can compute the count
  const today = new Date();

  // Method callback to increment the step
  const incrementStep = useCallback((): void => {
    setStep((step) => step + 1);
  }, []);

  // Method callback to decrement the step
  const decrementStep = useCallback((): void => {
    setStep((step) => (step > 1 ? step - 1 : 1));
  }, []);

  // Method callback to increment the count
  const incrementCount = useCallback((): void => {
    setCount((count) => count + step);
  }, [step]);

  // Method callback to decrement the count
  const decrementCount = useCallback((): void => {
    setCount((count) => count - step);
  }, [step]);

  // Compute the result using the step and count (using memoization)

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <h1 className="text-2xl font-semibold">Date Calculator</h1>

      {/* Step section */}
      <div className="flex flex-row items-center">
        <button
          className="cursor-pointer bg-red-500 hover:bg-red-700 rounded-sm text-white px-3 py-1 mr-3"
          onClick={decrementStep}
        >
          -
        </button>
        <span className="mr-1">Step:</span>
        <span>{step}</span>
        <button
          className="cursor-pointer bg-blue-500 hover:bg-blue-700 rounded-sm text-white px-3 py-1 ml-3"
          onClick={incrementStep}
        >
          +
        </button>
      </div>

      {/* Count section */}
      <div className="flex flex-row items-center">
        <button
          className="cursor-pointer bg-red-500 hover:bg-red-700 rounded-sm text-white px-3 py-1 mr-3"
          onClick={decrementCount}
        >
          -
        </button>
        <span className="mr-1">Count:</span>
        <span>{count}</span>
        <button
          className="cursor-pointer bg-blue-500 hover:bg-blue-700 rounded-sm text-white px-3 py-1 ml-3"
          onClick={incrementCount}
        >
          +
        </button>
      </div>

      {/* Result container */}
      <div>Result container</div>
    </div>
  );
};

export default DateCalculator;
