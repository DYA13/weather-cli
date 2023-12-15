#!/usr/bin/env node
import { getArgs } from "./helpers/args.js"
const initCLI = () => {
  const args = getArgs(process.argv)
  console.log(args)
  if (args.help) {
    // printing help
  }
  if (args.s) {
    // saving town
  }
  if (args.t) {
    // saving token
  }
  // printing weather
}
initCLI()
