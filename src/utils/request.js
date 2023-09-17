export const getToken = (request) => {
    const authorization = request.headers.get('authorization');
    return (authorization || "").replace('Bearer ', '');
}
