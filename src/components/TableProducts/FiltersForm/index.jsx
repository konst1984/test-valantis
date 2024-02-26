import { useState } from 'react';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Input from '../../../components/Input';

const FiltersForm = ({
    openForm,
    setFilterParams,
    setCurrentPage,
    setFilter,
}) => {
    const [valueFilter, setValueFilter] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();

        const value = document.forms['form'][openForm].value;
        if (!value) return;

        setFilterParams({
            [openForm]: openForm === 'price' ? Number(value) : value,
        });
        setFilter(openForm);
        setCurrentPage(1);
        setValueFilter({ [openForm]: value });
    };

    const handleReset = () => {
        setFilterParams(null);
        setFilter(null);
        setValueFilter({});
    };

    if (!openForm) return null;

    return (
        <>
            <form
                name="form"
                className="sticky top-[56px] flex w-full animate-fade-in-down flex-wrap items-end gap-2 border-t-2 bg-[steelblue] px-2 py-4"
                onSubmit={handleSubmit}
            >
                <Input
                    name="product"
                    openForm={openForm}
                    type={'text'}
                    onChange={(e) =>
                        setValueFilter({ [openForm]: e.target.value })
                    }
                    valueFilter={valueFilter}
                />

                <Input
                    name="price"
                    openForm={openForm}
                    type={'number'}
                    onChange={(e) =>
                        setValueFilter({ [openForm]: e.target.value })
                    }
                    valueFilter={valueFilter}
                />

                <Input
                    name="brand"
                    openForm={openForm}
                    type={'text'}
                    onChange={(e) =>
                        setValueFilter({ [openForm]: e.target.value })
                    }
                    valueFilter={valueFilter}
                />

                <Button
                    type="primary"
                    icon={<SearchOutlined />}
                    title="Search by filter"
                    aria-label="Search by filter"
                    onClick={handleSubmit}
                    className="button min-w-24 border-2 border-white bg-[steelblue] px-4 py-1 hover:bg-blue-700 focus-visible:bg-blue-700"
                />

                <Button
                    onClick={handleReset}
                    className="button bg-[brown] text-white"
                >
                    Clear filter
                </Button>
            </form>
        </>
    );
};

export default FiltersForm;
