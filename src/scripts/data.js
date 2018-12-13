
const data = {
    postLego (legoShapeSave) {

        fetch("http://localhost:8088/legos", { // Replace "url" with your API's URL
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(legoShapeSave)
    });
    },
    postColor (legoColorSave) {

        fetch("http://localhost:8088/colors", { // Replace "url" with your API's URL
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(legoColorSave)

    });
}
};
