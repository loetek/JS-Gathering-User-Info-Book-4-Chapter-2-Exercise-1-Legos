Practice
Rather than the user typing in the name of the color each time, define another collection in your API named colors and let the user select a pre-defined color from a <select> element.

<select id="lego__color">
    <option value="1">Red</option>
    <option value="2">Green</option>
    <option value="3">Yellow</option>
    <option value="4">Blue</option>
    <option value="5">Orange</option>
    <option value="6">Black</option>
</select>
This will require you to refactor your lego API data structures by adding a new colors resource in the API.