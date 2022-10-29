import axios from "axios"

const login = async (code: any) => {
    // axios({
    //     method: 'POST',
    //     url: 'http://localhost:3000/api/auth/',
    //     data: {code}
    // }).then(response => {
    //     console.log(response)
    // })
    console.log('making axios call')
    axios.post('http://localhost:3000/api/auth/', code).then((res) => {
        console.log(res.status)
    })
    // return fetch('http://localhost:3000/api/auth', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ code }),
    // }).then((res) => {
    //     if (res.ok) {
    //         return res.json();
    //     } else {
    //         return Promise.reject(res);
    //     }
    // });
};

export { login };