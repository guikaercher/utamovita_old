'use strict';

const ioHook = require('iohook');
const { exec } = require('child_process');
ioHook.start();
console.clear();

const keyCodesMap = require('./config.json').keymap;
const keySounds = require('./config.json').keysounds;




const getKeyByCode = (keycode) => keyCodesMap[keycode] ? keyCodesMap[keycode] : 'key not mapped'

const getSoundName = (keyname) => keySounds[keyname] ? keySounds[keyname] : null

const runCmd = (command) => exec(`${command}`, (err, stdout, stderr) => err ? err : 0)

const runSound = (soundName) => runCmd(`${__dirname}/lib/cmdmp3win.exe ${__dirname}/sounds/${soundName}`)

try {
	ioHook.on("keydown", function (msg) {
	if (msg && msg.keycode === 1) {
			console.info("ESC pressed. Exiting app.");
			process.exit(1)
		}
		const key = getKeyByCode(msg.keycode)
		if (key === 'key not mapped') return
		const sound = getSoundName(key)
		const waitTime = 220000
		setTimeout(() => runSound(sound), waitTime);
		console.log(`${key} - code: ${msg.keycode}`);

	});

} catch (err) {
	console.error(err)
}

console.log('=====================');
console.log('Utamo vita APP started');
console.log('=====================');
