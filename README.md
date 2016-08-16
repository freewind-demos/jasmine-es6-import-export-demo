Jasmine with Import/Export Demo
===============================

Run specs which contains ES6 import/export syntax.

```
npm install -g jasmine
npm install
```

Then:

```
jasmine
```

How to add to your project
--------------------------

```
npm install --save-dev babel-register
npm install --save-dev babel-preset-es2015
```

```
echo '{ "presets": ["es2015"] }' >> .babelrc
```

Add to `spec/support/jasmine.json` `helpers`:

```
"../node_modules/babel-register/lib/node.js"
```

