import React, {useState, useEffect} from "react";
import Axios from "axios";

function FormData() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    Axios.get("http://pj-project.herokuapp.com/form").then((response) => {
      // console.log(response.data[response.data.length-2]);
      setProductList(response.data);
    });
  }, []);


    return (<>{productList}</>)
}

export default FormData;
