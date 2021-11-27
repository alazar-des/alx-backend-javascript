export default function handleResponseFromAPI (promise) {
  promise
    .then(() => {
      const obj = {
        status: 200,
        body: 'success'
      }
      return obj
    }).catch(() => {
      return Error()
    }).then((resp) => {
      console.log('Got a response from the API')
      return resp
    })
}
