# rollico
resmio base styles

This is just a proof of concept to see how it could work.

The idea is to have two files here that we can publish in npm and import in our
apps:
- **rollico.css** contains our default styles for standard html elements (also
  includes normalizer.css)
- **variables.js** extracted from rollico.css (or to be more exact from their
  source files) contains colors, spacing, typography... variables that we can
  reuse later in our components

We can later in our apps import 'rollico.css' and in our components just
variables.js, we can also use rollico.css during components development to see
wich css attributes we need to override locally in a component.

I'm just putting manually build files there to see if it works, but later we
want to make this compile rollico.css from several files and auto extract the
variable values into variables.js

-TO DO: Add note about `npm install -g commitizen`
https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines
