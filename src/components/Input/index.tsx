import React from 'react';

const Input = ({ openForm, name, valueFilter, ...rest }) => {
    return (
        <>
            {openForm === name && (
                <>
                    <span className="uppercase">{name}</span>
                    <label className="grid w-full gap-2 drop-shadow-[1px_1px_rgba(0,0,0,100)]">
                        <input
                            name={name}
                            className="h-8 w-full max-w-80 rounded-md bg-zinc-400 px-3 placeholder:capitalize focus:bg-zinc-600"
                            placeholder={name}
                            defaultValue={valueFilter[name] ?? ''}
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
