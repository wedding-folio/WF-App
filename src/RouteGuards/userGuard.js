export default function validateToken(to, from, next) {
  const token = JSON.parse(localStorage.getItem("token"))
  if (!token) {
    next("/auth/login")
  }

  if (token) {
    const { exp } = token;
    const currentDate = new Date();
    const currentDateEpoch = Math.round(currentDate.getTime() / 1000)

    if (currentDateEpoch > exp) {
      console.log("CURRENT DATE: ", currentDateEpoch)
      localStorage.removeItem("token")
      next("/auth/login")
    } else {

      next();
    }

  }
}