const BASE_URL = "http://127.0.0.1:5000/";
const RESOURCE_URL = `${BASE_URL}farms/`;

const baseRequest = async ({ urlPath = "", method = "GET", body = null }) => {
    try {
        const reqParams = {
            method,
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Credentials': true,
            },
            // credentials: 'include',
            // headers: new Headers({
            //     
            //     'Content-Type': 'application/json',
            // })
            // mode: 'no-cors'
        };

        if (body) {
            reqParams.body = JSON.stringify(body);
        }

        console.log("hello from api");

        return await fetch(`${RESOURCE_URL}${urlPath}`, reqParams);
    } catch (error) {
        console.error("HTTP ERROR: ", error);
    }
};


export const getAllFarms = async () => {
    const rawResponse = await baseRequest({ method: "GET" });

    return rawResponse.json();
};

export const postFarm = (body) => baseRequest({ method: "POST", body });

export const updateFarm = (id, body) => baseRequest({ urlPath: `${id}`, method: "PUT", body: body });

export const deleteFarm = (id) => baseRequest
    ({ urlPath: `${id}`, method: "DELETE" });
