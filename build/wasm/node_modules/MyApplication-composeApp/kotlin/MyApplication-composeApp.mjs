
import { instantiate } from './MyApplication-composeApp.uninstantiated.mjs';
import "./custom-formatters.js"

const exports = (await instantiate({
})).exports;

export const {
memory,
_initialize
} = exports


