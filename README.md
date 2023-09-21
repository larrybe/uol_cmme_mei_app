# CMME to MEI File Converter

An application to convert a [CMME](https://cmme.org/) XML file to the [MEI](https://music-encoding.org/) format.

Final project for the University of London [BSc Computer Science](https://www.london.ac.uk/courses/computer-science) programme.

## Application
The application is available [here](https://larrybe.github.io/cmme_mei/). 

It is a web app where a CMME XML file can be uploaded for conversion to MEI. It uses [Saxon-js](https://www.saxonica.com/saxon-js/index.xml) as the XSLT 3.0 processor. If you wish to use a different processor, the XSL file can found under the next heading.

## XSL File

The XSL file used in the conversion is avaliable in the xslt [directory](https://github.com/larrybe/uol_cmme_mei_app/tree/master/xslt) or at the [repository](https://github.com/larrybe/uol_cmme_mei_xsl).


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile the XSL into an SEF file

If the XSL file is updated it must be recompiled into an XSL file which is done using the command below.

```sh
npm run xslt
```

### Compile and Minify for Production

```sh
npm run build
```
