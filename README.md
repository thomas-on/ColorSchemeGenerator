# Color Scheme Generator

Users pick a color and select a scheme to generate colors based on selected scheme and color.

Below is summary of how this web application was developed:
### Choose "seed color"
- The color picker is a built-in HTML element with a type of color
- Looking into the input type of color will bring out the browser's default color picker
	- [ HTML input type="color"](https://www.w3schools.com/tags/att_input_type_color.asp#:~:text=The%20%3Cinput%20type%3D%22color,is%20%23000000%20(black))
- Choosing a particular color will create a seed color

### Interacting The Color API
- Send the seed color together with the color scheme mode to the API
- Clicking on the [GET a generated scheme for the provided seed color](https://www.thecolorapi.com/docs#schemes-generate-scheme-get)
- API returns a number of hex values which represent the colors in your new scheme 

### Display the scheme colors and hex values on the page

### Copy to clipboard when the hex value of the particular color scheme clicked