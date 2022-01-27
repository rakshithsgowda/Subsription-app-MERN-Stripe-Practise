export const register = async (req, res) => {
  try {
    //  since we will be accepting input info we need
    //   1. Validation of request
    //   2. verification
    //  3.  error throwback
    // 4 .functon to do something with the data
    await console.log(req.body)
  } catch (error) {
    console.log(error)
  }
}
