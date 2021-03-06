import { useEffect, useState } from "react";

const useToken = (user) => {
    const [token, setToken] = useState('')
    useEffect(() => {
        if (user) {
            const email = user?.user?.email;
            const currentUser = { email }
            fetch(`http://localhost:5000/user?email=${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            }).then(res => res.json())
                .then(data => {
                    setToken(data.token)
                    localStorage.setItem('accessToken', data.token)
                })
        }
    }, [user])

    return [token]
};

export default useToken;