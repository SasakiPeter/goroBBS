// ここでfetchする　containerでfetchしていたけど
export function* handleLogin() {
    while (true) {
        const action = yield take(`${fetchUser}`);
        const { payload, err } = yield call(superFetch, {
            url: '/api/login/',
            type: 'POST',
            data: action.payload
        });

        if (!payload && err) {
            yield put(failFetchingUser(String(err).split('Error: ')[1]));
            continue;
        }

        const jwt = payload[0].jsonWebToken;

        localStorage.setItem('jwt', jwt);

        yield put(login(Object.assign({}, payload[0], { jwt })));
    }
}