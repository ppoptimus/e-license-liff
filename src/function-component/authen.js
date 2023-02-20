import axios from "axios";

const Authen = () => {
let returnToken = {
    tokenType : "",
    accessToken : "",
}
  axios
    .post("http://103.86.50.59:8082/auth/line", {
      password: "doeline",
      username: "doeline",
    })
    .then((response) => {
        returnToken.tokenType = response.data.tokenType
        returnToken.accessToken = response.data.accessToken
        // console.log(returnToken)
    })
    .catch(() => {
        return "error"
    });

    return returnToken;
    
};

export default Authen;
