function displayScreen() {
  process.stdout.write("\x1Bc"); // Clears the console
  console.log(
    "================================================================".cyan
  );
  console.log(
    `===  TTTTT  OOO  M   M  AAAAA  RRRR   K   K  EEEEE  TTTTT     ===`.yellow
  );
  console.log(
    `===    T   O   O MM MM  A   A  R   R  K  K   E        T       ===`.yellow
  );
  console.log(
    `===    T   O   O M M M  AAAAA  RRRR   KKK    EEEE     T       ===`.yellow
  );
  console.log(
    `===    T   O   O M   M  A   A  R  R   K  K   E        T       ===`.yellow
  );
  console.log(
    `===    T    OOO  M   M  A   A  R   R  K   K  EEEEE    T       ===`.yellow
  );
  console.log();
  console.log(
    `===    Created By : Cane Toad                                 ===`.yellow
  );
  console.log(
    "================================================================".cyan
  );
}

module.exports = { displayScreen };
