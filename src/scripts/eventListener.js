

// This is the eventlistener that will create new variables that are the input fields it collects the information and sets it equal to objects that we are adding to the .json.

const eventListener = {
    handleSubmissionForm () {
     const creator = document.querySelector("#lego__creator").value;
     const color = document.querySelector("#lego__color").value;
     const shape = document.querySelector("#lego__shape").value;
     const creation = document.querySelector("#lego__creation").value;

     const legoObject = {
        creatorName:creator, 
        legoName:creation,
        legoShape:shape 
     };   

     const legoColor = {

        legoColor:color
        

     };

    //  console.log ("legoSave", legoSave)

    //Post to API\
    data.postLego(legoObject);
    data.postColor(legoColor);
    
    }    
};

            