// Define conversion factors for each unit
    const conversionFactors = {
      "kilometer": 1000,
      "hectometer": 100,
      "decameter": 10,
      "meter": 1,
      "decimeter": 0.1,
      "centimeter": 0.01,
      "millimeter": 0.001,
      "micrometer": 0.000001,
      "nanometer": 0.000000001,
      "angstrom": 1e+10,
      "picometer": 1e+12,
      "femtometer": 1e+15,
      "atometer": 1e+18,
      "mile": 1609,
      "nautical_mile": 1852,
      "inches": 39.37,
      "feet": 3.281,
      "yard": 1.094,
      "light_year": 9.461e+15,
      "parsec": 3.086e+16,
      "pixel": 3779.527559,
      "point": 2835,
      "pica": 236.2
      // Add more units here as needed
    };

    function convertDistance() {
      let fromUnit = document.getElementById('fromUnit').value;
      let toUnit = document.getElementById('toUnit').value;
      let inputValue = parseFloat(document.getElementById('inputValue').value);

      // Check if units are valid
      if (!(fromUnit in conversionFactors) || !(toUnit in conversionFactors)) {
        console.log('Invalid units');
        return;
      }

      // Convert input value to base unit (meter)
      let baseValue = inputValue * conversionFactors[fromUnit];

      // Convert base unit to target unit
      let convertedValue = baseValue / conversionFactors[toUnit];

      // Display result
      if (Number.isInteger(convertedValue)) {
        document.getElementById('result').textContent = "Converted Value : " + convertedValue;
      } else {
        document.getElementById('result').textContent = "Converted Value : " + convertedValue.toFixed(2);
      }
    }

    // Add event listener to the conversion button
    document.getElementById('convertButton').addEventListener('click', convertDistance);

