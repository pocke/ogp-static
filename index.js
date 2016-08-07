#!/usr/bin/env node
const PhantomJS = require('phantomjs-prebuilt');
const path = require('path');
const childProcess = require('child_process');

if (process.argv.length < 3) {
  console.error('Please specify URL');
  process.exit(1);
}

const binPath = PhantomJS.path;
const childArgs = [
  path.join(__dirname, 'phantomjs-script.js'),
  process.argv[2],
];

childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
  if (err) {
    console.error(err);
    return;
  }
});
