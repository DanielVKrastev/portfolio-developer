export default async function request(method, url, data, options = {}) {
    if(method !== 'GET') {
        options.method = method;
    }

    if (data) {
        if (data instanceof FormData) {
            options.body = data;
        } else {
            options = {
                ...options,
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers,
                },
                body: JSON.stringify(data),
            };
        }
    }

    try{
        const response = await fetch(url, options);
        const responseContentType = response.headers.get('Content-Type');
        if(!responseContentType) {
            return;
        }

        const result = await response.json();

        if(! response.ok) {
            throw new Error(result.error);
        }

        return result;
        
    }catch (error) {
        console.error('Fetch error:', error.message);
        throw error;
    }
}