import { Pagination } from 'antd';
import { LIMIT } from './constants/index.js';
import TableProducts from './components/TableProducts/index.jsx';
import Preloader from './components/Preloader';
import useApp from './hooks/useApp';

function App() {
    const {
        filterParams,
        setFilterParams,
        totalProductsNumber,
        products,
        currentPage,
        setCurrentPage,
        onChange,
        loading,
    } = useApp();

    return (
        <div className="flex min-h-[100vh] flex-col">
            {loading && <Preloader />}

            <h1 className="py-4 text-center text-3xl font-bold uppercase">
                Products
            </h1>

            <TableProducts
                products={products}
                filterParams={filterParams}
                setCurrentPage={setCurrentPage}
                setFilterParams={setFilterParams}
            />

            {totalProductsNumber > LIMIT && !loading && (
                <Pagination
                    className="fixed bottom-0 mt-4 w-full animate-fade-in-top bg-slate-400 p-2 text-center"
                    current={currentPage}
                    onChange={onChange}
                    total={totalProductsNumber}
                    pageSizeOptions={[LIMIT]}
                    pageSize={LIMIT}
                />
            )}
        </div>
    );
}

export default App;
