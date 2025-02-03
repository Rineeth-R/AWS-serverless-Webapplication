const form = document.querySelector("form");
const message = document.querySelector("#message");
const nameInput = document.querySelector("#username");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = nameInput.value.trim();
    message.textContent = name ? `Welcome, ${name}!` : "Welcome, guest!";
});

const visitorCount = document.querySelector(".visitor-count");

async function fetchVisitorCount() {
    try {
        const response = await fetch(
            "https://o73g5ptpujgtclinhzhhneplje0jogoh.lambda-url.us-east-1.on.aws/"
        );
        const data = await response.json();
        visitorCount.textContent = `Total Visitors: ${data}`;
    } catch (error) {
        console.error("Could not retrieve visitor data:", error);
        visitorCount.textContent = "Total Visitors: N/A";
    }
}

fetchVisitorCount();
