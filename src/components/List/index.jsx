import { FileExcelOutlined } from '@ant-design/icons';
const List = ({ data, renderData, className }) => {
    if (!data)
        return (
            <div className="grid justify-center gap-2 pt-24 sm:pt-12">
                <FileExcelOutlined
                    style={{
                        fontSize: '3rem',
                        textAlign: 'center',
                        display: 'block',
                    }}
                />
                <p className="uppercase">No data</p>
            </div>
        );

    return (
        <>
            <ul className={className}>{data.map(renderData)}</ul>
        </>
    );
};

export default List;
