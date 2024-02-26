const Preloader = () => {
    return (
        <div className="fixed inset-0 z-50 flex flex-grow items-center justify-center bg-black/80 p-4">
            <span className="loader"></span>
        </div>
    );
};

export default Preloader;
