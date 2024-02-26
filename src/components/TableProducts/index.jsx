import { useState } from 'react';
import TableHeader from './TableHeader';
import List from '../List';
import FiltersForm from './FiltersForm';

const TableProducts = ({ products, setFilterParams, setCurrentPage }) => {
    const [filter, setFilter] = useState(null);
    const [openForm, setOpenForm] = useState('');

    return (
        <div className="mb-24 border-2 sm:mb-12">
            <TableHeader
                openForm={openForm}
                setOpenForm={setOpenForm}
                filter={filter}
                data={['id', 'product', 'price', 'brand']}
            />

            <FiltersForm
                openForm={openForm}
                setOpenForm={setOpenForm}
                setFilter={setFilter}
                setFilterParams={setFilterParams}
                setCurrentPage={setCurrentPage}
            />

            <List
                data={products}
                className="grid divide-y px-5"
                renderData={(product) => (
                    <li
                        key={product.id}
                        className="font-md md:text-md grid grid-cols-4 items-center justify-center gap-2 pb-4 pt-2 text-sm"
                    >
                        <p className="break-all text-center">{product.id}</p>

                        <p className="break-all text-center">
                            {product.product}
                        </p>

                        <p className="break-all text-center">{product.price}</p>

                        <p className="break-all text-center">
                            {product.brand ?? 'Unknown'}
                        </p>
                    </li>
                )}
            />
        </div>
    );
};

export default TableProducts;
