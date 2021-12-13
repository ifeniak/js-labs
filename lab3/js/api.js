// const BASE_URL = "http://127.0.0.1:5000";
// const RESOURCE_URL = `${BASE_URL}/farm`;

// const baseRequest = async ({ urlPath = "", method = "GET", body = null }) => {
//     try {
//         const reqParams = {
//             method,
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             //mode: 'no-cors'
//         };

//         if (body) {
//             reqParams.body = JSON.stringify(body);
//         }

//         return await fetch(`${RESOURCE_URL}${urlPath}`, reqParams);
//     } catch (error) {
//         console.error("HTTP ERROR: ", error);
//     }
// };


// export const getAllFarms = async () => {
//     const rawResponse = await baseRequest({ method: "GET" });

//     return rawResponse.json();
// };

// export const postFarm = (body) => baseRequest({ method: "POST", body });

// export const updateFarm = (id, body) => 
//     baseRequest({ urlPath: `/${id}`, method: "PUT", body });

// export const deleteFarm = (id) => 
//     ({ urlPath: `/${id}`, method: "DELETE" });