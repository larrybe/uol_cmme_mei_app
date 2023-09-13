/**
 * Handles uploading the file using drag and drop
 * @param {Function} setFileInput 
 * @param {Function} clr The clearDownload function in the ContainerComp
 * @param {Function} setErrorState 
 * @param {Event} e The drop event 
 * @returns false
 */
export function handleDrop(setFileInput, clr, setErrorState, e){
    let files = e.dataTransfer.files;
    // If no file is dropped, exit the function
    if (files.length < 1){
        return false;
    }
    // Store the first file in the event
    let f = files[0];
    // Remove any previous value in the fileInput variable
    clr();
    // If file type is invalue then set error and exit the function
    if (!verifyType(f)){
        setFileInput(false);
        setErrorState(f.name, "filetype");
        return false;
    }
    // If file type is valid,
    // remove the values in the errorState and errorType variables
    setErrorState(false, false);
    // parse the value using the xmlReader function
    xmlReader(f, setFileInput)
}


/**
 * Handles uploading the file using the dialog box
 * @param {Function} setFileInput 
 * @param {Function} clr The clearDownload function in the ContainerComp
 * @param {Function} setErrorState 
 * @param {Event} e The upload event 
 * @returns false
 */
export function handleFileInput(setFileInput, clr, setErrorState, e){
    let files = e.target.files;
    // Exit the function if dialog closes with no file uploaded
    if (files.length < 1){
        return false;
    }
    // Store the first file in the target
    let f = files[0];
    // Clear the fileInput variable
    clr();
    // If the filetype is invalid, set the errorState and exit the function
    if (!verifyType(f)){
        setFileInput(false);
        setErrorState(f.name, "filetype");
        return false;
    }
    // If the filetype is valid, set the error variables to false
    setErrorState(false, false);
    // Then parse the contents of the file with the xmlReader function 
    xmlReader(f, setFileInput)
}

/**
 * Verifies that the uploaded file has the ".cmme.xml" extension
 * @param {String} file 
 * @returns {bool} true/false
 */
function verifyType(file){
    // If the file has the '.cmme.xml' extension
    if (file.name.indexOf(".cmme.xml") > -1){
        // return 'true'
        return true;
    }
    // otherwise return 'false'
    return false;
}

/**
 * parses the file and store the contents as an XMLDocument
 * @param {File} f 
 * @param {*} setFileInput 
 */
function xmlReader(f, setFileInput) {
    // Create a file reader object
    let reader = new FileReader();
    // If the file is read
    reader.onload = function (e) {
        // Store the contents of the file
        let readXML = e.target.result;
        // Create a DOMParser which has the ability to parse XML
        const parser = new DOMParser();
        // Parse and store the contents of the file as XML
        const doc = parser.parseFromString(readXML, "application/xml");
        // Set the fileInput variable with the file and the parsed xml value
        setFileInput({file:f, xml:doc});
    }
    // Read the uploaded file content with the file reader object
    reader.readAsText(f)
}
