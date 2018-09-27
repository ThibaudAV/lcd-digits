# BEEBUZZINESS - Test Technique

## Work required @BastienGuillard

```
Affichage sur écran LCD

On te propose de faire un petit exercice de code from scratch.

Ta mission est de créer la logique pour afficher des numéros sur un écran LCD. Cet écran dispose d’un grid de 3x3, chaque case peut contenir une espace, un tiret bas, ou un pipe.

Par exemple (ici en utilisant un point à la place d’espace)

._.   ...   ._.   ._.   ...   ._.   ._.   ._.   ._.   ._.

|.|   ..|   ._|   ._|   |_|   |_.   |_.   ..|   |_|   |_|

|_|   ..|   |_.   ._|   ..|   ._|   |_|   ..|   |_|   ..|

Exemple: 910

._. ... ._.

|_| ..| |.|

..| ..| |_|

Un programme en ligne de commandes permettra d’exécuter le résultat de ton travail.
```

## Prerequesites

You must have yarn locally installed. You can installed it with `brew install yarn --without-node` (for Mac's friends :p)

Once you have Yarn do a `yarn install`

## Development

To display a number in LCD digits in the console, use : `yarn start [Your number [0-9]+]`  
Exemple : `yarn start 1234567890`

### Running unit tests

Run `yarn test` to execute the unit tests via Jest.  
Run `yarn test:watch` to watch files for changes and rerun tests related to changed files.  
Run `yarn test:cov` to see the code coverage.

### Lint

Run `yarn lint` to execute tslint.  
Run `yarn lint:prettier` to execute prettier.  
Run `yarn lint:prettier:fix` to execute prettier with auto fix.

### Validate

To validate all the project use this `yarn validate`

## Build

Run `yarn build` to compile the project. Then you can use node to execute the compiled javascript : `node dist 666`
