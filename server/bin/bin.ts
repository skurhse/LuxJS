#!/usr/bin/env node

import { Command } from "commander";
import pkg from "../package.json";
import dev from './commands/dev/dev';

export interface AppConfig {

}

const bin = new Command();

dev(bin);

bin.version(pkg.version);
bin.parse(process.argv);
