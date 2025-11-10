/*
DNS服务器:
202.96.134.133 深圳
202.96.174.66
202.96.128.68  广东省宽带DNS服务器
211.148.192.134 深圳天威视讯
216.239.33.12  Google
8.8.8.8  Google Public DNS
8.8.4.4

如果碰到DNS劫持的封锁方法，那么需要选择正确的DNS服务器，将主DNS设置成国外根服务器的DNS，
然后辅助DNS设置成国外的DNS。具体做法：在拨号网络或网卡属性里设置，主DNS设成 202.12.27.33，
辅助DNS：202.216.228.18（日本DNS）大家还可以自己找一些快的国外DNS。 （其原理是DNS劫持只
能够控制国内的DNS服务器，而对于国外的DNS服务器则无能为力，因此只要不使用国内的DNS即可）

"www.zccw.info","◆掷出窗外：食品安全危机",
*/

CoolSite=new Array(
"日常使用",

"https://kimi.moonshot.cn","◆Kimi.AI","很火的国内AI",
"https://ai.xiabb.chat","◆阿水AI6.0","聚合AI,无需梯子chatGPT服务",
"https://cn.bing.com/?ensearch=1","Bing国际版","无需梯子,无奈选择",
"https://metaso.cn","◆秘塔AI搜索","国内免费AI搜索",
"https://www.google.com","★Google","AI前的王者,常需梯子", //ggssl.com
//"https://www.google.com/reader/","Google阅读器","",
"www.google.com/ncr","★Google/ncr","",   //no country redirect
"www.cctv.com.cn/program/mzzlbg/06/index.shtml",'◆CCTV每周质量报告',"",
"www.Zaobao.com",'联合早报网',"",
"epaper.xkb.com.cn",'新快报',"",
"www.nfcmag.com",'◆《南风窗》',"",
"","",""
);

Favorite1=new Array(
"搜索引擎 & 热门AI",

"https://www.google.com","★Google","",
"www.wikipedia.org",'★WikiPedia',"维基百科",
"https://metaso.cn","秘塔AI搜索","国内免费AI搜索",
"https://n.cn","纳米搜索","原360 AI搜索升级",
"https://cn.bing.com/?ensearch=1","Bing国际版","无需梯子",
"https://ai-bot.cn","AI工具集","AI工具分类导航",

"https://ai.xiabb.chat","◆阿水AI6.0","聚合AI,无需梯子chatGPT服务",

"https://github.com/copilot","◆Copilot","Github Copilot",
"https://www.deepseek.com","DeepSeek","又一个免费国内AI",
"https://www.doubao.com/chat","◆豆包","字节跳动出品",
"https://kimi.moonshot.cn","Kimi.AI","很火的免费国内AI",

"https://yiyan.baidu.com","◆文心一言","百度出品",
"https://www.tiangong.cn","◆天工AI","国内AI",
"https://chatglm.cn","◆智谱清言","质量不错",


"https://tongyi.aliyun.com/qianwen","通义千问","阿里出品",
"https://xinghuo.xfyun.cn","讯飞星火","科大讯飞出品",

"https://yuanbao.tencent.com/chat","腾讯元宝","腾讯出品",


"https://chat.openai.com","★◆ChatGPT","最早最热的AI王者",
"https://gemini.google.com","★Google Gemini","Google的AI,效果一般",
"","",""
);

