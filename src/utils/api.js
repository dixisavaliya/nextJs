import axios from 'axios';

const BaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

// Create axios instance with default config for cookies
const apiClient = axios.create({
    baseURL: BaseUrl,
    withCredentials: true, // This ensures cookies are sent with requests
});

function getHeaders(isPublic, data = null) {
    const headers = {};

    if (!(data instanceof FormData)) {
        headers['Content-Type'] = 'application/json';
    }

    // No need for Authorization header - cookies are sent automatically
    return headers;
}

const handleAuthError = (error) => {
    console.log(error);
    if (error && error.response && (error.response.status === 403 || error.response.status === 401)) {
        // Redirect to login on auth error
        window.location.href = "/login";
    }
};

export const getData = async (path, isPublic = false) => {
    try {
        const headers = getHeaders(isPublic);
        const response = await apiClient.get(`/${path}`, {
            headers
        });
        return response.data;
    } catch (error) {
        handleAuthError(error);
        throw error;
    }
}

export const postData = async (path, data = {}, isPublic = false) => {
    try {
        const headers = getHeaders(isPublic, data);
        const response = await apiClient.post(`/${path}`, data, {
            headers
        });
        return response.data;
    } catch (error) {
        handleAuthError(error);
        throw error;
    }
};

// New: simple helper to upload a single file to the common uploads API
// params: { source: string, sourceId: number|string, file: File, metadata?: object|string }
export const uploadFile = async ({ source, sourceId, file, metadata, isPublic = false }) => {
    if (!file) throw new Error('File is required');
    const form = new FormData();
    form.append('file', file);
    form.append('source', source);
    form.append('source_id', String(sourceId));
    if (metadata) {
        const metaString = typeof metadata === 'string' ? metadata : JSON.stringify(metadata);
        form.append('metadata', metaString);
    }

    const headers = getHeaders(isPublic, form);
    const response = await apiClient.post('/uploads/file', form, { headers });
    return response.data;
};

export const putData = async (path, data = {}, isPublic = false) => {
    try {
        const headers = getHeaders(isPublic, data);
        const response = await apiClient.put(`/${path}`, data, {
            headers
        });
        return response.data;
    } catch (error) {
        handleAuthError(error);
        throw error;
    }
};

export const patchData = async (path, data = {}, isPublic = false) => {
    try {
        const headers = getHeaders(isPublic, data);
        const response = await apiClient.patch(`/${path}`, data, {
            headers
        });
        return response.data;
    } catch (error) {
        handleAuthError(error);
        throw error;
    }
};

export const deleteRequest = async (path, data = {}, isPublic = false) => {
    try {
        const headers = getHeaders(isPublic);
        const response = await apiClient.delete(`/${path}`, {
            data: data,
            headers
        });
        return response.data;
    } catch (error) {
        handleAuthError(error);
        throw error;
    }
};