const btn = document.getElementById('#speech');
const SpeechRecognition = window.SpeechRecognition ||window.webkitSpeechRecognition
const recognition = new SpeechRecognition
let gretings = [
    "hello, How are you ? ",
    "What's up dog ?",
    "What's up ?",
    "Good day sir",
    "Please go away !"
]

recognition.onresult = function(event){
    console.log(event)
    const current = event.onresultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript
    output.textContent = transcript
    readOutLoud(transcript)
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

const readOutLoud = (message)=>{
    const speech = new SpeechSynthesisUtterance();
    speech.text = "I don't know what you are saying to me."

    if (message.includes('how are you ') || message.includes('hello') || message.includes('hi')){
        let finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText
    }

    speech.volume=2;
    speech.pitch=.05;
    speech.rate = 1;
    window.speechSynthesis.speak(speech)
}