Favorite2=new Array(
"在线字典-语言学习",

"www.inputking.com","在线多语言输入","在线多语言输入",
"www.cantoneseinput.com","◆在线粤语输入","◆在线粤语输入",
"www.TypeIt.org","特殊语言符号输入","特殊语言符号输入",
//“头发\发财”、“日历\经历”、“胡须\胡同” 必须 
//“頭髮\發財”、“日曆\經歷”、“鬍鬚\衚衕” 必須
"tool.webmasterhome.cn/GB2312_BIG5.asp","繁简文本转换","繁简文本转换",
"www.wikipedia.org",'★WikiPedia',"维基百科",
"www.differencebetween.info",'◆DiffBetween',"",
"www.afterdawn.com/glossary/",'◆IT glossary',"",
"www.zdic.net",'◆在线汉语字典',"",
"https://pinyin.info/romanization/compare/hanyu.html",'◆漢語拼音羅馬化',"Hanyu Pinyin romanization",
"https://www.bmcx.com/wadegiles__pinyinconversion/",'◆威妥玛拼音转换',"",
"https://www.zdic.net/ts/fulu/2019/05/18.html",'◆汉语拼音与其他对照表',"",

"https://www.iamwawa.cn/yuepin.html",'◆粤语拼音转换工具',"",

"humanum.arts.cuhk.edu.hk/Lexis/lexi-can/",'◆粵語審音配詞字庫',"",
"www.edbchinese.hk/lexlist_ch/",'◆香港小學學習字詞表',"",
"https://crptransfer.moe.gov.tw/",'◆拼音查詢',"",
"https://dict.mini.moe.edu.tw/",'◆國語小詞典',"臺灣教育部",
"https://dict.concised.moe.edu.tw",'◆國語辭典簡編本',"臺灣教育部",
"https://dict.idioms.moe.edu.tw",'◆成語典',"",

"www.chineseetymology.org",'◆中文词源',"", // https://hanziyuan.net/

"dict.bing.com.cn","◆微软bing词典","",
"www.m-w.com","◆merriam-webster.com","",
"oxforddictionaries.com","◆Oxford Dictionary","",
"oald8.oxfordlearnersdictionaries.com","◆Oxford Advanced Dict.","",
"www.ldoceonline.com","Longman OnlineDict","",
"www.abbreviations.com","Abbreviations","",
"dictionary.reference.com","Dictionary.com","",
"dictionary.cambridge.org","Cambridge Dict","",
"www.dict.cn/search/","◆在线词典","",
"cdict.net","线上英汉词典","",
"https://dict.hjenglish.com/","沪江小D在线翻译","",
"www.wordreference.com","免费多国语词典","",
"dict.cnki.net","CNKI翻译助手","",
"www.iciba.net","金山词霸在线词典","",
"dict.yodao.com/","有道海量词典","",
"translate.google.com/translate_t",'★◆Google多语言翻译',"", //www.google.com/language_tools?hl=en
"www.allwords.com",'西方多语言词典',"",
"www.dict.org",'Dict.Org',"",
"www.thefreedictionary.com",'Free Dictionary',"",
"www.dictionarylink.com",'FreeOnline Dict.',"",
"www.dictionary.com","Dictionary.com","",
"www.onelook.com",'OneLook Dict.',"",
"","",""
);

Favorite3=new Array(
"实用工具",

"Speedtest.net","◆Speedtest.net","网速测试",
"www.linkwan.com/gb/broadmeter/","带宽测试1","网速测试",
"iruler.net",'Online ruler','在线直尺',
"www.online-stopwatch.com",'Online-Stopwatch','在线秒表',

"www.docspal.com","文件格式转换","文件格式转换",
"www.PdfUnlock.com","PDF Unlock","PDF文件解锁",
"www.WebResizer.com","在线图片无损压缩","在线图片无损压缩",
"compresspng.com","Compress PNG","PNG图片压缩",
"https://tinypng.com/","Tiny PNG","PNG图片压缩",
"vectormagic.com",'在线免费位图转矢量图','在线免费位图转矢量图',
"barcode.tec-it.com",'在线免费生成条码','在线免费生成条码',

"24timezones.com/map_zh.htm",'世界时钟','世界各地时间',
"www.zdic.net/appendix/f27.htm",'◆择吉老黄历','◆择吉老黄历',
"https://www.allconversions.com","Unit Conversion","单位换算(英文)", // https://www.lookuptables.com/
"www.metric-conversions.org",'metric conversions',"单位换算(英文)",

"https://play.google.com/store/apps",'<&Hopf;> Google Play应用商店',"最官方,但需登录且不能下载到电脑",
"https://apps.evozi.com/apk-downloader/",'apps.evozi.com',"将Google Play应用下载到电脑",
"https://apk-dl.com/",'apk-dl.com',"将Google Play应用下载到电脑",
"https://www.apkmirror.com",'APKMirror',"将Google Play应用下载到电脑",
"https://apkcombo.com",'APKCombo',"将Google Play应用下载到电脑",
"https://en.aptoide.com/group/applications",'Aptoide',"将Google Play应用下载到电脑",
"https://apkpure.com",'Apkpure',"将Google Play应用下载到电脑",
"apkleecher.com",'apkleecher.com',"将Google Play应用下载到电脑",
"https://apkpac.com",'ApkPAC',"将Google Play应用下载到电脑",

"www.virustotal.com",'◆单文件多引擎查毒1','上传文件在线查毒',
"virusscan.jotti.org",'单文件多引擎查毒2','上传文件在线查毒',
"www.virscan.org",'单文件多引擎查毒3','上传文件在线查毒',

"www.virtualpiano.net",'◆在线钢琴','◆虚拟在线钢琴',
"www.virtualmusicalinstruments.com",'◆虚拟乐器','◆虚拟各种乐器',
"","",""
);

