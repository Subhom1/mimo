function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function FirebaseError(err: string) {
  const regex = /Firebase: Error \(auth\/(.+?)\)/;
  const match = err.match(regex);

  const regex2 = /Firebase: (.+)/;
  const match2 = err.match(regex2);

  if (match) {
    let capturedString = match[1];
    capturedString = capturedString.replaceAll("-", " ");
    return capitalizeFirstLetter(capturedString);
  } else if (match2) {
    let capturedString = match2[1];
    capturedString = capturedString.replaceAll("-", " ");
    return capitalizeFirstLetter(capturedString);
  } else {
    return capitalizeFirstLetter(err);
  }
}
