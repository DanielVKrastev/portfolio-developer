import { BASEURL } from "../constants";
import request from "../utils/requests";

const baseUrl = `${BASEURL}/tech-stack`;

export default {
    async getAll() {
        return await request('GET', baseUrl);
    }
}