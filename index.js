document.getElementById('convert').addEventListener('click', function () {
    // Ambil nilai dari input
    const temperature = document.getElementById('temperature').value;
    const convertFrom = document.getElementById('convert-from').value;
    const convertTo = document.getElementById('convert-to').value;
    let apiUrl = "";
    let domainUrl = "https://temperature-converter-apps-production.up.railway.app/";

    // Validasi input
    if (isNaN(temperature) || temperature === '') {
        alert('Please enter a valid temperature.');
        return;
    }

    //cek convert from nya apa
    // URL API konversi suhu (Ganti dengan URL API yang sesuai)
    if (convertFrom.toLowerCase() === "celsius") {
        if (convertTo.toLowerCase() === "celsius") {
            apiUrl = `temperature_converter/celsius-to-celsius?unitTemperature=${convertFrom}&valueTemperature=${temperature}`;
        } else if (convertTo.toLowerCase() === "reaumur") {
            apiUrl = `temperature_converter/celsius-to-reaumur?unitTemperature=${convertFrom}&valueTemperature=${temperature}`;
        } else if (convertTo.toLowerCase() === "kelvin") {
            apiUrl = `temperature_converter/celsius-to-kelvin?unitTemperature=${convertFrom}&valueTemperature=${temperature}`;
        } else if (convertTo.toLowerCase() === "fahrenheit") {
            apiUrl = `temperature_converter/celsius-to-fahrenheit?unitTemperature=${convertFrom}&valueTemperature=${temperature}`;
        } else if (convertTo.toLowerCase() === "all") {
            apiUrl = `temperature_converter/celsius-to-all?unitTemperature=${convertFrom}&valueTemperature=${temperature}`;
        }
    } else if (convertFrom.toLowerCase() === "reaumur") {
        if (convertTo.toLowerCase() === "celsius") {
            apiUrl = `temperature_converter/reaumur-to-celsius?unitTemperature=${convertFrom}&valueTemperature=${temperature}`;
        } else if (convertTo.toLowerCase() === "reaumur") {
            apiUrl = `temperature_converter/reaumur-to-reaumur?unitTemperature=${convertFrom}&valueTemperature=${temperature}`;
        } else if (convertTo.toLowerCase() === "kelvin") {
            apiUrl = `temperature_converter/reaumur-to-kelvin?unitTemperature=${convertFrom}&valueTemperature=${temperature}`;
        } else if (convertTo.toLowerCase() === "fahrenheit") {
            apiUrl = `temperature_converter/reaumur-to-fahrenheit?unitTemperature=${convertFrom}&valueTemperature=${temperature}`;
        } else if (convertTo.toLowerCase() === "all") {
            apiUrl = `temperature_converter/reaumur-to-all?unitTemperature=${convertFrom}&valueTemperature=${temperature}`;
        }
    } else if (convertFrom.toLowerCase() === "kelvin") {
        if (convertTo.toLowerCase() === "celsius") {
            apiUrl = `temperature_converter/kelvin-to-celsius?unitTemperature=${convertFrom}&valueTemperature=${temperature}`;
        } else if (convertTo.toLowerCase() === "reaumur") {
            apiUrl = `temperature_converter/kelvin-to-reaumur?unitTemperature=${convertFrom}&valueTemperature=${temperature}`;
        } else if (convertTo.toLowerCase() === "kelvin") {
            apiUrl = `temperature_converter/kelvin-to-kelvin?unitTemperature=${convertFrom}&valueTemperature=${temperature}`;
        } else if (convertTo.toLowerCase() === "fahrenheit") {
            apiUrl = `temperature_converter/kelvin-to-fahrenheit?unitTemperature=${convertFrom}&valueTemperature=${temperature}`;
        } else if (convertTo.toLowerCase() === "all") {
            apiUrl = `temperature_converter/kelvin-to-all?unitTemperature=${convertFrom}&valueTemperature=${temperature}`;
        }
    } else if (convertFrom.toLowerCase() === "fahrenheit") {
        if (convertTo.toLowerCase() === "celsius") {
            apiUrl = `temperature_converter/fahrenheit-to-celsius?unitTemperature=${convertFrom}&valueTemperature=${temperature}`;
        } else if (convertTo.toLowerCase() === "reaumur") {
            apiUrl = `temperature_converter/fahrenheit-to-reaumur?unitTemperature=${convertFrom}&valueTemperature=${temperature}`;
        } else if (convertTo.toLowerCase() === "kelvin") {
            apiUrl = `temperature_converter/fahrenheit-to-kelvin?unitTemperature=${convertFrom}&valueTemperature=${temperature}`;
        } else if (convertTo.toLowerCase() === "fahrenheit") {
            apiUrl = `temperature_converter/fahrenheit-to-fahrenheit?unitTemperature=${convertFrom}&valueTemperature=${temperature}`;
        } else if (convertTo.toLowerCase() === "all") {
            apiUrl = `temperature_converter/fahrenheit-to-all?unitTemperature=${convertFrom}&valueTemperature=${temperature}`;
        }
    }

    // Melakukan panggilan API
    if (convertTo.toLowerCase() === "all") {
        fetch(domainUrl+apiUrl)
            .then(response => response.json())
            .then(data => {
                // Tampilkan hasil konversi
                document.getElementById('celsius').value = data.data.converterToCelsiusTransferObject.value || '';
                document.getElementById('fahrenheit').value = data.data.converterToFahrenheitTransferObject.value || '';
                document.getElementById('kelvin').value = data.data.converterToKelvinTransferObject.value || '';
                document.getElementById('reaumur').value = data.data.converterToReaumurTransferObject.value || '';
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error with the conversion. Please try again.');
            });
    } else {
        fetch(domainUrl+apiUrl)
            .then(response => response.json())
            .then(data => {
                // Tampilkan hasil konversi
                document.getElementById('celsius').value = (convertTo.toLowerCase() === "celsius") ? data.data.value : '';
                document.getElementById('fahrenheit').value = (convertTo.toLowerCase() === "fahrenheit") ? data.data.value : '';
                document.getElementById('kelvin').value = (convertTo.toLowerCase() === "kelvin") ? data.data.value : '';
                document.getElementById('reaumur').value = (convertTo.toLowerCase() === "reaumur") ? data.data.value : '';
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error with the conversion. Please try again.');
            });

    }
});
