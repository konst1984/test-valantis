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
