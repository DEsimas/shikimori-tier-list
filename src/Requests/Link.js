export async function getCode(username) {
    console.log({username})
    // return {
    //     data: undefined,
    //     error: 'Server is undefined'
    // }
    return {
        data: { code: '432oij5r3i43kl' },
        error: undefined
    }
}

export async function verifyCode() {
    console.log('verifying code...')
    return {
        data: undefined,
        error: 'Server is undefined'
    }
}