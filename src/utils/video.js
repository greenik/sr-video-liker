function getVideoProviderFromUrl(url) {
    if (!url) return null;
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

async function getThumbnailFromUrl(url) {
    const provider = getVideoProviderFromUrl(url);
    const videoId = getIdFromUrl(url);
    let thumbnailUrl;
    if (provider === 'youtube') {
        thumbnailUrl = `http://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
    }
    if (provider === 'vimeo') {
        await fetch(`https://vimeo.com/api/oembed.json?url=${url}`)
            .then(response => response.json())
            .then(response => {
                thumbnailUrl = response.thumbnail_url;
            });
    }
    return thumbnailUrl;
}

export { getVideoProviderFromUrl, getIdFromUrl, getThumbnailFromUrl };