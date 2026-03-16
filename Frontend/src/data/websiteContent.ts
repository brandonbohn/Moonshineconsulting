import { useEffect, useState } from "react";
import rawWebsiteContent from "./websitecontent.json";

export type WebsiteContent = typeof rawWebsiteContent;

const API_ORIGIN = "https://moonshineconsultingbackend.onrender.com";
const WEBSITE_CONTENT_API_URL = `${API_ORIGIN}/api/website-content`;

let cachedWebsiteContent: WebsiteContent | null = null;
let inFlightWebsiteContentRequest: Promise<WebsiteContent | null> | null = null;

export const websiteContent = rawWebsiteContent;

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

export const useWebsiteContent = (): WebsiteContent => {
	const [content, setContent] = useState<WebsiteContent>(cachedWebsiteContent || rawWebsiteContent);

	useEffect(() => {
		let isMounted = true;

		const loadWebsiteContent = async () => {
			const liveContent = await fetchWebsiteContentFromApi();
			if (!isMounted || !liveContent) {
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
