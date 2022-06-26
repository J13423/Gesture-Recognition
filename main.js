Webcam.set({
    height: 300,
    width: 350,
    img_format: 'png',
    png_quality: 50
});
camera = document.getElementById('camera')
Webcam.attach('#camera')
let pridiction1
let pridiction2
function snapShot() {
    Webcam.snap((uri) => {
        document.querySelector('#result').innerHTML = `<img src='${uri}' id='capture'>`
    })
}
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/1iqjzYJBg/model.json', () => {
    console.log('loaded')
})

function speak() {
    let speaker = window.speechSynthesis
    p1 = `pridiction1 is ${pridiction1}`
    p2 = `pridiction2 is ${pridiction2}`
    say = new SpeechSynthesisUtterance()
    speaker.speak(say)
}