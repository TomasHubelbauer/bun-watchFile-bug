# `fs.watchFile`

[`fs.watchFile`](https://nodejs.org/api/fs.html#fswatchfilefilename-options-listener)
is not an efficient API.

The Node docs state `watch` should be used instead.

This repository demonstrates the problem with it on macOS which reproduces in
both Bun and Node - it seems to be based around polling and only reports every
5 seconds:

```
wrote 1:53:03 PM
wrote 1:53:04 PM
wrote 1:53:05 PM
wrote 1:53:06 PM
wrote 1:53:07 PM
read 1:53:07 PM
wrote 1:53:08 PM
wrote 1:53:09 PM
wrote 1:53:10 PM
wrote 1:53:11 PM
wrote 1:53:12 PM
read 1:53:12 PM
```

Run either `bun bun.ts` or `node node.js` to see it in action.

`watch` can accept file names so it is a complete replacement.
