import React, { useEffect, useState } from "react";
import { Api_axio } from "../Axios_ApiHandler/Api_axio";
import { ENDPOINTS } from "../EndPoints_constants";
import SpinnerBox from "./spinner";
import { useDispatch } from "react-redux";
import { selectedProdcutData,removeProdcut } from "../../Redux_features/Containers/Actions/Prodcut_action";

const Prodcuts_details = () => {
    const getIdFromUrl = () => {
        const path = window.location.pathname;
        const id = path.substring(path.lastIndexOf("/") + 1);
        return id;
    };
    const [prodcut, setProdcuts] = useState([]);
    const [error, setError] = useState([""]);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const user_Id = getIdFromUrl();

    useEffect(() => {
        getProdcutsById();
        return () =>{
            dispatch(removeProdcut());
        }
    }, []);

    const getProdcutsById = async () => {
        try {
            setLoading(true);
            const response = await Api_axio.get(ENDPOINTS.PRODCUTS + "/" + user_Id);
            // console.log(response.data);
            setProdcuts(response.data);
            dispatch(selectedProdcutData(response.data));
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    return (
        <>
            <div className="container py-5">
                <div className="text-center">{loading ? <SpinnerBox /> : null}</div>
                {error !== "" && error}
                <div className="row">
                    <div className="col-md-4">
                        <img src={prodcut.thumbnail} class="img-fluid img-responsive img-thumbnail" alt={prodcut.thumbnail} />
                    </div>
                    <div className="col-md-8">
                        <h1>{prodcut.brand}</h1>
                        <h3>{prodcut.category}</h3>
                        <p>{prodcut.description}</p>
                        <h5 className="card-title font-weight-bold">{prodcut.tittle} </h5>
                        <h5 className="card-title font-weight-bold">{prodcut.price} Rs.</h5>
                        <h5 className="card-title font-weight-bold">{prodcut.stock} Stock </h5>
                     <h5 className="card-title font-weight-bold">{prodcut.rating} ***</h5>
                    <button className="btn btn-danger btn-md py-2">Add To Cart</button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Prodcuts_details;
