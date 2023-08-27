import { colorSchemeModeArray } from '/data.js'
//console.log(colorSchemeModeArray)

const schemeSelect = document.getElementById("scheme-select")

function renderSchemeSelection() {
    for(let scheme of colorSchemeModeArray) {
        scheme = capitaliseWord(scheme)
        schemeSelect.innerHTML += `
            <option>${scheme}</option>
            `
    }
}

function capitaliseWord(word) {
    let wordLower = word.toLowerCase()
    return wordLower.charAt(0).toUpperCase() + 
        wordLower.slice(1)
}

function clearRender() {
    document.getElementById("colors-pallete").innerHTML = ``
    document.getElementById("color-hex").innerHTML = ``
}

function extractHexValue(clickedUrl) {
    // returns the right substring portion and ensures its length is 6
    return "#"+clickedUrl.split('hex=')[1].substring(0,6); 
    //console.log(lastPart);
}

function copyToClipboard(clickedUrl) {
    let hexValue = extractHexValue(clickedUrl)
    navigator.clipboard
      .writeText(hexValue)
      .then(() => {
        alert("Hex value successfully copied!");
      })
      .catch(() => {
        alert("Oops, something went wrong!");
      });
}

export { renderSchemeSelection,  clearRender, copyToClipboard }
