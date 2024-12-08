//Sun Dec 08 2024 09:00:29 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
import { connect } from "cloudflare:sockets";
let a0_0x5567bb = "86c50e3a-5b87-49dd-bd20-03c7f2735e40";
const a0_0x3abcb0 = ["ts.hpc.tw"],
  a0_0x53dea9 = [""];
let a0_0x3849b1 = "www.visa.com.sg",
  a0_0x8d5c5d = "www.visa.com",
  a0_0x3b95d3 = "cis.visa.com",
  a0_0x5b26a7 = "africa.visa.com",
  a0_0x2dc16a = "www.visa.com.sg",
  a0_0x337b0f = "www.visaeurope.at",
  a0_0x25ca93 = "www.visa.com.mt",
  a0_0x1c6097 = "qa.visamiddleeast.com",
  a0_0x1eee20 = "usa.visa.com",
  a0_0x2f1bde = "myanmar.visa.com",
  a0_0x54603a = "www.visa.com.tw",
  a0_0x25d297 = "www.visaeurope.ch",
  a0_0x1113f1 = "www.visa.com.br",
  a0_0x17241e = "www.visasoutheasteurope.com",
  a0_0x471ec4 = "80",
  a0_0x5ab9d4 = "8080",
  a0_0xbd0349 = "8880",
  a0_0x3692ee = "2052",
  a0_0x35769f = "2082",
  a0_0x5efb35 = "2086",
  a0_0x1c5641 = "2095",
  a0_0x465415 = "443",
  a0_0x90c39a = "8443",
  a0_0x70e12b = "2053",
  a0_0xc318f1 = "2083",
  a0_0x29b3af = "2087",
  a0_0x395861 = "2096",
  a0_0x553665 = a0_0x3abcb0[Math["floor"](Math["random"]() * a0_0x3abcb0["length"])],
  a0_0x481e26 = a0_0x553665["includes"](":") ? a0_0x553665["split"](":")[1] : "443";
