function convertLength() {
    const input = document.getElementById('lengthInput').value;
    const unit = document.getElementById('lengthUnit').value;
    let result;

    if (!input) {
        result = 'Please enter a value';
    } else {
        const value = parseFloat(input);
        switch (unit) {
            case 'metersToFeet':
                result = `${value} meters is ${(value * 3.28084).toFixed(2)} feet`;
                break;
            case 'feetToMeters':
                result = `${value} feet is ${(value / 3.28084).toFixed(2)} meters`;
                break;
            case 'kilometersToMiles':
                result = `${value} kilometers is ${(value * 0.621371).toFixed(2)} miles`;
                break;
            case 'milesToKilometers':
                result = `${value} miles is ${(value / 0.621371).toFixed(2)} kilometers`;
                break;
        }
    }

    document.getElementById('lengthResult').innerText = result;
}

function convertTemperature() {
    const input = document.getElementById('temperatureInput').value;
    const unit = document.getElementById('temperatureUnit').value;
    let result;

    if (!input) {
        result = 'Please enter a value';
    } else {
        const value = parseFloat(input);
        switch (unit) {
            case 'celsiusToFahrenheit':
                result = `${value} °C is ${(value * 9/5 + 32).toFixed(2)} °F`;
                break;
            case 'fahrenheitToCelsius':
                result = `${value} °F is ${((value - 32) * 5/9).toFixed(2)} °C`;
                break;
            case 'kelvinToCelsius':
                result = `${value} K is ${(value - 273.15).toFixed(2)} °C`;
                break;
            case 'celsiusToKelvin':
                result = `${value} °C is ${(value + 273.15).toFixed(2)} K`;
                break;
        }
    }

    document.getElementById('temperatureResult').innerText = result;
}

function convertWeight() {
    const input = document.getElementById('weightInput').value;
    const unit = document.getElementById('weightUnit').value;
    let result;

    if (!input) {
        result = 'Please enter a value';
    } else {
        const value = parseFloat(input);
        switch (unit) {
            case 'kilogramsToPounds':
                result = `${value} kilograms is ${(value * 2.20462).toFixed(2)} pounds`;
                break;
            case 'poundsToKilograms':
                result = `${value} pounds is ${(value / 2.20462).toFixed(2)} kilograms`;
                break;
            case 'gramsToOunces':
                result = `${value} grams is ${(value * 0.035274).toFixed(2)} ounces`;
                break;
            case 'ouncesToGrams':
                result = `${value} ounces is ${(value / 0.035274).toFixed(2)} grams`;
                break;
        }
    }

    document.getElementById('weightResult').innerText = result;
}
