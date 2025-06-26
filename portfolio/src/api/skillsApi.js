import { BASEURL } from "../constants";
import request from "../utils/requests";

const baseUrl = `${BASEURL}/tech-stack`;

export default {
    async getAll() {
        return await request('GET', baseUrl);
    },
    async getOne(id){
        return await request('GET', `${baseUrl}/${id}`);
    },
    async create(data){
        /*
        const options = {
        headers: {
            'X-Authorization': accessToken,
        }
        */
        return await request('POST', baseUrl, data); //TODO: add options
    },
    async update(id, data){
        /*
        const options = {
        headers: {
            'X-Authorization': accessToken,
        }
        */
        return await request('PATCH', `${baseUrl}/${id}`, data); //TODO: add options
    },
    async delete(id) {
        return await request('DELETE', `${baseUrl}/${id}`);
    }
}