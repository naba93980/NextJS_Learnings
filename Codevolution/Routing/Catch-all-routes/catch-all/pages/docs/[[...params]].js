import React from 'react'
import { useRouter } from 'next/router';

export default function Doc() {
    const router = useRouter();
    let params=[];
    params = router.query.params;

    if(params !== undefined){
    if (params.length === 2) {
        return (
            <h1>
                Viewing docs for feature {params[0]} and concept {params[1]}
            </h1>
        )
    } else if (params.length === 1) {
        return <h1>Viewing docs for feature {params[0]}</h1>
    }
    }

    return (
        <h1>Doc Home Page</h1>
    )
}
