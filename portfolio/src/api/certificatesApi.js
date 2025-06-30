import { BASEURL } from "../constants";
import request from "../utils/requests";

const baseUrl = `${BASEURL}/certificates`;

export default {
    async getAll() {
        return await request('GET', baseUrl);
    },
    async getOne(id) {
        return await request('GET', `${baseUrl}/${id}`);
    },
    async create(accessToken, data) {

        const options = {
            headers: {
                'X-Authorization': accessToken,
            }
        }
        return await request('POST', baseUrl, data, options);
    },
    async update(accessToken, id, data) {

        const options = {
            headers: {
                'X-Authorization': accessToken,
            }
        }
        return await request('PATCH', `${baseUrl}/${id}`, data, options);
    },
    async delete(accessToken, id) {

        const options = {
            headers: {
                'X-Authorization': accessToken,
            }
        }

        return await request('DELETE', `${baseUrl}/${id}`, [], options);
    }
}