Favorite4=new Array(
"外出旅行",

"www.12306.cn",'◆12306.cn',"12306高铁火车票",
"www.travelsky.com.cn",'◆信天游机票验真','机票验真',
"www.ctrip.com",'携程旅行网',"机票酒店预定",
"Qunar.com",'去哪儿机票搜索',"机票酒店预定",
"www.shenzhenair.com",'深圳航空',"航空公司官网",
"www.csair.com",'南方航空',"航空公司官网",

"https://www.dialingcode.com/","dialing/country codes","国际电话区号查询",
"lidicity.com/lieguo/huobi.html",'货币兑换换算器','货币兑换换算器',

"https://ditu.amap.com/",'◆高德地图',"电脑查看地图效果更佳",
"https://cn.bing.com/maps?FORM=Z9LH2",'◆必应地图',"电脑查看地图效果更佳",
"www.openstreetmap.org",'◆OpenStreetMap',"电脑查看地图效果更佳",
"www.tianditu.cn",'天地图',"电脑查看地图效果更佳",
"www.earthol.com",'地球在线',"电脑查看地图效果更佳",
"map.qq.com",'◆腾讯地图',"电脑查看地图效果更佳",

"https://www.mtr.bj.cn",'北京京港地铁',"",
"https://www.hncsmtr.com",'长沙轨道交通',"",
"https://www.chengdurail.com",'成都轨道',"",
"https://www.cqmetro.cn",'重庆轨道交通',"",
"https://www.gzmtr.com",'广州地铁',"",
"https://www.hzmetro.com",'杭州地铁',"",
"https://www.njmetro.com.cn",'南京地铁',"",
"www.nbmetro.com",'宁波轨道交通',"",
"www.qd-metro.com",'青岛地铁',"",
"www.shmetro.com",'上海地铁',"",
"symtc.com",'沈阳地铁',"",
"https://www.szmc.net",'深圳地铁',"",
"https://www.sz-mtr.com",'苏州轨道交通',"",
"https://www.wuhanrt.com",'武汉地铁',"",
"https://www.xmgdjt.com.cn",'厦门地铁',"",
"https://www.mtr.com.hk",'港鐵',"",
"https://www.newmetro.taipei",'臺北捷運',"",
"www.tjgdjt.com",'天津轨道交通',"",
"https://www.zzmetro.cn",'郑州地铁',"",
"","",""
);