if (!a0_0x2b0a39(a0_0x5567bb)) throw new Error("uuid is not valid");
export default {
  async "fetch"(_0x40119d, _0x145f61, _0x9935f2) {
    try {
      const {
        proxyip: _0x95a80b
      } = _0x145f61;
      a0_0x5567bb = _0x145f61["uuid"] || a0_0x5567bb;
      if (_0x95a80b) {
        if (_0x95a80b["includes"]("]:")) {
          let _0x2ca963 = _0x95a80b["lastIndexOf"](":");
          a0_0x481e26 = _0x95a80b["slice"](_0x2ca963 + 1), a0_0x553665 = _0x95a80b["slice"](0, _0x2ca963);
        } else !_0x95a80b["includes"]("]:") && !_0x95a80b["includes"]("]") ? [a0_0x553665, a0_0x481e26 = "443"] = _0x95a80b["split"](":") : (a0_0x481e26 = "443", a0_0x553665 = _0x95a80b);
      } else {
        if (a0_0x553665["includes"]("]:")) {
          let _0x462c3c = a0_0x553665["lastIndexOf"](":");
          a0_0x481e26 = a0_0x553665["slice"](_0x462c3c + 1), a0_0x553665 = a0_0x553665["slice"](0, _0x462c3c);
        } else !a0_0x553665["includes"]("]:") && !a0_0x553665["includes"]("]") ? [a0_0x553665, a0_0x481e26 = "443"] = a0_0x553665["split"](":") : a0_0x481e26 = "443";
      }
      console["log"]("ProxyIP:", a0_0x553665), console["log"]("ProxyPort:", a0_0x481e26), a0_0x3849b1 = _0x145f61["cdnip"] || a0_0x3849b1, a0_0x8d5c5d = _0x145f61["ip1"] || a0_0x8d5c5d, a0_0x3b95d3 = _0x145f61["ip2"] || a0_0x3b95d3, a0_0x5b26a7 = _0x145f61["ip3"] || a0_0x5b26a7, a0_0x2dc16a = _0x145f61["ip4"] || a0_0x2dc16a, a0_0x337b0f = _0x145f61["ip5"] || a0_0x337b0f, a0_0x25ca93 = _0x145f61["ip6"] || a0_0x25ca93, a0_0x1c6097 = _0x145f61["ip7"] || a0_0x1c6097, a0_0x1eee20 = _0x145f61["ip8"] || a0_0x1eee20, a0_0x2f1bde = _0x145f61["ip9"] || a0_0x2f1bde, a0_0x54603a = _0x145f61["ip10"] || a0_0x54603a, a0_0x25d297 = _0x145f61["ip11"] || a0_0x25d297, a0_0x1113f1 = _0x145f61["ip12"] || a0_0x1113f1, a0_0x17241e = _0x145f61["ip13"] || a0_0x17241e, a0_0x471ec4 = _0x145f61["pt1"] || a0_0x471ec4, a0_0x5ab9d4 = _0x145f61["pt2"] || a0_0x5ab9d4, a0_0xbd0349 = _0x145f61["pt3"] || a0_0xbd0349, a0_0x3692ee = _0x145f61["pt4"] || a0_0x3692ee, a0_0x35769f = _0x145f61["pt5"] || a0_0x35769f, a0_0x5efb35 = _0x145f61["pt6"] || a0_0x5efb35, a0_0x1c5641 = _0x145f61["pt7"] || a0_0x1c5641, a0_0x465415 = _0x145f61["pt8"] || a0_0x465415, a0_0x90c39a = _0x145f61["pt9"] || a0_0x90c39a, a0_0x70e12b = _0x145f61["pt10"] || a0_0x70e12b, a0_0xc318f1 = _0x145f61["pt11"] || a0_0xc318f1, a0_0x29b3af = _0x145f61["pt12"] || a0_0x29b3af, a0_0x395861 = _0x145f61["pt13"] || a0_0x395861;
      const _0xad3730 = _0x40119d["headers"]["get"]("Upgrade"),
        _0x1b787d = new URL(_0x40119d["url"]);
      if (!_0xad3730 || _0xad3730 !== "websocket") {
        const _0x50dc7d = new URL(_0x40119d["url"]);
        switch (_0x50dc7d["pathname"]) {
          case "/" + a0_0x5567bb:
            {
              const _0x3ec85f = a0_0x40412e(a0_0x5567bb, _0x40119d["headers"]["get"]("Host")),
                _0x94e2fd = {};
              _0x94e2fd["Content-Type"] = "text/html;charset=utf-8";
              const _0x3030c3 = {};
              return _0x3030c3["status"] = 200, _0x3030c3["headers"] = _0x94e2fd, new Response("" + _0x3ec85f, _0x3030c3);
            }
          case "/" + a0_0x5567bb + "/ty":
            {
              const _0x2ce4b8 = a0_0x1c65cb(a0_0x5567bb, _0x40119d["headers"]["get"]("Host")),
                _0x2d9224 = {};
              _0x2d9224["Content-Type"] = "text/plain;charset=utf-8";
              const _0x26a25d = {};
              return _0x26a25d["status"] = 200, _0x26a25d["headers"] = _0x2d9224, new Response("" + _0x2ce4b8, _0x26a25d);
            }
          case "/" + a0_0x5567bb + "/cl":
            {
              const _0xea1ac2 = a0_0x3b8cf7(a0_0x5567bb, _0x40119d["headers"]["get"]("Host")),
                _0x1ef155 = {};
              _0x1ef155["Content-Type"] = "text/plain;charset=utf-8";
              const _0x442e44 = {};
              return _0x442e44["status"] = 200, _0x442e44["headers"] = _0x1ef155, new Response("" + _0xea1ac2, _0x442e44);
            }
          case "/" + a0_0x5567bb + "/sb":
            {
              const _0x367b70 = a0_0x44811e(a0_0x5567bb, _0x40119d["headers"]["get"]("Host")),
                _0x1a0a96 = {};
              _0x1a0a96["Content-Type"] = "application/json;charset=utf-8";
              const _0x399bf2 = {};
              return _0x399bf2["status"] = 200, _0x399bf2["headers"] = _0x1a0a96, new Response("" + _0x367b70, _0x399bf2);
            }
          case "/" + a0_0x5567bb + "/pty":
            {
              const _0x31eb89 = a0_0x20efed(a0_0x5567bb, _0x40119d["headers"]["get"]("Host")),
                _0x32d9a7 = {};
              _0x32d9a7["Content-Type"] = "text/plain;charset=utf-8";
              const _0x51b37b = {};
              return _0x51b37b["status"] = 200, _0x51b37b["headers"] = _0x32d9a7, new Response("" + _0x31eb89, _0x51b37b);
            }
          case "/" + a0_0x5567bb + "/pcl":
            {
              const _0x1bdf15 = a0_0x5ad5e1(a0_0x5567bb, _0x40119d["headers"]["get"]("Host")),
                _0x3731c3 = {};
              _0x3731c3["Content-Type"] = "text/plain;charset=utf-8";
              const _0x11bf77 = {};
              return _0x11bf77["status"] = 200, _0x11bf77["headers"] = _0x3731c3, new Response("" + _0x1bdf15, _0x11bf77);
            }
          case "/" + a0_0x5567bb + "/psb":
            {
              const _0x251b67 = a0_0x483471(a0_0x5567bb, _0x40119d["headers"]["get"]("Host")),
                _0x435c46 = {};
              _0x435c46["Content-Type"] = "application/json;charset=utf-8";
              const _0x598d3f = {};
              return _0x598d3f["status"] = 200, _0x598d3f["headers"] = _0x435c46, new Response("" + _0x251b67, _0x598d3f);
            }
          default:
            if (a0_0x53dea9["includes"]("")) {
              const _0x4b8549 = {};
              _0x4b8549["Content-Type"] = "application/json;charset=utf-8";
              const _0x191b35 = {};
              return _0x191b35["status"] = 200, _0x191b35["headers"] = _0x4b8549, new Response(JSON["stringify"](_0x40119d["cf"], null, 4), _0x191b35);
            }
            const _0x30ecdd = a0_0x53dea9[Math["floor"](Math["random"]() * a0_0x53dea9["length"])],
              _0x30064e = new Headers(_0x40119d["headers"]);
            _0x30064e["set"]("cf-connecting-ip", "1.2.3.4"), _0x30064e["set"]("x-forwarded-for", "1.2.3.4"), _0x30064e["set"]("x-real-ip", "1.2.3.4"), _0x30064e["set"]("referer", "https://www.google.com/search?q=edtunnel");
            const _0x19e995 = "https://" + _0x30ecdd + _0x50dc7d["pathname"] + _0x50dc7d["search"],
              _0x4f6295 = {};
            _0x4f6295["method"] = _0x40119d["method"], _0x4f6295["headers"] = _0x30064e, _0x4f6295["body"] = _0x40119d["body"], _0x4f6295["redirect"] = "manual";
            let _0x1e04fd = new Request(_0x19e995, _0x4f6295);
            const _0x524751 = {};
            _0x524751["redirect"] = "manual";
            const _0x46f05d = await fetch(_0x1e04fd, _0x524751);
            if ([301, 302]["includes"](_0x46f05d["status"])) {
              const _0x1dd9fd = {};
              return _0x1dd9fd["status"] = 403, _0x1dd9fd["statusText"] = "Forbidden", new Response("Redirects to " + _0x30ecdd + " are not allowed.", _0x1dd9fd);
            }
            return _0x46f05d;
        }
      } else {
        if (_0x1b787d["pathname"]["includes"]("/pyip=")) {
          const _0x2f8e1e = _0x1b787d["pathname"]["split"]("=")[1];
          if (a0_0x4a324f(_0x2f8e1e)) {
            a0_0x553665 = _0x2f8e1e;
            if (a0_0x553665["includes"]("]:")) {
              let _0x44a0d4 = a0_0x553665["lastIndexOf"](":");
              a0_0x481e26 = a0_0x553665["slice"](_0x44a0d4 + 1), a0_0x553665 = a0_0x553665["slice"](0, _0x44a0d4);
            } else !a0_0x553665["includes"]("]:") && !a0_0x553665["includes"]("]") ? [a0_0x553665, a0_0x481e26 = "443"] = a0_0x553665["split"](":") : a0_0x481e26 = "443";
          }
        }
        return await a0_0x35885a(_0x40119d);
      }
    } catch (_0x2e33a1) {
      let _0x5c9d25 = _0x2e33a1;
      return new Response(_0x5c9d25["toString"]());
    }
  }
};
function a0_0x4a324f(_0xe72f1) {
  var _0x370584 = /^[\s\S]*$/;
  return _0x370584["test"](_0xe72f1);
}
async function a0_0x35885a(_0x3822ec) {
  const _0x5b094f = new WebSocketPair(),
    [_0x553e61, _0x414fd0] = Object["values"](_0x5b094f);
  _0x414fd0["accept"]();
  let _0x4e97a9 = "",
    _0x59015d = "";
  const _0x4d34de = (_0x3c28c2, _0xcab3ea) => {
      console["log"]("[" + _0x4e97a9 + ":" + _0x59015d + "] " + _0x3c28c2, _0xcab3ea || "");
    },
    _0x2844e5 = _0x3822ec["headers"]["get"]("sec-websocket-protocol") || "",
    _0x2a83dd = a0_0x319d81(_0x414fd0, _0x2844e5, _0x4d34de),
    _0xa5c110 = {};
  _0xa5c110["value"] = null;
  let _0x5b8eac = _0xa5c110,
    _0x473aed = null,
    _0x25796e = ![];
  _0x2a83dd["pipeTo"](new WritableStream({
    async "write"(_0x3fde2c, _0x52384f) {
      if (_0x25796e && _0x473aed) return _0x473aed(_0x3fde2c);
      if (_0x5b8eac["value"]) {
        const _0x4cf78c = _0x5b8eac["value"]["writable"]["getWriter"]();
        await _0x4cf78c["write"](_0x3fde2c), _0x4cf78c["releaseLock"]();
        return;
      }
      const {
        hasError: _0x484090,
        message: _0x5f49e8,
        portRemote = 443,
        addressRemote = "",
        rawDataIndex: _0x46eb8f,
        vlessVersion = new Uint8Array([0, 0]),
        isUDP: _0x381d12
      } = await a0_0x3b006e(_0x3fde2c, a0_0x5567bb);
      _0x4e97a9 = addressRemote, _0x59015d = portRemote + "--" + Math["random"]() + " " + (_0x381d12 ? "udp " : "tcp ") + " ";
      if (_0x484090) {
        throw new Error(_0x5f49e8);
        return;
      }
      if (_0x381d12) {
        if (portRemote === 53) _0x25796e = !![];else {
          throw new Error("UDP proxy only enable for DNS which is port 53");
          return;
        }
      }
      const _0x4f9e90 = new Uint8Array([vlessVersion[0], 0]),
        _0xc3e893 = _0x3fde2c["slice"](_0x46eb8f);
      if (_0x25796e) {
        const {
          write: _0x355408
        } = await a0_0x4641d0(_0x414fd0, _0x4f9e90, _0x4d34de);
        _0x473aed = _0x355408, _0x473aed(_0xc3e893);
        return;
      }
      a0_0x83cdd9(_0x5b8eac, addressRemote, portRemote, _0xc3e893, _0x414fd0, _0x4f9e90, _0x4d34de);
    },
    "close"() {
      _0x4d34de("readableWebSocketStream is close");
    },
    "abort"(_0x560dae) {
      _0x4d34de("readableWebSocketStream is abort", JSON["stringify"](_0x560dae));
    }
  }))["catch"](_0x5e4827 => {
    _0x4d34de("readableWebSocketStream pipeTo error", _0x5e4827);
  });
  const _0x333477 = {};
  return _0x333477["status"] = 101, _0x333477["webSocket"] = _0x553e61, new Response(null, _0x333477);
}
async function a0_0x5be232(_0x44f7a0) {
  try {
    const _0x4e722d = await getApiResponse();
    if (!_0x4e722d) return ![];
    const _0x2d6219 = _0x4e722d["users"]["some"](_0x132c15 => _0x132c15["uuid"] === _0x44f7a0);
    return _0x2d6219;
  } catch (_0x529211) {
    return console["error"]("Error:", _0x529211), ![];
  }
}
async function a0_0x83cdd9(_0x693e83, _0x407c35, _0x35cd9a, _0x3edcbd, _0x2b9b6c, _0x3af82b, _0x570c37) {
  async function _0xba8e5c(_0x42cb33, _0x126965) {
    if (/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/["test"](_0x42cb33)) _0x42cb33 = "" + atob("d3d3Lg==") + _0x42cb33 + atob("LnNzbGlwLmlv");
    const _0x53ce18 = {};
    _0x53ce18["hostname"] = _0x42cb33, _0x53ce18["port"] = _0x126965;
    const _0x4448d3 = connect(_0x53ce18);
    _0x693e83["value"] = _0x4448d3, _0x570c37("connected to " + _0x42cb33 + ":" + _0x126965);
    const _0x1e649b = _0x4448d3["writable"]["getWriter"]();
    return await _0x1e649b["write"](_0x3edcbd), _0x1e649b["releaseLock"](), _0x4448d3;
  }
  async function _0x2f499e() {
    const _0x315d3b = await _0xba8e5c(a0_0x553665 || _0x407c35, a0_0x481e26 || _0x35cd9a);
    _0x315d3b["closed"]["catch"](_0x266ace => {
      console["log"]("retry tcpSocket closed error", _0x266ace);
    })["finally"](() => {
      a0_0x51b095(_0x2b9b6c);
    }), a0_0x333c96(_0x315d3b, _0x2b9b6c, _0x3af82b, null, _0x570c37);
  }
  const _0x442b3c = await _0xba8e5c(_0x407c35, _0x35cd9a);
  a0_0x333c96(_0x442b3c, _0x2b9b6c, _0x3af82b, _0x2f499e, _0x570c37);
}
function a0_0x319d81(_0x7072c3, _0x571579, _0x593ba5) {
  let _0x1f5394 = ![];
  const _0x3ecc47 = new ReadableStream({
    "start"(_0x29d558) {
      _0x7072c3["addEventListener"]("message", _0x1749f2 => {
        if (_0x1f5394) return;
        const _0x10182e = _0x1749f2["data"];
        _0x29d558["enqueue"](_0x10182e);
      }), _0x7072c3["addEventListener"]("close", () => {
        a0_0x51b095(_0x7072c3);
        if (_0x1f5394) return;
        _0x29d558["close"]();
      }), _0x7072c3["addEventListener"]("error", _0x4b9282 => {
        _0x593ba5("webSocketServer has error"), _0x29d558["error"](_0x4b9282);
      });
      const {
        earlyData: _0x19e8f1,
        error: _0xeef03a
      } = a0_0x2a17ac(_0x571579);
      if (_0xeef03a) _0x29d558["error"](_0xeef03a);else _0x19e8f1 && _0x29d558["enqueue"](_0x19e8f1);
    },
    "pull"(_0x330f46) {},
    "cancel"(_0x11910d) {
      if (_0x1f5394) return;
      _0x593ba5("ReadableStream was canceled, due to " + _0x11910d), _0x1f5394 = !![], a0_0x51b095(_0x7072c3);
    }
  });
  return _0x3ecc47;
}
async function a0_0x3b006e(_0x26053e, _0x2c357a) {
  if (_0x26053e["byteLength"] < 24) {
    const _0x1e63de = {};
    return _0x1e63de["hasError"] = !![], _0x1e63de["message"] = "invalid data", _0x1e63de;
  }
  const _0x216e8d = new Uint8Array(_0x26053e["slice"](0, 1));
  let _0xb6c708 = ![],
    _0x31ce6d = ![];
  const _0x24cd10 = new Uint8Array(_0x26053e["slice"](1, 17)),
    _0x339604 = a0_0xb21f99(_0x24cd10),
    _0x5477a4 = _0x2c357a["includes"](",") ? _0x2c357a["split"](",") : [_0x2c357a],
    _0x190069 = await a0_0x5be232(_0x339604);
  _0xb6c708 = _0x5477a4["some"](_0x18a93f => _0x190069 || _0x339604 === _0x18a93f["trim"]()), console["log"]("checkUuidInApi: " + (await a0_0x5be232(_0x339604)) + ", userID: " + _0x339604);
  if (!_0xb6c708) {
    const _0x3b3f85 = {};
    return _0x3b3f85["hasError"] = !![], _0x3b3f85["message"] = "invalid user", _0x3b3f85;
  }
  const _0x59d918 = new Uint8Array(_0x26053e["slice"](17, 18))[0],
    _0x5bb24e = new Uint8Array(_0x26053e["slice"](18 + _0x59d918, 18 + _0x59d918 + 1))[0];
  if (_0x5bb24e === 1) {} else {
    if (_0x5bb24e === 2) _0x31ce6d = !![];else {
      const _0x26f518 = {};
      return _0x26f518["hasError"] = !![], _0x26f518["message"] = "command " + _0x5bb24e + " is not support, command 01-tcp,02-udp,03-mux", _0x26f518;
    }
  }
  const _0x150457 = 18 + _0x59d918 + 1,
    _0x1973ef = _0x26053e["slice"](_0x150457, _0x150457 + 2),
    _0x533be5 = new DataView(_0x1973ef)["getUint16"](0);
  let _0x392c68 = _0x150457 + 2;
  const _0x3188f0 = new Uint8Array(_0x26053e["slice"](_0x392c68, _0x392c68 + 1)),
    _0x10718d = _0x3188f0[0];
  let _0x4a6e65 = 0,
    _0x18b0dd = _0x392c68 + 1,
    _0x2a8acb = "";
  switch (_0x10718d) {
    case 1:
      _0x4a6e65 = 4, _0x2a8acb = new Uint8Array(_0x26053e["slice"](_0x18b0dd, _0x18b0dd + _0x4a6e65))["join"](".");
      break;
    case 2:
      _0x4a6e65 = new Uint8Array(_0x26053e["slice"](_0x18b0dd, _0x18b0dd + 1))[0], _0x18b0dd += 1, _0x2a8acb = new TextDecoder()["decode"](_0x26053e["slice"](_0x18b0dd, _0x18b0dd + _0x4a6e65));
      break;
    case 3:
      _0x4a6e65 = 16;
      const _0x421769 = new DataView(_0x26053e["slice"](_0x18b0dd, _0x18b0dd + _0x4a6e65)),
        _0x109dad = [];
      for (let _0x4ed1ed = 0; _0x4ed1ed < 8; _0x4ed1ed++) {
        _0x109dad["push"](_0x421769["getUint16"](_0x4ed1ed * 2)["toString"](16));
      }
      _0x2a8acb = _0x109dad["join"](":");
      break;
    default:
      const _0xd15518 = {};
      _0xd15518["hasError"] = !![], _0xd15518["message"] = "invild  addressType is " + _0x10718d;
      return _0xd15518;
  }
  if (!_0x2a8acb) {
    const _0x502544 = {};
    return _0x502544["hasError"] = !![], _0x502544["message"] = "addressValue is empty, addressType is " + _0x10718d, _0x502544;
  }
  const _0x3a30b1 = {};
  return _0x3a30b1["hasError"] = ![], _0x3a30b1["addressRemote"] = _0x2a8acb, _0x3a30b1["addressType"] = _0x10718d, _0x3a30b1["portRemote"] = _0x533be5, _0x3a30b1["rawDataIndex"] = _0x18b0dd + _0x4a6e65, _0x3a30b1["vlessVersion"] = _0x216e8d, _0x3a30b1["isUDP"] = _0x31ce6d, _0x3a30b1;
}
async function a0_0x333c96(_0x25fbc8, _0x1d95fe, _0x8e41ee, _0x5644dc, _0x345ae3) {
  let _0x33b36b = 0,
    _0x5058bd = [],
    _0x4aa1ce = _0x8e41ee,
    _0x176521 = ![];
  await _0x25fbc8["readable"]["pipeTo"](new WritableStream({
    "start"() {},
    async "write"(_0x1835ea, _0x300e81) {
      _0x176521 = !![], _0x1d95fe["readyState"] !== a0_0x222004 && _0x300e81["error"]("webSocket.readyState is not open, maybe close"), _0x4aa1ce ? (_0x1d95fe["send"](await new Blob([_0x4aa1ce, _0x1835ea])["arrayBuffer"]()), _0x4aa1ce = null) : _0x1d95fe["send"](_0x1835ea);
    },
    "close"() {
      _0x345ae3("remoteConnection!.readable is close with hasIncomingData is " + _0x176521);
    },
    "abort"(_0x4807e5) {
      console["error"]("remoteConnection!.readable abort", _0x4807e5);
    }
  }))["catch"](_0x5c8080 => {
    console["error"]("remoteSocketToWS has exception ", _0x5c8080["stack"] || _0x5c8080), a0_0x51b095(_0x1d95fe);
  }), _0x176521 === ![] && _0x5644dc && (_0x345ae3("retry"), _0x5644dc());
}
function a0_0x2a17ac(_0xde7b7a) {
  if (!_0xde7b7a) {
    const _0x143aad = {};
    return _0x143aad["error"] = null, _0x143aad;
  }
  try {
    _0xde7b7a = _0xde7b7a["replace"](/-/g, "+")["replace"](/_/g, "/");
    const _0x3699b2 = atob(_0xde7b7a),
      _0x23f608 = Uint8Array["from"](_0x3699b2, _0x5c26b8 => _0x5c26b8["charCodeAt"](0)),
      _0x101ea2 = {};
    return _0x101ea2["earlyData"] = _0x23f608["buffer"], _0x101ea2["error"] = null, _0x101ea2;
  } catch (_0x5d6d9f) {
    const _0x2e2815 = {};
    return _0x2e2815["error"] = _0x5d6d9f, _0x2e2815;
  }
}
function a0_0x2b0a39(_0x1b206f) {
  const _0x2d539f = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return _0x2d539f["test"](_0x1b206f);
}
const a0_0x222004 = 1,
  a0_0xf9c5fb = 2;
