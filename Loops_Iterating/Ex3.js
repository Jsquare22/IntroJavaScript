let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

// Output: Infinite loop because counter gets assigned to 1 = True so counter is always equal to 1