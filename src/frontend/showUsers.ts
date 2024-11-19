declare const axios: any;

document.addEventListener("DOMContentLoaded", async () => {
    const result = await axios.get("http://localhost:3000/api/v1/users");
    let htmlUsers = "<ul>";
    result.data.forEach((user:any)=>{htmlUsers += `<li>${user.name} ${user.first_surname}</li>`});
    htmlUsers += "</ul>";
    document.getElementById("users")!.innerHTML = htmlUsers;
});

document.addEventListener("DOMContentLoaded", async () => {
    const result = await axios.get("http://localhost:3000/api/v1/events");
    let htmlEvents = "<ul>";
    result.data.forEach((event: any) => {
        htmlEvents += `<li>${event.eventName} (${event.eventType}) - ${event.location}, $${event.ticketPrice.toFixed(2)}</li>`;
    });
    htmlEvents += "</ul>";
    document.getElementById("events")!.innerHTML = htmlEvents;
});

