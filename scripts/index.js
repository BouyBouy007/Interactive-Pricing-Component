const slider = document.querySelector('.slider');
const yearlyBillingButton = document.querySelector('.checkbox');

let billingValue = document.querySelector('.billing-value');
let billingValueTwo = document.querySelector('.billing-value-two');
let viewValue = document.querySelector('.pageview-value');

let isMonthly = true;

let viewArray = [];
for (let i = 0; i <= 32; i++) {
  viewArray.push(`${i * 6.25}K`);
}

sliderEvent();
buttonEvent();

function sliderEvent() {
  slider.addEventListener('input', () => {
    updateCost();
  
    slider.style.background = 
    `linear-gradient(to right,
      var(--soft-cyan) 0%,
      var(--soft-cyan) ${slider.value * 3}%,
      var(--light-grayish-blue-slider) 0%,
      var(--light-grayish-blue-slider) 100%)
      `;
  });
}

function buttonEvent() {
  yearlyBillingButton.addEventListener('click', () => {
    if (isMonthly === true) {
      isMonthly = false;
    } else {
      isMonthly = true;
    }
  
    updateCost();
  });
}

function updateCost() {
  if (isMonthly === true) {
    billingValue.innerHTML = Number(slider.value).toFixed(2);
    billingValueTwo.innerHTML = Number(slider.value).toFixed(2);
    viewValue.innerHTML = viewArray[slider.value];
  } else if (isMonthly === false) {
    billingValue.innerHTML = (Number(slider.value) * 0.75).toFixed(2);
    billingValueTwo.innerHTML = (Number(slider.value) * 0.75).toFixed(2);
    viewValue.innerHTML = viewArray[slider.value];
  }
}