export function convert(fileInput, setDwnFunc, setErrorState) {
    // The saxonjs transform function
    // https://www.saxonica.com/saxon-js/documentation2/index.html#!api/transform
    SaxonJS.transform({
        stylesheetLocation: "cmme_to_mei.sef.json",
        sourceNode: fileInput.xml,
        destination: "serialized",
        outputProperties: {
            method: "xml",
            indent: true,
            encoding: "utf-8"
        }
    }, "async").then(e => {
        // Get the filename of the input file
        let filename = fileInput.file.name;
        // Get the starting index of the extensions
        let extIndex = filename.indexOf('.cmme.xml')
        // Remove the extension from the filename
        if (extIndex > -1){
            filename = filename.slice(0, extIndex);
        } else {
            filename = filename.split(".")[0];
        }
        // Add the mei extension to the filename
        filename = filename + ".mei"
        // Create a file object with the converted data
        let file = new File([e.principalResult],
            filename, { type: 'text/xml' }
        )
        // Create a url to the file object
        let url = URL.createObjectURL(file)
        // Store the filename and the file url in the 
        // fileDownload variable in the container component 
        setDwnFunc({name: file.name, url:url});
    // If there is an error in the conversion process
    }).catch(e => {
        // Set the error variables in the container component
        setErrorState(e, "transformation")
    });
}
