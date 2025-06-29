import { BASEURL } from "../constants";
import request from "../utils/requests";

const baseUrl = `${BASEURL}/admin`;

export default {
    async login(email, password) {
        return await request('POST', `${baseUrl}/login`, { email, password });
    },
    async logout(accessToken){
        const options = {
            headers: {
                'X-Authorization': accessToken,
            }
        };
        return await request('POST', `${baseUrl}/logout`, [] , options);
    },
}