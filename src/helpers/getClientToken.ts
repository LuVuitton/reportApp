export const generateClientToken = () => {
  let key = localStorage.getItem("clientToken");

  if (!key) {
    const keyLength = 16; // Длина ключа в байтах
    const values = new Uint8Array(keyLength);
    crypto.getRandomValues(values);
    key = Array.from(values, (byte) =>
      ("0" + (byte & 0xff).toString(16)).slice(-2)
    ).join("");

    localStorage.setItem("clientToken", key);
  }

  return key;
};

export const getClientToken = () => localStorage.getItem("clientToken");


