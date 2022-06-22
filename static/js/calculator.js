function kgTolb() {
    let x = document.getElementById('x').value;

    if (x === "") {
        alert("Please provide a value.");
    } else {
        x = parseFloat(x);
        // 1 kg = 2.20462 lbs.
        document.getElementById('result').value = 2.20462 * x ;
    }
}

function kmTom() {
    let x = document.getElementById('x').value;

    if (x === "") {
        alert("Please provide a value.");
    } else {
        x = parseFloat(x);
        // 1 km = 0.621371 miles
        document.getElementById('result').value = 0.621371*x;
    }
}

function fToc() {
    let x = document.getElementById('x').value;

    if (x === "") {
        alert("Please provide a value.");
    } else {
        x = parseFloat(x);
        document.getElementById('result').value = (x - 32) * (5/9);
    }
}
