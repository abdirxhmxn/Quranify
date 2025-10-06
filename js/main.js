//api 1: http://api.alquran.cloud/v1/edition?format=audio&language=en&type=versebyverse
//api 2: https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-la/5.min.json
///                                                          editions/{editionName}/{ChapterNo}/{VerseNo}

document.querySelector('button').addEventListener('click', searchVerse)
document.querySelector('#play').addEventListener('click', play)
document.querySelector('#stop').addEventListener('click', stop)
const audio = document.querySelector('audio')

function stop() {
    audio.pause()
}
function play() {
    audio.play()
}
function searchVerse() {
    const surah = document.querySelector('h3')
    const verse = document.querySelector('#ayah')
    const translation = document.querySelector('p')

    const inputSurah = document.querySelector('#surah').value
    const inputVerse = document.querySelector('#verse').value
    const url = `https://api.alquran.cloud/v1/ayah/${inputSurah}:${inputVerse}/ar.alafasy?format=audio&language=en&type=versebyverse`
    const url2 = `https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-mustafakhattaba/${inputSurah}/${inputVerse}.min.json`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            surah.innerText = `${data.data.surah.name}`
            verse.innerText = `${data.data.text}`
            audio.src = data.data.audio
            fetch(url2)
                .then(res => res.json())
                .then(stuff => {
                    translation.innerText = `${stuff.text}`
                })
                .catch(err => {
                    console.log(`err ${err}`)
                })
        })
        .catch(err => {
            console.log(`err ${err}`)
        })
}

//