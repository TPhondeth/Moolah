async function addUserCurrencyHandler(event) {
    event.preventDefault();

    const user_id = document.querySelector("input[name='userId']").value;
    const currency_id = document.querySelector("select[name='selectCurrencies']").value;
    console.log(user_id);
    console.log(currency_id);

    document.querySelector("#new-user-currency").reset();

    const response = await fetch(`/api/usercurrency`, {
        method: "POST",
        body: JSON.stringify({
            user_id,
            currency_id
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (response.ok) {
        document.location.replace("/portfolio");
    } else {
        alert(response.statusText);
    }
}

document
    .querySelector("#new-user-currency")
    .addEventListener("submit", addUserCurrencyHandler);