import morgan, { StreamOptions } from "morgan";

const morgonFormat = ":method :url";
const stream: StreamOptions = {
    write: (message) => console.log(message),
};

// Build the morgan middleware
const morganMiddleware = morgan(morgonFormat, { stream: stream, immediate: true });

export default morganMiddleware;
