function useDebounce(cb, delay = 2000) {
    let timerid;

    return (...args) => {
        clearInterval(timerid);
        timerid = setTimeout(() => {
            cb(...args);
        }, delay)
    }
    
}

export default useDebounce;