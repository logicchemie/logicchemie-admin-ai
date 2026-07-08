FROM node:16

RUN mkdir -p ./tisio-online-panel
COPY . ./tisio-online-panel

RUN npm install --prefix ./tisio-online-panel


CMD [ "node", "./tisio-online-panel/index.js" ] 
