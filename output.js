//Sat Aug 17 2024 14:10:16 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
/*
活动名称：超级818红包活动
环境变量：jd_818_url // 活动链接\ID 都可以
        jd_818_threads // 控制并发线程数（正整数），默认1，最大5，尽量使用默认值，否则请开启代理运行
        jd_818_interval // 自定义运行间隔时长（整数，单位毫秒），默认2000
        jd_818_notify // 是否推送通知（true/false），默认不推送
        jd_818_pinFilter // 账号pin过滤，多个用@进行分割

高并发脚本，谨慎使用并发
活动限制IP严重，建议使用代理

随机定时

*/

const $ = new Env("\u8D85\u7EA7818");
var iｉl = "jsjiami.com.v7";
const l1iIl111 = iII1iiI;
(function (ill1iI1i, l11li1Il, l11illli, IIlI1l1I, liii1ll, i1111iIl, I1i11i11) {
  return ill1iI1i = ill1iI1i >> 9, i1111iIl = "hs", I1i11i11 = "hs", function (I111IIll, l11Il1l1, liilil1i, Ii1iI111, Iilll1) {
    const lIlli1Il = iII1iiI;
    Ii1iI111 = "tfi", i1111iIl = Ii1iI111 + i1111iIl, Iilll1 = "up", I1i11i11 += Iilll1, i1111iIl = liilil1i(i1111iIl), I1i11i11 = liilil1i(I1i11i11), liilil1i = 0;
    const I1ll1l1l = I111IIll();
    while (!![] && --IIlI1l1I + l11Il1l1) {
      try {
        Ii1iI111 = -parseInt(lIlli1Il(358, "(i2(")) / 1 * (parseInt(lIlli1Il(719, "#ilO")) / 2) + parseInt(lIlli1Il(659, "l@O[")) / 3 + -parseInt(lIlli1Il(495, "2cM3")) / 4 * (-parseInt(lIlli1Il(697, "#ilO")) / 5) + -parseInt(lIlli1Il(478, "5&Be")) / 6 * (-parseInt(lIlli1Il(235, "zIZ7")) / 7) + parseInt(lIlli1Il(512, "wP(Z")) / 8 + parseInt(lIlli1Il(371, "2cM3")) / 9 + -parseInt(lIlli1Il(681, "[AqX")) / 10;
      } catch (iIl1IiiI) {
        Ii1iI111 = liilil1i;
      } finally {
        Iilll1 = I1ll1l1l[i1111iIl]();
        if (ill1iI1i <= IIlI1l1I) liilil1i ? liii1ll ? Ii1iI111 = Iilll1 : liii1ll = Iilll1 : liilil1i = Iilll1;else {
          if (liilil1i == liii1ll["replace"](/[XYhwFMVfTxGWPOCEIyrbu=]/g, "")) {
            if (Ii1iI111 === l11Il1l1) {
              I1ll1l1l["un" + i1111iIl](Iilll1);
              break;
            }
            I1ll1l1l[I1i11i11](Iilll1);
          }
        }
      }
    }
  }(l11illli, l11li1Il, function (lIi1iiil, iliIIil1, I1iiI1ll, ilIi1l1I, IlIil11l, iiil1lI, lIlli1I1) {
    return iliIIil1 = "split", lIi1iiil = arguments[0], lIi1iiil = lIi1iiil[iliIIil1](""), I1iiI1ll = "reverse", lIi1iiil = lIi1iiil[I1iiI1ll]("v"), ilIi1l1I = "join", (1567439, lIi1iiil[ilIi1l1I](""));
  });
}(100864, 955265, Il1Ili1I, 199), Il1Ili1I) && (iｉl = 9194);
const jdCookie = require(l1iIl111(724, "yVhj")),
  common = require(l1iIl111(535, "POES")),
  notify = require("./utils/Rebels_sendJDNotify"),
  {
    H5st,
    jsTk
  } = require("./utils/Rebels_H");
let red618_url = process["env"][l1iIl111(509, "POES")] || "",
  redshareId = (process["env"][l1iIl111(664, "5&Be")] || "")["split"](/[,@\n]+/g)[l1iIl111(728, "1#OP")](liIiiiII => liIiiiII[l1iIl111(261, "syjB")]())[l1iIl111(415, "5&Be")](Boolean),
  maxdraw = process[l1iIl111(610, "Si%b")][l1iIl111(566, "dOzb")] || "1",
  taskThreads = process[l1iIl111(426, "bcV[")][l1iIl111(255, "l#Y%")] || "1";
const runInterval = process[l1iIl111(363, "R]Vr")][l1iIl111(550, "POES")] || l1iIl111(589, "uLOZ"),
  isNotify = (process[l1iIl111(626, "syjB")]["jd_818_notify"] || process["env"][l1iIl111(629, "dOzb")]) === l1iIl111(547, "r4dy"),
  pinFilter = (process[l1iIl111(609, "a!!@")]["jd_818_pinFilter"] || "")[l1iIl111(330, "yVhj")]("@"),
  endTime = 1723996799000,
  maxThreads = 5;
let unionActId = l1iIl111(749, "Q)[D"),
  actId,
  Referer,
  cookiesArr = Object[l1iIl111(419, "Mn3#")](jdCookie)["map"](i1I1i1il => jdCookie[i1I1i1il])["filter"](IiiIi1iI => IiiIi1iI);
