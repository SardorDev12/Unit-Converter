const input = document.querySelector(".input");
const submitBtn = document.querySelector(".submitBtn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //   input
  document.querySelector(".thisMeter").textContent = input.value;
  document.querySelector(".thisFeet").textContent = input.value;
  document.querySelector(".thisLiters").textContent = input.value;
  document.querySelector(".thisGalloons").textContent = input.value;
  document.querySelector(".thisKilos").textContent = input.value;
  document.querySelector(".thisPounds").textContent = input.value;

  //   conversion result
  const meterToFeet = input.value * 3.281;
  const feetToMeter = input.value / 3.281;
  const literToGalloons = input.value * 0.2641722;
  const galloonsToLiters = input.value / 0.2641722;
  const kilosToPounds = input.value * 2.205;
  const poundToKilos = input.value / 2.205;

  //   conversion result rendering
  document.querySelector(".feet").textContent = `${meterToFeet.toFixed(3)} `;
  document.querySelector(".meter").textContent = `${feetToMeter.toFixed(3)} `;
  document.querySelector(".galloons").textContent = `${literToGalloons.toFixed(
    3
  )} `;
  document.querySelector(".liters").textContent = `${galloonsToLiters.toFixed(
    3
  )} `;
  document.querySelector(".pounds").textContent = `${kilosToPounds.toFixed(
    3
  )} `;
  document.querySelector(".kilos").textContent = `${poundToKilos.toFixed(3)} `;
});
