const textInput = document.getElementById('text')
const playbtn= document.getElementById('playbtn')
const pausebtn = document.getElementById('pausebtn')
const stopbtn = document.getElementById('stopbtn')
const speedInput = document.getElementById('speed')
let currentCharacter 

playbtn.addEventListener('click', ()=>{
playtt(textInput.value)
})
pausebtn.addEventListener('click', pausett)
stopbtn.addEventListener('click', stoptt)
speedInput.addEventListener('input', ()=>{
    stoptt()
    playtt(utterance.text.substring(currentCharacter))
})



const utterance = new SpeechSynthesisUtterance()
   
    utterance.addEventListener('end', ()=>{
        textInput.disabled = false 
    })
    utterance.addEventListener('boundary', e => {
      currentCharacter = e.charIndex
    })
function playtt(text) {
    // body...
    if(speechSynthesis.paused && speechSynthesis.speaking){
        return speechSynthesis.resume()
    }
    if (speechSynthesis.speaking) return
    utterance.text = text
    utterance.rate = speedInput.value || 1
    textInput.disabled = true 
    speechSynthesis.speak(utterance) 
}

function pausett(pausebtn) {
    // body...
    if(speechSynthesis.speaking)speechSynthesis.pause()

}
function stoptt(){
    speechSynthesis.resume()
    speechSynthesis.cancel()
}