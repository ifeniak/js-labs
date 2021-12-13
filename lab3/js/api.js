const BASE_URL = "http://localhost:1337/api";
const RESOURCE_URL = `${BASE_URL}/farm`;

const baseRequest = async ({ urlPath = "", method = "GET", body = null }) => {
    try {
        const reqParams = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            body,
        };

        if (body) {
            reqParams.body = JSON.stringify(body);
        }

        return await fetch(`${RESOURCE_URL}${urlPath}`, reqParams);
    } catch (error) {
        console.error("HTTP ERROR: ", error);
    }
};


export const getAllFarms = async () => {
    const rawResponse = await baseRequest({ method: "GET" });

    return await rawResponse.json();
};

export const postFarm = (body) => baseRequest({ method: "POST", body });

export const updateFarm = (id, body) => 
    baseRequest({ urlPath: `/${id}`, method: "PUT", body });

export const deleteFarm = (id) => 
    baseRequest({ urlPath: `/${id}`, method: "DELETE" });