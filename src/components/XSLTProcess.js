export function convert(fileInput, setDwnFunc) {
    SaxonJS.transform({
        stylesheetLocation: "/cmme_to_mei.sef.json",
        sourceNode: fileInput.xml,
        destination: "serialized",
        outputProperties: {
            method: "xml",
            indent: true,
            encoding: "utf-8"
        }
    }, "async").then(e => {
        let filename = fileInput.file.name;
        let extIndex = filename.indexOf('.cmme.xml')
        if (extIndex > -1){
            filename = filename.slice(0, extIndex);
        } else {
            filename = filename.split(".")[0];
        }
        filename = filename + ".mei"
        let file = new File([e.principalResult],
            filename, { type: 'text/xml' }
        )
        let url = URL.createObjectURL(file)

        setDwnFunc({name: file.name, url:url});
    });
}