# rollico
Rollico mission is to define a set of base styles on top of [normalizer](https://github.com/necolas/normalize.css)
to set default styles for project(s). It allows you to create opinionated
defaults, saving you from redefining those on every project. This becomes
particularly handy when creating react components, since you can import these
styles and only define the rules that override these ones inside the component.
Later you can import rollico in the app you will be using the components and
it will give you the same defaults.

It also allows you to define things like colors and sizes in just one place,
those are used to build rollico and are also available in other projects  

You can build rollico and publish to npm and it will give you two files:  
- **rollico.css** contains our default styles for standard html elements (also
  includes normalizer.css)
- **variables.js** extracted from rollico.css (or to be more exact from their
  source files) contains colors, spacing, typography... variables that we can
  reuse later in our components

We can later in our apps import 'rollico.css' and in our components just
variables.js, we can also use rollico.css during components development to see
which css attributes we need to override locally in a component.

## How to use:

1. Install rollico using yarn `yarn add @resmio/rollico` or `npm install @resmio/rollico`  
2. To use the styles you have two options:  

  A. If your are using css in javascript, import it in the Javascript entry point for your app or module `import @resmio/rollico`. This is
  the recommended way. 🤓  

  B. You can put it in your html head using the path to your `node_modules/@resmio/rollico/dist/rollico.css`. This can be tricky to find depending on your build process. We are planning to upload the css somewhere so you don't have to use npm or yarn to be able to get the benefits of rollico base styles.  
3. To use the variables in your javascript you can do `import {colors} from '@resmio/rollico/dist'` then you can use it in the form `colors[colorName]`. You can look at the colors available [here](https://resmio.github.io/rollico/)  

## How to build:
Rollico tries to be as simple as possible so you need to run
`yarn run build:css` yourself to generate the build.

## How to commit & publish:  
Rollico uses [angular commit guidelines](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines) and [commitizen](https://github.com/commitizen/cz-cli) so the commit process is a little different:  
  1. Add your changes to the staging area.  
  2. Instead of doing `git commit` do `yarn run commit`
  3. Answer the questions on the terminal.  
  4. `git push`
  5. Create the pull request on github  
  6. After your branch is merged to master, the new version will be automatically published to [npmjs](https://www.npmjs.com/@resmio/rollico)

*About Normalizr version: Due to some [disagreements between maintainers](https://github.com/necolas/normalize.css/issues/664)
we are sticking to v5 until the waters are clear.*
