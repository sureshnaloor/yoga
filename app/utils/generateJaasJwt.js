// utils/generateJaaSJwt.js
import { sign } from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';
import { v4 as uuid } from 'uuid'; // Assuming you're using uuid for generating unique IDs

export default function  generateJaasJwt()  {
  const payload = {
    aud:"jitsi",  
    context:{
      name: "sridevi",
      email: "sridevi.suresh.menon@gmail.com",
      avatar: "https://via.placeholder.com/150",
      metadata: {
        
        "moderator": true
      }
    },
    id: uuid(), // Generate a unique ID
    iss:"chat",
    // sub:"vpaas-magic-cookie-835a165c88fc4fb294e28fc9f2126f6a",
    sub: process.env.JAAS_SUB,
    // appId: "vpaas-magic-cookie-835a165c88fc4fb294e28fc9f2126f6a",
    appId: process.env.JAAS_APP_ID,
    room: "*",
    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 2 // Your AppID
  };

  // Read the private key from the .pk file
  // const privateKeyPath = path.join(__dirname, 'd:/yoga/Key 10_13_2024, 8_34_40 PM.pk');
//   const privateKey = `-----BEGIN PRIVATE KEY-----
// MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDBpd8e3NrQUDWg
// rjzDyhjfhYRQhXKO4aBQp5EFO50tX8sT5d6BiNWjVvfi+FIKwN8BgdQ3jRXgJKVj
// mSiy/NUSzjyyfAnzzBAymWcpjrhAVdjAchUF+xZ4tgJZPbmdMDlDYVo2vc1zHhOt
// h1DMHo58SMV52x5lK+I0YyxsO1O6EhRCt+MN1u/dRPXoyyDK0MgX8SVQOb7AZq0W
// 7O0VWaAaE9poueY518QOcPUOvFSgsA/gv+WeyPNTB1d+aFdEfn/6cqDuOxx7+i8U
// Zr/yFH7UrvA9MrsLI2RDgFUcjOTPJw5IET/eQnwfWpJ35HfDiCrKzPIWMmYChLOc
// g6i3sC71AgMBAAECggEAD0Ox+M7T+MO51nall5FgsI3nxikexKCIcJMk3VK7qw34
// BhOCnJdar8t1MtD8NpjJe2bugYp/hPGej+FM0f8YFKlpI3CfoDYfuL1a4m27nGan
// 9VOI0LXgKZe/S6WP8hIREXylDdecUEy4pF8cQVrPRIDAAEEDflodNJ/0qntquCn9
// TjzqDsaAlfzv6p7DYHKmamV+PlwMy7g9Kt5cNZKRRGZCiZYREVpFaCei3ip8z1KS
// PAUuOtvg9G2CMUa+8yttou41NaseBilWBxDDQkrlVU56tXSwA+u45RqXC+AFjzU0
// hPOg5WArX9mtNzNOg4Fd41DXCh274Tnffj0G7/1VAQKBgQD7cd0wXdT2rnH0uwJb
// R0kI7sxxB1WXSL0Y3fC9aTkY1XKaTF2eoXdfgj3Pgj2WCIJuGkQjEhSzQa1f5n7O
// fxob/ontTomRDw8258QsaMtA32/yoEXxQBdeMq/VfLT+iuMcytXreqcARi4uGsvJ
// c7gR9/NXin2WUquleGJCaYJG4QKBgQDFJ/XwP/x0c26DIieemlL6RvrZKSlf30ed
// YokRDQSJsqo5FOW2VFIutcYsscrP8rIp0s1QklkUJaVb2nelavxJG4hcNx3i+ZYF
// 7kGIL3wz8BoFpOI1sX1dVxvQeYi9LKOyWT9mk1NLe10Z44/sgyhVpKD+mVhXnh6Y
// MfrjCLCulQKBgQDJAP8W+QuTn2RNhWme2l+SGoOoH3rWkzlHNbSLViBkr80Ld9yn
// QOCSoyUSS0U8ONU7exfZCU0u92PHdBUOsiCHHHXaFJx4L5e0BpaWAbfpxjRRurnu
// 35NOpCpX+XcevJxNmgBkXApAd9nW1WjvQ+hzxMjsxDMdBj1c691wxbN1QQKBgFoC
// RGXK0JbZnDqB/VSLYBajESLTh/AdH7Tap3kBWHEFAHHO+JClLl/k3PTKtqz5QB2X
// /+Qo7EImbbfhpX3/ue4mg7qV7y8Qg01x2Lkz9KBBnZ+2BxA8V9+lRS2ITsUO/C0Q
// UcGiwQRU7cxD+BEiT+fJoTabC5n0tkMFjmTYMtGBAoGAOwFBgIhs+isE6vgPycU+
// P7sBKGpZ8xdqxaqL5C0+mug7GODp6SxXn2ExoXPh03V6qrNNdsDvp+RqFOPkFbEH
// CUFUSdsSG0EtGVV3GrRltKjLc4rNCQCKn6m3bWMZ3j/q09egfDR99CCIcxpkI/yW
// 1xb+6KiB/0OsK1J83Al9QZ4=
// -----END PRIVATE KEY-----`


  const options = {
    algorithm: 'RS256', // Use RS256 for signing
    // keyid: "vpaas-magic-cookie-835a165c88fc4fb294e28fc9f2126f6a/26ac09", // Set the API key
    keyid: process.env.JAAS_KEY_ID,
  };

  const token = sign(payload, process.env.JAAS_PRIVATE_KEY, options);

  console.log(token); // Write JWT to console
  return token;
};

generateJaasJwt();
