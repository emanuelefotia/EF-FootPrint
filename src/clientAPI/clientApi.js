export function fetchFlightFootprints() {
  fetch("https://beta3.api.climatiq.io/travel/flights", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + "MW0ATCXEPSMFXNHTFTX65FCCHQ55",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      legs: [
        {
          from: this.from.iata_code,
          to: this.to.iata_code,
          passengers: this.passengers,
          class: this.class,
        },
      ],
    }),
  })
    .then((response) => response.json())
    .then((data) => (this.results = data));
}
