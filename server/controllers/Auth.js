export const register = async (req, res) => {
  try {
    //  since we will be accepting input info we need
    //   1. Validation of request
    //   2. verification
    //  3.  error throwback
    // 4 .functon to do something with the data
    // lets destructure req.body

    const { name, email, password } = req.body

    if (!name) {
      return res.json({
        error: 'Name or Email incorrect',
      })
    }
    if (!password || password.length < 6) {
      return res.json({
        error: 'password needs to be atleast 6 characters lengthy',
      })
    }
    res.json({
      data: 'this is the register backend endpoint',
    })

    await console.log(req.body)
  } catch (error) {
    console.log(error)
  }
}
