export async function Auth(body) {
    for(let i = 0; i < 100000000; i++) {}
    console.log(body)
    return {
        data: undefined,
        error: 'Server is not defined'
    }
}

export async function Registration(body) {
    console.log(body)
    return {
        data: undefined,
        error: 'Server is not defined'
    }
}