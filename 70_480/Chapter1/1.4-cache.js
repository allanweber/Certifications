window.onload = function () {
    var appCache = window.applicationCache;
    appCache.oncached = function (e) { alert("cache successfully downloaded."); };
    appCache.onupdateready = function (e) { appCache.swapCache(); };
}