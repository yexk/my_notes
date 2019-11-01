
### 1.js数组去重
~~~JavaScript
// 数组去重
Array.prototype.ye_unique = function(){
	var res = [];
	var json = {};
	for(var i = 0; i < this.length; i++){
		if(!json[this[i]]){
			res.push(this[i]);
			json[this[i]] = 1;
		}
	}
	return res;
}
~~~

### 2. js mac地址转成10进制数
```JavaScript
/**
 * mac地址转成10进制数
 * @Author Yexk
 * @Date   2017-01-17
 * @param  {string}   mac mac地址信息
 * @return {Number}       返回10进制的int
 */
function mac_string_to_int(mac) {
    var convertResult=0; 
    var temp = /[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}/;
    var temp12 = /[A-Fa-f0-9]{12}/;
    var n = mac.replace(/-/g, "");
    if (temp.test(n)) 
    {
        n=mac.replace(/:/g, "");
        convertResult=parseInt(n,16);
    }
    if (temp12.test(n)) 
    {
        convertResult=parseInt(n,16);
    }
    if(isNaN(convertResult)||convertResult==0||convertResult>281474976710655)
    {
        alert("请输入合法的MAC值");return false;
    }
    else
    {
        return convertResult;
    }
}
```

### 3. js mac地址的十进制数转成十六进制数
```JavaScript
/**
 * mac地址的十进制数转成十六进制数
 * @Author Yexk
 * @Date   2017-01-17
 * @param  {number}   str int类型的十进制 mac地址数
 * @return {String}       返回十六进制的mac地址。
 */
function mac_int_to_string(str) {
    var str = str.toString(16);
    var mac_str = '';
    for (var i = 0; i < str.length; i++) {
        if (i%2==0) {
            mac_str += str[i];
        }else{
            mac_str += str[i] + ':';
        }
    }
    mac_str = mac_str.substr(0,mac_str.length-1);
    return !arguments[1] ? mac_str.toUpperCase() : mac_str ;
}
```

### 4. js 重复输出某串字符
```JavaScript
    /**
     * 重复输出某串字符
     * @Author Yexk
     * @Date   2017-03-01
     * @param  {String}   str 需要被复制的字符串
     * @param  {Number}   num 重复的次数
     * @return {String}       返回结果
     */
    function str_repeat(str, num){
        return new Array( num + 1 ).join( str ); 
    }

```
### 5. 获取get方式的值。
```JavaScript
    /**
     * 获取get方式的键值对。
     * @Author   Yexk
     * @DateTime 2017-04-28
     * @param    {String}   url 页面地址的url
     * @return   {Aarry}        返回get的参数值
     */
    function getUrlVars(url)
    {
        var vars = [], hash;
        var hashes = url.slice(url.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++)
        {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    }
```

