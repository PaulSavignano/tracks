const baseURL = 'http://9df35ada.ngrok.io'

async function fetchApi({
  body,
  method = 'POST',
  url,
}) {
  const endpoint = `${baseURL}${url}`
  console.log('fetchApi req', { body, method, endpoint })
  try {
    const response = await fetch(
      endpoint,
      {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        ...body && { body: JSON.stringify(body) }
      },
    )
    console.log('fetchApi res ', response)
    const json = await response.json()
    console.log('fetchApi res.json() ', json)
    if (!response.ok || json.errors) {
      throw json.error
    }
    return json
  } catch (error) {
    console.log('fetchApi error ', error)
    return Promise.reject(error)
  }
}

export default fetchApi