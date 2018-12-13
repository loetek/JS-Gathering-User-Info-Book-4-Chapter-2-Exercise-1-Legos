
const domBuilder = {

    appendInputForm() {
        
        let inputForm = `<article>  
        <fieldset class = legoContainer>
        <label for = "lego__creator"> Creator: </label> 
        <input id = "lego__creator" name = "lego__creator" type ="text" autofocus /> 
        <label for = "lego__color"> Color: </label> 
        <select id="lego__color">
            <option value="Red">Red</option>
            <option value="Green">Green</option>
            <option value="Yellow">Yellow</option>
            <option value="Blue">Blue</option>
            <option value="Orange">Orange</option>
            <option value="Black">Black</option>
        </select>
        <label for = "lego__shape"> Shape: </label> 
        <input id = "lego__shape" name = "lego__shape" type ="text" autofocus />
        <label for = "lego__creation"> Creation: </label> 
        <input id = "lego__creation" name = "lego__creation" type ="text" autofocus />
        </fieldset>
        <button class="btn--lego__save">Save Lego Creation</button>
        </article>`;

        let displayContainer =document.querySelector("#display-container");
        displayContainer.innerHTML = inputForm;
    }

};



