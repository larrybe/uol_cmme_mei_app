# CMME to MEI File Converter

An application to convert a [CMME](https://cmme.org/) XML file to the [MEI](https://music-encoding.org/) format.

Final project for the University of London [BSc Computer Science](https://www.london.ac.uk/courses/computer-science) programme.

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

```sh
npm run xslt
```

### Compile and Minify for Production

```sh
npm run build
```
