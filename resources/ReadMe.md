# How to create the .json file of the metamodel.

As explained at [this blog](https://modularmoose.org/moose-wiki/Developers/Fame.html#export), one can export a metamodel from Famix:

```smalltalk
'FamixTypeScriptMM.json' asFileReference writeStreamDo:
    [ :writeStream | FamixTypeScriptModel metamodel exportOn: writeStream usingPrinter: FMJSONPrinter ]
```

