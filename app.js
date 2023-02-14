const checkEle = document.getElementById("checkbox")
const billsEle = document.querySelectorAll(".bill")

checkEle.addEventListener("change", (e) => {
  const monthlyPlans = ['$19.99', '$24.99', '$39.99']
  const annuallyPlans = ['$199.99', '$249.99', '$399.99']

  if (e.target.checked) {
    for (let i = 0; i < billsEle.length; i++) {
      billsEle[i].innerText = monthlyPlans[i]
    }
  }
  else {
    for (let i = 0; i < billsEle.length; i++) {
      billsEle[i].innerText = annuallyPlans[i]
    }
  }
})