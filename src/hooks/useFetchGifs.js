import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // Hook para que una funcion se ejecute solo cuando se
    // ejecuten sus dependencias dadas en el 2do argumento
    // de tipo array []
    useEffect( () => {
        getGifs( category )
            .then( imgs => {

                setState({
                    data: imgs,
                    loading: false
                });
            });
    }, [category]);

    return state;
}