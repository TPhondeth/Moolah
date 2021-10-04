async function newFormHandler(event) {
    event.preventDefault();

    const symbol = document.querySelector('input[name="currency_symbol"]').value.toUpperCase();

    const response = await fetch(`/api/currencies`, {
        method: "POST",
        body: JSON.stringify({symbol}),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (response.ok) {
        document.location.replace("/");
    } else {
        alert(response.statusText);
    }
}

document
    .querySelector(".new-currency-form")
    .addEventListener("submit", newFormHandler);