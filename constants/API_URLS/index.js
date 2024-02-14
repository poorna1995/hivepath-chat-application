const BASE_API_URL = "https://chat.hivepath.io/api";
//  process.env.NEXT_PUBLIC_URL;

const API_URLS = {
	GET_TOKEN: `${BASE_API_URL}/auth/token/`,
	VERIFY_TOKEN: `${BASE_API_URL}/token-verify/`,
	GET_ACCOUNTS: `${BASE_API_URL}/account/`,
	GET_CONVERSATIONS: `${BASE_API_URL}/conversations/`,
	CREATE_CONVERSATIONS: `${BASE_API_URL}/conversation/create`,
	DELETE_CONVERSATION: `${BASE_API_URL}/conversation/delete`,
	// Get Users with last conversations
	// 147.182.225.167/api/conversation/user/
	GET_LAST_CONVERSATION_URL: `${BASE_API_URL}/last_conversation`,
};

export default API_URLS;
