const regex = /^Email: (\w+)@(\w+\.\w+)$/

const email = "Email: samcapitalinc@gmail.com"

const result = regex.exec("Email: samcapitalinc@gmail.com")

console.log(result)