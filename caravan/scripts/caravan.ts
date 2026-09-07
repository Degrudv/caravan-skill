#!/usr/bin/env -S node --experimental-strip-types
import { main } from "./caravan.mjs";

process.exitCode = await main(process.argv.slice(2));
