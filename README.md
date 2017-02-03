# SIMION .gem File Builder

SIMION 8.0 can make use external .gem files to define the geometry for Potential Arrays. The syntax is reasonably straight forward but does not lend itself to easy programmatic generation.

This tool aims to make creating .gem syntax more akin to modifying a HTML DOM.

## The Basics

The following
```JavaScript
// create a new geometry document
const geometry = new gem.Geometry()
// add pa_define, include and comment statements
geometry.paDefine(101,101,1,'planar','None','electrostatic', 1)
  .include('some-file')
  .comment('some comment')
// add an electrode
const e1 = geometry.append(new gem.Electrode(1))
// add a nested electrode
e1.append(new gem.Electrode(2))
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

## What about all the other elements?
Any other element can be added using the gem.Appendable class as follows:
```JavaScript
const anything = geometry.append(new gem.Appendable('anything',[arg1,[arg2,[argN]))
```
where the first argument of the constructor is the instruction syntax and any subsequent arguments are to appear in brackets after the instruction.

It is hoped that with future development, more elements can be added to simplify the usage of the library.
 
