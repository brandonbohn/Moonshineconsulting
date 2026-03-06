declare module '*.css'

declare const process: {
	env: {
		REACT_APP_BLOG_API_BASE_URL?: string;
		REACT_APP_BLOG_API_ENDPOINT?: string;
		[key: string]: string | undefined;
	};
};
