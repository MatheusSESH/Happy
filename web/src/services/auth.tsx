// export const isAuthenticated = () => {

// }

interface Response {
    token: string,
    user: {
        name: string,
        email: string,
    };
}

export function isAuthenticated(): Promise<Response>{
    return new Promise((resolve) => {
        resolve({
            token: 'kasdkfaksdfkkadf',
            user: {
                name: 'matheus',
                email: 'matheusvinicius123466@gmail.com',
            }
        })
    })
}

