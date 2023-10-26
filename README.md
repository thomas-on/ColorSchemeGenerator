Color Scheme Generator
The HTML structure
The body has a flattened HTML structure consisting of input elements for color and scheme mode selection, and a get color scheme button.
The returned results from the color API are rendered in div container.

The CSS rules
Both the selection menu at the top and the section displaying the images and labels are displayed as flexbox (default row).

The JavaScript functionalities
Event Listener for color inputs
This event listens to a color change, and upon sensing a change, grabs the color's hex value and stores it.

Event Listener for mode selection
This event listens to a color scheme mode change, and upon sensing a change, grabs the color's scheme mode and stores it.

Get Color Scheme button
An event listener that listens to user clicking action. A click action would fetch JSON data from the API and parse into JavaScript.
It will then iterate over the JSON data to retrieve color image url, hex value and color name, which will be used as parameters for the functions renderColorImage and renderColorHexValue.

Utility function - Renders Color Scheme Mode
The color scheme modes were stored in a data file and a function was created to capitalise the first letter and renders it to the DOM.

Utility function - Extract Hex Value
Takes in the full URL string and extracts the hex value substring.

Utility function - Copy to Clipboard
Received the extracted hex value and write it the clipboard using the clipboard navigator API.

Utility function - Captalise first letter of a string
Takes in the string of lower case letters and returns the string with the first letter capitalised.

Utility function - Clear the DOM
Renders a empty DOM to the page.

To view the app on the web, check out the Netlify App Deployment
