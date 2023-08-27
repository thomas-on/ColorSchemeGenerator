import { renderSchemeSelection, clearRender, copyToClipboard } from '/utils.js'

renderSchemeSelection()

let selectedColor = document.getElementById("color-input").value.slice(1)
let colorSchemeMode = document.getElementById("scheme-select").value

const seedColor = document.getElementById("color-input")
const modeSelected = document.getElementById("scheme-select")
const getColorScheme = document.getElementById("button-get")
const colorsPallete = document.getElementById("colors-pallete")

seedColor.addEventListener("change", function(e) {
    selectedColor = e.target.value.slice(1)
    //console.log(selectedColor)
}) 

modeSelected.addEventListener("change", function(e) {
    colorSchemeMode = e.target.value
    //console.log(colorSchemeMode)
})

getColorScheme.addEventListener("click", function() {
    clearRender()
    fetch("https://www.thecolorapi.com/scheme?hex="+selectedColor+"&format=json&mode="+colorSchemeMode.toLowerCase())
        .then(res => res.json())
        .then(data => {
            for (let color of data.colors){
                // console.log(color.hex.value)
                // console.log(color.image.bare)
                renderColorImage(color.image.bare)
                renderColorHexValue(color.hex.value, color.name.value)
            }
        })
})

colorsPallete.addEventListener("click", function(e) {
    copyToClipboard(e.target.src)
})

function renderColorImage(colorImageUrl) {
    //console.log(colorImageUrl)
    document.getElementById("colors-pallete").innerHTML += `
        <img src="${colorImageUrl}" id="color-image">
        `
}

function renderColorHexValue(colorHexValue, colorName) {
    document.getElementById("color-hex").innerHTML += `
        <div id="color-description">
            <p>${colorName}</p>
            <p>${colorHexValue}</p>
        </div>
        `
}
