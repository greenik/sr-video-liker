function getVideoProviderFromUrl(url) {
    if (url.includes('youtu')) return 'youtube';
    if (url.includes('vimeo')) return 'vimeo';
    return null;
}

function getIdFromUrl(url) {
    const videoProvider = getVideoProviderFromUrl(url);
    if (videoProvider === 'youtube') {
        const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[7].length === 11) ? match[7] : false;
    }
    if (videoProvider === 'vimeo') {
        const urlSplitted = url.split('/');
        return urlSplitted[urlSplitted.length-1];
    }
    return null;
}

export { getVideoProviderFromUrl, getIdFromUrl };