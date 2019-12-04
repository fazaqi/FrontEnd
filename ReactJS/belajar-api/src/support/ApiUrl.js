export const APIURL = "https://x.rajaapi.com/";
// export const TOKEN = "VdM7FlzgpSoVbE9zmGdyI4CazLVwr00eM5aqoeOyCO51IUGc8r";
export const TOKEN = () => {
  Axios.get(`${APIURL}poe`)
    .then(res => {
      return res.data.token;
    })
    .catch(err => {
      console.log(err);
    });
};
