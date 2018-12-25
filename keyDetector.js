'use strict';

const ioHook = require('iohook');
ioHook.start();
console.clear();

const keyCodesMap = require('./config.json').keymap;
const keySounds = require('./config.json').keysounds;


const translateKeyCode = (keycode) => keyCodesMap[keycode] ? keyCodesMap[keycode] : 'key not mapped'

try {
	ioHook.on("keydown", function (msg) {
		if (msg && msg.keycode === 1) {
			console.info("ESC pressed. Exiting app.");
			process.exit(1)
		}
		const key = translateKeyCode(msg.keycode)
		console.log(`${key} - code: ${msg.keycode}`);

	});

} catch (err) {
	console.error(err)
}