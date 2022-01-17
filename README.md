# CS-561-Assignment-2





## Steps:
1) Create and launch instance. (Check the security group has your local port; I selected "all TCP")
2) Then used following commands to get nodejs working:
     wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
     reboot instance
     command -v nvm
     nvm install node
     npm install express --save
3)Then run : node app.js
4)Then after connecting, copy public ip address and enter link like: http://3.83.54.103:3000/data/2.5/weather?q=Corvallis&appid=put_your_api_key_here

## Output:


