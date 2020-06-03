function main() {
  setImmediate(() => console.log("immediate"));
  setTimeout(() => console.log("timeout"), 0);
}

main();

