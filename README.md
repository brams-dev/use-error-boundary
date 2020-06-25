# use-error-boundary-hook

[![npm version](https://img.shields.io/npm/v/use-error-boundary.svg)](https://www.npmjs.com/package/use-error-boundary)
![license](https://img.shields.io/npm/l/use-error-boundary.svg)


A React hook that allows you to use an error boundary in functional components.

### Install

```bash
npm i use-errour-boundary-hook
```

## Example

```js
import useErrorBoundary from 'use-error-boundary-hook';

function MyComponent(props) {
	const [Try, Catch] = useErrorBoundary();

	return (
		<Try>
			This is my content.
		</Try>
		<Catch>
			Fallback content!
		</Catch>
	);
}

```

The hook returns more than just the `Try` and `Catch` component:
```js
const [Try, Catch, { hasError, error, errorInfo }] = useErrorBoundary();
```

| Property   | Type                  |                                                                  |
| ---------- | --------------------- | ---------------------------------------------------------------- |
| `hasError` | Boolean               | `true` if an error has been caught                               |
| error      | ErrorObject or `null` | See [React Docs](https://reactjs.org/docs/error-boundaries.html) |
| errorInfo  | Object or `null`      | See [React Docs](https://reactjs.org/docs/error-boundaries.html) |
