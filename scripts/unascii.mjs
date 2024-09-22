#!/usr/bin/env node

/* import { createJiti } from "jiti";

const jiti = createJiti(import.meta.url)
const { runMain } = jiti("../src/cli.ts"); */

import jiti from "jiti";

const { runMain } = jiti(import.meta.url)("../src/cli");

runMain();
