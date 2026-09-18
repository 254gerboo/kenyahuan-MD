const fs = require('fs-extra');
const axios = require('axios');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const isUrl = (url) => /https?:\/\//i.test(String(url || ''));

async function getBuffer(input, options = {}) {
  if (!input) return Buffer.alloc(0);
  if (Buffer.isBuffer(input)) return input;
  if (typeof input === 'string') {
    if (fs.existsSync(input)) return fs.readFileSync(input);
    if (isUrl(input)) {
      const res = await axios.get(input, {
        responseType: 'arraybuffer',
        ...(options || {}),
      });
      return Buffer.from(res.data);
    }
    return Buffer.from(input, 'utf-8');
  }
  if (ArrayBuffer.isView(input)) return Buffer.from(input.buffer, input.byteOffset, input.byteLength);
  if (input instanceof ArrayBuffer) return Buffer.from(input);
  return Buffer.from(String(input));
}

async function fetchJson(url, options = {}) {
  const response = await axios({
    url,
    ...options,
    validateStatus: () => true,
  });
  return response.data;
}

const runtime = () => {
  const seconds = Number(process.uptime().toFixed(2));
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  return `${hours}h ${minutes}m ${secs}s`;
};

const formatDate = (date = new Date()) => {
  const d = new Date(date);
  return d.toLocaleString();
};

const bytesToSize = (bytes = 0) => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 Bytes';
  const i = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), sizes.length - 1);
  const value = bytes / 1024 ** i;
  return `${value.toFixed(2)} ${sizes[i]}`;
};

const getSizeMedia = (buffer) => (buffer ? Buffer.byteLength(buffer) : 0);

const parseMention = (text = '') => (text.match(/@\d+/g) || []).map((v) => v.replace('@', ''));

const logic = (check, trueValue, falseValue) => (check ? trueValue : falseValue);

const smdBuffer = (data) => Buffer.from(data || '');

const jsonformat = (obj) => JSON.stringify(obj, null, 2);

const formatp = (value) => {
  if (!value && value !== 0) return '0';
  return Number(value).toLocaleString();
};

const generateProfilePicture = async (buffer) => buffer;

const GIFBufferToVideoBuffer = async (buffer) => buffer;

const styletext = (text) => text;

module.exports = {
  getBuffer,
  fetchJson,
  runtime,
  sleep,
  isUrl,
  GIFBufferToVideoBuffer,
  formatDate,
  bytesToSize,
  getSizeMedia,
  parseMention,
  logic,
  smdBuffer,
  jsonformat,
  formatp,
  generateProfilePicture,
  styletext,
};
