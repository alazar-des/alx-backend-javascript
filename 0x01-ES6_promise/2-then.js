export default function handleResponseFromAPI (promise) {
  promise
    .then((promise) => {
      const obj = {
        status: 200,
        body: 'success'
      }
      return (obj)
    }).catch(() => {
      return (new Error())
    }).then(() => {
      console.log('Got a response from the API')
    })
}
