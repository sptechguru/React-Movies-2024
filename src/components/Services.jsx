import React, { useEffect, useState } from "react";
import Card from "./common/Card";
import { Api_axio } from "./Axios_ApiHandler/Api_axio";
import { ENDPOINTS } from "./EndPoints_constants";
import SpinnerBox from "./common/spinner";
import { useDispatch } from "react-redux";
import { setProdcutsData } from './../Redux_features/Containers/Actions/Prodcut_action';
// import { fetchProdcutsData } from "../Redux_features/Containers/Thunk/action/Fetch_Prodcut";

const Services = () => {
  const [prodcuts, newSetProdcuts] = useState([]);
  const [error, setError] = useState([""]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch(); // useDispacth redux data transfer Globally 

  useEffect(() => {
    //  dispatch(fetchProdcutsData());
    getAllprodcuts();
  }, []);

  const getAllprodcuts = async () => {
    try {
      setLoading(true);
      const response = await Api_axio.get(ENDPOINTS.PRODCUTS);
      // console.log(response.data.products);
      newSetProdcuts(response.data.products);
      dispatch(setProdcutsData(response.data.products));
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };


  return (
    <div className="container mx-auto">
      <div className="text-center">{loading ? <SpinnerBox /> : null}</div>
      <div className="container max-w-[1320px] grid lg:grid-cols-3 md:grid-cols-3 gap-6 py-5">
        {error !== "" && error}
        {prodcuts.map((val, ind) => {
          return (
            <Card
              id={val.id}
              key={ind}
              imgsrc={val.thumbnail}
              tittle={val.title}
              description={val.description}
              Category={val.category}
              Price={val.price}
              Rating={val.rating}
              Stock={val.stock}
              Brand={val.brand}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
