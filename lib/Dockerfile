FROM quay.io/254gerboo/kenyahuan:latest

RUN git clone https://github.com/254gerboo/kenyahuan-MD /root/kenyahuan-MD
WORKDIR /root/kenyahuan-MD/
RUN yarn install --network-concurrency 1, install
CMD ["node", "index.js"]