async function newFormHandler(event) {
    event.preventDefault();

    const user_id = parseInt(document.querySelector('input[name="user_id"]').value);
    const currency_id = parseInt(document.querySelector('select[name="selectCurrencies"]').value);

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
    .querySelector(".new-user-currency")
    .addEventListener("submit", newFormHandler);