const Input = ({
    openForm,
    name,
    className,
    labelClassName,
    valueFilter,
    ...rest
}) => {
    return (
        <>
            {openForm === name && (
                <>
                    <label className={labelClassName}>
                        {name}
                        <input
                            name={name}
                            className={className}
                            placeholder={name}
                            value={valueFilter[name] ?? ''}
                            required
                            {...rest}
                        />
                    </label>
                </>
            )}
        </>
    );
};

export default Input;
