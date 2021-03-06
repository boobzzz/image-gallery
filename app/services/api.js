// import mergeDeep from 'lodash.merge'
import mergeDeep from '@bit/lodash.lodash.merge'

//Fetch JSON
export let fetchJSON = async (url, options = {}) => {
    options = mergeDeep(options, {
        // credentials: 'same-origin',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(options.body)
    })

    let resp = await fetch(url, options)
    console.log(resp.body)

    if ((resp.headers.get('Content-Type') || '').includes('application/json')) {
        try {
            return {
                body: await resp.json(),
                status: resp.status
            }
        } catch (err) {
            // Bad JSON
            throw new Error(`Status: ${resp.status}, API: Invalid JSON`)
        }
    } else {
        // Bad Content-type
        throw new Error(`Status: ${resp.status}, API: Invalid mime-type`)
    }
}

//Fetch GraphQL
export let fetchGQL = async (url, query, variables) => {
    let {body, status} = await fetchJSON(url, {
        method: 'POST',
        body: {
            query,
            variables
        }
    })
    if (body.errors) {
        throw new Error(`Status: ${status}, message: ${body.errors[0].message}`)
    }
    return body.data
}
