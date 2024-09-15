import axios from "axios";

export const NETWORK = axios.create({
	baseURL: import.meta.env.VITE_BACKEND_URL,
	timeout: 5e3,
	validateStatus: () => true,
	headers: {
		"Content-Type": "application/json",
		Authorization: `Bearer ${
			window.location.href
				.slice(window.location.href.indexOf("?") + 1)
				.split("#")[0]
		}`,
	},
});
