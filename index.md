# ![logo](assets/images/icon-24x24.png) Write Better 

[![Build Status](https://travis-ci.org/justiceo/write-better.svg?branch=master)](https://travis-ci.org/justiceo/write-better)

An English language grammar checker for Google docs. A.K.A the chrome extension port of [Btford's WriteGood](https://github.com/btford/write-good) which is a bundling of different naive English language linters. I checked for grammatical errors on this README using WriteBetter ;)

![Sample Suggestions](assets/images/screenshot1.png)

### Features
* **Works Offline**: It comes packaged with all the resources needed to parse text, generate and display suggestions on Google docs and under 100Kb in size! See how to [inspect requests made by chrome extensions](https://www.howtogeek.com/302558/how-do-you-monitor-requests-made-by-a-google-chrome-extension/) if you're curious about what data other extensions are sending or requesting.
* **Privacy First**: The texts of your Google docs are never uploaded to a remote server or stored locally. All analysis happen offline and on demand in the browser. See what [can go wrong when extensions make copies of your data](https://gizmodo.com/grammarly-bug-let-snoops-read-everything-you-wrote-onli-1822740378). 
* **Open Source**: You can browse [the code here](https://github.com/justiceo/write-better), [modify and build it yourself](#build-the-extension-locally). It is a stringing of existing open source language libraries. See the [list of libraries](https://github.com/btford/write-good#checks) used.
* **It's Free!**: Sorry I needed to include this given that it costs about $20 to get a pro paper review on services like Fiverr or Grammarly.