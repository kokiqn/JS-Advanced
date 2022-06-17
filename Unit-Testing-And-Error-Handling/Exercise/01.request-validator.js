function requestValidator(obj) {
    let validMethods = ['POST', 'GET', 'DELETE', 'CONNECT'];
    let uriRegEx = /(^[\w.]+$)/;
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let messageRegEx = /[<>&'"\\]/gm;

    if (!obj.hasOwnProperty('method') || !validMethods.includes(obj.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (!obj.hasOwnProperty('uri') || !uriRegEx.test(obj.uri)) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!obj.hasOwnProperty('version') || !validVersions.includes(obj.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (!obj.hasOwnProperty('message') || messageRegEx.test(obj.message)) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return obj;
}
