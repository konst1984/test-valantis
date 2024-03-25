import { useEffect, useState } from 'react';
import {
    getIds,
    getProducts,
    getIdsTotal,
    getIdsByFilters,
} from '../services/index.js';
import { LIMIT } from '../constants/index.js';
import {
    deleteDublicate,
    deleteDublicateText,
} from '../utils/deleteDublicate.js';

const useApp = () => {
    const [filterParams, setFilterParams] = useState(null);
    const [totalProductsNumber, setTotalProductsNumber] = useState(0);
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const onChange = (page) => {
        setCurrentPage(page);
    };

    const addOverflowHidden = () => {
        document.body.classList.add('overflow-hidden');
    };

    const removeOverflowHidden = () => {
        document.body.classList.remove('overflow-hidden');
    };

    useEffect(() => {
        const offset = LIMIT * (currentPage - 1);

        const getDataProducts = async () => {
            setLoading(true);
            addOverflowHidden();
            const data = filterParams
                ? await getIdsByFilters(filterParams)
                : await getIds(offset);
            const products = await getProducts(data);
            const uniqueProducts = deleteDublicate(products);
            setProducts(
                filterParams
                    ? uniqueProducts.slice(offset, offset + LIMIT)
                    : uniqueProducts
            );
            const dataTotal = filterParams
                ? uniqueProducts
                : deleteDublicateText(await getIdsTotal());
            setTotalProductsNumber(dataTotal.length);
            setLoading(false);
            removeOverflowHidden();
        };

        getDataProducts(offset).catch((error) => {
            console.log(error.response?.data);
            getDataProducts();
        });
    }, [currentPage, filterParams]);

    return {
        filterParams,
        setFilterParams,
        totalProductsNumber,
        products,
        currentPage,
        setCurrentPage,
        onChange,
        loading,
    };
};

export default useApp;