Favorite5=new Array(
"软件开发相关",

"https://www.drawio.com",'draw.io',"免费的画图工具",
"https://mermaid.live/edit",'Mermaid Live Editor',"流程图等编辑查看",
"https://excalidraw.com",'◆excalidraw.com',"免费的画图工具",
"https://lvgl.io",'LVGL for embedded',"",
"https://github.com/lvgl/lvgl",'LVGL',"",
"https://mp.weixin.qq.com/s?__biz=Mzg4Mjg4NDY4MA==&mid=2247483765&idx=1&sn=6be5c521e8a91cc3da7b6c85960cc22a",'LVGL快速入门',"",
"https://github.com/CURTLab/LVGLBuilder",'LVGL builder',"",
"https://github.com/mrQzs/Lvgl_Simulator",'LVGL Simulator',"",
"https://github.com/eez-open/studio",'EEZ Studio',"",
"https://github.com/zlgopen/awtk",'Toolkit AnyWhere',"cross-platform embedded GUI",
"https://mp.weixin.qq.com/s/8zuz5xag78h83CJUisyy_g",'AWTK：跨平台GUI引擎的未来之路',"",

"https://hub.docker.com/",'Docker Hub',"",
"https://docker.1panel.dev",'1Panel Docker镜像',"",

"https://www.rainpat.com",'润桐RainPat专利检索',"",
"https://www.chaspark.com/#/patents/","◆查思专利","不注册也可查",
"www.sipo.gov.cn/sipo/zljs/default.htm",'专利检索',"",
"www.patent.com.cn",'中国专利信息网',"",

"www.ip-adress.com/ip_tracer/encrypted.google.com","★查加密谷歌IP","",
"www.google.com/codesearch","★Google代码搜索","",

"https://elixir.bootlin.com/linux/latest/source","Linux kernel源码","",
"https://github.com/aosp-mirror","Android AOSP源码","github",
"androidxref.com/","Android XRef","",
"https://code.google.com/archive/p/android-source-browsing/source","Android-source-browsing","",
"code.google.com","★Google Code","",

"www.makelinux.net/kernel_map/",'◆Linux Kernel Map',"",
"www.makelinux.net/ldd3/",'LinuxDeviceDrivers 3rd',"",

"www.gnu.org/software/libc/manual/html_node/index.html",'◆GNU C库指南',"",
"www.datasheetcatalog.com",'◆DatasheetCatalog',"",
"www.unicode.org",'UniCode.Org',"",
"www.mandarintools.com",'在线中文工具',"",

"www.all-nettools.com/toolbox","All Network Tools","", //216.92.207.177/tools1.htm
"ipaddress.com","◆IP address tools","",
"https://resolve.rs/ip/geolocation.html","◆IP Address Geolocation","",
"tool.chinaz.com","◆站长工具","",
"tool.webmasterhome.cn","◆站长工具2","",

"https://www.asciitable.com/","ASCII table","",
"https://www.lookuptables.com/text/ascii-table","ASCII table","",
"https://www.lookuptables.com/text/html-character-codes",'HTML Character Codes',"",
"https://home.unicode.org/",'unicode.org',"unicode标准官网",
"https://www.lookuptables.com/text/unicode-characters","Unicode Characters and Blocks","",

"https://github.com/evolus/pencil",'Pencil',"free GUI prototyping",
"https://mp.weixin.qq.com/s/edze99srQwlhlkbz5d_EJw",'Pencil：开源跨平台原型设计',"",
"https://uviewui.com",'uView UI',"跨平台多端UI框架",
"https://animxyz.com/",'AnimXYZ',"",
"https://github.com/ingram-projects/animxyz",'AnimXYZ github',"",
"https://mp.weixin.qq.com/s/0clMdyzlhQc6AgI5EocY-w",'前端动画工具库',"",
"https://symbl.cc/en/emoji/",'Full Emoji List',"",
"","",""
);

