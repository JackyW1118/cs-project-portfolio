import { useState } from "react";
import axios from "axios";

//custom hook to run GET request
const useGET = (defaultObj) => {
  const [response, setResponse] = useState(defaultObj);

  //setter to update response
  //optional index arg
  const getResponse = async (query, index = null) => {
    const { data } = await axios.get(query);
    if (data.length === 0) {
      setResponse({});
    } else if (index != null) {
      setResponse(data[index]);
    } else setResponse(data);
    //return data as a promise
    return data;
  };

  //return response obj and a setter to set response

  return [response, getResponse];
};

export default useGET;
