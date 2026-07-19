function calculateMargin() {
    
    let cost = parseFloat(document.getElementById("cost").value);
    let selling = parseFloat(document.getElementById("selling").value);

    if (isNaN(cost) || isNaN(selling) || cost <= 0) {
        document.getElementById("result").innerText = "Please enter valid numbers.";
        return;
    }

    let profit = selling - cost;
    let margin = (profit / selling) * 100;

    document.getElementById("result").innerText =
        "Profit: ¥" + profit.toFixed(2) + " | Margin: " + margin.toFixed(1) + "%";
}
