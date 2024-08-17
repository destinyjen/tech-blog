document.querySelector(".signup-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.querySelector("#email-signup").value;
    const password = document.querySelector("#password-signup").value;
    const name = document.querySelector("#name-signup").value;

    const response = await fetch("/api/users", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, name }),
    });
    const data = await response.json();
    if (data.error) {
        alert(data.error);
    } else {
        alert("Signup successful");
        window.location.href = "/";
    }
    });