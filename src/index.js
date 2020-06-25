import React, { PureComponent, useState } from 'react';

class ErrorBoundary extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			hasError: false
		};
	}

	static getDerivedStateFromError(error) {
		return {
			hasError: true
		};
	}

	componentDidCatch(error, errorInfo) {
		this.props.onDidCatch(error, errorInfo);
	}

	render() {
		if (this.state.hasError) return null;
		return this.props?.children;
	}
}

const useErrorBoundary = () => {
	const [hasError, setHasError] = useState(false);
	const [error, setError] = useState(null);
	const [errorInfo, setErrorInfo] = useState(null);

	const onDidCatch = (error, errorInfo) => {
		setHasError(true);
		setError(error);
		setErrorInfo(errorInfo);
	};

	const Try = props => !hasError ? <ErrorBoundary onDidCatch={onDidCatch} {...props} /> : null;
	const Catch = props => hasError ? props?.children : null;

	return [
		Try,
		Catch,
		{
			hasError,
			error,
			errorInfo
		}
	]
};

export default useErrorBoundary;
