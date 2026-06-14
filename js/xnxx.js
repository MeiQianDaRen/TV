

// 视频网站解析规则配置
var rule = {
    title: "xvideos",
    host: "https://www.xnxx.com",
    url: "/fyfilter",
    filterable: 1,
    headers: {
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36 MicroMessenger/7.0.9.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat"
    },
    filter_url: "{{fl.class}}{{fl.by}}{{fl.pd}}{{fl.year}}{{fl.month}}{{fl.px}}fypage",
    filter: {
        "1": [
            {
                "key": "class",
                "name": "类别",
                "value": [
                    {"n": "选择", "v": "abc"},
                    {"n": "全部", "v": ""}
                ]
            },
            {
                "key": "year",
                "name": "年份",
                "value": [
                    {"n": "选择", "v": ""},
                    {"n": "默认", "v": ""},
                    {"n": "2026", "v": "best/2026-"},
                    {"n": "2025", "v": "best/2025-"},
                    {"n": "2024", "v": "best/2024-"},
                    {"n": "2023", "v": "best/2023-"},
                    {"n": "2022", "v": "best/2022-"},
                    {"n": "2021", "v": "best/2021-"},
                    {"n": "2020", "v": "best/2020-"},
                    {"n": "2019", "v": "best/2019-"},
                    {"n": "2018", "v": "best/2018-"},
                    {"n": "2017", "v": "best/2017-"},
                    {"n": "2016", "v": "best/2016-"},
                    {"n": "2015", "v": "best/2015-"},
                    {"n": "2014", "v": "best/2014-"},
                    {"n": "2013", "v": "best/2013-"},
                    {"n": "2012", "v": "best/2012-"},
                    {"n": "2011", "v": "best/2011-"},
                    {"n": "2010", "v": "best/2010-"}
                ]
            },
            {
                "key": "month",
                "name": "月份",
                "value": [
                    {"n": "全部", "v": ""},
                    {"n": "1月", "v": "01/"},
                    {"n": "2月", "v": "02/"},
                    {"n": "3月", "v": "03/"},
                    {"n": "4月", "v": "04/"},
                    {"n": "5月", "v": "05/"},
                    {"n": "6月", "v": "06/"},
                    {"n": "7月", "v": "07/"},
                    {"n": "8月", "v": "08/"},
                    {"n": "9月", "v": "09/"},
                    {"n": "10月", "v": "10/"},
                    {"n": "11月", "v": "11/"},
                    {"n": "12月", "v": "12/"}
                ]
            }
        ],
        "2": [
            {
                "key": "class",
                "name": "类别",
                "value": [
                    {"n": "选择", "v": "abc"},
                    {"n": "全部", "v": "c/"}
                ]
            },
            {
                "key": "pd",
                "name": "分类",
                "value": [
                    {"n": "全部", "v": ""},
                    {"n": "成熟", "v": "Mature-38/"},
                    {"n": "出版", "v": "Cuckold-237/"},
                    {"n": "调教", "v": "Femdom-235/"},
                    {"n": "家庭", "v": "Fucked_Up_Family-81/"},
                    {"n": "大鸟", "v": "Big_Cock-34/"},
                    {"n": "大妞", "v": "Big_Tits-23/"},
                    {"n": "大臀", "v": "Big_Ass-24/"},
                    {"n": "口交", "v": "Blowjob-15/"},
                    {"n": "骚妈", "v": "Milf-19/"},
                    {"n": "美臀", "v": "Ass-14/"},
                    {"n": "女同", "v": "Lesbian-26/"},
                    {"n": "喷出", "v": "Squirting-56/"},
                    {"n": "少女", "v": "Teen-13/"},
                    {"n": "射精", "v": "Cumshot-18/"},
                    {"n": "摄像头", "v": "Cam_Porn-58/"},
                    {"n": "丝袜", "v": "Stockings-28/"},
                    {"n": "涂油", "v": "Oiled-22/"},
                    {"n": "内衣", "v": "Lingerie-83/"},
                    {"n": "亚洲", "v": "Asian_Woman-32/"},
                    {"n": "熟女", "v": "Amateur-65/"},
                    {"n": "异族", "v": "Interracial-27/"},
                    {"n": "中欧", "v": "Creampie-40/"},
                    {"n": "自慰", "v": "Solo_and_Masturbation-33/"},
                    {"n": "肛交", "v": "ASMR-229/"},
                     {"n": "AI", "v": "AI-239/"}
                ]
            },
            {
                "key": "by",
                "name": "排序",
                "value": [
                    {"n": "默认", "v": ""},
                    {"n": "时间", "v": "s:uploaddate/"},
                    {"n": "评分", "v": "s:rating/"},
                    {"n": "长度", "v": "s:length/"},
                    {"n": "热度", "v": "s:views/"}
                ]
            }
        ],
        "3": [
            {
                "key": "class",
                "name": "类别",
                "value": [
                    {"n": "选择", "v": "abc"},
                    {"n": "全部", "v": "?k="}
                ]
            },
            {
                "key": "pd",
                "name": "搜索",
                "value": [
                    {"n": "3D", "v": "3D"},
                    {"n": "动画", "v": "动画"},
                    {"n": "国产", "v": "国产"},
                    {"n": "里番", "v": "里番"},
                    {"n": "大胸", "v": "大胸"},
                    {"n": "内射", "v": "内射"},
                    {"n": "日本", "v": "日本"},
                    {"n": "韩国", "v": "韩国"},
                    {"n": "中国", "v": "中国"},
                    {"n": "中國", "v": "中國"},
                    {"n": "偷拍", "v": "偷拍"},
                    {"n": "足交", "v": "足交"},
                    {"n": "cospace", "v": "cospace"},
                    {"n": "无内", "v": "无内"},
                    {"n": "好奇", "v": "curious+wife+no+panties"},
                    {"n": "乱来", "v": "乱来"},
                    {"n": "姐妹", "v": "姐妹"},
                    {"n": "老师", "v": "老师"},
                    {"n": "SPA", "v": "SPA"},
                    {"n": "喷油", "v": "喷油"},
                    {"n": "教学", "v": "教学"},
                    {"n": "野外", "v": "野外"},
                    {"n": "野外+户外", "v": "野外+户外"},
                    {"n": "后入", "v": "后入"},
                    {"n": "美女", "v": "美女"},
                    {"n": "香港", "v": "香港"},
                    {"n": "人妻", "v": "人妻"},
                     {"n": "Movie", "v": "movie"},
                    {"n": "日无码", "v": "日本無碼成人电影"},
                    {"n": "sakiplay", "v": "sakiplay"}
                ]
            },
            {
                "key": "px",
                "name": "排序",
                "value": [
                    {"n": "默认", "v": "#sort=relevance#p="},
                    {"n": "时间", "v": "#sort=uploaddate#p="},
                    {"n": "评分", "v": "#sort=rating#p="},
                    {"n": "长度", "v": "#sort=length#p="},
                    {"n": "热度", "v": "#sort=views#p="},
                    {"n": "随机", "v": "#sort=random#p="}
                ]
            }
        ],
        "4": [
            {
                "key": "class",
                "name": "类别",
                "value": [
                    {"n": "选择", "v": "abc"},
                    {"n": "全部", "v": ""}
                ]
            },
            {
                "key": "year",
                "name": "年份",
                "value": [
                    {"n": "全部", "v": ""},
                    {"n": "最新", "v": "new"}
                ]
            },
            {
                "key": "month",
                "name": "月份",
                "value": [
                    {"n": "全部", "v": ""}
                ]
            }
        ]
    },
    filter_def: {
        1: {cateId: "1", class: "abc"},
        2: {cateId: "2", class: "abc"},
        3: {cateId: "3", class: "abc", px: "px"},
        4: {cateId: "4", class: "abc"}
    },
    searchUrl: "#p=",
    searchable: 0,
    quickSearch: 0,
    timeout: 5000,
    play_parse: false,
    class_name: " & & & ",
    class_url: "1&2&3&4",
    limit: 28,
lazy:``,
    double: true,
    一级: `js:
        var items=[];
        pdfh=jsp.pdfh;
        pdfa=jsp.pdfa;
        pd=jsp.pd;
        var html=request(input);
        var tabs=pdfa(html,'.video-listing');
        if (tabs.length > 0) {
            tabs.forEach(function(it){
                var pz=pdfh(it,'.title a&&title');
                pz = pz.replace('https://','').replace('.','').replace('/','');
                var img=pd(it,'.thumb img&&data-src');
                img = img.replace("thumbs169/","thumbs169lll/")
                        .replace("thumbs169l/","thumbs169lll/")
                        .replace("thumbs169ll/","thumbs169lll/")
                        .replace("THUMBNUM","10");
                var ur=pd(it,'.thumb a');
                ur = ur.split("/")[1];
                ur = ur.replace('video.','/embedframe/');
                var dec = pd(it,'.duration&&Text');
                items.push({
                    desc:dec,
                    title:pz,
                    pic_url:img,
                    url:ur
                })
            })
        } else {
            tabs=pdfa(html,'.mozaique&&.frame-block');
            tabs.forEach(function(it){
                var pz=pdfh(it,'.title a&&Text');
                pz = pz.replace('https://','').replace('.','').replace('/','');
                var img=pd(it,'.thumb a&&img&&data-src');
                img = img.replace("thumbs169/","thumbs169lll/")
                        .replace("thumbs169l/","thumbs169lll/")
                        .replace("thumbs169ll/","thumbs169lll/")
                        .replace("THUMBNUM","10");
                var ur=pd(it,'.thumb&&a&&href');
                //ur = ur.split("/")[1];
                //ur = ur.replace('video.','/embedframe/');
                var dec = pd(it,'.duration&&Text');
                items.push({
                    desc:dec,
                    title:pz,
                    pic_url:img,
                    url:ur
                })
            })
        }
        setResult(items);`,
    二级:'*',
    搜索: ""
}
