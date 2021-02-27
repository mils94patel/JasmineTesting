
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 10000,
    years: 8,
    rate: 7
  };
  expect(calculateMonthlyPayment(values)).toEqual('136.34');
});


it("should return a result with 2 decimal places", function() {
  // ...
  const values = {
    amount: 10064,
    years: 8,
    rate: 7.2
  };
  expect(calculateMonthlyPayment(values)).toEqual('138.21');
});

/// etc
