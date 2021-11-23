interface RequestError {
  type: string
  message: string
}

type RequestErrors = RequestError[]

export default RequestErrors

export {
  RequestError
}