Favorite6=new Array(
"HongKong香港",

"https://www.edb.gov.hk",'香港教育局',"",
"www.hko.gov.hk",'香港天文臺',"",
"www.weather.com.hk",'香港天氣預報',"",
"www.hkpl.gov.hk",'◆香港公共圖書館',"",

"www.cactm.edu.hk",'宣道中學',"",
"www.hft.edu.hk",'何福堂小學',"",
"www.zdic.net",'漢典',"",
"https://dict.revised.moe.edu.tw",'國語詞典',"",
"https://humanum.arts.cuhk.edu.hk/Lexis/Canton/",'粵音韻彙',"",

"https://www.bilibili.com/video/BV1st4y1r7Dr/",'香港中学数学全69P',"香港教育电视（粤语）",
"https://isolution.oupchina.com.hk",'Oxford iSolution網頁版',"",
"https://www.edb.gov.hk/tc/curriculum-development/kla/chi-edu/nss-lang/settext-text.html",'指定文言經典學習材料',"原文及誦讀錄音",
"https://www.edb.gov.hk/tc/curriculum-development/kla/chi-edu/resources/practical-writing/practical-writing.html",'中小學實用文寫作參考資料',"",
"https://www.edb.gov.hk/tc/curriculum-development/kla/chi-edu/chinese-culture/chi-culture-main.html",'中華經典名句',"",
"https://www.edb.gov.hk/tc/curriculum-development/kla/chi-edu/resources/secondary-edu/lang/reciting-mp3.html",'中學古詩文誦讀材料選編',"",
"https://www.edb.gov.hk/tc/curriculum-development/kla/chi-edu/resources/secondary-edu/lang/culture.html",'中華文化學與教資源套',"",

"news.gov.hk",'香港政府新聞網',"",
"www.consumer.org.hk","◆HK消費者委員會","",

"www.mtr.com.hk",'香港地鐵',"",
"hketransport.gov.hk",'香港乘車易網',"",
"bus.mapbar.com/hongkong/",'香港公交換乘1',"",
"www.kmb.com.hk",'九龍巴士',"",
"www.nwstbus.com.hk",'城巴_新巴',"", //www.citybus.com.hk
"www.newlantaobus.com",'新大嶼山巴士',"",
"maps.google.com.hk",'Google香港地圖',"",
"www.map.gov.hk",'香港gov地圖',"香港政府地圖",
"www.ushb.net",'HK特區聯合交通網',"",
"www.centamap.com",'中原香港地圖',"",
"www.midlandmap.hk",'美聯香港地圖',"",
"https://www.landsd.gov.hk/sc/resources/mapping-information/hk-geographic-data.html","地政署地圖","",
"www.bochk.com",'中銀香港',"",

"https://www.edb.gov.hk/tc/edu-system/postsecondary/policy-doc/pilot-scheme.html",'內地高校招收香港學生計劃',"",
"https://www.eeagd.edu.cn/lzks/main.jsp",'2024年联合招生管理系统',"",
"https://eea.gd.gov.cn/bmbk/index.html",'广东省教育考试院',"",
"https://www.cactm.edu.hk/~careers/",'升學及就業輔導部',"宣道中學",
"","",""
);

Favorite7=new Array(
"电脑菜鸟学苑",

"https://www.runoob.com/","菜鸟教程","多种程序语言工具学习",
"linux.vbird.org","◆鳥哥的Linux私房菜","历史悠久的Linux入门教程",
"www.study-area.org",'◆台湾-酷！學園',"",
"https://www.w3schools.com","Online web tutorials","英文版在线教程",
"https://www.w3schools.com/css/css_examples.asp","W3Schools CSS Examples","",
"https://www.w3schools.com/cssref/index.php","css reference","css语法参考",
"https://www.w3schools.com/icons/icons_reference.asp","Icons from Font","Awesome, Bootstrap and Google",
"https://www.w3schools.com/css/css_templates.asp","css templates","css模版",
"https://fct.co/css-templates/","Free css templates","免费的css模版",
"https://www.w3schools.com/css/css_website.asp","css website","",
"https://www.w3schools.com/spaces/index.php","W3Schools Spaces","",
"www.eet-china.com","电子工程专辑","",
"www.icpcw.com","电脑报","",
"","",""
);

Favorite8=new Array(
"网盘搜索",

"cn.epubee.com/","在线电子书转换器","",
"https://www.jiumodiary.com","鸠摩搜书","中文电子书聚合搜索引擎",
"https://pan.qianfan.app","千帆搜索","",
"https://www.upyunso.com","UP云搜","",
"https://www.gutenberg.org/","Project Gutenberg","",
"","",""
);

Favorite8=new Array(
"视频下载",

"https://yt1d.com/zh-tw","YouTube視頻下載器","",
"https://snapany.com/zh/bilibili","哔哩哔哩视频下载","",
"","",""
);


