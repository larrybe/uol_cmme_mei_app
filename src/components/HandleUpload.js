// Handles input using drag and drop
export function handleDrop(setVal, clr, err, e){
    let files = e.dataTransfer.files;
    if (files.length < 1){
        return false;
    }
    let f = files[0];
    clr();
    if (!verifyType(f)){
        setVal(false);
        err(f.name, "filetype");
        return false;
    }
    err(false, false);
    xmlReader(f, setVal)
}

// Handles input using the dialog box
export function handleFileInput(setVal, clr, err, e){
    let files = e.target.files;
    if (files.length < 1){
        return false;
    }
    let f = files[0];
    clr();
    if (!verifyType(f)){
        setVal(false);
        err(f.name, "filetype");
        return false;
    }
    err(false, false);
    xmlReader(f, setVal)
}

function verifyType(file){
    if (file.name.indexOf(".cmme.xml") > -1){
        return true;
    }
    return false;
}

// Reads the file and store the contents as an XMLDocument
function xmlReader(f, setVal) {
    let reader = new FileReader();

    reader.onload = function (e) {
        let readXML = e.target.result;
        const parser = new DOMParser();
        const doc = parser.parseFromString(readXML, "application/xml");
        setVal({file:f, xml:doc});
    }
    reader.readAsText(f)
}