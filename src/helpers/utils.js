export const historyBack = () => {
    window.history.back();
};

export const kebabize = (str) =>
    str.replace(
        /[A-Z]+(?![a-z])|[A-Z]/g,
        ($, ofs) => (ofs ? '-' : '') + $.toLowerCase(),
    );

export const getTimeStringSeconds = (seconds) => {
    var hour, min, sec;
    hour = parseInt(seconds / 3600);
    min = parseInt((seconds % 3600) / 60);
    sec = seconds % 60;
    if (hour.toString().length == 1) hour = '0' + hour;
    if (min.toString().length == 1) min = '0' + min;
    if (sec.toString().length == 1) sec = '0' + sec;
    return (hour !== '00' ? hour + ':' : '') + min + ':' + sec;
};
