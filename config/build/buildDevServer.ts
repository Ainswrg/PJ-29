import type { Configuration as DevServerCongiguration } from "webpack-dev-server";

import { BuildOptions } from "./types/config";

export function buildDevServer(options: BuildOptions): DevServerCongiguration {
    return {
        port: options.port,
        open: true
    }
}
