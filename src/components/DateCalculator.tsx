const DateCalculator = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <h1 className="text-2xl font-semibold">Date Calculator</h1>

      <div className="flex flex-row items-center">
        <button className="cursor-pointer bg-red-500 hover:bg-red-700 rounded-sm text-white px-3 py-1 mr-3">
          -
        </button>
        <span className="mr-1">Step:</span>
        <span>{0}</span>
        <button className="cursor-pointer bg-blue-500 hover:bg-blue-700 rounded-sm text-white px-3 py-1 ml-3">
          +
        </button>
      </div>

      <div className="flex flex-row items-center">
        <button className="cursor-pointer bg-red-500 hover:bg-red-700 rounded-sm text-white px-3 py-1 mr-3">
          -
        </button>
        <span className="mr-1">Count:</span>
        <span>{0}</span>
        <button className="cursor-pointer bg-blue-500 hover:bg-blue-700 rounded-sm text-white px-3 py-1 ml-3">
          +
        </button>
      </div>

      <div>Result container</div>
    </div>
  );
};

export default DateCalculator;
