const adviceNumberElement = document.getElementById('advice-id');
const adviceTextElement = document.getElementById('advice-text');
const adviceGeneratorBtn = document.getElementById('advice-generator-btn');
adviceGeneratorBtn.addEventListener('click', generateAdvice);

async function generateAdvice() {
    console.log('ciao')
    const response = await fetch('https://api.adviceslip.com/advice');
    if (response.ok) {
        const advice = await response.json();
        const {slip} = advice;
        adviceNumberElement.innerText = slip.id
        adviceTextElement.innerText = slip.advice
    }
}

generateAdvice()
