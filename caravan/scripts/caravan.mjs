#!/usr/bin/env node
/* eslint-disable */
// Caravan standalone; base-main 14bdb9a10a56dd492d83b68fef3f51424c6babf1; SDK-public-source-tree 775797591389061f7130006b08847b140c433045; esbuild 0.28.1.
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res, err) => function __init() {
  if (err) throw err[0];
  try {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  } catch (e) {
    throw err = [e], e;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/data/isHex.js
function isHex(value, { strict = true } = {}) {
  if (!value)
    return false;
  if (typeof value !== "string")
    return false;
  return strict ? /^0x[0-9a-fA-F]*$/.test(value) : value.startsWith("0x");
}
var init_isHex = __esm({
  "node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/data/isHex.js"() {
  }
});

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/data/size.js
function size(value) {
  if (isHex(value, { strict: false }))
    return Math.ceil((value.length - 2) / 2);
  return value.length;
}
var init_size = __esm({
  "node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/data/size.js"() {
    init_isHex();
  }
});

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/errors/version.js
var version;
var init_version = __esm({
  "node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/errors/version.js"() {
    version = "2.55.1";
  }
});

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/errors/base.js
function walk(err, fn) {
  if (fn?.(err))
    return err;
  if (err && typeof err === "object" && "cause" in err && err.cause !== void 0)
    return walk(err.cause, fn);
  return fn ? null : err;
}
var errorConfig, BaseError;
var init_base = __esm({
  "node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/errors/base.js"() {
    init_version();
    errorConfig = {
      getDocsUrl: ({ docsBaseUrl, docsPath = "", docsSlug }) => docsPath ? `${docsBaseUrl ?? "https://viem.sh"}${docsPath}${docsSlug ? `#${docsSlug}` : ""}` : void 0,
      version: `viem@${version}`
    };
    BaseError = class _BaseError extends Error {
      constructor(shortMessage, args = {}) {
        const details = (() => {
          if (args.cause instanceof _BaseError)
            return args.cause.details;
          if (args.cause?.message)
            return args.cause.message;
          return args.details;
        })();
        const docsPath = (() => {
          if (args.cause instanceof _BaseError)
            return args.cause.docsPath || args.docsPath;
          return args.docsPath;
        })();
        const docsUrl = errorConfig.getDocsUrl?.({ ...args, docsPath });
        const message = [
          shortMessage || "An error occurred.",
          "",
          ...args.metaMessages ? [...args.metaMessages, ""] : [],
          ...docsUrl ? [`Docs: ${docsUrl}`] : [],
          ...details ? [`Details: ${details}`] : [],
          ...errorConfig.version ? [`Version: ${errorConfig.version}`] : []
        ].join("\n");
        super(message, args.cause ? { cause: args.cause } : void 0);
        Object.defineProperty(this, "details", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "docsPath", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "metaMessages", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "shortMessage", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "version", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "BaseError"
        });
        this.details = details;
        this.docsPath = docsPath;
        this.metaMessages = args.metaMessages;
        this.name = args.name ?? this.name;
        this.shortMessage = shortMessage;
        this.version = version;
      }
      walk(fn) {
        return walk(this, fn);
      }
    };
  }
});

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/errors/abi.js
var AbiEncodingArrayLengthMismatchError, AbiEncodingBytesSizeMismatchError, AbiEncodingLengthMismatchError, BytesSizeMismatchError, InvalidAbiEncodingTypeError, InvalidArrayError;
var init_abi = __esm({
  "node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/errors/abi.js"() {
    init_size();
    init_base();
    AbiEncodingArrayLengthMismatchError = class extends BaseError {
      constructor({ expectedLength, givenLength, type }) {
        super([
          `ABI encoding array length mismatch for type ${type}.`,
          `Expected length: ${expectedLength}`,
          `Given length: ${givenLength}`
        ].join("\n"), { name: "AbiEncodingArrayLengthMismatchError" });
      }
    };
    AbiEncodingBytesSizeMismatchError = class extends BaseError {
      constructor({ expectedSize, value }) {
        super(`Size of bytes "${value}" (bytes${size(value)}) does not match expected size (bytes${expectedSize}).`, { name: "AbiEncodingBytesSizeMismatchError" });
      }
    };
    AbiEncodingLengthMismatchError = class extends BaseError {
      constructor({ expectedLength, givenLength }) {
        super([
          "ABI encoding params/values length mismatch.",
          `Expected length (params): ${expectedLength}`,
          `Given length (values): ${givenLength}`
        ].join("\n"), { name: "AbiEncodingLengthMismatchError" });
      }
    };
    BytesSizeMismatchError = class extends BaseError {
      constructor({ expectedSize, givenSize }) {
        super(`Expected bytes${expectedSize}, got bytes${givenSize}.`, {
          name: "BytesSizeMismatchError"
        });
      }
    };
    InvalidAbiEncodingTypeError = class extends BaseError {
      constructor(type, { docsPath }) {
        super([
          `Type "${type}" is not a valid encoding type.`,
          "Please provide a valid ABI type."
        ].join("\n"), { docsPath, name: "InvalidAbiEncodingType" });
      }
    };
    InvalidArrayError = class extends BaseError {
      constructor(value) {
        super([`Value "${value}" is not a valid array.`].join("\n"), {
          name: "InvalidArrayError"
        });
      }
    };
  }
});

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/errors/data.js
var SliceOffsetOutOfBoundsError, SizeExceedsPaddingSizeError;
var init_data = __esm({
  "node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/errors/data.js"() {
    init_base();
    SliceOffsetOutOfBoundsError = class extends BaseError {
      constructor({ offset, position, size: size2 }) {
        super(`Slice ${position === "start" ? "starting" : "ending"} at offset "${offset}" is out-of-bounds (size: ${size2}).`, { name: "SliceOffsetOutOfBoundsError" });
      }
    };
    SizeExceedsPaddingSizeError = class extends BaseError {
      constructor({ size: size2, targetSize, type }) {
        super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} size (${size2}) exceeds padding size (${targetSize}).`, { name: "SizeExceedsPaddingSizeError" });
      }
    };
  }
});

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/data/pad.js
function pad(hexOrBytes, { dir, size: size2 = 32 } = {}) {
  if (typeof hexOrBytes === "string")
    return padHex(hexOrBytes, { dir, size: size2 });
  return padBytes(hexOrBytes, { dir, size: size2 });
}
function padHex(hex_, { dir, size: size2 = 32 } = {}) {
  if (size2 === null)
    return hex_;
  const hex = hex_.replace("0x", "");
  if (hex.length > size2 * 2)
    throw new SizeExceedsPaddingSizeError({
      size: Math.ceil(hex.length / 2),
      targetSize: size2,
      type: "hex"
    });
  return `0x${hex[dir === "right" ? "padEnd" : "padStart"](size2 * 2, "0")}`;
}
function padBytes(bytes, { dir, size: size2 = 32 } = {}) {
  if (size2 === null)
    return bytes;
  if (bytes.length > size2)
    throw new SizeExceedsPaddingSizeError({
      size: bytes.length,
      targetSize: size2,
      type: "bytes"
    });
  const paddedBytes = new Uint8Array(size2);
  for (let i = 0; i < size2; i++) {
    const padEnd = dir === "right";
    paddedBytes[padEnd ? i : size2 - i - 1] = bytes[padEnd ? i : bytes.length - i - 1];
  }
  return paddedBytes;
}
var init_pad = __esm({
  "node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/data/pad.js"() {
    init_data();
  }
});

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/errors/encoding.js
var IntegerOutOfRangeError, SizeOverflowError;
var init_encoding = __esm({
  "node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/errors/encoding.js"() {
    init_base();
    IntegerOutOfRangeError = class extends BaseError {
      constructor({ max, min, signed, size: size2, value }) {
        super(`Number "${value}" is not in safe ${size2 ? `${size2 * 8}-bit ${signed ? "signed" : "unsigned"} ` : ""}integer range ${max ? `(${min} to ${max})` : `(above ${min})`}`, { name: "IntegerOutOfRangeError" });
      }
    };
    SizeOverflowError = class extends BaseError {
      constructor({ givenSize, maxSize }) {
        super(`Size cannot exceed ${maxSize} bytes. Given size: ${givenSize} bytes.`, { name: "SizeOverflowError" });
      }
    };
  }
});

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/data/trim.js
function trim(hexOrBytes, { dir = "left" } = {}) {
  let data = typeof hexOrBytes === "string" ? hexOrBytes.replace("0x", "") : hexOrBytes;
  let sliceLength = 0;
  for (let i = 0; i < data.length - 1; i++) {
    if (data[dir === "left" ? i : data.length - i - 1].toString() === "0")
      sliceLength++;
    else
      break;
  }
  data = dir === "left" ? data.slice(sliceLength) : data.slice(0, data.length - sliceLength);
  if (typeof hexOrBytes === "string") {
    if (data.length === 1 && dir === "right")
      data = `${data}0`;
    return `0x${data.length % 2 === 1 ? `0${data}` : data}`;
  }
  return data;
}
var init_trim = __esm({
  "node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/data/trim.js"() {
  }
});

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/encoding/fromHex.js
function assertSize(hexOrBytes, { size: size2 }) {
  if (size(hexOrBytes) > size2)
    throw new SizeOverflowError({
      givenSize: size(hexOrBytes),
      maxSize: size2
    });
}
function hexToBigInt(hex, opts = {}) {
  const { signed } = opts;
  if (opts.size)
    assertSize(hex, { size: opts.size });
  const value = BigInt(hex);
  if (!signed)
    return value;
  const size2 = (hex.length - 2) / 2;
  const max = (1n << BigInt(size2) * 8n - 1n) - 1n;
  if (value <= max)
    return value;
  return value - BigInt(`0x${"f".padStart(size2 * 2, "f")}`) - 1n;
}
function hexToNumber(hex, opts = {}) {
  const value = hexToBigInt(hex, opts);
  const number = Number(value);
  if (!Number.isSafeInteger(number))
    throw new IntegerOutOfRangeError({
      max: `${Number.MAX_SAFE_INTEGER}`,
      min: `${Number.MIN_SAFE_INTEGER}`,
      signed: opts.signed,
      size: opts.size,
      value: `${value}n`
    });
  return number;
}
var init_fromHex = __esm({
  "node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/encoding/fromHex.js"() {
    init_encoding();
    init_size();
  }
});

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/encoding/toHex.js
function toHex(value, opts = {}) {
  if (typeof value === "number" || typeof value === "bigint")
    return numberToHex(value, opts);
  if (typeof value === "string") {
    return stringToHex(value, opts);
  }
  if (typeof value === "boolean")
    return boolToHex(value, opts);
  return bytesToHex(value, opts);
}
function boolToHex(value, opts = {}) {
  const hex = `0x${Number(value)}`;
  if (typeof opts.size === "number") {
    assertSize(hex, { size: opts.size });
    return pad(hex, { size: opts.size });
  }
  return hex;
}
function bytesToHex(value, opts = {}) {
  let string2 = "";
  for (let i = 0; i < value.length; i++) {
    string2 += hexes[value[i]];
  }
  const hex = `0x${string2}`;
  if (typeof opts.size === "number") {
    assertSize(hex, { size: opts.size });
    return pad(hex, { dir: "right", size: opts.size });
  }
  return hex;
}
function numberToHex(value_, opts = {}) {
  const { signed, size: size2 } = opts;
  const value = BigInt(value_);
  let maxValue;
  if (size2) {
    if (signed)
      maxValue = (1n << BigInt(size2) * 8n - 1n) - 1n;
    else
      maxValue = 2n ** (BigInt(size2) * 8n) - 1n;
  } else if (typeof value_ === "number") {
    maxValue = BigInt(Number.MAX_SAFE_INTEGER);
  }
  const minValue = typeof maxValue === "bigint" && signed ? -maxValue - 1n : 0;
  if (maxValue && value > maxValue || value < minValue) {
    const suffix = typeof value_ === "bigint" ? "n" : "";
    throw new IntegerOutOfRangeError({
      max: maxValue ? `${maxValue}${suffix}` : void 0,
      min: `${minValue}${suffix}`,
      signed,
      size: size2,
      value: `${value_}${suffix}`
    });
  }
  const hex = `0x${(signed && value < 0 ? (1n << BigInt(size2 * 8)) + BigInt(value) : value).toString(16)}`;
  if (size2)
    return pad(hex, { size: size2 });
  return hex;
}
function stringToHex(value_, opts = {}) {
  const value = encoder.encode(value_);
  return bytesToHex(value, opts);
}
var hexes, encoder;
var init_toHex = __esm({
  "node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/encoding/toHex.js"() {
    init_encoding();
    init_pad();
    init_fromHex();
    hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_v, i) => i.toString(16).padStart(2, "0"));
    encoder = /* @__PURE__ */ new TextEncoder();
  }
});

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/encoding/toBytes.js
function toBytes(value, opts = {}) {
  if (typeof value === "number" || typeof value === "bigint")
    return numberToBytes(value, opts);
  if (typeof value === "boolean")
    return boolToBytes(value, opts);
  if (isHex(value))
    return hexToBytes(value, opts);
  return stringToBytes(value, opts);
}
function boolToBytes(value, opts = {}) {
  const bytes = new Uint8Array(1);
  bytes[0] = Number(value);
  if (typeof opts.size === "number") {
    assertSize(bytes, { size: opts.size });
    return pad(bytes, { size: opts.size });
  }
  return bytes;
}
function charCodeToBase16(char) {
  if (char >= charCodeMap.zero && char <= charCodeMap.nine)
    return char - charCodeMap.zero;
  if (char >= charCodeMap.A && char <= charCodeMap.F)
    return char - (charCodeMap.A - 10);
  if (char >= charCodeMap.a && char <= charCodeMap.f)
    return char - (charCodeMap.a - 10);
  return void 0;
}
function hexToBytes(hex_, opts = {}) {
  let hex = hex_;
  if (opts.size) {
    assertSize(hex, { size: opts.size });
    hex = pad(hex, { dir: "right", size: opts.size });
  }
  let hexString = hex.slice(2);
  if (hexString.length % 2)
    hexString = `0${hexString}`;
  const length = hexString.length / 2;
  const bytes = new Uint8Array(length);
  for (let index = 0, j = 0; index < length; index++) {
    const nibbleLeft = charCodeToBase16(hexString.charCodeAt(j++));
    const nibbleRight = charCodeToBase16(hexString.charCodeAt(j++));
    if (nibbleLeft === void 0 || nibbleRight === void 0) {
      throw new BaseError(`Invalid byte sequence ("${hexString[j - 2]}${hexString[j - 1]}" in "${hexString}").`);
    }
    bytes[index] = nibbleLeft * 16 + nibbleRight;
  }
  return bytes;
}
function numberToBytes(value, opts) {
  const hex = numberToHex(value, opts);
  return hexToBytes(hex);
}
function stringToBytes(value, opts = {}) {
  const bytes = encoder2.encode(value);
  if (typeof opts.size === "number") {
    assertSize(bytes, { size: opts.size });
    return pad(bytes, { dir: "right", size: opts.size });
  }
  return bytes;
}
var encoder2, charCodeMap;
var init_toBytes = __esm({
  "node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/encoding/toBytes.js"() {
    init_base();
    init_isHex();
    init_pad();
    init_fromHex();
    init_toHex();
    encoder2 = /* @__PURE__ */ new TextEncoder();
    charCodeMap = {
      zero: 48,
      nine: 57,
      A: 65,
      F: 70,
      a: 97,
      f: 102
    };
  }
});

// node_modules/.pnpm/@noble+hashes@1.8.0/node_modules/@noble/hashes/esm/_u64.js
function fromBig(n, le = false) {
  if (le)
    return { h: Number(n & U32_MASK64), l: Number(n >> _32n & U32_MASK64) };
  return { h: Number(n >> _32n & U32_MASK64) | 0, l: Number(n & U32_MASK64) | 0 };
}
function split(lst, le = false) {
  const len = lst.length;
  let Ah = new Uint32Array(len);
  let Al = new Uint32Array(len);
  for (let i = 0; i < len; i++) {
    const { h, l } = fromBig(lst[i], le);
    [Ah[i], Al[i]] = [h, l];
  }
  return [Ah, Al];
}
var U32_MASK64, _32n, rotlSH, rotlSL, rotlBH, rotlBL;
var init_u64 = __esm({
  "node_modules/.pnpm/@noble+hashes@1.8.0/node_modules/@noble/hashes/esm/_u64.js"() {
    U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
    _32n = /* @__PURE__ */ BigInt(32);
    rotlSH = (h, l, s) => h << s | l >>> 32 - s;
    rotlSL = (h, l, s) => l << s | h >>> 32 - s;
    rotlBH = (h, l, s) => l << s - 32 | h >>> 64 - s;
    rotlBL = (h, l, s) => h << s - 32 | l >>> 64 - s;
  }
});

// node_modules/.pnpm/@noble+hashes@1.8.0/node_modules/@noble/hashes/esm/cryptoNode.js
import * as nc from "node:crypto";
var crypto2;
var init_cryptoNode = __esm({
  "node_modules/.pnpm/@noble+hashes@1.8.0/node_modules/@noble/hashes/esm/cryptoNode.js"() {
    crypto2 = nc && typeof nc === "object" && "webcrypto" in nc ? nc.webcrypto : nc && typeof nc === "object" && "randomBytes" in nc ? nc : void 0;
  }
});

// node_modules/.pnpm/@noble+hashes@1.8.0/node_modules/@noble/hashes/esm/utils.js
function isBytes(a) {
  return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === "Uint8Array";
}
function anumber(n) {
  if (!Number.isSafeInteger(n) || n < 0)
    throw new Error("positive integer expected, got " + n);
}
function abytes(b, ...lengths) {
  if (!isBytes(b))
    throw new Error("Uint8Array expected");
  if (lengths.length > 0 && !lengths.includes(b.length))
    throw new Error("Uint8Array expected of length " + lengths + ", got length=" + b.length);
}
function ahash(h) {
  if (typeof h !== "function" || typeof h.create !== "function")
    throw new Error("Hash should be wrapped by utils.createHasher");
  anumber(h.outputLen);
  anumber(h.blockLen);
}
function aexists(instance, checkFinished = true) {
  if (instance.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (checkFinished && instance.finished)
    throw new Error("Hash#digest() has already been called");
}
function aoutput(out, instance) {
  abytes(out);
  const min = instance.outputLen;
  if (out.length < min) {
    throw new Error("digestInto() expects output buffer of length at least " + min);
  }
}
function u32(arr) {
  return new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
}
function clean(...arrays) {
  for (let i = 0; i < arrays.length; i++) {
    arrays[i].fill(0);
  }
}
function createView(arr) {
  return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
}
function rotr(word, shift) {
  return word << 32 - shift | word >>> shift;
}
function byteSwap(word) {
  return word << 24 & 4278190080 | word << 8 & 16711680 | word >>> 8 & 65280 | word >>> 24 & 255;
}
function byteSwap32(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = byteSwap(arr[i]);
  }
  return arr;
}
function utf8ToBytes(str) {
  if (typeof str !== "string")
    throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(str));
}
function toBytes2(data) {
  if (typeof data === "string")
    data = utf8ToBytes(data);
  abytes(data);
  return data;
}
function concatBytes(...arrays) {
  let sum = 0;
  for (let i = 0; i < arrays.length; i++) {
    const a = arrays[i];
    abytes(a);
    sum += a.length;
  }
  const res = new Uint8Array(sum);
  for (let i = 0, pad2 = 0; i < arrays.length; i++) {
    const a = arrays[i];
    res.set(a, pad2);
    pad2 += a.length;
  }
  return res;
}
function createHasher(hashCons) {
  const hashC = (msg) => hashCons().update(toBytes2(msg)).digest();
  const tmp = hashCons();
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = () => hashCons();
  return hashC;
}
function randomBytes(bytesLength = 32) {
  if (crypto2 && typeof crypto2.getRandomValues === "function") {
    return crypto2.getRandomValues(new Uint8Array(bytesLength));
  }
  if (crypto2 && typeof crypto2.randomBytes === "function") {
    return Uint8Array.from(crypto2.randomBytes(bytesLength));
  }
  throw new Error("crypto.getRandomValues must be defined");
}
var isLE, swap32IfBE, Hash;
var init_utils = __esm({
  "node_modules/.pnpm/@noble+hashes@1.8.0/node_modules/@noble/hashes/esm/utils.js"() {
    init_cryptoNode();
    isLE = /* @__PURE__ */ (() => new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68)();
    swap32IfBE = isLE ? (u) => u : byteSwap32;
    Hash = class {
    };
  }
});

// node_modules/.pnpm/@noble+hashes@1.8.0/node_modules/@noble/hashes/esm/sha3.js
function keccakP(s, rounds = 24) {
  const B = new Uint32Array(5 * 2);
  for (let round = 24 - rounds; round < 24; round++) {
    for (let x = 0; x < 10; x++)
      B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
    for (let x = 0; x < 10; x += 2) {
      const idx1 = (x + 8) % 10;
      const idx0 = (x + 2) % 10;
      const B0 = B[idx0];
      const B1 = B[idx0 + 1];
      const Th = rotlH(B0, B1, 1) ^ B[idx1];
      const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
      for (let y = 0; y < 50; y += 10) {
        s[x + y] ^= Th;
        s[x + y + 1] ^= Tl;
      }
    }
    let curH = s[2];
    let curL = s[3];
    for (let t = 0; t < 24; t++) {
      const shift = SHA3_ROTL[t];
      const Th = rotlH(curH, curL, shift);
      const Tl = rotlL(curH, curL, shift);
      const PI = SHA3_PI[t];
      curH = s[PI];
      curL = s[PI + 1];
      s[PI] = Th;
      s[PI + 1] = Tl;
    }
    for (let y = 0; y < 50; y += 10) {
      for (let x = 0; x < 10; x++)
        B[x] = s[y + x];
      for (let x = 0; x < 10; x++)
        s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
    }
    s[0] ^= SHA3_IOTA_H[round];
    s[1] ^= SHA3_IOTA_L[round];
  }
  clean(B);
}
var _0n, _1n, _2n, _7n, _256n, _0x71n, SHA3_PI, SHA3_ROTL, _SHA3_IOTA, IOTAS, SHA3_IOTA_H, SHA3_IOTA_L, rotlH, rotlL, Keccak, gen, keccak_256;
var init_sha3 = __esm({
  "node_modules/.pnpm/@noble+hashes@1.8.0/node_modules/@noble/hashes/esm/sha3.js"() {
    init_u64();
    init_utils();
    _0n = BigInt(0);
    _1n = BigInt(1);
    _2n = BigInt(2);
    _7n = BigInt(7);
    _256n = BigInt(256);
    _0x71n = BigInt(113);
    SHA3_PI = [];
    SHA3_ROTL = [];
    _SHA3_IOTA = [];
    for (let round = 0, R = _1n, x = 1, y = 0; round < 24; round++) {
      [x, y] = [y, (2 * x + 3 * y) % 5];
      SHA3_PI.push(2 * (5 * y + x));
      SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
      let t = _0n;
      for (let j = 0; j < 7; j++) {
        R = (R << _1n ^ (R >> _7n) * _0x71n) % _256n;
        if (R & _2n)
          t ^= _1n << (_1n << /* @__PURE__ */ BigInt(j)) - _1n;
      }
      _SHA3_IOTA.push(t);
    }
    IOTAS = split(_SHA3_IOTA, true);
    SHA3_IOTA_H = IOTAS[0];
    SHA3_IOTA_L = IOTAS[1];
    rotlH = (h, l, s) => s > 32 ? rotlBH(h, l, s) : rotlSH(h, l, s);
    rotlL = (h, l, s) => s > 32 ? rotlBL(h, l, s) : rotlSL(h, l, s);
    Keccak = class _Keccak extends Hash {
      // NOTE: we accept arguments in bytes instead of bits here.
      constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
        super();
        this.pos = 0;
        this.posOut = 0;
        this.finished = false;
        this.destroyed = false;
        this.enableXOF = false;
        this.blockLen = blockLen;
        this.suffix = suffix;
        this.outputLen = outputLen;
        this.enableXOF = enableXOF;
        this.rounds = rounds;
        anumber(outputLen);
        if (!(0 < blockLen && blockLen < 200))
          throw new Error("only keccak-f1600 function is supported");
        this.state = new Uint8Array(200);
        this.state32 = u32(this.state);
      }
      clone() {
        return this._cloneInto();
      }
      keccak() {
        swap32IfBE(this.state32);
        keccakP(this.state32, this.rounds);
        swap32IfBE(this.state32);
        this.posOut = 0;
        this.pos = 0;
      }
      update(data) {
        aexists(this);
        data = toBytes2(data);
        abytes(data);
        const { blockLen, state } = this;
        const len = data.length;
        for (let pos = 0; pos < len; ) {
          const take = Math.min(blockLen - this.pos, len - pos);
          for (let i = 0; i < take; i++)
            state[this.pos++] ^= data[pos++];
          if (this.pos === blockLen)
            this.keccak();
        }
        return this;
      }
      finish() {
        if (this.finished)
          return;
        this.finished = true;
        const { state, suffix, pos, blockLen } = this;
        state[pos] ^= suffix;
        if ((suffix & 128) !== 0 && pos === blockLen - 1)
          this.keccak();
        state[blockLen - 1] ^= 128;
        this.keccak();
      }
      writeInto(out) {
        aexists(this, false);
        abytes(out);
        this.finish();
        const bufferOut = this.state;
        const { blockLen } = this;
        for (let pos = 0, len = out.length; pos < len; ) {
          if (this.posOut >= blockLen)
            this.keccak();
          const take = Math.min(blockLen - this.posOut, len - pos);
          out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
          this.posOut += take;
          pos += take;
        }
        return out;
      }
      xofInto(out) {
        if (!this.enableXOF)
          throw new Error("XOF is not possible for this instance");
        return this.writeInto(out);
      }
      xof(bytes) {
        anumber(bytes);
        return this.xofInto(new Uint8Array(bytes));
      }
      digestInto(out) {
        aoutput(out, this);
        if (this.finished)
          throw new Error("digest() was already called");
        this.writeInto(out);
        this.destroy();
        return out;
      }
      digest() {
        return this.digestInto(new Uint8Array(this.outputLen));
      }
      destroy() {
        this.destroyed = true;
        clean(this.state);
      }
      _cloneInto(to) {
        const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
        to || (to = new _Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
        to.state32.set(this.state32);
        to.pos = this.pos;
        to.posOut = this.posOut;
        to.finished = this.finished;
        to.rounds = rounds;
        to.suffix = suffix;
        to.outputLen = outputLen;
        to.enableXOF = enableXOF;
        to.destroyed = this.destroyed;
        return to;
      }
    };
    gen = (suffix, blockLen, outputLen) => createHasher(() => new Keccak(blockLen, suffix, outputLen));
    keccak_256 = /* @__PURE__ */ (() => gen(1, 136, 256 / 8))();
  }
});

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/hash/keccak256.js
function keccak256(value, to_) {
  const to = to_ || "hex";
  const bytes = keccak_256(isHex(value, { strict: false }) ? toBytes(value) : value);
  if (to === "bytes")
    return bytes;
  return toHex(bytes);
}
var init_keccak256 = __esm({
  "node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/hash/keccak256.js"() {
    init_sha3();
    init_isHex();
    init_toBytes();
    init_toHex();
  }
});

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/errors/address.js
var InvalidAddressError;
var init_address = __esm({
  "node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/errors/address.js"() {
    init_base();
    InvalidAddressError = class extends BaseError {
      constructor({ address: address2 }) {
        super(`Address "${address2}" is invalid.`, {
          metaMessages: [
            "- Address must be a hex value of 20 bytes (40 hex characters).",
            "- Address must match its checksum counterpart."
          ],
          name: "InvalidAddressError"
        });
      }
    };
  }
});

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/lru.js
var LruMap;
var init_lru = __esm({
  "node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/lru.js"() {
    LruMap = class extends Map {
      constructor(size2) {
        super();
        Object.defineProperty(this, "maxSize", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.maxSize = size2;
      }
      get(key) {
        const value = super.get(key);
        if (super.has(key)) {
          super.delete(key);
          super.set(key, value);
        }
        return value;
      }
      set(key, value) {
        if (super.has(key))
          super.delete(key);
        super.set(key, value);
        if (this.maxSize && this.size > this.maxSize) {
          const firstKey = super.keys().next().value;
          if (firstKey !== void 0)
            super.delete(firstKey);
        }
        return this;
      }
    };
  }
});

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/address/getAddress.js
function checksumAddress(address_, chainId) {
  if (checksumAddressCache.has(`${address_}.${chainId}`))
    return checksumAddressCache.get(`${address_}.${chainId}`);
  const hexAddress = chainId ? `${chainId}${address_.toLowerCase()}` : address_.substring(2).toLowerCase();
  const hash = keccak256(stringToBytes(hexAddress), "bytes");
  const address2 = (chainId ? hexAddress.substring(`${chainId}0x`.length) : hexAddress).split("");
  for (let i = 0; i < 40; i += 2) {
    if (hash[i >> 1] >> 4 >= 8 && address2[i]) {
      address2[i] = address2[i].toUpperCase();
    }
    if ((hash[i >> 1] & 15) >= 8 && address2[i + 1]) {
      address2[i + 1] = address2[i + 1].toUpperCase();
    }
  }
  const result = `0x${address2.join("")}`;
  checksumAddressCache.set(`${address_}.${chainId}`, result);
  return result;
}
var checksumAddressCache;
var init_getAddress = __esm({
  "node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/address/getAddress.js"() {
    init_toBytes();
    init_keccak256();
    init_lru();
    checksumAddressCache = /* @__PURE__ */ new LruMap(8192);
  }
});

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/address/isAddress.js
function isAddress(address2, options) {
  const { strict = true } = options ?? {};
  const cacheKey = `${address2}.${strict}`;
  if (isAddressCache.has(cacheKey))
    return isAddressCache.get(cacheKey);
  const result = (() => {
    if (!addressRegex.test(address2))
      return false;
    if (address2.toLowerCase() === address2)
      return true;
    if (strict)
      return checksumAddress(address2) === address2;
    return true;
  })();
  isAddressCache.set(cacheKey, result);
  return result;
}
var addressRegex, isAddressCache;
var init_isAddress = __esm({
  "node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/address/isAddress.js"() {
    init_lru();
    init_getAddress();
    addressRegex = /^0x[a-fA-F0-9]{40}$/;
    isAddressCache = /* @__PURE__ */ new LruMap(8192);
  }
});

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/data/concat.js
function concat(values) {
  if (typeof values[0] === "string")
    return concatHex(values);
  return concatBytes2(values);
}
function concatBytes2(values) {
  let length = 0;
  for (const arr of values) {
    length += arr.length;
  }
  const result = new Uint8Array(length);
  let offset = 0;
  for (const arr of values) {
    result.set(arr, offset);
    offset += arr.length;
  }
  return result;
}
function concatHex(values) {
  return `0x${values.reduce((acc, x) => acc + x.replace("0x", ""), "")}`;
}
var init_concat = __esm({
  "node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/data/concat.js"() {
  }
});

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/data/slice.js
function slice(value, start, end, { strict } = {}) {
  if (isHex(value, { strict: false }))
    return sliceHex(value, start, end, {
      strict
    });
  return sliceBytes(value, start, end, {
    strict
  });
}
function assertStartOffset(value, start) {
  if (typeof start === "number" && start > 0 && start > size(value) - 1)
    throw new SliceOffsetOutOfBoundsError({
      offset: start,
      position: "start",
      size: size(value)
    });
}
function assertEndOffset(value, start, end) {
  if (typeof start === "number" && typeof end === "number" && size(value) !== end - start) {
    throw new SliceOffsetOutOfBoundsError({
      offset: end,
      position: "end",
      size: size(value)
    });
  }
}
function sliceBytes(value_, start, end, { strict } = {}) {
  assertStartOffset(value_, start);
  const value = value_.slice(start, end);
  if (strict)
    assertEndOffset(value, start, end);
  return value;
}
function sliceHex(value_, start, end, { strict } = {}) {
  assertStartOffset(value_, start);
  const value = `0x${value_.replace("0x", "").slice((start ?? 0) * 2, (end ?? value_.length) * 2)}`;
  if (strict)
    assertEndOffset(value, start, end);
  return value;
}
var init_slice = __esm({
  "node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/data/slice.js"() {
    init_data();
    init_isHex();
    init_size();
  }
});

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/regex.js
var bytesRegex, integerRegex;
var init_regex = __esm({
  "node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/regex.js"() {
    bytesRegex = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/;
    integerRegex = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
  }
});

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/abi/encodeAbiParameters.js
function encodeAbiParameters(params, values) {
  if (params.length !== values.length)
    throw new AbiEncodingLengthMismatchError({
      expectedLength: params.length,
      givenLength: values.length
    });
  const preparedParams = prepareParams({
    params,
    values
  });
  return encodeParams(preparedParams);
}
function prepareParams({ params, values }) {
  const preparedParams = [];
  for (let i = 0; i < params.length; i++) {
    preparedParams.push(prepareParam({ param: params[i], value: values[i] }));
  }
  return preparedParams;
}
function prepareParam({ param, value }) {
  const arrayComponents = getArrayComponents(param.type);
  if (arrayComponents) {
    const [length, type] = arrayComponents;
    return encodeArray(value, { length, param: { ...param, type } });
  }
  if (param.type === "tuple") {
    return encodeTuple(value, {
      param
    });
  }
  if (param.type === "address") {
    return encodeAddress(value);
  }
  if (param.type === "bool") {
    return encodeBool(value);
  }
  if (param.type.startsWith("uint") || param.type.startsWith("int")) {
    const signed = param.type.startsWith("int");
    const [, , size2 = "256"] = integerRegex.exec(param.type) ?? [];
    return encodeNumber(value, {
      signed,
      size: Number(size2)
    });
  }
  if (param.type.startsWith("bytes")) {
    return encodeBytes(value, { param });
  }
  if (param.type === "string") {
    return encodeString(value);
  }
  throw new InvalidAbiEncodingTypeError(param.type, {
    docsPath: "/docs/contract/encodeAbiParameters"
  });
}
function encodeParams(preparedParams) {
  let staticSize = 0;
  for (let i = 0; i < preparedParams.length; i++) {
    const { dynamic, encoded } = preparedParams[i];
    if (dynamic)
      staticSize += 32;
    else
      staticSize += size(encoded);
  }
  const staticParams = [];
  const dynamicParams = [];
  let dynamicSize = 0;
  for (let i = 0; i < preparedParams.length; i++) {
    const { dynamic, encoded } = preparedParams[i];
    if (dynamic) {
      staticParams.push(numberToHex(staticSize + dynamicSize, { size: 32 }));
      dynamicParams.push(encoded);
      dynamicSize += size(encoded);
    } else {
      staticParams.push(encoded);
    }
  }
  return concatHex([...staticParams, ...dynamicParams]);
}
function encodeAddress(value) {
  if (!isAddress(value))
    throw new InvalidAddressError({ address: value });
  return { dynamic: false, encoded: padHex(value.toLowerCase()) };
}
function encodeArray(value, { length, param }) {
  const dynamic = length === null;
  if (!Array.isArray(value))
    throw new InvalidArrayError(value);
  if (!dynamic && value.length !== length)
    throw new AbiEncodingArrayLengthMismatchError({
      expectedLength: length,
      givenLength: value.length,
      type: `${param.type}[${length}]`
    });
  let dynamicChild = value.length === 0 && isDynamicType(param);
  const preparedParams = [];
  for (let i = 0; i < value.length; i++) {
    const preparedParam = prepareParam({ param, value: value[i] });
    if (preparedParam.dynamic)
      dynamicChild = true;
    preparedParams.push(preparedParam);
  }
  if (dynamic || dynamicChild) {
    const data = encodeParams(preparedParams);
    if (dynamic) {
      const length2 = numberToHex(preparedParams.length, { size: 32 });
      return {
        dynamic: true,
        encoded: concatHex([length2, data])
      };
    }
    if (dynamicChild)
      return { dynamic: true, encoded: data };
  }
  return {
    dynamic: false,
    encoded: concatHex(preparedParams.map(({ encoded }) => encoded))
  };
}
function encodeBytes(value, { param }) {
  const [, paramSize] = param.type.split("bytes");
  const bytesSize = size(value);
  if (!paramSize) {
    let value_ = value;
    if (bytesSize % 32 !== 0)
      value_ = padHex(value_, {
        dir: "right",
        size: Math.ceil((value.length - 2) / 2 / 32) * 32
      });
    return {
      dynamic: true,
      encoded: concatHex([
        padHex(numberToHex(bytesSize, { size: 32 })),
        value_
      ])
    };
  }
  if (bytesSize !== Number.parseInt(paramSize, 10))
    throw new AbiEncodingBytesSizeMismatchError({
      expectedSize: Number.parseInt(paramSize, 10),
      value
    });
  return { dynamic: false, encoded: padHex(value, { dir: "right" }) };
}
function encodeBool(value) {
  if (typeof value !== "boolean")
    throw new BaseError(`Invalid boolean value: "${value}" (type: ${typeof value}). Expected: \`true\` or \`false\`.`);
  return { dynamic: false, encoded: padHex(boolToHex(value)) };
}
function encodeNumber(value, { signed, size: size2 = 256 }) {
  if (typeof size2 === "number") {
    const max = 2n ** (BigInt(size2) - (signed ? 1n : 0n)) - 1n;
    const min = signed ? -max - 1n : 0n;
    if (value > max || value < min)
      throw new IntegerOutOfRangeError({
        max: max.toString(),
        min: min.toString(),
        signed,
        size: size2 / 8,
        value: value.toString()
      });
  }
  return {
    dynamic: false,
    encoded: numberToHex(value, {
      size: 32,
      signed
    })
  };
}
function encodeString(value) {
  const hexValue = stringToHex(value);
  const partsLength = Math.ceil(size(hexValue) / 32);
  const parts = [];
  for (let i = 0; i < partsLength; i++) {
    parts.push(padHex(slice(hexValue, i * 32, (i + 1) * 32), {
      dir: "right"
    }));
  }
  return {
    dynamic: true,
    encoded: concatHex([
      padHex(numberToHex(size(hexValue), { size: 32 })),
      ...parts
    ])
  };
}
function encodeTuple(value, { param }) {
  let dynamic = false;
  const preparedParams = [];
  for (let i = 0; i < param.components.length; i++) {
    const param_ = param.components[i];
    const index = Array.isArray(value) ? i : param_.name;
    const preparedParam = prepareParam({
      param: param_,
      value: value[index]
    });
    preparedParams.push(preparedParam);
    if (preparedParam.dynamic)
      dynamic = true;
  }
  return {
    dynamic,
    encoded: dynamic ? encodeParams(preparedParams) : concatHex(preparedParams.map(({ encoded }) => encoded))
  };
}
function getArrayComponents(type) {
  const matches = type.match(/^(.*)\[(\d+)?\]$/);
  return matches ? (
    // Return `null` if the array is dynamic.
    [matches[2] ? Number(matches[2]) : null, matches[1]]
  ) : void 0;
}
function isDynamicType(param) {
  const { type } = param;
  if (type === "string")
    return true;
  if (type === "bytes")
    return true;
  if (type.endsWith("[]"))
    return true;
  if (type === "tuple")
    return param.components.some(isDynamicType);
  const arrayComponents = getArrayComponents(type);
  if (arrayComponents)
    return isDynamicType({ ...param, type: arrayComponents[1] });
  return false;
}
var init_encodeAbiParameters = __esm({
  "node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/abi/encodeAbiParameters.js"() {
    init_abi();
    init_address();
    init_base();
    init_encoding();
    init_isAddress();
    init_concat();
    init_pad();
    init_size();
    init_slice();
    init_toHex();
    init_regex();
  }
});

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/errors/cursor.js
var NegativeOffsetError, PositionOutOfBoundsError, RecursiveReadLimitExceededError;
var init_cursor = __esm({
  "node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/errors/cursor.js"() {
    init_base();
    NegativeOffsetError = class extends BaseError {
      constructor({ offset }) {
        super(`Offset \`${offset}\` cannot be negative.`, {
          name: "NegativeOffsetError"
        });
      }
    };
    PositionOutOfBoundsError = class extends BaseError {
      constructor({ length, position }) {
        super(`Position \`${position}\` is out of bounds (\`0 < position < ${length}\`).`, { name: "PositionOutOfBoundsError" });
      }
    };
    RecursiveReadLimitExceededError = class extends BaseError {
      constructor({ count, limit }) {
        super(`Recursive read limit of \`${limit}\` exceeded (recursive read count: \`${count}\`).`, { name: "RecursiveReadLimitExceededError" });
      }
    };
  }
});

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/cursor.js
function createCursor(bytes, { recursiveReadLimit = 8192 } = {}) {
  const cursor = Object.create(staticCursor);
  cursor.bytes = bytes;
  cursor.dataView = new DataView(bytes.buffer ?? bytes, bytes.byteOffset, bytes.byteLength);
  cursor.positionReadCount = /* @__PURE__ */ new Map();
  cursor.recursiveReadLimit = recursiveReadLimit;
  return cursor;
}
var staticCursor;
var init_cursor2 = __esm({
  "node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/cursor.js"() {
    init_cursor();
    staticCursor = {
      bytes: new Uint8Array(),
      dataView: new DataView(new ArrayBuffer(0)),
      position: 0,
      positionReadCount: /* @__PURE__ */ new Map(),
      recursiveReadCount: 0,
      recursiveReadLimit: Number.POSITIVE_INFINITY,
      assertReadLimit() {
        if (this.recursiveReadCount >= this.recursiveReadLimit)
          throw new RecursiveReadLimitExceededError({
            count: this.recursiveReadCount + 1,
            limit: this.recursiveReadLimit
          });
      },
      assertPosition(position) {
        if (position < 0 || position > this.bytes.length - 1)
          throw new PositionOutOfBoundsError({
            length: this.bytes.length,
            position
          });
      },
      decrementPosition(offset) {
        if (offset < 0)
          throw new NegativeOffsetError({ offset });
        const position = this.position - offset;
        this.assertPosition(position);
        this.position = position;
      },
      getReadCount(position) {
        return this.positionReadCount.get(position || this.position) || 0;
      },
      incrementPosition(offset) {
        if (offset < 0)
          throw new NegativeOffsetError({ offset });
        const position = this.position + offset;
        this.assertPosition(position);
        this.position = position;
      },
      inspectByte(position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position);
        return this.bytes[position];
      },
      inspectBytes(length, position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + length - 1);
        return this.bytes.subarray(position, position + length);
      },
      inspectUint8(position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position);
        return this.bytes[position];
      },
      inspectUint16(position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + 1);
        return this.dataView.getUint16(position);
      },
      inspectUint24(position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + 2);
        return (this.dataView.getUint16(position) << 8) + this.dataView.getUint8(position + 2);
      },
      inspectUint32(position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + 3);
        return this.dataView.getUint32(position);
      },
      pushByte(byte) {
        this.assertPosition(this.position);
        this.bytes[this.position] = byte;
        this.position++;
      },
      pushBytes(bytes) {
        this.assertPosition(this.position + bytes.length - 1);
        this.bytes.set(bytes, this.position);
        this.position += bytes.length;
      },
      pushUint8(value) {
        this.assertPosition(this.position);
        this.bytes[this.position] = value;
        this.position++;
      },
      pushUint16(value) {
        this.assertPosition(this.position + 1);
        this.dataView.setUint16(this.position, value);
        this.position += 2;
      },
      pushUint24(value) {
        this.assertPosition(this.position + 2);
        this.dataView.setUint16(this.position, value >> 8);
        this.dataView.setUint8(this.position + 2, value & ~4294967040);
        this.position += 3;
      },
      pushUint32(value) {
        this.assertPosition(this.position + 3);
        this.dataView.setUint32(this.position, value);
        this.position += 4;
      },
      readByte() {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectByte();
        this.position++;
        return value;
      },
      readBytes(length, size2) {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectBytes(length);
        this.position += size2 ?? length;
        return value;
      },
      readUint8() {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint8();
        this.position += 1;
        return value;
      },
      readUint16() {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint16();
        this.position += 2;
        return value;
      },
      readUint24() {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint24();
        this.position += 3;
        return value;
      },
      readUint32() {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint32();
        this.position += 4;
        return value;
      },
      get remaining() {
        return this.bytes.length - this.position;
      },
      setPosition(position) {
        const oldPosition = this.position;
        this.assertPosition(position);
        this.position = position;
        return () => this.position = oldPosition;
      },
      _touch() {
        if (this.recursiveReadLimit === Number.POSITIVE_INFINITY)
          return;
        const count = this.getReadCount();
        this.positionReadCount.set(this.position, count + 1);
        if (count > 0)
          this.recursiveReadCount++;
      }
    };
  }
});

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/stringify.js
var stringify;
var init_stringify = __esm({
  "node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/stringify.js"() {
    stringify = (value, replacer, space) => JSON.stringify(value, (key, value_) => {
      const value2 = typeof value_ === "bigint" ? value_.toString() : value_;
      return typeof replacer === "function" ? replacer(key, value2) : value2;
    }, space);
  }
});

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/constants/unit.js
var gweiUnits;
var init_unit = __esm({
  "node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/constants/unit.js"() {
    gweiUnits = {
      ether: -9,
      wei: 9
    };
  }
});

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/unit/formatUnits.js
function formatUnits(value, decimals) {
  let display = value.toString();
  const negative = display.startsWith("-");
  if (negative)
    display = display.slice(1);
  display = display.padStart(decimals, "0");
  let [integer3, fraction] = [
    display.slice(0, display.length - decimals),
    display.slice(display.length - decimals)
  ];
  fraction = fraction.replace(/(0+)$/, "");
  return `${negative ? "-" : ""}${integer3 || "0"}${fraction ? `.${fraction}` : ""}`;
}
var init_formatUnits = __esm({
  "node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/unit/formatUnits.js"() {
  }
});

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/unit/formatGwei.js
function formatGwei(wei, unit = "wei") {
  return formatUnits(wei, gweiUnits[unit]);
}
var init_formatGwei = __esm({
  "node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/unit/formatGwei.js"() {
    init_unit();
    init_formatUnits();
  }
});

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/errors/transaction.js
function prettyPrint(args) {
  const entries = Object.entries(args).map(([key, value]) => {
    if (value === void 0 || value === false)
      return null;
    return [key, value];
  }).filter(Boolean);
  const maxLength = entries.reduce((acc, [key]) => Math.max(acc, key.length), 0);
  return entries.map(([key, value]) => `  ${`${key}:`.padEnd(maxLength + 1)}  ${value}`).join("\n");
}
var InvalidLegacyVError, InvalidSerializableTransactionError, InvalidStorageKeySizeError;
var init_transaction = __esm({
  "node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/errors/transaction.js"() {
    init_base();
    InvalidLegacyVError = class extends BaseError {
      constructor({ v }) {
        super(`Invalid \`v\` value "${v}". Expected 27 or 28.`, {
          name: "InvalidLegacyVError"
        });
      }
    };
    InvalidSerializableTransactionError = class extends BaseError {
      constructor({ transaction }) {
        super("Cannot infer a transaction type from provided transaction.", {
          metaMessages: [
            "Provided Transaction:",
            "{",
            prettyPrint(transaction),
            "}",
            "",
            "To infer the type, either provide:",
            "- a `type` to the Transaction, or",
            "- an EIP-1559 Transaction with `maxFeePerGas`, or",
            "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or",
            "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or",
            "- an EIP-7702 Transaction with `authorizationList`, or",
            "- a Legacy Transaction with `gasPrice`"
          ],
          name: "InvalidSerializableTransactionError"
        });
      }
    };
    InvalidStorageKeySizeError = class extends BaseError {
      constructor({ storageKey }) {
        super(`Size for storage key "${storageKey}" is invalid. Expected 32 bytes. Got ${Math.floor((storageKey.length - 2) / 2)} bytes.`, { name: "InvalidStorageKeySizeError" });
      }
    };
  }
});

// node_modules/.pnpm/@noble+hashes@1.8.0/node_modules/@noble/hashes/esm/_md.js
function setBigUint64(view, byteOffset, value, isLE2) {
  if (typeof view.setBigUint64 === "function")
    return view.setBigUint64(byteOffset, value, isLE2);
  const _32n2 = BigInt(32);
  const _u32_max = BigInt(4294967295);
  const wh = Number(value >> _32n2 & _u32_max);
  const wl = Number(value & _u32_max);
  const h = isLE2 ? 4 : 0;
  const l = isLE2 ? 0 : 4;
  view.setUint32(byteOffset + h, wh, isLE2);
  view.setUint32(byteOffset + l, wl, isLE2);
}
function Chi(a, b, c) {
  return a & b ^ ~a & c;
}
function Maj(a, b, c) {
  return a & b ^ a & c ^ b & c;
}
var HashMD, SHA256_IV;
var init_md = __esm({
  "node_modules/.pnpm/@noble+hashes@1.8.0/node_modules/@noble/hashes/esm/_md.js"() {
    init_utils();
    HashMD = class extends Hash {
      constructor(blockLen, outputLen, padOffset, isLE2) {
        super();
        this.finished = false;
        this.length = 0;
        this.pos = 0;
        this.destroyed = false;
        this.blockLen = blockLen;
        this.outputLen = outputLen;
        this.padOffset = padOffset;
        this.isLE = isLE2;
        this.buffer = new Uint8Array(blockLen);
        this.view = createView(this.buffer);
      }
      update(data) {
        aexists(this);
        data = toBytes2(data);
        abytes(data);
        const { view, buffer, blockLen } = this;
        const len = data.length;
        for (let pos = 0; pos < len; ) {
          const take = Math.min(blockLen - this.pos, len - pos);
          if (take === blockLen) {
            const dataView = createView(data);
            for (; blockLen <= len - pos; pos += blockLen)
              this.process(dataView, pos);
            continue;
          }
          buffer.set(data.subarray(pos, pos + take), this.pos);
          this.pos += take;
          pos += take;
          if (this.pos === blockLen) {
            this.process(view, 0);
            this.pos = 0;
          }
        }
        this.length += data.length;
        this.roundClean();
        return this;
      }
      digestInto(out) {
        aexists(this);
        aoutput(out, this);
        this.finished = true;
        const { buffer, view, blockLen, isLE: isLE2 } = this;
        let { pos } = this;
        buffer[pos++] = 128;
        clean(this.buffer.subarray(pos));
        if (this.padOffset > blockLen - pos) {
          this.process(view, 0);
          pos = 0;
        }
        for (let i = pos; i < blockLen; i++)
          buffer[i] = 0;
        setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE2);
        this.process(view, 0);
        const oview = createView(out);
        const len = this.outputLen;
        if (len % 4)
          throw new Error("_sha2: outputLen should be aligned to 32bit");
        const outLen = len / 4;
        const state = this.get();
        if (outLen > state.length)
          throw new Error("_sha2: outputLen bigger than state");
        for (let i = 0; i < outLen; i++)
          oview.setUint32(4 * i, state[i], isLE2);
      }
      digest() {
        const { buffer, outputLen } = this;
        this.digestInto(buffer);
        const res = buffer.slice(0, outputLen);
        this.destroy();
        return res;
      }
      _cloneInto(to) {
        to || (to = new this.constructor());
        to.set(...this.get());
        const { blockLen, buffer, length, finished, destroyed, pos } = this;
        to.destroyed = destroyed;
        to.finished = finished;
        to.length = length;
        to.pos = pos;
        if (length % blockLen)
          to.buffer.set(buffer);
        return to;
      }
      clone() {
        return this._cloneInto();
      }
    };
    SHA256_IV = /* @__PURE__ */ Uint32Array.from([
      1779033703,
      3144134277,
      1013904242,
      2773480762,
      1359893119,
      2600822924,
      528734635,
      1541459225
    ]);
  }
});

// node_modules/.pnpm/@noble+hashes@1.8.0/node_modules/@noble/hashes/esm/sha2.js
var SHA256_K, SHA256_W, SHA256, sha2562;
var init_sha2 = __esm({
  "node_modules/.pnpm/@noble+hashes@1.8.0/node_modules/@noble/hashes/esm/sha2.js"() {
    init_md();
    init_utils();
    SHA256_K = /* @__PURE__ */ Uint32Array.from([
      1116352408,
      1899447441,
      3049323471,
      3921009573,
      961987163,
      1508970993,
      2453635748,
      2870763221,
      3624381080,
      310598401,
      607225278,
      1426881987,
      1925078388,
      2162078206,
      2614888103,
      3248222580,
      3835390401,
      4022224774,
      264347078,
      604807628,
      770255983,
      1249150122,
      1555081692,
      1996064986,
      2554220882,
      2821834349,
      2952996808,
      3210313671,
      3336571891,
      3584528711,
      113926993,
      338241895,
      666307205,
      773529912,
      1294757372,
      1396182291,
      1695183700,
      1986661051,
      2177026350,
      2456956037,
      2730485921,
      2820302411,
      3259730800,
      3345764771,
      3516065817,
      3600352804,
      4094571909,
      275423344,
      430227734,
      506948616,
      659060556,
      883997877,
      958139571,
      1322822218,
      1537002063,
      1747873779,
      1955562222,
      2024104815,
      2227730452,
      2361852424,
      2428436474,
      2756734187,
      3204031479,
      3329325298
    ]);
    SHA256_W = /* @__PURE__ */ new Uint32Array(64);
    SHA256 = class extends HashMD {
      constructor(outputLen = 32) {
        super(64, outputLen, 8, false);
        this.A = SHA256_IV[0] | 0;
        this.B = SHA256_IV[1] | 0;
        this.C = SHA256_IV[2] | 0;
        this.D = SHA256_IV[3] | 0;
        this.E = SHA256_IV[4] | 0;
        this.F = SHA256_IV[5] | 0;
        this.G = SHA256_IV[6] | 0;
        this.H = SHA256_IV[7] | 0;
      }
      get() {
        const { A, B, C, D, E, F, G, H } = this;
        return [A, B, C, D, E, F, G, H];
      }
      // prettier-ignore
      set(A, B, C, D, E, F, G, H) {
        this.A = A | 0;
        this.B = B | 0;
        this.C = C | 0;
        this.D = D | 0;
        this.E = E | 0;
        this.F = F | 0;
        this.G = G | 0;
        this.H = H | 0;
      }
      process(view, offset) {
        for (let i = 0; i < 16; i++, offset += 4)
          SHA256_W[i] = view.getUint32(offset, false);
        for (let i = 16; i < 64; i++) {
          const W15 = SHA256_W[i - 15];
          const W2 = SHA256_W[i - 2];
          const s0 = rotr(W15, 7) ^ rotr(W15, 18) ^ W15 >>> 3;
          const s1 = rotr(W2, 17) ^ rotr(W2, 19) ^ W2 >>> 10;
          SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
        }
        let { A, B, C, D, E, F, G, H } = this;
        for (let i = 0; i < 64; i++) {
          const sigma1 = rotr(E, 6) ^ rotr(E, 11) ^ rotr(E, 25);
          const T1 = H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
          const sigma0 = rotr(A, 2) ^ rotr(A, 13) ^ rotr(A, 22);
          const T2 = sigma0 + Maj(A, B, C) | 0;
          H = G;
          G = F;
          F = E;
          E = D + T1 | 0;
          D = C;
          C = B;
          B = A;
          A = T1 + T2 | 0;
        }
        A = A + this.A | 0;
        B = B + this.B | 0;
        C = C + this.C | 0;
        D = D + this.D | 0;
        E = E + this.E | 0;
        F = F + this.F | 0;
        G = G + this.G | 0;
        H = H + this.H | 0;
        this.set(A, B, C, D, E, F, G, H);
      }
      roundClean() {
        clean(SHA256_W);
      }
      destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0);
        clean(this.buffer);
      }
    };
    sha2562 = /* @__PURE__ */ createHasher(() => new SHA256());
  }
});

// node_modules/.pnpm/@noble+hashes@1.8.0/node_modules/@noble/hashes/esm/hmac.js
var HMAC, hmac;
var init_hmac = __esm({
  "node_modules/.pnpm/@noble+hashes@1.8.0/node_modules/@noble/hashes/esm/hmac.js"() {
    init_utils();
    HMAC = class extends Hash {
      constructor(hash, _key) {
        super();
        this.finished = false;
        this.destroyed = false;
        ahash(hash);
        const key = toBytes2(_key);
        this.iHash = hash.create();
        if (typeof this.iHash.update !== "function")
          throw new Error("Expected instance of class which extends utils.Hash");
        this.blockLen = this.iHash.blockLen;
        this.outputLen = this.iHash.outputLen;
        const blockLen = this.blockLen;
        const pad2 = new Uint8Array(blockLen);
        pad2.set(key.length > blockLen ? hash.create().update(key).digest() : key);
        for (let i = 0; i < pad2.length; i++)
          pad2[i] ^= 54;
        this.iHash.update(pad2);
        this.oHash = hash.create();
        for (let i = 0; i < pad2.length; i++)
          pad2[i] ^= 54 ^ 92;
        this.oHash.update(pad2);
        clean(pad2);
      }
      update(buf) {
        aexists(this);
        this.iHash.update(buf);
        return this;
      }
      digestInto(out) {
        aexists(this);
        abytes(out, this.outputLen);
        this.finished = true;
        this.iHash.digestInto(out);
        this.oHash.update(out);
        this.oHash.digestInto(out);
        this.destroy();
      }
      digest() {
        const out = new Uint8Array(this.oHash.outputLen);
        this.digestInto(out);
        return out;
      }
      _cloneInto(to) {
        to || (to = Object.create(Object.getPrototypeOf(this), {}));
        const { oHash, iHash, finished, destroyed, blockLen, outputLen } = this;
        to = to;
        to.finished = finished;
        to.destroyed = destroyed;
        to.blockLen = blockLen;
        to.outputLen = outputLen;
        to.oHash = oHash._cloneInto(to.oHash);
        to.iHash = iHash._cloneInto(to.iHash);
        return to;
      }
      clone() {
        return this._cloneInto();
      }
      destroy() {
        this.destroyed = true;
        this.oHash.destroy();
        this.iHash.destroy();
      }
    };
    hmac = (hash, key, message) => new HMAC(hash, key).update(message).digest();
    hmac.create = (hash, key) => new HMAC(hash, key);
  }
});

// node_modules/.pnpm/@noble+curves@1.9.1/node_modules/@noble/curves/esm/abstract/utils.js
function isBytes2(a) {
  return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === "Uint8Array";
}
function abytes2(item) {
  if (!isBytes2(item))
    throw new Error("Uint8Array expected");
}
function abool(title, value) {
  if (typeof value !== "boolean")
    throw new Error(title + " boolean expected, got " + value);
}
function numberToHexUnpadded(num2) {
  const hex = num2.toString(16);
  return hex.length & 1 ? "0" + hex : hex;
}
function hexToNumber2(hex) {
  if (typeof hex !== "string")
    throw new Error("hex string expected, got " + typeof hex);
  return hex === "" ? _0n2 : BigInt("0x" + hex);
}
function bytesToHex2(bytes) {
  abytes2(bytes);
  if (hasHexBuiltin)
    return bytes.toHex();
  let hex = "";
  for (let i = 0; i < bytes.length; i++) {
    hex += hexes2[bytes[i]];
  }
  return hex;
}
function asciiToBase16(ch) {
  if (ch >= asciis._0 && ch <= asciis._9)
    return ch - asciis._0;
  if (ch >= asciis.A && ch <= asciis.F)
    return ch - (asciis.A - 10);
  if (ch >= asciis.a && ch <= asciis.f)
    return ch - (asciis.a - 10);
  return;
}
function hexToBytes2(hex) {
  if (typeof hex !== "string")
    throw new Error("hex string expected, got " + typeof hex);
  if (hasHexBuiltin)
    return Uint8Array.fromHex(hex);
  const hl = hex.length;
  const al = hl / 2;
  if (hl % 2)
    throw new Error("hex string expected, got unpadded hex of length " + hl);
  const array = new Uint8Array(al);
  for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
    const n1 = asciiToBase16(hex.charCodeAt(hi));
    const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
    if (n1 === void 0 || n2 === void 0) {
      const char = hex[hi] + hex[hi + 1];
      throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
    }
    array[ai] = n1 * 16 + n2;
  }
  return array;
}
function bytesToNumberBE(bytes) {
  return hexToNumber2(bytesToHex2(bytes));
}
function bytesToNumberLE(bytes) {
  abytes2(bytes);
  return hexToNumber2(bytesToHex2(Uint8Array.from(bytes).reverse()));
}
function numberToBytesBE(n, len) {
  return hexToBytes2(n.toString(16).padStart(len * 2, "0"));
}
function numberToBytesLE(n, len) {
  return numberToBytesBE(n, len).reverse();
}
function ensureBytes(title, hex, expectedLength) {
  let res;
  if (typeof hex === "string") {
    try {
      res = hexToBytes2(hex);
    } catch (e) {
      throw new Error(title + " must be hex string or Uint8Array, cause: " + e);
    }
  } else if (isBytes2(hex)) {
    res = Uint8Array.from(hex);
  } else {
    throw new Error(title + " must be hex string or Uint8Array");
  }
  const len = res.length;
  if (typeof expectedLength === "number" && len !== expectedLength)
    throw new Error(title + " of length " + expectedLength + " expected, got " + len);
  return res;
}
function concatBytes3(...arrays) {
  let sum = 0;
  for (let i = 0; i < arrays.length; i++) {
    const a = arrays[i];
    abytes2(a);
    sum += a.length;
  }
  const res = new Uint8Array(sum);
  for (let i = 0, pad2 = 0; i < arrays.length; i++) {
    const a = arrays[i];
    res.set(a, pad2);
    pad2 += a.length;
  }
  return res;
}
function utf8ToBytes2(str) {
  if (typeof str !== "string")
    throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(str));
}
function inRange(n, min, max) {
  return isPosBig(n) && isPosBig(min) && isPosBig(max) && min <= n && n < max;
}
function aInRange(title, n, min, max) {
  if (!inRange(n, min, max))
    throw new Error("expected valid " + title + ": " + min + " <= n < " + max + ", got " + n);
}
function bitLen(n) {
  let len;
  for (len = 0; n > _0n2; n >>= _1n2, len += 1)
    ;
  return len;
}
function createHmacDrbg(hashLen, qByteLen, hmacFn) {
  if (typeof hashLen !== "number" || hashLen < 2)
    throw new Error("hashLen must be a number");
  if (typeof qByteLen !== "number" || qByteLen < 2)
    throw new Error("qByteLen must be a number");
  if (typeof hmacFn !== "function")
    throw new Error("hmacFn must be a function");
  let v = u8n(hashLen);
  let k = u8n(hashLen);
  let i = 0;
  const reset = () => {
    v.fill(1);
    k.fill(0);
    i = 0;
  };
  const h = (...b) => hmacFn(k, v, ...b);
  const reseed = (seed = u8n(0)) => {
    k = h(u8fr([0]), seed);
    v = h();
    if (seed.length === 0)
      return;
    k = h(u8fr([1]), seed);
    v = h();
  };
  const gen2 = () => {
    if (i++ >= 1e3)
      throw new Error("drbg: tried 1000 values");
    let len = 0;
    const out = [];
    while (len < qByteLen) {
      v = h();
      const sl = v.slice();
      out.push(sl);
      len += v.length;
    }
    return concatBytes3(...out);
  };
  const genUntil = (seed, pred) => {
    reset();
    reseed(seed);
    let res = void 0;
    while (!(res = pred(gen2())))
      reseed();
    reset();
    return res;
  };
  return genUntil;
}
function validateObject(object2, validators, optValidators = {}) {
  const checkField = (fieldName, type, isOptional) => {
    const checkVal = validatorFns[type];
    if (typeof checkVal !== "function")
      throw new Error("invalid validator function");
    const val = object2[fieldName];
    if (isOptional && val === void 0)
      return;
    if (!checkVal(val, object2)) {
      throw new Error("param " + String(fieldName) + " is invalid. Expected " + type + ", got " + val);
    }
  };
  for (const [fieldName, type] of Object.entries(validators))
    checkField(fieldName, type, false);
  for (const [fieldName, type] of Object.entries(optValidators))
    checkField(fieldName, type, true);
  return object2;
}
function memoized(fn) {
  const map = /* @__PURE__ */ new WeakMap();
  return (arg, ...args) => {
    const val = map.get(arg);
    if (val !== void 0)
      return val;
    const computed = fn(arg, ...args);
    map.set(arg, computed);
    return computed;
  };
}
var _0n2, _1n2, hasHexBuiltin, hexes2, asciis, isPosBig, bitMask, u8n, u8fr, validatorFns;
var init_utils2 = __esm({
  "node_modules/.pnpm/@noble+curves@1.9.1/node_modules/@noble/curves/esm/abstract/utils.js"() {
    _0n2 = /* @__PURE__ */ BigInt(0);
    _1n2 = /* @__PURE__ */ BigInt(1);
    hasHexBuiltin = // @ts-ignore
    typeof Uint8Array.from([]).toHex === "function" && typeof Uint8Array.fromHex === "function";
    hexes2 = /* @__PURE__ */ Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, "0"));
    asciis = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
    isPosBig = (n) => typeof n === "bigint" && _0n2 <= n;
    bitMask = (n) => (_1n2 << BigInt(n)) - _1n2;
    u8n = (len) => new Uint8Array(len);
    u8fr = (arr) => Uint8Array.from(arr);
    validatorFns = {
      bigint: (val) => typeof val === "bigint",
      function: (val) => typeof val === "function",
      boolean: (val) => typeof val === "boolean",
      string: (val) => typeof val === "string",
      stringOrUint8Array: (val) => typeof val === "string" || isBytes2(val),
      isSafeInteger: (val) => Number.isSafeInteger(val),
      array: (val) => Array.isArray(val),
      field: (val, object2) => object2.Fp.isValid(val),
      hash: (val) => typeof val === "function" && Number.isSafeInteger(val.outputLen)
    };
  }
});

// node_modules/.pnpm/@noble+curves@1.9.1/node_modules/@noble/curves/esm/abstract/modular.js
function mod(a, b) {
  const result = a % b;
  return result >= _0n3 ? result : b + result;
}
function pow2(x, power, modulo) {
  let res = x;
  while (power-- > _0n3) {
    res *= res;
    res %= modulo;
  }
  return res;
}
function invert(number, modulo) {
  if (number === _0n3)
    throw new Error("invert: expected non-zero number");
  if (modulo <= _0n3)
    throw new Error("invert: expected positive modulus, got " + modulo);
  let a = mod(number, modulo);
  let b = modulo;
  let x = _0n3, y = _1n3, u = _1n3, v = _0n3;
  while (a !== _0n3) {
    const q = b / a;
    const r = b % a;
    const m = x - u * q;
    const n = y - v * q;
    b = a, a = r, x = u, y = v, u = m, v = n;
  }
  const gcd = b;
  if (gcd !== _1n3)
    throw new Error("invert: does not exist");
  return mod(x, modulo);
}
function sqrt3mod4(Fp, n) {
  const p1div4 = (Fp.ORDER + _1n3) / _4n;
  const root = Fp.pow(n, p1div4);
  if (!Fp.eql(Fp.sqr(root), n))
    throw new Error("Cannot find square root");
  return root;
}
function sqrt5mod8(Fp, n) {
  const p5div8 = (Fp.ORDER - _5n) / _8n;
  const n2 = Fp.mul(n, _2n2);
  const v = Fp.pow(n2, p5div8);
  const nv = Fp.mul(n, v);
  const i = Fp.mul(Fp.mul(nv, _2n2), v);
  const root = Fp.mul(nv, Fp.sub(i, Fp.ONE));
  if (!Fp.eql(Fp.sqr(root), n))
    throw new Error("Cannot find square root");
  return root;
}
function tonelliShanks(P) {
  if (P < BigInt(3))
    throw new Error("sqrt is not defined for small field");
  let Q = P - _1n3;
  let S = 0;
  while (Q % _2n2 === _0n3) {
    Q /= _2n2;
    S++;
  }
  let Z = _2n2;
  const _Fp = Field(P);
  while (FpLegendre(_Fp, Z) === 1) {
    if (Z++ > 1e3)
      throw new Error("Cannot find square root: probably non-prime P");
  }
  if (S === 1)
    return sqrt3mod4;
  let cc = _Fp.pow(Z, Q);
  const Q1div2 = (Q + _1n3) / _2n2;
  return function tonelliSlow(Fp, n) {
    if (Fp.is0(n))
      return n;
    if (FpLegendre(Fp, n) !== 1)
      throw new Error("Cannot find square root");
    let M = S;
    let c = Fp.mul(Fp.ONE, cc);
    let t = Fp.pow(n, Q);
    let R = Fp.pow(n, Q1div2);
    while (!Fp.eql(t, Fp.ONE)) {
      if (Fp.is0(t))
        return Fp.ZERO;
      let i = 1;
      let t_tmp = Fp.sqr(t);
      while (!Fp.eql(t_tmp, Fp.ONE)) {
        i++;
        t_tmp = Fp.sqr(t_tmp);
        if (i === M)
          throw new Error("Cannot find square root");
      }
      const exponent = _1n3 << BigInt(M - i - 1);
      const b = Fp.pow(c, exponent);
      M = i;
      c = Fp.sqr(b);
      t = Fp.mul(t, c);
      R = Fp.mul(R, b);
    }
    return R;
  };
}
function FpSqrt(P) {
  if (P % _4n === _3n)
    return sqrt3mod4;
  if (P % _8n === _5n)
    return sqrt5mod8;
  return tonelliShanks(P);
}
function validateField(field) {
  const initial = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  };
  const opts = FIELD_FIELDS.reduce((map, val) => {
    map[val] = "function";
    return map;
  }, initial);
  return validateObject(field, opts);
}
function FpPow(Fp, num2, power) {
  if (power < _0n3)
    throw new Error("invalid exponent, negatives unsupported");
  if (power === _0n3)
    return Fp.ONE;
  if (power === _1n3)
    return num2;
  let p = Fp.ONE;
  let d = num2;
  while (power > _0n3) {
    if (power & _1n3)
      p = Fp.mul(p, d);
    d = Fp.sqr(d);
    power >>= _1n3;
  }
  return p;
}
function FpInvertBatch(Fp, nums, passZero = false) {
  const inverted = new Array(nums.length).fill(passZero ? Fp.ZERO : void 0);
  const multipliedAcc = nums.reduce((acc, num2, i) => {
    if (Fp.is0(num2))
      return acc;
    inverted[i] = acc;
    return Fp.mul(acc, num2);
  }, Fp.ONE);
  const invertedAcc = Fp.inv(multipliedAcc);
  nums.reduceRight((acc, num2, i) => {
    if (Fp.is0(num2))
      return acc;
    inverted[i] = Fp.mul(acc, inverted[i]);
    return Fp.mul(acc, num2);
  }, invertedAcc);
  return inverted;
}
function FpLegendre(Fp, n) {
  const p1mod2 = (Fp.ORDER - _1n3) / _2n2;
  const powered = Fp.pow(n, p1mod2);
  const yes = Fp.eql(powered, Fp.ONE);
  const zero = Fp.eql(powered, Fp.ZERO);
  const no = Fp.eql(powered, Fp.neg(Fp.ONE));
  if (!yes && !zero && !no)
    throw new Error("invalid Legendre symbol result");
  return yes ? 1 : zero ? 0 : -1;
}
function nLength(n, nBitLength) {
  if (nBitLength !== void 0)
    anumber(nBitLength);
  const _nBitLength = nBitLength !== void 0 ? nBitLength : n.toString(2).length;
  const nByteLength = Math.ceil(_nBitLength / 8);
  return { nBitLength: _nBitLength, nByteLength };
}
function Field(ORDER, bitLen2, isLE2 = false, redef = {}) {
  if (ORDER <= _0n3)
    throw new Error("invalid field: expected ORDER > 0, got " + ORDER);
  const { nBitLength: BITS, nByteLength: BYTES } = nLength(ORDER, bitLen2);
  if (BYTES > 2048)
    throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let sqrtP;
  const f = Object.freeze({
    ORDER,
    isLE: isLE2,
    BITS,
    BYTES,
    MASK: bitMask(BITS),
    ZERO: _0n3,
    ONE: _1n3,
    create: (num2) => mod(num2, ORDER),
    isValid: (num2) => {
      if (typeof num2 !== "bigint")
        throw new Error("invalid field element: expected bigint, got " + typeof num2);
      return _0n3 <= num2 && num2 < ORDER;
    },
    is0: (num2) => num2 === _0n3,
    isOdd: (num2) => (num2 & _1n3) === _1n3,
    neg: (num2) => mod(-num2, ORDER),
    eql: (lhs, rhs) => lhs === rhs,
    sqr: (num2) => mod(num2 * num2, ORDER),
    add: (lhs, rhs) => mod(lhs + rhs, ORDER),
    sub: (lhs, rhs) => mod(lhs - rhs, ORDER),
    mul: (lhs, rhs) => mod(lhs * rhs, ORDER),
    pow: (num2, power) => FpPow(f, num2, power),
    div: (lhs, rhs) => mod(lhs * invert(rhs, ORDER), ORDER),
    // Same as above, but doesn't normalize
    sqrN: (num2) => num2 * num2,
    addN: (lhs, rhs) => lhs + rhs,
    subN: (lhs, rhs) => lhs - rhs,
    mulN: (lhs, rhs) => lhs * rhs,
    inv: (num2) => invert(num2, ORDER),
    sqrt: redef.sqrt || ((n) => {
      if (!sqrtP)
        sqrtP = FpSqrt(ORDER);
      return sqrtP(f, n);
    }),
    toBytes: (num2) => isLE2 ? numberToBytesLE(num2, BYTES) : numberToBytesBE(num2, BYTES),
    fromBytes: (bytes) => {
      if (bytes.length !== BYTES)
        throw new Error("Field.fromBytes: expected " + BYTES + " bytes, got " + bytes.length);
      return isLE2 ? bytesToNumberLE(bytes) : bytesToNumberBE(bytes);
    },
    // TODO: we don't need it here, move out to separate fn
    invertBatch: (lst) => FpInvertBatch(f, lst),
    // We can't move this out because Fp6, Fp12 implement it
    // and it's unclear what to return in there.
    cmov: (a, b, c) => c ? b : a
  });
  return Object.freeze(f);
}
function getFieldBytesLength(fieldOrder) {
  if (typeof fieldOrder !== "bigint")
    throw new Error("field order must be bigint");
  const bitLength = fieldOrder.toString(2).length;
  return Math.ceil(bitLength / 8);
}
function getMinHashLength(fieldOrder) {
  const length = getFieldBytesLength(fieldOrder);
  return length + Math.ceil(length / 2);
}
function mapHashToField(key, fieldOrder, isLE2 = false) {
  const len = key.length;
  const fieldLen = getFieldBytesLength(fieldOrder);
  const minLen = getMinHashLength(fieldOrder);
  if (len < 16 || len < minLen || len > 1024)
    throw new Error("expected " + minLen + "-1024 bytes of input, got " + len);
  const num2 = isLE2 ? bytesToNumberLE(key) : bytesToNumberBE(key);
  const reduced = mod(num2, fieldOrder - _1n3) + _1n3;
  return isLE2 ? numberToBytesLE(reduced, fieldLen) : numberToBytesBE(reduced, fieldLen);
}
var _0n3, _1n3, _2n2, _3n, _4n, _5n, _8n, FIELD_FIELDS;
var init_modular = __esm({
  "node_modules/.pnpm/@noble+curves@1.9.1/node_modules/@noble/curves/esm/abstract/modular.js"() {
    init_utils();
    init_utils2();
    _0n3 = BigInt(0);
    _1n3 = BigInt(1);
    _2n2 = /* @__PURE__ */ BigInt(2);
    _3n = /* @__PURE__ */ BigInt(3);
    _4n = /* @__PURE__ */ BigInt(4);
    _5n = /* @__PURE__ */ BigInt(5);
    _8n = /* @__PURE__ */ BigInt(8);
    FIELD_FIELDS = [
      "create",
      "isValid",
      "is0",
      "neg",
      "inv",
      "sqrt",
      "sqr",
      "eql",
      "add",
      "sub",
      "mul",
      "pow",
      "div",
      "addN",
      "subN",
      "mulN",
      "sqrN"
    ];
  }
});

// node_modules/.pnpm/@noble+curves@1.9.1/node_modules/@noble/curves/esm/abstract/curve.js
function constTimeNegate(condition, item) {
  const neg = item.negate();
  return condition ? neg : item;
}
function validateW(W, bits) {
  if (!Number.isSafeInteger(W) || W <= 0 || W > bits)
    throw new Error("invalid window size, expected [1.." + bits + "], got W=" + W);
}
function calcWOpts(W, scalarBits) {
  validateW(W, scalarBits);
  const windows = Math.ceil(scalarBits / W) + 1;
  const windowSize = 2 ** (W - 1);
  const maxNumber = 2 ** W;
  const mask = bitMask(W);
  const shiftBy = BigInt(W);
  return { windows, windowSize, mask, maxNumber, shiftBy };
}
function calcOffsets(n, window, wOpts) {
  const { windowSize, mask, maxNumber, shiftBy } = wOpts;
  let wbits = Number(n & mask);
  let nextN = n >> shiftBy;
  if (wbits > windowSize) {
    wbits -= maxNumber;
    nextN += _1n4;
  }
  const offsetStart = window * windowSize;
  const offset = offsetStart + Math.abs(wbits) - 1;
  const isZero = wbits === 0;
  const isNeg = wbits < 0;
  const isNegF = window % 2 !== 0;
  const offsetF = offsetStart;
  return { nextN, offset, isZero, isNeg, isNegF, offsetF };
}
function validateMSMPoints(points, c) {
  if (!Array.isArray(points))
    throw new Error("array expected");
  points.forEach((p, i) => {
    if (!(p instanceof c))
      throw new Error("invalid point at index " + i);
  });
}
function validateMSMScalars(scalars, field) {
  if (!Array.isArray(scalars))
    throw new Error("array of scalars expected");
  scalars.forEach((s, i) => {
    if (!field.isValid(s))
      throw new Error("invalid scalar at index " + i);
  });
}
function getW(P) {
  return pointWindowSizes.get(P) || 1;
}
function wNAF(c, bits) {
  return {
    constTimeNegate,
    hasPrecomputes(elm) {
      return getW(elm) !== 1;
    },
    // non-const time multiplication ladder
    unsafeLadder(elm, n, p = c.ZERO) {
      let d = elm;
      while (n > _0n4) {
        if (n & _1n4)
          p = p.add(d);
        d = d.double();
        n >>= _1n4;
      }
      return p;
    },
    /**
     * Creates a wNAF precomputation window. Used for caching.
     * Default window size is set by `utils.precompute()` and is equal to 8.
     * Number of precomputed points depends on the curve size:
     * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
     * - 𝑊 is the window size
     * - 𝑛 is the bitlength of the curve order.
     * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
     * @param elm Point instance
     * @param W window size
     * @returns precomputed point tables flattened to a single array
     */
    precomputeWindow(elm, W) {
      const { windows, windowSize } = calcWOpts(W, bits);
      const points = [];
      let p = elm;
      let base = p;
      for (let window = 0; window < windows; window++) {
        base = p;
        points.push(base);
        for (let i = 1; i < windowSize; i++) {
          base = base.add(p);
          points.push(base);
        }
        p = base.double();
      }
      return points;
    },
    /**
     * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @returns real and fake (for const-time) points
     */
    wNAF(W, precomputes, n) {
      let p = c.ZERO;
      let f = c.BASE;
      const wo = calcWOpts(W, bits);
      for (let window = 0; window < wo.windows; window++) {
        const { nextN, offset, isZero, isNeg, isNegF, offsetF } = calcOffsets(n, window, wo);
        n = nextN;
        if (isZero) {
          f = f.add(constTimeNegate(isNegF, precomputes[offsetF]));
        } else {
          p = p.add(constTimeNegate(isNeg, precomputes[offset]));
        }
      }
      return { p, f };
    },
    /**
     * Implements ec unsafe (non const-time) multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @param acc accumulator point to add result of multiplication
     * @returns point
     */
    wNAFUnsafe(W, precomputes, n, acc = c.ZERO) {
      const wo = calcWOpts(W, bits);
      for (let window = 0; window < wo.windows; window++) {
        if (n === _0n4)
          break;
        const { nextN, offset, isZero, isNeg } = calcOffsets(n, window, wo);
        n = nextN;
        if (isZero) {
          continue;
        } else {
          const item = precomputes[offset];
          acc = acc.add(isNeg ? item.negate() : item);
        }
      }
      return acc;
    },
    getPrecomputes(W, P, transform) {
      let comp = pointPrecomputes.get(P);
      if (!comp) {
        comp = this.precomputeWindow(P, W);
        if (W !== 1)
          pointPrecomputes.set(P, transform(comp));
      }
      return comp;
    },
    wNAFCached(P, n, transform) {
      const W = getW(P);
      return this.wNAF(W, this.getPrecomputes(W, P, transform), n);
    },
    wNAFCachedUnsafe(P, n, transform, prev) {
      const W = getW(P);
      if (W === 1)
        return this.unsafeLadder(P, n, prev);
      return this.wNAFUnsafe(W, this.getPrecomputes(W, P, transform), n, prev);
    },
    // We calculate precomputes for elliptic curve point multiplication
    // using windowed method. This specifies window size and
    // stores precomputed values. Usually only base point would be precomputed.
    setWindowSize(P, W) {
      validateW(W, bits);
      pointWindowSizes.set(P, W);
      pointPrecomputes.delete(P);
    }
  };
}
function pippenger(c, fieldN, points, scalars) {
  validateMSMPoints(points, c);
  validateMSMScalars(scalars, fieldN);
  const plength = points.length;
  const slength = scalars.length;
  if (plength !== slength)
    throw new Error("arrays of points and scalars must have equal length");
  const zero = c.ZERO;
  const wbits = bitLen(BigInt(plength));
  let windowSize = 1;
  if (wbits > 12)
    windowSize = wbits - 3;
  else if (wbits > 4)
    windowSize = wbits - 2;
  else if (wbits > 0)
    windowSize = 2;
  const MASK = bitMask(windowSize);
  const buckets = new Array(Number(MASK) + 1).fill(zero);
  const lastBits = Math.floor((fieldN.BITS - 1) / windowSize) * windowSize;
  let sum = zero;
  for (let i = lastBits; i >= 0; i -= windowSize) {
    buckets.fill(zero);
    for (let j = 0; j < slength; j++) {
      const scalar = scalars[j];
      const wbits2 = Number(scalar >> BigInt(i) & MASK);
      buckets[wbits2] = buckets[wbits2].add(points[j]);
    }
    let resI = zero;
    for (let j = buckets.length - 1, sumI = zero; j > 0; j--) {
      sumI = sumI.add(buckets[j]);
      resI = resI.add(sumI);
    }
    sum = sum.add(resI);
    if (i !== 0)
      for (let j = 0; j < windowSize; j++)
        sum = sum.double();
  }
  return sum;
}
function validateBasic(curve) {
  validateField(curve.Fp);
  validateObject(curve, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  });
  return Object.freeze({
    ...nLength(curve.n, curve.nBitLength),
    ...curve,
    ...{ p: curve.Fp.ORDER }
  });
}
var _0n4, _1n4, pointPrecomputes, pointWindowSizes;
var init_curve = __esm({
  "node_modules/.pnpm/@noble+curves@1.9.1/node_modules/@noble/curves/esm/abstract/curve.js"() {
    init_modular();
    init_utils2();
    _0n4 = BigInt(0);
    _1n4 = BigInt(1);
    pointPrecomputes = /* @__PURE__ */ new WeakMap();
    pointWindowSizes = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/.pnpm/@noble+curves@1.9.1/node_modules/@noble/curves/esm/abstract/weierstrass.js
function validateSigVerOpts(opts) {
  if (opts.lowS !== void 0)
    abool("lowS", opts.lowS);
  if (opts.prehash !== void 0)
    abool("prehash", opts.prehash);
}
function validatePointOpts(curve) {
  const opts = validateBasic(curve);
  validateObject(opts, {
    a: "field",
    b: "field"
  }, {
    allowInfinityPoint: "boolean",
    allowedPrivateKeyLengths: "array",
    clearCofactor: "function",
    fromBytes: "function",
    isTorsionFree: "function",
    toBytes: "function",
    wrapPrivateKey: "boolean"
  });
  const { endo, Fp, a } = opts;
  if (endo) {
    if (!Fp.eql(a, Fp.ZERO)) {
      throw new Error("invalid endo: CURVE.a must be 0");
    }
    if (typeof endo !== "object" || typeof endo.beta !== "bigint" || typeof endo.splitScalar !== "function") {
      throw new Error('invalid endo: expected "beta": bigint and "splitScalar": function');
    }
  }
  return Object.freeze({ ...opts });
}
function numToSizedHex(num2, size2) {
  return bytesToHex2(numberToBytesBE(num2, size2));
}
function weierstrassPoints(opts) {
  const CURVE = validatePointOpts(opts);
  const { Fp } = CURVE;
  const Fn = Field(CURVE.n, CURVE.nBitLength);
  const toBytes3 = CURVE.toBytes || ((_c, point, _isCompressed) => {
    const a = point.toAffine();
    return concatBytes3(Uint8Array.from([4]), Fp.toBytes(a.x), Fp.toBytes(a.y));
  });
  const fromBytes = CURVE.fromBytes || ((bytes) => {
    const tail = bytes.subarray(1);
    const x = Fp.fromBytes(tail.subarray(0, Fp.BYTES));
    const y = Fp.fromBytes(tail.subarray(Fp.BYTES, 2 * Fp.BYTES));
    return { x, y };
  });
  function weierstrassEquation(x) {
    const { a, b } = CURVE;
    const x2 = Fp.sqr(x);
    const x3 = Fp.mul(x2, x);
    return Fp.add(Fp.add(x3, Fp.mul(x, a)), b);
  }
  function isValidXY(x, y) {
    const left = Fp.sqr(y);
    const right = weierstrassEquation(x);
    return Fp.eql(left, right);
  }
  if (!isValidXY(CURVE.Gx, CURVE.Gy))
    throw new Error("bad curve params: generator point");
  const _4a3 = Fp.mul(Fp.pow(CURVE.a, _3n2), _4n2);
  const _27b2 = Fp.mul(Fp.sqr(CURVE.b), BigInt(27));
  if (Fp.is0(Fp.add(_4a3, _27b2)))
    throw new Error("bad curve params: a or b");
  function isWithinCurveOrder(num2) {
    return inRange(num2, _1n5, CURVE.n);
  }
  function normPrivateKeyToScalar(key) {
    const { allowedPrivateKeyLengths: lengths, nByteLength, wrapPrivateKey, n: N } = CURVE;
    if (lengths && typeof key !== "bigint") {
      if (isBytes2(key))
        key = bytesToHex2(key);
      if (typeof key !== "string" || !lengths.includes(key.length))
        throw new Error("invalid private key");
      key = key.padStart(nByteLength * 2, "0");
    }
    let num2;
    try {
      num2 = typeof key === "bigint" ? key : bytesToNumberBE(ensureBytes("private key", key, nByteLength));
    } catch (error) {
      throw new Error("invalid private key, expected hex or " + nByteLength + " bytes, got " + typeof key);
    }
    if (wrapPrivateKey)
      num2 = mod(num2, N);
    aInRange("private key", num2, _1n5, N);
    return num2;
  }
  function aprjpoint(other) {
    if (!(other instanceof Point2))
      throw new Error("ProjectivePoint expected");
  }
  const toAffineMemo = memoized((p, iz) => {
    const { px: x, py: y, pz: z } = p;
    if (Fp.eql(z, Fp.ONE))
      return { x, y };
    const is0 = p.is0();
    if (iz == null)
      iz = is0 ? Fp.ONE : Fp.inv(z);
    const ax = Fp.mul(x, iz);
    const ay = Fp.mul(y, iz);
    const zz = Fp.mul(z, iz);
    if (is0)
      return { x: Fp.ZERO, y: Fp.ZERO };
    if (!Fp.eql(zz, Fp.ONE))
      throw new Error("invZ was invalid");
    return { x: ax, y: ay };
  });
  const assertValidMemo = memoized((p) => {
    if (p.is0()) {
      if (CURVE.allowInfinityPoint && !Fp.is0(p.py))
        return;
      throw new Error("bad point: ZERO");
    }
    const { x, y } = p.toAffine();
    if (!Fp.isValid(x) || !Fp.isValid(y))
      throw new Error("bad point: x or y not FE");
    if (!isValidXY(x, y))
      throw new Error("bad point: equation left != right");
    if (!p.isTorsionFree())
      throw new Error("bad point: not in prime-order subgroup");
    return true;
  });
  class Point2 {
    constructor(px, py, pz) {
      if (px == null || !Fp.isValid(px))
        throw new Error("x required");
      if (py == null || !Fp.isValid(py) || Fp.is0(py))
        throw new Error("y required");
      if (pz == null || !Fp.isValid(pz))
        throw new Error("z required");
      this.px = px;
      this.py = py;
      this.pz = pz;
      Object.freeze(this);
    }
    // Does not validate if the point is on-curve.
    // Use fromHex instead, or call assertValidity() later.
    static fromAffine(p) {
      const { x, y } = p || {};
      if (!p || !Fp.isValid(x) || !Fp.isValid(y))
        throw new Error("invalid affine point");
      if (p instanceof Point2)
        throw new Error("projective point not allowed");
      const is0 = (i) => Fp.eql(i, Fp.ZERO);
      if (is0(x) && is0(y))
        return Point2.ZERO;
      return new Point2(x, y, Fp.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    /**
     * Takes a bunch of Projective Points but executes only one
     * inversion on all of them. Inversion is very slow operation,
     * so this improves performance massively.
     * Optimization: converts a list of projective points to a list of identical points with Z=1.
     */
    static normalizeZ(points) {
      const toInv = FpInvertBatch(Fp, points.map((p) => p.pz));
      return points.map((p, i) => p.toAffine(toInv[i])).map(Point2.fromAffine);
    }
    /**
     * Converts hash string or Uint8Array to Point.
     * @param hex short/long ECDSA hex
     */
    static fromHex(hex) {
      const P = Point2.fromAffine(fromBytes(ensureBytes("pointHex", hex)));
      P.assertValidity();
      return P;
    }
    // Multiplies generator point by privateKey.
    static fromPrivateKey(privateKey) {
      return Point2.BASE.multiply(normPrivateKeyToScalar(privateKey));
    }
    // Multiscalar Multiplication
    static msm(points, scalars) {
      return pippenger(Point2, Fn, points, scalars);
    }
    // "Private method", don't use it directly
    _setWindowSize(windowSize) {
      wnaf.setWindowSize(this, windowSize);
    }
    // A point on curve is valid if it conforms to equation.
    assertValidity() {
      assertValidMemo(this);
    }
    hasEvenY() {
      const { y } = this.toAffine();
      if (Fp.isOdd)
        return !Fp.isOdd(y);
      throw new Error("Field doesn't support isOdd");
    }
    /**
     * Compare one point to another.
     */
    equals(other) {
      aprjpoint(other);
      const { px: X1, py: Y1, pz: Z1 } = this;
      const { px: X2, py: Y2, pz: Z2 } = other;
      const U1 = Fp.eql(Fp.mul(X1, Z2), Fp.mul(X2, Z1));
      const U2 = Fp.eql(Fp.mul(Y1, Z2), Fp.mul(Y2, Z1));
      return U1 && U2;
    }
    /**
     * Flips point to one corresponding to (x, -y) in Affine coordinates.
     */
    negate() {
      return new Point2(this.px, Fp.neg(this.py), this.pz);
    }
    // Renes-Costello-Batina exception-free doubling formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 3
    // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
    double() {
      const { a, b } = CURVE;
      const b3 = Fp.mul(b, _3n2);
      const { px: X1, py: Y1, pz: Z1 } = this;
      let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO;
      let t0 = Fp.mul(X1, X1);
      let t1 = Fp.mul(Y1, Y1);
      let t2 = Fp.mul(Z1, Z1);
      let t3 = Fp.mul(X1, Y1);
      t3 = Fp.add(t3, t3);
      Z3 = Fp.mul(X1, Z1);
      Z3 = Fp.add(Z3, Z3);
      X3 = Fp.mul(a, Z3);
      Y3 = Fp.mul(b3, t2);
      Y3 = Fp.add(X3, Y3);
      X3 = Fp.sub(t1, Y3);
      Y3 = Fp.add(t1, Y3);
      Y3 = Fp.mul(X3, Y3);
      X3 = Fp.mul(t3, X3);
      Z3 = Fp.mul(b3, Z3);
      t2 = Fp.mul(a, t2);
      t3 = Fp.sub(t0, t2);
      t3 = Fp.mul(a, t3);
      t3 = Fp.add(t3, Z3);
      Z3 = Fp.add(t0, t0);
      t0 = Fp.add(Z3, t0);
      t0 = Fp.add(t0, t2);
      t0 = Fp.mul(t0, t3);
      Y3 = Fp.add(Y3, t0);
      t2 = Fp.mul(Y1, Z1);
      t2 = Fp.add(t2, t2);
      t0 = Fp.mul(t2, t3);
      X3 = Fp.sub(X3, t0);
      Z3 = Fp.mul(t2, t1);
      Z3 = Fp.add(Z3, Z3);
      Z3 = Fp.add(Z3, Z3);
      return new Point2(X3, Y3, Z3);
    }
    // Renes-Costello-Batina exception-free addition formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 1
    // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
    add(other) {
      aprjpoint(other);
      const { px: X1, py: Y1, pz: Z1 } = this;
      const { px: X2, py: Y2, pz: Z2 } = other;
      let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO;
      const a = CURVE.a;
      const b3 = Fp.mul(CURVE.b, _3n2);
      let t0 = Fp.mul(X1, X2);
      let t1 = Fp.mul(Y1, Y2);
      let t2 = Fp.mul(Z1, Z2);
      let t3 = Fp.add(X1, Y1);
      let t4 = Fp.add(X2, Y2);
      t3 = Fp.mul(t3, t4);
      t4 = Fp.add(t0, t1);
      t3 = Fp.sub(t3, t4);
      t4 = Fp.add(X1, Z1);
      let t5 = Fp.add(X2, Z2);
      t4 = Fp.mul(t4, t5);
      t5 = Fp.add(t0, t2);
      t4 = Fp.sub(t4, t5);
      t5 = Fp.add(Y1, Z1);
      X3 = Fp.add(Y2, Z2);
      t5 = Fp.mul(t5, X3);
      X3 = Fp.add(t1, t2);
      t5 = Fp.sub(t5, X3);
      Z3 = Fp.mul(a, t4);
      X3 = Fp.mul(b3, t2);
      Z3 = Fp.add(X3, Z3);
      X3 = Fp.sub(t1, Z3);
      Z3 = Fp.add(t1, Z3);
      Y3 = Fp.mul(X3, Z3);
      t1 = Fp.add(t0, t0);
      t1 = Fp.add(t1, t0);
      t2 = Fp.mul(a, t2);
      t4 = Fp.mul(b3, t4);
      t1 = Fp.add(t1, t2);
      t2 = Fp.sub(t0, t2);
      t2 = Fp.mul(a, t2);
      t4 = Fp.add(t4, t2);
      t0 = Fp.mul(t1, t4);
      Y3 = Fp.add(Y3, t0);
      t0 = Fp.mul(t5, t4);
      X3 = Fp.mul(t3, X3);
      X3 = Fp.sub(X3, t0);
      t0 = Fp.mul(t3, t1);
      Z3 = Fp.mul(t5, Z3);
      Z3 = Fp.add(Z3, t0);
      return new Point2(X3, Y3, Z3);
    }
    subtract(other) {
      return this.add(other.negate());
    }
    is0() {
      return this.equals(Point2.ZERO);
    }
    wNAF(n) {
      return wnaf.wNAFCached(this, n, Point2.normalizeZ);
    }
    /**
     * Non-constant-time multiplication. Uses double-and-add algorithm.
     * It's faster, but should only be used when you don't care about
     * an exposed private key e.g. sig verification, which works over *public* keys.
     */
    multiplyUnsafe(sc) {
      const { endo: endo2, n: N } = CURVE;
      aInRange("scalar", sc, _0n5, N);
      const I = Point2.ZERO;
      if (sc === _0n5)
        return I;
      if (this.is0() || sc === _1n5)
        return this;
      if (!endo2 || wnaf.hasPrecomputes(this))
        return wnaf.wNAFCachedUnsafe(this, sc, Point2.normalizeZ);
      let { k1neg, k1, k2neg, k2 } = endo2.splitScalar(sc);
      let k1p = I;
      let k2p = I;
      let d = this;
      while (k1 > _0n5 || k2 > _0n5) {
        if (k1 & _1n5)
          k1p = k1p.add(d);
        if (k2 & _1n5)
          k2p = k2p.add(d);
        d = d.double();
        k1 >>= _1n5;
        k2 >>= _1n5;
      }
      if (k1neg)
        k1p = k1p.negate();
      if (k2neg)
        k2p = k2p.negate();
      k2p = new Point2(Fp.mul(k2p.px, endo2.beta), k2p.py, k2p.pz);
      return k1p.add(k2p);
    }
    /**
     * Constant time multiplication.
     * Uses wNAF method. Windowed method may be 10% faster,
     * but takes 2x longer to generate and consumes 2x memory.
     * Uses precomputes when available.
     * Uses endomorphism for Koblitz curves.
     * @param scalar by which the point would be multiplied
     * @returns New point
     */
    multiply(scalar) {
      const { endo: endo2, n: N } = CURVE;
      aInRange("scalar", scalar, _1n5, N);
      let point, fake;
      if (endo2) {
        const { k1neg, k1, k2neg, k2 } = endo2.splitScalar(scalar);
        let { p: k1p, f: f1p } = this.wNAF(k1);
        let { p: k2p, f: f2p } = this.wNAF(k2);
        k1p = wnaf.constTimeNegate(k1neg, k1p);
        k2p = wnaf.constTimeNegate(k2neg, k2p);
        k2p = new Point2(Fp.mul(k2p.px, endo2.beta), k2p.py, k2p.pz);
        point = k1p.add(k2p);
        fake = f1p.add(f2p);
      } else {
        const { p, f } = this.wNAF(scalar);
        point = p;
        fake = f;
      }
      return Point2.normalizeZ([point, fake])[0];
    }
    /**
     * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
     * Not using Strauss-Shamir trick: precomputation tables are faster.
     * The trick could be useful if both P and Q are not G (not in our case).
     * @returns non-zero affine point
     */
    multiplyAndAddUnsafe(Q, a, b) {
      const G = Point2.BASE;
      const mul = (P, a2) => a2 === _0n5 || a2 === _1n5 || !P.equals(G) ? P.multiplyUnsafe(a2) : P.multiply(a2);
      const sum = mul(this, a).add(mul(Q, b));
      return sum.is0() ? void 0 : sum;
    }
    // Converts Projective point to affine (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    // (x, y, z) ∋ (x=x/z, y=y/z)
    toAffine(iz) {
      return toAffineMemo(this, iz);
    }
    isTorsionFree() {
      const { h: cofactor, isTorsionFree } = CURVE;
      if (cofactor === _1n5)
        return true;
      if (isTorsionFree)
        return isTorsionFree(Point2, this);
      throw new Error("isTorsionFree() has not been declared for the elliptic curve");
    }
    clearCofactor() {
      const { h: cofactor, clearCofactor } = CURVE;
      if (cofactor === _1n5)
        return this;
      if (clearCofactor)
        return clearCofactor(Point2, this);
      return this.multiplyUnsafe(CURVE.h);
    }
    toRawBytes(isCompressed = true) {
      abool("isCompressed", isCompressed);
      this.assertValidity();
      return toBytes3(Point2, this, isCompressed);
    }
    toHex(isCompressed = true) {
      abool("isCompressed", isCompressed);
      return bytesToHex2(this.toRawBytes(isCompressed));
    }
  }
  Point2.BASE = new Point2(CURVE.Gx, CURVE.Gy, Fp.ONE);
  Point2.ZERO = new Point2(Fp.ZERO, Fp.ONE, Fp.ZERO);
  const { endo, nBitLength } = CURVE;
  const wnaf = wNAF(Point2, endo ? Math.ceil(nBitLength / 2) : nBitLength);
  return {
    CURVE,
    ProjectivePoint: Point2,
    normPrivateKeyToScalar,
    weierstrassEquation,
    isWithinCurveOrder
  };
}
function validateOpts(curve) {
  const opts = validateBasic(curve);
  validateObject(opts, {
    hash: "hash",
    hmac: "function",
    randomBytes: "function"
  }, {
    bits2int: "function",
    bits2int_modN: "function",
    lowS: "boolean"
  });
  return Object.freeze({ lowS: true, ...opts });
}
function weierstrass(curveDef) {
  const CURVE = validateOpts(curveDef);
  const { Fp, n: CURVE_ORDER, nByteLength, nBitLength } = CURVE;
  const compressedLen = Fp.BYTES + 1;
  const uncompressedLen = 2 * Fp.BYTES + 1;
  function modN2(a) {
    return mod(a, CURVE_ORDER);
  }
  function invN(a) {
    return invert(a, CURVE_ORDER);
  }
  const { ProjectivePoint: Point2, normPrivateKeyToScalar, weierstrassEquation, isWithinCurveOrder } = weierstrassPoints({
    ...CURVE,
    toBytes(_c, point, isCompressed) {
      const a = point.toAffine();
      const x = Fp.toBytes(a.x);
      const cat = concatBytes3;
      abool("isCompressed", isCompressed);
      if (isCompressed) {
        return cat(Uint8Array.from([point.hasEvenY() ? 2 : 3]), x);
      } else {
        return cat(Uint8Array.from([4]), x, Fp.toBytes(a.y));
      }
    },
    fromBytes(bytes) {
      const len = bytes.length;
      const head = bytes[0];
      const tail = bytes.subarray(1);
      if (len === compressedLen && (head === 2 || head === 3)) {
        const x = bytesToNumberBE(tail);
        if (!inRange(x, _1n5, Fp.ORDER))
          throw new Error("Point is not on curve");
        const y2 = weierstrassEquation(x);
        let y;
        try {
          y = Fp.sqrt(y2);
        } catch (sqrtError) {
          const suffix = sqrtError instanceof Error ? ": " + sqrtError.message : "";
          throw new Error("Point is not on curve" + suffix);
        }
        const isYOdd = (y & _1n5) === _1n5;
        const isHeadOdd = (head & 1) === 1;
        if (isHeadOdd !== isYOdd)
          y = Fp.neg(y);
        return { x, y };
      } else if (len === uncompressedLen && head === 4) {
        const x = Fp.fromBytes(tail.subarray(0, Fp.BYTES));
        const y = Fp.fromBytes(tail.subarray(Fp.BYTES, 2 * Fp.BYTES));
        return { x, y };
      } else {
        const cl = compressedLen;
        const ul = uncompressedLen;
        throw new Error("invalid Point, expected length of " + cl + ", or uncompressed " + ul + ", got " + len);
      }
    }
  });
  function isBiggerThanHalfOrder(number) {
    const HALF = CURVE_ORDER >> _1n5;
    return number > HALF;
  }
  function normalizeS(s) {
    return isBiggerThanHalfOrder(s) ? modN2(-s) : s;
  }
  const slcNum = (b, from, to) => bytesToNumberBE(b.slice(from, to));
  class Signature {
    constructor(r, s, recovery) {
      aInRange("r", r, _1n5, CURVE_ORDER);
      aInRange("s", s, _1n5, CURVE_ORDER);
      this.r = r;
      this.s = s;
      if (recovery != null)
        this.recovery = recovery;
      Object.freeze(this);
    }
    // pair (bytes of r, bytes of s)
    static fromCompact(hex) {
      const l = nByteLength;
      hex = ensureBytes("compactSignature", hex, l * 2);
      return new Signature(slcNum(hex, 0, l), slcNum(hex, l, 2 * l));
    }
    // DER encoded ECDSA signature
    // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
    static fromDER(hex) {
      const { r, s } = DER.toSig(ensureBytes("DER", hex));
      return new Signature(r, s);
    }
    /**
     * @todo remove
     * @deprecated
     */
    assertValidity() {
    }
    addRecoveryBit(recovery) {
      return new Signature(this.r, this.s, recovery);
    }
    recoverPublicKey(msgHash) {
      const { r, s, recovery: rec } = this;
      const h = bits2int_modN(ensureBytes("msgHash", msgHash));
      if (rec == null || ![0, 1, 2, 3].includes(rec))
        throw new Error("recovery id invalid");
      const radj = rec === 2 || rec === 3 ? r + CURVE.n : r;
      if (radj >= Fp.ORDER)
        throw new Error("recovery id 2 or 3 invalid");
      const prefix = (rec & 1) === 0 ? "02" : "03";
      const R = Point2.fromHex(prefix + numToSizedHex(radj, Fp.BYTES));
      const ir = invN(radj);
      const u1 = modN2(-h * ir);
      const u2 = modN2(s * ir);
      const Q = Point2.BASE.multiplyAndAddUnsafe(R, u1, u2);
      if (!Q)
        throw new Error("point at infinify");
      Q.assertValidity();
      return Q;
    }
    // Signatures should be low-s, to prevent malleability.
    hasHighS() {
      return isBiggerThanHalfOrder(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new Signature(this.r, modN2(-this.s), this.recovery) : this;
    }
    // DER-encoded
    toDERRawBytes() {
      return hexToBytes2(this.toDERHex());
    }
    toDERHex() {
      return DER.hexFromSig(this);
    }
    // padded bytes of r, then padded bytes of s
    toCompactRawBytes() {
      return hexToBytes2(this.toCompactHex());
    }
    toCompactHex() {
      const l = nByteLength;
      return numToSizedHex(this.r, l) + numToSizedHex(this.s, l);
    }
  }
  const utils = {
    isValidPrivateKey(privateKey) {
      try {
        normPrivateKeyToScalar(privateKey);
        return true;
      } catch (error) {
        return false;
      }
    },
    normPrivateKeyToScalar,
    /**
     * Produces cryptographically secure private key from random of size
     * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
     */
    randomPrivateKey: () => {
      const length = getMinHashLength(CURVE.n);
      return mapHashToField(CURVE.randomBytes(length), CURVE.n);
    },
    /**
     * Creates precompute table for an arbitrary EC point. Makes point "cached".
     * Allows to massively speed-up `point.multiply(scalar)`.
     * @returns cached point
     * @example
     * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
     * fast.multiply(privKey); // much faster ECDH now
     */
    precompute(windowSize = 8, point = Point2.BASE) {
      point._setWindowSize(windowSize);
      point.multiply(BigInt(3));
      return point;
    }
  };
  function getPublicKey(privateKey, isCompressed = true) {
    return Point2.fromPrivateKey(privateKey).toRawBytes(isCompressed);
  }
  function isProbPub(item) {
    if (typeof item === "bigint")
      return false;
    if (item instanceof Point2)
      return true;
    const arr = ensureBytes("key", item);
    const len = arr.length;
    const fpl = Fp.BYTES;
    const compLen = fpl + 1;
    const uncompLen = 2 * fpl + 1;
    if (CURVE.allowedPrivateKeyLengths || nByteLength === compLen) {
      return void 0;
    } else {
      return len === compLen || len === uncompLen;
    }
  }
  function getSharedSecret(privateA, publicB, isCompressed = true) {
    if (isProbPub(privateA) === true)
      throw new Error("first arg must be private key");
    if (isProbPub(publicB) === false)
      throw new Error("second arg must be public key");
    const b = Point2.fromHex(publicB);
    return b.multiply(normPrivateKeyToScalar(privateA)).toRawBytes(isCompressed);
  }
  const bits2int = CURVE.bits2int || function(bytes) {
    if (bytes.length > 8192)
      throw new Error("input is too large");
    const num2 = bytesToNumberBE(bytes);
    const delta = bytes.length * 8 - nBitLength;
    return delta > 0 ? num2 >> BigInt(delta) : num2;
  };
  const bits2int_modN = CURVE.bits2int_modN || function(bytes) {
    return modN2(bits2int(bytes));
  };
  const ORDER_MASK = bitMask(nBitLength);
  function int2octets(num2) {
    aInRange("num < 2^" + nBitLength, num2, _0n5, ORDER_MASK);
    return numberToBytesBE(num2, nByteLength);
  }
  function prepSig(msgHash, privateKey, opts = defaultSigOpts) {
    if (["recovered", "canonical"].some((k) => k in opts))
      throw new Error("sign() legacy options not supported");
    const { hash, randomBytes: randomBytes2 } = CURVE;
    let { lowS, prehash, extraEntropy: ent } = opts;
    if (lowS == null)
      lowS = true;
    msgHash = ensureBytes("msgHash", msgHash);
    validateSigVerOpts(opts);
    if (prehash)
      msgHash = ensureBytes("prehashed msgHash", hash(msgHash));
    const h1int = bits2int_modN(msgHash);
    const d = normPrivateKeyToScalar(privateKey);
    const seedArgs = [int2octets(d), int2octets(h1int)];
    if (ent != null && ent !== false) {
      const e = ent === true ? randomBytes2(Fp.BYTES) : ent;
      seedArgs.push(ensureBytes("extraEntropy", e));
    }
    const seed = concatBytes3(...seedArgs);
    const m = h1int;
    function k2sig(kBytes) {
      const k = bits2int(kBytes);
      if (!isWithinCurveOrder(k))
        return;
      const ik = invN(k);
      const q = Point2.BASE.multiply(k).toAffine();
      const r = modN2(q.x);
      if (r === _0n5)
        return;
      const s = modN2(ik * modN2(m + r * d));
      if (s === _0n5)
        return;
      let recovery = (q.x === r ? 0 : 2) | Number(q.y & _1n5);
      let normS = s;
      if (lowS && isBiggerThanHalfOrder(s)) {
        normS = normalizeS(s);
        recovery ^= 1;
      }
      return new Signature(r, normS, recovery);
    }
    return { seed, k2sig };
  }
  const defaultSigOpts = { lowS: CURVE.lowS, prehash: false };
  const defaultVerOpts = { lowS: CURVE.lowS, prehash: false };
  function sign2(msgHash, privKey, opts = defaultSigOpts) {
    const { seed, k2sig } = prepSig(msgHash, privKey, opts);
    const C = CURVE;
    const drbg = createHmacDrbg(C.hash.outputLen, C.nByteLength, C.hmac);
    return drbg(seed, k2sig);
  }
  Point2.BASE._setWindowSize(8);
  function verify(signature, msgHash, publicKey, opts = defaultVerOpts) {
    const sg = signature;
    msgHash = ensureBytes("msgHash", msgHash);
    publicKey = ensureBytes("publicKey", publicKey);
    const { lowS, prehash, format } = opts;
    validateSigVerOpts(opts);
    if ("strict" in opts)
      throw new Error("options.strict was renamed to lowS");
    if (format !== void 0 && format !== "compact" && format !== "der")
      throw new Error("format must be compact or der");
    const isHex2 = typeof sg === "string" || isBytes2(sg);
    const isObj = !isHex2 && !format && typeof sg === "object" && sg !== null && typeof sg.r === "bigint" && typeof sg.s === "bigint";
    if (!isHex2 && !isObj)
      throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
    let _sig = void 0;
    let P;
    try {
      if (isObj)
        _sig = new Signature(sg.r, sg.s);
      if (isHex2) {
        try {
          if (format !== "compact")
            _sig = Signature.fromDER(sg);
        } catch (derError) {
          if (!(derError instanceof DER.Err))
            throw derError;
        }
        if (!_sig && format !== "der")
          _sig = Signature.fromCompact(sg);
      }
      P = Point2.fromHex(publicKey);
    } catch (error) {
      return false;
    }
    if (!_sig)
      return false;
    if (lowS && _sig.hasHighS())
      return false;
    if (prehash)
      msgHash = CURVE.hash(msgHash);
    const { r, s } = _sig;
    const h = bits2int_modN(msgHash);
    const is = invN(s);
    const u1 = modN2(h * is);
    const u2 = modN2(r * is);
    const R = Point2.BASE.multiplyAndAddUnsafe(P, u1, u2)?.toAffine();
    if (!R)
      return false;
    const v = modN2(R.x);
    return v === r;
  }
  return {
    CURVE,
    getPublicKey,
    getSharedSecret,
    sign: sign2,
    verify,
    ProjectivePoint: Point2,
    Signature,
    utils
  };
}
function SWUFpSqrtRatio(Fp, Z) {
  const q = Fp.ORDER;
  let l = _0n5;
  for (let o = q - _1n5; o % _2n3 === _0n5; o /= _2n3)
    l += _1n5;
  const c1 = l;
  const _2n_pow_c1_1 = _2n3 << c1 - _1n5 - _1n5;
  const _2n_pow_c1 = _2n_pow_c1_1 * _2n3;
  const c2 = (q - _1n5) / _2n_pow_c1;
  const c3 = (c2 - _1n5) / _2n3;
  const c4 = _2n_pow_c1 - _1n5;
  const c5 = _2n_pow_c1_1;
  const c6 = Fp.pow(Z, c2);
  const c7 = Fp.pow(Z, (c2 + _1n5) / _2n3);
  let sqrtRatio = (u, v) => {
    let tv1 = c6;
    let tv2 = Fp.pow(v, c4);
    let tv3 = Fp.sqr(tv2);
    tv3 = Fp.mul(tv3, v);
    let tv5 = Fp.mul(u, tv3);
    tv5 = Fp.pow(tv5, c3);
    tv5 = Fp.mul(tv5, tv2);
    tv2 = Fp.mul(tv5, v);
    tv3 = Fp.mul(tv5, u);
    let tv4 = Fp.mul(tv3, tv2);
    tv5 = Fp.pow(tv4, c5);
    let isQR = Fp.eql(tv5, Fp.ONE);
    tv2 = Fp.mul(tv3, c7);
    tv5 = Fp.mul(tv4, tv1);
    tv3 = Fp.cmov(tv2, tv3, isQR);
    tv4 = Fp.cmov(tv5, tv4, isQR);
    for (let i = c1; i > _1n5; i--) {
      let tv52 = i - _2n3;
      tv52 = _2n3 << tv52 - _1n5;
      let tvv5 = Fp.pow(tv4, tv52);
      const e1 = Fp.eql(tvv5, Fp.ONE);
      tv2 = Fp.mul(tv3, tv1);
      tv1 = Fp.mul(tv1, tv1);
      tvv5 = Fp.mul(tv4, tv1);
      tv3 = Fp.cmov(tv2, tv3, e1);
      tv4 = Fp.cmov(tvv5, tv4, e1);
    }
    return { isValid: isQR, value: tv3 };
  };
  if (Fp.ORDER % _4n2 === _3n2) {
    const c12 = (Fp.ORDER - _3n2) / _4n2;
    const c22 = Fp.sqrt(Fp.neg(Z));
    sqrtRatio = (u, v) => {
      let tv1 = Fp.sqr(v);
      const tv2 = Fp.mul(u, v);
      tv1 = Fp.mul(tv1, tv2);
      let y1 = Fp.pow(tv1, c12);
      y1 = Fp.mul(y1, tv2);
      const y2 = Fp.mul(y1, c22);
      const tv3 = Fp.mul(Fp.sqr(y1), v);
      const isQR = Fp.eql(tv3, u);
      let y = Fp.cmov(y2, y1, isQR);
      return { isValid: isQR, value: y };
    };
  }
  return sqrtRatio;
}
function mapToCurveSimpleSWU(Fp, opts) {
  validateField(Fp);
  if (!Fp.isValid(opts.A) || !Fp.isValid(opts.B) || !Fp.isValid(opts.Z))
    throw new Error("mapToCurveSimpleSWU: invalid opts");
  const sqrtRatio = SWUFpSqrtRatio(Fp, opts.Z);
  if (!Fp.isOdd)
    throw new Error("Fp.isOdd is not implemented!");
  return (u) => {
    let tv1, tv2, tv3, tv4, tv5, tv6, x, y;
    tv1 = Fp.sqr(u);
    tv1 = Fp.mul(tv1, opts.Z);
    tv2 = Fp.sqr(tv1);
    tv2 = Fp.add(tv2, tv1);
    tv3 = Fp.add(tv2, Fp.ONE);
    tv3 = Fp.mul(tv3, opts.B);
    tv4 = Fp.cmov(opts.Z, Fp.neg(tv2), !Fp.eql(tv2, Fp.ZERO));
    tv4 = Fp.mul(tv4, opts.A);
    tv2 = Fp.sqr(tv3);
    tv6 = Fp.sqr(tv4);
    tv5 = Fp.mul(tv6, opts.A);
    tv2 = Fp.add(tv2, tv5);
    tv2 = Fp.mul(tv2, tv3);
    tv6 = Fp.mul(tv6, tv4);
    tv5 = Fp.mul(tv6, opts.B);
    tv2 = Fp.add(tv2, tv5);
    x = Fp.mul(tv1, tv3);
    const { isValid: isValid2, value } = sqrtRatio(tv2, tv6);
    y = Fp.mul(tv1, u);
    y = Fp.mul(y, value);
    x = Fp.cmov(x, tv3, isValid2);
    y = Fp.cmov(y, value, isValid2);
    const e1 = Fp.isOdd(u) === Fp.isOdd(y);
    y = Fp.cmov(Fp.neg(y), y, e1);
    const tv4_inv = FpInvertBatch(Fp, [tv4], true)[0];
    x = Fp.mul(x, tv4_inv);
    return { x, y };
  };
}
var DERErr, DER, _0n5, _1n5, _2n3, _3n2, _4n2;
var init_weierstrass = __esm({
  "node_modules/.pnpm/@noble+curves@1.9.1/node_modules/@noble/curves/esm/abstract/weierstrass.js"() {
    init_curve();
    init_modular();
    init_utils2();
    DERErr = class extends Error {
      constructor(m = "") {
        super(m);
      }
    };
    DER = {
      // asn.1 DER encoding utils
      Err: DERErr,
      // Basic building block is TLV (Tag-Length-Value)
      _tlv: {
        encode: (tag, data) => {
          const { Err: E } = DER;
          if (tag < 0 || tag > 256)
            throw new E("tlv.encode: wrong tag");
          if (data.length & 1)
            throw new E("tlv.encode: unpadded data");
          const dataLen = data.length / 2;
          const len = numberToHexUnpadded(dataLen);
          if (len.length / 2 & 128)
            throw new E("tlv.encode: long form length too big");
          const lenLen = dataLen > 127 ? numberToHexUnpadded(len.length / 2 | 128) : "";
          const t = numberToHexUnpadded(tag);
          return t + lenLen + len + data;
        },
        // v - value, l - left bytes (unparsed)
        decode(tag, data) {
          const { Err: E } = DER;
          let pos = 0;
          if (tag < 0 || tag > 256)
            throw new E("tlv.encode: wrong tag");
          if (data.length < 2 || data[pos++] !== tag)
            throw new E("tlv.decode: wrong tlv");
          const first = data[pos++];
          const isLong = !!(first & 128);
          let length = 0;
          if (!isLong)
            length = first;
          else {
            const lenLen = first & 127;
            if (!lenLen)
              throw new E("tlv.decode(long): indefinite length not supported");
            if (lenLen > 4)
              throw new E("tlv.decode(long): byte length is too big");
            const lengthBytes = data.subarray(pos, pos + lenLen);
            if (lengthBytes.length !== lenLen)
              throw new E("tlv.decode: length bytes not complete");
            if (lengthBytes[0] === 0)
              throw new E("tlv.decode(long): zero leftmost byte");
            for (const b of lengthBytes)
              length = length << 8 | b;
            pos += lenLen;
            if (length < 128)
              throw new E("tlv.decode(long): not minimal encoding");
          }
          const v = data.subarray(pos, pos + length);
          if (v.length !== length)
            throw new E("tlv.decode: wrong value length");
          return { v, l: data.subarray(pos + length) };
        }
      },
      // https://crypto.stackexchange.com/a/57734 Leftmost bit of first byte is 'negative' flag,
      // since we always use positive integers here. It must always be empty:
      // - add zero byte if exists
      // - if next byte doesn't have a flag, leading zero is not allowed (minimal encoding)
      _int: {
        encode(num2) {
          const { Err: E } = DER;
          if (num2 < _0n5)
            throw new E("integer: negative integers are not allowed");
          let hex = numberToHexUnpadded(num2);
          if (Number.parseInt(hex[0], 16) & 8)
            hex = "00" + hex;
          if (hex.length & 1)
            throw new E("unexpected DER parsing assertion: unpadded hex");
          return hex;
        },
        decode(data) {
          const { Err: E } = DER;
          if (data[0] & 128)
            throw new E("invalid signature integer: negative");
          if (data[0] === 0 && !(data[1] & 128))
            throw new E("invalid signature integer: unnecessary leading zero");
          return bytesToNumberBE(data);
        }
      },
      toSig(hex) {
        const { Err: E, _int: int, _tlv: tlv } = DER;
        const data = ensureBytes("signature", hex);
        const { v: seqBytes, l: seqLeftBytes } = tlv.decode(48, data);
        if (seqLeftBytes.length)
          throw new E("invalid signature: left bytes after parsing");
        const { v: rBytes, l: rLeftBytes } = tlv.decode(2, seqBytes);
        const { v: sBytes, l: sLeftBytes } = tlv.decode(2, rLeftBytes);
        if (sLeftBytes.length)
          throw new E("invalid signature: left bytes after parsing");
        return { r: int.decode(rBytes), s: int.decode(sBytes) };
      },
      hexFromSig(sig) {
        const { _tlv: tlv, _int: int } = DER;
        const rs = tlv.encode(2, int.encode(sig.r));
        const ss = tlv.encode(2, int.encode(sig.s));
        const seq = rs + ss;
        return tlv.encode(48, seq);
      }
    };
    _0n5 = BigInt(0);
    _1n5 = BigInt(1);
    _2n3 = BigInt(2);
    _3n2 = BigInt(3);
    _4n2 = BigInt(4);
  }
});

// node_modules/.pnpm/@noble+curves@1.9.1/node_modules/@noble/curves/esm/_shortw_utils.js
function getHash(hash) {
  return {
    hash,
    hmac: (key, ...msgs) => hmac(hash, key, concatBytes(...msgs)),
    randomBytes
  };
}
function createCurve(curveDef, defHash) {
  const create = (hash) => weierstrass({ ...curveDef, ...getHash(hash) });
  return { ...create(defHash), create };
}
var init_shortw_utils = __esm({
  "node_modules/.pnpm/@noble+curves@1.9.1/node_modules/@noble/curves/esm/_shortw_utils.js"() {
    init_hmac();
    init_utils();
    init_weierstrass();
  }
});

// node_modules/.pnpm/@noble+curves@1.9.1/node_modules/@noble/curves/esm/abstract/hash-to-curve.js
function i2osp(value, length) {
  anum(value);
  anum(length);
  if (value < 0 || value >= 1 << 8 * length)
    throw new Error("invalid I2OSP input: " + value);
  const res = Array.from({ length }).fill(0);
  for (let i = length - 1; i >= 0; i--) {
    res[i] = value & 255;
    value >>>= 8;
  }
  return new Uint8Array(res);
}
function strxor(a, b) {
  const arr = new Uint8Array(a.length);
  for (let i = 0; i < a.length; i++) {
    arr[i] = a[i] ^ b[i];
  }
  return arr;
}
function anum(item) {
  if (!Number.isSafeInteger(item))
    throw new Error("number expected");
}
function expand_message_xmd(msg, DST, lenInBytes, H) {
  abytes2(msg);
  abytes2(DST);
  anum(lenInBytes);
  if (DST.length > 255)
    DST = H(concatBytes3(utf8ToBytes2("H2C-OVERSIZE-DST-"), DST));
  const { outputLen: b_in_bytes, blockLen: r_in_bytes } = H;
  const ell = Math.ceil(lenInBytes / b_in_bytes);
  if (lenInBytes > 65535 || ell > 255)
    throw new Error("expand_message_xmd: invalid lenInBytes");
  const DST_prime = concatBytes3(DST, i2osp(DST.length, 1));
  const Z_pad = i2osp(0, r_in_bytes);
  const l_i_b_str = i2osp(lenInBytes, 2);
  const b = new Array(ell);
  const b_0 = H(concatBytes3(Z_pad, msg, l_i_b_str, i2osp(0, 1), DST_prime));
  b[0] = H(concatBytes3(b_0, i2osp(1, 1), DST_prime));
  for (let i = 1; i <= ell; i++) {
    const args = [strxor(b_0, b[i - 1]), i2osp(i + 1, 1), DST_prime];
    b[i] = H(concatBytes3(...args));
  }
  const pseudo_random_bytes = concatBytes3(...b);
  return pseudo_random_bytes.slice(0, lenInBytes);
}
function expand_message_xof(msg, DST, lenInBytes, k, H) {
  abytes2(msg);
  abytes2(DST);
  anum(lenInBytes);
  if (DST.length > 255) {
    const dkLen = Math.ceil(2 * k / 8);
    DST = H.create({ dkLen }).update(utf8ToBytes2("H2C-OVERSIZE-DST-")).update(DST).digest();
  }
  if (lenInBytes > 65535 || DST.length > 255)
    throw new Error("expand_message_xof: invalid lenInBytes");
  return H.create({ dkLen: lenInBytes }).update(msg).update(i2osp(lenInBytes, 2)).update(DST).update(i2osp(DST.length, 1)).digest();
}
function hash_to_field(msg, count, options) {
  validateObject(options, {
    DST: "stringOrUint8Array",
    p: "bigint",
    m: "isSafeInteger",
    k: "isSafeInteger",
    hash: "hash"
  });
  const { p, k, m, hash, expand, DST: _DST } = options;
  abytes2(msg);
  anum(count);
  const DST = typeof _DST === "string" ? utf8ToBytes2(_DST) : _DST;
  const log2p = p.toString(2).length;
  const L = Math.ceil((log2p + k) / 8);
  const len_in_bytes = count * m * L;
  let prb;
  if (expand === "xmd") {
    prb = expand_message_xmd(msg, DST, len_in_bytes, hash);
  } else if (expand === "xof") {
    prb = expand_message_xof(msg, DST, len_in_bytes, k, hash);
  } else if (expand === "_internal_pass") {
    prb = msg;
  } else {
    throw new Error('expand must be "xmd" or "xof"');
  }
  const u = new Array(count);
  for (let i = 0; i < count; i++) {
    const e = new Array(m);
    for (let j = 0; j < m; j++) {
      const elm_offset = L * (j + i * m);
      const tv = prb.subarray(elm_offset, elm_offset + L);
      e[j] = mod(os2ip(tv), p);
    }
    u[i] = e;
  }
  return u;
}
function isogenyMap(field, map) {
  const coeff = map.map((i) => Array.from(i).reverse());
  return (x, y) => {
    const [xn, xd, yn, yd] = coeff.map((val) => val.reduce((acc, i) => field.add(field.mul(acc, x), i)));
    const [xd_inv, yd_inv] = FpInvertBatch(field, [xd, yd], true);
    x = field.mul(xn, xd_inv);
    y = field.mul(y, field.mul(yn, yd_inv));
    return { x, y };
  };
}
function createHasher2(Point2, mapToCurve, defaults) {
  if (typeof mapToCurve !== "function")
    throw new Error("mapToCurve() must be defined");
  function map(num2) {
    return Point2.fromAffine(mapToCurve(num2));
  }
  function clear(initial) {
    const P = initial.clearCofactor();
    if (P.equals(Point2.ZERO))
      return Point2.ZERO;
    P.assertValidity();
    return P;
  }
  return {
    defaults,
    // Encodes byte string to elliptic curve.
    // hash_to_curve from https://www.rfc-editor.org/rfc/rfc9380#section-3
    hashToCurve(msg, options) {
      const u = hash_to_field(msg, 2, { ...defaults, DST: defaults.DST, ...options });
      const u0 = map(u[0]);
      const u1 = map(u[1]);
      return clear(u0.add(u1));
    },
    // Encodes byte string to elliptic curve.
    // encode_to_curve from https://www.rfc-editor.org/rfc/rfc9380#section-3
    encodeToCurve(msg, options) {
      const u = hash_to_field(msg, 1, { ...defaults, DST: defaults.encodeDST, ...options });
      return clear(map(u[0]));
    },
    // Same as encodeToCurve, but without hash
    mapToCurve(scalars) {
      if (!Array.isArray(scalars))
        throw new Error("expected array of bigints");
      for (const i of scalars)
        if (typeof i !== "bigint")
          throw new Error("expected array of bigints");
      return clear(map(scalars));
    }
  };
}
var os2ip;
var init_hash_to_curve = __esm({
  "node_modules/.pnpm/@noble+curves@1.9.1/node_modules/@noble/curves/esm/abstract/hash-to-curve.js"() {
    init_modular();
    init_utils2();
    os2ip = bytesToNumberBE;
  }
});

// node_modules/.pnpm/@noble+curves@1.9.1/node_modules/@noble/curves/esm/secp256k1.js
var secp256k1_exports = {};
__export(secp256k1_exports, {
  encodeToCurve: () => encodeToCurve,
  hashToCurve: () => hashToCurve,
  schnorr: () => schnorr,
  secp256k1: () => secp256k1,
  secp256k1_hasher: () => secp256k1_hasher
});
function sqrtMod(y) {
  const P = secp256k1P;
  const _3n3 = BigInt(3), _6n = BigInt(6), _11n = BigInt(11), _22n = BigInt(22);
  const _23n = BigInt(23), _44n = BigInt(44), _88n = BigInt(88);
  const b2 = y * y * y % P;
  const b3 = b2 * b2 * y % P;
  const b6 = pow2(b3, _3n3, P) * b3 % P;
  const b9 = pow2(b6, _3n3, P) * b3 % P;
  const b11 = pow2(b9, _2n4, P) * b2 % P;
  const b22 = pow2(b11, _11n, P) * b11 % P;
  const b44 = pow2(b22, _22n, P) * b22 % P;
  const b88 = pow2(b44, _44n, P) * b44 % P;
  const b176 = pow2(b88, _88n, P) * b88 % P;
  const b220 = pow2(b176, _44n, P) * b44 % P;
  const b223 = pow2(b220, _3n3, P) * b3 % P;
  const t1 = pow2(b223, _23n, P) * b22 % P;
  const t2 = pow2(t1, _6n, P) * b2 % P;
  const root = pow2(t2, _2n4, P);
  if (!Fpk1.eql(Fpk1.sqr(root), y))
    throw new Error("Cannot find square root");
  return root;
}
function taggedHash(tag, ...messages) {
  let tagP = TAGGED_HASH_PREFIXES[tag];
  if (tagP === void 0) {
    const tagH = sha2562(Uint8Array.from(tag, (c) => c.charCodeAt(0)));
    tagP = concatBytes3(tagH, tagH);
    TAGGED_HASH_PREFIXES[tag] = tagP;
  }
  return sha2562(concatBytes3(tagP, ...messages));
}
function schnorrGetExtPubKey(priv) {
  let d_ = secp256k1.utils.normPrivateKeyToScalar(priv);
  let p = Point.fromPrivateKey(d_);
  const scalar = p.hasEvenY() ? d_ : modN(-d_);
  return { scalar, bytes: pointToBytes(p) };
}
function lift_x(x) {
  aInRange("x", x, _1n6, secp256k1P);
  const xx = modP(x * x);
  const c = modP(xx * x + BigInt(7));
  let y = sqrtMod(c);
  if (y % _2n4 !== _0n6)
    y = modP(-y);
  const p = new Point(x, y, _1n6);
  p.assertValidity();
  return p;
}
function challenge(...args) {
  return modN(num(taggedHash("BIP0340/challenge", ...args)));
}
function schnorrGetPublicKey(privateKey) {
  return schnorrGetExtPubKey(privateKey).bytes;
}
function schnorrSign(message, privateKey, auxRand = randomBytes(32)) {
  const m = ensureBytes("message", message);
  const { bytes: px, scalar: d } = schnorrGetExtPubKey(privateKey);
  const a = ensureBytes("auxRand", auxRand, 32);
  const t = numTo32b(d ^ num(taggedHash("BIP0340/aux", a)));
  const rand = taggedHash("BIP0340/nonce", t, px, m);
  const k_ = modN(num(rand));
  if (k_ === _0n6)
    throw new Error("sign failed: k is zero");
  const { bytes: rx, scalar: k } = schnorrGetExtPubKey(k_);
  const e = challenge(rx, px, m);
  const sig = new Uint8Array(64);
  sig.set(rx, 0);
  sig.set(numTo32b(modN(k + e * d)), 32);
  if (!schnorrVerify(sig, m, px))
    throw new Error("sign: Invalid signature produced");
  return sig;
}
function schnorrVerify(signature, message, publicKey) {
  const sig = ensureBytes("signature", signature, 64);
  const m = ensureBytes("message", message);
  const pub = ensureBytes("publicKey", publicKey, 32);
  try {
    const P = lift_x(num(pub));
    const r = num(sig.subarray(0, 32));
    if (!inRange(r, _1n6, secp256k1P))
      return false;
    const s = num(sig.subarray(32, 64));
    if (!inRange(s, _1n6, secp256k1N))
      return false;
    const e = challenge(numTo32b(r), pointToBytes(P), m);
    const R = GmulAdd(P, s, modN(-e));
    if (!R || !R.hasEvenY() || R.toAffine().x !== r)
      return false;
    return true;
  } catch (error) {
    return false;
  }
}
var secp256k1P, secp256k1N, _0n6, _1n6, _2n4, divNearest, Fpk1, secp256k1, TAGGED_HASH_PREFIXES, pointToBytes, numTo32b, modP, modN, Point, GmulAdd, num, schnorr, isoMap, mapSWU, secp256k1_hasher, hashToCurve, encodeToCurve;
var init_secp256k1 = __esm({
  "node_modules/.pnpm/@noble+curves@1.9.1/node_modules/@noble/curves/esm/secp256k1.js"() {
    init_sha2();
    init_utils();
    init_shortw_utils();
    init_hash_to_curve();
    init_modular();
    init_utils2();
    init_weierstrass();
    secp256k1P = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f");
    secp256k1N = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141");
    _0n6 = BigInt(0);
    _1n6 = BigInt(1);
    _2n4 = BigInt(2);
    divNearest = (a, b) => (a + b / _2n4) / b;
    Fpk1 = Field(secp256k1P, void 0, void 0, { sqrt: sqrtMod });
    secp256k1 = createCurve({
      a: _0n6,
      b: BigInt(7),
      Fp: Fpk1,
      n: secp256k1N,
      Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
      Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
      h: BigInt(1),
      lowS: true,
      // Allow only low-S signatures by default in sign() and verify()
      endo: {
        // Endomorphism, see above
        beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
        splitScalar: (k) => {
          const n = secp256k1N;
          const a1 = BigInt("0x3086d221a7d46bcde86c90e49284eb15");
          const b1 = -_1n6 * BigInt("0xe4437ed6010e88286f547fa90abfe4c3");
          const a2 = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8");
          const b2 = a1;
          const POW_2_128 = BigInt("0x100000000000000000000000000000000");
          const c1 = divNearest(b2 * k, n);
          const c2 = divNearest(-b1 * k, n);
          let k1 = mod(k - c1 * a1 - c2 * a2, n);
          let k2 = mod(-c1 * b1 - c2 * b2, n);
          const k1neg = k1 > POW_2_128;
          const k2neg = k2 > POW_2_128;
          if (k1neg)
            k1 = n - k1;
          if (k2neg)
            k2 = n - k2;
          if (k1 > POW_2_128 || k2 > POW_2_128) {
            throw new Error("splitScalar: Endomorphism failed, k=" + k);
          }
          return { k1neg, k1, k2neg, k2 };
        }
      }
    }, sha2562);
    TAGGED_HASH_PREFIXES = {};
    pointToBytes = (point) => point.toRawBytes(true).slice(1);
    numTo32b = (n) => numberToBytesBE(n, 32);
    modP = (x) => mod(x, secp256k1P);
    modN = (x) => mod(x, secp256k1N);
    Point = /* @__PURE__ */ (() => secp256k1.ProjectivePoint)();
    GmulAdd = (Q, a, b) => Point.BASE.multiplyAndAddUnsafe(Q, a, b);
    num = bytesToNumberBE;
    schnorr = /* @__PURE__ */ (() => ({
      getPublicKey: schnorrGetPublicKey,
      sign: schnorrSign,
      verify: schnorrVerify,
      utils: {
        randomPrivateKey: secp256k1.utils.randomPrivateKey,
        lift_x,
        pointToBytes,
        numberToBytesBE,
        bytesToNumberBE,
        taggedHash,
        mod
      }
    }))();
    isoMap = /* @__PURE__ */ (() => isogenyMap(Fpk1, [
      // xNum
      [
        "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7",
        "0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581",
        "0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262",
        "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c"
      ],
      // xDen
      [
        "0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b",
        "0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14",
        "0x0000000000000000000000000000000000000000000000000000000000000001"
        // LAST 1
      ],
      // yNum
      [
        "0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c",
        "0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3",
        "0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931",
        "0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84"
      ],
      // yDen
      [
        "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b",
        "0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573",
        "0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f",
        "0x0000000000000000000000000000000000000000000000000000000000000001"
        // LAST 1
      ]
    ].map((i) => i.map((j) => BigInt(j)))))();
    mapSWU = /* @__PURE__ */ (() => mapToCurveSimpleSWU(Fpk1, {
      A: BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"),
      B: BigInt("1771"),
      Z: Fpk1.create(BigInt("-11"))
    }))();
    secp256k1_hasher = /* @__PURE__ */ (() => createHasher2(secp256k1.ProjectivePoint, (scalars) => {
      const { x, y } = mapSWU(Fpk1.create(scalars[0]));
      return isoMap(x, y);
    }, {
      DST: "secp256k1_XMD:SHA-256_SSWU_RO_",
      encodeDST: "secp256k1_XMD:SHA-256_SSWU_NU_",
      p: Fpk1.ORDER,
      m: 1,
      k: 128,
      expand: "xmd",
      hash: sha2562
    }))();
    hashToCurve = /* @__PURE__ */ (() => secp256k1_hasher.hashToCurve)();
    encodeToCurve = /* @__PURE__ */ (() => secp256k1_hasher.encodeToCurve)();
  }
});

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/errors/node.js
var ExecutionRevertedError, FeeCapTooHighError, FeeCapTooLowError, NonceTooHighError, NonceTooLowError, NonceMaxValueError, InsufficientFundsError, IntrinsicGasTooHighError, IntrinsicGasTooLowError, TransactionTypeNotSupportedError, TipAboveFeeCapError;
var init_node = __esm({
  "node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/errors/node.js"() {
    init_formatGwei();
    init_base();
    ExecutionRevertedError = class extends BaseError {
      constructor({ cause, message } = {}) {
        const reason = message?.replace("execution reverted: ", "")?.replace("execution reverted", "");
        super(`Execution reverted ${reason ? `with reason: ${reason}` : "for an unknown reason"}.`, {
          cause,
          name: "ExecutionRevertedError"
        });
      }
    };
    Object.defineProperty(ExecutionRevertedError, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 3
    });
    Object.defineProperty(ExecutionRevertedError, "nodeMessage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: /execution reverted|gas required exceeds allowance/
    });
    FeeCapTooHighError = class extends BaseError {
      constructor({ cause, maxFeePerGas } = {}) {
        super(`The fee cap (\`maxFeePerGas\`${maxFeePerGas ? ` = ${formatGwei(maxFeePerGas)} gwei` : ""}) cannot be higher than the maximum allowed value (2^256-1).`, {
          cause,
          name: "FeeCapTooHighError"
        });
      }
    };
    Object.defineProperty(FeeCapTooHighError, "nodeMessage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/
    });
    FeeCapTooLowError = class extends BaseError {
      constructor({ cause, maxFeePerGas } = {}) {
        super(`The fee cap (\`maxFeePerGas\`${maxFeePerGas ? ` = ${formatGwei(maxFeePerGas)}` : ""} gwei) cannot be lower than the block base fee.`, {
          cause,
          name: "FeeCapTooLowError"
        });
      }
    };
    Object.defineProperty(FeeCapTooLowError, "nodeMessage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/
    });
    NonceTooHighError = class extends BaseError {
      constructor({ cause, nonce } = {}) {
        super(`Nonce provided for the transaction ${nonce ? `(${nonce}) ` : ""}is higher than the next one expected.`, { cause, name: "NonceTooHighError" });
      }
    };
    Object.defineProperty(NonceTooHighError, "nodeMessage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: /nonce too high/
    });
    NonceTooLowError = class extends BaseError {
      constructor({ cause, nonce } = {}) {
        super([
          `Nonce provided for the transaction ${nonce ? `(${nonce}) ` : ""}is lower than the current nonce of the account.`,
          "Try increasing the nonce or find the latest nonce with `getTransactionCount`."
        ].join("\n"), { cause, name: "NonceTooLowError" });
      }
    };
    Object.defineProperty(NonceTooLowError, "nodeMessage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: /nonce too low|transaction already imported|already known/
    });
    NonceMaxValueError = class extends BaseError {
      constructor({ cause, nonce } = {}) {
        super(`Nonce provided for the transaction ${nonce ? `(${nonce}) ` : ""}exceeds the maximum allowed nonce.`, { cause, name: "NonceMaxValueError" });
      }
    };
    Object.defineProperty(NonceMaxValueError, "nodeMessage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: /nonce has max value/
    });
    InsufficientFundsError = class extends BaseError {
      constructor({ cause } = {}) {
        super([
          "The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."
        ].join("\n"), {
          cause,
          metaMessages: [
            "This error could arise when the account does not have enough funds to:",
            " - pay for the total gas fee,",
            " - pay for the value to send.",
            " ",
            "The cost of the transaction is calculated as `gas * gas fee + value`, where:",
            " - `gas` is the amount of gas needed for transaction to execute,",
            " - `gas fee` is the gas fee,",
            " - `value` is the amount of ether to send to the recipient."
          ],
          name: "InsufficientFundsError"
        });
      }
    };
    Object.defineProperty(InsufficientFundsError, "nodeMessage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: /insufficient funds|exceeds transaction sender account balance/
    });
    IntrinsicGasTooHighError = class extends BaseError {
      constructor({ cause, gas } = {}) {
        super(`The amount of gas ${gas ? `(${gas}) ` : ""}provided for the transaction exceeds the limit allowed for the block.`, {
          cause,
          name: "IntrinsicGasTooHighError"
        });
      }
    };
    Object.defineProperty(IntrinsicGasTooHighError, "nodeMessage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: /intrinsic gas too high|gas limit reached/
    });
    IntrinsicGasTooLowError = class extends BaseError {
      constructor({ cause, gas } = {}) {
        super(`The amount of gas ${gas ? `(${gas}) ` : ""}provided for the transaction is too low.`, {
          cause,
          name: "IntrinsicGasTooLowError"
        });
      }
    };
    Object.defineProperty(IntrinsicGasTooLowError, "nodeMessage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: /intrinsic gas too low/
    });
    TransactionTypeNotSupportedError = class extends BaseError {
      constructor({ cause }) {
        super("The transaction type is not supported for this chain.", {
          cause,
          name: "TransactionTypeNotSupportedError"
        });
      }
    };
    Object.defineProperty(TransactionTypeNotSupportedError, "nodeMessage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: /transaction type not valid/
    });
    TipAboveFeeCapError = class extends BaseError {
      constructor({ cause, maxPriorityFeePerGas, maxFeePerGas } = {}) {
        super([
          `The provided tip (\`maxPriorityFeePerGas\`${maxPriorityFeePerGas ? ` = ${formatGwei(maxPriorityFeePerGas)} gwei` : ""}) cannot be higher than the fee cap (\`maxFeePerGas\`${maxFeePerGas ? ` = ${formatGwei(maxFeePerGas)} gwei` : ""}).`
        ].join("\n"), {
          cause,
          name: "TipAboveFeeCapError"
        });
      }
    };
    Object.defineProperty(TipAboveFeeCapError, "nodeMessage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/
    });
  }
});

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/constants/number.js
var maxInt8, maxInt16, maxInt24, maxInt32, maxInt40, maxInt48, maxInt56, maxInt64, maxInt72, maxInt80, maxInt88, maxInt96, maxInt104, maxInt112, maxInt120, maxInt128, maxInt136, maxInt144, maxInt152, maxInt160, maxInt168, maxInt176, maxInt184, maxInt192, maxInt200, maxInt208, maxInt216, maxInt224, maxInt232, maxInt240, maxInt248, maxInt256, minInt8, minInt16, minInt24, minInt32, minInt40, minInt48, minInt56, minInt64, minInt72, minInt80, minInt88, minInt96, minInt104, minInt112, minInt120, minInt128, minInt136, minInt144, minInt152, minInt160, minInt168, minInt176, minInt184, minInt192, minInt200, minInt208, minInt216, minInt224, minInt232, minInt240, minInt248, minInt256, maxUint8, maxUint16, maxUint24, maxUint32, maxUint40, maxUint48, maxUint56, maxUint64, maxUint72, maxUint80, maxUint88, maxUint96, maxUint104, maxUint112, maxUint120, maxUint128, maxUint136, maxUint144, maxUint152, maxUint160, maxUint168, maxUint176, maxUint184, maxUint192, maxUint200, maxUint208, maxUint216, maxUint224, maxUint232, maxUint240, maxUint248, maxUint256;
var init_number = __esm({
  "node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/constants/number.js"() {
    maxInt8 = 2n ** (8n - 1n) - 1n;
    maxInt16 = 2n ** (16n - 1n) - 1n;
    maxInt24 = 2n ** (24n - 1n) - 1n;
    maxInt32 = 2n ** (32n - 1n) - 1n;
    maxInt40 = 2n ** (40n - 1n) - 1n;
    maxInt48 = 2n ** (48n - 1n) - 1n;
    maxInt56 = 2n ** (56n - 1n) - 1n;
    maxInt64 = 2n ** (64n - 1n) - 1n;
    maxInt72 = 2n ** (72n - 1n) - 1n;
    maxInt80 = 2n ** (80n - 1n) - 1n;
    maxInt88 = 2n ** (88n - 1n) - 1n;
    maxInt96 = 2n ** (96n - 1n) - 1n;
    maxInt104 = 2n ** (104n - 1n) - 1n;
    maxInt112 = 2n ** (112n - 1n) - 1n;
    maxInt120 = 2n ** (120n - 1n) - 1n;
    maxInt128 = 2n ** (128n - 1n) - 1n;
    maxInt136 = 2n ** (136n - 1n) - 1n;
    maxInt144 = 2n ** (144n - 1n) - 1n;
    maxInt152 = 2n ** (152n - 1n) - 1n;
    maxInt160 = 2n ** (160n - 1n) - 1n;
    maxInt168 = 2n ** (168n - 1n) - 1n;
    maxInt176 = 2n ** (176n - 1n) - 1n;
    maxInt184 = 2n ** (184n - 1n) - 1n;
    maxInt192 = 2n ** (192n - 1n) - 1n;
    maxInt200 = 2n ** (200n - 1n) - 1n;
    maxInt208 = 2n ** (208n - 1n) - 1n;
    maxInt216 = 2n ** (216n - 1n) - 1n;
    maxInt224 = 2n ** (224n - 1n) - 1n;
    maxInt232 = 2n ** (232n - 1n) - 1n;
    maxInt240 = 2n ** (240n - 1n) - 1n;
    maxInt248 = 2n ** (248n - 1n) - 1n;
    maxInt256 = 2n ** (256n - 1n) - 1n;
    minInt8 = -(2n ** (8n - 1n));
    minInt16 = -(2n ** (16n - 1n));
    minInt24 = -(2n ** (24n - 1n));
    minInt32 = -(2n ** (32n - 1n));
    minInt40 = -(2n ** (40n - 1n));
    minInt48 = -(2n ** (48n - 1n));
    minInt56 = -(2n ** (56n - 1n));
    minInt64 = -(2n ** (64n - 1n));
    minInt72 = -(2n ** (72n - 1n));
    minInt80 = -(2n ** (80n - 1n));
    minInt88 = -(2n ** (88n - 1n));
    minInt96 = -(2n ** (96n - 1n));
    minInt104 = -(2n ** (104n - 1n));
    minInt112 = -(2n ** (112n - 1n));
    minInt120 = -(2n ** (120n - 1n));
    minInt128 = -(2n ** (128n - 1n));
    minInt136 = -(2n ** (136n - 1n));
    minInt144 = -(2n ** (144n - 1n));
    minInt152 = -(2n ** (152n - 1n));
    minInt160 = -(2n ** (160n - 1n));
    minInt168 = -(2n ** (168n - 1n));
    minInt176 = -(2n ** (176n - 1n));
    minInt184 = -(2n ** (184n - 1n));
    minInt192 = -(2n ** (192n - 1n));
    minInt200 = -(2n ** (200n - 1n));
    minInt208 = -(2n ** (208n - 1n));
    minInt216 = -(2n ** (216n - 1n));
    minInt224 = -(2n ** (224n - 1n));
    minInt232 = -(2n ** (232n - 1n));
    minInt240 = -(2n ** (240n - 1n));
    minInt248 = -(2n ** (248n - 1n));
    minInt256 = -(2n ** (256n - 1n));
    maxUint8 = 2n ** 8n - 1n;
    maxUint16 = 2n ** 16n - 1n;
    maxUint24 = 2n ** 24n - 1n;
    maxUint32 = 2n ** 32n - 1n;
    maxUint40 = 2n ** 40n - 1n;
    maxUint48 = 2n ** 48n - 1n;
    maxUint56 = 2n ** 56n - 1n;
    maxUint64 = 2n ** 64n - 1n;
    maxUint72 = 2n ** 72n - 1n;
    maxUint80 = 2n ** 80n - 1n;
    maxUint88 = 2n ** 88n - 1n;
    maxUint96 = 2n ** 96n - 1n;
    maxUint104 = 2n ** 104n - 1n;
    maxUint112 = 2n ** 112n - 1n;
    maxUint120 = 2n ** 120n - 1n;
    maxUint128 = 2n ** 128n - 1n;
    maxUint136 = 2n ** 136n - 1n;
    maxUint144 = 2n ** 144n - 1n;
    maxUint152 = 2n ** 152n - 1n;
    maxUint160 = 2n ** 160n - 1n;
    maxUint168 = 2n ** 168n - 1n;
    maxUint176 = 2n ** 176n - 1n;
    maxUint184 = 2n ** 184n - 1n;
    maxUint192 = 2n ** 192n - 1n;
    maxUint200 = 2n ** 200n - 1n;
    maxUint208 = 2n ** 208n - 1n;
    maxUint216 = 2n ** 216n - 1n;
    maxUint224 = 2n ** 224n - 1n;
    maxUint232 = 2n ** 232n - 1n;
    maxUint240 = 2n ** 240n - 1n;
    maxUint248 = 2n ** 248n - 1n;
    maxUint256 = 2n ** 256n - 1n;
  }
});

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/errors/chain.js
var InvalidChainIdError;
var init_chain = __esm({
  "node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/errors/chain.js"() {
    init_base();
    InvalidChainIdError = class extends BaseError {
      constructor({ chainId }) {
        super(typeof chainId === "number" ? `Chain ID "${chainId}" is invalid.` : "Chain ID is invalid.", { name: "InvalidChainIdError" });
      }
    };
  }
});

// packages/skill/src/cli.ts
import { readFileSync as readFileSync2 } from "node:fs";
import { pathToFileURL } from "node:url";

// packages/skill/src/canonical.ts
import { createHash } from "node:crypto";

// packages/skill/src/errors.ts
var SkillError = class extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
    this.name = "SkillError";
  }
  code;
};
function commandFailure(error) {
  if (error instanceof SkillError) return error;
  return new SkillError("COMMAND_FAILED", "Caravan command failed");
}

// packages/skill/src/canonical.ts
function exactObject(value, required, optional = [], label = "input") {
  if (value === null || typeof value !== "object" || Array.isArray(value)) {
    throw new SkillError("INVALID_INPUT", `${label} must be an object`);
  }
  const object2 = value;
  const allowed = /* @__PURE__ */ new Set([...required, ...optional]);
  if (required.some((key) => !Object.prototype.hasOwnProperty.call(object2, key)) || Object.keys(object2).some((key) => !allowed.has(key))) {
    throw new SkillError("INVALID_INPUT", `${label} has an invalid shape`);
  }
  return object2;
}
function text(value, label, pattern, max = 1024) {
  if (typeof value !== "string" || value.length < 1 || value.length > max || value !== value.normalize("NFC") || pattern !== void 0 && !pattern.test(value)) {
    throw new SkillError("INVALID_INPUT", `${label} is invalid`);
  }
  return value;
}
function integer(value, label, minimum = 0) {
  if (!Number.isSafeInteger(value) || value < minimum) {
    throw new SkillError("INVALID_INPUT", `${label} is invalid`);
  }
  return value;
}
function canonicalJson(value) {
  if (Array.isArray(value)) return `[${value.map(canonicalJson).join(",")}]`;
  if (value !== null && typeof value === "object") {
    const object2 = value;
    return `{${Object.keys(object2).sort().map((key) => `${JSON.stringify(key)}:${canonicalJson(object2[key])}`).join(",")}}`;
  }
  const encoded = JSON.stringify(value);
  if (encoded === void 0) throw new SkillError("INVALID_INPUT", "input is not canonical JSON");
  return encoded;
}
function sha256(value) {
  return createHash("sha256").update(value).digest("hex");
}
function safeJsonParse(source, label) {
  try {
    return JSON.parse(source);
  } catch {
    throw new SkillError("INVALID_INPUT", `${label} must contain valid JSON`);
  }
}

// packages/skill/src/manifest.ts
import { readFileSync } from "node:fs";
var MANIFEST_SCHEMA = "caravan.skill-run-manifest.v1";
var MANIFEST_ENVIRONMENT = "task-local-phase-0";
var CAPABILITY = /^cap1_[0-9a-f]{64}$/u;
var PRIVATE_KEY = /^0x[0-9a-f]{64}$/u;
var IDENTITY = /^[A-Za-z0-9._:-]{1,128}$/u;
var PAYMENT = /^[A-Za-z0-9+/]+={0,2}$/u;
var EXPECTED_CONSUMERS = Object.freeze({
  apiBaseUrl: "sdk-http-transport",
  authorizationCapability: "sdk-http-authorization",
  privateKey: "local-eip712-and-capacity-signer",
  identityId: "local-identity-binding",
  payment: "reveal-payment-envelope",
  urls: "seller-onboarding-and-capacity-conformance",
  now: "proof-of-work-utc-day"
});
function localUrl(value, label, originOnly = false) {
  const raw = text(value, label, void 0, 2048);
  let parsed;
  try {
    parsed = new URL(raw);
  } catch {
    throw new SkillError("INVALID_MANIFEST", `${label} must be an absolute fixture URL`);
  }
  if (parsed.protocol !== "http:" || parsed.hostname !== "127.0.0.1" && parsed.hostname !== "localhost" || parsed.username !== "" || parsed.password !== "" || parsed.hash !== "" || originOnly && (parsed.pathname !== "/" || parsed.search !== "")) {
    throw new SkillError("INVALID_MANIFEST", `${label} must stay on the task-local loopback fixture`);
  }
  return originOnly ? parsed.origin : parsed.href;
}
function httpsOrigin(value, label) {
  const raw = text(value, label, void 0, 2048);
  let parsed;
  try {
    parsed = new URL(raw);
  } catch {
    throw new SkillError("INVALID_MANIFEST", `${label} must be an absolute HTTPS origin`);
  }
  if (parsed.protocol !== "https:" || parsed.username !== "" || parsed.password !== "" || parsed.port !== "" || parsed.pathname !== "/" || parsed.search !== "" || parsed.hash !== "") throw new SkillError("INVALID_MANIFEST", `${label} must be an absolute HTTPS origin`);
  return parsed.origin;
}
function parseManifest(value) {
  const item = exactObject(value, [
    "schema",
    "environment",
    "network",
    "synthetic",
    "apiBaseUrl",
    "authorizationCapability",
    "privateKey",
    "identityId",
    "payment",
    "urls",
    "now",
    "inputConsumers"
  ], [], "manifest");
  if (item.schema !== MANIFEST_SCHEMA || item.environment !== MANIFEST_ENVIRONMENT || item.network !== "base-sepolia" || item.synthetic !== true) throw new SkillError("INVALID_MANIFEST", "manifest environment is invalid");
  const payment = exactObject(item.payment, ["rail", "paymentSignature", "quote"], [], "manifest.payment");
  if (payment.rail !== "mock" && payment.rail !== "x402-testnet" && payment.rail !== "credits") {
    throw new SkillError("INVALID_MANIFEST", "manifest.payment.rail is invalid");
  }
  const urls = exactObject(item.urls, ["domainOrigin", "capacityEndpoint"], [], "manifest.urls");
  const quote = exactObject(payment.quote, [
    "schema",
    "target",
    "role",
    "amountUSD",
    "currency",
    "quotedAt",
    "expiresAt",
    "paymentEvidenceSha256"
  ], [], "manifest.payment.quote");
  const quoteTarget = exactObject(quote.target, ["kind", "id"], [], "manifest.payment.quote.target");
  if (quote.schema !== "caravan.fixture-reveal-quote.v1" || quoteTarget.kind !== "pool" && quoteTarget.kind !== "manifest" || quote.role !== "buyer" && quote.role !== "seller" || quote.currency !== "USD") throw new SkillError("INVALID_MANIFEST", "manifest.payment.quote contract is invalid");
  const consumers = exactObject(item.inputConsumers, Object.keys(EXPECTED_CONSUMERS), [], "manifest.inputConsumers");
  for (const [key, expected] of Object.entries(EXPECTED_CONSUMERS)) {
    if (consumers[key] !== expected) {
      throw new SkillError("INVALID_MANIFEST", `manifest input ${key} must name its sole consumer`);
    }
  }
  const now = text(item.now, "manifest.now", void 0, 64);
  if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/u.test(now) || new Date(now).toISOString() !== now) {
    throw new SkillError("INVALID_MANIFEST", "manifest.now must be a canonical UTC timestamp");
  }
  const paymentSignature = text(payment.paymentSignature, "manifest.payment.paymentSignature", PAYMENT, 24e3);
  let canonicalPaymentSignature = false;
  try {
    canonicalPaymentSignature = paymentSignature.length % 4 === 0 && btoa(atob(paymentSignature)) === paymentSignature;
  } catch {
    canonicalPaymentSignature = false;
  }
  if (!canonicalPaymentSignature) {
    throw new SkillError("INVALID_MANIFEST", "manifest.payment.paymentSignature must be canonical base64");
  }
  const quotedAt = text(quote.quotedAt, "manifest.payment.quote.quotedAt", void 0, 64);
  const expiresAt = text(quote.expiresAt, "manifest.payment.quote.expiresAt", void 0, 64);
  for (const [label, timestamp2] of [["quotedAt", quotedAt], ["expiresAt", expiresAt]]) {
    if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/u.test(timestamp2) || new Date(timestamp2).toISOString() !== timestamp2) {
      throw new SkillError("INVALID_MANIFEST", `manifest.payment.quote.${label} must be a canonical UTC timestamp`);
    }
  }
  if (Date.parse(quotedAt) > Date.parse(now) || Date.parse(now) > Date.parse(expiresAt)) {
    throw new SkillError("INVALID_MANIFEST", "manifest.payment.quote must be current at manifest.now");
  }
  const paymentEvidenceSha256 = text(
    quote.paymentEvidenceSha256,
    "manifest.payment.quote.paymentEvidenceSha256",
    /^[0-9a-f]{64}$/u,
    64
  );
  if (paymentEvidenceSha256 !== sha256(paymentSignature)) {
    throw new SkillError("INVALID_MANIFEST", "manifest.payment.quote is not bound to the payment evidence");
  }
  return Object.freeze({
    schema: MANIFEST_SCHEMA,
    environment: MANIFEST_ENVIRONMENT,
    network: "base-sepolia",
    synthetic: true,
    apiBaseUrl: localUrl(item.apiBaseUrl, "manifest.apiBaseUrl", true),
    authorizationCapability: text(item.authorizationCapability, "manifest.authorizationCapability", CAPABILITY, 69),
    privateKey: text(item.privateKey, "manifest.privateKey", PRIVATE_KEY, 66),
    identityId: text(item.identityId, "manifest.identityId", IDENTITY, 128),
    payment: Object.freeze({
      rail: payment.rail,
      paymentSignature,
      quote: Object.freeze({
        schema: "caravan.fixture-reveal-quote.v1",
        target: Object.freeze({
          kind: quoteTarget.kind,
          id: text(quoteTarget.id, "manifest.payment.quote.target.id", /^[A-Za-z0-9_-]{1,128}$/u, 128)
        }),
        role: quote.role,
        amountUSD: text(quote.amountUSD, "manifest.payment.quote.amountUSD", /^(0|[1-9][0-9]{0,12})\.[0-9]{2}$/u, 16),
        currency: "USD",
        quotedAt,
        expiresAt,
        paymentEvidenceSha256
      })
    }),
    urls: Object.freeze({
      domainOrigin: httpsOrigin(urls.domainOrigin, "manifest.urls.domainOrigin"),
      capacityEndpoint: localUrl(urls.capacityEndpoint, "manifest.urls.capacityEndpoint")
    }),
    now,
    inputConsumers: EXPECTED_CONSUMERS
  });
}
function loadManifest(path) {
  let bytes;
  try {
    bytes = readFileSync(path);
    if (bytes.byteLength > 65536) throw new SkillError("INVALID_MANIFEST", "manifest exceeds 65536 bytes");
  } catch (error) {
    if (error instanceof SkillError) throw error;
    throw new SkillError("MISSING_MANIFEST_INPUT", "manifest cannot be read");
  }
  let source;
  try {
    source = new TextDecoder("utf-8", { fatal: true }).decode(bytes);
  } catch {
    throw new SkillError("INVALID_MANIFEST", "manifest must use valid UTF-8");
  }
  try {
    return parseManifest(safeJsonParse(source, "manifest"));
  } catch (error) {
    if (error instanceof SkillError && error.code === "INVALID_INPUT") {
      throw new SkillError("INVALID_MANIFEST", error.message);
    }
    throw error;
  }
}
function manifestSecrets(manifest2) {
  return Object.freeze([
    manifest2.authorizationCapability,
    manifest2.privateKey,
    manifest2.payment.paymentSignature
  ]);
}

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/accounts/utils/publicKeyToAddress.js
init_getAddress();
init_keccak256();
function publicKeyToAddress(publicKey) {
  const address2 = keccak256(`0x${publicKey.substring(4)}`).substring(26);
  return checksumAddress(`0x${address2}`);
}

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/signature/recoverPublicKey.js
init_isHex();
init_size();
init_fromHex();
init_toHex();
async function recoverPublicKey({ hash, signature }) {
  const hashHex = isHex(hash) ? hash : toHex(hash);
  const { secp256k1: secp256k12 } = await Promise.resolve().then(() => (init_secp256k1(), secp256k1_exports));
  const signature_ = (() => {
    if (typeof signature === "object" && "r" in signature && "s" in signature) {
      const { r, s, v, yParity } = signature;
      const yParityOrV2 = Number(yParity ?? v);
      const recoveryBit2 = toRecoveryBit(yParityOrV2);
      return new secp256k12.Signature(hexToBigInt(r), hexToBigInt(s)).addRecoveryBit(recoveryBit2);
    }
    const signatureHex = isHex(signature) ? signature : toHex(signature);
    if (size(signatureHex) !== 65)
      throw new Error("invalid signature length");
    const yParityOrV = hexToNumber(`0x${signatureHex.slice(130)}`);
    const recoveryBit = toRecoveryBit(yParityOrV);
    return secp256k12.Signature.fromCompact(signatureHex.substring(2, 130)).addRecoveryBit(recoveryBit);
  })();
  const publicKey = signature_.recoverPublicKey(hashHex.substring(2)).toHex(false);
  return `0x${publicKey}`;
}
function toRecoveryBit(yParityOrV) {
  if (yParityOrV === 0 || yParityOrV === 1)
    return yParityOrV;
  if (yParityOrV === 27)
    return 0;
  if (yParityOrV === 28)
    return 1;
  throw new Error("Invalid yParityOrV value");
}

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/signature/recoverAddress.js
async function recoverAddress({ hash, signature }) {
  return publicKeyToAddress(await recoverPublicKey({ hash, signature }));
}

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/authorization/hashAuthorization.js
init_concat();
init_toBytes();
init_toHex();

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/encoding/toRlp.js
init_base();
init_cursor2();
init_toBytes();
init_toHex();
function toRlp(bytes, to = "hex") {
  const encodable = getEncodable(bytes);
  const cursor = createCursor(new Uint8Array(encodable.length));
  encodable.encode(cursor);
  if (to === "hex")
    return bytesToHex(cursor.bytes);
  return cursor.bytes;
}
function getEncodable(bytes) {
  if (Array.isArray(bytes))
    return getEncodableList(bytes.map((x) => getEncodable(x)));
  return getEncodableBytes(bytes);
}
function getEncodableList(list) {
  const bodyLength = list.reduce((acc, x) => acc + x.length, 0);
  const sizeOfBodyLength = getSizeOfLength(bodyLength);
  const length = (() => {
    if (bodyLength <= 55)
      return 1 + bodyLength;
    return 1 + sizeOfBodyLength + bodyLength;
  })();
  return {
    length,
    encode(cursor) {
      if (bodyLength <= 55) {
        cursor.pushByte(192 + bodyLength);
      } else {
        cursor.pushByte(192 + 55 + sizeOfBodyLength);
        if (sizeOfBodyLength === 1)
          cursor.pushUint8(bodyLength);
        else if (sizeOfBodyLength === 2)
          cursor.pushUint16(bodyLength);
        else if (sizeOfBodyLength === 3)
          cursor.pushUint24(bodyLength);
        else
          cursor.pushUint32(bodyLength);
      }
      for (const { encode } of list) {
        encode(cursor);
      }
    }
  };
}
function getEncodableBytes(bytesOrHex) {
  const bytes = typeof bytesOrHex === "string" ? hexToBytes(bytesOrHex) : bytesOrHex;
  const sizeOfBytesLength = getSizeOfLength(bytes.length);
  const length = (() => {
    if (bytes.length === 1 && bytes[0] < 128)
      return 1;
    if (bytes.length <= 55)
      return 1 + bytes.length;
    return 1 + sizeOfBytesLength + bytes.length;
  })();
  return {
    length,
    encode(cursor) {
      if (bytes.length === 1 && bytes[0] < 128) {
        cursor.pushBytes(bytes);
      } else if (bytes.length <= 55) {
        cursor.pushByte(128 + bytes.length);
        cursor.pushBytes(bytes);
      } else {
        cursor.pushByte(128 + 55 + sizeOfBytesLength);
        if (sizeOfBytesLength === 1)
          cursor.pushUint8(bytes.length);
        else if (sizeOfBytesLength === 2)
          cursor.pushUint16(bytes.length);
        else if (sizeOfBytesLength === 3)
          cursor.pushUint24(bytes.length);
        else
          cursor.pushUint32(bytes.length);
        cursor.pushBytes(bytes);
      }
    }
  };
}
function getSizeOfLength(length) {
  if (length < 2 ** 8)
    return 1;
  if (length < 2 ** 16)
    return 2;
  if (length < 2 ** 24)
    return 3;
  if (length < 2 ** 32)
    return 4;
  throw new BaseError("Length is too large.");
}

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/authorization/hashAuthorization.js
init_keccak256();
function hashAuthorization(parameters) {
  const { chainId, nonce, to } = parameters;
  const address2 = parameters.contractAddress ?? parameters.address;
  const hash = keccak256(concatHex([
    "0x05",
    toRlp([
      chainId ? numberToHex(chainId) : "0x",
      address2,
      nonce ? numberToHex(nonce) : "0x"
    ])
  ]));
  if (to === "bytes")
    return hexToBytes(hash);
  return hash;
}

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/blob/blobsToCommitments.js
init_toBytes();
init_toHex();
function blobsToCommitments(parameters) {
  const { kzg } = parameters;
  const to = parameters.to ?? (typeof parameters.blobs[0] === "string" ? "hex" : "bytes");
  const blobs = typeof parameters.blobs[0] === "string" ? parameters.blobs.map((x) => hexToBytes(x)) : parameters.blobs;
  const commitments = [];
  for (const blob of blobs)
    commitments.push(Uint8Array.from(kzg.blobToKzgCommitment(blob)));
  return to === "bytes" ? commitments : commitments.map((x) => bytesToHex(x));
}

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/blob/blobsToProofs.js
init_toBytes();
init_toHex();
function blobsToProofs(parameters) {
  const { kzg } = parameters;
  const to = parameters.to ?? (typeof parameters.blobs[0] === "string" ? "hex" : "bytes");
  const blobs = typeof parameters.blobs[0] === "string" ? parameters.blobs.map((x) => hexToBytes(x)) : parameters.blobs;
  const commitments = typeof parameters.commitments[0] === "string" ? parameters.commitments.map((x) => hexToBytes(x)) : parameters.commitments;
  const proofs = [];
  for (let i = 0; i < blobs.length; i++) {
    const blob = blobs[i];
    const commitment = commitments[i];
    proofs.push(Uint8Array.from(kzg.computeBlobKzgProof(blob, commitment)));
  }
  return to === "bytes" ? proofs : proofs.map((x) => bytesToHex(x));
}

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/blob/commitmentToVersionedHash.js
init_toHex();

// node_modules/.pnpm/@noble+hashes@1.8.0/node_modules/@noble/hashes/esm/sha256.js
init_sha2();
var sha2563 = sha2562;

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/hash/sha256.js
init_isHex();
init_toBytes();
init_toHex();
function sha2564(value, to_) {
  const to = to_ || "hex";
  const bytes = sha2563(isHex(value, { strict: false }) ? toBytes(value) : value);
  if (to === "bytes")
    return bytes;
  return toHex(bytes);
}

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/blob/commitmentToVersionedHash.js
function commitmentToVersionedHash(parameters) {
  const { commitment, version: version2 = 1 } = parameters;
  const to = parameters.to ?? (typeof commitment === "string" ? "hex" : "bytes");
  const versionedHash = sha2564(commitment, "bytes");
  versionedHash.set([version2], 0);
  return to === "bytes" ? versionedHash : bytesToHex(versionedHash);
}

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/blob/commitmentsToVersionedHashes.js
function commitmentsToVersionedHashes(parameters) {
  const { commitments, version: version2 } = parameters;
  const to = parameters.to ?? (typeof commitments[0] === "string" ? "hex" : "bytes");
  const hashes = [];
  for (const commitment of commitments) {
    hashes.push(commitmentToVersionedHash({
      commitment,
      to,
      version: version2
    }));
  }
  return hashes;
}

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/constants/blob.js
var blobsPerTransaction = 6;
var bytesPerFieldElement = 32;
var fieldElementsPerBlob = 4096;
var bytesPerBlob = bytesPerFieldElement * fieldElementsPerBlob;
var maxBytesPerTransaction = bytesPerBlob * blobsPerTransaction - // terminator byte (0x80).
1 - // zero byte (0x00) appended to each field element.
1 * fieldElementsPerBlob * blobsPerTransaction;

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/constants/kzg.js
var versionedHashVersionKzg = 1;

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/errors/blob.js
init_base();
var BlobSizeTooLargeError = class extends BaseError {
  constructor({ maxSize, size: size2 }) {
    super("Blob size is too large.", {
      metaMessages: [`Max: ${maxSize} bytes`, `Given: ${size2} bytes`],
      name: "BlobSizeTooLargeError"
    });
  }
};
var EmptyBlobError = class extends BaseError {
  constructor() {
    super("Blob data must not be empty.", { name: "EmptyBlobError" });
  }
};
var InvalidVersionedHashSizeError = class extends BaseError {
  constructor({ hash, size: size2 }) {
    super(`Versioned hash "${hash}" size is invalid.`, {
      metaMessages: ["Expected: 32", `Received: ${size2}`],
      name: "InvalidVersionedHashSizeError"
    });
  }
};
var InvalidVersionedHashVersionError = class extends BaseError {
  constructor({ hash, version: version2 }) {
    super(`Versioned hash "${hash}" version is invalid.`, {
      metaMessages: [
        `Expected: ${versionedHashVersionKzg}`,
        `Received: ${version2}`
      ],
      name: "InvalidVersionedHashVersionError"
    });
  }
};

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/blob/toBlobs.js
init_cursor2();
init_size();
init_toBytes();
init_toHex();
function toBlobs(parameters) {
  const to = parameters.to ?? (typeof parameters.data === "string" ? "hex" : "bytes");
  const data = typeof parameters.data === "string" ? hexToBytes(parameters.data) : parameters.data;
  const size_ = size(data);
  if (!size_)
    throw new EmptyBlobError();
  if (size_ > maxBytesPerTransaction)
    throw new BlobSizeTooLargeError({
      maxSize: maxBytesPerTransaction,
      size: size_
    });
  const blobs = [];
  let active = true;
  let position = 0;
  while (active) {
    const blob = createCursor(new Uint8Array(bytesPerBlob));
    let size2 = 0;
    while (size2 < fieldElementsPerBlob) {
      const bytes = data.slice(position, position + (bytesPerFieldElement - 1));
      blob.pushByte(0);
      blob.pushBytes(bytes);
      if (bytes.length < 31) {
        blob.pushByte(128);
        active = false;
        break;
      }
      size2++;
      position += 31;
    }
    blobs.push(blob);
  }
  return to === "bytes" ? blobs.map((x) => x.bytes) : blobs.map((x) => bytesToHex(x.bytes));
}

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/blob/toBlobSidecars.js
function toBlobSidecars(parameters) {
  const { data, kzg, to } = parameters;
  const blobs = parameters.blobs ?? toBlobs({ data, to });
  const commitments = parameters.commitments ?? blobsToCommitments({ blobs, kzg, to });
  const proofs = parameters.proofs ?? blobsToProofs({ blobs, commitments, kzg, to });
  const sidecars = [];
  for (let i = 0; i < blobs.length; i++)
    sidecars.push({
      blob: blobs[i],
      commitment: commitments[i],
      proof: proofs[i]
    });
  return sidecars;
}

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/transaction/getTransactionType.js
init_transaction();
function getTransactionType(transaction) {
  if (transaction.type)
    return transaction.type;
  if (typeof transaction.authorizationList !== "undefined")
    return "eip7702";
  if (typeof transaction.blobs !== "undefined" || typeof transaction.blobVersionedHashes !== "undefined" || typeof transaction.maxFeePerBlobGas !== "undefined" || typeof transaction.sidecars !== "undefined")
    return "eip4844";
  if (typeof transaction.maxFeePerGas !== "undefined" || typeof transaction.maxPriorityFeePerGas !== "undefined") {
    return "eip1559";
  }
  if (typeof transaction.gasPrice !== "undefined") {
    if (typeof transaction.accessList !== "undefined")
      return "eip2930";
    return "legacy";
  }
  throw new InvalidSerializableTransactionError({ transaction });
}

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/authorization/serializeAuthorizationList.js
init_toHex();

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/transaction/serializeTransaction.js
init_transaction();
init_concat();
init_trim();
init_toHex();

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/transaction/assertTransaction.js
init_number();
init_address();
init_base();
init_chain();
init_node();
init_isAddress();
init_size();
init_slice();
init_fromHex();
function assertTransactionEIP7702(transaction) {
  const { authorizationList } = transaction;
  if (authorizationList) {
    for (const authorization of authorizationList) {
      const { chainId } = authorization;
      const address2 = authorization.address;
      if (!isAddress(address2))
        throw new InvalidAddressError({ address: address2 });
      if (chainId < 0)
        throw new InvalidChainIdError({ chainId });
    }
  }
  assertTransactionEIP1559(transaction);
}
function assertTransactionEIP4844(transaction) {
  const { blobVersionedHashes } = transaction;
  if (blobVersionedHashes) {
    if (blobVersionedHashes.length === 0)
      throw new EmptyBlobError();
    for (const hash of blobVersionedHashes) {
      const size_ = size(hash);
      const version2 = hexToNumber(slice(hash, 0, 1));
      if (size_ !== 32)
        throw new InvalidVersionedHashSizeError({ hash, size: size_ });
      if (version2 !== versionedHashVersionKzg)
        throw new InvalidVersionedHashVersionError({
          hash,
          version: version2
        });
    }
  }
  assertTransactionEIP1559(transaction);
}
function assertTransactionEIP1559(transaction) {
  const { chainId, maxPriorityFeePerGas, maxFeePerGas, to } = transaction;
  if (chainId <= 0)
    throw new InvalidChainIdError({ chainId });
  if (to && !isAddress(to))
    throw new InvalidAddressError({ address: to });
  if (maxFeePerGas && maxFeePerGas > maxUint256)
    throw new FeeCapTooHighError({ maxFeePerGas });
  if (maxPriorityFeePerGas && maxFeePerGas && maxPriorityFeePerGas > maxFeePerGas)
    throw new TipAboveFeeCapError({ maxFeePerGas, maxPriorityFeePerGas });
}
function assertTransactionEIP2930(transaction) {
  const { chainId, maxPriorityFeePerGas, gasPrice, maxFeePerGas, to } = transaction;
  if (chainId <= 0)
    throw new InvalidChainIdError({ chainId });
  if (to && !isAddress(to))
    throw new InvalidAddressError({ address: to });
  if (maxPriorityFeePerGas || maxFeePerGas)
    throw new BaseError("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");
  if (gasPrice && gasPrice > maxUint256)
    throw new FeeCapTooHighError({ maxFeePerGas: gasPrice });
}
function assertTransactionLegacy(transaction) {
  const { chainId, maxPriorityFeePerGas, gasPrice, maxFeePerGas, to } = transaction;
  if (to && !isAddress(to))
    throw new InvalidAddressError({ address: to });
  if (typeof chainId !== "undefined" && chainId <= 0)
    throw new InvalidChainIdError({ chainId });
  if (maxPriorityFeePerGas || maxFeePerGas)
    throw new BaseError("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");
  if (gasPrice && gasPrice > maxUint256)
    throw new FeeCapTooHighError({ maxFeePerGas: gasPrice });
}

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/transaction/serializeAccessList.js
init_address();
init_transaction();
init_isAddress();
function serializeAccessList(accessList) {
  if (!accessList || accessList.length === 0)
    return [];
  const serializedAccessList = [];
  for (let i = 0; i < accessList.length; i++) {
    const { address: address2, storageKeys } = accessList[i];
    for (let j = 0; j < storageKeys.length; j++) {
      if (storageKeys[j].length - 2 !== 64) {
        throw new InvalidStorageKeySizeError({ storageKey: storageKeys[j] });
      }
    }
    if (!isAddress(address2, { strict: false })) {
      throw new InvalidAddressError({ address: address2 });
    }
    serializedAccessList.push([address2, storageKeys]);
  }
  return serializedAccessList;
}

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/transaction/serializeTransaction.js
function serializeTransaction(transaction, signature) {
  const type = getTransactionType(transaction);
  if (type === "eip1559")
    return serializeTransactionEIP1559(transaction, signature);
  if (type === "eip2930")
    return serializeTransactionEIP2930(transaction, signature);
  if (type === "eip4844")
    return serializeTransactionEIP4844(transaction, signature);
  if (type === "eip7702")
    return serializeTransactionEIP7702(transaction, signature);
  return serializeTransactionLegacy(transaction, signature);
}
function serializeTransactionEIP7702(transaction, signature) {
  const { authorizationList, chainId, gas, nonce, to, value, maxFeePerGas, maxPriorityFeePerGas, accessList, data } = transaction;
  assertTransactionEIP7702(transaction);
  const serializedAccessList = serializeAccessList(accessList);
  const serializedAuthorizationList = serializeAuthorizationList(authorizationList);
  return concatHex([
    "0x04",
    toRlp([
      numberToHex(chainId),
      nonce ? numberToHex(nonce) : "0x",
      maxPriorityFeePerGas ? numberToHex(maxPriorityFeePerGas) : "0x",
      maxFeePerGas ? numberToHex(maxFeePerGas) : "0x",
      gas ? numberToHex(gas) : "0x",
      to ?? "0x",
      value ? numberToHex(value) : "0x",
      data ?? "0x",
      serializedAccessList,
      serializedAuthorizationList,
      ...toYParitySignatureArray(transaction, signature)
    ])
  ]);
}
function serializeTransactionEIP4844(transaction, signature) {
  const { chainId, gas, nonce, to, value, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, accessList, data } = transaction;
  assertTransactionEIP4844(transaction);
  let blobVersionedHashes = transaction.blobVersionedHashes;
  let sidecars = transaction.sidecars;
  if (transaction.blobs && (typeof blobVersionedHashes === "undefined" || typeof sidecars === "undefined")) {
    const blobs2 = typeof transaction.blobs[0] === "string" ? transaction.blobs : transaction.blobs.map((x) => bytesToHex(x));
    const kzg = transaction.kzg;
    const commitments2 = blobsToCommitments({
      blobs: blobs2,
      kzg
    });
    if (typeof blobVersionedHashes === "undefined")
      blobVersionedHashes = commitmentsToVersionedHashes({
        commitments: commitments2
      });
    if (typeof sidecars === "undefined") {
      const proofs2 = blobsToProofs({ blobs: blobs2, commitments: commitments2, kzg });
      sidecars = toBlobSidecars({ blobs: blobs2, commitments: commitments2, proofs: proofs2 });
    }
  }
  const serializedAccessList = serializeAccessList(accessList);
  const serializedTransaction = [
    numberToHex(chainId),
    nonce ? numberToHex(nonce) : "0x",
    maxPriorityFeePerGas ? numberToHex(maxPriorityFeePerGas) : "0x",
    maxFeePerGas ? numberToHex(maxFeePerGas) : "0x",
    gas ? numberToHex(gas) : "0x",
    to ?? "0x",
    value ? numberToHex(value) : "0x",
    data ?? "0x",
    serializedAccessList,
    maxFeePerBlobGas ? numberToHex(maxFeePerBlobGas) : "0x",
    blobVersionedHashes ?? [],
    ...toYParitySignatureArray(transaction, signature)
  ];
  const blobs = [];
  const commitments = [];
  const proofs = [];
  if (sidecars)
    for (let i = 0; i < sidecars.length; i++) {
      const { blob, commitment, proof } = sidecars[i];
      blobs.push(blob);
      commitments.push(commitment);
      proofs.push(proof);
    }
  return concatHex([
    "0x03",
    sidecars ? (
      // If sidecars are enabled, envelope turns into a "wrapper":
      toRlp([serializedTransaction, blobs, commitments, proofs])
    ) : (
      // If sidecars are disabled, standard envelope is used:
      toRlp(serializedTransaction)
    )
  ]);
}
function serializeTransactionEIP1559(transaction, signature) {
  const { chainId, gas, nonce, to, value, maxFeePerGas, maxPriorityFeePerGas, accessList, data } = transaction;
  assertTransactionEIP1559(transaction);
  const serializedAccessList = serializeAccessList(accessList);
  const serializedTransaction = [
    numberToHex(chainId),
    nonce ? numberToHex(nonce) : "0x",
    maxPriorityFeePerGas ? numberToHex(maxPriorityFeePerGas) : "0x",
    maxFeePerGas ? numberToHex(maxFeePerGas) : "0x",
    gas ? numberToHex(gas) : "0x",
    to ?? "0x",
    value ? numberToHex(value) : "0x",
    data ?? "0x",
    serializedAccessList,
    ...toYParitySignatureArray(transaction, signature)
  ];
  return concatHex([
    "0x02",
    toRlp(serializedTransaction)
  ]);
}
function serializeTransactionEIP2930(transaction, signature) {
  const { chainId, gas, data, nonce, to, value, accessList, gasPrice } = transaction;
  assertTransactionEIP2930(transaction);
  const serializedAccessList = serializeAccessList(accessList);
  const serializedTransaction = [
    numberToHex(chainId),
    nonce ? numberToHex(nonce) : "0x",
    gasPrice ? numberToHex(gasPrice) : "0x",
    gas ? numberToHex(gas) : "0x",
    to ?? "0x",
    value ? numberToHex(value) : "0x",
    data ?? "0x",
    serializedAccessList,
    ...toYParitySignatureArray(transaction, signature)
  ];
  return concatHex([
    "0x01",
    toRlp(serializedTransaction)
  ]);
}
function serializeTransactionLegacy(transaction, signature) {
  const { chainId = 0, gas, data, nonce, to, value, gasPrice } = transaction;
  assertTransactionLegacy(transaction);
  let serializedTransaction = [
    nonce ? numberToHex(nonce) : "0x",
    gasPrice ? numberToHex(gasPrice) : "0x",
    gas ? numberToHex(gas) : "0x",
    to ?? "0x",
    value ? numberToHex(value) : "0x",
    data ?? "0x"
  ];
  if (signature) {
    const v = (() => {
      if (signature.v >= 35n) {
        const inferredChainId = (signature.v - 35n) / 2n;
        if (inferredChainId > 0)
          return signature.v;
        return 27n + (signature.v === 35n ? 0n : 1n);
      }
      if (chainId > 0)
        return BigInt(chainId * 2) + BigInt(35n + signature.v - 27n);
      const v2 = 27n + (signature.v === 27n ? 0n : 1n);
      if (signature.v !== v2)
        throw new InvalidLegacyVError({ v: signature.v });
      return v2;
    })();
    const r = trim(signature.r);
    const s = trim(signature.s);
    serializedTransaction = [
      ...serializedTransaction,
      numberToHex(v),
      r === "0x00" ? "0x" : r,
      s === "0x00" ? "0x" : s
    ];
  } else if (chainId > 0) {
    serializedTransaction = [
      ...serializedTransaction,
      numberToHex(chainId),
      "0x",
      "0x"
    ];
  }
  return toRlp(serializedTransaction);
}
function toYParitySignatureArray(transaction, signature_) {
  const signature = signature_ ?? transaction;
  const { v, yParity } = signature;
  if (typeof signature.r === "undefined")
    return [];
  if (typeof signature.s === "undefined")
    return [];
  if (typeof v === "undefined" && typeof yParity === "undefined")
    return [];
  const r = trim(signature.r);
  const s = trim(signature.s);
  const yParity_ = (() => {
    if (typeof yParity === "number")
      return yParity ? numberToHex(1) : "0x";
    if (v === 0n)
      return "0x";
    if (v === 1n)
      return numberToHex(1);
    return v === 27n ? "0x" : numberToHex(1);
  })();
  return [yParity_, r === "0x00" ? "0x" : r, s === "0x00" ? "0x" : s];
}

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/authorization/serializeAuthorizationList.js
function serializeAuthorizationList(authorizationList) {
  if (!authorizationList || authorizationList.length === 0)
    return [];
  const serializedAuthorizationList = [];
  for (const authorization of authorizationList) {
    const { chainId, nonce, ...signature } = authorization;
    const contractAddress = authorization.address;
    serializedAuthorizationList.push([
      chainId ? toHex(chainId) : "0x",
      contractAddress,
      nonce ? toHex(nonce) : "0x",
      ...toYParitySignatureArray({}, signature)
    ]);
  }
  return serializedAuthorizationList;
}

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/signature/hashMessage.js
init_keccak256();

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/constants/strings.js
var presignMessagePrefix = "Ethereum Signed Message:\n";

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/signature/toPrefixedMessage.js
init_concat();
init_size();
init_toHex();
function toPrefixedMessage(message_) {
  const message = (() => {
    if (typeof message_ === "string")
      return stringToHex(message_);
    if (typeof message_.raw === "string")
      return message_.raw;
    return bytesToHex(message_.raw);
  })();
  const prefix = stringToHex(`${presignMessagePrefix}${size(message)}`);
  return concat([prefix, message]);
}

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/signature/hashMessage.js
function hashMessage(message, to_) {
  return keccak256(toPrefixedMessage(message), to_);
}

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/signature/hashTypedData.js
init_encodeAbiParameters();
init_concat();
init_toHex();
init_keccak256();

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/typedData.js
init_abi();
init_address();

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/errors/typedData.js
init_stringify();
init_base();
var InvalidDomainError = class extends BaseError {
  constructor({ domain }) {
    super(`Invalid domain "${stringify(domain)}".`, {
      metaMessages: ["Must be a valid EIP-712 domain."]
    });
  }
};
var InvalidPrimaryTypeError = class extends BaseError {
  constructor({ primaryType, types }) {
    super(`Invalid primary type \`${primaryType}\` must be one of \`${JSON.stringify(Object.keys(types))}\`.`, {
      docsPath: "/api/glossary/Errors#typeddatainvalidprimarytypeerror",
      metaMessages: ["Check that the primary type is a key in `types`."]
    });
  }
};
var InvalidStructTypeError = class extends BaseError {
  constructor({ type }) {
    super(`Struct type "${type}" is invalid.`, {
      metaMessages: ["Struct type must not be a Solidity type."],
      name: "InvalidStructTypeError"
    });
  }
};

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/typedData.js
init_isAddress();
init_size();
init_toHex();
init_regex();
function validateTypedData(parameters) {
  const { domain, message, primaryType, types } = parameters;
  const validateData = (struct, data) => {
    for (const param of struct) {
      const { name, type } = param;
      const value = data[name];
      const integerMatch = type.match(integerRegex);
      if (integerMatch && (typeof value === "number" || typeof value === "bigint")) {
        const [_type, base, size_] = integerMatch;
        numberToHex(value, {
          signed: base === "int",
          size: Number.parseInt(size_, 10) / 8
        });
      }
      if (type === "address" && typeof value === "string" && !isAddress(value))
        throw new InvalidAddressError({ address: value });
      const bytesMatch = type.match(bytesRegex);
      if (bytesMatch) {
        const [_type, size_] = bytesMatch;
        if (size_ && size(value) !== Number.parseInt(size_, 10))
          throw new BytesSizeMismatchError({
            expectedSize: Number.parseInt(size_, 10),
            givenSize: size(value)
          });
      }
      const struct2 = types[type];
      if (struct2) {
        validateReference(type);
        validateData(struct2, value);
      }
    }
  };
  if (types.EIP712Domain && domain) {
    if (typeof domain !== "object")
      throw new InvalidDomainError({ domain });
    validateData(types.EIP712Domain, domain);
  }
  if (primaryType !== "EIP712Domain") {
    if (types[primaryType])
      validateData(types[primaryType], message);
    else
      throw new InvalidPrimaryTypeError({ primaryType, types });
  }
}
function getTypesForEIP712Domain({ domain }) {
  return [
    typeof domain?.name === "string" && { name: "name", type: "string" },
    domain?.version && { name: "version", type: "string" },
    (typeof domain?.chainId === "number" || typeof domain?.chainId === "bigint") && {
      name: "chainId",
      type: "uint256"
    },
    domain?.verifyingContract && {
      name: "verifyingContract",
      type: "address"
    },
    domain?.salt && { name: "salt", type: "bytes32" }
  ].filter(Boolean);
}
function validateReference(type) {
  if (type === "address" || type === "bool" || type === "string" || type.startsWith("bytes") || type.startsWith("uint") || type.startsWith("int"))
    throw new InvalidStructTypeError({ type });
}

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/signature/hashTypedData.js
function hashTypedData(parameters) {
  const { domain = {}, message, primaryType } = parameters;
  const types = {
    EIP712Domain: getTypesForEIP712Domain({ domain }),
    ...parameters.types
  };
  validateTypedData({
    domain,
    message,
    primaryType,
    types
  });
  const parts = ["0x1901"];
  if (domain)
    parts.push(hashDomain({
      domain,
      types
    }));
  if (primaryType !== "EIP712Domain")
    parts.push(hashStruct({
      data: message,
      primaryType,
      types
    }));
  return keccak256(concat(parts));
}
function hashDomain({ domain, types }) {
  return hashStruct({
    data: domain,
    primaryType: "EIP712Domain",
    types
  });
}
function hashStruct({ data, primaryType, types }) {
  const encoded = encodeData({
    data,
    primaryType,
    types
  });
  return keccak256(encoded);
}
function encodeData({ data, primaryType, types }) {
  const encodedTypes = [{ type: "bytes32" }];
  const encodedValues = [hashType({ primaryType, types })];
  for (const field of types[primaryType]) {
    const [type, value] = encodeField({
      types,
      name: field.name,
      type: field.type,
      value: data[field.name]
    });
    encodedTypes.push(type);
    encodedValues.push(value);
  }
  return encodeAbiParameters(encodedTypes, encodedValues);
}
function hashType({ primaryType, types }) {
  const encodedHashType = toHex(encodeType({ primaryType, types }));
  return keccak256(encodedHashType);
}
function encodeType({ primaryType, types }) {
  let result = "";
  const unsortedDeps = findTypeDependencies({ primaryType, types });
  unsortedDeps.delete(primaryType);
  const deps = [primaryType, ...Array.from(unsortedDeps).sort()];
  for (const type of deps) {
    result += `${type}(${types[type].map(({ name, type: t }) => `${t} ${name}`).join(",")})`;
  }
  return result;
}
function findTypeDependencies({ primaryType: primaryType_, types }, results = /* @__PURE__ */ new Set()) {
  const match = primaryType_.match(/^\w*/u);
  const primaryType = match?.[0];
  if (results.has(primaryType) || types[primaryType] === void 0) {
    return results;
  }
  results.add(primaryType);
  for (const field of types[primaryType]) {
    findTypeDependencies({ primaryType: field.type, types }, results);
  }
  return results;
}
function encodeField({ types, name, type, value }) {
  if (types[type] !== void 0) {
    return [
      { type: "bytes32" },
      keccak256(encodeData({ data: value, primaryType: type, types }))
    ];
  }
  if (type === "bytes")
    return [{ type: "bytes32" }, keccak256(value)];
  if (type === "string")
    return [{ type: "bytes32" }, keccak256(toHex(value))];
  if (type.lastIndexOf("]") === type.length - 1) {
    const parsedType = type.slice(0, type.lastIndexOf("["));
    const typeValuePairs = value.map((item) => encodeField({
      name,
      type: parsedType,
      types,
      value: item
    }));
    return [
      { type: "bytes32" },
      keccak256(encodeAbiParameters(typeValuePairs.map(([t]) => t), typeValuePairs.map(([, v]) => v)))
    ];
  }
  return [{ type }, value];
}

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/signature/recoverMessageAddress.js
async function recoverMessageAddress({ message, signature }) {
  return recoverAddress({ hash: hashMessage(message), signature });
}

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/signature/recoverTypedDataAddress.js
async function recoverTypedDataAddress(parameters) {
  const { domain, message, primaryType, signature, types } = parameters;
  return recoverAddress({
    hash: hashTypedData({
      domain,
      message,
      primaryType,
      types
    }),
    signature
  });
}

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/utils/signature/serializeSignature.js
init_secp256k1();
init_fromHex();
init_toBytes();
function serializeSignature({ r, s, to = "hex", v, yParity }) {
  const yParity_ = (() => {
    if (yParity === 0 || yParity === 1)
      return yParity;
    if (v && (v === 27n || v === 28n || v >= 35n))
      return v % 2n === 0n ? 1 : 0;
    throw new Error("Invalid `v` or `yParity` value");
  })();
  const signature = `0x${new secp256k1.Signature(hexToBigInt(r), hexToBigInt(s)).toCompactHex()}${yParity_ === 0 ? "1b" : "1c"}`;
  if (to === "hex")
    return signature;
  return hexToBytes(signature);
}

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/index.js
init_number();
init_toHex();
init_keccak256();

// node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/external.js
var external_exports = {};
__export(external_exports, {
  BRAND: () => BRAND,
  DIRTY: () => DIRTY,
  EMPTY_PATH: () => EMPTY_PATH,
  INVALID: () => INVALID,
  NEVER: () => NEVER,
  OK: () => OK,
  ParseStatus: () => ParseStatus,
  Schema: () => ZodType,
  ZodAny: () => ZodAny,
  ZodArray: () => ZodArray,
  ZodBigInt: () => ZodBigInt,
  ZodBoolean: () => ZodBoolean,
  ZodBranded: () => ZodBranded,
  ZodCatch: () => ZodCatch,
  ZodDate: () => ZodDate,
  ZodDefault: () => ZodDefault,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodEffects: () => ZodEffects,
  ZodEnum: () => ZodEnum,
  ZodError: () => ZodError,
  ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
  ZodFunction: () => ZodFunction,
  ZodIntersection: () => ZodIntersection,
  ZodIssueCode: () => ZodIssueCode,
  ZodLazy: () => ZodLazy,
  ZodLiteral: () => ZodLiteral,
  ZodMap: () => ZodMap,
  ZodNaN: () => ZodNaN,
  ZodNativeEnum: () => ZodNativeEnum,
  ZodNever: () => ZodNever,
  ZodNull: () => ZodNull,
  ZodNullable: () => ZodNullable,
  ZodNumber: () => ZodNumber,
  ZodObject: () => ZodObject,
  ZodOptional: () => ZodOptional,
  ZodParsedType: () => ZodParsedType,
  ZodPipeline: () => ZodPipeline,
  ZodPromise: () => ZodPromise,
  ZodReadonly: () => ZodReadonly,
  ZodRecord: () => ZodRecord,
  ZodSchema: () => ZodType,
  ZodSet: () => ZodSet,
  ZodString: () => ZodString,
  ZodSymbol: () => ZodSymbol,
  ZodTransformer: () => ZodEffects,
  ZodTuple: () => ZodTuple,
  ZodType: () => ZodType,
  ZodUndefined: () => ZodUndefined,
  ZodUnion: () => ZodUnion,
  ZodUnknown: () => ZodUnknown,
  ZodVoid: () => ZodVoid,
  addIssueToContext: () => addIssueToContext,
  any: () => anyType,
  array: () => arrayType,
  bigint: () => bigIntType,
  boolean: () => booleanType,
  coerce: () => coerce,
  custom: () => custom,
  date: () => dateType,
  datetimeRegex: () => datetimeRegex,
  defaultErrorMap: () => en_default,
  discriminatedUnion: () => discriminatedUnionType,
  effect: () => effectsType,
  enum: () => enumType,
  function: () => functionType,
  getErrorMap: () => getErrorMap,
  getParsedType: () => getParsedType,
  instanceof: () => instanceOfType,
  intersection: () => intersectionType,
  isAborted: () => isAborted,
  isAsync: () => isAsync,
  isDirty: () => isDirty,
  isValid: () => isValid,
  late: () => late,
  lazy: () => lazyType,
  literal: () => literalType,
  makeIssue: () => makeIssue,
  map: () => mapType,
  nan: () => nanType,
  nativeEnum: () => nativeEnumType,
  never: () => neverType,
  null: () => nullType,
  nullable: () => nullableType,
  number: () => numberType,
  object: () => objectType,
  objectUtil: () => objectUtil,
  oboolean: () => oboolean,
  onumber: () => onumber,
  optional: () => optionalType,
  ostring: () => ostring,
  pipeline: () => pipelineType,
  preprocess: () => preprocessType,
  promise: () => promiseType,
  quotelessJson: () => quotelessJson,
  record: () => recordType,
  set: () => setType,
  setErrorMap: () => setErrorMap,
  strictObject: () => strictObjectType,
  string: () => stringType,
  symbol: () => symbolType,
  transformer: () => effectsType,
  tuple: () => tupleType,
  undefined: () => undefinedType,
  union: () => unionType,
  unknown: () => unknownType,
  util: () => util,
  void: () => voidType
});

// node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/util.js
var util;
(function(util2) {
  util2.assertEqual = (_) => {
  };
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object2) => {
    const keys = [];
    for (const key in object2) {
      if (Object.prototype.hasOwnProperty.call(object2, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
      // second overwrites first
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};

// node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/ZodError.js
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = (obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};
var ZodError = class _ZodError extends Error {
  get errors() {
    return this.issues;
  }
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof _ZodError)) {
      throw new Error(`Not a ZodError: ${value}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        const firstEl = sub.path[0];
        fieldErrors[firstEl] = fieldErrors[firstEl] || [];
        fieldErrors[firstEl].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};

// node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/locales/en.js
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "bigint")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
var en_default = errorMap;

// node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/errors.js
var overrideErrorMap = en_default;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}

// node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/parseUtil.js
var makeIssue = (params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  if (issueData.message !== void 0) {
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message
    };
  }
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: errorMessage
  };
};
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap();
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      // contextual error map is first priority
      ctx.schemaErrorMap,
      // then schema-bound map if available
      overrideMap,
      // then global override map
      overrideMap === en_default ? void 0 : en_default
      // then global default map
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}
var ParseStatus = class _ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      if (s.status === "dirty")
        status.dirty();
      arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      const key = await pair.key;
      const value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return _ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
};
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = (value) => ({ status: "dirty", value });
var OK = (value) => ({ status: "valid", value });
var isAborted = (x) => x.status === "aborted";
var isDirty = (x) => x.status === "dirty";
var isValid = (x) => x.status === "valid";
var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;

// node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/errorUtil.js
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message?.message;
})(errorUtil || (errorUtil = {}));

// node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/types.js
var ParseInputLazyPath = class {
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (Array.isArray(this._key)) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
};
var handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    const { message } = params;
    if (iss.code === "invalid_enum_value") {
      return { message: message ?? ctx.defaultError };
    }
    if (typeof ctx.data === "undefined") {
      return { message: message ?? required_error ?? ctx.defaultError };
    }
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    return { message: message ?? invalid_type_error ?? ctx.defaultError };
  };
  return { errorMap: customMap, description };
}
var ZodType = class {
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    const ctx = {
      common: {
        issues: [],
        async: params?.async ?? false,
        contextualErrorMap: params?.errorMap
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  "~validate"(data) {
    const ctx = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    if (!this["~standard"].async) {
      try {
        const result = this._parseSync({ data, path: [], parent: ctx });
        return isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        };
      } catch (err) {
        if (err?.message?.toLowerCase()?.includes("encountered")) {
          this["~standard"].async = true;
        }
        ctx.common = {
          issues: [],
          async: true
        };
      }
    }
    return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
      value: result.value
    } : {
      issues: ctx.common.issues
    });
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params?.errorMap,
        async: true
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (data) => this["~validate"](data)
    };
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[0-9a-z]+$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var nanoidRegex = /^[a-z0-9_-]{21}$/i;
var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
var dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
  let secondsRegexSource = `[0-5]\\d`;
  if (args.precision) {
    secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
  }
  const secondsQuantifier = args.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset)
    opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version2) {
  if ((version2 === "v4" || !version2) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version2 === "v6" || !version2) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt))
    return false;
  try {
    const [header] = jwt.split(".");
    if (!header)
      return false;
    const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
    const decoded = JSON.parse(atob(base64));
    if (typeof decoded !== "object" || decoded === null)
      return false;
    if ("typ" in decoded && decoded?.typ !== "JWT")
      return false;
    if (!decoded.alg)
      return false;
    if (alg && decoded.alg !== alg)
      return false;
    return true;
  } catch {
    return false;
  }
}
function isValidCidr(ip, version2) {
  if ((version2 === "v4" || !version2) && ipv4CidrRegex.test(ip)) {
    return true;
  }
  if ((version2 === "v6" || !version2) && ipv6CidrRegex.test(ip)) {
    return true;
  }
  return false;
}
var ZodString = class _ZodString extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "nanoid") {
        if (!nanoidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "nanoid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "date") {
        const regex = dateRegex;
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "date",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "time") {
        const regex = timeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "time",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "duration") {
        if (!durationRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "duration",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "jwt") {
        if (!isValidJWT(input.data, check.alg)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "jwt",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cidr") {
        if (!isValidCidr(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cidr",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64") {
        if (!base64Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64url") {
        if (!base64urlRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  nanoid(message) {
    return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  base64(message) {
    return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
  }
  base64url(message) {
    return this._addCheck({
      kind: "base64url",
      ...errorUtil.errToObj(message)
    });
  }
  jwt(options) {
    return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  cidr(options) {
    return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      offset: options?.offset ?? false,
      local: options?.local ?? false,
      ...errorUtil.errToObj(options?.message)
    });
  }
  date(message) {
    return this._addCheck({ kind: "date", message });
  }
  time(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: options
      });
    }
    return this._addCheck({
      kind: "time",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      ...errorUtil.errToObj(options?.message)
    });
  }
  duration(message) {
    return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options?.position,
      ...errorUtil.errToObj(options?.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((ch) => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((ch) => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((ch) => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((ch) => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((ch) => ch.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((ch) => ch.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((ch) => ch.kind === "base64url");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodString.create = (params) => {
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}
var ZodNumber = class _ZodNumber extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null;
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodBigInt = class _ZodBigInt extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      try {
        input.data = BigInt(input.data);
      } catch {
        return this._getInvalidInput(input);
      }
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      return this._getInvalidInput(input);
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _getInvalidInput(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: ctx.parsedType
    });
    return INVALID;
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodBigInt.create = (params) => {
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
var ZodBoolean = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodDate = class _ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (Number.isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new _ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: params?.coerce || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
var ZodSymbol = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};
var ZodUndefined = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
var ZodNull = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
var ZodAny = class extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
var ZodUnknown = class extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
var ZodNever = class extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
};
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
var ZodVoid = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
var ZodArray = class _ZodArray extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new _ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new _ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new _ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
var ZodObject = class _ZodObject extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    this._cached = { shape, keys };
    return this._cached;
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip") {
      } else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: (issue, ctx) => {
          const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: errorUtil.errToObj(message).message ?? defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new _ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    const merged = new _ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new _ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    for (const key of util.objectKeys(mask)) {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
var ZodUnion = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = (type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return util.objectValues(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [void 0];
  } else if (type instanceof ZodNull) {
    return [null];
  } else if (type instanceof ZodOptional) {
    return [void 0, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodNullable) {
    return [null, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodBranded) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodReadonly) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodCatch) {
    return getDiscriminator(type._def.innerType);
  } else {
    return [];
  }
};
var ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */ new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues.length) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new _ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
function mergeValues(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
}
var ZodIntersection = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
};
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
var ZodTuple = class _ZodTuple extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x) => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new _ZodTuple({
      ...this._def,
      rest
    });
  }
};
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class _ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new _ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new _ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
};
var ZodMap = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
var ZodSet = class _ZodSet extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new _ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new _ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size2, message) {
    return this.min(size2, message).max(size2, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
var ZodFunction = class _ZodFunction extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function(...args) {
        const error = new ZodError([]);
        const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
          error.addIssue(makeReturnsIssue(result, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me = this;
      return OK(function(...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new _ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new _ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new _ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
};
var ZodLazy = class extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
var ZodLiteral = class extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
var ZodEnum = class _ZodEnum extends ZodType {
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(this._def.values);
    }
    if (!this._cache.has(input.data)) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return _ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
      ...this._def,
      ...newDef
    });
  }
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(util.getValidEnumValues(this._def.values));
    }
    if (!this._cache.has(input.data)) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
};
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
var ZodPromise = class extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
};
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
var ZodEffects = class extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async) {
        return Promise.resolve(processed).then(async (processed2) => {
          if (status.value === "aborted")
            return INVALID;
          const result = await this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          if (result.status === "aborted")
            return INVALID;
          if (result.status === "dirty")
            return DIRTY(result.value);
          if (status.value === "dirty")
            return DIRTY(result.value);
          return result;
        });
      } else {
        if (status.value === "aborted")
          return INVALID;
        const result = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        if (result.status === "aborted")
          return INVALID;
        if (result.status === "dirty")
          return DIRTY(result.value);
        if (status.value === "dirty")
          return DIRTY(result.value);
        return result;
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return INVALID;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return INVALID;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
            status: status.value,
            value: result
          }));
        });
      }
    }
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
var ZodOptional = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
var ZodNullable = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
var ZodDefault = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};
var ZodCatch = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};
var ZodNaN = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
};
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = /* @__PURE__ */ Symbol("zod_brand");
var ZodBranded = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
};
var ZodPipeline = class _ZodPipeline extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a, b) {
    return new _ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
};
var ZodReadonly = class extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input);
    const freeze = (data) => {
      if (isValid(data)) {
        data.value = Object.freeze(data.value);
      }
      return data;
    };
    return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
function cleanParams(params, data) {
  const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
  const p2 = typeof p === "string" ? { message: p } : p;
  return p2;
}
function custom(check, _params = {}, fatal) {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      const r = check(data);
      if (r instanceof Promise) {
        return r.then((r2) => {
          if (!r2) {
            const params = cleanParams(_params, data);
            const _fatal = params.fatal ?? fatal ?? true;
            ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
          }
        });
      }
      if (!r) {
        const params = cleanParams(_params, data);
        const _fatal = params.fatal ?? fatal ?? true;
        ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
      }
      return;
    });
  return ZodAny.create();
}
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var coerce = {
  string: ((arg) => ZodString.create({ ...arg, coerce: true })),
  number: ((arg) => ZodNumber.create({ ...arg, coerce: true })),
  boolean: ((arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  })),
  bigint: ((arg) => ZodBigInt.create({ ...arg, coerce: true })),
  date: ((arg) => ZodDate.create({ ...arg, coerce: true }))
};
var NEVER = INVALID;

// params/caravan2.params.json
var caravan2_params_default = {
  phase: 0,
  chain: { network: "base-sepolia", chainId: 84532 },
  feeBandsUSD: [
    { poolNotionalMax: 1e3, buyerReveal: 0.25, sellerReveal: 1 },
    { poolNotionalMax: 1e4, buyerReveal: 1, sellerReveal: 5 },
    { poolNotionalMax: 1e5, buyerReveal: 5, sellerReveal: 20 },
    { poolNotionalMax: null, buyerReveal: 10, sellerReveal: 50 }
  ],
  commitmentWeights: { bonded: 1, signed: 0.5, unbonded: 0.25 },
  windows: {
    batchCadenceMinutes: 60,
    revealDeadlineHours: 24,
    commitmentWindowHours: 72,
    capacityCheckTimeoutSeconds: 30,
    offerDefaultExpiryDays: 14
  },
  bonds: { levelChosenBySeller: true, hardcodedPercent: null, slashRecipient: "performing-counterparties-pro-rata", caravanMayReceive: false },
  sellers: { newSellerMaxPoolNotionalUSD: 5e3, graduationAttestedPools: 3 },
  antiAbuse: { powBits: 20, intentsPerDayVerified: 200, intentsPerDayUnverified: 10 },
  publicAggregation: {
    minCohortSize: 3,
    quantityBands: "log2",
    thinMarketDelayHours: 24,
    maxSavingsUnitPriceUSDC6: "999999999999999"
  },
  referrals: { enabledPhase: 2 },
  credits: { sellerDefaultAutoCredit: true, monthlyCreditCapPerClusterUSD: 50 },
  disclosure: { accrualDelayHours: 24, decayHalfLifeDays: 90, governsMatching: false },
  killCriteria90d: {
    externalBuyerIntents: 100,
    verifiedSellers: 10,
    sellerResponseRate: 0.4,
    matchToRevealConversion: 0.25,
    attestedCompletedPools: 15,
    repeatAgentRate: 0.3,
    medianRealizedSavings: 0.08
  }
};

// packages/params/src/index.ts
var nonNeg = external_exports.number().nonnegative();
var configuredMaxSavingsUnitPriceUSDC6 = caravan2_params_default.publicAggregation.maxSavingsUnitPriceUSDC6;
var maxSavingsUnitPriceUSDC6 = external_exports.string().regex(/^[1-9][0-9]*$/u).refine(
  (value) => value === configuredMaxSavingsUnitPriceUSDC6,
  "must equal the canonical savings projection ceiling"
);
var FeeBand = external_exports.object({
  poolNotionalMax: external_exports.number().positive().nullable(),
  buyerReveal: nonNeg,
  sellerReveal: nonNeg
});
var ParamsSchema = external_exports.object({
  phase: external_exports.literal(0),
  chain: external_exports.object({
    network: external_exports.literal("base-sepolia"),
    chainId: external_exports.literal(84532)
  }),
  feeBandsUSD: external_exports.array(FeeBand).length(4),
  commitmentWeights: external_exports.object({
    bonded: external_exports.number().positive(),
    signed: external_exports.number().positive(),
    unbonded: external_exports.number().positive()
  }),
  windows: external_exports.object({
    batchCadenceMinutes: external_exports.number().int().positive(),
    revealDeadlineHours: external_exports.number().positive(),
    commitmentWindowHours: external_exports.number().positive(),
    capacityCheckTimeoutSeconds: external_exports.number().positive(),
    offerDefaultExpiryDays: external_exports.number().positive()
  }),
  bonds: external_exports.object({
    levelChosenBySeller: external_exports.boolean(),
    hardcodedPercent: external_exports.number().nullable(),
    slashRecipient: external_exports.literal("performing-counterparties-pro-rata"),
    caravanMayReceive: external_exports.literal(false)
  }),
  sellers: external_exports.object({
    newSellerMaxPoolNotionalUSD: external_exports.number().int().positive(),
    graduationAttestedPools: external_exports.number().int().positive()
  }),
  antiAbuse: external_exports.object({
    powBits: external_exports.number().int().positive(),
    intentsPerDayVerified: external_exports.number().int().positive(),
    intentsPerDayUnverified: external_exports.number().int().positive()
  }),
  publicAggregation: external_exports.object({
    minCohortSize: external_exports.number().int().positive(),
    quantityBands: external_exports.literal("log2"),
    thinMarketDelayHours: external_exports.number().positive(),
    maxSavingsUnitPriceUSDC6
  }),
  referrals: external_exports.object({ enabledPhase: external_exports.number().int() }),
  credits: external_exports.object({
    sellerDefaultAutoCredit: external_exports.boolean(),
    monthlyCreditCapPerClusterUSD: external_exports.number().positive()
  }),
  disclosure: external_exports.object({
    accrualDelayHours: external_exports.number().positive(),
    decayHalfLifeDays: external_exports.number().positive(),
    governsMatching: external_exports.literal(false)
  }),
  killCriteria90d: external_exports.object({
    externalBuyerIntents: external_exports.number().int().nonnegative(),
    verifiedSellers: external_exports.number().int().nonnegative(),
    sellerResponseRate: external_exports.number().min(0).max(1),
    matchToRevealConversion: external_exports.number().min(0).max(1),
    attestedCompletedPools: external_exports.number().int().nonnegative(),
    repeatAgentRate: external_exports.number().min(0).max(1),
    medianRealizedSavings: external_exports.number().min(0).max(1)
  })
}).superRefine((p, ctx) => {
  const maxes = p.feeBandsUSD.map((b) => b.poolNotionalMax);
  const nulls = maxes.filter((m) => m === null).length;
  if (nulls !== 1 || maxes[maxes.length - 1] !== null) {
    ctx.addIssue({ code: external_exports.ZodIssueCode.custom, message: "exactly one open-ended fee band, and it must be last" });
  }
  const finite2 = maxes.filter((m) => m !== null);
  for (let i = 1; i < finite2.length; i++) {
    if (finite2[i] <= finite2[i - 1]) {
      ctx.addIssue({ code: external_exports.ZodIssueCode.custom, message: "fee band poolNotionalMax values must strictly increase" });
    }
  }
  if (p.bonds.caravanMayReceive !== false) {
    ctx.addIssue({ code: external_exports.ZodIssueCode.custom, message: "Caravan may never receive slashed funds" });
  }
});
function validateParams(input) {
  return ParamsSchema.parse(input);
}
function deepFreeze(obj) {
  if (obj && typeof obj === "object") {
    for (const key of Object.keys(obj)) {
      deepFreeze(obj[key]);
    }
    Object.freeze(obj);
  }
  return obj;
}
var PARAMS = deepFreeze(validateParams(caravan2_params_default));

// packages/sdk/src/eip712.ts
var COMMITMENT_DOMAIN = {
  name: "CaravanCommit",
  version: "1",
  chainId: PARAMS.chain.chainId
  // 84532
};
var PURCHASE_COMMITMENT_TYPES = {
  PurchaseCommitment: [
    { name: "manifestHash", type: "bytes32" },
    { name: "poolId", type: "string" },
    { name: "buyer", type: "address" },
    { name: "seller", type: "address" },
    { name: "productId", type: "string" },
    { name: "qty", type: "uint256" },
    { name: "unitPrice", type: "uint256" },
    { name: "settlementMethod", type: "string" },
    { name: "expiry", type: "uint256" },
    { name: "termsHash", type: "bytes32" }
  ]
};
function computeTermsHash(termsText) {
  return keccak256(toHex(termsText));
}
async function signCommitment(signer, c) {
  return signer.signTypedData({
    domain: COMMITMENT_DOMAIN,
    types: PURCHASE_COMMITMENT_TYPES,
    primaryType: "PurchaseCommitment",
    message: c
  });
}
async function recoverCommitmentSigner(c, signature) {
  return recoverTypedDataAddress({
    domain: COMMITMENT_DOMAIN,
    types: PURCHASE_COMMITMENT_TYPES,
    primaryType: "PurchaseCommitment",
    message: c,
    signature
  });
}
async function verifyCommitment(c, signature, expectedRole, expectTermsText) {
  if (expectTermsText !== void 0) {
    if (c.termsHash.toLowerCase() !== computeTermsHash(expectTermsText).toLowerCase()) return false;
  }
  let recovered;
  try {
    recovered = await recoverCommitmentSigner(c, signature);
  } catch {
    return false;
  }
  const expected = expectedRole === "buyer" ? c.buyer : c.seller;
  return recovered.toLowerCase() === expected.toLowerCase();
}

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/accounts/generatePrivateKey.js
init_secp256k1();
init_toHex();
function generatePrivateKey() {
  return toHex(secp256k1.utils.randomPrivateKey());
}

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/accounts/privateKeyToAccount.js
init_secp256k1();
init_toHex();

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/accounts/toAccount.js
init_address();
init_isAddress();
function toAccount(source) {
  if (typeof source === "string") {
    if (!isAddress(source, { strict: false }))
      throw new InvalidAddressError({ address: source });
    return {
      address: source,
      type: "json-rpc"
    };
  }
  if (!isAddress(source.address, { strict: false }))
    throw new InvalidAddressError({ address: source.address });
  return {
    address: source.address,
    nonceManager: source.nonceManager,
    sign: source.sign,
    signAuthorization: source.signAuthorization,
    signMessage: source.signMessage,
    signTransaction: source.signTransaction,
    signTypedData: source.signTypedData,
    source: "custom",
    type: "local"
  };
}

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/accounts/utils/sign.js
init_secp256k1();
init_isHex();
init_toBytes();
init_toHex();
var extraEntropy = false;
async function sign({ hash, privateKey, to = "object" }) {
  const { r, s, recovery } = secp256k1.sign(hash.slice(2), privateKey.slice(2), {
    lowS: true,
    extraEntropy: isHex(extraEntropy, { strict: false }) ? hexToBytes(extraEntropy) : extraEntropy
  });
  const signature = {
    r: numberToHex(r, { size: 32 }),
    s: numberToHex(s, { size: 32 }),
    v: recovery ? 28n : 27n,
    yParity: recovery
  };
  return (() => {
    if (to === "bytes" || to === "hex")
      return serializeSignature({ ...signature, to });
    return signature;
  })();
}

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/accounts/utils/signAuthorization.js
async function signAuthorization(parameters) {
  const { chainId, nonce, privateKey, to = "object" } = parameters;
  const address2 = parameters.contractAddress ?? parameters.address;
  const signature = await sign({
    hash: hashAuthorization({ address: address2, chainId, nonce }),
    privateKey,
    to
  });
  if (to === "object")
    return {
      address: address2,
      chainId,
      nonce,
      ...signature
    };
  return signature;
}

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/accounts/utils/signMessage.js
async function signMessage({ message, privateKey }) {
  return await sign({ hash: hashMessage(message), privateKey, to: "hex" });
}

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/accounts/utils/signTransaction.js
init_keccak256();
async function signTransaction(parameters) {
  const { privateKey, transaction, serializer = serializeTransaction } = parameters;
  const signableTransaction = (() => {
    if (transaction.type === "eip4844")
      return {
        ...transaction,
        sidecars: false
      };
    return transaction;
  })();
  const signature = await sign({
    hash: keccak256(await serializer(signableTransaction)),
    privateKey
  });
  return await serializer(transaction, signature);
}

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/accounts/utils/signTypedData.js
async function signTypedData(parameters) {
  const { privateKey, ...typedData } = parameters;
  return await sign({
    hash: hashTypedData(typedData),
    privateKey,
    to: "hex"
  });
}

// node_modules/.pnpm/viem@2.55.1_typescript@5.9.3_zod@3.25.76/node_modules/viem/_esm/accounts/privateKeyToAccount.js
function privateKeyToAccount(privateKey, options = {}) {
  const { nonceManager } = options;
  const publicKey = toHex(secp256k1.getPublicKey(privateKey.slice(2), false));
  const address2 = publicKeyToAddress(publicKey);
  const account = toAccount({
    address: address2,
    nonceManager,
    async sign({ hash }) {
      return sign({ hash, privateKey, to: "hex" });
    },
    async signAuthorization(authorization) {
      return signAuthorization({ ...authorization, privateKey });
    },
    async signMessage({ message }) {
      return signMessage({ message, privateKey });
    },
    async signTransaction(transaction, { serializer } = {}) {
      return signTransaction({ privateKey, transaction, serializer });
    },
    async signTypedData(typedData) {
      return signTypedData({ ...typedData, privateKey });
    }
  });
  return {
    ...account,
    publicKey,
    source: "privateKey"
  };
}

// packages/sdk/src/capacity.ts
var CAPACITY_PROTOCOL = "caravan.capacity-check.v1";
var CAPACITY_REQUEST_DOMAIN = `${CAPACITY_PROTOCOL}.request`;
var CAPACITY_RESPONSE_DOMAIN = `${CAPACITY_PROTOCOL}.response`;
var CAPACITY_IDENTITY_PATH = "/.well-known/caravan-capacity.json";
var CAPACITY_CHECK_TIMEOUT_MS = PARAMS.windows.capacityCheckTimeoutSeconds * 1e3;
var HASH_RE = /^0x[0-9a-f]{64}$/;
var ADDRESS_RE = /^0x[0-9a-f]{40}$/;
var SIGNATURE_RE = /^0x[0-9a-f]{130}$/;
function isExactObject(value, keys) {
  if (value === null || typeof value !== "object" || Array.isArray(value)) return false;
  const actual = Object.keys(value).sort();
  const expected = [...keys].sort();
  return actual.length === expected.length && actual.every((key, index) => key === expected[index]);
}
function parseFields(value) {
  if (typeof value.offerId !== "string" || value.offerId.length === 0 || value.offerId.length > 128) {
    throw new TypeError("offerId must be a non-empty string of at most 128 characters");
  }
  if (!Number.isSafeInteger(value.qty) || value.qty <= 0) {
    throw new TypeError("qty must be a positive safe integer");
  }
  if (typeof value.manifestDraftHash !== "string" || !HASH_RE.test(value.manifestDraftHash)) {
    throw new TypeError("manifestDraftHash must be a canonical lowercase bytes32 hex value");
  }
  return {
    offerId: value.offerId,
    qty: value.qty,
    manifestDraftHash: value.manifestDraftHash
  };
}
function parseSignedCapacityCheckRequest(value) {
  if (!isExactObject(value, ["protocol", "offerId", "qty", "manifestDraftHash", "requester", "nonce", "signature"])) {
    throw new TypeError("capacity request has an invalid signed-request shape");
  }
  if (value.protocol !== CAPACITY_PROTOCOL) throw new TypeError("unsupported capacity protocol version");
  const fields = parseFields(value);
  if (typeof value.requester !== "string" || !ADDRESS_RE.test(value.requester)) {
    throw new TypeError("requester must be a canonical lowercase address");
  }
  if (typeof value.nonce !== "string" || !HASH_RE.test(value.nonce)) {
    throw new TypeError("nonce must be a canonical lowercase bytes32 hex value");
  }
  if (typeof value.signature !== "string" || !SIGNATURE_RE.test(value.signature)) {
    throw new TypeError("request signature must be a canonical lowercase 65-byte hex value");
  }
  return {
    protocol: CAPACITY_PROTOCOL,
    ...fields,
    requester: value.requester,
    nonce: value.nonce,
    signature: value.signature
  };
}
function parseSignedCapacityCheckResponse(value) {
  if (!isExactObject(value, ["available", "validForSeconds", "signer", "signature"])) {
    throw new TypeError("capacity response must contain exactly available, validForSeconds, signer, and signature");
  }
  if (typeof value.available !== "boolean") throw new TypeError("available must be boolean");
  if (!Number.isSafeInteger(value.validForSeconds) || value.validForSeconds <= 0) {
    throw new TypeError("validForSeconds must be a positive safe integer");
  }
  if (typeof value.signer !== "string" || !ADDRESS_RE.test(value.signer)) {
    throw new TypeError("signer must be a canonical lowercase address");
  }
  if (typeof value.signature !== "string" || !SIGNATURE_RE.test(value.signature)) {
    throw new TypeError("signature must be a canonical lowercase 65-byte hex value");
  }
  return value;
}
function parseCapacityIdentityDocument(value) {
  if (!isExactObject(value, ["protocol", "capacityEndpoint", "seller"])) {
    throw new TypeError("capacity identity document has an invalid shape");
  }
  if (value.protocol !== CAPACITY_PROTOCOL) throw new TypeError("unsupported capacity identity protocol version");
  if (typeof value.capacityEndpoint !== "string") throw new TypeError("capacityEndpoint must be a URL string");
  if (typeof value.seller !== "string" || !ADDRESS_RE.test(value.seller)) {
    throw new TypeError("seller must be a canonical lowercase address");
  }
  return value;
}
function capacityRequestSigningMessage(fields, requester, nonce) {
  const parsed = parseFields(fields);
  const canonicalRequester = requester.toLowerCase();
  if (!ADDRESS_RE.test(canonicalRequester)) throw new TypeError("requester must be a 20-byte address");
  if (!HASH_RE.test(nonce)) throw new TypeError("nonce must be a canonical lowercase bytes32 hex value");
  return JSON.stringify({
    domain: CAPACITY_REQUEST_DOMAIN,
    request: {
      protocol: CAPACITY_PROTOCOL,
      offerId: parsed.offerId,
      qty: parsed.qty,
      manifestDraftHash: parsed.manifestDraftHash,
      requester: canonicalRequester,
      nonce
    }
  });
}
async function signCapacityCheckRequest(signer, fields, nonce) {
  const requester = signer.address.toLowerCase();
  const signature = (await signer.signMessage({
    message: capacityRequestSigningMessage(fields, requester, nonce)
  })).toLowerCase();
  return parseSignedCapacityCheckRequest({ protocol: CAPACITY_PROTOCOL, ...fields, requester, nonce, signature });
}
function capacityResponseSigningMessage(request, response, signer) {
  const parsedRequest = parseSignedCapacityCheckRequest(request);
  const canonicalSigner = signer.toLowerCase();
  if (!ADDRESS_RE.test(canonicalSigner)) throw new TypeError("signer must be a 20-byte address");
  if (typeof response.available !== "boolean") throw new TypeError("available must be boolean");
  if (!Number.isSafeInteger(response.validForSeconds) || response.validForSeconds <= 0) {
    throw new TypeError("validForSeconds must be a positive safe integer");
  }
  return JSON.stringify({
    domain: CAPACITY_RESPONSE_DOMAIN,
    request: {
      protocol: parsedRequest.protocol,
      offerId: parsedRequest.offerId,
      qty: parsedRequest.qty,
      manifestDraftHash: parsedRequest.manifestDraftHash,
      requester: parsedRequest.requester,
      nonce: parsedRequest.nonce,
      signature: parsedRequest.signature
    },
    response: { available: response.available, validForSeconds: response.validForSeconds },
    signer: canonicalSigner
  });
}
async function verifyCapacityCheckResponse(request, response, expectedSigner) {
  try {
    const parsed = parseSignedCapacityCheckResponse(response);
    if (parsed.signer !== expectedSigner.toLowerCase()) return false;
    const recovered = await recoverMessageAddress({
      message: capacityResponseSigningMessage(request, parsed, parsed.signer),
      signature: parsed.signature
    });
    return recovered.toLowerCase() === parsed.signer;
  } catch {
    return false;
  }
}
var CAPACITY_CONFORMANCE_PROBE = {
  offerId: "01J0000000000000000000000A",
  qty: 1,
  manifestDraftHash: `0x${"11".repeat(32)}`
};
function defaultNonce() {
  const bytes = new Uint8Array(32);
  globalThis.crypto.getRandomValues(bytes);
  return `0x${Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("")}`;
}
function normalizeCapacityEndpoint(url) {
  const parsed = new URL(url);
  const loopback = parsed.hostname === "localhost" || parsed.hostname === "127.0.0.1" || parsed.hostname === "[::1]";
  if (parsed.protocol !== "https:" && !(parsed.protocol === "http:" && loopback)) {
    throw new TypeError("capacity endpoint must use HTTPS (HTTP is allowed only on loopback for local conformance)");
  }
  if (parsed.username !== "" || parsed.password !== "" || parsed.hash !== "") {
    throw new TypeError("capacity endpoint must not contain credentials or a fragment");
  }
  return parsed;
}
async function performConformance(endpoint2, options, signal) {
  const fetchImpl = options.fetch ?? globalThis.fetch;
  const identityUrl = new URL(CAPACITY_IDENTITY_PATH, endpoint2.origin);
  const identityResponse = await fetchImpl(identityUrl, { method: "GET", redirect: "error", signal });
  if (!identityResponse.ok) throw new Error(`identity endpoint returned HTTP ${identityResponse.status}`);
  const identity = parseCapacityIdentityDocument(await identityResponse.json());
  if (new URL(identity.capacityEndpoint).href !== endpoint2.href) {
    throw new Error("identity document capacityEndpoint does not match the requested endpoint");
  }
  if (options.expectedSigner !== void 0 && identity.seller !== options.expectedSigner.toLowerCase()) {
    throw new Error("identity document does not match expected enrolled seller");
  }
  const requester = options.requestSigner ?? privateKeyToAccount(generatePrivateKey());
  const signedRequest = await signCapacityCheckRequest(
    requester,
    options.request ?? CAPACITY_CONFORMANCE_PROBE,
    options.requestNonce ?? defaultNonce()
  );
  const capacityResponse = await fetchImpl(endpoint2, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(signedRequest),
    redirect: "error",
    signal
  });
  if (!capacityResponse.ok) throw new Error(`capacity endpoint returned HTTP ${capacityResponse.status}`);
  const parsed = parseSignedCapacityCheckResponse(await capacityResponse.json());
  if (!await verifyCapacityCheckResponse(signedRequest, parsed, identity.seller)) {
    throw new Error("response signature does not match the enrolled seller discovered from the same origin");
  }
  return { seller: identity.seller, response: parsed };
}
async function runCapacityConformance(url, options = {}) {
  const now = options.now ?? Date.now;
  const started = now();
  const controller = new AbortController();
  let timer;
  try {
    const endpoint2 = normalizeCapacityEndpoint(url);
    const timeout = new Promise((_, reject) => {
      timer = setTimeout(() => {
        controller.abort();
        reject(new Error(`conformance exceeded ${PARAMS.windows.capacityCheckTimeoutSeconds}s end-to-end capacity timeout`));
      }, CAPACITY_CHECK_TIMEOUT_MS);
    });
    const result = await Promise.race([performConformance(endpoint2, options, controller.signal), timeout]);
    return { ok: true, elapsedMs: now() - started, errors: [], ...result };
  } catch (error) {
    return {
      ok: false,
      elapsedMs: now() - started,
      errors: [error instanceof Error ? error.message : "capacity conformance failed"]
    };
  } finally {
    if (timer !== void 0) clearTimeout(timer);
  }
}

// packages/sdk/src/client/types.ts
var SDK_DISCLAIMER = "EXPERIMENTAL — TEST NETWORK ONLY — NOT A FINANCIAL PRODUCT OR SERVICE — NO REAL FUNDS — AS IS, NO WARRANTY, NO LIABILITY — USE AT YOUR OWN RISK";

// packages/sdk/src/client/errors.ts
var CaravanSdkError = class extends Error {
  constructor(message, options) {
    super(message, options);
    this.name = "CaravanSdkError";
  }
};
var CaravanInputError = class extends CaravanSdkError {
  constructor(message) {
    super(message);
    this.name = "CaravanInputError";
  }
};
var CaravanHttpError = class extends CaravanSdkError {
  status;
  code;
  retryAfterSeconds;
  constructor(input) {
    super(`${input.code}: ${input.reason}`);
    this.name = "CaravanHttpError";
    this.status = input.status;
    this.code = input.code;
    this.retryAfterSeconds = input.retryAfterSeconds ?? null;
  }
};
var CaravanPhaseGateError = class extends CaravanSdkError {
  rail;
  constructor(rail) {
    super(`${rail} payments are disabled in Phase 0`);
    this.name = "CaravanPhaseGateError";
    this.rail = rail;
  }
};
var CaravanTimeoutError = class extends CaravanSdkError {
  constructor(message = "Caravan request timed out") {
    super(message);
    this.name = "CaravanTimeoutError";
  }
};
var CaravanResponseError = class extends CaravanSdkError {
  constructor(message = "Caravan returned an invalid response") {
    super(message);
    this.name = "CaravanResponseError";
  }
};

// packages/sdk/src/client/identity.ts
function createIdentity(input = {}) {
  const account = privateKeyToAccount(input.privateKey ?? generatePrivateKey());
  const identityId = input.identityId ?? account.address.toLowerCase();
  if (!/^[A-Za-z0-9._:-]{1,128}$/.test(identityId)) {
    throw new CaravanInputError("identityId must be 1-128 portable identifier characters");
  }
  return { identityId, address: account.address, account };
}

// packages/sdk/src/client/intent-normalization.ts
var INTENT_FIELDS = Object.freeze([
  "productId",
  "qty",
  "unitCeiling",
  "window",
  "region",
  "settlementPrefs",
  "privacy"
]);
function invalidIntent() {
  throw new CaravanInputError("intent is invalid");
}
function normalizeIntentInput(intent) {
  if (intent === null || typeof intent !== "object" || Array.isArray(intent)) invalidIntent();
  const keys = Object.keys(intent);
  if (keys.length !== INTENT_FIELDS.length || INTENT_FIELDS.some((field) => !keys.includes(field))) invalidIntent();
  if (typeof intent.productId !== "string" || typeof intent.region !== "string") invalidIntent();
  const productId = intent.productId.trim();
  const region = intent.region.trim();
  if (productId.length < 1 || productId.length > 256 || region.length < 1 || region.length > 128) invalidIntent();
  if (!Number.isInteger(intent.qty) || intent.qty <= 0) invalidIntent();
  if (!Number.isInteger(intent.unitCeiling) || intent.unitCeiling < 0) invalidIntent();
  if (intent.window === null || typeof intent.window !== "object" || Array.isArray(intent.window)) invalidIntent();
  if (typeof intent.window.start !== "string" || typeof intent.window.end !== "string") invalidIntent();
  if (!Array.isArray(intent.settlementPrefs) || intent.settlementPrefs.length < 1 || intent.settlementPrefs.length > 16) invalidIntent();
  const settlementPrefs = intent.settlementPrefs.map((value) => {
    if (typeof value !== "string") return invalidIntent();
    const normalized = value.trim();
    if (normalized.length < 1 || normalized.length > 64) return invalidIntent();
    return normalized;
  });
  if (intent.privacy !== "normal" && intent.privacy !== "private") invalidIntent();
  return Object.freeze({
    productId,
    qty: intent.qty,
    unitCeiling: intent.unitCeiling,
    window: Object.freeze({ start: intent.window.start, end: intent.window.end }),
    region,
    settlementPrefs: Object.freeze(settlementPrefs),
    privacy: intent.privacy
  });
}

// packages/sdk/src/client/pow.ts
var ABORT_YIELD_INTERVAL = 256;
function canonicalize(value) {
  if (Array.isArray(value)) return `[${value.map(canonicalize).join(",")}]`;
  if (value !== null && typeof value === "object") {
    const record = value;
    return `{${Object.keys(record).sort().map((key) => `${JSON.stringify(key)}:${canonicalize(record[key])}`).join(",")}}`;
  }
  return JSON.stringify(value);
}
function bytesToHex3(bytes) {
  return [...bytes].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}
async function sha2565(value) {
  return new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value)));
}
function throwIfAborted(signal) {
  if (signal?.aborted === true) throw new CaravanTimeoutError("Caravan request was aborted");
}
function yieldToAbortSignal() {
  return new Promise((resolve) => setTimeout(resolve, 0));
}
function hasLeadingZeroBits(bytes, requiredBits) {
  const fullBytes = Math.floor(requiredBits / 8);
  const remainingBits = requiredBits % 8;
  for (let index = 0; index < fullBytes; index += 1) if (bytes[index] !== 0) return false;
  if (remainingBits === 0) return true;
  return ((bytes[fullBytes] ?? 255) & (255 << 8 - remainingBits & 255)) === 0;
}
async function hashIntent(intent) {
  return bytesToHex3(await sha2565(canonicalize(normalizeIntentInput(intent))));
}
async function solveIntentPow(input) {
  throwIfAborted(input.signal);
  const bits = input.bits ?? PARAMS.antiAbuse.powBits;
  const maxAttempts = input.maxAttempts ?? 8e6;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(input.utcDay)) throw new CaravanInputError("utcDay must use YYYY-MM-DD");
  if (!Number.isSafeInteger(bits) || bits < 1 || bits > 32) throw new CaravanInputError("bits must be an integer from 1 through 32");
  if (!Number.isSafeInteger(maxAttempts) || maxAttempts < 1) throw new CaravanInputError("maxAttempts must be a positive safe integer");
  const intentHash = await hashIntent(input.intent);
  throwIfAborted(input.signal);
  for (let nonce = 0; nonce < maxAttempts; nonce += 1) {
    if (input.signal !== void 0 && nonce % ABORT_YIELD_INTERVAL === 0) {
      await yieldToAbortSignal();
      throwIfAborted(input.signal);
    }
    const nonceHex = nonce.toString(16);
    const digest = await sha2565(`${intentHash}:${input.utcDay}:${nonceHex}`);
    throwIfAborted(input.signal);
    if (hasLeadingZeroBits(digest, bits)) {
      return `v1:${input.utcDay}:${nonceHex}`;
    }
  }
  throw new CaravanInputError("proof-of-work search exhausted maxAttempts");
}

// packages/sdk/src/client/attestation.ts
var ATTESTATION_DOMAIN = Object.freeze({
  name: "CaravanCommit",
  version: "1",
  chainId: PARAMS.chain.chainId
});
var ATTESTATION_TYPES = {
  Attestation: [
    { name: "manifestHash", type: "bytes32" },
    { name: "poolId", type: "string" },
    { name: "role", type: "string" },
    { name: "outcome", type: "string" },
    { name: "realizedUnitPrice", type: "uint256" }
  ]
};
function toTypedAttestationMessage(attestation) {
  if (!/^0x[0-9a-f]{64}$/.test(attestation.manifestHash)) throw new CaravanInputError("manifestHash must be lowercase bytes32");
  if (!/^[0-9A-HJKMNP-TV-Z]{26}$/.test(attestation.poolId)) {
    throw new CaravanInputError("poolId must be a canonical ULID");
  }
  if (attestation.realizedUnitPrice !== void 0 && !/^(0|[1-9][0-9]{0,77})$/.test(attestation.realizedUnitPrice)) {
    throw new CaravanInputError("realizedUnitPrice must be a canonical uint256 decimal string");
  }
  if (attestation.outcome !== "completed" && attestation.realizedUnitPrice !== void 0) {
    throw new CaravanInputError("default outcomes cannot carry a realized price");
  }
  const realizedUnitPrice = attestation.realizedUnitPrice === void 0 ? maxUint256 : BigInt(attestation.realizedUnitPrice);
  if (realizedUnitPrice > maxUint256) throw new CaravanInputError("realizedUnitPrice exceeds uint256");
  return {
    manifestHash: attestation.manifestHash,
    poolId: attestation.poolId,
    role: attestation.role,
    outcome: attestation.outcome,
    realizedUnitPrice
  };
}
async function signAttestation(signer, attestation) {
  return signer.signTypedData({
    domain: ATTESTATION_DOMAIN,
    types: ATTESTATION_TYPES,
    primaryType: "Attestation",
    message: toTypedAttestationMessage(attestation)
  });
}

// packages/sdk/src/client/bonds.ts
function adapterOrThrow(adapter) {
  if (adapter === void 0) throw new CaravanInputError("bond operations require an explicit BondAdapter");
  return adapter;
}
var ADDRESS = /^0x[0-9a-fA-F]{40}$/;
var BYTES32 = /^0x[0-9a-f]{64}$/;
function address(value, name) {
  if (!ADDRESS.test(value) || /^0x0{40}$/i.test(value)) throw new CaravanInputError(`${name} must be a nonzero address`);
}
async function deployBond(adapter, input, signal) {
  if (input.participants.length < 2) throw new CaravanInputError("a bond requires at least two participants");
  if (input.chainId !== PARAMS.chain.chainId) throw new CaravanInputError("bond chainId must be Base Sepolia");
  address(input.token, "token");
  if (!BYTES32.test(input.manifestHash)) throw new CaravanInputError("manifestHash must be lowercase bytes32");
  const seen = /* @__PURE__ */ new Set();
  for (const participant of input.participants) {
    address(participant.address, "participant address");
    const normalized = participant.address.toLowerCase();
    if (seen.has(normalized)) throw new CaravanInputError("bond participants must be unique");
    seen.add(normalized);
    if (participant.bondAmountUSDC6 <= 0n) throw new CaravanInputError("bond amount must be positive");
    if (participant.depositDeadlineUnixSeconds < 0n || participant.performDeadlineUnixSeconds <= participant.depositDeadlineUnixSeconds) {
      throw new CaravanInputError("bond deadlines are invalid");
    }
  }
  return adapterOrThrow(adapter).deployBond(input, signal);
}
async function depositBond(adapter, input, signal) {
  address(input.bondAddress, "bondAddress");
  address(input.participant, "participant");
  return adapterOrThrow(adapter).depositBond(input, signal);
}
async function settleBond(adapter, input, signal) {
  address(input.bondAddress, "bondAddress");
  return adapterOrThrow(adapter).settleBond(input, signal);
}

// packages/sdk/src/client/operation.ts
var OPERATION_SKIPPED = /* @__PURE__ */ Symbol("operation-skipped");
var PHASE_SKIPPED = /* @__PURE__ */ Symbol("phase-skipped");
var operationContexts = /* @__PURE__ */ new WeakMap();
function monotonicNow() {
  return globalThis.performance?.now() ?? Date.now();
}
function timeoutError(cause) {
  return new CaravanTimeoutError(cause === "caller" ? "Caravan request was aborted" : void 0);
}
function throwIfOperationAborted(signal) {
  const context = operationContexts.get(signal);
  if (signal.aborted === false && context !== void 0 && monotonicNow() >= context.deadline) {
    context.expire();
  }
  if (signal.aborted) throw timeoutError(context?.cause === "timeout" ? "timeout" : "caller");
}
function awaitOperation(signal, operation, onLateValue) {
  try {
    throwIfOperationAborted(signal);
  } catch (error) {
    return Promise.reject(error);
  }
  return new Promise((resolve, reject) => {
    let settled = false;
    const finish = (callback) => {
      if (settled) return;
      settled = true;
      signal.removeEventListener("abort", onAbort);
      callback();
    };
    const onAbort = () => finish(() => {
      const context = operationContexts.get(signal);
      reject(timeoutError(context?.cause === "timeout" ? "timeout" : "caller"));
    });
    signal.addEventListener("abort", onAbort, { once: true });
    if (signal.aborted) {
      onAbort();
      return;
    }
    Promise.resolve().then(() => {
      if (settled) return PHASE_SKIPPED;
      throwIfOperationAborted(signal);
      return operation();
    }).then(
      (value) => {
        if (value === PHASE_SKIPPED) return;
        if (settled) {
          try {
            onLateValue?.(value);
          } catch {
          }
          return;
        }
        try {
          throwIfOperationAborted(signal);
        } catch (error) {
          if (settled) {
            try {
              onLateValue?.(value);
            } catch {
            }
          } else {
            finish(() => reject(error));
          }
          return;
        }
        finish(() => resolve(value));
      },
      (error) => {
        if (settled) return;
        try {
          throwIfOperationAborted(signal);
        } catch (abortError) {
          if (!settled) finish(() => reject(abortError));
          return;
        }
        finish(() => reject(error));
      }
    );
  });
}
function runClientOperation(timeoutMs, callerSignal, operation) {
  if (callerSignal?.aborted === true) return Promise.reject(timeoutError("caller"));
  const controller = new AbortController();
  const deadline = monotonicNow() + timeoutMs;
  return new Promise((resolve, reject) => {
    let settled = false;
    const finish = (callback) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      callerSignal?.removeEventListener("abort", onCallerAbort);
      operationContexts.delete(controller.signal);
      callback();
    };
    const stop = (cause) => {
      if (settled) return;
      context.cause = cause;
      controller.abort();
      finish(() => reject(timeoutError(cause)));
    };
    const context = {
      deadline,
      cause: null,
      expire: () => stop("timeout")
    };
    const onCallerAbort = () => stop("caller");
    operationContexts.set(controller.signal, context);
    const timer = setTimeout(() => stop("timeout"), timeoutMs);
    callerSignal?.addEventListener("abort", onCallerAbort, { once: true });
    if (callerSignal?.aborted === true) {
      onCallerAbort();
      return;
    }
    Promise.resolve().then(() => {
      if (settled) return OPERATION_SKIPPED;
      throwIfOperationAborted(controller.signal);
      return operation(controller.signal);
    }).then(
      (value) => {
        if (value === OPERATION_SKIPPED || settled) return;
        try {
          throwIfOperationAborted(controller.signal);
        } catch (error) {
          if (!settled) finish(() => reject(error));
          return;
        }
        finish(() => resolve(value));
      },
      (error) => {
        if (settled) return;
        try {
          throwIfOperationAborted(controller.signal);
        } catch (abortError) {
          if (!settled) finish(() => reject(abortError));
          return;
        }
        finish(() => reject(error));
      }
    );
  });
}

// packages/sdk/src/client/transport.ts
var MAX_RESPONSE_BYTES = 1048576;
var DEFAULT_TIMEOUT_MS = 2e4;
var AUTHORIZATION_CAPABILITY = /^cap1_[0-9a-f]{64}$/;
var ABORT_SKIPPED = /* @__PURE__ */ Symbol("abort-skipped");
var AbortBoundaryError = class extends Error {
};
var ResponseLimitBoundaryError = class extends Error {
  constructor(status) {
    super();
    this.status = status;
  }
  status;
};
var InvalidResponseBoundaryError = class extends Error {
  constructor(status) {
    super();
    this.status = status;
  }
  status;
};
var HttpResponseBoundaryError = class extends Error {
  constructor(input) {
    super();
    this.input = input;
  }
  input;
};
function validateBaseUrl(value) {
  let url;
  try {
    url = new URL(value);
  } catch {
    throw new CaravanInputError("baseUrl must be an absolute URL");
  }
  const local = url.hostname === "127.0.0.1" || url.hostname === "localhost" || url.hostname.endsWith(".test");
  if (url.protocol !== "https:" && !(local && url.protocol === "http:") || url.username || url.password) {
    throw new CaravanInputError("baseUrl must use HTTPS without embedded credentials");
  }
  if (url.search || url.hash) throw new CaravanInputError("baseUrl cannot include a query or fragment");
  url.pathname = `${url.pathname.replace(/\/$/, "")}/`;
  return url;
}
function retryAfterSeconds(response) {
  const raw = response.headers.get("retry-after");
  if (raw === null || !/^(0|[1-9][0-9]*)$/.test(raw)) return null;
  const parsed = Number(raw);
  return Number.isSafeInteger(parsed) ? parsed : null;
}
function errorShape(value) {
  if (value === null || typeof value !== "object") return { code: "HTTP_ERROR", reason: "Caravan request failed" };
  const error = value.error;
  if (error === null || typeof error !== "object") return { code: "HTTP_ERROR", reason: "Caravan request failed" };
  const code = error.code;
  return {
    code: typeof code === "string" && /^[A-Z][A-Z0-9_]{0,127}$/.test(code) ? code : "HTTP_ERROR",
    // Never reflect an untrusted server reason: it may echo private request or deployment data.
    reason: "Caravan request failed"
  };
}
function transportFailure() {
  return new CaravanHttpError({ status: 0, code: "TRANSPORT_ERROR", reason: "Caravan request failed" });
}
function signalIsAborted(signal) {
  return signal?.aborted === true;
}
function deadlineNow() {
  return globalThis.performance?.now() ?? Date.now();
}
function raceAbort(operation, signal, onLateValue) {
  if (signal.aborted) return Promise.reject(new AbortBoundaryError());
  return new Promise((resolve, reject) => {
    let settled = false;
    const finish = (callback) => {
      if (settled) return;
      settled = true;
      signal.removeEventListener("abort", onAbort);
      callback();
    };
    const onAbort = () => finish(() => reject(new AbortBoundaryError()));
    signal.addEventListener("abort", onAbort, { once: true });
    if (signal.aborted) {
      onAbort();
      return;
    }
    Promise.resolve().then(() => {
      if (settled) return ABORT_SKIPPED;
      if (signal.aborted) {
        onAbort();
        return ABORT_SKIPPED;
      }
      return operation();
    }).then(
      (value) => {
        if (value === ABORT_SKIPPED) return;
        if (settled) {
          try {
            onLateValue?.(value);
          } catch {
          }
          return;
        }
        finish(() => resolve(value));
      },
      (error) => finish(() => reject(error))
    );
  });
}
function cancelBody(response) {
  try {
    const cancellation = response.body?.cancel();
    if (cancellation !== void 0) void cancellation.catch(() => void 0);
  } catch {
  }
}
function cancelReader(reader) {
  try {
    void reader.cancel().catch(() => void 0);
  } catch {
  }
}
async function responseBytes(response, signal) {
  if (signal.aborted) {
    cancelBody(response);
    throw new AbortBoundaryError();
  }
  const contentLength = response.headers.get("content-length");
  if (contentLength !== null && /^[0-9]+$/.test(contentLength)) {
    if (contentLength.length > 16 || Number(contentLength) > MAX_RESPONSE_BYTES) {
      const status = response.status;
      cancelBody(response);
      throw new ResponseLimitBoundaryError(status);
    }
  }
  if (response.body === null) return new Uint8Array();
  const reader = response.body.getReader();
  const chunks = [];
  let length = 0;
  const abort = () => cancelReader(reader);
  signal.addEventListener("abort", abort, { once: true });
  try {
    if (signal.aborted) {
      abort();
      throw new AbortBoundaryError();
    }
    while (true) {
      const chunk = await raceAbort(() => reader.read(), signal);
      if (chunk.done) break;
      if (length + chunk.value.byteLength > MAX_RESPONSE_BYTES) {
        const status = response.status;
        cancelReader(reader);
        throw new ResponseLimitBoundaryError(status);
      }
      length += chunk.value.byteLength;
      chunks.push(chunk.value);
    }
  } finally {
    signal.removeEventListener("abort", abort);
    try {
      reader.releaseLock();
    } catch {
    }
  }
  const bytes = new Uint8Array(length);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return bytes;
}
async function parseJson(response, signal) {
  const bytes = await responseBytes(response, signal);
  let text2;
  try {
    text2 = new TextDecoder("utf-8", { fatal: true }).decode(bytes);
  } catch {
    throw new InvalidResponseBoundaryError(response.status);
  }
  if (text2 === "") return void 0;
  try {
    return JSON.parse(text2);
  } catch {
    throw new InvalidResponseBoundaryError(response.status);
  }
}
var HttpTransport = class {
  baseUrl;
  requestTimeoutMs;
  fetcher;
  commonHeaders;
  authorizationCapability;
  constructor(options) {
    this.baseUrl = validateBaseUrl(options.baseUrl);
    this.fetcher = options.fetch ?? globalThis.fetch.bind(globalThis);
    this.requestTimeoutMs = options.requestTimeoutMs ?? DEFAULT_TIMEOUT_MS;
    this.commonHeaders = options.headers;
    if (!Number.isSafeInteger(this.requestTimeoutMs) || this.requestTimeoutMs <= 0 || this.requestTimeoutMs > 12e4) {
      throw new CaravanInputError("requestTimeoutMs must be an integer from 1 through 120000");
    }
    if (options.authorizationCapability !== void 0 && options.identityId !== void 0) {
      throw new CaravanInputError("provide authorizationCapability without the legacy identityId alias");
    }
    const authorizationCapability = options.authorizationCapability ?? options.identityId;
    if (authorizationCapability !== void 0 && !AUTHORIZATION_CAPABILITY.test(authorizationCapability)) {
      throw new CaravanInputError("authorizationCapability must use the exact cap1 capability grammar");
    }
    this.authorizationCapability = authorizationCapability;
  }
  url(path) {
    if (!path.startsWith("/") || path.startsWith("//")) throw new CaravanInputError("endpoint paths must be origin-relative");
    const url = new URL(path.slice(1), this.baseUrl);
    if (url.origin !== this.baseUrl.origin) throw new CaravanInputError("endpoint escaped the configured origin");
    return url;
  }
  async request(path, options = {}) {
    if (signalIsAborted(options.signal)) throw new CaravanTimeoutError("Caravan request was aborted");
    const method = options.method ?? "GET";
    const url = this.url(path);
    if (options.identity !== false && this.authorizationCapability === void 0) {
      throw new CaravanInputError("this operation requires an authorizationCapability");
    }
    let body;
    if (options.body !== void 0) {
      try {
        body = JSON.stringify(options.body);
      } catch {
        throw new CaravanInputError("request body must be JSON-serializable");
      }
      if (body === void 0) throw new CaravanInputError("request body must be JSON-serializable");
    }
    const controller = new AbortController();
    const deadline = deadlineNow() + this.requestTimeoutMs;
    let abortCause = null;
    const timer = setTimeout(() => {
      if (controller.signal.aborted) return;
      abortCause = "timeout";
      controller.abort();
    }, this.requestTimeoutMs);
    const abort = () => {
      if (controller.signal.aborted) return;
      abortCause = "caller";
      controller.abort();
    };
    options.signal?.addEventListener("abort", abort, { once: true });
    if (signalIsAborted(options.signal)) abort();
    const throwIfOverdue = (response) => {
      if (controller.signal.aborted === false && deadlineNow() >= deadline) {
        abortCause = "timeout";
        controller.abort();
      }
      if (options.signal !== void 0) throwIfOperationAborted(options.signal);
      if (controller.signal.aborted) {
        if (response !== void 0) cancelBody(response);
        throw new AbortBoundaryError();
      }
    };
    try {
      throwIfOverdue();
      const commonHeaders = this.commonHeaders;
      const resolvedHeaders = typeof commonHeaders === "function" ? await raceAbort(() => commonHeaders(), controller.signal) : commonHeaders;
      throwIfOverdue();
      const headers = new Headers(resolvedHeaders);
      new Headers(options.headers).forEach((value, key) => headers.set(key, value));
      headers.set("accept", "application/json");
      if (options.identity === false) {
        headers.delete("authorization");
      } else {
        headers.set("authorization", `Bearer ${this.authorizationCapability}`);
      }
      if (body !== void 0) headers.set("content-type", "application/json");
      const request = new Request(url, {
        method,
        headers,
        body,
        signal: controller.signal,
        redirect: "error"
      });
      const response = await raceAbort(
        () => this.fetcher(request),
        controller.signal,
        cancelBody
      );
      throwIfOverdue(response);
      const data = await parseJson(response, controller.signal);
      throwIfOverdue(response);
      const accepted = options.acceptedStatuses ?? [200];
      if (!accepted.includes(response.status)) {
        const error = errorShape(data);
        throw new HttpResponseBoundaryError({
          status: response.status,
          ...error,
          retryAfterSeconds: retryAfterSeconds(response)
        });
      }
      throwIfOverdue(response);
      return { data, response };
    } catch (error) {
      if (error instanceof AbortBoundaryError || controller.signal.aborted) {
        throw new CaravanTimeoutError(abortCause === "caller" ? "Caravan request was aborted" : void 0);
      }
      if (error instanceof ResponseLimitBoundaryError) {
        throw new CaravanHttpError({
          status: error.status,
          code: "RESPONSE_TOO_LARGE",
          reason: "Caravan response exceeded the SDK limit"
        });
      }
      if (error instanceof InvalidResponseBoundaryError) {
        throw new CaravanHttpError({
          status: error.status,
          code: "INVALID_RESPONSE",
          reason: "Caravan returned an invalid response"
        });
      }
      if (error instanceof HttpResponseBoundaryError) throw new CaravanHttpError(error.input);
      throw transportFailure();
    } finally {
      clearTimeout(timer);
      options.signal?.removeEventListener("abort", abort);
    }
  }
};

// packages/sdk/src/client/responses.ts
var ULID = /^[0-9A-HJKMNP-TV-Z]{26}$/;
var BYTES322 = /^0x[0-9a-f]{64}$/;
var ADDRESS2 = /^0x[0-9a-fA-F]{40}$/;
var SAFE_ID = /^[A-Za-z0-9._:-]{1,128}$/;
var SAFE_POOL_ID = /^[A-Za-z0-9_-]{1,128}$/;
var PSEUDONYM = /^rv_[0-9a-f]{64}$/;
var CURSOR = /^cph_[0-9a-f]{64}$/;
var CANONICAL_UINT = /^(0|[1-9][0-9]{0,77})$/;
var CANONICAL_INT = /^(0|-?[1-9][0-9]*)$/;
var PAYMENT_HEADER = /^[A-Za-z0-9+/]*={0,2}$/;
var TERM_KEY = /^[A-Za-z][A-Za-z0-9_]{0,63}$/;
var FORBIDDEN_TERM_KEY = /(address|contact|email|endpoint|phone|uri|url|wallet)/i;
var EMAIL_ENDPOINT = /[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9.-]*[a-z0-9])?/i;
var DOMAIN_ENDPOINT = /\b(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+(?:[a-z]{2,63}|xn--[a-z0-9-]{2,59})(?::\d{1,5})?(?:[/?#][^\s]*)?/i;
var PUNYCODE_LABEL = /\bxn--[a-z0-9-]{2,59}\b/i;
var BRACKETED_IPV6 = /\[[0-9a-f:.%_-]*:[0-9a-f:.%_-]*\](?::\d{1,5})?(?:[/?#][^\s]*)?/i;
var UNBRACKETED_IPV6 = /(?:[0-9a-f]{0,4}:){2,7}[0-9a-f]{0,4}(?:%[a-z0-9._-]+)?/i;
var SOCKET_HOST = /\b(?:localhost|[a-z][a-z0-9-]{1,62}):\d{1,5}(?:[/?#]|\b)/i;
var URI_ENDPOINT_SCHEME = /(?:[a-z][a-z0-9+.-]*:\/\/|(?:https?|wss?|ftp|mailto|tel|sms|sip|sips|xmpp|matrix|irc|ircs|slack|discord|whatsapp|signal|telegram|tg|skype|teams|zoom|facetime):)/i;
var CANONICAL_DATETIME = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/;
var CANONICAL_GTIN = /^GTIN:(?:\d{8}|\d{12}|\d{13}|\d{14})$/;
var CANONICAL_SPEC_HASH = /^spec-hash:[0-9a-f]{64}$/;
function invalid() {
  throw new CaravanResponseError();
}
function object(value, required, optional = []) {
  if (value === null || typeof value !== "object" || Array.isArray(value)) invalid();
  const record = value;
  const keys = Object.keys(record);
  const allowed = /* @__PURE__ */ new Set([...required, ...optional]);
  if (keys.length < required.length || keys.some((key) => !allowed.has(key))) invalid();
  for (const key of required) if (!Object.prototype.hasOwnProperty.call(record, key)) invalid();
  return record;
}
function dictionary(value) {
  if (value === null || typeof value !== "object" || Array.isArray(value)) invalid();
  return value;
}
function string(value, pattern, max = 2048) {
  if (typeof value !== "string" || value.length < 1 || value.length > max || pattern !== void 0 && !pattern.test(value)) invalid();
  return value;
}
function integer2(value, minimum = 0, maximum = Number.MAX_SAFE_INTEGER) {
  if (typeof value !== "number" || !Number.isSafeInteger(value) || value < minimum || value > maximum) invalid();
  return value;
}
function finite(value, minimum = 0, maximum = Number.MAX_VALUE) {
  if (typeof value !== "number" || !Number.isFinite(value) || value < minimum || value > maximum) invalid();
  return value;
}
function timestamp(value) {
  const result = string(value, void 0, 64);
  const parsed = Date.parse(result);
  if (!Number.isFinite(parsed) || new Date(parsed).toISOString() !== result) invalid();
  return result;
}
function endpoint(value) {
  const result = string(value, void 0, 512);
  let url;
  try {
    url = new URL(result);
  } catch {
    invalid();
  }
  if (url.protocol !== "https:" || url.username || url.password || url.hash) invalid();
  return result;
}
function hasForbiddenFormatting(value) {
  for (const character of value) {
    const code = character.charCodeAt(0);
    if (code <= 31 || code === 127 || code >= 8203 && code <= 8207 || code >= 8234 && code <= 8238 || code >= 8288 && code <= 8303 || code === 65279) return true;
  }
  return false;
}
function hasContactEndpoint(value) {
  if (CANONICAL_DATETIME.test(value) || CANONICAL_GTIN.test(value) || CANONICAL_SPEC_HASH.test(value)) return false;
  if (URI_ENDPOINT_SCHEME.test(value) || EMAIL_ENDPOINT.test(value) || DOMAIN_ENDPOINT.test(value) || PUNYCODE_LABEL.test(value) || BRACKETED_IPV6.test(value) || UNBRACKETED_IPV6.test(value) || SOCKET_HOST.test(value)) return true;
  if (/\b0x[0-9a-fA-F]{40}\b/.test(value)) return true;
  for (const candidate of value.match(/(?:^|[^\d])((?:\d{1,3}\.){3}\d{1,3})(?=$|[^\d])/g) ?? []) {
    const address2 = candidate.match(/(?:\d{1,3}\.){3}\d{1,3}/)?.[0];
    if (address2 !== void 0 && address2.split(".").every((octet) => Number(octet) <= 255)) return true;
  }
  for (const candidate of value.match(/\+?\d[\d\s()._\x2f-]{5,}\d/g) ?? []) {
    if (candidate.replace(/\D/g, "").length >= 7) return true;
  }
  return false;
}
function isCanonicalBase64(value) {
  if (value.length % 4 !== 0 || !PAYMENT_HEADER.test(value)) return false;
  try {
    return btoa(atob(value)) === value;
  } catch {
    return false;
  }
}
function origin(value) {
  const result = endpoint(value);
  const url = new URL(result);
  if (url.pathname !== "/" || url.search || url.port) invalid();
  return url.origin;
}
function skill(value) {
  const item = object(value, ["id", "name"]);
  return Object.freeze({ id: string(item.id, SAFE_ID), name: string(item.name, void 0, 128) });
}
function parseAgentCardOnboarding(value) {
  const item = object(value, ["identityId", "identityTier", "evidence", "skills"]);
  if (item.identityTier !== "verified" && item.identityTier !== "unverified") invalid();
  const evidence = object(item.evidence, ["agentCard"], ["erc8004"]);
  if (evidence.agentCard !== "verified" && evidence.agentCard !== "unverified") invalid();
  if (evidence.erc8004 !== void 0 && evidence.erc8004 !== "verified" && evidence.erc8004 !== "unverified") invalid();
  if (!Array.isArray(item.skills) || item.skills.length > 64) invalid();
  return Object.freeze({
    identityId: string(item.identityId, SAFE_ID),
    identityTier: item.identityTier,
    evidence: Object.freeze({ agentCard: evidence.agentCard, ...evidence.erc8004 === void 0 ? {} : { erc8004: evidence.erc8004 } }),
    skills: Object.freeze(item.skills.map(skill))
  });
}
function parseDomainProof(value) {
  const item = object(value, ["identityId", "tier", "origin", "agentPubkey", "issuedAt", "verifiedAt"]);
  if (item.tier !== "domain-verified") invalid();
  return Object.freeze({
    identityId: string(item.identityId, SAFE_ID),
    tier: item.tier,
    origin: origin(item.origin),
    agentPubkey: string(item.agentPubkey, ADDRESS2, 42),
    issuedAt: timestamp(item.issuedAt),
    verifiedAt: timestamp(item.verifiedAt)
  });
}
function parseAcceptedIntent(value) {
  const item = object(value, ["id", "status", "intentHash", "identityTier", "quota", "createdAt"]);
  if (item.status !== "accepted" || item.identityTier !== "verified" && item.identityTier !== "unverified") invalid();
  const quota = object(item.quota, ["limit", "used"]);
  const limit = integer2(quota.limit, 1);
  const used = integer2(quota.used, 1, limit);
  return Object.freeze({
    id: string(item.id, ULID, 26),
    status: "accepted",
    intentHash: string(item.intentHash, /^[0-9a-f]{64}$/, 64),
    identityTier: item.identityTier,
    quota: Object.freeze({ limit, used }),
    createdAt: timestamp(item.createdAt)
  });
}
function failure(value) {
  const item = object(value, ["code"], ["gapPct", "missingUnits", "basis"]);
  switch (item.code) {
    case "CEILING_TOO_LOW":
      if (Object.keys(item).length !== 2 || item.gapPct !== null && (typeof item.gapPct !== "number" || !Number.isFinite(item.gapPct) || item.gapPct < 0)) invalid();
      return Object.freeze({ code: item.code, gapPct: item.gapPct });
    case "QTY_BELOW_TIER":
      if (!Object.prototype.hasOwnProperty.call(item, "missingUnits")) invalid();
      if (item.missingUnits === null) {
        if (Object.keys(item).length !== 3 || item.basis !== "NO_ELIGIBLE_TIER" && item.basis !== "MAX_OUTSTANDING_DROP" && item.basis !== "DETAIL_UNAVAILABLE") invalid();
        return Object.freeze({ code: item.code, missingUnits: null, basis: item.basis });
      }
      if (Object.keys(item).length !== 2) invalid();
      return Object.freeze({ code: item.code, missingUnits: integer2(item.missingUnits, 1) });
    case "REGION_MISMATCH":
    case "WINDOW_MISMATCH":
    case "SETTLEMENT_MISMATCH":
    case "SELLER_CAPPED":
    case "CAPACITY_MISS":
      if (Object.keys(item).length !== 1) invalid();
      return Object.freeze({ code: item.code });
    default:
      invalid();
  }
}
function suggestion(value) {
  const item = object(value, ["adjustment"], ["gapPct", "targetUnitCeiling", "widenPct", "targetWindowStart", "targetWindowEnd"]);
  if (item.adjustment === "RAISE_CEILING") {
    const exact = object(value, ["adjustment", "gapPct", "targetUnitCeiling"]);
    return Object.freeze({ adjustment: "RAISE_CEILING", gapPct: finite(exact.gapPct, 0, 5), targetUnitCeiling: integer2(exact.targetUnitCeiling) });
  }
  if (item.adjustment === "WIDEN_WINDOW") {
    const exact = object(value, ["adjustment", "widenPct", "targetWindowStart", "targetWindowEnd"]);
    const start = integer2(exact.targetWindowStart);
    const end = integer2(exact.targetWindowEnd, start + 1);
    return Object.freeze({ adjustment: "WIDEN_WINDOW", widenPct: finite(exact.widenPct, 0, 20), targetWindowStart: start, targetWindowEnd: end });
  }
  return invalid();
}
function parseIntentResult(value, intentId) {
  const item = object(value, ["intentId", "status"], ["pool", "reasons", "nearPool"]);
  if (item.intentId !== intentId) invalid();
  if (item.status === "pending") {
    if (Object.keys(item).length !== 2) invalid();
    return Object.freeze({ intentId, status: "pending" });
  }
  if (item.status === "matched") {
    const exact = object(value, ["intentId", "status", "pool"]);
    const pool = object(exact.pool, ["poolId", "tierIndex", "unitPrice", "qty", "indicative"]);
    if (typeof pool.indicative !== "boolean") invalid();
    return Object.freeze({ intentId, status: "matched", pool: Object.freeze({
      poolId: string(pool.poolId, SAFE_POOL_ID),
      tierIndex: integer2(pool.tierIndex),
      unitPrice: integer2(pool.unitPrice),
      qty: integer2(pool.qty, 1),
      indicative: pool.indicative
    }) });
  }
  if (item.status === "failed") {
    const exact = object(value, ["intentId", "status", "reasons"], ["nearPool"]);
    if (!Array.isArray(exact.reasons) || exact.reasons.length !== 1) invalid();
    const reasons = Object.freeze(exact.reasons.map(failure));
    return Object.freeze({ intentId, status: "failed", reasons, ...exact.nearPool === void 0 ? {} : { nearPool: suggestion(exact.nearPool) } });
  }
  return invalid();
}
function parseAcceptedOffer(value) {
  const item = object(value, ["id", "status"], ["offerHash", "createdAt"]);
  if (item.status !== "accepted") invalid();
  return Object.freeze({
    id: string(item.id, SAFE_ID),
    status: "accepted",
    ...item.offerHash === void 0 ? {} : { offerHash: string(item.offerHash, BYTES322, 66) },
    ...item.createdAt === void 0 ? {} : { createdAt: timestamp(item.createdAt) }
  });
}
function termValue(value) {
  if (typeof value === "string") {
    const result = string(value, void 0, 1024);
    if (hasForbiddenFormatting(result) || hasContactEndpoint(result.normalize("NFKC"))) invalid();
    return result;
  }
  if (typeof value === "boolean") return value;
  if (typeof value === "number" && Number.isSafeInteger(value) && value >= 0) return value;
  if (Array.isArray(value) && value.length >= 1 && value.length <= 64) return Object.freeze(value.map(termValue).map((entry) => {
    if (typeof entry !== "string") invalid();
    return entry;
  }));
  return invalid();
}
function manifest(value) {
  const item = object(value, ["schema", "manifestId", "poolId", "batchId", "batchHash", "predecessorManifestId", "revealDeadlineUnixSeconds", "roster"], ["sellerBondLevelMicros", "schemaBoundTerms", "templateHashReference"]);
  if (item.schema !== "caravan.staged-reveal.v1" || !Array.isArray(item.roster) || item.roster.length < 2 || item.roster.length > 512) invalid();
  const pseudonyms = /* @__PURE__ */ new Set();
  const endpoints2 = /* @__PURE__ */ new Set();
  let visiblePaidMember = false;
  let visibleSellerCount = 0;
  let rolelessMemberCount = 0;
  const roster = item.roster.map((entry) => {
    const member = object(entry, ["pseudonymousId", "committedQuantity"], ["role", "commitmentTier", "contactEndpoint"]);
    const paid = member.role !== void 0 || member.commitmentTier !== void 0 || member.contactEndpoint !== void 0;
    if (paid && (member.role !== "buyer" && member.role !== "seller")) invalid();
    if (paid && (member.commitmentTier !== "bonded" && member.commitmentTier !== "signed" && member.commitmentTier !== "unbonded")) invalid();
    if (member.contactEndpoint !== void 0 && member.role === void 0) invalid();
    const pseudonymousId = string(member.pseudonymousId, PSEUDONYM, 67);
    if (pseudonyms.has(pseudonymousId)) invalid();
    pseudonyms.add(pseudonymousId);
    let contactEndpoint;
    if (member.contactEndpoint !== void 0) {
      contactEndpoint = endpoint(member.contactEndpoint);
      const normalized = new URL(contactEndpoint).href;
      if (endpoints2.has(normalized)) invalid();
      endpoints2.add(normalized);
    }
    if (paid) {
      visiblePaidMember = true;
      if (member.role === "seller") visibleSellerCount += 1;
    } else {
      rolelessMemberCount += 1;
    }
    return Object.freeze({
      pseudonymousId,
      committedQuantity: integer2(member.committedQuantity, 1),
      ...paid ? { role: member.role, commitmentTier: member.commitmentTier } : {},
      ...contactEndpoint === void 0 ? {} : { contactEndpoint }
    });
  });
  if (visibleSellerCount > 1 || visibleSellerCount === 0 && rolelessMemberCount === 0) invalid();
  const paidDetailCount = Number(item.sellerBondLevelMicros !== void 0) + Number(item.schemaBoundTerms !== void 0) + Number(item.templateHashReference !== void 0);
  if (paidDetailCount !== 0 && (paidDetailCount !== 3 || !visiblePaidMember)) invalid();
  let terms;
  if (item.schemaBoundTerms !== void 0) {
    const source = object(item.schemaBoundTerms, ["schemaHash", "termsHash", "bindingFlag", "values"]);
    if (source.bindingFlag !== "binding" && source.bindingFlag !== "indicative") invalid();
    const values = dictionary(source.values);
    const entries = Object.entries(values);
    if (entries.length < 1 || entries.length > 64) invalid();
    const copy = {};
    for (const [key, entry] of entries) {
      if (!TERM_KEY.test(key) || FORBIDDEN_TERM_KEY.test(key)) invalid();
      copy[key] = termValue(entry);
    }
    if (JSON.stringify(copy).length > 65536) invalid();
    terms = Object.freeze({ schemaHash: string(source.schemaHash, BYTES322, 66), termsHash: string(source.termsHash, BYTES322, 66), bindingFlag: source.bindingFlag, values: Object.freeze(copy) });
  }
  let template;
  if (item.templateHashReference !== void 0) {
    const source = object(item.templateHashReference, ["registryAddress", "version", "codeHash"]);
    template = Object.freeze({ registryAddress: string(source.registryAddress, ADDRESS2, 42), version: string(source.version, SAFE_ID), codeHash: string(source.codeHash, BYTES322, 66) });
  }
  const manifestId = string(item.manifestId, ULID, 26);
  const predecessor = item.predecessorManifestId === null ? null : string(item.predecessorManifestId, ULID, 26);
  if (predecessor === manifestId) invalid();
  return Object.freeze({
    schema: "caravan.staged-reveal.v1",
    manifestId,
    poolId: string(item.poolId, SAFE_POOL_ID),
    batchId: string(item.batchId, SAFE_ID),
    batchHash: string(item.batchHash, BYTES322, 66),
    predecessorManifestId: predecessor,
    revealDeadlineUnixSeconds: integer2(item.revealDeadlineUnixSeconds),
    roster: Object.freeze(roster),
    ...item.sellerBondLevelMicros === void 0 ? {} : { sellerBondLevelMicros: integer2(item.sellerBondLevelMicros) },
    ...terms === void 0 ? {} : { schemaBoundTerms: terms },
    ...template === void 0 ? {} : { templateHashReference: template }
  });
}
function manifestEnvelope(value) {
  const item = object(value, ["manifestId", "batchHash", "manifest"]);
  const view = manifest(item.manifest);
  const manifestId = string(item.manifestId, ULID, 26);
  const batchHash = string(item.batchHash, BYTES322, 66);
  if (manifestId !== view.manifestId || batchHash !== view.batchHash) invalid();
  return Object.freeze({ manifestId, batchHash, manifest: view });
}
function parseManifest2(value) {
  return manifestEnvelope(value);
}
function parseReveal(value, paymentReceipt) {
  if (paymentReceipt !== null && (paymentReceipt.length < 1 || paymentReceipt.length > 24e3 || !isCanonicalBase64(paymentReceipt))) invalid();
  return Object.freeze({ ...manifestEnvelope(value), paymentReceipt });
}
function parseCommitmentPublication(value) {
  const item = object(value, ["status"], ["commitmentHash"]);
  if (item.status !== "accepted") invalid();
  return Object.freeze({ status: "accepted", ...item.commitmentHash === void 0 ? {} : { commitmentHash: string(item.commitmentHash, BYTES322, 66) } });
}
function outcome(value) {
  if (value === null || value === "completed" || value === "seller_default" || value === "buyer_default") return value;
  return invalid();
}
function parseAttestation(value) {
  const item = object(value, ["schema", "submission", "resolution"]);
  if (item.schema !== "caravan.attestation-result.v1" || item.submission !== "created" && item.submission !== "replayed") invalid();
  const resolution = object(item.resolution, ["status", "effectiveOutcome", "priceStatus", "factCount", "memberCount", "completionCreditCount", "facts"]);
  if (resolution.status !== "pending" && resolution.status !== "effective" && resolution.status !== "disputed") invalid();
  if (resolution.priceStatus !== "unavailable" && resolution.priceStatus !== "agreed" && resolution.priceStatus !== "conflicting") invalid();
  if (!Array.isArray(resolution.facts)) invalid();
  const factCount = integer2(resolution.factCount, 1, 512);
  const memberCount = integer2(resolution.memberCount, 2, 512);
  const completionCreditCount = integer2(resolution.completionCreditCount, 0, memberCount);
  if (resolution.facts.length !== factCount || factCount > memberCount) invalid();
  const facts = Object.freeze(resolution.facts.map((entry) => {
    const fact = object(entry, ["factHash", "role", "outcome"]);
    if (fact.role !== "buyer" && fact.role !== "seller") invalid();
    const factOutcome = outcome(fact.outcome);
    if (factOutcome === null) invalid();
    return Object.freeze({ factHash: string(fact.factHash, BYTES322, 66), role: fact.role, outcome: factOutcome });
  }));
  const factHashes = new Set(facts.map((fact) => fact.factHash));
  if (factHashes.size !== factCount) invalid();
  for (let index = 1; index < facts.length; index += 1) {
    if (facts[index - 1].factHash > facts[index].factHash) invalid();
  }
  const sellerFactCount = facts.filter((fact) => fact.role === "seller").length;
  if (sellerFactCount > 1 || factCount === memberCount && sellerFactCount !== 1) invalid();
  const effectiveOutcome = outcome(resolution.effectiveOutcome);
  const distinctOutcomes = new Set(facts.map((fact) => fact.outcome));
  const isCompleted = effectiveOutcome === "completed";
  if (resolution.status === "pending") {
    if (factCount >= memberCount || distinctOutcomes.size !== 1 || effectiveOutcome !== null || resolution.priceStatus !== "unavailable" || completionCreditCount !== 0) invalid();
  } else if (resolution.status === "disputed") {
    if (distinctOutcomes.size < 2 || effectiveOutcome !== null || resolution.priceStatus !== "unavailable" || completionCreditCount !== 0) invalid();
  } else {
    const onlyOutcome = facts[0].outcome;
    if (factCount !== memberCount || distinctOutcomes.size !== 1 || effectiveOutcome !== onlyOutcome || (isCompleted ? completionCreditCount !== memberCount : completionCreditCount !== 0) || !isCompleted && resolution.priceStatus !== "unavailable") invalid();
  }
  return Object.freeze({ schema: "caravan.attestation-result.v1", submission: item.submission, resolution: Object.freeze({
    status: resolution.status,
    effectiveOutcome,
    priceStatus: resolution.priceStatus,
    factCount,
    memberCount,
    completionCreditCount,
    facts
  }) });
}
function ratio(value) {
  if (value === null) return null;
  return finite(value, 0, 1);
}
function parseDisclosure(value, agentId) {
  const item = object(value, ["schema", "agentId", "identity", "stats", "policy"]);
  if (item.schema !== "caravan.disclosure.v1" || item.agentId !== agentId) invalid();
  const identity = object(item.identity, ["tier", "skills"]);
  if (identity.tier !== "verified" && identity.tier !== "unverified") invalid();
  if (!Array.isArray(identity.skills) || identity.skills.length > 64) invalid();
  const stats = object(item.stats, ["honoredManifestRate", "attestedCompletions", "capacityCheckReliability", "counterpartyDiversityIndex", "slashEvents"]);
  const honored = object(stats.honoredManifestRate, ["rate", "honoredCount", "eligibleCount", "honoredWeight", "eligibleWeight"]);
  const capacity = object(stats.capacityCheckReliability, ["rate", "successCount", "missCount", "successWeight", "eligibleWeight"]);
  const completions = object(stats.attestedCompletions, ["count", "decayedWeight"]);
  const diversity = object(stats.counterpartyDiversityIndex, ["index", "counterpartyWeight", "completionWeight"]);
  const slashes = object(stats.slashEvents, ["count", "decayedWeight"]);
  const policy = object(item.policy, ["accrualDelayHours", "decayHalfLifeDays", "governsMatching", "computedAt"]);
  if (policy.accrualDelayHours !== PARAMS.disclosure.accrualDelayHours || policy.decayHalfLifeDays !== PARAMS.disclosure.decayHalfLifeDays || policy.governsMatching !== false) invalid();
  return Object.freeze({
    schema: "caravan.disclosure.v1",
    agentId,
    identity: Object.freeze({ tier: identity.tier, skills: Object.freeze(identity.skills.map(skill).map(({ id, name }) => Object.freeze({ id, name }))) }),
    stats: Object.freeze({
      honoredManifestRate: Object.freeze({ rate: ratio(honored.rate), honoredCount: integer2(honored.honoredCount), eligibleCount: integer2(honored.eligibleCount), honoredWeight: finite(honored.honoredWeight), eligibleWeight: finite(honored.eligibleWeight) }),
      attestedCompletions: Object.freeze({ count: integer2(completions.count), decayedWeight: finite(completions.decayedWeight) }),
      capacityCheckReliability: Object.freeze({ rate: ratio(capacity.rate), successCount: integer2(capacity.successCount), missCount: integer2(capacity.missCount), successWeight: finite(capacity.successWeight), eligibleWeight: finite(capacity.eligibleWeight) }),
      counterpartyDiversityIndex: Object.freeze({ index: diversity.index === null ? null : finite(diversity.index, 0, 511), counterpartyWeight: finite(diversity.counterpartyWeight), completionWeight: finite(diversity.completionWeight) }),
      slashEvents: Object.freeze({ count: integer2(slashes.count), decayedWeight: finite(slashes.decayedWeight) })
    }),
    policy: Object.freeze({ accrualDelayHours: PARAMS.disclosure.accrualDelayHours, decayHalfLifeDays: PARAMS.disclosure.decayHalfLifeDays, governsMatching: false, computedAt: timestamp(policy.computedAt) })
  });
}
function pricePoint(value) {
  const item = object(value, ["date", "discountBps", "poolSizeBand"]);
  const date = string(item.date, /^\d{4}-\d{2}-\d{2}$/, 10);
  const parsedDate = Date.parse(`${date}T00:00:00.000Z`);
  if (!Number.isFinite(parsedDate) || new Date(parsedDate).toISOString().slice(0, 10) !== date) invalid();
  const discountBps = string(item.discountBps, CANONICAL_INT, 83);
  const band = object(item.poolSizeBand, ["minInclusive", "maxInclusive"]);
  const minText = string(band.minInclusive, CANONICAL_UINT, 78);
  const maxText = string(band.maxInclusive, CANONICAL_UINT, 78);
  const min = BigInt(minText);
  const max = BigInt(maxText);
  if (min < 1n || (min & min - 1n) !== 0n || max !== min * 2n - 1n) invalid();
  return Object.freeze({ date, discountBps, poolSizeBand: Object.freeze({ minInclusive: minText, maxInclusive: maxText }) });
}
function parsePriceHistory(value, productId) {
  const item = object(value, ["schema", "productId", "points", "nextCursor"]);
  if (item.schema !== "caravan.clearing-price-history.v1" || item.productId !== productId || !Array.isArray(item.points) || item.points.length > 1e3) invalid();
  const points = Object.freeze(item.points.map(pricePoint));
  for (let index = 1; index < points.length; index += 1) if (points[index - 1].date > points[index].date) invalid();
  const nextCursor = item.nextCursor === null ? null : string(item.nextCursor, CURSOR, 68);
  return Object.freeze({ schema: "caravan.clearing-price-history.v1", productId, points, nextCursor });
}

// packages/sdk/src/client/client.ts
function segment(value, name) {
  const control = [...value].some((character) => {
    const code = character.charCodeAt(0);
    return code <= 31 || code === 127;
  });
  if (value.length < 1 || value.length > 256 || control || value === "." || value === "..") {
    throw new CaravanInputError(`${name} is invalid`);
  }
  try {
    return encodeURIComponent(value);
  } catch {
    throw new CaravanInputError(`${name} is invalid`);
  }
}
function normalizedDomainOrigin(value) {
  let url;
  try {
    url = new URL(value);
  } catch {
    throw new CaravanInputError("domainOrigin must be an absolute HTTPS origin");
  }
  if (url.protocol !== "https:" || url.username || url.password || url.port || url.pathname !== "/" || url.search || url.hash) throw new CaravanInputError("domainOrigin must be an absolute HTTPS origin");
  return url.origin;
}
var DEFAULT_ENDPOINTS = Object.freeze({
  agentCard: "/v1/identity/agent-card",
  domainProof: "/v1/identity/domain-proof",
  intents: "/v1/intents",
  intentResult: (intentId) => `/v1/intents/${segment(intentId, "intentId")}/result`,
  intentFinalize: (intentId) => `/v1/intents/${segment(intentId, "intentId")}/finalize`,
  offers: "/v1/offers",
  poolReveal: (poolId) => `/v1/pools/${segment(poolId, "poolId")}/reveal`,
  manifestReveal: (manifestId) => `/v1/manifests/${segment(manifestId, "manifestId")}/reveal`,
  manifest: (manifestId) => `/v1/manifests/${segment(manifestId, "manifestId")}/reveal`,
  commitments: "/v1/commitments",
  attestations: "/v1/attestations",
  disclosure: (agentId) => `/v1/agents/${segment(agentId, "agentId")}/disclosure`,
  priceHistory: "/v1/clearing-price-history"
});
function endpoints(overrides) {
  return { ...DEFAULT_ENDPOINTS, ...overrides };
}
function commitmentWire(input, signature) {
  const commitment = input.commitment;
  return {
    commitment: {
      ...commitment,
      qty: commitment.qty.toString(),
      unitPrice: commitment.unitPrice.toString(),
      expiry: commitment.expiry.toString()
    },
    signature
  };
}
async function waitForPollingDelay(delay, milliseconds, signal) {
  return awaitOperation(signal, () => delay(milliseconds, signal));
}
function abortableDelay(milliseconds, signal) {
  if (signal?.aborted === true) return Promise.reject(new CaravanTimeoutError("Caravan request was aborted"));
  return new Promise((resolve, reject) => {
    let settled = false;
    const timer = setTimeout(() => finish(resolve), milliseconds);
    const finish = (callback) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      signal?.removeEventListener("abort", onAbort);
      callback();
    };
    const onAbort = () => finish(() => reject(new CaravanTimeoutError("Caravan request was aborted")));
    signal?.addEventListener("abort", onAbort, { once: true });
    if (signal?.aborted === true) {
      onAbort();
    }
  });
}
function cancelResponseBody(response) {
  try {
    const cancellation = response.body?.cancel();
    if (cancellation !== void 0) void cancellation.catch(() => void 0);
  } catch {
  }
}
var CaravanClient = class {
  transport;
  endpoints;
  delay;
  now;
  bondAdapter;
  poolChecks = /* @__PURE__ */ new WeakSet();
  constructor(options) {
    this.transport = new HttpTransport(options);
    this.endpoints = endpoints(options.endpoints);
    this.delay = options.delay ?? abortableDelay;
    this.now = options.now ?? (() => /* @__PURE__ */ new Date());
    this.bondAdapter = options.bondAdapter;
  }
  operation(signal, operation) {
    return runClientOperation(this.transport.requestTimeoutMs, signal, operation);
  }
  async onboardAgentCardCore(card, signal) {
    const value = (await this.transport.request(this.endpoints.agentCard, {
      method: "POST",
      body: card,
      acceptedStatuses: [200, 201],
      signal
    })).data;
    return parseAgentCardOnboarding(value);
  }
  async proveDomainCore(origin2, signal) {
    const expectedOrigin = normalizedDomainOrigin(origin2);
    const value = (await this.transport.request(this.endpoints.domainProof, {
      method: "POST",
      body: { origin: expectedOrigin },
      acceptedStatuses: [200],
      signal
    })).data;
    const result = parseDomainProof(value);
    if (result.origin !== expectedOrigin) throw new CaravanResponseError();
    return result;
  }
  async checkPoolsCore(intentId, signal) {
    const response = await this.transport.request(this.endpoints.intentResult(intentId), {
      acceptedStatuses: [200, 202],
      signal
    });
    const result = parseIntentResult(response.data, intentId);
    if (response.response.status === 202 !== (result.status === "pending")) throw new CaravanResponseError();
    const checked = Object.freeze({ result, checkedAt: this.now().toISOString() });
    this.poolChecks.add(checked);
    return checked;
  }
  deployBondCore(input, signal) {
    return awaitOperation(signal, () => deployBond(this.bondAdapter, input, signal));
  }
  depositBondCore(input, signal) {
    return awaitOperation(signal, () => depositBond(this.bondAdapter, input, signal));
  }
  settleBondCore(input, signal) {
    return awaitOperation(signal, () => settleBond(this.bondAdapter, input, signal));
  }
  async onboardAgentCard(card, signal) {
    return this.operation(signal, (operationSignal) => this.onboardAgentCardCore(card, operationSignal));
  }
  async proveDomain(origin2, signal) {
    return this.operation(signal, (operationSignal) => this.proveDomainCore(origin2, operationSignal));
  }
  async onboardSeller(input) {
    return this.operation(input.signal, async (signal) => {
      const card = await this.onboardAgentCardCore(input.card, signal);
      const domain = await this.proveDomainCore(input.domainOrigin, signal);
      if (card.identityId !== domain.identityId) throw new CaravanResponseError();
      return { card, domain };
    });
  }
  async postIntent(intent, options = {}) {
    return this.operation(options.signal, async (signal) => {
      const normalizedIntent = normalizeIntentInput(intent);
      const utcDay = this.now().toISOString().slice(0, 10);
      const proof = options.proof ?? await solveIntentPow({
        intent: normalizedIntent,
        utcDay,
        maxAttempts: options.maxPowAttempts,
        signal
      });
      const value = (await this.transport.request(this.endpoints.intents, {
        method: "POST",
        body: normalizedIntent,
        headers: { "x-caravan-pow": proof },
        acceptedStatuses: [201],
        signal
      })).data;
      return parseAcceptedIntent(value);
    });
  }
  async checkPools(intentId, signal) {
    return this.operation(signal, (operationSignal) => this.checkPoolsCore(intentId, operationSignal));
  }
  /** Explicitly make an owner-scoped, still-pending no-match intent terminal. */
  async finalizeIntent(intentId, signal) {
    return this.operation(signal, async (operationSignal) => {
      const data = (await this.transport.request(this.endpoints.intentFinalize(intentId), {
        method: "POST",
        body: {},
        acceptedStatuses: [200],
        signal: operationSignal
      })).data;
      const result = parseIntentResult(data, intentId);
      if (result.status !== "failed") throw new CaravanResponseError();
      return result;
    });
  }
  async getMatchResult(intentId, options = {}) {
    return this.operation(options.signal, async (signal) => {
      const maxAttempts = options.maxAttempts ?? 30;
      const intervalMs = options.intervalMs ?? 2e3;
      if (!Number.isSafeInteger(maxAttempts) || maxAttempts < 1 || maxAttempts > 1e3) {
        throw new CaravanInputError("maxAttempts must be an integer from 1 through 1000");
      }
      if (!Number.isSafeInteger(intervalMs) || intervalMs < 0 || intervalMs > 6e4) {
        throw new CaravanInputError("intervalMs must be an integer from 0 through 60000");
      }
      let trustedInitial = false;
      let initial;
      if (options.initial === void 0) {
        const checked = await this.checkPoolsCore(intentId, signal);
        trustedInitial = true;
        initial = checked.result;
      } else if (options.initial !== null && typeof options.initial === "object" && Object.prototype.hasOwnProperty.call(options.initial, "result")) {
        trustedInitial = this.poolChecks.has(options.initial);
        initial = options.initial.result;
      } else {
        initial = options.initial;
      }
      if (initial !== null && typeof initial === "object" && "intentId" in initial && initial.intentId !== intentId) throw new CaravanInputError("initial match result belongs to another intent");
      let result = parseIntentResult(initial, intentId);
      if (result.status !== "pending" && !trustedInitial) {
        throw new CaravanInputError("terminal initial match result must come from this client");
      }
      for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
        if (result.status !== "pending") return result;
        if (attempt === maxAttempts) break;
        await waitForPollingDelay(this.delay, intervalMs, signal);
        result = (await this.checkPoolsCore(intentId, signal)).result;
      }
      throw new CaravanInputError("match result remained pending after maxAttempts");
    });
  }
  async postOffer(offer, signal) {
    return this.operation(signal, async (operationSignal) => {
      const value = (await this.transport.request(this.endpoints.offers, {
        method: "POST",
        body: offer,
        acceptedStatuses: [200, 201],
        signal: operationSignal
      })).data;
      return parseAcceptedOffer(value);
    });
  }
  async payReveal(input) {
    return this.operation(input.signal, async (signal) => {
      if (input.manifestId === void 0 === (input.poolId === void 0)) {
        throw new CaravanInputError("payReveal requires exactly one manifestId or poolId");
      }
      if (input.payment.rail === "mainnet" || input.payment.rail === "stripe") {
        throw new CaravanPhaseGateError(input.payment.rail);
      }
      if (input.payment.paymentSignature.length < 1 || input.payment.paymentSignature.length > 24e3 || !isCanonicalBase64(input.payment.paymentSignature)) {
        throw new CaravanInputError("paymentSignature is invalid");
      }
      const path = input.manifestId === void 0 ? this.endpoints.poolReveal(input.poolId) : this.endpoints.manifestReveal(input.manifestId);
      const response = await this.transport.request(path, {
        headers: { "payment-signature": input.payment.paymentSignature },
        acceptedStatuses: [200],
        signal
      });
      const result = parseReveal(response.data, response.response.headers.get("payment-response"));
      if (input.poolId !== void 0 && result.manifest.poolId !== input.poolId || input.manifestId !== void 0 && result.manifestId !== input.manifestId) throw new CaravanResponseError();
      return result;
    });
  }
  async getManifest(input) {
    return this.operation(input.signal, async (signal) => {
      const value = (await this.transport.request(this.endpoints.manifest(input.manifestId), {
        acceptedStatuses: [200],
        signal
      })).data;
      const result = parseManifest2(value);
      if (result.manifestId !== input.manifestId) throw new CaravanResponseError();
      return result;
    });
  }
  async deployBond(input, signal) {
    return this.operation(signal, (operationSignal) => this.deployBondCore(input, operationSignal));
  }
  async depositBond(input, signal) {
    return this.operation(signal, (operationSignal) => this.depositBondCore(input, operationSignal));
  }
  async settleBond(input, signal) {
    return this.operation(signal, (operationSignal) => this.settleBondCore(input, operationSignal));
  }
  async commit(input) {
    return this.operation(input.signal, async (signal) => {
      const signature = await awaitOperation(signal, () => signCommitment(input.signer, input.commitment));
      throwIfOperationAborted(signal);
      const verified = await awaitOperation(signal, () => verifyCommitment(input.commitment, signature, "buyer"));
      if (!verified) throw new CaravanInputError("commitment signature does not match the declared buyer");
      throwIfOperationAborted(signal);
      const result = { signature, commitment: input.commitment };
      if (input.bond?.deploy !== void 0) result.bondDeployment = await this.deployBondCore(input.bond.deploy, signal);
      if (input.bond?.deposit !== void 0) result.bondDeposit = await this.depositBondCore(input.bond.deposit, signal);
      throwIfOperationAborted(signal);
      if (input.publish === true) {
        const publication = (await this.transport.request(this.endpoints.commitments, {
          method: "POST",
          body: commitmentWire(input, signature),
          acceptedStatuses: [200, 201],
          signal
        })).data;
        result.publication = parseCommitmentPublication(publication);
      }
      return result;
    });
  }
  async attest(attestation, signer, signal) {
    return this.operation(signal, async (operationSignal) => {
      const signature = await awaitOperation(operationSignal, () => signAttestation(signer, attestation));
      throwIfOperationAborted(operationSignal);
      const value = (await this.transport.request(this.endpoints.attestations, {
        method: "POST",
        body: { attestation, signature },
        acceptedStatuses: [200, 201],
        signal: operationSignal
      })).data;
      return parseAttestation(value);
    });
  }
  async getDisclosure(agentId, signal) {
    return this.operation(signal, async (operationSignal) => {
      if (!/^[0-9A-HJKMNP-TV-Z]{26}$/.test(agentId)) {
        throw new CaravanInputError("agentId must be a canonical ULID");
      }
      const value = (await this.transport.request(this.endpoints.disclosure(agentId), {
        acceptedStatuses: [200],
        identity: false,
        signal: operationSignal
      })).data;
      return parseDisclosure(value, agentId);
    });
  }
  async getPriceHistory(query, signal) {
    return this.operation(signal, async (operationSignal) => {
      if (query.productId.length < 1 || query.productId.length > 256 || query.productId !== query.productId.normalize("NFC")) throw new CaravanInputError("productId must be non-empty NFC text of at most 256 characters");
      if (query.limit !== void 0 && (!Number.isSafeInteger(query.limit) || query.limit < 1 || query.limit > 1e3)) {
        throw new CaravanInputError("limit must be an integer from 1 through 1000");
      }
      if (query.cursor !== void 0 && !/^cph_[0-9a-f]{64}$/.test(query.cursor)) {
        throw new CaravanInputError("cursor is invalid");
      }
      const params = new URLSearchParams({ productId: query.productId });
      if (query.limit !== void 0) params.set("limit", String(query.limit));
      if (query.cursor !== void 0) params.set("cursor", query.cursor);
      const value = (await this.transport.request(`${this.endpoints.priceHistory}?${params}`, {
        acceptedStatuses: [200],
        identity: false,
        signal: operationSignal
      })).data;
      return parsePriceHistory(value, query.productId);
    });
  }
  async checkCapacity(endpoint2, options = {}, signal) {
    return runClientOperation(Math.max(this.transport.requestTimeoutMs, CAPACITY_CHECK_TIMEOUT_MS), signal, async (operationSignal) => {
      const fetcher = options.fetch ?? globalThis.fetch.bind(globalThis);
      const controlledFetch = (input, init = {}) => {
        const combinedSignal = init.signal == null ? operationSignal : AbortSignal.any([operationSignal, init.signal]);
        return awaitOperation(
          operationSignal,
          () => fetcher(input, { ...init, signal: combinedSignal }),
          cancelResponseBody
        );
      };
      const requestSigner = options.requestSigner === void 0 ? void 0 : {
        address: options.requestSigner.address,
        signMessage: (args) => awaitOperation(
          operationSignal,
          () => options.requestSigner.signMessage(args)
        )
      };
      return awaitOperation(operationSignal, () => runCapacityConformance(endpoint2, {
        ...options,
        fetch: controlledFetch,
        requestSigner
      }));
    });
  }
};
function createCaravanClient(options) {
  return new CaravanClient(options);
}

// packages/skill/src/savings.ts
var NO_SAVINGS_EVIDENCE = "No qualifying public Caravan price history is available for this exact product, so no savings figure is shown.";
function exactRecord(value, keys) {
  if (value === null || typeof value !== "object" || Array.isArray(value)) return void 0;
  const record = value;
  const actual = Object.keys(record);
  return actual.length === keys.length && keys.every((key) => Object.prototype.hasOwnProperty.call(record, key)) ? record : void 0;
}
function canonicalDay(value) {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/u.test(value)) return void 0;
  const instant = /* @__PURE__ */ new Date(`${value}T00:00:00.000Z`);
  return Number.isFinite(instant.getTime()) && instant.toISOString().slice(0, 10) === value ? value : void 0;
}
function canonicalUint(value, maximum) {
  if (typeof value !== "string" || !/^(0|[1-9][0-9]{0,14})$/u.test(value)) return void 0;
  const parsed = BigInt(value);
  return maximum !== void 0 && parsed > maximum ? void 0 : value;
}
function validPoint(value) {
  const point = exactRecord(value, ["date", "discountBps", "poolSizeBand"]);
  if (point === void 0) return void 0;
  const band = exactRecord(point.poolSizeBand, ["minInclusive", "maxInclusive"]);
  if (band === void 0) return void 0;
  const date = canonicalDay(point.date);
  const discountBps = canonicalUint(point.discountBps, 10000n);
  const minInclusive = canonicalUint(band.minInclusive);
  const maxInclusive = canonicalUint(band.maxInclusive);
  if (date === void 0 || discountBps === void 0 || minInclusive === void 0 || maxInclusive === void 0 || BigInt(minInclusive) > BigInt(maxInclusive)) return void 0;
  return { date, discountBps, poolSizeBand: { minInclusive, maxInclusive } };
}
function renderSavingsEvidence(evidence, exactProductId) {
  const envelope = exactRecord(evidence, ["visibility", "fetchedInSameConversation", "response"]);
  if (envelope === void 0 || envelope.visibility !== "public" || envelope.fetchedInSameConversation !== true) return NO_SAVINGS_EVIDENCE;
  const response = exactRecord(envelope.response, ["schema", "productId", "points", "nextCursor"]);
  if (response === void 0 || response.schema !== "caravan.clearing-price-history.v1" || typeof response.productId !== "string" || response.productId !== exactProductId || response.nextCursor !== null || !Array.isArray(response.points) || response.points.length < 1 || response.points.length > 1e3) return NO_SAVINGS_EVIDENCE;
  const points = response.points.map(validPoint);
  if (points.some((point) => point === void 0)) return NO_SAVINGS_EVIDENCE;
  const rendered = points.map((point) => `${point.date}: ${point.discountBps} basis points at public pool-size band ${point.poolSizeBand.minInclusive}–${point.poolSizeBand.maxInclusive}`);
  return `Public Caravan clearing-price history for ${exactProductId} (${rendered.join("; ")}). Historical evidence only; it is not a promise of a future result.`;
}

// packages/skill/src/runtime.ts
var PUBLISHED_COMMANDS = Object.freeze([
  "check-pools",
  "post-intent",
  "status",
  "reveal",
  "commit",
  "attest",
  "post-offer",
  "onboard-seller",
  "conformance"
]);
var INTENT_CONSENT_SCHEMA = "caravan.intent-consent.v1";
var ACTION_CONSENT_SCHEMA = "caravan.action-consent.v1";
var EXECUTION_CONTEXT_SCHEMA = "caravan.skill-execution-context.v1";
var MAX_UINT256 = (1n << 256n) - 1n;
function defaultClient(manifest2) {
  return createCaravanClient({
    baseUrl: manifest2.apiBaseUrl,
    authorizationCapability: manifest2.authorizationCapability,
    now: () => new Date(manifest2.now)
  });
}
var DEFAULT_DEPENDENCIES = Object.freeze({ createClient: defaultClient });
function intentInput(value) {
  const item = exactObject(value, [
    "productId",
    "qty",
    "unitCeiling",
    "window",
    "region",
    "settlementPrefs",
    "privacy"
  ], [], "intent");
  const window = exactObject(item.window, ["start", "end"], [], "intent.window");
  const start = text(window.start, "intent.window.start", void 0, 64);
  const end = text(window.end, "intent.window.end", void 0, 64);
  if (!Number.isFinite(Date.parse(start)) || !Number.isFinite(Date.parse(end)) || Date.parse(start) >= Date.parse(end)) {
    throw new SkillError("INVALID_INPUT", "intent window is invalid");
  }
  if (!Array.isArray(item.settlementPrefs) || item.settlementPrefs.length < 1 || item.settlementPrefs.length > 16) {
    throw new SkillError("INVALID_INPUT", "intent.settlementPrefs is invalid");
  }
  const productId = text(item.productId, "intent.productId", void 0, 256);
  const region = text(item.region, "intent.region", void 0, 128);
  if (productId.trim() !== productId || region.trim() !== region) {
    throw new SkillError("INVALID_INPUT", "intent text must already match the frozen SDK's transmitted form");
  }
  const settlementPrefs = item.settlementPrefs.map((entry) => {
    const parsed = text(entry, "intent.settlementPrefs entry", void 0, 64);
    if (parsed.trim() !== parsed) {
      throw new SkillError("INVALID_INPUT", "intent settlement preferences must already match the frozen SDK's transmitted form");
    }
    return parsed;
  });
  if (new Set(settlementPrefs).size !== settlementPrefs.length) {
    throw new SkillError("INVALID_INPUT", "intent.settlementPrefs must be unique");
  }
  if (item.privacy !== "normal" && item.privacy !== "private") {
    throw new SkillError("INVALID_INPUT", "intent.privacy is invalid");
  }
  return Object.freeze({
    productId,
    qty: integer(item.qty, "intent.qty", 1),
    unitCeiling: integer(item.unitCeiling, "intent.unitCeiling", 1),
    window: Object.freeze({ start, end }),
    region,
    settlementPrefs: Object.freeze(settlementPrefs),
    privacy: item.privacy
  });
}
function baseExecutionContext(manifest2) {
  return {
    schema: EXECUTION_CONTEXT_SCHEMA,
    manifestSchema: manifest2.schema,
    environment: manifest2.environment,
    network: manifest2.network,
    synthetic: manifest2.synthetic,
    apiBaseUrl: manifest2.apiBaseUrl,
    identityId: manifest2.identityId,
    now: manifest2.now,
    credentialBindingSha256: sha256(manifest2.authorizationCapability)
  };
}
function reviewBaseExecutionContext(manifest2) {
  return {
    schema: EXECUTION_CONTEXT_SCHEMA,
    manifestSchema: manifest2.schema,
    environment: manifest2.environment,
    network: manifest2.network,
    synthetic: manifest2.synthetic,
    apiBaseUrl: manifest2.apiBaseUrl,
    now: manifest2.now
  };
}
function actionExecutionContext(command, manifest2) {
  const base = baseExecutionContext(manifest2);
  switch (command) {
    case "reveal":
      return {
        ...base,
        paymentEnvelopeBindingSha256: sha256(canonicalJson({
          rail: manifest2.payment.rail,
          quote: manifest2.payment.quote
        }))
      };
    case "commit":
    case "attest":
      return {
        ...base,
        signerBindingSha256: sha256(
          createIdentity({ privateKey: manifest2.privateKey, identityId: manifest2.identityId }).address.toLowerCase()
        )
      };
    case "onboard-seller":
      return { ...base, domainOrigin: manifest2.urls.domainOrigin };
    case "conformance":
      return {
        ...base,
        capacityEndpoint: manifest2.urls.capacityEndpoint,
        signerBindingSha256: sha256(
          createIdentity({ privateKey: manifest2.privateKey, identityId: manifest2.identityId }).address.toLowerCase()
        )
      };
    case "post-offer":
      return base;
  }
}
function reviewExecutionContext(command, manifest2) {
  const base = reviewBaseExecutionContext(manifest2);
  switch (command) {
    case "reveal":
      return {
        ...base,
        paymentRail: manifest2.payment.rail,
        feeQuoteSha256: sha256(canonicalJson(manifest2.payment.quote))
      };
    case "onboard-seller":
      return { ...base, domainOrigin: manifest2.urls.domainOrigin };
    case "conformance":
      return { ...base, capacityEndpoint: manifest2.urls.capacityEndpoint };
    case "commit":
    case "attest":
    case "post-offer":
      return base;
  }
}
function consentDigest(manifest2, value) {
  const intent = intentInput(value);
  return `sha256:${sha256(canonicalJson({
    schema: INTENT_CONSENT_SCHEMA,
    executionContext: baseExecutionContext(manifest2),
    intent
  }))}`;
}
function renderedIntent(intent) {
  return {
    productId: intent.productId,
    qty: intent.qty,
    unitCeiling: intent.unitCeiling,
    window: intent.window,
    region: intent.region,
    settlementPrefs: intent.settlementPrefs,
    privacy: intent.privacy
  };
}
function prepareIntentConsent(manifest2, value) {
  const intent = intentInput(value);
  return {
    schema: INTENT_CONSENT_SCHEMA,
    proposedIntent: renderedIntent(intent),
    executionContext: reviewBaseExecutionContext(manifest2),
    consentDigest: consentDigest(manifest2, intent),
    consentRequired: true,
    freeActions: ["post non-exclusive intent", "check current pool status"],
    notice: "Posting is non-exclusive and does not prevent buying elsewhere before a later explicit commitment."
  };
}
function intentResult(check) {
  const result = check.result;
  if (result.status === "pending") {
    return {
      status: "pending",
      checkedAt: check.checkedAt,
      message: "This intent remains pending; no current pool is shown. It remains non-exclusive.",
      laterRecheck: "Run status once with this intent ID when you choose; no background polling is active."
    };
  }
  if (result.status === "matched") {
    return {
      status: "matched",
      checkedAt: check.checkedAt,
      pool: result.pool,
      message: "A current Caravan pool matched this intent. Review fees and terms before reveal or commitment."
    };
  }
  return {
    status: "failed",
    checkedAt: check.checkedAt,
    reasons: result.reasons,
    ...result.nearPool === void 0 ? { nearPoolEvidence: "unavailable" } : { nearPoolEvidence: "returned", nearPool: result.nearPool },
    message: "No current pool matched this terminal result; this does not describe future availability.",
    laterRecheck: "A new intent requires a new exact proposal and affirmative consent."
  };
}
function statusInput(value) {
  const item = exactObject(value, ["intentId"], ["productId", "includePriceHistory"], "status input");
  if (item.includePriceHistory !== void 0 && typeof item.includePriceHistory !== "boolean") {
    throw new SkillError("INVALID_INPUT", "includePriceHistory must be boolean");
  }
  const includePriceHistory = item.includePriceHistory === true;
  if (includePriceHistory && item.productId === void 0) {
    throw new SkillError("MISSING_MANIFEST_INPUT", "productId is required when price history is requested");
  }
  return {
    intentId: text(item.intentId, "intentId", /^[0-9A-HJKMNP-TV-Z]{26}$/u, 26),
    ...item.productId === void 0 ? {} : { productId: text(item.productId, "productId", void 0, 256) },
    includePriceHistory
  };
}
async function checkStatus(client, value) {
  const input = statusInput(value);
  const checked = await client.checkPools(input.intentId);
  let evidence;
  if (input.includePriceHistory) {
    try {
      evidence = await client.getPriceHistory({ productId: input.productId, limit: 1e3 });
    } catch {
      evidence = void 0;
    }
  }
  return {
    ...intentResult(checked),
    ...input.includePriceHistory ? {
      savingsEvidence: renderSavingsEvidence(
        evidence === void 0 ? void 0 : { visibility: "public", fetchedInSameConversation: true, response: evidence },
        input.productId
      )
    } : {}
  };
}
async function postIntent(manifest2, value, dependencies) {
  const item = exactObject(value, ["action", "intent"], ["consent"], "post-intent input");
  const intent = intentInput(item.intent);
  if (item.action === "propose") return prepareIntentConsent(manifest2, intent);
  if (item.action === "decline" || item.action === "silence") {
    if (item.consent !== void 0) throw new SkillError("INVALID_INPUT", "decline or silence cannot carry consent");
    return {
      submitted: false,
      status: item.action === "decline" ? "declined" : "no-response",
      message: "No intent was posted and no follow-up action was taken."
    };
  }
  if (item.action !== "submit") throw new SkillError("INVALID_INPUT", "post-intent action is invalid");
  const consent = exactObject(item.consent, ["affirmative", "digest"], [], "consent");
  if (consent.affirmative !== true) throw new SkillError("CONSENT_REQUIRED", "affirmative consent is required");
  const expected = consentDigest(manifest2, intent);
  if (consent.digest !== expected) throw new SkillError("CONSENT_MISMATCH", "consent does not bind the unchanged intent");
  const client = dependencies.createClient(manifest2);
  const accepted = await client.postIntent(intent);
  const checked = await client.checkPools(accepted.id);
  return {
    submitted: true,
    consentDigest: expected,
    intent: {
      id: accepted.id,
      status: accepted.status,
      intentHash: accepted.intentHash,
      identityTier: accepted.identityTier,
      createdAt: accepted.createdAt
    },
    poolCheck: intentResult(checked),
    nonExclusive: true,
    backgroundPolling: false,
    manifestEnvironment: manifest2.environment
  };
}
function revealInput(value) {
  const item = exactObject(value, [], ["poolId", "manifestId"], "reveal input");
  if (item.poolId === void 0 === (item.manifestId === void 0)) {
    throw new SkillError("INVALID_INPUT", "reveal requires exactly one poolId or manifestId");
  }
  return item.poolId === void 0 ? { manifestId: text(item.manifestId, "manifestId", /^[0-9A-HJKMNP-TV-Z]{26}$/u, 26) } : { poolId: text(item.poolId, "poolId", /^[A-Za-z0-9_-]{1,128}$/u, 128) };
}
function validateRevealQuote(manifest2, input) {
  const target = manifest2.payment.quote.target;
  const matches = input.poolId === void 0 ? target.kind === "manifest" && target.id === input.manifestId : target.kind === "pool" && target.id === input.poolId;
  if (!matches) throw new SkillError("INVALID_MANIFEST", "reveal quote does not match the exact reveal target");
}
async function reveal(manifest2, client, value) {
  const input = revealInput(value);
  validateRevealQuote(manifest2, input);
  const result = await client.payReveal({ ...input, payment: manifest2.payment });
  const settlementContacts = result.manifest.roster.flatMap((member) => member.contactEndpoint === void 0 ? [] : [{ role: member.role, endpoint: member.contactEndpoint }]);
  return {
    manifestId: result.manifestId,
    poolId: result.manifest.poolId,
    batchHash: result.batchHash,
    rosterSize: result.manifest.roster.length,
    revealDeadlineUnixSeconds: result.manifest.revealDeadlineUnixSeconds,
    ...settlementContacts.length === 0 ? {} : { settlementContacts },
    paymentReceiptAccepted: result.paymentReceipt !== null,
    feeQuote: {
      source: "task-local-phase0-fixture",
      rail: manifest2.payment.rail,
      role: manifest2.payment.quote.role,
      amountUSD: manifest2.payment.quote.amountUSD,
      currency: manifest2.payment.quote.currency,
      quotedAt: manifest2.payment.quote.quotedAt,
      expiresAt: manifest2.payment.quote.expiresAt,
      target: manifest2.payment.quote.target
    },
    notice: "The reveal fee is charged for the manifest, regardless of the downstream deal outcome."
  };
}
async function matchStatus(manifest2, client, value) {
  const item = exactObject(value, ["intentId"], [], "status input");
  const intentId = text(item.intentId, "intentId", /^[0-9A-HJKMNP-TV-Z]{26}$/u, 26);
  try {
    const result = await client.getMatchResult(intentId, { maxAttempts: 1, intervalMs: 0 });
    return intentResult({ result, checkedAt: manifest2.now });
  } catch (error) {
    if (error instanceof Error && error.message === "match result remained pending after maxAttempts") {
      return intentResult({ result: { intentId, status: "pending" }, checkedAt: manifest2.now });
    }
    throw error;
  }
}
function commitmentRequest(value) {
  const item = exactObject(value, ["tier", "commitment", "publish"], [], "commit input");
  if (item.tier !== "signed" || typeof item.publish !== "boolean") {
    throw new SkillError("INVALID_INPUT", "commit supports the signed tier and an explicit publish boolean");
  }
  const source = exactObject(item.commitment, [
    "manifestHash",
    "poolId",
    "buyer",
    "seller",
    "productId",
    "qty",
    "unitPrice",
    "settlementMethod",
    "expiry",
    "termsHash"
  ], [], "commitment");
  const uint = (entry, label) => {
    const parsed = text(entry, label, /^(0|[1-9][0-9]{0,77})$/u, 78);
    if (BigInt(parsed) > MAX_UINT256) throw new SkillError("INVALID_INPUT", `${label} exceeds uint256`);
    return parsed;
  };
  return {
    tier: "signed",
    commitment: {
      manifestHash: text(source.manifestHash, "manifestHash", /^0x[0-9a-f]{64}$/u, 66),
      poolId: text(source.poolId, "poolId", /^[0-9A-HJKMNP-TV-Z]{26}$/u, 26),
      buyer: text(source.buyer, "buyer", /^0x[0-9a-fA-F]{40}$/u, 42),
      seller: text(source.seller, "seller", /^0x[0-9a-fA-F]{40}$/u, 42),
      productId: text(source.productId, "productId", void 0, 256),
      qty: uint(source.qty, "qty"),
      unitPrice: uint(source.unitPrice, "unitPrice"),
      settlementMethod: text(source.settlementMethod, "settlementMethod", void 0, 128),
      expiry: uint(source.expiry, "expiry"),
      termsHash: text(source.termsHash, "termsHash", /^0x[0-9a-f]{64}$/u, 66)
    },
    publish: item.publish
  };
}
function commitmentInput(value) {
  const input = commitmentRequest(value);
  return {
    commitment: {
      ...input.commitment,
      qty: BigInt(input.commitment.qty),
      unitPrice: BigInt(input.commitment.unitPrice),
      expiry: BigInt(input.commitment.expiry)
    },
    publish: input.publish
  };
}
function validateCommitmentSigner(manifest2, input) {
  const identity = createIdentity({ privateKey: manifest2.privateKey, identityId: manifest2.identityId });
  if (input.commitment.buyer.toLowerCase() !== identity.address.toLowerCase()) {
    throw new SkillError("INVALID_INPUT", "commitment buyer does not match the bounded signer");
  }
}
async function commit(manifest2, client, value) {
  const input = commitmentInput(value);
  const identity = createIdentity({ privateKey: manifest2.privateKey, identityId: manifest2.identityId });
  if (input.commitment.buyer.toLowerCase() !== identity.address.toLowerCase()) {
    throw new SkillError("INVALID_INPUT", "commitment buyer does not match the bounded signer");
  }
  const result = await client.commit({ commitment: input.commitment, signer: identity.account, publish: input.publish });
  return {
    tier: "signed",
    signatureCreated: true,
    published: result.publication !== void 0,
    publicationStatus: result.publication?.status ?? null,
    commitmentHash: result.publication?.commitmentHash ?? null
  };
}
function attestationInput(value) {
  const item = exactObject(value, ["manifestHash", "poolId", "role", "outcome"], ["realizedUnitPrice"], "attestation");
  if (item.role !== "buyer" && item.role !== "seller") throw new SkillError("INVALID_INPUT", "attestation role is invalid");
  if (item.outcome !== "completed" && item.outcome !== "seller_default" && item.outcome !== "buyer_default") {
    throw new SkillError("INVALID_INPUT", "attestation outcome is invalid");
  }
  let realizedUnitPrice;
  if (item.realizedUnitPrice !== void 0) {
    realizedUnitPrice = text(item.realizedUnitPrice, "realizedUnitPrice", /^(0|[1-9][0-9]{0,77})$/u, 78);
    if (BigInt(realizedUnitPrice) > MAX_UINT256) {
      throw new SkillError("INVALID_INPUT", "realizedUnitPrice exceeds uint256");
    }
    if (item.outcome !== "completed") {
      throw new SkillError("INVALID_INPUT", "default outcomes cannot carry a realized price");
    }
  }
  return {
    manifestHash: text(item.manifestHash, "manifestHash", /^0x[0-9a-f]{64}$/u, 66),
    poolId: text(item.poolId, "poolId", /^[0-9A-HJKMNP-TV-Z]{26}$/u, 26),
    role: item.role,
    outcome: item.outcome,
    ...realizedUnitPrice === void 0 ? {} : { realizedUnitPrice }
  };
}
async function attest(manifest2, client, value) {
  const identity = createIdentity({ privateKey: manifest2.privateKey, identityId: manifest2.identityId });
  const attestation = attestationInput(value);
  const result = await client.attest(attestation, identity.account);
  return {
    schema: result.schema,
    submission: result.submission,
    resolution: {
      status: result.resolution.status,
      effectiveOutcome: result.resolution.effectiveOutcome,
      priceStatus: result.resolution.priceStatus,
      factCount: result.resolution.factCount,
      memberCount: result.resolution.memberCount,
      completionCreditCount: result.resolution.completionCreditCount
    },
    signatureCreated: true
  };
}
async function postOffer(client, value) {
  const result = await client.postOffer(offerInput(value));
  return { id: result.id, status: result.status, offerHash: result.offerHash ?? null, createdAt: result.createdAt ?? null };
}
function boundedArray(value, label, minimum, maximum) {
  if (!Array.isArray(value) || value.length < minimum || value.length > maximum) {
    throw new SkillError("INVALID_INPUT", `${label} is invalid`);
  }
  return value;
}
function boundedTextArray(value, label, minimum, maximum, itemMaximum = 128) {
  const result = boundedArray(value, label, minimum, maximum).map((entry) => {
    const parsed = text(entry, `${label} entry`, void 0, itemMaximum);
    if (parsed.trim() !== parsed) throw new SkillError("INVALID_INPUT", `${label} entries must be canonical`);
    return parsed;
  });
  if (new Set(result).size !== result.length) throw new SkillError("INVALID_INPUT", `${label} entries must be unique`);
  return Object.freeze(result);
}
function canonicalUtc(value, label) {
  const parsed = text(value, label, /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{3})?Z$/u, 64);
  if (!Number.isFinite(Date.parse(parsed))) throw new SkillError("INVALID_INPUT", `${label} is invalid`);
  return parsed;
}
function offerInput(value, now) {
  const item = exactObject(value, [
    "sellerId",
    "productId",
    "tiers",
    "expiry",
    "maxOutstandingQty",
    "minCommittedQtyPerBindingTier",
    "regions",
    "substitutionPolicy",
    "taxShippingExclusions",
    "settlementMethods",
    "sellerBondLevel",
    "bindingFlag"
  ], [], "offer input");
  const tiers = boundedArray(item.tiers, "offer.tiers", 1, 32).map((entry, index) => {
    const tier = exactObject(entry, ["minQty", "unitPrice"], [], `offer.tiers[${index}]`);
    return Object.freeze({
      minQty: integer(tier.minQty, `offer.tiers[${index}].minQty`, 1),
      unitPrice: integer(tier.unitPrice, `offer.tiers[${index}].unitPrice`, 1)
    });
  });
  for (let index = 1; index < tiers.length; index += 1) {
    if (tiers[index].minQty <= tiers[index - 1].minQty) {
      throw new SkillError("INVALID_INPUT", "offer tiers must have strictly increasing minQty values");
    }
  }
  const expiry = canonicalUtc(item.expiry, "offer.expiry");
  if (now !== void 0 && Date.parse(expiry) <= Date.parse(now)) {
    throw new SkillError("INVALID_INPUT", "offer.expiry must be after manifest.now");
  }
  const maxOutstandingQty = integer(item.maxOutstandingQty, "offer.maxOutstandingQty", 1);
  const minCommittedQtyPerBindingTier = integer(
    item.minCommittedQtyPerBindingTier,
    "offer.minCommittedQtyPerBindingTier",
    1
  );
  if (minCommittedQtyPerBindingTier > maxOutstandingQty) {
    throw new SkillError("INVALID_INPUT", "offer minimum committed quantity exceeds its outstanding bound");
  }
  if (item.substitutionPolicy !== "none" && item.substitutionPolicy !== "equivalent" && item.substitutionPolicy !== "seller-approved") {
    throw new SkillError("INVALID_INPUT", "offer.substitutionPolicy is invalid");
  }
  if (item.bindingFlag !== "binding" && item.bindingFlag !== "indicative") {
    throw new SkillError("INVALID_INPUT", "offer.bindingFlag is invalid");
  }
  return Object.freeze({
    sellerId: text(item.sellerId, "offer.sellerId", /^[A-Za-z0-9._:-]{1,128}$/u, 128),
    productId: text(item.productId, "offer.productId", void 0, 256),
    tiers: Object.freeze(tiers),
    expiry,
    maxOutstandingQty,
    minCommittedQtyPerBindingTier,
    regions: boundedTextArray(item.regions, "offer.regions", 1, 32),
    substitutionPolicy: item.substitutionPolicy,
    taxShippingExclusions: boundedTextArray(item.taxShippingExclusions, "offer.taxShippingExclusions", 0, 32, 256),
    settlementMethods: boundedTextArray(item.settlementMethods, "offer.settlementMethods", 1, 16),
    sellerBondLevel: integer(item.sellerBondLevel, "offer.sellerBondLevel", 0),
    bindingFlag: item.bindingFlag
  });
}
function onboardingInput(value) {
  const item = exactObject(value, ["card"], [], "onboard-seller input");
  const source = exactObject(item.card, ["version", "name", "skills", "endpoints", "disclaimer"], ["description", "erc8004"], "agent card");
  if (source.version !== "1.0" || source.disclaimer !== SDK_DISCLAIMER) {
    throw new SkillError("INVALID_INPUT", "agent card version or disclaimer is invalid");
  }
  const skills = boundedArray(source.skills, "agent card skills", 1, 64).map((entry, index) => {
    const skill2 = exactObject(entry, ["id", "name"], ["description"], `agent card skill ${index}`);
    return Object.freeze({
      id: text(skill2.id, `agent card skill ${index} id`, /^[A-Za-z0-9._:-]{1,128}$/u, 128),
      name: text(skill2.name, `agent card skill ${index} name`, void 0, 256),
      ...skill2.description === void 0 ? {} : { description: text(skill2.description, `agent card skill ${index} description`, void 0, 2048) }
    });
  });
  if (new Set(skills.map((skill2) => skill2.id)).size !== skills.length) {
    throw new SkillError("INVALID_INPUT", "agent card skill IDs must be unique");
  }
  const endpoints2 = boundedArray(source.endpoints, "agent card endpoints", 1, 16).map((entry, index) => {
    const endpoint2 = exactObject(entry, ["protocol", "url"], [], `agent card endpoint ${index}`);
    if (endpoint2.protocol !== "a2a" && endpoint2.protocol !== "mcp" && endpoint2.protocol !== "https") {
      throw new SkillError("INVALID_INPUT", `agent card endpoint ${index} protocol is invalid`);
    }
    const rawUrl = text(endpoint2.url, `agent card endpoint ${index} url`, void 0, 2048);
    let parsed;
    try {
      parsed = new URL(rawUrl);
    } catch {
      throw new SkillError("INVALID_INPUT", `agent card endpoint ${index} url is invalid`);
    }
    if (parsed.protocol !== "https:" || parsed.username !== "" || parsed.password !== "" || parsed.hash !== "" || parsed.href !== rawUrl) throw new SkillError("INVALID_INPUT", `agent card endpoint ${index} url must be canonical HTTPS`);
    return Object.freeze({ protocol: endpoint2.protocol, url: rawUrl });
  });
  let erc8004;
  if (source.erc8004 !== void 0) {
    const claim = exactObject(source.erc8004, ["chainId", "registryAddress", "tokenId"], [], "agent card erc8004");
    erc8004 = Object.freeze({
      chainId: integer(claim.chainId, "agent card erc8004.chainId", 1),
      registryAddress: text(claim.registryAddress, "agent card erc8004.registryAddress", /^0x[0-9a-fA-F]{40}$/u, 42),
      tokenId: text(claim.tokenId, "agent card erc8004.tokenId", /^(0|[1-9][0-9]{0,77})$/u, 78)
    });
  }
  return {
    card: Object.freeze({
      version: "1.0",
      name: text(source.name, "agent card name", void 0, 256),
      ...source.description === void 0 ? {} : { description: text(source.description, "agent card description", void 0, 2048) },
      skills: Object.freeze(skills),
      endpoints: Object.freeze(endpoints2),
      disclaimer: SDK_DISCLAIMER,
      ...erc8004 === void 0 ? {} : { erc8004 }
    })
  };
}
async function onboardSeller(manifest2, client, value) {
  const item = onboardingInput(value);
  const result = await client.onboardSeller({ card: item.card, domainOrigin: manifest2.urls.domainOrigin });
  return {
    identityId: result.card.identityId,
    identityTier: result.card.identityTier,
    domainTier: result.domain.tier,
    domainOrigin: result.domain.origin
  };
}
function conformanceInput(value) {
  const item = exactObject(value, ["offerId", "qty", "manifestDraftHash", "nonce"], [], "conformance input");
  return {
    offerId: text(item.offerId, "offerId", /^[A-Za-z0-9._:-]{1,128}$/u, 128),
    qty: integer(item.qty, "qty", 1),
    manifestDraftHash: text(item.manifestDraftHash, "manifestDraftHash", /^0x[0-9a-f]{64}$/u, 66),
    nonce: text(item.nonce, "nonce", /^0x[0-9a-f]{64}$/u, 66)
  };
}
async function conformance(manifest2, client, value) {
  const item = conformanceInput(value);
  const identity = createIdentity({ privateKey: manifest2.privateKey, identityId: manifest2.identityId });
  const result = await client.checkCapacity(manifest2.urls.capacityEndpoint, {
    request: {
      offerId: item.offerId,
      qty: item.qty,
      manifestDraftHash: item.manifestDraftHash
    },
    requestSigner: identity.account,
    requestNonce: item.nonce,
    expectedSigner: identity.address
  });
  if (!result.ok) throw new SkillError("COMMAND_FAILED", "capacity conformance failed");
  return { ok: true, elapsedMs: result.elapsedMs, signatureVerified: true };
}
function canonicalGatedRequest(command, manifest2, request) {
  switch (command) {
    case "reveal": {
      const parsed = revealInput(request);
      validateRevealQuote(manifest2, parsed);
      return parsed;
    }
    case "commit": {
      const parsed = commitmentRequest(request);
      validateCommitmentSigner(manifest2, parsed);
      return parsed;
    }
    case "attest":
      return attestationInput(request);
    case "post-offer":
      return offerInput(request, manifest2.now);
    case "onboard-seller":
      return onboardingInput(request);
    case "conformance":
      return conformanceInput(request);
  }
}
function canonicalActionDigest(command, manifest2, request) {
  return `sha256:${sha256(canonicalJson({
    schema: ACTION_CONSENT_SCHEMA,
    command,
    executionContext: actionExecutionContext(command, manifest2),
    request
  }))}`;
}
function redactConsentValue(value) {
  if (Array.isArray(value)) return value.map(redactConsentValue);
  if (value !== null && typeof value === "object") {
    const result = {};
    for (const [key, entry] of Object.entries(value)) {
      if (/(?:private.?key|capability|proof|payment|receipt|signature)/iu.test(key)) result[`${key}Redacted`] = true;
      else result[key] = redactConsentValue(entry);
    }
    return result;
  }
  return value;
}
function safeRevealQuote(manifest2) {
  const quote = manifest2.payment.quote;
  return {
    source: "task-local-phase0-fixture",
    rail: manifest2.payment.rail,
    target: quote.target,
    role: quote.role,
    amountUSD: quote.amountUSD,
    currency: quote.currency,
    quotedAt: quote.quotedAt,
    expiresAt: quote.expiresAt
  };
}
function gateAction(command, manifest2, value) {
  const item = exactObject(value, ["action", "request"], ["consent"], `${command} action`);
  const request = canonicalGatedRequest(command, manifest2, item.request);
  const digest = canonicalActionDigest(command, manifest2, request);
  if (item.action === "propose") {
    if (item.consent !== void 0) throw new SkillError("INVALID_INPUT", "proposal cannot carry consent");
    return {
      digest,
      immediate: {
        schema: ACTION_CONSENT_SCHEMA,
        command,
        proposedAction: redactConsentValue(request),
        executionContext: reviewExecutionContext(command, manifest2),
        requestSha256: sha256(canonicalJson(request)),
        consentDigest: digest,
        consentRequired: true,
        ...command === "reveal" ? { feeQuote: safeRevealQuote(manifest2) } : {},
        notice: "Submitting performs only this exact reviewed action; decline or silence performs nothing."
      }
    };
  }
  if (item.action === "decline" || item.action === "silence") {
    if (item.consent !== void 0) throw new SkillError("INVALID_INPUT", "decline or silence cannot carry consent");
    return {
      digest,
      immediate: {
        command,
        submitted: false,
        status: item.action === "decline" ? "declined" : "no-response",
        message: "No client was created and no action or follow-up was performed."
      }
    };
  }
  if (item.action !== "submit") throw new SkillError("INVALID_INPUT", `${command} action is invalid`);
  const consent = exactObject(item.consent, ["affirmative", "digest"], [], `${command} consent`);
  if (consent.affirmative !== true) throw new SkillError("CONSENT_REQUIRED", "affirmative consent is required");
  if (consent.digest !== digest) throw new SkillError("CONSENT_MISMATCH", "consent does not bind the unchanged action");
  return { request, digest };
}
function assertNoSecretOutput(value, manifest2) {
  const encoded = JSON.stringify(value);
  const forbiddenKey = /"(?:privateKey|authorizationCapability|paymentSignature|paymentReceipt|proof|signature)"\s*:/iu;
  if (forbiddenKey.test(encoded) || manifestSecrets(manifest2).some((secret) => encoded.includes(secret))) {
    throw new SkillError("COMMAND_FAILED", "command output failed the redaction boundary");
  }
}
async function executeCommand(command, manifest2, input, dependencies = DEFAULT_DEPENDENCIES) {
  if (!PUBLISHED_COMMANDS.includes(command)) {
    throw new SkillError("UNSUPPORTED_COMMAND", "unsupported Caravan command");
  }
  const published = command;
  try {
    let result;
    if (published === "post-intent") {
      result = await postIntent(manifest2, input, dependencies);
    } else if (published === "check-pools" || published === "status") {
      const client = dependencies.createClient(manifest2);
      result = published === "check-pools" ? await checkStatus(client, input) : await matchStatus(manifest2, client, input);
    } else {
      const gated = gateAction(published, manifest2, input);
      if (gated.immediate !== void 0) result = gated.immediate;
      else {
        const client = dependencies.createClient(manifest2);
        switch (published) {
          case "reveal":
            result = await reveal(manifest2, client, gated.request);
            break;
          case "commit":
            result = await commit(manifest2, client, gated.request);
            break;
          case "attest":
            result = await attest(manifest2, client, gated.request);
            break;
          case "post-offer":
            result = await postOffer(client, gated.request);
            break;
          case "onboard-seller":
            result = await onboardSeller(manifest2, client, gated.request);
            break;
          case "conformance":
            result = await conformance(manifest2, client, gated.request);
            break;
          default:
            throw new SkillError("UNSUPPORTED_COMMAND", "unsupported Caravan command");
        }
        result = { ...result, consentDigest: gated.digest };
      }
    }
    const output = { ok: true, command: published, result };
    assertNoSecretOutput(output, manifest2);
    return output;
  } catch (error) {
    throw commandFailure(error);
  }
}

// packages/skill/src/cli.ts
var MAX_INPUT_BYTES = 1048576;
function argument(args, name) {
  const index = args.indexOf(name);
  if (index < 0 || index + 1 >= args.length || args.indexOf(name, index + 1) >= 0) {
    throw new SkillError("ARGUMENT_ERROR", `${name} is required exactly once`);
  }
  return args[index + 1];
}
function inputFile(path) {
  try {
    const bytes = readFileSync2(path);
    if (bytes.byteLength > MAX_INPUT_BYTES) throw new SkillError("INVALID_INPUT", "input exceeds 1048576 bytes");
    return safeJsonParse(new TextDecoder("utf-8", { fatal: true }).decode(bytes), "input");
  } catch (error) {
    if (error instanceof SkillError) throw error;
    throw new SkillError("INVALID_INPUT", "input cannot be read");
  }
}
async function runCli(args) {
  if (args.length !== 5) {
    throw new SkillError("ARGUMENT_ERROR", "usage: caravan <command> --manifest <path> --input <path>");
  }
  const command = args[0];
  const manifestPath = argument(args, "--manifest");
  const inputPath = argument(args, "--input");
  const output = await executeCommand(command, loadManifest(manifestPath), inputFile(inputPath));
  process.stdout.write(`${JSON.stringify(output)}
`);
}
async function main(args) {
  try {
    await runCli(args);
    return 0;
  } catch (error) {
    const failure2 = commandFailure(error);
    process.stderr.write(`${JSON.stringify({ ok: false, error: { code: failure2.code, message: failure2.message } })}
`);
    return 1;
  }
}
if (process.argv[1] !== void 0 && import.meta.url === pathToFileURL(process.argv[1]).href) {
  void main(process.argv.slice(2)).then((exitCode) => {
    process.exitCode = exitCode;
  });
}
export {
  main,
  runCli
};
