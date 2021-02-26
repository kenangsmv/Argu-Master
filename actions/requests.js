import axios from "axios";


const url = "http://localhost:5000";
const serverless= "http://localhost:3000/api"
export const newDebate = async (data, callback) => {
  try {
    const res = await axios({
      method: "post",
      url: url + "/debate/add-debate",
      data: data,
    });
    console.log(res)

    callback(res.data.data);
  } catch (error) {
    console.log(error);
  }
};

export const getDebate = async (data) => {
  return await axios({
    method: "get",
    url: serverless + "/getDebates",
    data: data,
  });
};
