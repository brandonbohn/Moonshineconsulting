import { useEffect, useState } from "react";

export type WebsiteContent = Record<string, any>;

const API_ORIGIN = "https://moonshineconsultingbackend.onrender.com";
const WEBSITE_CONTENT_API_URL = `${API_ORIGIN}/api/website-content`;

let cachedWebsiteContent: WebsiteContent | null = null;
let inFlightWebsiteContentRequest: Promise<WebsiteContent | null> | null = null;

const fetchWebsiteContentFromApi = async (): Promise<WebsiteContent | null> => {
	if (cachedWebsiteContent) {
		return cachedWebsiteContent;
	}

	if (inFlightWebsiteContentRequest) {
		return inFlightWebsiteContentRequest;
	}

	inFlightWebsiteContentRequest = (async () => {
		try {
			const response = await fetch(WEBSITE_CONTENT_API_URL);
			if (!response.ok) {
				return null;
			}

			const payload = (await response.json()) as WebsiteContent;
			if (!payload || typeof payload !== "object") {
				return null;
			}

			cachedWebsiteContent = payload;
			return payload;
		} catch {
			return null;
		} finally {
			inFlightWebsiteContentRequest = null;
		}
	})();

	return inFlightWebsiteContentRequest;
};

export const useWebsiteContent = (): WebsiteContent | null => {
	const [content, setContent] = useState<WebsiteContent | null>(cachedWebsiteContent);

	useEffect(() => {
		let isMounted = true;

		const loadWebsiteContent = async () => {
			const liveContent = await fetchWebsiteContentFromApi();
			if (!isMounted) {
				return;
			}

			setContent(liveContent);
		};

		loadWebsiteContent();

		return () => {
			isMounted = false;
		};
	}, []);

	return content;
};
