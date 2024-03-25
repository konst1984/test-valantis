export const deleteDublicate = (arr) => {
    const uniqueIds = [];

    return arr.filter((element) => {
        const isDuplicate = uniqueIds.includes(element.id);

        if (!isDuplicate) {
            uniqueIds.push(element.id);

            return true;
        }

        return false;
    });
};

export const deleteDublicateText = (arr) => {
    const uniqueIds = [];

    return arr.filter((element) => {
        const isDuplicate = uniqueIds.includes(element);

        if (!isDuplicate) {
            uniqueIds.push(element);

            return true;
        }

        return false;
    });
};
