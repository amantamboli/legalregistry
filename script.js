document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    let targetElement = document.querySelector(this.getAttribute('href'));
    let offset = 50; // Set the additional offset
    let offsetPosition = targetElement.offsetTop - offset;
    let uncheckNav = document.getElementById('check')
    if (uncheckNav.checked) {
      // Uncheck the checkbox
      uncheckNav.checked = false;
      ulElement.style.left = '-100%';
      menubar.classList.add('fa-bars');
    menubar.classList.remove('fa-xmark');
    }

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});

let check = document.getElementById('check');
let ulElement = document.querySelector('nav ul');
let menubar = document.querySelector('label i');
check.addEventListener('change', function() {
  // Check if the checkbox is checked
  if (check.checked) {
    // If checked, set the left property to 0
    ulElement.style.left = '0';
    menubar.classList.remove('fa-bars');
    menubar.classList.add('fa-xmark');
    
  } else {
    // If not checked, set the left property to -100%
    ulElement.style.left = '-100%';
    menubar.classList.add('fa-bars');
    menubar.classList.remove('fa-xmark');
  }
});
const carousel = document.querySelector('.carousel');
const dots = document.querySelectorAll('.dot');
const carouselContent = document.querySelector('.carousel-content')

let currentIndex = 0;
updateDots(currentIndex)
function showSlide(index) {
  const newPosition = -index * 100 + '%';
  carousel.style.transform = 'translateX(' + newPosition + ')';
  updateDots(index);
}

function updateDots(index) {
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function goToSlide(index) {
  currentIndex = index;
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % 3;
  updateDots(currentIndex);
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + 3) % 3;
  showSlide(currentIndex);
}

setInterval(nextSlide, 5000); // Auto-advance every 3 seconds




document.addEventListener('DOMContentLoaded', function () {
  const animatedNumbers = document.querySelectorAll('.animated-number');

  animatedNumbers.forEach((element) => {
    const finalNumber = parseInt(element.getAttribute('data-number'), 10);
    animateNumber(element, finalNumber);
  });

  function animateNumber(element, finalNumber) {
    let currentNumber = 0;
    const animationDuration = 5000; // Adjust the duration as needed
    const updateInterval = 20;
    const increment = finalNumber / (animationDuration / updateInterval);

    const update = setInterval(() => {
      currentNumber += increment;
      if (currentNumber >= finalNumber) {
        currentNumber = finalNumber;
        clearInterval(update);
      }
      element.textContent = Math.round(currentNumber);
    }, updateInterval);
  }
});



function costCalculate() {
  let months = parseFloat(document.getElementById('months').value)
  let montlyrent = parseFloat(document.getElementById('montlyrent').value)
  let deposite = parseFloat(document.getElementById('deposite').value)
  let propertytype = document.getElementById('property-type').value

  let stampDutyCost = Math.round(parseInt((((montlyrent * months) + deposite * 0.1) * 0.25) / 100))
  console.log(Math.round(parseInt(stampDutyCost)))

  let tableMonths = document.getElementById('tableMonths')
  let tablePropertyType = document.getElementById('tablePropertyType')
  let tableRent = document.getElementById('tableRent')
  let tableDeposite = document.getElementById('tableDeposite')
  let stampDuty = document.getElementById('stampDuty')
  let totalGovCharges = document.getElementById('totalGovCharges')
  let subTotal = document.getElementById('subTotal')
  let stampDutyMonth = document.getElementById('stampDutyMonth')
  let govRegistration = document.getElementById('govRegistration')
  let DHCChargest = document.getElementById('DHCCharges')
  let ourCharges = document.getElementById('ourCharges')
  let Discount = document.getElementById('Discount')
  let govCharges = 1000
  let legalGregistryCharges = 1000
  let DHCCharges = 300
  let totalDiscount = 200
  if((months && deposite && montlyrent)){
  govRegistration.innerText = isNaN(govCharges) ? 0 : govCharges
  DHCChargest.innerText = isNaN(DHCCharges) ? 0 : DHCCharges
  ourCharges.innerText = isNaN(legalGregistryCharges) ? 0 : legalGregistryCharges
  Discount.innerText = isNaN(totalDiscount) ? 0 : totalDiscount
  }
  else{
    govRegistration.innerText = 0
    DHCChargest.innerText = 0
    ourCharges.innerText = 0
    Discount.innerText = 0
  }
  tableMonths.innerText = isNaN(months) ? 0 : months
  tablePropertyType.innerText = propertytype
  tableRent.innerText = isNaN(montlyrent) ? 0 : montlyrent
  tableDeposite.innerText = isNaN(deposite) ? 0 : deposite
  stampDuty.innerText = isNaN(stampDutyCost) ? 0 : stampDutyCost
  totalGovCharges.innerText = isNaN(stampDutyCost + govCharges + DHCCharges) ? 0 : (stampDutyCost + govCharges + DHCCharges) //stampDutyCost + govCharges 
  subTotal.innerHTML = isNaN(stampDutyCost + govCharges + legalGregistryCharges + DHCCharges -totalDiscount) ? 0 : (stampDutyCost + govCharges + legalGregistryCharges + DHCCharges -totalDiscount) //stampDutyCost + govCharges + legalGregistryCharges

}
document.getElementById('months').addEventListener('input', costCalculate)
document.getElementById('montlyrent').addEventListener('input', costCalculate)
document.getElementById('deposite').addEventListener('input', costCalculate)
document.getElementById('property-type').addEventListener('input', costCalculate)




function submitForm() {
      
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phonenumber').value;
  var message = document.getElementById('Query').value;
console.log(name)
  var output = document.getElementById('output');
  output.innerHTML = "<h2>Submitted Data:</h2>" +
    "<p><strong>Name:</strong> " + name + "</p>" +
    "<p><strong>Email:</strong> " + email + "</p>" +
    "<p><strong>Phone:</strong> " + phone + "</p>" +
    "<p><strong>Message:</strong> " + message + "</p>";
}
document.getElementById('submitButton').addEventListener('click', function (event) {
  event.preventDefault()
  submitForm(); // Call your submitForm function
});