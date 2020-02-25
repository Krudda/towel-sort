module.exports = function towelSort(matrix) {
    if (!Array.isArray(matrix)) return [];
    if (Object.keys(matrix) == 0) return [];

    for (let i = 1; i < matrix.length; i+=2) {
        matrix[i].reverse();
    }
    return [].concat(...matrix);
    
}
