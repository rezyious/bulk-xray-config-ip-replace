# Setup

Make sure **node** and/or **python** are installed.
use something like **nvm** for example.

### create 2 files :

a **config.txt** file that has your config in a format like this:
` vless://<UUID>@<domain_or_IP>:<PORT>?encryption=none&security=tls&sni=<SNI>&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=<domain>&path=%2Fapi#domain`

and a **IPs.txt** file that comes from CFScannser exported format like this:
<code>1464 - 1779 - 104.16.32.197
1469 - 1213 - 104.16.32.82
1491 - 1711 - 104.16.32.134
1507 - 1971 - 104.16.32.17
1508 - 1302 - 104.16.32.138</code>

Make sure that the files are **IPs.txt** and **config.txt**

run any of the scripts:
`node index.js`

`python3 app.py`

A **results.txt** file will be created.
Simply create a subscription and import the **results.txt**