function a0_0x51b095(_0x258941) {
  try {
    (_0x258941["readyState"] === a0_0x222004 || _0x258941["readyState"] === a0_0xf9c5fb) && _0x258941["close"]();
  } catch (_0x28f3da) {
    console["error"]("safeCloseWebSocket error", _0x28f3da);
  }
}
const a0_0x5670e4 = [];
for (let a0_0x4ba36f = 0; a0_0x4ba36f < 256; ++a0_0x4ba36f) {
  a0_0x5670e4["push"]((a0_0x4ba36f + 256)["toString"](16)["slice"](1));
}
function a0_0x3b54e5(_0x3094df, _0x474c88 = 0) {
  return (a0_0x5670e4[_0x3094df[_0x474c88 + 0]] + a0_0x5670e4[_0x3094df[_0x474c88 + 1]] + a0_0x5670e4[_0x3094df[_0x474c88 + 2]] + a0_0x5670e4[_0x3094df[_0x474c88 + 3]] + "-" + a0_0x5670e4[_0x3094df[_0x474c88 + 4]] + a0_0x5670e4[_0x3094df[_0x474c88 + 5]] + "-" + a0_0x5670e4[_0x3094df[_0x474c88 + 6]] + a0_0x5670e4[_0x3094df[_0x474c88 + 7]] + "-" + a0_0x5670e4[_0x3094df[_0x474c88 + 8]] + a0_0x5670e4[_0x3094df[_0x474c88 + 9]] + "-" + a0_0x5670e4[_0x3094df[_0x474c88 + 10]] + a0_0x5670e4[_0x3094df[_0x474c88 + 11]] + a0_0x5670e4[_0x3094df[_0x474c88 + 12]] + a0_0x5670e4[_0x3094df[_0x474c88 + 13]] + a0_0x5670e4[_0x3094df[_0x474c88 + 14]] + a0_0x5670e4[_0x3094df[_0x474c88 + 15]])["toLowerCase"]();
}
function a0_0xb21f99(_0x54a296, _0x50fb28 = 0) {
  const _0x51abad = a0_0x3b54e5(_0x54a296, _0x50fb28);
  if (!a0_0x2b0a39(_0x51abad)) throw TypeError("Stringified UUID is invalid");
  return _0x51abad;
}
async function a0_0x4641d0(_0xe21cd1, _0x5384a3, _0x1fec69) {
  let _0x54ac03 = ![];
  const _0x4399cc = new TransformStream({
    "start"(_0x5d13ae) {},
    "transform"(_0xe02b93, _0x517159) {
      for (let _0x331628 = 0; _0x331628 < _0xe02b93["byteLength"];) {
        const _0xfadc27 = _0xe02b93["slice"](_0x331628, _0x331628 + 2),
          _0x5d36d7 = new DataView(_0xfadc27)["getUint16"](0),
          _0x208928 = new Uint8Array(_0xe02b93["slice"](_0x331628 + 2, _0x331628 + 2 + _0x5d36d7));
        _0x331628 = _0x331628 + 2 + _0x5d36d7, _0x517159["enqueue"](_0x208928);
      }
    },
    "flush"(_0x2f4dd9) {}
  });
  _0x4399cc["readable"]["pipeTo"](new WritableStream({
    async "write"(_0x5ccf00) {
      const _0x279b23 = {};
      _0x279b23["content-type"] = "application/dns-message";
      const _0x44a769 = {};
      _0x44a769["method"] = "POST", _0x44a769["headers"] = _0x279b23, _0x44a769["body"] = _0x5ccf00;
      const _0xdd44cb = await fetch(dohURL, _0x44a769),
        _0x54b166 = await _0xdd44cb["arrayBuffer"](),
        _0x5e1fcb = _0x54b166["byteLength"],
        _0x23d1ed = new Uint8Array([_0x5e1fcb >> 8 & 255, _0x5e1fcb & 255]);
      _0xe21cd1["readyState"] === a0_0x222004 && (_0x1fec69("doh success and dns message length is " + _0x5e1fcb), _0x54ac03 ? _0xe21cd1["send"](await new Blob([_0x23d1ed, _0x54b166])["arrayBuffer"]()) : (_0xe21cd1["send"](await new Blob([_0x5384a3, _0x23d1ed, _0x54b166])["arrayBuffer"]()), _0x54ac03 = !![]));
    }
  }))["catch"](_0x1985a3 => {
    _0x1fec69("dns udp has error" + _0x1985a3);
  });
  const _0x56da9d = _0x4399cc["writable"]["getWriter"]();
  return {
    "write"(_0x1844b3) {
      _0x56da9d["write"](_0x1844b3);
    }
  };
}
function a0_0x40412e(_0x2d4364, _0x3b8e43) {
  const _0x5d16c3 = "vless://" + _0x2d4364 + "@" + a0_0x3849b1 + ":8880?encryption=none&security=none&type=ws&host=" + _0x3b8e43 + "&path=%2F%3Fed%3D2560#" + _0x3b8e43,
    _0xef092b = "vless://" + _0x2d4364 + "@" + a0_0x3849b1 + ":8443?encryption=none&security=tls&type=ws&host=" + _0x3b8e43 + "&sni=" + _0x3b8e43 + "&fp=random&path=%2F%3Fed%3D2560#" + _0x3b8e43,
    _0x1374c3 = "\u752C\u54E5\u535A\u5BA2\u5730\u5740\uFF1Ahttps://ygkkk.blogspot.com\n\u752C\u54E5YouTube\u9891\u9053\uFF1Ahttps://www.youtube.com/@ygkkk\n\u752C\u54E5TG\u7535\u62A5\u7FA4\u7EC4\uFF1Ahttps://t.me/ygkkktg\n\u752C\u54E5TG\u7535\u62A5\u9891\u9053\uFF1Ahttps://t.me/ygkkktgpd\n\nProxyIP\u5168\u5C40\u8FD0\u884C\u4E2D\uFF1A" + a0_0x553665,
    _0x3f80ac = "https://" + _0x3b8e43 + "/" + _0x2d4364 + "/ty",
    _0x1708b2 = "https://" + _0x3b8e43 + "/" + _0x2d4364 + "/cl",
    _0x19b4cc = "https://" + _0x3b8e43 + "/" + _0x2d4364 + "/sb",
    _0x5d7f79 = "https://" + _0x3b8e43 + "/" + _0x2d4364 + "/pty",
    _0x37a84c = "https://" + _0x3b8e43 + "/" + _0x2d4364 + "/pcl",
    _0x35ebc5 = "https://" + _0x3b8e43 + "/" + _0x2d4364 + "/psb",
    _0x97085c = _0x1374c3["replace"](/\n/g, "<br>"),
    _0x2a2bf8 = "\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH\" crossorigin=\"anonymous\">\n<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz\" crossorigin=\"anonymous\"></script>\n<style>\n.limited-width {\n    max-width: 200px;\n    overflow: auto;\n    word-wrap: break-word;\n}\n</style>\n</head>\n<script>\nfunction copyToClipboard(text) {\n  const input = document.createElement('textarea');\n  input.style.position = 'fixed';\n  input.style.opacity = 0;\n  input.value = text;\n  document.body.appendChild(input);\n  input.select();\n  document.execCommand('Copy');\n  document.body.removeChild(input);\n  alert('\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F');\n}\n</script>\n";
  return _0x3b8e43["includes"]("workers.dev") ? "\n<br>\n<br>\n" + _0x2a2bf8 + "\n<body>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h1>Cloudflare-workers/pages-vless\u4EE3\u7406\u811A\u672C V24.10.18</h1>\n\t    <hr>\n            <p>" + _0x97085c + "</p>\n            <hr>\n\t    <hr>\n\t    <hr>\n            <br>\n            <br>\n            <h3>1\uFF1ACF-workers-vless+ws\u8282\u70B9</h3>\n\t\t\t<table class=\"table\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>\u8282\u70B9\u7279\u8272\uFF1A</th>\n\t\t\t\t\t\t<th>\u5355\u8282\u70B9\u94FE\u63A5\u5982\u4E0B\uFF1A</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class=\"limited-width\">\u5173\u95ED\u4E86TLS\u52A0\u5BC6\uFF0C\u65E0\u89C6\u57DF\u540D\u963B\u65AD</td>\n\t\t\t\t\t\t<td class=\"limited-width\">" + _0x5d16c3 + "</td>\n\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('" + _0x5d16c3 + "')\">\u70B9\u51FB\u590D\u5236\u94FE\u63A5</button></td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n            <h5>\u5BA2\u6237\u7AEF\u53C2\u6570\u5982\u4E0B\uFF1A</h5>\n            <ul>\n                <li>\u5BA2\u6237\u7AEF\u5730\u5740(address)\uFF1A\u81EA\u5B9A\u4E49\u7684\u57DF\u540D \u6216\u8005 \u4F18\u9009\u57DF\u540D \u6216\u8005 \u4F18\u9009IP \u6216\u8005 \u53CD\u4EE3IP</li>\n                <li>\u7AEF\u53E3(port)\uFF1A7\u4E2Ahttp\u7AEF\u53E3\u53EF\u4EFB\u610F\u9009\u62E9(80\u30018080\u30018880\u30012052\u30012082\u30012086\u30012095)\uFF0C\u6216\u53CD\u4EE3IP\u5BF9\u5E94\u7AEF\u53E3</li>\n                <li>\u7528\u6237ID(uuid)\uFF1A" + _0x2d4364 + "</li>\n                <li>\u4F20\u8F93\u534F\u8BAE(network)\uFF1Aws \u6216\u8005 websocket</li>\n                <li>\u4F2A\u88C5\u57DF\u540D(host)\uFF1A" + _0x3b8e43 + "</li>\n                <li>\u8DEF\u5F84(path)\uFF1A/?ed=2560</li>\n\t\t<li>\u4F20\u8F93\u5B89\u5168(TLS)\uFF1A\u5173\u95ED</li>\n            </ul>\n            <hr>\n\t\t\t<hr>\n\t\t\t<hr>\n            <br>\n            <br>\n            <h3>2\uFF1ACF-workers-vless+ws+tls\u8282\u70B9</h3>\n\t\t\t<table class=\"table\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>\u8282\u70B9\u7279\u8272\uFF1A</th>\n\t\t\t\t\t\t<th>\u5355\u8282\u70B9\u94FE\u63A5\u5982\u4E0B\uFF1A</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class=\"limited-width\">\u542F\u7528\u4E86TLS\u52A0\u5BC6\uFF0C<br>\u5982\u679C\u5BA2\u6237\u7AEF\u652F\u6301\u5206\u7247(Fragment)\u529F\u80FD\uFF0C\u5EFA\u8BAE\u5F00\u542F\uFF0C\u9632\u6B62\u57DF\u540D\u963B\u65AD</td>\n\t\t\t\t\t\t<td class=\"limited-width\">" + _0xef092b + "</td>\t\n\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('" + _0xef092b + "')\">\u70B9\u51FB\u590D\u5236\u94FE\u63A5</button></td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n            <h5>\u5BA2\u6237\u7AEF\u53C2\u6570\u5982\u4E0B\uFF1A</h5>\n            <ul>\n                <li>\u5BA2\u6237\u7AEF\u5730\u5740(address)\uFF1A\u81EA\u5B9A\u4E49\u7684\u57DF\u540D \u6216\u8005 \u4F18\u9009\u57DF\u540D \u6216\u8005 \u4F18\u9009IP \u6216\u8005 \u53CD\u4EE3IP</li>\n                <li>\u7AEF\u53E3(port)\uFF1A6\u4E2Ahttps\u7AEF\u53E3\u53EF\u4EFB\u610F\u9009\u62E9(443\u30018443\u30012053\u30012083\u30012087\u30012096)\uFF0C\u6216\u53CD\u4EE3IP\u5BF9\u5E94\u7AEF\u53E3</li>\n                <li>\u7528\u6237ID(uuid)\uFF1A" + _0x2d4364 + "</li>\n                <li>\u4F20\u8F93\u534F\u8BAE(network)\uFF1Aws \u6216\u8005 websocket</li>\n                <li>\u4F2A\u88C5\u57DF\u540D(host)\uFF1A" + _0x3b8e43 + "</li>\n                <li>\u8DEF\u5F84(path)\uFF1A/?ed=2560</li>\n                <li>\u4F20\u8F93\u5B89\u5168(TLS)\uFF1A\u5F00\u542F</li>\n                <li>\u8DF3\u8FC7\u8BC1\u4E66\u9A8C\u8BC1(allowlnsecure)\uFF1Afalse</li>\n\t\t\t</ul>\n\t\t\t<hr>\n\t\t\t<hr>\n\t\t\t<hr>\n\t\t\t<br>\t\n\t\t\t<br>\n\t\t\t<h3>3\uFF1A\u805A\u5408\u901A\u7528\u3001Clash-meta\u3001Sing-box\u8BA2\u9605\u94FE\u63A5\u5982\u4E0B\uFF1A</h3>\n\t\t\t<hr>\n\t\t\t<p>\u6CE8\u610F\uFF1A<br>1\u3001\u9ED8\u8BA4\u6BCF\u4E2A\u8BA2\u9605\u94FE\u63A5\u5305\u542BTLS+\u975ETLS\u517113\u4E2A\u7AEF\u53E3\u8282\u70B9<br>2\u3001\u5F53\u524Dworkers\u57DF\u540D\u4F5C\u4E3A\u8BA2\u9605\u94FE\u63A5\uFF0C\u9700\u901A\u8FC7\u4EE3\u7406\u8FDB\u884C\u8BA2\u9605\u66F4\u65B0<br>3\u3001\u5982\u4F7F\u7528\u7684\u5BA2\u6237\u7AEF\u4E0D\u652F\u6301\u5206\u7247\u529F\u80FD\uFF0C\u5219TLS\u8282\u70B9\u4E0D\u53EF\u7528</p>\n\t\t\t<hr>\n\t\t\t<table class=\"table\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>\u805A\u5408\u901A\u7528\u8BA2\u9605\u94FE\u63A5\uFF1A</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class=\"limited-width\">" + _0x3f80ac + "</td>\t\n\t\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('" + _0x3f80ac + "')\">\u70B9\u51FB\u590D\u5236\u94FE\u63A5</button></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\t\n\n\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>Clash-meta\u8BA2\u9605\u94FE\u63A5\uFF1A</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td class=\"limited-width\">" + _0x1708b2 + "</td>\t\n\t\t\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('" + _0x1708b2 + "')\">\u70B9\u51FB\u590D\u5236\u94FE\u63A5</button></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\n\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Sing-box\u8BA2\u9605\u94FE\u63A5\uFF1A</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class=\"limited-width\">" + _0x19b4cc + "</td>\t\n\t\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('" + _0x19b4cc + "')\">\u70B9\u51FB\u590D\u5236\u94FE\u63A5</button></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<br>\n\t\t\t\t<br>\n        </div>\n    </div>\n</div>\n</body>\n" : "\n<br>\n<br>\n" + _0x2a2bf8 + "\n<body>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h1>Cloudflare-workers/pages-vless\u4EE3\u7406\u811A\u672C V24.10.18</h1>\n\t\t\t<hr>\n            <p>" + _0x97085c + "</p>\n            <hr>\n\t\t\t<hr>\n\t\t\t<hr>\n            <br>\n            <br>\n            <h3>1\uFF1ACF-pages/workers/\u81EA\u5B9A\u4E49\u57DF-vless+ws+tls\u8282\u70B9</h3>\n\t\t\t<table class=\"table\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>\u8282\u70B9\u7279\u8272\uFF1A</th>\n\t\t\t\t\t\t<th>\u5355\u8282\u70B9\u94FE\u63A5\u5982\u4E0B\uFF1A</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class=\"limited-width\">\u542F\u7528\u4E86TLS\u52A0\u5BC6\uFF0C<br>\u5982\u679C\u5BA2\u6237\u7AEF\u652F\u6301\u5206\u7247(Fragment)\u529F\u80FD\uFF0C\u53EF\u5F00\u542F\uFF0C\u9632\u6B62\u57DF\u540D\u963B\u65AD</td>\n\t\t\t\t\t\t<td class=\"limited-width\">" + _0xef092b + "</td>\n\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('" + _0xef092b + "')\">\u70B9\u51FB\u590D\u5236\u94FE\u63A5</button></td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n            <h5>\u5BA2\u6237\u7AEF\u53C2\u6570\u5982\u4E0B\uFF1A</h5>\n            <ul>\n                <li>\u5BA2\u6237\u7AEF\u5730\u5740(address)\uFF1A\u81EA\u5B9A\u4E49\u7684\u57DF\u540D \u6216\u8005 \u4F18\u9009\u57DF\u540D \u6216\u8005 \u4F18\u9009IP \u6216\u8005 \u53CD\u4EE3IP</li>\n                <li>\u7AEF\u53E3(port)\uFF1A6\u4E2Ahttps\u7AEF\u53E3\u53EF\u4EFB\u610F\u9009\u62E9(443\u30018443\u30012053\u30012083\u30012087\u30012096)\uFF0C\u6216\u53CD\u4EE3IP\u5BF9\u5E94\u7AEF\u53E3</li>\n                <li>\u7528\u6237ID(uuid)\uFF1A" + _0x2d4364 + "</li>\n                <li>\u4F20\u8F93\u534F\u8BAE(network)\uFF1Aws \u6216\u8005 websocket</li>\n                <li>\u4F2A\u88C5\u57DF\u540D(host)\uFF1A" + _0x3b8e43 + "</li>\n                <li>\u8DEF\u5F84(path)\uFF1A/?ed=2560</li>\n                <li>\u4F20\u8F93\u5B89\u5168(TLS)\uFF1A\u5F00\u542F</li>\n                <li>\u8DF3\u8FC7\u8BC1\u4E66\u9A8C\u8BC1(allowlnsecure)\uFF1Afalse</li>\n\t\t\t</ul>\n            <hr>\n\t\t\t<hr>\n\t\t\t<hr>\n            <br>\n            <br>\n\t\t\t<h3>2\uFF1A\u805A\u5408\u901A\u7528\u3001Clash-meta\u3001Sing-box\u8BA2\u9605\u94FE\u63A5\u5982\u4E0B\uFF1A</h3>\n\t\t\t<hr>\n\t\t\t<p>\u6CE8\u610F\uFF1A\u4EE5\u4E0B\u8BA2\u9605\u94FE\u63A5\u4EC56\u4E2ATLS\u7AEF\u53E3\u8282\u70B9</p>\n\t\t\t<hr>\n\t\t\t<table class=\"table\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>\u805A\u5408\u901A\u7528\u8BA2\u9605\u94FE\u63A5\uFF1A</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class=\"limited-width\">" + _0x5d7f79 + "</td>\t\n\t\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('" + _0x5d7f79 + "')\">\u70B9\u51FB\u590D\u5236\u94FE\u63A5</button></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\t\n\n\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>Clash-meta\u8BA2\u9605\u94FE\u63A5\uFF1A</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td class=\"limited-width\">" + _0x37a84c + "</td>\t\n\t\t\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('" + _0x37a84c + "')\">\u70B9\u51FB\u590D\u5236\u94FE\u63A5</button></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\n\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Sing-box\u8BA2\u9605\u94FE\u63A5\uFF1A</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class=\"limited-width\">" + _0x35ebc5 + "</td>\t\n\t\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('" + _0x35ebc5 + "')\">\u70B9\u51FB\u590D\u5236\u94FE\u63A5</button></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<br>\n\t\t\t\t<br>\n        </div>\n    </div>\n</div>\n</body>\n";
}
function a0_0x1c65cb(_0x235a9a, _0x7d3ad5) {
  const _0x54603c = btoa("vless://" + _0x235a9a + "@" + a0_0x8d5c5d + ":" + a0_0x471ec4 + "?encryption=none&security=none&fp=randomized&type=ws&host=" + _0x7d3ad5 + "&path=%2F%3Fed%3D2560#CF_V1_" + a0_0x8d5c5d + "_" + a0_0x471ec4 + "\nvless://" + _0x235a9a + "@" + a0_0x3b95d3 + ":" + a0_0x5ab9d4 + "?encryption=none&security=none&fp=randomized&type=ws&host=" + _0x7d3ad5 + "&path=%2F%3Fed%3D2560#CF_V2_" + a0_0x3b95d3 + "_" + a0_0x5ab9d4 + "\nvless://" + _0x235a9a + "@" + a0_0x5b26a7 + ":" + a0_0xbd0349 + "?encryption=none&security=none&fp=randomized&type=ws&host=" + _0x7d3ad5 + "&path=%2F%3Fed%3D2560#CF_V3_" + a0_0x5b26a7 + "_" + a0_0xbd0349 + "\nvless://" + _0x235a9a + "@" + a0_0x2dc16a + ":" + a0_0x3692ee + "?encryption=none&security=none&fp=randomized&type=ws&host=" + _0x7d3ad5 + "&path=%2F%3Fed%3D2560#CF_V4_" + a0_0x2dc16a + "_" + a0_0x3692ee + "\nvless://" + _0x235a9a + "@" + a0_0x337b0f + ":" + a0_0x35769f + "?encryption=none&security=none&fp=randomized&type=ws&host=" + _0x7d3ad5 + "&path=%2F%3Fed%3D2560#CF_V5_" + a0_0x337b0f + "_" + a0_0x35769f + "\nvless://" + _0x235a9a + "@" + a0_0x25ca93 + ":" + a0_0x5efb35 + "?encryption=none&security=none&fp=randomized&type=ws&host=" + _0x7d3ad5 + "&path=%2F%3Fed%3D2560#CF_V6_" + a0_0x25ca93 + "_" + a0_0x5efb35 + "\nvless://" + _0x235a9a + "@" + a0_0x1c6097 + ":" + a0_0x1c5641 + "?encryption=none&security=none&fp=randomized&type=ws&host=" + _0x7d3ad5 + "&path=%2F%3Fed%3D2560#CF_V7_" + a0_0x1c6097 + "_" + a0_0x1c5641 + "\nvless://" + _0x235a9a + "@" + a0_0x1eee20 + ":" + a0_0x465415 + "?encryption=none&security=tls&sni=" + _0x7d3ad5 + "&fp=randomized&type=ws&host=" + _0x7d3ad5 + "&path=%2F%3Fed%3D2560#CF_V8_" + a0_0x1eee20 + "_" + a0_0x465415 + "\nvless://" + _0x235a9a + "@" + a0_0x2f1bde + ":" + a0_0x90c39a + "?encryption=none&security=tls&sni=" + _0x7d3ad5 + "&fp=randomized&type=ws&host=" + _0x7d3ad5 + "&path=%2F%3Fed%3D2560#CF_V9_" + a0_0x2f1bde + "_" + a0_0x90c39a + "\nvless://" + _0x235a9a + "@" + a0_0x54603a + ":" + a0_0x70e12b + "?encryption=none&security=tls&sni=" + _0x7d3ad5 + "&fp=randomized&type=ws&host=" + _0x7d3ad5 + "&path=%2F%3Fed%3D2560#CF_V10_" + a0_0x54603a + "_" + a0_0x70e12b + "\nvless://" + _0x235a9a + "@" + a0_0x25d297 + ":" + a0_0xc318f1 + "?encryption=none&security=tls&sni=" + _0x7d3ad5 + "&fp=randomized&type=ws&host=" + _0x7d3ad5 + "&path=%2F%3Fed%3D2560#CF_V11_" + a0_0x25d297 + "_" + a0_0xc318f1 + "\nvless://" + _0x235a9a + "@" + a0_0x1113f1 + ":" + a0_0x29b3af + "?encryption=none&security=tls&sni=" + _0x7d3ad5 + "&fp=randomized&type=ws&host=" + _0x7d3ad5 + "&path=%2F%3Fed%3D2560#CF_V12_" + a0_0x1113f1 + "_" + a0_0x29b3af + "\nvless://" + _0x235a9a + "@" + a0_0x17241e + ":" + a0_0x395861 + "?encryption=none&security=tls&sni=" + _0x7d3ad5 + "&fp=randomized&type=ws&host=" + _0x7d3ad5 + "&path=%2F%3Fed%3D2560#CF_V13_" + a0_0x17241e + "_" + a0_0x395861);
  return "" + _0x54603c;
}
function a0_0x3b8cf7(_0x4cab8c, _0x2d0243) {
  return "\nport: 7890\nallow-lan: true\nmode: rule\nlog-level: info\nunified-delay: true\nglobal-client-fingerprint: chrome\ndns:\n  enable: true\n  listen: :53\n  ipv6: true\n  enhanced-mode: fake-ip\n  fake-ip-range: 198.18.0.1/16\n  default-nameserver: \n    - 223.5.5.5\n    - 114.114.114.114\n    - 8.8.8.8\n  nameserver:\n    - https://dns.alidns.com/dns-query\n    - https://doh.pub/dns-query\n  fallback:\n    - https://1.0.0.1/dns-query\n    - tls://dns.google\n  fallback-filter:\n    geoip: true\n    geoip-code: CN\n    ipcidr:\n      - 240.0.0.0/4\n\nproxies:\n- name: CF_V1_" + a0_0x8d5c5d + "_" + a0_0x471ec4 + "\n  type: vless\n  server: " + a0_0x8d5c5d + "\n  port: " + a0_0x471ec4 + "\n  uuid: " + _0x4cab8c + "\n  udp: false\n  tls: false\n  network: ws\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x2d0243 + "\n\n- name: CF_V2_" + a0_0x3b95d3 + "_" + a0_0x5ab9d4 + "\n  type: vless\n  server: " + a0_0x3b95d3 + "\n  port: " + a0_0x5ab9d4 + "\n  uuid: " + _0x4cab8c + "\n  udp: false\n  tls: false\n  network: ws\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x2d0243 + "\n\n- name: CF_V3_" + a0_0x5b26a7 + "_" + a0_0xbd0349 + "\n  type: vless\n  server: " + a0_0x5b26a7 + "\n  port: " + a0_0xbd0349 + "\n  uuid: " + _0x4cab8c + "\n  udp: false\n  tls: false\n  network: ws\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x2d0243 + "\n\n- name: CF_V4_" + a0_0x2dc16a + "_" + a0_0x3692ee + "\n  type: vless\n  server: " + a0_0x2dc16a + "\n  port: " + a0_0x3692ee + "\n  uuid: " + _0x4cab8c + "\n  udp: false\n  tls: false\n  network: ws\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x2d0243 + "\n\n- name: CF_V5_" + a0_0x337b0f + "_" + a0_0x35769f + "\n  type: vless\n  server: " + a0_0x337b0f + "\n  port: " + a0_0x35769f + "\n  uuid: " + _0x4cab8c + "\n  udp: false\n  tls: false\n  network: ws\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x2d0243 + "\n\n- name: CF_V6_" + a0_0x25ca93 + "_" + a0_0x5efb35 + "\n  type: vless\n  server: " + a0_0x25ca93 + "\n  port: " + a0_0x5efb35 + "\n  uuid: " + _0x4cab8c + "\n  udp: false\n  tls: false\n  network: ws\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x2d0243 + "\n\n- name: CF_V7_" + a0_0x1c6097 + "_" + a0_0x1c5641 + "\n  type: vless\n  server: " + a0_0x1c6097 + "\n  port: " + a0_0x1c5641 + "\n  uuid: " + _0x4cab8c + "\n  udp: false\n  tls: false\n  network: ws\n  servername: " + _0x2d0243 + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x2d0243 + "\n\n- name: CF_V8_" + a0_0x1eee20 + "_" + a0_0x465415 + "\n  type: vless\n  server: " + a0_0x1eee20 + "\n  port: " + a0_0x465415 + "\n  uuid: " + _0x4cab8c + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0x2d0243 + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x2d0243 + "\n\n- name: CF_V9_" + a0_0x2f1bde + "_" + a0_0x90c39a + "\n  type: vless\n  server: " + a0_0x2f1bde + "\n  port: " + a0_0x90c39a + "\n  uuid: " + _0x4cab8c + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0x2d0243 + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x2d0243 + "\n\n- name: CF_V10_" + a0_0x54603a + "_" + a0_0x70e12b + "\n  type: vless\n  server: " + a0_0x54603a + "\n  port: " + a0_0x70e12b + "\n  uuid: " + _0x4cab8c + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0x2d0243 + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x2d0243 + "\n\n- name: CF_V11_" + a0_0x25d297 + "_" + a0_0xc318f1 + "\n  type: vless\n  server: " + a0_0x25d297 + "\n  port: " + a0_0xc318f1 + "\n  uuid: " + _0x4cab8c + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0x2d0243 + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x2d0243 + "\n\n- name: CF_V12_" + a0_0x1113f1 + "_" + a0_0x29b3af + "\n  type: vless\n  server: " + a0_0x1113f1 + "\n  port: " + a0_0x29b3af + "\n  uuid: " + _0x4cab8c + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0x2d0243 + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x2d0243 + "\n\n- name: CF_V13_" + a0_0x17241e + "_" + a0_0x395861 + "\n  type: vless\n  server: " + a0_0x17241e + "\n  port: " + a0_0x395861 + "\n  uuid: " + _0x4cab8c + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0x2d0243 + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x2d0243 + "\n\nproxy-groups:\n- name: \u8D1F\u8F7D\u5747\u8861\n  type: load-balance\n  url: http://www.gstatic.com/generate_204\n  interval: 300\n  proxies:\n    - CF_V1_" + a0_0x8d5c5d + "_" + a0_0x471ec4 + "\n    - CF_V2_" + a0_0x3b95d3 + "_" + a0_0x5ab9d4 + "\n    - CF_V3_" + a0_0x5b26a7 + "_" + a0_0xbd0349 + "\n    - CF_V4_" + a0_0x2dc16a + "_" + a0_0x3692ee + "\n    - CF_V5_" + a0_0x337b0f + "_" + a0_0x35769f + "\n    - CF_V6_" + a0_0x25ca93 + "_" + a0_0x5efb35 + "\n    - CF_V7_" + a0_0x1c6097 + "_" + a0_0x1c5641 + "\n    - CF_V8_" + a0_0x1eee20 + "_" + a0_0x465415 + "\n    - CF_V9_" + a0_0x2f1bde + "_" + a0_0x90c39a + "\n    - CF_V10_" + a0_0x54603a + "_" + a0_0x70e12b + "\n    - CF_V11_" + a0_0x25d297 + "_" + a0_0xc318f1 + "\n    - CF_V12_" + a0_0x1113f1 + "_" + a0_0x29b3af + "\n    - CF_V13_" + a0_0x17241e + "_" + a0_0x395861 + "\n\n- name: \u81EA\u52A8\u9009\u62E9\n  type: url-test\n  url: http://www.gstatic.com/generate_204\n  interval: 300\n  tolerance: 50\n  proxies:\n    - CF_V1_" + a0_0x8d5c5d + "_" + a0_0x471ec4 + "\n    - CF_V2_" + a0_0x3b95d3 + "_" + a0_0x5ab9d4 + "\n    - CF_V3_" + a0_0x5b26a7 + "_" + a0_0xbd0349 + "\n    - CF_V4_" + a0_0x2dc16a + "_" + a0_0x3692ee + "\n    - CF_V5_" + a0_0x337b0f + "_" + a0_0x35769f + "\n    - CF_V6_" + a0_0x25ca93 + "_" + a0_0x5efb35 + "\n    - CF_V7_" + a0_0x1c6097 + "_" + a0_0x1c5641 + "\n    - CF_V8_" + a0_0x1eee20 + "_" + a0_0x465415 + "\n    - CF_V9_" + a0_0x2f1bde + "_" + a0_0x90c39a + "\n    - CF_V10_" + a0_0x54603a + "_" + a0_0x70e12b + "\n    - CF_V11_" + a0_0x25d297 + "_" + a0_0xc318f1 + "\n    - CF_V12_" + a0_0x1113f1 + "_" + a0_0x29b3af + "\n    - CF_V13_" + a0_0x17241e + "_" + a0_0x395861 + "\n\n- name: \uD83C\uDF0D\u9009\u62E9\u4EE3\u7406\n  type: select\n  proxies:\n    - \u8D1F\u8F7D\u5747\u8861\n    - \u81EA\u52A8\u9009\u62E9\n    - DIRECT\n    - CF_V1_" + a0_0x8d5c5d + "_" + a0_0x471ec4 + "\n    - CF_V2_" + a0_0x3b95d3 + "_" + a0_0x5ab9d4 + "\n    - CF_V3_" + a0_0x5b26a7 + "_" + a0_0xbd0349 + "\n    - CF_V4_" + a0_0x2dc16a + "_" + a0_0x3692ee + "\n    - CF_V5_" + a0_0x337b0f + "_" + a0_0x35769f + "\n    - CF_V6_" + a0_0x25ca93 + "_" + a0_0x5efb35 + "\n    - CF_V7_" + a0_0x1c6097 + "_" + a0_0x1c5641 + "\n    - CF_V8_" + a0_0x1eee20 + "_" + a0_0x465415 + "\n    - CF_V9_" + a0_0x2f1bde + "_" + a0_0x90c39a + "\n    - CF_V10_" + a0_0x54603a + "_" + a0_0x70e12b + "\n    - CF_V11_" + a0_0x25d297 + "_" + a0_0xc318f1 + "\n    - CF_V12_" + a0_0x1113f1 + "_" + a0_0x29b3af + "\n    - CF_V13_" + a0_0x17241e + "_" + a0_0x395861 + "\n\nrules:\n  - GEOIP,LAN,DIRECT\n  - GEOIP,CN,DIRECT\n  - MATCH,\uD83C\uDF0D\u9009\u62E9\u4EE3\u7406";
}
function a0_0x44811e(_0x353c62, _0x38f32e) {
  return "{\n\t  \"log\": {\n\t\t\"disabled\": false,\n\t\t\"level\": \"info\",\n\t\t\"timestamp\": true\n\t  },\n\t  \"experimental\": {\n\t\t\"clash_api\": {\n\t\t  \"external_controller\": \"127.0.0.1:9090\",\n\t\t  \"external_ui\": \"ui\",\n\t\t  \"external_ui_download_url\": \"\",\n\t\t  \"external_ui_download_detour\": \"\",\n\t\t  \"secret\": \"\",\n\t\t  \"default_mode\": \"Rule\"\n\t\t},\n\t\t\"cache_file\": {\n\t\t  \"enabled\": true,\n\t\t  \"path\": \"cache.db\",\n\t\t  \"store_fakeip\": true\n\t\t}\n\t  },\n\t  \"dns\": {\n\t\t\"servers\": [\n\t\t  {\n\t\t\t\"tag\": \"proxydns\",\n\t\t\t\"address\": \"tls://8.8.8.8/dns-query\",\n\t\t\t\"detour\": \"select\"\n\t\t  },\n\t\t  {\n\t\t\t\"tag\": \"localdns\",\n\t\t\t\"address\": \"h3://223.5.5.5/dns-query\",\n\t\t\t\"detour\": \"direct\"\n\t\t  },\n\t\t  {\n\t\t\t\"tag\": \"dns_fakeip\",\n\t\t\t\"address\": \"fakeip\"\n\t\t  }\n\t\t],\n\t\t\"rules\": [\n\t\t  {\n\t\t\t\"outbound\": \"any\",\n\t\t\t\"server\": \"localdns\",\n\t\t\t\"disable_cache\": true\n\t\t  },\n\t\t  {\n\t\t\t\"clash_mode\": \"Global\",\n\t\t\t\"server\": \"proxydns\"\n\t\t  },\n\t\t  {\n\t\t\t\"clash_mode\": \"Direct\",\n\t\t\t\"server\": \"localdns\"\n\t\t  },\n\t\t  {\n\t\t\t\"rule_set\": \"geosite-cn\",\n\t\t\t\"server\": \"localdns\"\n\t\t  },\n\t\t  {\n\t\t\t\"rule_set\": \"geosite-geolocation-!cn\",\n\t\t\t\"server\": \"proxydns\"\n\t\t  },\n\t\t  {\n\t\t\t\"rule_set\": \"geosite-geolocation-!cn\",\n\t\t\t\"query_type\": [\n\t\t\t  \"A\",\n\t\t\t  \"AAAA\"\n\t\t\t],\n\t\t\t\"server\": \"dns_fakeip\"\n\t\t  }\n\t\t],\n\t\t\"fakeip\": {\n\t\t  \"enabled\": true,\n\t\t  \"inet4_range\": \"198.18.0.0/15\",\n\t\t  \"inet6_range\": \"fc00::/18\"\n\t\t},\n\t\t\"independent_cache\": true,\n\t\t\"final\": \"proxydns\"\n\t  },\n\t  \"inbounds\": [\n\t\t{\n\t\t  \"type\": \"tun\",\n                  \"tag\": \"tun-in\",\n\t\t  \"address\": [\n                    \"172.19.0.1/30\",\n\t\t    \"fd00::1/126\"\n      ],\n\t\t  \"auto_route\": true,\n\t\t  \"strict_route\": true,\n\t\t  \"sniff\": true,\n\t\t  \"sniff_override_destination\": true,\n\t\t  \"domain_strategy\": \"prefer_ipv4\"\n\t\t}\n\t  ],\n\t  \"outbounds\": [\n\t\t{\n\t\t  \"tag\": \"select\",\n\t\t  \"type\": \"selector\",\n\t\t  \"default\": \"auto\",\n\t\t  \"outbounds\": [\n\t\t\t\"auto\",\n\t\t\t\"CF_V1_" + a0_0x8d5c5d + "_" + a0_0x471ec4 + "\",\n\t\t\t\"CF_V2_" + a0_0x3b95d3 + "_" + a0_0x5ab9d4 + "\",\n\t\t\t\"CF_V3_" + a0_0x5b26a7 + "_" + a0_0xbd0349 + "\",\n\t\t\t\"CF_V4_" + a0_0x2dc16a + "_" + a0_0x3692ee + "\",\n\t\t\t\"CF_V5_" + a0_0x337b0f + "_" + a0_0x35769f + "\",\n\t\t\t\"CF_V6_" + a0_0x25ca93 + "_" + a0_0x5efb35 + "\",\n\t\t\t\"CF_V7_" + a0_0x1c6097 + "_" + a0_0x1c5641 + "\",\n\t\t\t\"CF_V8_" + a0_0x1eee20 + "_" + a0_0x465415 + "\",\n\t\t\t\"CF_V9_" + a0_0x2f1bde + "_" + a0_0x90c39a + "\",\n\t\t\t\"CF_V10_" + a0_0x54603a + "_" + a0_0x70e12b + "\",\n\t\t\t\"CF_V11_" + a0_0x25d297 + "_" + a0_0xc318f1 + "\",\n\t\t\t\"CF_V12_" + a0_0x1113f1 + "_" + a0_0x29b3af + "\",\n\t\t\t\"CF_V13_" + a0_0x17241e + "_" + a0_0x395861 + "\"\n\t\t  ]\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + a0_0x8d5c5d + "\",\n\t\t  \"server_port\": " + a0_0x471ec4 + ",\n\t\t  \"tag\": \"CF_V1_" + a0_0x8d5c5d + "_" + a0_0x471ec4 + "\",\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x38f32e + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x353c62 + "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + a0_0x3b95d3 + "\",\n\t\t  \"server_port\": " + a0_0x5ab9d4 + ",\n\t\t  \"tag\": \"CF_V2_" + a0_0x3b95d3 + "_" + a0_0x5ab9d4 + "\",\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x38f32e + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x353c62 + "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + a0_0x5b26a7 + "\",\n\t\t  \"server_port\": " + a0_0xbd0349 + ",\n\t\t  \"tag\": \"CF_V3_" + a0_0x5b26a7 + "_" + a0_0xbd0349 + "\",\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x38f32e + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x353c62 + "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + a0_0x2dc16a + "\",\n\t\t  \"server_port\": " + a0_0x3692ee + ",\n\t\t  \"tag\": \"CF_V4_" + a0_0x2dc16a + "_" + a0_0x3692ee + "\",\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x38f32e + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x353c62 + "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + a0_0x337b0f + "\",\n\t\t  \"server_port\": " + a0_0x35769f + ",\n\t\t  \"tag\": \"CF_V5_" + a0_0x337b0f + "_" + a0_0x35769f + "\",\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x38f32e + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x353c62 + "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + a0_0x25ca93 + "\",\n\t\t  \"server_port\": " + a0_0x5efb35 + ",\n\t\t  \"tag\": \"CF_V6_" + a0_0x25ca93 + "_" + a0_0x5efb35 + "\",\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x38f32e + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x353c62 + "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + a0_0x1c6097 + "\",\n\t\t  \"server_port\": " + a0_0x1c5641 + ",\n\t\t  \"tag\": \"CF_V7_" + a0_0x1c6097 + "_" + a0_0x1c5641 + "\",\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x38f32e + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x353c62 + "\"\n\t\t},\n\t\t{     \n\t\t  \"server\": \"" + a0_0x1eee20 + "\",\n\t\t  \"server_port\": " + a0_0x465415 + ",\n\t\t  \"tag\": \"CF_V8_" + a0_0x1eee20 + "_" + a0_0x465415 + "\",\n\t\t  \"tls\": {\n\t\t\t\"enabled\": true,\n\t\t\t\"server_name\": \"" + _0x38f32e + "\",\n\t\t\t\"insecure\": false,\n\t\t\t\"utls\": {\n\t\t\t  \"enabled\": true,\n\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t}\n\t\t  },\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x38f32e + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x353c62 + "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + a0_0x2f1bde + "\",\n\t\t  \"server_port\": " + a0_0x90c39a + ",\n\t\t  \"tag\": \"CF_V9_" + a0_0x2f1bde + "_" + a0_0x90c39a + "\",\n\t\t  \"tls\": {\n\t\t\t\"enabled\": true,\n\t\t\t\"server_name\": \"" + _0x38f32e + "\",\n\t\t\t\"insecure\": false,\n\t\t\t\"utls\": {\n\t\t\t  \"enabled\": true,\n\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t}\n\t\t  },\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x38f32e + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x353c62 + "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + a0_0x54603a + "\",\n\t\t  \"server_port\": " + a0_0x70e12b + ",\n\t\t  \"tag\": \"CF_V10_" + a0_0x54603a + "_" + a0_0x70e12b + "\",\n\t\t  \"tls\": {\n\t\t\t\"enabled\": true,\n\t\t\t\"server_name\": \"" + _0x38f32e + "\",\n\t\t\t\"insecure\": false,\n\t\t\t\"utls\": {\n\t\t\t  \"enabled\": true,\n\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t}\n\t\t  },\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x38f32e + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x353c62 + "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + a0_0x25d297 + "\",\n\t\t  \"server_port\": " + a0_0xc318f1 + ",\n\t\t  \"tag\": \"CF_V11_" + a0_0x25d297 + "_" + a0_0xc318f1 + "\",\n\t\t  \"tls\": {\n\t\t\t\"enabled\": true,\n\t\t\t\"server_name\": \"" + _0x38f32e + "\",\n\t\t\t\"insecure\": false,\n\t\t\t\"utls\": {\n\t\t\t  \"enabled\": true,\n\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t}\n\t\t  },\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x38f32e + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x353c62 + "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + a0_0x1113f1 + "\",\n\t\t  \"server_port\": " + a0_0x29b3af + ",\n\t\t  \"tag\": \"CF_V12_" + a0_0x1113f1 + "_" + a0_0x29b3af + "\",\n\t\t  \"tls\": {\n\t\t\t\"enabled\": true,\n\t\t\t\"server_name\": \"" + _0x38f32e + "\",\n\t\t\t\"insecure\": false,\n\t\t\t\"utls\": {\n\t\t\t  \"enabled\": true,\n\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t}\n\t\t  },\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x38f32e + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x353c62 + "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + a0_0x17241e + "\",\n\t\t  \"server_port\": " + a0_0x395861 + ",\n\t\t  \"tag\": \"CF_V13_" + a0_0x17241e + "_" + a0_0x395861 + "\",\n\t\t  \"tls\": {\n\t\t\t\"enabled\": true,\n\t\t\t\"server_name\": \"" + _0x38f32e + "\",\n\t\t\t\"insecure\": false,\n\t\t\t\"utls\": {\n\t\t\t  \"enabled\": true,\n\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t}\n\t\t  },\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x38f32e + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x353c62 + "\"\n\t\t},\n\t\t{\n\t\t  \"tag\": \"direct\",\n\t\t  \"type\": \"direct\"\n\t\t},\n\t\t{\n\t\t  \"tag\": \"auto\",\n\t\t  \"type\": \"urltest\",\n\t\t  \"outbounds\": [\n\t\t\t\"CF_V1_" + a0_0x8d5c5d + "_" + a0_0x471ec4 + "\",\n\t\t\t\"CF_V2_" + a0_0x3b95d3 + "_" + a0_0x5ab9d4 + "\",\n\t\t\t\"CF_V3_" + a0_0x5b26a7 + "_" + a0_0xbd0349 + "\",\n\t\t\t\"CF_V4_" + a0_0x2dc16a + "_" + a0_0x3692ee + "\",\n\t\t\t\"CF_V5_" + a0_0x337b0f + "_" + a0_0x35769f + "\",\n\t\t\t\"CF_V6_" + a0_0x25ca93 + "_" + a0_0x5efb35 + "\",\n\t\t\t\"CF_V7_" + a0_0x1c6097 + "_" + a0_0x1c5641 + "\",\n\t\t\t\"CF_V8_" + a0_0x1eee20 + "_" + a0_0x465415 + "\",\n\t\t\t\"CF_V9_" + a0_0x2f1bde + "_" + a0_0x90c39a + "\",\n\t\t\t\"CF_V10_" + a0_0x54603a + "_" + a0_0x70e12b + "\",\n\t\t\t\"CF_V11_" + a0_0x25d297 + "_" + a0_0xc318f1 + "\",\n\t\t\t\"CF_V12_" + a0_0x1113f1 + "_" + a0_0x29b3af + "\",\n\t\t\t\"CF_V13_" + a0_0x17241e + "_" + a0_0x395861 + "\"\n\t\t  ],\n\t\t  \"url\": \"https://www.gstatic.com/generate_204\",\n\t\t  \"interval\": \"1m\",\n\t\t  \"tolerance\": 50,\n\t\t  \"interrupt_exist_connections\": false\n\t\t}\n\t  ],\n\t  \"route\": {\n\t\t\"rule_set\": [\n\t\t  {\n\t\t\t\"tag\": \"geosite-geolocation-!cn\",\n\t\t\t\"type\": \"remote\",\n\t\t\t\"format\": \"binary\",\n\t\t\t\"url\": \"https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geosite/geolocation-!cn.srs\",\n\t\t\t\"download_detour\": \"select\",\n\t\t\t\"update_interval\": \"1d\"\n\t\t  },\n\t\t  {\n\t\t\t\"tag\": \"geosite-cn\",\n\t\t\t\"type\": \"remote\",\n\t\t\t\"format\": \"binary\",\n\t\t\t\"url\": \"https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geosite/geolocation-cn.srs\",\n\t\t\t\"download_detour\": \"select\",\n\t\t\t\"update_interval\": \"1d\"\n\t\t  },\n\t\t  {\n\t\t\t\"tag\": \"geoip-cn\",\n\t\t\t\"type\": \"remote\",\n\t\t\t\"format\": \"binary\",\n\t\t\t\"url\": \"https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geoip/cn.srs\",\n\t\t\t\"download_detour\": \"select\",\n\t\t\t\"update_interval\": \"1d\"\n\t\t  }\n\t\t],\n\t\t\"auto_detect_interface\": true,\n\t\t\"final\": \"select\",\n\t\t\"rules\": [\n                         {\n                        \"inbound\": \"tun-in\",\n                        \"action\": \"sniff\"\n                         },\n                          {\n                        \"protocol\": \"dns\",\n                           \"action\": \"hijack-dns\"\n                         },\n                        {\n                        \"port\": 443,\n                        \"network\": \"udp\",\n                        \"action\": \"reject\"\n                         },\n\t\t  {\n\t\t\t\"clash_mode\": \"Direct\",\n\t\t\t\"outbound\": \"direct\"\n\t\t  },\n\t\t  {\n\t\t\t\"clash_mode\": \"Global\",\n\t\t\t\"outbound\": \"select\"\n\t\t  },\n\t\t  {\n\t\t\t\"rule_set\": \"geoip-cn\",\n\t\t\t\"outbound\": \"direct\"\n\t\t  },\n\t\t  {\n\t\t\t\"rule_set\": \"geosite-cn\",\n\t\t\t\"outbound\": \"direct\"\n\t\t  },\n\t\t  {\n\t\t\t\"ip_is_private\": true,\n\t\t\t\"outbound\": \"direct\"\n\t\t  },\n\t\t  {\n\t\t\t\"rule_set\": \"geosite-geolocation-!cn\",\n\t\t\t\"outbound\": \"select\"\n\t\t  }\n\t\t]\n\t  },\n\t  \"ntp\": {\n\t\t\"enabled\": true,\n\t\t\"server\": \"time.apple.com\",\n\t\t\"server_port\": 123,\n\t\t\"interval\": \"30m\",\n\t\t\"detour\": \"direct\"\n\t  }\n\t}";
}
function a0_0x20efed(_0x85e8a0, _0x4e6edb) {
  const _0x6e9f29 = btoa("vless://" + _0x85e8a0 + "@" + a0_0x1eee20 + ":" + a0_0x465415 + "?encryption=none&security=tls&sni=" + _0x4e6edb + "&fp=randomized&type=ws&host=" + _0x4e6edb + "&path=%2F%3Fed%3D2560#CF_V8_" + a0_0x1eee20 + "_" + a0_0x465415 + "\nvless://" + _0x85e8a0 + "@" + a0_0x2f1bde + ":" + a0_0x90c39a + "?encryption=none&security=tls&sni=" + _0x4e6edb + "&fp=randomized&type=ws&host=" + _0x4e6edb + "&path=%2F%3Fed%3D2560#CF_V9_" + a0_0x2f1bde + "_" + a0_0x90c39a + "\nvless://" + _0x85e8a0 + "@" + a0_0x54603a + ":" + a0_0x70e12b + "?encryption=none&security=tls&sni=" + _0x4e6edb + "&fp=randomized&type=ws&host=" + _0x4e6edb + "&path=%2F%3Fed%3D2560#CF_V10_" + a0_0x54603a + "_" + a0_0x70e12b + "\nvless://" + _0x85e8a0 + "@" + a0_0x25d297 + ":" + a0_0xc318f1 + "?encryption=none&security=tls&sni=" + _0x4e6edb + "&fp=randomized&type=ws&host=" + _0x4e6edb + "&path=%2F%3Fed%3D2560#CF_V11_" + a0_0x25d297 + "_" + a0_0xc318f1 + "\nvless://" + _0x85e8a0 + "@" + a0_0x1113f1 + ":" + a0_0x29b3af + "?encryption=none&security=tls&sni=" + _0x4e6edb + "&fp=randomized&type=ws&host=" + _0x4e6edb + "&path=%2F%3Fed%3D2560#CF_V12_" + a0_0x1113f1 + "_" + a0_0x29b3af + "\nvless://" + _0x85e8a0 + "@" + a0_0x17241e + ":" + a0_0x395861 + "?encryption=none&security=tls&sni=" + _0x4e6edb + "&fp=randomized&type=ws&host=" + _0x4e6edb + "&path=%2F%3Fed%3D2560#CF_V13_" + a0_0x17241e + "_" + a0_0x395861);
  return "" + _0x6e9f29;
}
function a0_0x5ad5e1(_0x5b79d8, _0x1627c6) {
  return "\nport: 7890\nallow-lan: true\nmode: rule\nlog-level: info\nunified-delay: true\nglobal-client-fingerprint: chrome\ndns:\n  enable: true\n  listen: :53\n  ipv6: true\n  enhanced-mode: fake-ip\n  fake-ip-range: 198.18.0.1/16\n  default-nameserver: \n    - 223.5.5.5\n    - 114.114.114.114\n    - 8.8.8.8\n  nameserver:\n    - https://dns.alidns.com/dns-query\n    - https://doh.pub/dns-query\n  fallback:\n    - https://1.0.0.1/dns-query\n    - tls://dns.google\n  fallback-filter:\n    geoip: true\n    geoip-code: CN\n    ipcidr:\n      - 240.0.0.0/4\n\nproxies:\n- name: CF_V8_" + a0_0x1eee20 + "_" + a0_0x465415 + "\n  type: vless\n  server: " + a0_0x1eee20 + "\n  port: " + a0_0x465415 + "\n  uuid: " + _0x5b79d8 + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0x1627c6 + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x1627c6 + "\n\n- name: CF_V9_" + a0_0x2f1bde + "_" + a0_0x90c39a + "\n  type: vless\n  server: " + a0_0x2f1bde + "\n  port: " + a0_0x90c39a + "\n  uuid: " + _0x5b79d8 + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0x1627c6 + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x1627c6 + "\n\n- name: CF_V10_" + a0_0x54603a + "_" + a0_0x70e12b + "\n  type: vless\n  server: " + a0_0x54603a + "\n  port: " + a0_0x70e12b + "\n  uuid: " + _0x5b79d8 + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0x1627c6 + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x1627c6 + "\n\n- name: CF_V11_" + a0_0x25d297 + "_" + a0_0xc318f1 + "\n  type: vless\n  server: " + a0_0x25d297 + "\n  port: " + a0_0xc318f1 + "\n  uuid: " + _0x5b79d8 + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0x1627c6 + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x1627c6 + "\n\n- name: CF_V12_" + a0_0x1113f1 + "_" + a0_0x29b3af + "\n  type: vless\n  server: " + a0_0x1113f1 + "\n  port: " + a0_0x29b3af + "\n  uuid: " + _0x5b79d8 + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0x1627c6 + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x1627c6 + "\n\n- name: CF_V13_" + a0_0x17241e + "_" + a0_0x395861 + "\n  type: vless\n  server: " + a0_0x17241e + "\n  port: " + a0_0x395861 + "\n  uuid: " + _0x5b79d8 + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0x1627c6 + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x1627c6 + "\n\nproxy-groups:\n- name: \u8D1F\u8F7D\u5747\u8861\n  type: load-balance\n  url: http://www.gstatic.com/generate_204\n  interval: 300\n  proxies:\n    - CF_V8_" + a0_0x1eee20 + "_" + a0_0x465415 + "\n    - CF_V9_" + a0_0x2f1bde + "_" + a0_0x90c39a + "\n    - CF_V10_" + a0_0x54603a + "_" + a0_0x70e12b + "\n    - CF_V11_" + a0_0x25d297 + "_" + a0_0xc318f1 + "\n    - CF_V12_" + a0_0x1113f1 + "_" + a0_0x29b3af + "\n    - CF_V13_" + a0_0x17241e + "_" + a0_0x395861 + "\n\n- name: \u81EA\u52A8\u9009\u62E9\n  type: url-test\n  url: http://www.gstatic.com/generate_204\n  interval: 300\n  tolerance: 50\n  proxies:\n    - CF_V8_" + a0_0x1eee20 + "_" + a0_0x465415 + "\n    - CF_V9_" + a0_0x2f1bde + "_" + a0_0x90c39a + "\n    - CF_V10_" + a0_0x54603a + "_" + a0_0x70e12b + "\n    - CF_V11_" + a0_0x25d297 + "_" + a0_0xc318f1 + "\n    - CF_V12_" + a0_0x1113f1 + "_" + a0_0x29b3af + "\n    - CF_V13_" + a0_0x17241e + "_" + a0_0x395861 + "\n\n- name: \uD83C\uDF0D\u9009\u62E9\u4EE3\u7406\n  type: select\n  proxies:\n    - \u8D1F\u8F7D\u5747\u8861\n    - \u81EA\u52A8\u9009\u62E9\n    - DIRECT\n    - CF_V8_" + a0_0x1eee20 + "_" + a0_0x465415 + "\n    - CF_V9_" + a0_0x2f1bde + "_" + a0_0x90c39a + "\n    - CF_V10_" + a0_0x54603a + "_" + a0_0x70e12b + "\n    - CF_V11_" + a0_0x25d297 + "_" + a0_0xc318f1 + "\n    - CF_V12_" + a0_0x1113f1 + "_" + a0_0x29b3af + "\n    - CF_V13_" + a0_0x17241e + "_" + a0_0x395861 + "\n\nrules:\n  - GEOIP,LAN,DIRECT\n  - GEOIP,CN,DIRECT\n  - MATCH,\uD83C\uDF0D\u9009\u62E9\u4EE3\u7406";
}
function a0_0x483471(_0x11545a, _0x2ec142) {
  return "{\n\t\t  \"log\": {\n\t\t\t\"disabled\": false,\n\t\t\t\"level\": \"info\",\n\t\t\t\"timestamp\": true\n\t\t  },\n\t\t  \"experimental\": {\n\t\t\t\"clash_api\": {\n\t\t\t  \"external_controller\": \"127.0.0.1:9090\",\n\t\t\t  \"external_ui\": \"ui\",\n\t\t\t  \"external_ui_download_url\": \"\",\n\t\t\t  \"external_ui_download_detour\": \"\",\n\t\t\t  \"secret\": \"\",\n\t\t\t  \"default_mode\": \"Rule\"\n\t\t\t},\n\t\t\t\"cache_file\": {\n\t\t\t  \"enabled\": true,\n\t\t\t  \"path\": \"cache.db\",\n\t\t\t  \"store_fakeip\": true\n\t\t\t}\n\t\t  },\n\t\t  \"dns\": {\n\t\t\t\"servers\": [\n\t\t\t  {\n\t\t\t\t\"tag\": \"proxydns\",\n\t\t\t\t\"address\": \"tls://8.8.8.8/dns-query\",\n\t\t\t\t\"detour\": \"select\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"tag\": \"localdns\",\n\t\t\t\t\"address\": \"h3://223.5.5.5/dns-query\",\n\t\t\t\t\"detour\": \"direct\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"tag\": \"dns_fakeip\",\n\t\t\t\t\"address\": \"fakeip\"\n\t\t\t  }\n\t\t\t],\n\t\t\t\"rules\": [\n\t\t\t  {\n\t\t\t\t\"outbound\": \"any\",\n\t\t\t\t\"server\": \"localdns\",\n\t\t\t\t\"disable_cache\": true\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"clash_mode\": \"Global\",\n\t\t\t\t\"server\": \"proxydns\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"clash_mode\": \"Direct\",\n\t\t\t\t\"server\": \"localdns\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"rule_set\": \"geosite-cn\",\n\t\t\t\t\"server\": \"localdns\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"rule_set\": \"geosite-geolocation-!cn\",\n\t\t\t\t\"server\": \"proxydns\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"rule_set\": \"geosite-geolocation-!cn\",\n\t\t\t\t\"query_type\": [\n\t\t\t\t  \"A\",\n\t\t\t\t  \"AAAA\"\n\t\t\t\t],\n\t\t\t\t\"server\": \"dns_fakeip\"\n\t\t\t  }\n\t\t\t],\n\t\t\t\"fakeip\": {\n\t\t\t  \"enabled\": true,\n\t\t\t  \"inet4_range\": \"198.18.0.0/15\",\n\t\t\t  \"inet6_range\": \"fc00::/18\"\n\t\t\t},\n\t\t\t\"independent_cache\": true,\n\t\t\t\"final\": \"proxydns\"\n\t\t  },\n\t\t  \"inbounds\": [\n\t\t\t{\n\t\t\t  \"type\": \"tun\",\n                        \"tag\": \"tun-in\",\n\t\t  \"address\": [\n                    \"172.19.0.1/30\",\n\t\t    \"fd00::1/126\"\n      ],\n\t\t\t  \"auto_route\": true,\n\t\t\t  \"strict_route\": true,\n\t\t\t  \"sniff\": true,\n\t\t\t  \"sniff_override_destination\": true,\n\t\t\t  \"domain_strategy\": \"prefer_ipv4\"\n\t\t\t}\n\t\t  ],\n\t\t  \"outbounds\": [\n\t\t\t{\n\t\t\t  \"tag\": \"select\",\n\t\t\t  \"type\": \"selector\",\n\t\t\t  \"default\": \"auto\",\n\t\t\t  \"outbounds\": [\n\t\t\t\t\"auto\",\n\t\t\t\t\"CF_V8_" + a0_0x1eee20 + "_" + a0_0x465415 + "\",\n\t\t\t\t\"CF_V9_" + a0_0x2f1bde + "_" + a0_0x90c39a + "\",\n\t\t\t\t\"CF_V10_" + a0_0x54603a + "_" + a0_0x70e12b + "\",\n\t\t\t\t\"CF_V11_" + a0_0x25d297 + "_" + a0_0xc318f1 + "\",\n\t\t\t\t\"CF_V12_" + a0_0x1113f1 + "_" + a0_0x29b3af + "\",\n\t\t\t\t\"CF_V13_" + a0_0x17241e + "_" + a0_0x395861 + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t{\n\t\t\t  \"server\": \"" + a0_0x1eee20 + "\",\n\t\t\t  \"server_port\": " + a0_0x465415 + ",\n\t\t\t  \"tag\": \"CF_V8_" + a0_0x1eee20 + "_" + a0_0x465415 + "\",\n\t\t\t  \"tls\": {\n\t\t\t\t\"enabled\": true,\n\t\t\t\t\"server_name\": \"" + _0x2ec142 + "\",\n\t\t\t\t\"insecure\": false,\n\t\t\t\t\"utls\": {\n\t\t\t\t  \"enabled\": true,\n\t\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t\t}\n\t\t\t  },\n\t\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t\t  \"transport\": {\n\t\t\t\t\"headers\": {\n\t\t\t\t  \"Host\": [\n\t\t\t\t\t\"" + _0x2ec142 + "\"\n\t\t\t\t  ]\n\t\t\t\t},\n\t\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\t\"type\": \"ws\"\n\t\t\t  },\n\t\t\t  \"type\": \"vless\",\n\t\t\t  \"uuid\": \"" + _0x11545a + "\"\n\t\t\t},\n\t\t\t{\n\t\t\t  \"server\": \"" + a0_0x2f1bde + "\",\n\t\t\t  \"server_port\": " + a0_0x90c39a + ",\n\t\t\t  \"tag\": \"CF_V9_" + a0_0x2f1bde + "_" + a0_0x90c39a + "\",\n\t\t\t  \"tls\": {\n\t\t\t\t\"enabled\": true,\n\t\t\t\t\"server_name\": \"" + _0x2ec142 + "\",\n\t\t\t\t\"insecure\": false,\n\t\t\t\t\"utls\": {\n\t\t\t\t  \"enabled\": true,\n\t\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t\t}\n\t\t\t  },\n\t\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t\t  \"transport\": {\n\t\t\t\t\"headers\": {\n\t\t\t\t  \"Host\": [\n\t\t\t\t\t\"" + _0x2ec142 + "\"\n\t\t\t\t  ]\n\t\t\t\t},\n\t\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\t\"type\": \"ws\"\n\t\t\t  },\n\t\t\t  \"type\": \"vless\",\n\t\t\t  \"uuid\": \"" + _0x11545a + "\"\n\t\t\t},\n\t\t\t{\n\t\t\t  \"server\": \"" + a0_0x54603a + "\",\n\t\t\t  \"server_port\": " + a0_0x70e12b + ",\n\t\t\t  \"tag\": \"CF_V10_" + a0_0x54603a + "_" + a0_0x70e12b + "\",\n\t\t\t  \"tls\": {\n\t\t\t\t\"enabled\": true,\n\t\t\t\t\"server_name\": \"" + _0x2ec142 + "\",\n\t\t\t\t\"insecure\": false,\n\t\t\t\t\"utls\": {\n\t\t\t\t  \"enabled\": true,\n\t\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t\t}\n\t\t\t  },\n\t\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t\t  \"transport\": {\n\t\t\t\t\"headers\": {\n\t\t\t\t  \"Host\": [\n\t\t\t\t\t\"" + _0x2ec142 + "\"\n\t\t\t\t  ]\n\t\t\t\t},\n\t\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\t\"type\": \"ws\"\n\t\t\t  },\n\t\t\t  \"type\": \"vless\",\n\t\t\t  \"uuid\": \"" + _0x11545a + "\"\n\t\t\t},\n\t\t\t{\n\t\t\t  \"server\": \"" + a0_0x25d297 + "\",\n\t\t\t  \"server_port\": " + a0_0xc318f1 + ",\n\t\t\t  \"tag\": \"CF_V11_" + a0_0x25d297 + "_" + a0_0xc318f1 + "\",\n\t\t\t  \"tls\": {\n\t\t\t\t\"enabled\": true,\n\t\t\t\t\"server_name\": \"" + _0x2ec142 + "\",\n\t\t\t\t\"insecure\": false,\n\t\t\t\t\"utls\": {\n\t\t\t\t  \"enabled\": true,\n\t\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t\t}\n\t\t\t  },\n\t\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t\t  \"transport\": {\n\t\t\t\t\"headers\": {\n\t\t\t\t  \"Host\": [\n\t\t\t\t\t\"" + _0x2ec142 + "\"\n\t\t\t\t  ]\n\t\t\t\t},\n\t\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\t\"type\": \"ws\"\n\t\t\t  },\n\t\t\t  \"type\": \"vless\",\n\t\t\t  \"uuid\": \"" + _0x11545a + "\"\n\t\t\t},\n\t\t\t{\n\t\t\t  \"server\": \"" + a0_0x1113f1 + "\",\n\t\t\t  \"server_port\": " + a0_0x29b3af + ",\n\t\t\t  \"tag\": \"CF_V12_" + a0_0x1113f1 + "_" + a0_0x29b3af + "\",\n\t\t\t  \"tls\": {\n\t\t\t\t\"enabled\": true,\n\t\t\t\t\"server_name\": \"" + _0x2ec142 + "\",\n\t\t\t\t\"insecure\": false,\n\t\t\t\t\"utls\": {\n\t\t\t\t  \"enabled\": true,\n\t\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t\t}\n\t\t\t  },\n\t\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t\t  \"transport\": {\n\t\t\t\t\"headers\": {\n\t\t\t\t  \"Host\": [\n\t\t\t\t\t\"" + _0x2ec142 + "\"\n\t\t\t\t  ]\n\t\t\t\t},\n\t\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\t\"type\": \"ws\"\n\t\t\t  },\n\t\t\t  \"type\": \"vless\",\n\t\t\t  \"uuid\": \"" + _0x11545a + "\"\n\t\t\t},\n\t\t\t{\n\t\t\t  \"server\": \"" + a0_0x17241e + "\",\n\t\t\t  \"server_port\": " + a0_0x395861 + ",\n\t\t\t  \"tag\": \"CF_V13_" + a0_0x17241e + "_" + a0_0x395861 + "\",\n\t\t\t  \"tls\": {\n\t\t\t\t\"enabled\": true,\n\t\t\t\t\"server_name\": \"" + _0x2ec142 + "\",\n\t\t\t\t\"insecure\": false,\n\t\t\t\t\"utls\": {\n\t\t\t\t  \"enabled\": true,\n\t\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t\t}\n\t\t\t  },\n\t\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t\t  \"transport\": {\n\t\t\t\t\"headers\": {\n\t\t\t\t  \"Host\": [\n\t\t\t\t\t\"" + _0x2ec142 + "\"\n\t\t\t\t  ]\n\t\t\t\t},\n\t\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\t\"type\": \"ws\"\n\t\t\t  },\n\t\t\t  \"type\": \"vless\",\n\t\t\t  \"uuid\": \"" + _0x11545a + "\"\n\t\t\t},\n\t\t\t{\n\t\t\t  \"tag\": \"direct\",\n\t\t\t  \"type\": \"direct\"\n\t\t\t},\n\t\t\t{\n\t\t\t  \"tag\": \"auto\",\n\t\t\t  \"type\": \"urltest\",\n\t\t\t  \"outbounds\": [\n\t\t\t\t\"CF_V8_" + a0_0x1eee20 + "_" + a0_0x465415 + "\",\n\t\t\t\t\"CF_V9_" + a0_0x2f1bde + "_" + a0_0x90c39a + "\",\n\t\t\t\t\"CF_V10_" + a0_0x54603a + "_" + a0_0x70e12b + "\",\n\t\t\t\t\"CF_V11_" + a0_0x25d297 + "_" + a0_0xc318f1 + "\",\n\t\t\t\t\"CF_V12_" + a0_0x1113f1 + "_" + a0_0x29b3af + "\",\n\t\t\t\t\"CF_V13_" + a0_0x17241e + "_" + a0_0x395861 + "\"\n\t\t\t  ],\n\t\t\t  \"url\": \"https://www.gstatic.com/generate_204\",\n\t\t\t  \"interval\": \"1m\",\n\t\t\t  \"tolerance\": 50,\n\t\t\t  \"interrupt_exist_connections\": false\n\t\t\t}\n\t\t  ],\n\t\t  \"route\": {\n\t\t\t\"rule_set\": [\n\t\t\t  {\n\t\t\t\t\"tag\": \"geosite-geolocation-!cn\",\n\t\t\t\t\"type\": \"remote\",\n\t\t\t\t\"format\": \"binary\",\n\t\t\t\t\"url\": \"https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geosite/geolocation-!cn.srs\",\n\t\t\t\t\"download_detour\": \"select\",\n\t\t\t\t\"update_interval\": \"1d\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"tag\": \"geosite-cn\",\n\t\t\t\t\"type\": \"remote\",\n\t\t\t\t\"format\": \"binary\",\n\t\t\t\t\"url\": \"https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geosite/geolocation-cn.srs\",\n\t\t\t\t\"download_detour\": \"select\",\n\t\t\t\t\"update_interval\": \"1d\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"tag\": \"geoip-cn\",\n\t\t\t\t\"type\": \"remote\",\n\t\t\t\t\"format\": \"binary\",\n\t\t\t\t\"url\": \"https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geoip/cn.srs\",\n\t\t\t\t\"download_detour\": \"select\",\n\t\t\t\t\"update_interval\": \"1d\"\n\t\t\t  }\n\t\t\t],\n\t\t\t\"auto_detect_interface\": true,\n\t\t\t\"final\": \"select\",\n\t\t\t\"rules\": [\n                          {\n                         \"inbound\": \"tun-in\",\n                          \"action\": \"sniff\"\n                          },\n                          {\n                          \"protocol\": \"dns\",\n                          \"action\": \"hijack-dns\"\n                           },\n                          {\n                           \"port\": 443,\n                          \"network\": \"udp\",\n                          \"action\": \"reject\"\n                          },\n\t\t\t  {\n\t\t\t\t\"clash_mode\": \"Direct\",\n\t\t\t\t\"outbound\": \"direct\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"clash_mode\": \"Global\",\n\t\t\t\t\"outbound\": \"select\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"rule_set\": \"geoip-cn\",\n\t\t\t\t\"outbound\": \"direct\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"rule_set\": \"geosite-cn\",\n\t\t\t\t\"outbound\": \"direct\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"ip_is_private\": true,\n\t\t\t\t\"outbound\": \"direct\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"rule_set\": \"geosite-geolocation-!cn\",\n\t\t\t\t\"outbound\": \"select\"\n\t\t\t  }\n\t\t\t]\n\t\t  },\n\t\t  \"ntp\": {\n\t\t\t\"enabled\": true,\n\t\t\t\"server\": \"time.apple.com\",\n\t\t\t\"server_port\": 123,\n\t\t\t\"interval\": \"30m\",\n\t\t\t\"detour\": \"direct\"\n\t\t  }\n\t\t}";
}