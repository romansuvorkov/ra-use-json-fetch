import React from "react";
import useJsonFetch from "../useJsonFetch";

function Fetcher(props) {
    const { url, header } = props;
    const [data, loading, error] = useJsonFetch(url, 5000, []);
    const dataCheck = data.status ? true : false;

    return (
        <div className="fetcher_block"> 
            {header && <p>header: {header}</p>}
            {data.status && <p>data: {data.status}</p>}
            {loading && <p>loading: Идет загрузка</p>}
            {error && <p>error: {error.message}</p>}
        </div>
    );
};

export default Fetcher;