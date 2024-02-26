import { Button } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
const TableHeader = ({ data, openForm, filter, setOpenForm }) => {
    if (!data) return null;

    const handleClick = (item) => {
        setOpenForm(item === openForm ? '' : item);
    };

    return (
        <>
            <div className="sticky top-0 grid grid-cols-4 items-center gap-1 border-4 border-zinc-600 bg-zinc-600 capitalize">
                {data.map((item) => (
                    <p
                        key={item}
                        className=" grid min-h-full w-full grid-cols-1 items-center bg-[steelblue] p-2 text-center drop-shadow-[1px_1px_rgba(0,0,0,100)] md:grid-cols-[1fr_auto]"
                    >
                        <span className="flex items-center justify-center text-white">
                            {item}
                        </span>

                        {item !== 'id' && (
                            <Button
                                icon={<FilterOutlined />}
                                onClick={() => handleClick(item)}
                                title="Open/Close filter"
                                className={`m-auto h-8 w-8 border-none text-white ${filter === item ? 'bg-green-700' : openForm === item ? 'bg-blue-900' : ''}`}
                            />
                        )}
                    </p>
                ))}
            </div>
        </>
    );
};

export default TableHeader;