### 6. 默认PHP的date函数
```JavaScript
/**
 * 模拟PHP的date函数
 * eg. date('Y m d', (new Date()).getTime() / 1000) 
 * 
 * @Date   2016-12-06
 * @param  {String}   format    [需要格式化的样式]
 * @param  {Number}   timestamp [可选，需要格式化的时间戳（秒），默认是当前时间]
 * @return {String}             [返回格式化后的时间]
 */
function date(format, timestamp) {
    var that = this;
    var jsdate, f;
    // Keep this here (works, but for code commented-out below for file size reasons)
    // var tal= [];
    var txt_words = [
    'Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur',
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
    ];
    // trailing backslash -> (dropped)
    // a backslash followed by any character (including backslash) -> the character
    // empty string -> empty string
    var formatChr = /\\?(.?)/gi;
    var formatChrCb = function (t, s) {
    return f[t] ? f[t]() : s;
    };
    var _pad = function (n, c) {
    n = String(n);
    while (n.length < c) {
        n = '0' + n;
    }
    return n;
    };
    f = {
    // Day
    d: function () {
        // Day of month w/leading 0; 01..31
        return _pad(f.j(), 2);
    },
    D: function () {
        // Shorthand day name; Mon...Sun
        return f.l()
        .slice(0, 3);
    },
    j: function () {
        // Day of month; 1..31
        return jsdate.getDate();
    },
    l: function () {
        // Full day name; Monday...Sunday
        return txt_words[f.w()] + 'day';
    },
    N: function () {
        // ISO-8601 day of week; 1[Mon]..7[Sun]
        return f.w() || 7;
    },
    S: function () {
        // Ordinal suffix for day of month; st, nd, rd, th
        var j = f.j();
        var i = j % 10;
        if (i <= 3 && parseInt((j % 100) / 10, 10) == 1) {
        i = 0;
        }
        return ['st', 'nd', 'rd'][i - 1] || 'th';
    },
    w: function () {
        // Day of week; 0[Sun]..6[Sat]
        return jsdate.getDay();
    },
    z: function () {
        // Day of year; 0..365
        var a = new Date(f.Y(), f.n() - 1, f.j());
        var b = new Date(f.Y(), 0, 1);
        return Math.round((a - b) / 864e5);
    },
 
    // Week
    W: function () {
        // ISO-8601 week number
        var a = new Date(f.Y(), f.n() - 1, f.j() - f.N() + 3);
        var b = new Date(a.getFullYear(), 0, 4);
        return _pad(1 + Math.round((a - b) / 864e5 / 7), 2);
    },
 
    // Month
    F: function () {
        // Full month name; January...December
        return txt_words[6 + f.n()];
    },
    m: function () {
        // Month w/leading 0; 01...12
        return _pad(f.n(), 2);
    },
    M: function () {
        // Shorthand month name; Jan...Dec
        return f.F()
        .slice(0, 3);
    },
    n: function () {
        // Month; 1...12
        return jsdate.getMonth() + 1;
    },
    t: function () {
        // Days in month; 28...31
        return (new Date(f.Y(), f.n(), 0))
        .getDate();
    },
 
    // Year
    L: function () {
        // Is leap year?; 0 or 1
        var j = f.Y();
        return j % 4 === 0 & j % 100 !== 0 | j % 400 === 0;
    },
    o: function () {
        // ISO-8601 year
        var n = f.n();
        var W = f.W();
        var Y = f.Y();
        return Y + (n === 12 && W < 9 ? 1 : n === 1 && W > 9 ? -1 : 0);
    },
    Y: function () {
        // Full year; e.g. 1980...2010
        return jsdate.getFullYear();
    },
    y: function () {
        // Last two digits of year; 00...99
        return f.Y()
        .toString()
        .slice(-2);
    },
 
    // Time
    a: function () {
        // am or pm
        return jsdate.getHours() > 11 ? 'pm' : 'am';
    },
    A: function () {
        // AM or PM
        return f.a()
        .toUpperCase();
    },
    B: function () {
        // Swatch Internet time; 000..999
        var H = jsdate.getUTCHours() * 36e2;
        // Hours
        var i = jsdate.getUTCMinutes() * 60;
        // Minutes
        // Seconds
        var s = jsdate.getUTCSeconds();
        return _pad(Math.floor((H + i + s + 36e2) / 86.4) % 1e3, 3);
    },
    g: function () {
        // 12-Hours; 1..12
        return f.G() % 12 || 12;
    },
    G: function () {
        // 24-Hours; 0..23
        return jsdate.getHours();
    },
    h: function () {
        // 12-Hours w/leading 0; 01..12
        return _pad(f.g(), 2);
    },
    H: function () {
        // 24-Hours w/leading 0; 00..23
        return _pad(f.G(), 2);
    },
    i: function () {
        // Minutes w/leading 0; 00..59
        return _pad(jsdate.getMinutes(), 2);
    },
    s: function () {
        // Seconds w/leading 0; 00..59
        return _pad(jsdate.getSeconds(), 2);
    },
    u: function () {
        // Microseconds; 000000-999000
        return _pad(jsdate.getMilliseconds() * 1000, 6);
    },
 
    // Timezone
    e: function () {
        // Timezone identifier; e.g. Atlantic/Azores, ...
        // The following works, but requires inclusion of the very large
        // timezone_abbreviations_list() function.
        /*              return that.date_default_timezone_get();
         */
        throw 'Not supported (see source code of date() for timezone on how to add support)';
    },
    I: function () {
        // DST observed?; 0 or 1
        // Compares Jan 1 minus Jan 1 UTC to Jul 1 minus Jul 1 UTC.
        // If they are not equal, then DST is observed.
        var a = new Date(f.Y(), 0);
        // Jan 1
        var c = Date.UTC(f.Y(), 0);
        // Jan 1 UTC
        var b = new Date(f.Y(), 6);
        // Jul 1
        // Jul 1 UTC
        var d = Date.UTC(f.Y(), 6);
        return ((a - c) !== (b - d)) ? 1 : 0;
    },
    O: function () {
        // Difference to GMT in hour format; e.g. +0200
        var tzo = jsdate.getTimezoneOffset();
        var a = Math.abs(tzo);
        return (tzo > 0 ? '-' : '+') + _pad(Math.floor(a / 60) * 100 + a % 60, 4);
    },
    P: function () {
        // Difference to GMT w/colon; e.g. +02:00
        var O = f.O();
        return (O.substr(0, 3) + ':' + O.substr(3, 2));
    },
    T: function () {
        // Timezone abbreviation; e.g. EST, MDT, ...
        // The following works, but requires inclusion of the very
        // large timezone_abbreviations_list() function.
        /*              var abbr, i, os, _default;
        if (!tal.length) {
        tal = that.timezone_abbreviations_list();
        }
        if (that.php_js && that.php_js.default_timezone) {
        _default = that.php_js.default_timezone;
        for (abbr in tal) {
            for (i = 0; i < tal[abbr].length; i++) {
            if (tal[abbr][i].timezone_id === _default) {
                return abbr.toUpperCase();
            }
            }
        }
        }
        for (abbr in tal) {
        for (i = 0; i < tal[abbr].length; i++) {
            os = -jsdate.getTimezoneOffset() * 60;
            if (tal[abbr][i].offset === os) {
            return abbr.toUpperCase();
            }
        }
        }
        */
        return 'UTC';
    },
    Z: function () {
        // Timezone offset in seconds (-43200...50400)
        return -jsdate.getTimezoneOffset() * 60;
    },
 
    // Full Date/Time
    c: function () {
        // ISO-8601 date.
        return 'Y-m-d\\TH:i:sP'.replace(formatChr, formatChrCb);
    },
    r: function () {
        // RFC 2822
        return 'D, d M Y H:i:s O'.replace(formatChr, formatChrCb);
    },
    U: function () {
        // Seconds since UNIX epoch
        return jsdate / 1000 | 0;
    }
    };
     
    this.date = function (format, timestamp) {
        that = this;
        jsdate = (timestamp === undefined ? new Date() : // Not provided
            (timestamp instanceof Date) ? new Date(timestamp) : // JS Date()
            new Date(timestamp * 1000) // UNIX timestamp (auto-convert to int)
        );
        return format.replace(formatChr, formatChrCb);
    };
    return this.date(format, timestamp);
}

```

### 7. 从字符串末尾开始去掉字符。
```JavaScript    
/**
 * 从末尾开始去掉字符串，保留前面的字符串。
 * eg. 
 * // var str = "sinaf012e3c9b658";
 * var str = "baiduf012e3c9b658";
 * console.log(str.last_substr(12)); // baidu  
 *
 * @Author Yexk
 * @Date   2017-05-09
 * @param  {Number}   len [需要裁剪的字符串长度]
 * @return {String}       [返回裁剪后的字符串]
 */
String.prototype.last_substr = function(len) {
    var t_arr = this.split('');
    var length = t_arr.length;
    for (var i = 0; i < length; i++) {
        if (i>=len) break;
            t_arr.pop();
    }
    return t_arr.join("");
}

```

