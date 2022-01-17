# CS-561-Assignment-2

app.js file establishes localhost through port 3000 which gives the mock response weather data. 
(refer app.js file comments for details.)



## Steps:
1) Create and launch instance. (Check the security group has your local port; I selected "all TCP")
2) Then used following commands to get nodejs working:
     wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash <br />
     reboot instance <br />
     command -v nvm <br />
     nvm install node <br />
     npm install express --save 
     
3)Then run : node app2.js
4)Then after connecting, copy public ip address and enter link like: http://3.83.54.103:3000/data/2.5/weather?q=Corvallis&appid=put_your_api_key_here

## Output:

![image](https://user-images.githubusercontent.com/68733686/149707200-5f4028eb-99b0-4e7d-ae84-b7bc2979e2e7.png)

#### To check the output even after closing the instance window. 
I used following commands: 
npm i -g pm2 <br />
pm2 start app2.js (app.js is my config file)
