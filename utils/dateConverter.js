module.exports = {
    convertToShortDate: function(isoDate) {
        return isoDate.getDate() + "/" + isoDate.getMonth() + "/" + isoDate.getFullYear();
    }
}