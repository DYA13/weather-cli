import chalk from "chalk"
import dedent from "dedent-js"
const printError = (error) => {
  console.log(chalk.bgRed(" ERROR ") + " " + `Error` + " " + error)
}

const printSuccess = (message) => {
  console.log(chalk.bgGreen(" SUCCESS ") + " " + message)
}

const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan(" HELP ")} 
    Without parameters-weather input
    -s [CITY] - get weather for city
    -h - get help
    -t [API_KEY] - save token
  `
  )
}

export { printError, printSuccess, printHelp }