!cookiesArr[0] && ($[l1iIl111(716, "[O4@")]($["name"], l1iIl111(713, "syjB")), process[l1iIl111(283, "(i2(")](1));
const prize_map = {
  1: l1iIl111(685, "RTlN"),
  3: l1iIl111(545, "IB(Z"),
  6: "[\u6253\u6298\u5238]",
  17: l1iIl111(576, "Si%b"),
  18: l1iIl111(674, "dOzb"),
  19: "[\u8D85\u5E02\u5361]"
};
function iII1iiI(_0x2b13e6, _0x216c2a) {
  const _0x2d2cd5 = Il1Ili1I();
  return iII1iiI = function (_0x580b1d, _0x5ad6ab) {
    _0x580b1d = _0x580b1d - 229;
    let _0x2292e0 = _0x2d2cd5[_0x580b1d];
    if (iII1iiI["kSaZim"] === undefined) {
      var _0x3076ac = function (_0x4f4999) {
        const _0x174163 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let _0xfff208 = "",
          _0x15c334 = "";
        for (let _0x3c21e1 = 0, _0x4b770b, _0x47dc8a, _0x3c2d4a = 0; _0x47dc8a = _0x4f4999["charAt"](_0x3c2d4a++); ~_0x47dc8a && (_0x4b770b = _0x3c21e1 % 4 ? _0x4b770b * 64 + _0x47dc8a : _0x47dc8a, _0x3c21e1++ % 4) ? _0xfff208 += String["fromCharCode"](255 & _0x4b770b >> (-2 * _0x3c21e1 & 6)) : 0) {
          _0x47dc8a = _0x174163["indexOf"](_0x47dc8a);
        }
        for (let _0x2d76eb = 0, _0x458fd9 = _0xfff208["length"]; _0x2d76eb < _0x458fd9; _0x2d76eb++) {
          _0x15c334 += "%" + ("00" + _0xfff208["charCodeAt"](_0x2d76eb)["toString"](16))["slice"](-2);
        }
        return decodeURIComponent(_0x15c334);
      };
      const _0x11e784 = function (_0x405f72, _0x1a7a3f) {
        let _0x39db92 = [],
          _0xc4c88 = 0,
          _0x4b3cec,
          _0x1d2123 = "";
        _0x405f72 = _0x3076ac(_0x405f72);
        let _0x3f57be;
        for (_0x3f57be = 0; _0x3f57be < 256; _0x3f57be++) {
          _0x39db92[_0x3f57be] = _0x3f57be;
        }
        for (_0x3f57be = 0; _0x3f57be < 256; _0x3f57be++) {
          _0xc4c88 = (_0xc4c88 + _0x39db92[_0x3f57be] + _0x1a7a3f["charCodeAt"](_0x3f57be % _0x1a7a3f["length"])) % 256, _0x4b3cec = _0x39db92[_0x3f57be], _0x39db92[_0x3f57be] = _0x39db92[_0xc4c88], _0x39db92[_0xc4c88] = _0x4b3cec;
        }
        _0x3f57be = 0, _0xc4c88 = 0;
        for (let _0x52c435 = 0; _0x52c435 < _0x405f72["length"]; _0x52c435++) {
          _0x3f57be = (_0x3f57be + 1) % 256, _0xc4c88 = (_0xc4c88 + _0x39db92[_0x3f57be]) % 256, _0x4b3cec = _0x39db92[_0x3f57be], _0x39db92[_0x3f57be] = _0x39db92[_0xc4c88], _0x39db92[_0xc4c88] = _0x4b3cec, _0x1d2123 += String["fromCharCode"](_0x405f72["charCodeAt"](_0x52c435) ^ _0x39db92[(_0x39db92[_0x3f57be] + _0x39db92[_0xc4c88]) % 256]);
        }
        return _0x1d2123;
      };
      iII1iiI["pHChCG"] = _0x11e784, _0x2b13e6 = arguments, iII1iiI["kSaZim"] = !![];
    }
    const _0x3274a6 = _0x2d2cd5[0],
      _0x14ee18 = _0x580b1d + _0x3274a6,
      _0x52c8a8 = _0x2b13e6[_0x14ee18];
    return !_0x52c8a8 ? (iII1iiI["zsAaRR"] === undefined && (iII1iiI["zsAaRR"] = !![]), _0x2292e0 = iII1iiI["pHChCG"](_0x2292e0, _0x5ad6ab), _0x2b13e6[_0x14ee18] = _0x2292e0) : _0x2292e0 = _0x52c8a8, _0x2292e0;
  }, iII1iiI(_0x2b13e6, _0x216c2a);
}
function Il1Ili1I() {
  const ilIliiIl = function () {
    return [iｉl, "fGCYjsWjYiTaXwmhXViXEO.uVMcFboIyxmPF.rv7==", "WQFdQgTA", "pSkjFG", "n8k3CmkpW4S", "W5DVyra9", "qmkBWQddUCkP", "W6xcUKtdMK0", "xSkrWQBcH8o3W5BdSSkYW7FdSG", "z1FcU8ouW4ldPmopia", "yrzpWPnqamo+dghdRSkQWQ5sg3hdJsG", "wrbGdLxcKXzAgSkOW5pcQmke", "WQ3cKJVcU1nB", "WO7cUKXzsmkw", "zSoAWOq", "W57dGuW", "guddKx7cNG", "WRJcNM8UuW", "W4lcI0RcULBdJG", "i8kcWPXMrG", "5l+i5Ak55yEG55QU6zoc5OYo5lQ1776c", "oCkIWQ1xEa", "eSoKbSoqW7C", "5BsT6k2H57646lE86l+U6l+66kkq5BYf5yQY6lAZ5y+8", "WOJdLmoM", "W7/ORkJMSPtLK4lLUR0k", "W4BcTXXoBSooW6ldTXKfke3cRmkaW5OaW6FdVmkMWO3dRq", "W6yAp8oO", "W4tcSgFdIxu", "WPHoWOBdNSoFp8kfWOtdOG3dUSk7WQJdKa", "aKybtWa", "WRBcSCkYALfLWRO", "8y6iMSk4", "Cb1qW69eWOa", "gSoAWOZdI8kVWOldNSoOW5FdU8k5WRNdGtGzW7W3WOpdSgRdUqDa", "WOlcHSk5wZBcJSkcW6hcKmktW4C", "W6GuiSoN", "W4GEWQK", "W7mTW6HTW61iW6K", "c0BdNxRcKX8", "W6XzuSk5wSkhEmkvrSk3W40VW7hdHvZdQGddS2pcPKb4WOi1", "BbDo", "WQ4cfqhdTG", "aLaHFW3dGeu", "r+s9OoAdNUwkSg0", "WPvbuYKPrbeDWPHL", "W5PErc0", "y1qLuCk/", "ox3dL8kbeq", "xSkrWQBcH8o3W5BdSSkUW6VdQSk+WQ7dMYOQ", "CSkmWOhdR8kk", "WRNdVNjr", "WRS1W5vMCSkY", "4P6OWPVMNQVOGRFMRkxNO7JLP5FNKBRdHW", "sdHpWQbC", "WP8JbsdcTq", "iCkuWOLNxmkuWQqiW6jz", "CeRcJCobW4tdQa", "4P2ku+ACKEIaUUATMUEGG+wMN+ErSc4", "xZvbWOzo", "W4ykDa", "pmo8WRxcM8oWj0TRWQu", "sLDXWOq2WO/dRmk8", "vvKZxmkNW7a", "yv3cJmkwWOhcTCo+mSogua", "WQ/dLCohWQ5FWQBcMv9IW6RdIHygjW", "W5VdGeJdSunnoJe", "WQ/cSmkM", "WRH0xSoj", "WQu+dWhdUa", "WQZcGZNcTKG", "ubHObfZcNb8TC8of", "WOZcI0u", "h1hdTSk8dG", "FCkWW5/dMha", "WOBNQRNLHRBLIzddNW", "WQhdKmo0", "qmoRWQqfjG", "W7hcHmkTWQfAWQZdSNHxW4ldMWCk", "fmkKtSkqW7u", "WP8CaNPgefmeWPyjW48fW7i", "pmkdFmkcW6hcQ2VdJmoLWRPotg85lJVcPCorWRy5cq", "WOJcGummC8kKfq", "W6aqomoHcKG", "zSodWQuUkG", "W6tdPsm", "W7ZcLJrcFW", "vColh8oSWP1XW4qOnCkV", "CSkhymkU", "WOBIN4JcVW", "xWVdR2mR", "ghBdUG", "WQr6y8oUW4u", "u1LV", "W65jrW", "kCk+mSkvW7G", "CrjsWRnTbmo2eW", "W5NOR5VMS5JLP4NOT65m4P2/BW", "WQeCW4rIW7Tk", "qtzV", "WO8PjGBcHG", "WQVcSmkfE1TdWRiX", "WR96rmooW4Cr", "W5i7W4XIy8kwDmkV", "DbzlWQTydSo+", "Bw7dP1CUfxhdLCkCmW", "WOPCW7BcKCk/", "W5WCC8kJ", "WRBdV20", "WRGCdW", "5BEv6k6g57YZ6lEl6lYp6l2n6kcq5B++5yMJ6lAw5y6v", "FSoSCCoiWP/cUJpdHrZdVHtcGfW", "5lUL55g15BY75yA0a03dGa", "tcpdQ0m+", "r0n0WRCU", "W4GXW7PYq8kAD8kNhM/dP1vxrmoeCSo0W6H4W5yH", "WPfkWP/dTW", "44gC5OYl56w944oQ6k2F5yEc6i685y2hkCoahmkzyeG", "A8oJWQa", "W6dcMr9KBW", "CrPFW5DDWP3cRCk7", "mSosiCoRW7bkiW", "W7BcSg7dKgC", "WPGQgsW", "n8kcWOTxva", "WRRcSCkG", "WQldLmoSW5SlW63cTvnKW7C", "xfr7WPqhWOdcSCoOW7FdQe1rkSoNfmkN", "WQ/dLCohWQ5FWQBcMxXSW6BdHWiE", "WRO3idddUa", "WOVcMLBcU2BdKeFdMxSreSo1jW", "BwNdS1uadW", "W6Hcqq", "eqJdNNZcHa", "W7VdJqhdSSoe", "44o06lAD5y22", "6zci5O2m5AED6lso", "W7H/CWa8", "WQ3cICkVEMa", "WRpcNdi", "lCksWPO", "wmocWPOsW4K", "lHRdI0xcU2ldVZlcKSoQv3OBWQO", "DK7cGmoJW6u", "WQ8AW719W5W", "kgFcT8okW5tdRSkC", "W4FcI03cQG", "WRxcLZC", "mfZdLh/cIG", "Fg9FWOaQ", "nsNcL8odbq", "WQVcTSoYW73cM8kzW7O", "WOOJW7LQW7W", "F8okWQxcRSoS", "DhS+s8k7", "6kYR5BcO5B+b5l2g5Q+n77265y+L5BcN6k6P6yEn5zoB5AYZ5zM477676BQL6k6C57Mt57MY6lYI6kk7", "qJBdNumf", "WOpdNSo1csNdO8kJe8kjW6i", "WPLrmmo/WRpdVu18FKldMSku", "WQNdLmo2W7eAW7y", "WReDhG", "nCkdBCkUWOBcVxi", "W7KFC8kKW7i", "W4lcTIysdCktW5ddSqSt", "Dmo8WQVcL8oB", "W5NcHedcU0hdReq", "WRNdJCo6W64", "veGXuCk8", "tCoTWQ0zW6O", "WOJcHCofW6tcIa", "y8oBWOa7W43dOGvJ", "WOpcNM0Nuq", "pbZcOSkkbmozWQpdGbpdJa", "WP7LRk/NI7hdIW", "W63dSI3dIq", "n8oXWRXoWQK", "uCkKWPddLSk+", "WOFcImkCFuC"].concat(function () {
      return ["EX1kW5HcWOFcVmkMcdLQpgiy", "WQ4BW5TZW6Xm", "vKVdOSkFF8kfW7ZdQI/dU8kVWOTD", "lCowjmo9W70", "WPTqFG", "q/cGOzWM6lYe6kgb57Mh5P+hW70", "FoE6MUwnMgu", "W4i9W6X1FSkkDmk8", "r8k7W5/dPa", "o8kKD8kFW5S", "ECofWO8+W4W", "WR5TBCoEW5K", "W4HwrGuU", "r3ldGviI", "omkjCmki", "WONdNX3dRaJdLNtdJKmGgW", "bhaXBaK", "WQ/cI8ktFLm", "WOxcS3xcQe7dPuC", "WPlcGuzEj8oUbtKpia", "p8kyaSkjW4C", "WRRdV3HtggRcSSop", "4PQdWONOHlFLR6BKUilOVRBOOi3PLiNPMBNML5FPLyhORihNVz7PL6lORk8", "6k6A5Bcy5B6+5l+x5QYc776T5y+n5Bcn6k6B6ys15zkj5A2Y5zQb77YK6BQ76kYG57MI57QM6l2n6kog", "W6ldOSoRmHqxW6fRW4lcQa", "ACknW5fLW5K", "aIZcOSodjq", "hfZdLwu", "p3ydDWm", "behdMW", "yeJcHmojW4q", "6k+X5Bgo5B+q5lYP5Q2A772H5y205BgR6k+B6ywn5zoG5A2y5zMC772X6BUA6kYm57Q757Uw6lYi6kcP", "WOTkWOldT8o0", "W7ddSJZdHCozW7/dUrxdR1WXw8ocW5zAWRjqeCoUWRL/DCk2xWrJeXxdMmoRza", "44op5OYp56ES44cE6k+E5ywI6i2R5y6aWRZdUMqPw8kN", "nmopW7LKWQe", "ymoEWPSXW78", "WPrFW70", "W7DiuSoKsSosomortSkI", "CSk2W77dHvC", "WOlcV0lcT0ddK1G", "5y6W6yEH5B685zcN54MK5OgQW4KrWOBcVmoAW5xcMmk4W7pdGa", "CW7dULeaWROSf8kFkYVcT0pcGGGalW", "WRdcQSkIsuvlWRS", "W7RdPthdK8of", "y8k2W7TjWOtdPmklWR7dKCkT", "WQVdL3LVlG", "4P2gWPxOH7NMNBVOVAJOO4RPGkFLIkdKUlNPLBFORzhdVq", "f8klWPq", "DHVdVG", "DHDxW6y", "W4i+m8oIfq", "W7WajCoU", "WR3cSSo3W6K", "b0O8vW", "iCocjmo2W7PlfeVdGmk5", "W70aoCoYhW", "6lsw5yYT5Pww5PEy", "W5ZcHum", "W7WFW5npEq", "5lYG5Akk5ywK55Ql6zon5O2d5lUD7729", "lSkoWOO", "WQNdNSo/", "hWZcPCop", "W7Sup8oYkKNdGmoV", "s10Zx8k8W7u", "W44GW6TMySofnCoNghJdIXrvaCohC8ktW6vZW54", "ufK0tmkCW7qXW4G", "W4FcI03cQM3dIK/dJW", "WQZcRwNdOMxdQSkV", "WRCCf8oXgW", "WRqChq3dUMpcQa", "WRT/WQddLSoj", "5RE25yIx5BwH5lInuG", "umoLWQiZW7O", "dSo+W79cWOW", "WRW9iW7cKa", "WORcI0Sg", "xSkrWQy", "WRa+W7LdW4y", "WOhcHKemC8kWvMDzDMBdT2WDB8ol", "ySoHomkRWO4", "6lE/5yYK5PwJ5PEa", "gmoeWR8DfbuOWPNdKa", "EbfmW61tWPW", "DCoPWRBcI8okj1O", "WRdcKahcQv0", "nZtcQXvWdMVdMmkKh8oC", "6k+k5AgD5yAb5Q6t56cm55MI6zg/5O28", "zWzpWQ9wh8oygwRdPq", "WOxcQSkPwsK", "W4SbW6TYCW", "WQajgYJcRW", "pxJdR8kVmq", "y8oKWOtcKSoz", "a0q4xa", "W5zfW7tcNmkUfmonj8o2f3W", "WPhcKu0CDW", "ACoDWOiLW7VdQqr1W74A", "5y6v6yww54IN5OcS57Iu5P+uW5NdQmkfW7uZWPJcJCkTWQBdRW", "W4jdvG", "6ycU55Yq5O2r6yk+W7ZdJSo2", "Fmo2WRCykLS", "W4OXW7fXzCkx", "lrBdJwpcT3K", "DXxdQq", "sh4zFmkL", "aKRdOZddO1pcQ1JdK8oZWOlcICobW7y", "lCkeWO58uSkbWOi", "gCownmo/W7C", "DvpcOSo0W5C", "pSknpSkoW6e", "WOBcHSkC", "WQVcRCk/yG", "CW7dULeaWROSf8kADY7dVqddJW0jlJpdIbtcNbehW4ddLmoEWR1KW4a5oSkjWPi", "WRFcKSkfzfW", "WOGsjbZcTa", "WOddHXBdSWdcMHS", "W7ryvCkH", "5l6T5Aou5ysk55Ih6zkm5O+N5lUa77Yg", "4PQUiEIfUowUVEs4IoI+Q+IHSEMvIoMzU+AwSEMxHEIUOUE8KoMvQUISHa", "tLy+vmk9W7K5W54", "WORcKCosW4NcIG", "WPqvmcFcPa", "kHddM2m", "dLCHscG", "4P+idEACJoECRoIVNUAZV3C", "WRFcVmo0", "WR7dU253oa", "5RsD5yIg5BAz5lMpW54", "W6VdI2pdTem", "WORcNeOhEmkXbdCegJhcQq", "W4Dcsmk9tmoti8kxC8k+W5rK", "WPK2bspcQq", "WQ/cGmosW67cMq", "W7lcIL/dVa", "iCo2W7y", "bSoSW55uWOq", "oZVdTMVcOG", "WOa8dG", "CmoVWR8YpW", "q1KPwq", "d8oshCoRW7O", "EX1kW5XzWOxcOq", "WR0VW6HxBSk/jhu", "fKhdTSkmlG", "WOxcMCkaqJi", "qLVdOeyV", "auW4ubxdSLzI", "tur9WQ8rWOpdSSkQWQZcTbC", "WO8+pt7dGW", "4PQhgoIgT+wUOUs6GEI9JEIGKoMvMEMAUUAvHUMuNEITKEE/GEMuMoIUQG", "WQbhW6G2WQCoW7RdQW", "lCkiWPm", "6zwe6zM+5PEs6zAHa8kdEq", "B8oZWQ8Djq", "nmkoWQ57qCkpWOKa", "nCochmozW7G", "WQddJmo0", "6k+95AoE5yw65QY056ow55Ic6zkE5O61", "eSk3WRnRyW", "sLKT", "W5DRrmkhxq", "W6aAmq", "W5BORj7MSQ7LPjROTApdI+kDRmkc5Psr5zcT5BI25Pw35O6p", "AHXC", "vfa0xSk8", "sSobda", "W6jexG", "W4O7W7G", "WQChW5bZDW", "WRRdK0nucW", "q8oDWO4vW5e", "WRBdGCo0W78A", "WRScW5TUW70", "iXddLMG", "5Bwc57IL6AkI5yYi6l++", "WR/dNCoCW5OI"].concat(function () {
        return ["rfa8sSkjW6K", "u8kqWO3dVmkPWPVdNCkOW6VdRq", "WPfeWOxdHSoznCkj", "W4qkza", "pSoPW71eWRm", "WQpdRCoHnW", "pCkGWQn0ya", "EgziWOCy", "W4elymkQW7lcQNL+", "WOtcImkctYNcHG", "W4uZDSk0W5e", "pCoRW7rYWRtdRSkv", "WPxcGu4cFG", "AaRdOKGh", "WRP5rCohW5W", "xSk7W5VdTq", "wH3cHq", "W4jjxY8cqq", "z8kVW7tdK1y", "WR3cLWpcMg8", "WRFdHmo2W5maW7O", "WOhdISo1aZy", "AbDTW7XcWOhcQSk4", "5BE057Q86Ak95yYr6l++", "hLu5ubu", "iSktASko", "p8o8W6fbWQBdQmkb", "aXZcUmoam8oE", "WROtW5LJW6zt", "WOu9cIxcTmk4qae", "W4xcTWPzxComW6O", "WQqDW5a", "WQBdGGxcUJhcSCkLW4O4BSoRW4ZcGa", "WOPzW7NcM8kUh8kq", "jSoZmCovW6a", "xmk1W5e", "wCkyW67dU1q", "wfHU", "56A6C+I9RoIHHoMuPUMBV+AuGUMvKW", "6k+r5Aof5yEY5Q6I56kq55QA6zgv5O+M", "iCotW4r+WRu", "WOpdKNbTja", "WRHByq", "WQRdMSoNW4aDn8kkCWia", "a+E5UUAEGU+9Sos5GoATH+AwQoEbHoAEIowqHKa", "Ee3cJZ7dRtRcPwpcRSoBv0q9WPC", "lmoynW", "tJPoW7Hy", "WPneWPu", "BmoCWO02W5tdQHK", "yM7dTq", "WQFdUhzA", "owVdI1VcTq", "e8o2eSoQW6C", "WQtdP2ffia", "W5tdT2xdQ3a", "DmkRWQuvW7/cUmouWPtdRCkADSoaW58", "5PEM5RkM6i6m5yYr6yk56k6A56kA", "WPLhWP3dVCoc", "wSktW4ddTeu", "t1n8W4ztW57dNSkSWRFcTW", "BXbnW6bdWOdcOSkVoG", "iYpcPmogkq", "iGRdMmkyWONcUSkqF8oTw8kcWOFdRSkH", "oZFcK8obba", "CfdcICosW7hdUq", "WR3dKmoJ", "W4ikASkO", "fSksWPLMvW", "WPhcJmkyzIpcMmkdW4pcLSkf", "jmowjmo/W5Hyje/dJCkYWOG", "W4pdQhZdUMq", "qKOVv8k6", "j8kTBCkVW7G", "evFdHxhdVYBcUqhdN8oLW4FcOmoTWR/cO8kq", "WPxcHSkcsblcISkdW4K", "WQ3cVSk4A0zh", "axW9vWK", "5RkV5PYi6iYL5y+X5yMX6lAi6l2r6zgc5O2k", "WO7cQHtcNeO", "WP4YbY3cRSkX", "6Akv5y+U5lUI6zUW", "WRRdNSo6W7CMk8kxEq", "W6pcJ1ddS3RdJe3dGweD", "dFc8KktdNUI9V+IGMoE7VEAEHSks", "5Ps96zAA5QAI", "4P2ciEIgIoACI+I+KEIGT+MbUUwkJos5QEMvNUITLry", "W6/cLY0", "j8osjmoxW7TvpKRdGCkFWOddPmkkW4BcLSkP", "W47cUXvEwCoz", "gNBdS8kH", "FSomWPmY", "W4SFtmkjW4a", "Ef3cKCot", "wSkAWO7dQ8kVWOpdIa", "sSoiWPlcLCoQ", "h0/dLxZcHGlcMuK", "bKhdIW", "lHRdI0xcU3JdPdtcMCop", "W6pdRvNdV3q", "rSohWQS", "WPFdPmouW5GS", "W5WGmmo1jG", "WQtOR5RMSAtLKitLUR3cNq", "WPy0dXpcLG", "zSoLWO4qW7a", "WR1bzCk/sHpdVmo7CwRcVfO", "WOPyW6JcKCkLc8kkkCo7", "WRpcSmkX", "WQ56x8ogW4O", "yrzvWPj4", "AMJdOuqUdLpdIa", "ECkAWOpdLSkQWOldJmoOWRdcSmoRW7ZcHsiwW748WQ7dUJZcTcT+WONdGSokW53cPCk7sSobWPyxWP3dIrZdKmoubYLCB8oWpZe+uJtdRw7dNfyXdrnNWRddKCk6FmourwFdG8omASkiWRlcSCk+uCk5j8kECCoqz8oVt8kMWR5cWQqTDxBdMmk9jSkundfndfxcULJdIJ/dQh4fWQrAghmnrNddHWiynSo1WPfNg8o/E15kfSkgqCkWkCo+gvDDWQ0pWQBdUmkpW4ZdHq", "WP3dNgLzoG", "tKz0WPKw", "yv3cMmomW5hdRSoe", "fmkMWQLkyW", "jmoypSo7", "W6Sqomouh07dICoLDvFcHLG1lSkE", "Dx4FsSkS", "sCocWQuAda", "W4LjxXOxrWaBWPelW5ieW4fiWOC", "rSkuWPFdM8kPWOm", "j8ospSomW7rxm0VdICkpWPVdUmkxW43cNW", "W6NNUPpMN6tVVk/KUjFMR7FMLQpNGQVMNzRLKjKR", "t8omWRmBpW4", "WQFdKmo6W60", "W5JcUh7cILO", "lvldTCkVhW", "iva8Adi", "pmkfz8kM", "W4DcuIqdtqeh", "hLJdI8kika", "WO7cI0Wn", "DWXVW7X3", "W4KvC8kQW6i", "yM7dSuy1eLldKG", "WQ7dMmoNisa", "WRabhG", "nmkkDSkjW4e", "W5pNQyhLHOVLJ4RdVa", "W6tcGLRdOxu", "WQCLW55htSkZj31jwXyYWOyQW6OiAmkLESolW6q", "B8oPWQBcMSokjL0", "k8k+kCkUW6K", "W7OWt8kiW4u", "W7aOt8koW7pcUMXFCL3dOCkbbCon", "6zk+5OYs5zgE6z+855Ir5A2U562X5B+H6AoF5lUMW5JKV4FLRQNNROu", "E3xcU8olW4u", "WPldQmomlWO", "aCksqmkKW5e", "W7VcNve", "WPNdO015rSo7W6ldTIm", "W7usW71yzq", "f8ktuSkRW6e", "WRxcSmk/yq", "W61ds1VcTHNdUgaYW6FcJ25hW6qvWQRcHSoBW4GFjfXipmoirW9qfaeyWPBcTSkQkXe", "WQZdHSooW6q8", "fNBdSSkOiX08", "W7ZdPrFdICotW67dRWO", "ywJdQ00c", "jfBdJSkq", "qrHdWRbZ", "WQqBW5PUW71TWQdcQq", "drVcSCoXbq", "W5/dSchdUSov", "W4S1W6T1Eq", "WPZdU311jW", "bCohW4O", "E0JcItxdOZ3cRa/cGCoTuwq7", "bSkyWOvFFW", "rCk/W5RdULO", "WQFdI8opeau", "WR4vW51mW7O", "uComWRLkEL4IWPlcIuq", "BgXCWOKW", "W6yrE8oKh0ldImoMCde"];
      }());
    }());
  }();
  Il1Ili1I = function () {
    return ilIliiIl;
  };
  return Il1Ili1I();
}
;
!(async () => {
  const IliiilI1 = l1iIl111,
    i1ii1Iii = {
      "YkSAP": function (ililiii, IIII1I1I) {
        return ililiii(IIII1I1I);
      },
      "FDPxo": function (iI11l1Il, IiIiiili) {
        return iI11l1Il >= IiIiiili;
      },
      "WuBCd": IliiilI1(299, "RTlN"),
      "lJUSr": IliiilI1(320, "eCry")
    };
  notify[IliiilI1(603, "jLh4")]({
    "title": $["name"]
  }), await Main();
  if (isNotify && notify[IliiilI1(627, "dOzb")]()) {
    if (i1ii1Iii[IliiilI1(366, "yVhj")] !== IliiilI1(257, "uLOZ")) await notify["push"]();else try {
      const IiiI1Il1 = i1ii1Iii["YkSAP"](llIIliI, IiiIlI1l);
      i1ii1Iii[IliiilI1(332, "n6t%")](IiiI1Il1, 0) && (Iii1ilIl[IliiilI1(422, "l#Y%")] = IiiI1Il1);
    } catch {
      lI1iiii1[IliiilI1(434, "syjB")](i1ii1Iii[IliiilI1(344, "4xN)")]);
    }
  }
})()["catch"](lllIi1II => $["logErr"](lllIi1II))[l1iIl111(375, "eCry")](() => $[l1iIl111(443, "uLOZ")]());
async function Main() {
  const Ill111ll = l1iIl111,
    IlI1l1II = {
      "mUtdb": function (iiIIIiii, II1ililI) {
        return iiIIIiii > II1ililI;
      },
      "jfKYb": function (IiI1Iii1, ilI1llI1) {
        return IiI1Iii1 * ilI1llI1;
      },
      "rHrRL": function (II1iI1l, l11Il1ll) {
        return II1iI1l - l11Il1ll;
      },
      "QZDyR": function (Iiiil1i1, ll1ilI1I) {
        return Iiiil1i1 << ll1ilI1I;
      },
      "rbOYP": function (liiIiIl, lil111l1) {
        return liiIiIl & lil111l1;
      },
      "EPPwz": function (iiii11li, Il1iI1ll) {
        return iiii11li == Il1iI1ll;
      },
      "zDUnz": Ill111ll(407, "Mn3#"),
      "CpNZC": Ill111ll(307, "eCry"),
      "PsqwN": Ill111ll(494, "POES"),
      "JFzxf": function (I1iliii1, IIIIi111) {
        return I1iliii1 * IIIIi111;
      },
      "FyxPL": function (I1illIiI, illIIi1I) {
        return I1illIiI + illIIi1I;
      },
      "oBZFl": function (ii1lI1l, l1illilI) {
        return ii1lI1l(l1illilI);
      },
      "Dlxiw": "239",
      "SCcss": function (llIiIIll, llll1ii1) {
        return llIiIIll + llll1ii1;
      },
      "fYNvF": Ill111ll(331, "syjB"),
      "hRZTc": function (i1Il1IIl, Iii111I1) {
        return i1Il1IIl === Iii111I1;
      },
      "ocTva": Ill111ll(596, "BZC&"),
      "SFbNt": function (il1Il1I, i1Ii1iii) {
        return il1Il1I !== i1Ii1iii;
      },
      "pTEqz": Ill111ll(754, "yVhj"),
      "XrhwX": Ill111ll(738, "v^Ew"),
      "uuLGm": function (IIllliIl, I1I1iii) {
        return IIllliIl(I1I1iii);
      },
      "YFzAw": Ill111ll(506, "r4dy"),
      "iUdUh": Ill111ll(268, "zIZ7"),
      "SzQCb": Ill111ll(400, "l#Y%"),
      "xLNDO": function (llIliI1, Ill1liI1) {
        return llIliI1 > Ill1liI1;
      },
      "crtqI": function (iIli1Ili, ll1lIli1) {
        return iIli1Ili !== ll1lIli1;
      },
      "ktQtG": "AHwPv",
      "bXkHh": Ill111ll(482, "Si%b"),
      "yVhIf": function (I1Ii1IlI, I1iill1) {
        return I1Ii1IlI !== I1iill1;
      },
      "wgijY": Ill111ll(278, "R5aw"),
      "KBVfc": function (iiIi11, il111liI) {
        return iiIi11 === il111liI;
      },
      "PUfsX": "eqpwY",
      "Jcfkf": "\u94FE\u63A5\u540E\u9762\u7684\u5B57\u7B26\u5FC5\u987B\u4E3A7\u4F4D\u5B57\u7B26",
      "xLviz": function (iillIilI, lIil1l1l) {
        return iillIilI(lIil1l1l);
      },
      "yiSvw": "https://updateteam.oss-cn-hangzhou.aliyuncs.com/red18.json",
      "RBpph": "\u65E0\u6CD5\u83B7\u53D6\u9080\u8BF7\u7801",
      "EuKMR": "fjboK",
      "sGEOe": "pelVs"
    };
  try {
    if (IlI1l1II[Ill111ll(453, "#ilO")](IlI1l1II[Ill111ll(531, "wP(Z")], IlI1l1II[Ill111ll(234, "Ah)J")])) {
      try {
        if (IlI1l1II[Ill111ll(479, "v^Ew")](IlI1l1II[Ill111ll(696, "syjB")], IlI1l1II[Ill111ll(649, "l#Y%")])) {
          const l11Ill = IlI1l1II["oBZFl"](parseInt, taskThreads);
          IlI1l1II[Ill111ll(239, "v^Ew")](l11Ill, 0) && IlI1l1II[Ill111ll(310, "Q)[D")](l11Ill, 1) && (taskThreads = l11Ill);
        } else {
          const iiiI11il = Iilil1i(iiIlIill);
          IlI1l1II[Ill111ll(705, "[AqX")](iiiI11il, 0) && iiiI11il !== 1 && (iiIiiIl1 = iiiI11il);
        }
      } catch {
        taskThreads = 1;
      }
      taskThreads = Math[Ill111ll(301, "w7rH")](taskThreads, maxThreads), $["waitTime"] = null;
      if (runInterval) {
        if (IlI1l1II[Ill111ll(288, "bcV[")](Ill111ll(730, "JeZ2"), Ill111ll(518, "EavT"))) try {
          const lIIii1I = IlI1l1II[Ill111ll(305, "uLOZ")](parseInt, runInterval);
          if (lIIii1I >= 0) {
            if (IlI1l1II[Ill111ll(560, "dQNV")] !== Ill111ll(522, "w7rH")) {
              let lIIIilll = lii1liIl["location"];
              lIIiI11I = lIIIilll[Ill111ll(492, "v^Ew")](/\/active\/(\w+)\/index/)?.[1], ll1l1ili = lIIIilll;
            } else $[Ill111ll(743, "JeZ2")] = lIIii1I;
          }
        } catch {
          console[Ill111ll(434, "syjB")](IlI1l1II[Ill111ll(695, "wP(Z")]);
        } else {
          liIi1i1I["log"](Ill111ll(752, "PXqF") + IlIi1ll1 + Ill111ll(450, "Rxn7"));
          return;
        }
      }
      $[Ill111ll(420, "POES")] = Date[Ill111ll(275, "jQrx")]();
      const iili1lI = $[Ill111ll(377, "a!!@")](IlI1l1II["SzQCb"], endTime);
      if (endTime && IlI1l1II[Ill111ll(758, "99M^")]($[Ill111ll(328, "JDV2")], endTime)) {
        if (IlI1l1II[Ill111ll(273, "wP(Z")](IlI1l1II[Ill111ll(460, "IB(Z")], "BKjXP")) {
          console[Ill111ll(284, "yVhj")](Ill111ll(277, "IoAu") + iili1lI + Ill111ll(370, "bcV["));
          return;
        } else l1IiIi1I += IlI1lI1I[Ill111ll(391, "Mn3#")](i1ill1i[Ill111ll(465, "JIxP")](IlI1l1II["jfKYb"](Il1i1li[Ill111ll(354, "99M^")](), lii1l11i["length"])));
      }
      console[Ill111ll(737, "#ilO")](Ill111ll(572, "wP(Z") + $[Ill111ll(243, "wP(Z")] + Ill111ll(720, "l#Y%")), console[Ill111ll(586, "ZqFO")](Ill111ll(302, "#ilO") + $[Ill111ll(746, "RTlN")] / 1000 + Ill111ll(364, "l#Y%")), console["log"](Ill111ll(613, "dQNV") + common[Ill111ll(679, "IB(Z")]() + "]"), console[Ill111ll(376, "zIZ7")](Ill111ll(249, "POES") + (isNotify ? "\u5F00\u542F" : "\u5173\u95ED") + "]"), console[Ill111ll(372, "uLOZ")]("\u8D26\u53F7\u8FC7\u6EE4: [" + pinFilter[Ill111ll(733, "wP(Z")](", ") + "]"), console["log"](Ill111ll(703, "syjB") + $[Ill111ll(617, "JDV2")] + Ill111ll(247, "yVhj")), console[Ill111ll(284, "yVhj")]("");
      const Iii1111I = Ill111ll(757, "POES") + common[Ill111ll(449, "uLOZ")](13, IlI1l1II[Ill111ll(293, "EHJB")]);
      $["UA"] = common[Ill111ll(436, "dQNV")](Iii1111I);
      if (/https:\/\/u\.jd\.com\/.+/["test"](red618_url)) {
        if (IlI1l1II[Ill111ll(714, "yVhj")](IlI1l1II["wgijY"], Ill111ll(476, "JIxP"))) {
          if (red618_url[Ill111ll(321, "dOzb")]("/")[Ill111ll(542, "IB(Z")]()) {
            red618_url = red618_url[Ill111ll(571, "Ah)J")]("/")[Ill111ll(392, "PXqF")]()[Ill111ll(709, "Mn3#")]("?")["shift"]();
            if (red618_url[Ill111ll(660, "dOzb")] !== 7) {
              if (IlI1l1II["KBVfc"](IlI1l1II[Ill111ll(428, "JeZ2")], IlI1l1II["PUfsX"])) console[Ill111ll(311, "JeZ2")](IlI1l1II[Ill111ll(463, "K8[[")]), console[Ill111ll(727, "n6t%")](Ill111ll(521, "5&Be") + red618_url), console[Ill111ll(357, "99M^")](Ill111ll(702, "wP(Z")), red618_url = "";else return Iil1ll11 = IlI1l1II[Ill111ll(508, "(i2(")](IlI1l1II[Ill111ll(501, "R]Vr")](Il1I1IIi, 5), IiiIlI) + lIll1lI[Ill111ll(246, "eCry")](0), IlI1l1II[Ill111ll(325, "PXqF")](IillilIl, i1I11i1);
            }
          } else console[Ill111ll(315, "IoAu")](Ill111ll(236, "R]Vr")), console[Ill111ll(477, "(i2(")]("\u4F60\u586B\u5199\u7684\u94FE\u63A5\u4E3A\uFF1A" + red618_url), console[Ill111ll(577, "PXqF")](Ill111ll(710, "dQNV")), red618_url = "";
        } else {
          if (IlI1l1II[Ill111ll(333, "R]Vr")](ill1ili1[Ill111ll(532, "syjB")](I11I1iiI["split"]("=")[1]), -1)) IilIlli += IlIlIIi["replace"](/ /g, "") + "; ";
        }
      } else red618_url["length"] === 7 ? red618_url = red618_url : red618_url = "";
      authorCodeList = await IlI1l1II[Ill111ll(570, "Si%b")](getAuthorCodeList, IlI1l1II["yiSvw"]);
      authorCodeList ? $[Ill111ll(734, "uLOZ")] = authorCodeList[random(0, authorCodeList[Ill111ll(353, "[AqX")])] : console[Ill111ll(504, "JIxP")](IlI1l1II[Ill111ll(373, "IB(Z")]);
      $[Ill111ll(698, "EavT")] = red618_url ? red618_url : $[Ill111ll(557, "w7rH")], $[Ill111ll(386, "R]Vr")] = Ill111ll(721, "1#OP") + $["red618code"];
      red618_url && (console[Ill111ll(515, "eCry")]("\u9080\u8BF7\u94FE\u63A5: " + $["red618_url"]), console["log"]("\u9080\u8BF7\u7801: " + $["red618code"]));
      console[Ill111ll(317, "v^Ew")](""), $["needRemoveCookieIndex"] = [], await common[Ill111ll(401, ")5@u")](taskThreads, cookiesArr, taskFnc), $["runEnd"] = ![];
      $[Ill111ll(582, "JIxP")]["length"] > 0 && (IlI1l1II[Ill111ll(480, "JIxP")] !== "eSIoz" ? (cookiesArr = cookiesArr["filter"]((lI1i1iii, lIl1Il1) => !$["needRemoveCookieIndex"]["includes"](lIl1Il1 + 1)), $[Ill111ll(468, "Rxn7")] = []) : (lil1l1I1[Ill111ll(592, "EHJB")](lil1IlI + Ill111ll(324, "#ilO")), IlIliiI[Ill111ll(641, "w7rH")]?.[Ill111ll(457, "r4dy")](IlI1l1II["zDUnz"]) && (I1l1Iii = !![])));
      const I1l111I1 = notify[Ill111ll(395, ")5@u")]();
      I1l111I1 && console[Ill111ll(287, "U]@[")](Ill111ll(684, "2cM3") + I1l111I1["replace"](/：/g, Ill111ll(590, "v^Ew")));
    } else Ii11IIil[Ill111ll(689, "eCry")]("/")[Ill111ll(568, "syjB")]() ? (i1ililI1 = ii11Ii1l["split"]("/")[Ill111ll(260, ")5@u")]()[Ill111ll(322, "99M^")]("?")[Ill111ll(314, "RTlN")](), l1ilIIII[Ill111ll(744, "RTlN")] !== 7 && (Ii1I1i1l[Ill111ll(374, "JDV2")](Ill111ll(473, "uLOZ")), IlliIl1[Ill111ll(329, "l@O[")](Ill111ll(739, "w7rH") + I1iilIiI), i1IlIlII[Ill111ll(573, "EavT")](Ill111ll(656, "jLh4")), iI1II1i = "")) : (liI1IIlI["log"](IlI1l1II[Ill111ll(498, "K8[[")]), l1l11lI1[Ill111ll(515, "eCry")](Ill111ll(267, "PXqF") + iIllI1i), Iii1lIil["log"]("\u8BF7\u5C3D\u5FEB\u4FEE\u6B63\uFF0C\u53EF\u5C1D\u8BD5\u91CD\u542F\u5BB9\u5668\uFF0C\u9ED8\u8BA4\u7EE7\u7EED\u8FD0\u884C"), IliII1Il = "");
  } catch (I11llIII) {
    if (IlI1l1II["yVhIf"](IlI1l1II[Ill111ll(635, "ZqFO")], IlI1l1II["sGEOe"])) {
      let iIl111i = IlI1l1II["PsqwN"],
        IiI1llll = "1",
        i1illiIi = l1I1Ill1(I1lI1Ii["now"]() / 1000)[Ill111ll(292, "Rxn7")](),
        lIiliiii = i1illiIi + II11IIil(IlI1l1II["JFzxf"](2147483647, i1I1li1[Ill111ll(519, "#ilO")]()))[Ill111ll(348, "IB(Z")](),
        iIililil = [iIl111i, lIiliiii, i1illiIi, i1illiIi, i1illiIi, IiI1llll][Ill111ll(481, "syjB")]("."),
        I1Iliil = [iIl111i, IiI1llll, [lIiliiii, IiI1llll][Ill111ll(693, "JIxP")]("|"), i1illiIi][Ill111ll(393, "l@O[")]("."),
        i11i1iII = iIl111i,
        liliIiI1 = [iIl111i, Ill111ll(252, "2cM3"), "-", Ill111ll(459, "EavT"), "-", Iilli1["now"]()[Ill111ll(510, "Mn3#")]()][Ill111ll(756, "EavT")]("|");
      liliIiI1 = lII1III1(liliIiI1);
      let l1I1IlIi = IlI1l1II[Ill111ll(496, "w7rH")](IlI1l1II[Ill111ll(442, "n6t%")](ii1II11I, "xxxxxxxx-xxxx-xxxx-xxxxxxxxxxxx") + "-", i1illiIi),
        llIlli1 = IlI1l1II[Ill111ll(548, "RTlN")],
        I1ll1IIl = [llIlli1, IiI1llll]["join"]("."),
        i1ii1lIi = [lIiliiii, llIlli1, i1lIlI[Ill111ll(740, "w7rH")]()[Ill111ll(292, "Rxn7")]()][Ill111ll(528, "JeZ2")]("."),
        Iii1IIIi = IlI1l1II[Ill111ll(551, "POES")](iIIlIIII[Ill111ll(435, "jLh4")](IlI1l1II["JFzxf"](5, i11lIII[Ill111ll(448, "POES")]())) * 2, 1)[Ill111ll(604, "v^Ew")](),
        li111iI1 = IlI1l1II[Ill111ll(655, "RTlN")](IIlIiili[Ill111ll(444, "JeZ2")](32, Ill111ll(628, "R]Vr")), IlI1l1II[Ill111ll(381, "R5aw")]);
      return {
        "jda": iIililil,
        "jdb": I1Iliil,
        "jdc": i11i1iII,
        "jdv": liliIiI1,
        "shshshfpa": l1I1IlIi,
        "mba_sid": I1ll1IIl,
        "mba_muid": i1ii1lIi,
        "pre_seq": Iii1IIIi,
        "pre_session": li111iI1
      };
    } else console[Ill111ll(313, "dQNV")](Ill111ll(726, "eCry") + I11llIII);
  }
}
async function taskFnc(lI1IilI, iil1l1I1) {
  const lI1IlIil = l1iIl111,
    II11i111 = {
      "HKfNS": function (IiI1lli1, lIlliIi1) {
        return IiI1lli1 !== lIlliIi1;
      },
      "fkJTg": "JXgNV",
      "mvjjX": function (i1IiI1l, IilIilIi) {
        return i1IiI1l + IilIilIi;
      },
      "PnJGQ": function (llIiIIi, IIiIil11, I1Iiilil) {
        return llIiIIi(IIiIil11, I1Iiilil);
      },
      "oiyjC": lI1IlIil(524, "syjB"),
      "hMSku": lI1IlIil(600, "dQNV"),
      "zgfZW": "headers",
      "hycXG": lI1IlIil(409, "#ilO"),
      "cByym": "MYhWQ",
      "RVNdP": lI1IlIil(634, "2cM3"),
      "RULNB": function (llI1IIl, iiil) {
        return llI1IIl === iiil;
      },
      "xoIFk": lI1IlIil(507, "POES"),
      "ccaiu": lI1IlIil(587, "5&Be"),
      "RwyEq": function (lii1i1li, I11111II) {
        return lii1i1li == I11111II;
      },
      "QhZYp": lI1IlIil(365, "IoAu"),
      "sCEro": function (iiIliiIl, IilIiIlI) {
        return iiIliiIl + IilIiIlI;
      },
      "ueljh": function (iI1li11l, lilil1li) {
        return iI1li11l(lilil1li);
      },
      "czOOG": function (lliIIIi1, l11I1l1l) {
        return lliIIIi1 + l11I1l1l;
      },
      "MdJEW": lI1IlIil(717, "Q)[D"),
      "vgjKs": lI1IlIil(345, "Ah)J"),
      "LZran": function (il1ii111, l1IIili1) {
        return il1ii111 === l1IIili1;
      },
      "AuKeW": lI1IlIil(298, "Si%b"),
      "BlHUe": "bylvs",
      "RFBrd": lI1IlIil(538, "[O4@"),
      "PCkRI": function (I1ll1ili, II11IIII) {
        return I1ll1ili * II11IIII;
      },
      "XZyOe": lI1IlIil(232, "IB(Z"),
      "hRDYJ": lI1IlIil(416, "EHJB"),
      "BQNmu": function (lIIlI1ll, i1iI1iil) {
        return lIIlI1ll + i1iI1iil;
      },
      "VSBHJ": lI1IlIil(712, "ZqFO"),
      "xFbPC": function (ill1iIli, I1III1Ii) {
        return ill1iIli * I1III1Ii;
      },
      "iBnyh": "abcdef0123456789",
      "DqaBX": lI1IlIil(399, "JIxP"),
      "zulGL": lI1IlIil(403, "wP(Z"),
      "vSQfg": lI1IlIil(645, "99M^"),
      "iBXkf": function (l1I1iii1, l11I1lii) {
        return l1I1iii1 == l11I1lii;
      },
      "EfOda": function (Ili1IiI1, iI11III1) {
        return Ili1IiI1 !== iI11III1;
      },
      "OeMuo": lI1IlIil(691, "r4dy"),
      "XqfST": function (lIlIIII1, IlIlill) {
        return lIlIIII1 + IlIlill;
      },
      "lPmGH": "[\u4F18\u60E0\u5238]",
      "ySPNb": "[\u6253\u6298\u5238]",
      "qFWgR": lI1IlIil(466, "ZqFO"),
      "QVFlv": function (iiiI1ii, liiI111I) {
        return iiiI1ii * liiI111I;
      },
      "jUEHP": lI1IlIil(614, "1#OP"),
      "XWJrn": lI1IlIil(264, "U]@["),
      "NKtge": lI1IlIil(491, "ZqFO"),
      "jIvdw": lI1IlIil(475, "K8[["),
      "GXNNR": function (lllli1ll, IIliI1li) {
        return lllli1ll + IIliI1li;
      },
      "eqtIp": "\u65E0\u95E8\u69DB",
      "SBQAt": function (lliiiIIi, IIii111) {
        return lliiiIIi > IIii111;
      },
      "FBWvF": "XYiIH",
      "MjiHB": "invalid",
      "vkEqz": "\u9886\u53D6\u4E0A\u9650",
      "fDaKu": function (i11iIli, ilIllI1I) {
        return i11iIli === ilIllI1I;
      },
      "HTgNh": "wvzzM",
      "WDrST": lI1IlIil(701, "bcV["),
      "gEYXz": lI1IlIil(487, "EHJB"),
      "TNEfC": lI1IlIil(704, "eCry"),
      "jAVLn": lI1IlIil(424, "2cM3"),
      "bkhly": "u_hongbao",
      "wdLko": lI1IlIil(461, "l@O["),
      "AYGpH": "MO-J2011-1",
      "yVTWg": lI1IlIil(279, "EavT"),
      "iwVrR": lI1IlIil(541, "Q)[D"),
      "IsSuc": function (iIlliiI, Iiiiiii) {
        return iIlliiI + Iiiiiii;
      },
      "evhCU": function (I111il1i, IilliilI) {
        return I111il1i * IilliilI;
      },
      "PecHP": function (lli1Iill, Il1illI) {
        return lli1Iill * Il1illI;
      },
      "MDUkE": function (lililI1I, iIII1lIi) {
        return lililI1I * iIII1lIi;
      },
      "NMrfW": "*/*",
      "wcvXg": lI1IlIil(676, "yVhj"),
      "Qzpbu": function (i1lill, i1lIlIIi) {
        return i1lill + i1lIlIIi;
      },
      "oDWEj": lI1IlIil(472, "l@O["),
      "Iarkw": lI1IlIil(745, "v^Ew"),
      "tQhKe": lI1IlIil(300, "99M^"),
      "aBXXf": lI1IlIil(280, "Q)[D"),
      "rDImv": function (l1ii1i11, IilIl1iI) {
        return l1ii1i11 < IilIl1iI;
      },
      "QCrbB": function (Ili11I11, i1Illll1) {
        return Ili11I11 !== i1Illll1;
      },
      "ZPAdB": lI1IlIil(405, "Ah)J"),
      "DOSjp": lI1IlIil(455, "wP(Z"),
      "nGkPk": lI1IlIil(484, "EHJB"),
      "SABtr": lI1IlIil(438, "POES"),
      "oFDDm": function (iIiilii1, iiIillI) {
        return iIiilii1 > iiIillI;
      },
      "eQiix": lI1IlIil(657, "1#OP"),
      "EyZVI": function (l11liilI, Ilillil) {
        return l11liilI !== Ilillil;
      },
      "qnmvL": "KsWxv",
      "bxGvw": "https://pro.m.jd.com/mall/active/3GriExsopKWEjptvv33rYCcDgUwK/index.html",
      "mVurV": function (i1iiil11, iIililIi) {
        return i1iiil11 < iIililIi;
      },
      "RSVNb": function (iIIiii11, iI111I1I) {
        return iIIiii11 !== iI111I1I;
      },
      "xFYne": "wLEFH",
      "OjfJJ": function (IiIIIIiI, ll1lIIII) {
        return IiIIIIiI(ll1lIIII);
      },
      "QwSIa": lI1IlIil(715, "eCry"),
      "GnLZA": function (ilIiiII1, lI1IiI1I) {
        return ilIiiII1 === lI1IiI1I;
      },
      "YjAgM": lI1IlIil(276, "a!!@"),
      "DTRDy": function (liIlilII, l1lll11, li1Il1I1, II1lliII) {
        return liIlilII(l1lll11, li1Il1I1, II1lliII);
      },
      "dhClv": "3.2.1.1",
      "kHkxH": function (lIIiI11, I1ilii11) {
        return lIIiI11(I1ilii11);
      }
    };
  if ($["runEnd"]) return {
    "runEnd": !![]
  };
  const l1l1Illi = decodeURIComponent(common[lI1IlIil(643, "2cM3")](lI1IilI, "pt_pin")),
    Ii1il1Il = lI1IlIil(636, "K8[[") + iil1l1I1 + "\u3011" + common[lI1IlIil(396, "uLOZ")](l1l1Illi, {
      "printWidth": 6
    }) + "\uFF1A",
    l1IIiII = notify[lI1IlIil(558, "Mn3#")](iil1l1I1, l1l1Illi);
  if (II11i111[lI1IlIil(270, "jQrx")](pinFilter["length"], 0) && (pinFilter[lI1IlIil(671, "eCry")](l1l1Illi) || pinFilter[lI1IlIil(700, "a!!@")](encodeURIComponent(l1l1Illi)))) {
    l1IIiII[lI1IlIil(316, "Q)[D")](lI1IlIil(611, "RTlN")), console[lI1IlIil(633, "Q)[D")](l1IIiII["getInlineContent"]()), $["needRemoveCookieIndex"][lI1IlIil(742, "[AqX")](iil1l1I1);
    return;
  }
  const lIllil1 = await common[lI1IlIil(530, "JDV2")](lI1IilI);
  if (!lIllil1 && II11i111[lI1IlIil(303, "bcV[")](typeof lIllil1, II11i111[lI1IlIil(318, "Rxn7")])) {
    console["log"](Ii1il1Il + lI1IlIil(736, "4xN)")), $[lI1IlIil(582, "JIxP")][lI1IlIil(351, "JIxP")](iil1l1I1);
    return;
  }
  let iIIiIII1 = ![],
    i1Iiil11 = $[lI1IlIil(500, "bcV[")],
    l1l1ilII,
    lliIiI11,
    I1i1ili1;
  const iIi1lI1l = common[lI1IlIil(470, "BZC&")](l1l1Illi),
    liI1l1i = II11i111[lI1IlIil(379, "uLOZ")],
    lI1i11I = llilIli1 => llilIli1["split"]("")["reduce"]((IllI1iil, iiliilI1) => {
      const IilIll1I = lI1IlIil,
        i11IIil1 = {
          "Ovkqq": IilIll1I(383, "dQNV")
        };
      if (II11i111["HKfNS"]("HZSwc", II11i111[IilIll1I(258, "Mn3#")])) return IllI1iil = II11i111[IilIll1I(394, "n6t%")]((IllI1iil << 5) - IllI1iil, iiliilI1["charCodeAt"](0)), IllI1iil & IllI1iil;else ilIiI1lI[IilIll1I(633, "Q)[D")](i11IIil1["Ovkqq"]);
    }, 0),
    llill = [...new Set(redshareId)];
  II11i111[lI1IlIil(254, "RTlN")](llill[lI1IlIil(451, "bcV[")], 0) ? II11i111[lI1IlIil(425, "R5aw")](II11i111[lI1IlIil(677, "POES")], II11i111[lI1IlIil(505, "JIxP")]) ? liIli1iI[lI1IlIil(640, "Ah)J")](lI1IlIil(412, "zIZ7") + liiilII) : l1l1ilII = llill[Math["floor"](Math[lI1IlIil(406, "U]@[")]() * llill["length"])] : II11i111["EyZVI"](lI1IlIil(585, "bcV["), II11i111[lI1IlIil(517, "l#Y%")]) ? l1l1ilII = "" : iilllllI[lI1IlIil(237, "dQNV")] = lll1II1I[II11i111[lI1IlIil(755, "U]@[")](iii1iIli, 0, i1lI1IIl["length"])];
  Referer = II11i111[lI1IlIil(690, "jLh4")];
  for (let II1liII1 = 0; II11i111[lI1IlIil(336, "l@O[")](II1liII1, maxdraw); II1liII1++) {
    if (II11i111[lI1IlIil(523, "uLOZ")](II11i111[lI1IlIil(271, "U]@[")], "wLEFH")) iI1lIII1 = "";else {
      let iIIl11l = IiiIillI();
      lliIiI11 = lI1IlIil(250, "bcV[") + iIIl11l[lI1IlIil(595, "Q)[D")] + lI1IlIil(748, "(i2(") + iIIl11l[lI1IlIil(648, "Ah)J")] + lI1IlIil(646, "Mn3#") + iIIl11l["jdc"] + lI1IlIil(539, "99M^") + iIIl11l["jdv"] + ";shshshfpa=" + iIIl11l[lI1IlIil(387, "IB(Z")] + lI1IlIil(231, "bcV[") + iIIl11l["mba_sid"] + lI1IlIil(546, "r4dy") + iIIl11l[lI1IlIil(621, "IB(Z")] + lI1IlIil(562, "bFZL") + iIIl11l[lI1IlIil(337, "yVhj")] + lI1IlIil(631, "#ilO") + iIIl11l[lI1IlIil(297, "R]Vr")] + ";", ss = await II11i111[lI1IlIil(497, "4xN)")](llIII1i, $["red618_url"]);
      if (ss) {
        let lliIl1il = ss?.["match"](/(https:\/\/u\.jd\.com\/jda[^']+)/);
        lliIl1il ? ($["hrl"] = lliIl1il[1], await II11i111[lI1IlIil(493, "a!!@")](iliIlilI, lliIl1il[1])) : II11i111[lI1IlIil(707, "wP(Z")](II11i111["QwSIa"], lI1IlIil(446, "bcV[")) ? IIlil1il[lI1IlIil(361, "4xN)")](lI1IlIil(559, "dQNV") + i111liI + lI1IlIil(526, "syjB") + (llIIiilI[lI1IlIil(356, "5&Be")] || l1i1i1lI)) : (console[lI1IlIil(434, "syjB")](Ii1il1Il + lI1IlIil(404, "zIZ7")), iIIiIII1 = !![]);
      } else {
        if (II11i111["GnLZA"](II11i111["YjAgM"], lI1IlIil(490, "[AqX"))) {
          iIIllIIi["fix"](II11i111[lI1IlIil(486, "zIZ7")]), IilIlI1I[lI1IlIil(619, "bFZL")](IliiI1Ii[lI1IlIil(414, "uLOZ")]()), IllIIIi["needRemoveCookieIndex"][lI1IlIil(266, "Q)[D")](i11liiIi);
          return;
        } else console["log"](Ii1il1Il + lI1IlIil(637, ")5@u")), iIIiIII1 = !![];
      }
      let l1IiI1iI = await II11i111[lI1IlIil(751, "JDV2")](jsTk, iIi1lI1l, lI1IlIil(262, "1#OP") + actId + lI1IlIil(244, "[O4@"), {
        "bizId": lI1IlIil(502, "JeZ2"),
        "v": II11i111[lI1IlIil(242, "bFZL")],
        "qs": "stath=20&navh=44&tttparams=MiCEMF2eyJnTGF0IjoiMjkuNjA2OTI3IiwidW5fYXJlYSI6IjRfNTA5NTBfNTA5NTdfMCIsImRMYXQiOiIiLCJwcnN0YXRlIjoiMCIsImFkZHJlc3NJZCI6IjYyNzEwMzg4MDYiLCJsYXQiOiIiLCJwb3NMYXQiOiIyOS42MDY5MjciLCJwb3NMbmciOiIxMDYuNTY2NzEyIiwiZ3BzX2FyZWEiOiIwXzBfMF8wIiwibG5nIjoiIiwidWVtcHMiOiIwLTAtMCIsImdMbmciOiIxMDYuNTY2NzEyIiwibW9kZWwiOiJpUGhvbmU4LDIiLCJkTG5nIjoiIn70%3D&utm_source=kong&utm_term=626e4b23b76a4568aa45f7b551b5c4ef&d=kizfKM1&useNewLoad=1&uabt=384_3901_1_0-385_3902_1_0&utm_medium=jingfen&cu"
      });
      I1i1ili1 = l1IiI1iI["jsToken"], await II11i111[lI1IlIil(574, "EHJB")](lilillIi, lI1IlIil(658, "K8[["));
      if (iIIiIII1 || $[lI1IlIil(553, "Rxn7")]) break;
      if ($["waitTime"]) await $[lI1IlIil(647, "#ilO")]($[lI1IlIil(408, "PXqF")]);
    }
  }
  if ($[lI1IlIil(346, "dOzb")]) return {
    "runEnd": !![]
  };
  if ($[lI1IlIil(597, "dQNV")]) await $[lI1IlIil(687, "4xN)")]($[lI1IlIil(747, "#ilO")]);
  async function llIII1i(i1iI1iii) {
    const iIiIIl1l = lI1IlIil,
      IIillIIi = await common[iIiIIl1l(622, "uLOZ")]({
        "url": i1iI1iii,
        "method": II11i111[iIiIIl1l(263, "syjB")],
        "headers": {
          "Cookie": lI1IilI,
          "User-Agent": liI1l1i
        },
        "proxy": null,
        "debug": ![],
        "timeout": 30000
      }),
      liiilliI = IIillIIi["data"];
    let iIliiill = IIillIIi && IIillIIi[iIiIIl1l(583, "EavT")] && (IIillIIi[II11i111[iIiIIl1l(430, "U]@[")]][iIiIIl1l(588, "IoAu")] || IIillIIi[II11i111["zgfZW"]][II11i111["hycXG"]] || "") || "";
    if (iIliiill) for (let i1lI1i1I of iIliiill) {
      if (II11i111[iIiIIl1l(620, "5&Be")](II11i111[iIiIIl1l(578, "bcV[")], II11i111[iIiIIl1l(308, "w7rH")])) {
        let IlIII1Ii = i1lI1i1I[iIiIIl1l(350, "wP(Z")](";")[0]["trim"]();
        if (IlIII1Ii[iIiIIl1l(467, "(i2(")]("=")[1]) {
          if (II11i111[iIiIIl1l(427, "dOzb")](II11i111[iIiIIl1l(593, "jLh4")], II11i111[iIiIIl1l(520, "w7rH")])) lliIi1li[iIiIIl1l(525, "K8[[")](iIiIIl1l(410, "bFZL") + Il11i1iI[iIiIIl1l(605, "dQNV")](/：/g, " \u279C "));else {
            if (II11i111["RwyEq"](lliIiI11[iIiIIl1l(750, "Si%b")](IlIII1Ii["split"]("=")[1]), -1)) lliIiI11 += IlIII1Ii["replace"](/ /g, "") + "; ";
          }
        }
      } else l11i1ll = {
        ...iiIl1i11,
        ...iI1i1lli
      };
    }
    return liiilliI;
  }
  async function iliIlilI(iii1iII1) {
    const llii1ii = lI1IlIil,
      ii1iIIil = {
        "qZOMa": II11i111["QhZYp"]
      },
      lI11lili = await common[llii1ii(233, "bFZL")]({
        "url": II11i111[llii1ii(238, ")5@u")](iii1iII1, llii1ii(514, "5&Be") + II11i111[llii1ii(338, "EavT")](lI1i11I, liI1l1i)),
        "maxRedirects": 0,
        "method": llii1ii(683, "jLh4"),
        "headers": {
          "Cookie": II11i111[llii1ii(601, "U]@[")](lliIiI11 + " ", lI1IilI),
          "User-Agent": liI1l1i,
          "Referer": $[llii1ii(565, "Mn3#")]
        },
        "proxy": null,
        "debug": ![],
        "timeout": 30000
      });
    let II111I1i = lI11lili["headers"];
    if (II111I1i?.["location"]) {
      let lII1 = II111I1i[llii1ii(462, "zIZ7")];
      actId = lII1[llii1ii(682, "uLOZ")](/\/active\/(\w+)\/index/)?.[1], Referer = lII1;
    }
    let ill1l11l = lI11lili && lI11lili[llii1ii(469, "bFZL")] && (lI11lili[II11i111["zgfZW"]][II11i111[llii1ii(549, "EHJB")]] || lI11lili[II11i111["zgfZW"]][llii1ii(673, "[AqX")] || "") || "";
    if (ill1l11l) for (let Il1III1i of ill1l11l) {
      if (II11i111["HKfNS"](II11i111["vgjKs"], II11i111[llii1ii(499, "99M^")])) i1I1iiii[llii1ii(741, "dOzb")](ii1iIIil["qZOMa"]), iIIi1ilI[llii1ii(253, "1#OP")]("\u4F60\u586B\u5199\u7684\u94FE\u63A5\u4E3A\uFF1A" + l11Il1i), llIlIlIl[llii1ii(516, "R5aw")]("\u8BF7\u5C3D\u5FEB\u4FEE\u6B63\uFF0C\u53EF\u5C1D\u8BD5\u91CD\u542F\u5BB9\u5668\uFF0C\u9ED8\u8BA4\u7EE7\u7EED\u8FD0\u884C"), iiliIli = "";else {
        let IlI1III1 = Il1III1i[llii1ii(339, "1#OP")](";")[0][llii1ii(706, "l#Y%")]();
        if (IlI1III1[llii1ii(668, "RTlN")]("=")[1]) {
          if (lliIiI11["indexOf"](IlI1III1[llii1ii(294, ")5@u")]("=")[1]) == -1) lliIiI11 += II11i111[llii1ii(418, "l@O[")](IlI1III1["replace"](/ /g, ""), "; ");
        }
      }
    }
    return lliIiI11;
  }
  function IiiIillI() {
    const iliI1ii1 = lI1IlIil,
      il1iIl11 = {
        "qwPNY": iliI1ii1(618, "BZC&")
      };
    if (II11i111[iliI1ii1(388, "[AqX")](II11i111["AuKeW"], II11i111[iliI1ii1(718, "4xN)")])) ll1ll11i[iliI1ii1(306, "PXqF")](l1i11i1l[iliI1ii1(341, "4xN)")], il1iIl11["qwPNY"]), li1i1l1l[iliI1ii1(675, "ZqFO")](1);else {
      let iiIIl1ll = II11i111[iliI1ii1(445, "RTlN")],
        iiIiIll1 = "1",
        l11iI1 = parseInt(Date[iliI1ii1(561, "l@O[")]() / 1000)[iliI1ii1(485, "ZqFO")](),
        liIiilIi = II11i111[iliI1ii1(699, "BZC&")](l11iI1, II11i111["ueljh"](parseInt, II11i111[iliI1ii1(367, "a!!@")](2147483647, Math["random"]()))["toString"]()),
        lli1lIiI = [iiIIl1ll, liIiilIi, l11iI1, l11iI1, l11iI1, iiIiIll1][iliI1ii1(693, "JIxP")]("."),
        Iill11l = [iiIIl1ll, iiIiIll1, [liIiilIi, iiIiIll1][iliI1ii1(323, "2cM3")]("|"), l11iI1]["join"]("."),
        lI1IllII = iiIIl1ll,
        i11IliI1 = [iiIIl1ll, II11i111["XZyOe"], "-", II11i111["hRDYJ"], "-", Date[iliI1ii1(594, "R]Vr")]()["toString"]()][iliI1ii1(452, "PXqF")]("|");
      i11IliI1 = encodeURIComponent(i11IliI1);
      let lIII1II = II11i111[iliI1ii1(653, "99M^")](II11i111[iliI1ii1(281, "U]@[")](l11l1Ill, II11i111[iliI1ii1(638, "r4dy")]) + "-", l11iI1),
        I1lIIIi = iliI1ii1(342, "l#Y%"),
        lIIiiIll = [I1lIIIi, iiIiIll1]["join"]("."),
        iIllliII = [liIiilIi, I1lIIIi, Date[iliI1ii1(423, "l#Y%")]()[iliI1ii1(304, "w7rH")]()][iliI1ii1(552, "a!!@")]("."),
        lIll1il1 = II11i111["mvjjX"](Math[iliI1ii1(723, "ZqFO")](II11i111[iliI1ii1(725, "a!!@")](5, Math[iliI1ii1(335, ")5@u")]())) * 2, 1)[iliI1ii1(602, "syjB")](),
        i1iIIIII = common[iliI1ii1(447, "r4dy")](32, II11i111[iliI1ii1(688, "JIxP")]) + iliI1ii1(456, "uLOZ");
      return {
        "jda": lli1lIiI,
        "jdb": Iill11l,
        "jdc": lI1IllII,
        "jdv": i11IliI1,
        "shshshfpa": lIII1II,
        "mba_sid": lIIiiIll,
        "mba_muid": iIllliII,
        "pre_seq": lIll1il1,
        "pre_session": i1iIIIII
      };
    }
  }
  function l11l1Ill(illIii1l, iiilIi1I = lI1IlIil(759, "EavT")) {
    const lIIlI11 = lI1IlIil;
    let ll1iiI1 = "";
    for (let lI11Iili of illIii1l) {
      if (II11i111["LZran"](II11i111[lIIlI11(591, "1#OP")], II11i111[lIIlI11(615, "R]Vr")])) iIIIIii1 = {
        ...IlIiili,
        ...l1IIil
      };else {
        if (II11i111[lIIlI11(642, "eCry")](lI11Iili, "x")) II11i111[lIIlI11(240, "U]@[")](II11i111["vSQfg"], II11i111[lIIlI11(282, "jQrx")]) ? ll1iiI1 += iiilIi1I[lIIlI11(632, "zIZ7")](Math["floor"](Math[lIIlI11(513, "Ah)J")]() * iiilIi1I[lIIlI11(353, "[AqX")])) : (lI1IIi1l = IliIiil["filter"]((lIllillI, lll11I1i) => !illil1Ii["needRemoveCookieIndex"][lIIlI11(355, "U]@[")](lll11I1i + 1)), IIii1i1i[lIIlI11(527, "5&Be")] = []);else II11i111[lIIlI11(362, "4xN)")](lI11Iili, "X") ? II11i111["EfOda"](II11i111[lIIlI11(290, "uLOZ")], "NYpoS") ? ll1iiI1 += iiilIi1I[lIIlI11(326, "RTlN")](Math[lIIlI11(340, "jLh4")](Math[lIIlI11(402, "syjB")]() * iiilIi1I[lIIlI11(534, "IB(Z")]))[lIIlI11(536, ")5@u")]() : ii1IIll = I1I11l1I[liIl11ii["floor"](II11i111["PCkRI"](lllIiIl1["random"](), I11lll11[lIIlI11(584, "JeZ2")]))] : ll1iiI1 += lI11Iili;
      }
    }
    return ll1iiI1;
  }
  async function IIiIIl11(iIIll1lI, iIIIIil) {
    const lil1l1l1 = lI1IlIil,
      Ilil1iII = {
        "YKhkY": function (lI11lil1, ll1Iliii) {
          const llI11l = iII1iiI;
          return II11i111[llI11l(319, "a!!@")](lI11lil1, ll1Iliii);
        },
        "tapeD": function (lilli111, lIiI1ili) {
          const IlII11lI = iII1iiI;
          return II11i111[IlII11lI(670, "jQrx")](lilli111, lIiI1ili);
        }
      };
    try {
      if (II11i111[lil1l1l1(471, "l@O[")](II11i111["jUEHP"], II11i111[lil1l1l1(678, "syjB")])) {
        let lIIiIl1I = il11liIi[lil1l1l1(440, "R]Vr")](";")[0]["trim"]();
        if (lIIiIl1I[lil1l1l1(607, "[O4@")]("=")[1]) {
          if (II11i111["iBXkf"](IiilliII[lil1l1l1(666, "#ilO")](lIIiIl1I[lil1l1l1(665, "bFZL")]("=")[1]), -1)) l11lIili += II11i111["XqfST"](lIIiIl1I[lil1l1l1(441, "Mn3#")](/ /g, ""), "; ");
        }
      } else switch (iIIll1lI) {
        case lil1l1l1(369, "PXqF"):
          if (iIIIIil[lil1l1l1(272, "2cM3")] == 0) {
            if (II11i111[lil1l1l1(295, "zIZ7")](II11i111[lil1l1l1(555, "dQNV")], II11i111[lil1l1l1(385, "4xN)")])) IIIi1iil[lil1l1l1(544, "wP(Z")] = !![];else {
              let I1IlIIIl = iIIIIil?.[lil1l1l1(732, "jQrx")]?.[lil1l1l1(606, "zIZ7")] || [],
                iiilII1I = [];
              for (let I1liIlli of I1IlIIIl) {
                let iIIilI1i = "";
                switch (I1liIlli[lil1l1l1(417, "eCry")]) {
                  case 1:
                  case 19:
                    {
                      iIIilI1i = prize_map[I1liIlli[lil1l1l1(503, "a!!@")]] + (I1liIlli[lil1l1l1(686, "v^Ew")] + "\u5143");
                      break;
                    }
                  case 3:
                  case 17:
                    {
                      iIIilI1i = II11i111[lil1l1l1(669, "eCry")](prize_map[I1liIlli[lil1l1l1(608, "l@O[")]], I1liIlli[lil1l1l1(489, "99M^")]);
                      let I1liiil1 = I1liIlli[lil1l1l1(735, "JeZ2")] > 0 ? "\u6EE1" + I1liIlli[lil1l1l1(245, "EavT")] : II11i111[lil1l1l1(347, "K8[[")];
                      iIIilI1i += "(" + I1liiil1 + "\u51CF" + I1liIlli["discount"] + ")";
                      break;
                    }
                  case 6:
                    {
                      iIIilI1i = II11i111["czOOG"](prize_map[I1liIlli["type"]], I1liIlli[lil1l1l1(296, "wP(Z")]);
                      let iIil1l = II11i111[lil1l1l1(529, "(i2(")](I1liIlli["quota"], 0) ? "\u6EE1" + I1liIlli["quota"] : lil1l1l1(411, "Si%b");
                      iIIilI1i += "(" + iIil1l + "\u6253" + I1liIlli[lil1l1l1(437, "zIZ7")] + "\u6298)";
                      break;
                    }
                  default:
                    {
                      if (II11i111["RULNB"](II11i111["FBWvF"], II11i111[lil1l1l1(580, "JIxP")])) {
                        iIIilI1i = prize_map[I1liIlli[lil1l1l1(624, "U]@[")] || II11i111[lil1l1l1(575, "4xN)")]] || "[\u672A\u77E5\u7C7B\u578B" + I1liIlli["type"] + "]", console[lil1l1l1(708, "l#Y%")]("" + Ii1il1Il + JSON[lil1l1l1(433, "[O4@")](I1liIlli));
                        break;
                      } else IIIii11[lil1l1l1(563, "R]Vr")] = liilIIl1;
                    }
                }
                iiilII1I[lil1l1l1(731, "JeZ2")](iIIilI1i);
              }
              console["log"]("" + Ii1il1Il + iiilII1I["join"](", "));
              let IlilI1Ii = iiilII1I[lil1l1l1(309, "RTlN")](l1ilI1l1 => {
                const l111III1 = lil1l1l1;
                return l1ilI1l1["includes"](II11i111[l111III1(431, "eCry")]) || l1ilI1l1[l111III1(567, "R5aw")](II11i111["ySPNb"]) || l1ilI1l1[l111III1(334, "l@O[")](II11i111[l111III1(397, "R5aw")]) ? "" : l1ilI1l1;
              })[lil1l1l1(680, "99M^")](Boolean);
              l1IIiII[lil1l1l1(599, "99M^")](IlilI1Ii[lil1l1l1(729, "IB(Z")](", "));
            }
          } else {
            console[lil1l1l1(248, "r4dy")](Ii1il1Il + lil1l1l1(349, "dQNV"));
            if (iIIIIil[lil1l1l1(464, "Si%b")]?.[lil1l1l1(269, "RTlN")](II11i111["vkEqz"])) {
              if (II11i111[lil1l1l1(360, "uLOZ")](lil1l1l1(380, "a!!@"), II11i111["HTgNh"])) iIIiIII1 = !![];else {
                if (Ilil1iII[lil1l1l1(454, "EHJB")](l1IIiliI, "x")) IIi1lIll += lllIl1I1["charAt"](IIi1li1I["floor"](Ilil1iII["tapeD"](lI11i1Ii[lil1l1l1(564, "RTlN")](), i1ilIlll[lil1l1l1(343, "r4dy")])));else Ii1lIllI == "X" ? I1ll1l1 += iI11llI1[lil1l1l1(540, "l#Y%")](IllIlIi1["floor"](Ilil1iII[lil1l1l1(711, "JDV2")](IIiilIlI["random"](), iIlIi1il[lil1l1l1(251, "v^Ew")])))["toUpperCase"]() : Il111lI += I1ili111;
              }
            }
          }
          break;
      }
    } catch (IiiiIl) {
      console["log"](lil1l1l1(554, "K8[[") + iIIll1lI + lil1l1l1(429, "Q)[D") + (IiiiIl[lil1l1l1(256, "w7rH")] || IiiiIl));
    }
  }
  async function lilillIi(i1iIilll) {
    const lliiIiii = lI1IlIil,
      ll1iiIli = {
        "QEwSg": function (Il1i111I, ilII11I) {
          return Il1i111I == ilII11I;
        },
        "Vombf": function (lI1Ii111, IIii11ll) {
          const I11II1ii = iII1iiI;
          return II11i111[I11II1ii(672, "EavT")](lI1Ii111, IIii11ll);
        }
      };
    if ($["runEnd"]) return;
    let liIilll1 = "",
      IlIIilll = null,
      lIli11lI = null,
      Ilil1Il1 = II11i111[lliiIiii(630, "Si%b")],
      lIIi1I1 = {},
      I1ilii1i = {};
    switch (i1iIilll) {
      case lliiIiii(327, "POES"):
        I1ilii1i = {
          "appId": II11i111[lliiIiii(390, "[AqX")],
          "functionId": II11i111[lliiIiii(458, "EHJB")],
          "appid": II11i111["bkhly"],
          "clientVersion": common["getLatestAppVersion"](),
          "client": II11i111["wdLko"],
          "body": {
            "platform": 4,
            "unionActId": unionActId,
            "actId": actId,
            "d": i1Iiil11,
            "unionShareId": l1l1ilII,
            "type": 1,
            "qdPageId": II11i111[lliiIiii(650, "R]Vr")],
            "mdClickId": II11i111["yVTWg"],
            "actType": 2
          },
          "version": lliiIiii(368, "JeZ2"),
          "ua": iIi1lI1l,
          "t": !![]
        }, lIIi1I1 = await H5st[lliiIiii(662, "JIxP")](I1ilii1i), liIilll1 = II11i111[lliiIiii(483, "dOzb")], IlIIilll = lIIi1I1["paramsData"];
        break;
      default:
        console[lliiIiii(372, "uLOZ")](lliiIiii(274, "Q)[D") + i1iIilll);
        return;
    }
    const iiIll1I = {
      "x-api-eid-token": I1i1ili1,
      "loginType": 2,
      "_": II11i111[lliiIiii(692, "zIZ7")](new Date()[lliiIiii(291, "IB(Z")]() + II11i111[lliiIiii(644, "Mn3#")](II11i111["evhCU"](new Date()[lliiIiii(511, "dQNV")](), 60), 1000), II11i111[lliiIiii(654, "bFZL")](II11i111["PecHP"](II11i111[lliiIiii(421, "bFZL")](8, 60), 60), 1000)),
      "d_model": lliiIiii(265, "#ilO"),
      "osVersion": common["getLatestIOSVersion"]()
    };
    IlIIilll && (IlIIilll = {
      ...IlIIilll,
      ...iiIll1I
    });
    if (lIli11lI) {
      if (lliiIiii(259, "BZC&") !== lliiIiii(639, "syjB")) {
        iII111II[lliiIiii(661, "Si%b")](I1II11i1 + lliiIiii(230, "jQrx")), lI1l11li[lliiIiii(616, "v^Ew")]["push"](i11Iiii1);
        return;
      } else lIli11lI = {
        ...lIli11lI,
        ...iiIll1I
      };
    }
    const IllIIlii = {
      "url": liIilll1,
      "method": Ilil1Il1,
      "headers": {
        "accept": II11i111[lliiIiii(439, "a!!@")],
        "Accept-Language": II11i111[lliiIiii(625, "w7rH")],
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        "Cookie": II11i111[lliiIiii(663, "l@O[")](lliIiI11 + " ", lI1IilI),
        "X-Requested-With": II11i111["oDWEj"],
        "Referer": Referer,
        "Origin": II11i111[lliiIiii(241, "EHJB")],
        "x-rp-client": II11i111["tQhKe"],
        "User-Agent": iIi1lI1l
      },
      "params": lIli11lI,
      "data": IlIIilll,
      "timeout": 30000
    };
    II11i111["LZran"](Ilil1Il1, II11i111[lliiIiii(474, "Mn3#")]) && (delete IllIIlii[lliiIiii(537, "JeZ2")], delete IllIIlii["headers"][II11i111[lliiIiii(623, "(i2(")]]);
    const ii1liiIi = 1;
    let Il1l1l1 = 0,
      llI1l1Ii = null,
      IIll111I = ![];
    while (II11i111[lliiIiii(286, "2cM3")](Il1l1l1, ii1liiIi)) {
      if (II11i111["QCrbB"](II11i111[lliiIiii(651, "[AqX")], II11i111[lliiIiii(753, "eCry")])) for (let I11IliI1 of lI1ii1Ii) {
        let IllIIIl1 = I11IliI1[lliiIiii(556, "U]@[")](";")[0][lliiIiii(667, "PXqF")]();
        if (IllIIIl1["split"]("=")[1]) {
          if (ll1iiIli[lliiIiii(378, "l#Y%")](lIIiIii["indexOf"](IllIIIl1[lliiIiii(543, "Si%b")]("=")[1]), -1)) i11i11I += ll1iiIli["Vombf"](IllIIIl1[lliiIiii(352, "yVhj")](/ /g, ""), "; ");
        }
      } else {
        const II1li1ii = await common["request"](IllIIlii);
        if (!II1li1ii[lliiIiii(359, "[O4@")]) {
          if (II11i111[lliiIiii(425, "R5aw")](lliiIiii(488, "dQNV"), II11i111[lliiIiii(229, "IoAu")])) {
            llI1l1Ii = "\uD83D\uDEAB " + i1iIilll + lliiIiii(598, "[O4@") + II1li1ii[lliiIiii(398, "RTlN")], Il1l1l1++;
            continue;
          } else ii1iiIlI[lliiIiii(361, "4xN)")](II11i111["WDrST"]);
        }
        if (!II1li1ii["data"]) {
          llI1l1Ii = lliiIiii(533, "dOzb") + i1iIilll + lliiIiii(312, ")5@u"), Il1l1l1++;
          continue;
        }
        II11i111["PnJGQ"](IIiIIl11, i1iIilll, II1li1ii[lliiIiii(289, "RTlN")]), IIll111I = ![];
        break;
      }
    }
    Il1l1l1 >= ii1liiIi && (console["log"](llI1l1Ii), IIll111I && ($[lliiIiii(722, "syjB")] = !![]));
  }
}
async function getAuthorCodeList(li1IiI1I) {
  const iIil1lI1 = l1iIl111,
    IIIiiIIi = await common[iIil1lI1(652, "jQrx")]({
      "url": li1IiI1I,
      "method": iIil1lI1(413, "5&Be"),
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88"
      },
      "proxy": null,
      "debug": ![],
      "timeout": 30000
    }),
    Il1iIill = IIIiiIIi[iIil1lI1(569, "jLh4")];
  return Il1iIill;
}
function random(ilIl1ilI, IiiIIl1l) {
  const IIl11lll = l1iIl111,
    llI1I1 = {
      "KuOyC": function (iIIIIi1i, Il1l1II) {
        return iIIIIi1i * Il1l1II;
      },
      "hLZZL": function (iIiIlI1l, iillllI) {
        return iIiIlI1l - iillllI;
      }
    };
  return Math[IIl11lll(384, "JDV2")](llI1I1[IIl11lll(285, "yVhj")](Math["random"](), llI1I1["hLZZL"](IiiIIl1l, ilIl1ilI))) + ilIl1ilI;
}
var version_ = "jsjiami.com.v7";
// prettier-ignore
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = new Date().getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i);
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar(), t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      });else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t));else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o);
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body);
        });
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============\uD83D\uDCE3\u7CFB\u7EDF\u901A\u77E5\uD83D\uDCE3=============="];
        t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}