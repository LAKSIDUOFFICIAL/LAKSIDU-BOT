# QUEEN ISHU WHATSAPP BOT CREATE BY LAKSIDU





</details>
<hr>
<img src="http://readme-typing-svg.herokuapp.com?color=d1fa02&center=true&vCenter=true&multiline=false&lines=Created+By+Laksidu_Min" alt="">
<hr>

# COPY THE CODE



**🎀🎀🎀🎀🎀🎀🎀FREE DEPLOY WORKFLOWS🎀🎀🎀🎀🎀🎀🎀**
```
name: Node.js CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - name: Install dependencies
      run: npm install

    - name: Start application
      run: npm start
```
