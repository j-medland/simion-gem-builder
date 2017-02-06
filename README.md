# SIMION .gem File Builder

[SIMION](http://simion.com) 8.0 can make use external .gem files to define the geometry for Potential Arrays. The syntax is reasonably straight forward but does not lend itself to easy programmatic generation.

This tool aims to make creating .gem syntax more akin to modifying a HTML DOM.

## Installation
`npm install --save simion-gem-builder`


## The Basics

The following
```JavaScript
// require
const gem = require('simion-gem-builder')
// create a new geometry document
const geometry = gem.geometry()
// add pa_define, include and comment statements
geometry.paDefine(101,101,1,'planar','None','electrostatic', 1)
  .include('some-file')
  .comment('some comment')
// add an electrode
const e1 = geometry.append(gem.electrode(1))
// add a nested electrode
e1.append(gem.electrode(2))
// render the document
console.log(geometry.render())
```
yields the output
```
pa_define(101,101,1,planar,None,electrostatic,1)
include(some-file)
; some comment
electrode(1)
{
   electrode(2)
}
```
## API Notes
Methods can generally be chained but care should be taken with the `.append()` method which returns the  child element that was appended instead of the parent element.

The `.render()` method returns a String which is pretty formatted by default. The spacing can be reduced by specifying the padding character using `.render('')`.

## What about all the other elements?
Any other element can be added using the gem.Appendable class as follows:
```JavaScript
const anything = geometry.append(gem.element('anything'[,arg1 [,arg2 [,argN]))
```
where the first argument of the constructor is the instruction syntax and any subsequent arguments will appear in brackets after the instruction.

It is hoped that with future development, more elements can be added to simplify the usage of the library.
