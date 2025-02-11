/* eslint-disable no-console, node/no-process-exit */

import { exec as _exec, spawn } from 'node:child_process';
import util from 'node:util';

const exec = util.promisify(_exec);

function runYarn(args) {
	const isWindows = process.platform.startsWith('win');
	return runAndPassOutput(isWindows ? 'yarn.cmd' : 'yarn', args);
}

function runAndPassOutput(cmd, args) {
	return new Promise(resolve => {
		const proc = spawn(cmd, args, {
			stdio: 'inherit',
		});
		proc.on('exit', code => {
			if (code) {
				console.error(`subprocess exited with code ${code}; cmdline: ${[cmd, ...args].join(' ')}`);
				process.exit(1);
			} else {
				resolve();
			}
		});
	});
}

await runAndPassOutput('git', ['remote', 'update']);
const localRev = (await exec('git rev-parse "@"')).stdout.trimEnd();
const remoteRev = (await exec('git rev-parse "@{u}"')).stdout.trimEnd();
const baseRev = (await exec('git merge-base "@" "@{u}"')).stdout.trimEnd();

if (localRev !== remoteRev && remoteRev !== baseRev) {
	console.log({ localRev, remoteRev, baseRev });
	console.error('Your local repository is out of date; please pull');
	process.exit(1);
}

await runYarn(['lint']);
await runYarn(['format:check']);

const versionType = process.argv[2] ?? 'patch';

await runYarn([
	'lerna',
	'version',
	'--no-push',
	'--no-commit-hooks',
	'--force-publish',
	'--preid',
	'pre',
	versionType,
	'-m',
	'build: release version %v',
]);

await (versionType.startsWith('pre')
	? runYarn(['lerna', 'publish', 'from-package', '--dist-tag', 'next'])
	: runYarn(['lerna', 'publish', 'from-package']));
