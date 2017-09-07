# tsx-jsx

Demonstrates issues when building a hybrid JSX/TSX project with these components:
- Webpack
- ts-loader
- TypeScript 2.5.1
- React 15.6.1

### Current Findings

```shell
./node_modules/.bin/tsc   # Raw TypeScript compilation
```
- No errors (performs full type-checking on JSX and TSX)

```shell
yarn run build ./main.tsx # TypeScript entry file
```
- No errors (does not seem to type-check at all...)

```shell
yarn run build ./app.jsx  # JavaScript entry file
```
*Errors:* 

```shell
ERROR in ./index.tsx
(5,12): error TS2605: JSX element type 'Hello' is not a constructor function for JSX elements.
  Property 'setState' is missing in type 'Hello'.

ERROR in ./index.tsx
(5,12): error TS2607: JSX element class does not support attributes because it does not have a 'props' property.

ERROR in ./index.tsx
(10,26): error TS2339: Property 'props' does not exist on type 'FizzBuzz'.

ERROR in ./index.tsx
(16,26): error TS2339: Property 'props' does not exist on type 'HelloEnhanced'.
```

- Problem seems to be caused by the `--entryFileIsJs` option in ts-loader. 
