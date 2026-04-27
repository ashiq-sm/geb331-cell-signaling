(function (global) {
    'use strict';

    var QUOTES_DB = [
        {
            id: 'q1',
            category: 'quran',
            quote_en: 'So remember Me; I will remember you. And be grateful to Me and do not deny Me.',
            quote_bn: 'তোমরা আমাকে স্মরণ কর, আমিও তোমাদের স্মরণ করব। আর আমার প্রতি কৃতজ্ঞ হও এবং অকৃতজ্ঞ হয়ো না।',
            reference: 'Quran 2:152'
        },
        {
            id: 'q2',
            category: 'quran',
            quote_en: 'Indeed, with hardship comes ease.',
            quote_bn: 'নিশ্চয়ই কষ্টের সাথেই রয়েছে স্বস্তি।',
            reference: 'Quran 94:6'
        },
        {
            id: 'q3',
            category: 'quran',
            quote_en: 'And whoever relies upon Allah, then He is sufficient for him.',
            quote_bn: 'যে আল্লাহর উপর ভরসা করে, তাঁর জন্য আল্লাহই যথেষ্ট।',
            reference: 'Quran 65:3'
        },
        {
            id: 'q4',
            category: 'quran',
            quote_en: 'Allah does not burden a soul beyond what it can bear.',
            quote_bn: 'আল্লাহ কোনো প্রাণকে তার সাধ্যের বাইরে দায়িত্ব দেন না।',
            reference: 'Quran 2:286'
        },
        {
            id: 'q5',
            category: 'quran',
            quote_en: 'My mercy encompasses all things.',
            quote_bn: 'আমার রহমত সবকিছুকে পরিব্যাপ্ত করে আছে।',
            reference: 'Quran 7:156'
        },
        {
            id: 'q6',
            category: 'hadith',
            quote_en: 'Actions are judged by intentions.',
            quote_bn: 'কর্মফল নির্ধারিত হয় নিয়তের উপর।',
            reference: 'Sahih al-Bukhari 1; Sahih Muslim 1907'
        },
        {
            id: 'q7',
            category: 'hadith',
            quote_en: 'The best of people are those most beneficial to people.',
            quote_bn: 'মানুষের মধ্যে উত্তম তারা, যারা মানুষের বেশি উপকার করে।',
            reference: 'al-Mu\'jam al-Awsat 6192 (meaning widely cited)'
        },
        {
            id: 'q8',
            category: 'hadith',
            quote_en: 'Whoever does not thank people has not thanked Allah.',
            quote_bn: 'যে মানুষের কৃতজ্ঞতা প্রকাশ করে না, সে আল্লাহর কৃতজ্ঞতাও করে না।',
            reference: 'Sunan Abi Dawud 4811; Jami\' at-Tirmidhi 1954'
        },
        {
            id: 'q9',
            category: 'hadith',
            quote_en: 'A strong believer is better and more beloved to Allah than a weak believer, while there is good in both.',
            quote_bn: 'শক্তিশালী মুমিন দুর্বল মুমিনের তুলনায় উত্তম ও আল্লাহর কাছে অধিক প্রিয়, তবে উভয়ের মধ্যেই কল্যাণ আছে।',
            reference: 'Sahih Muslim 2664'
        },
        {
            id: 'q10',
            category: 'hadith',
            quote_en: 'Make things easy and do not make things difficult.',
            quote_bn: 'সহজ করো, কঠিন করো না।',
            reference: 'Sahih al-Bukhari 69; Sahih Muslim 1734'
        },
        {
            id: 'q11',
            category: 'proverb',
            quote_en: 'Patience is bitter, but its fruit is sweet.',
            quote_bn: 'ধৈর্য তিক্ত, কিন্তু তার ফল মিষ্টি।',
            reference: 'Arabic proverb'
        },
        {
            id: 'q12',
            category: 'proverb',
            quote_en: 'Knowledge is a light; action is its proof.',
            quote_bn: 'জ্ঞান আলো, আর আমল তার প্রমাণ।',
            reference: 'Islamic wisdom saying'
        },
        {
            id: 'q13',
            category: 'proverb',
            quote_en: 'A little done regularly is better than a lot done once.',
            quote_bn: 'অল্প হলেও নিয়মিত কাজ, একবারে অনেক কাজের চেয়ে উত্তম।',
            reference: 'Study proverb'
        },
        {
            id: 'q14',
            category: 'proverb',
            quote_en: 'He who has a why can bear almost any how.',
            quote_bn: 'যার কেন জানা আছে, সে প্রায় যেকোনো কিভাবে সহ্য করতে পারে।',
            reference: 'Wisdom proverb'
        },
        {
            id: 'q15',
            category: 'proverb',
            quote_en: 'Small steps every day build great journeys.',
            quote_bn: 'প্রতিদিনের ছোট ছোট পদক্ষেপই বড় যাত্রা গড়ে।',
            reference: 'Motivational proverb'
        },
        {
            id: 'q16',
            category: 'quran',
            quote_en: 'Truly, in Allah’s remembrance hearts find peace.',
            quote_bn: 'নিশ্চয়ই আল্লাহর স্মরণেই অন্তরসমূহ প্রশান্তি লাভ করে।',
            reference: 'Quran 13:28'
        },
        {
            id: 'q17',
            category: 'hadith',
            quote_en: 'Take advantage of five before five: youth before old age, health before illness, wealth before poverty, leisure before busyness, and life before death.',
            quote_bn: 'পাঁচটি জিনিসের আগে পাঁচটি জিনিসকে কাজে লাগাও: বার্ধক্যের আগে যৌবনকে, অসুস্থতার আগে সুস্থতাকে, দারিদ্র্যের আগে সম্পদকে, ব্যস্ততার আগে অবসরকে এবং মৃত্যুর আগে জীবনকে।',
            reference: 'Hadith (Al-Hakim)'
        },
        {
            id: 'q18',
            category: 'quran',
            quote_en: 'So when you have finished [your duties], devote yourself [to worship], and turn eagerly to your Lord.',
            quote_bn: 'অতঃপর যখন তুমি (কাজ থেকে) অবসর পাও, তখন ইবাদতে কঠোর পরিশ্রম করো এবং তোমার রবের প্রতিই মনোযোগ দাও।',
            reference: 'Quran 94:7-8'
        },
        {
            id: 'q19',
            category: 'proverb',
            quote_en: 'Help comes effortlessly through labor; patience is bestowed during hardship.',
            quote_bn: 'শ্রম অনুযায়ী সাহায্য, বিপদ অনুযায়ী ধৈর্য নাযিল হয়ে থাকে।',
            reference: 'Islamic Proverb'
        }
    ];

    var EYE_TIPS_DB = [
        "👀 Take a short walk. Return mind to the Lord, seek help!",
        "👀 Rest your body, mind, and spirit—small breaks recharge big dreams!",
        "👀 Lean back at your seat and relax. (Allah does not burden a soul beyond its capacity)",
        "👀 Tightly close your eyes. চোখের যত্ন নাও, পৃথিবীটা দেখার জন্য তো চাই!",
        "👀 Roll eyes to each side to relieve eye strain.",
        "👀 Rotate eyes clockwise to relax your eye muscles.",
        "👀 20-20-20 Rule: Look 20ft away for 20s every 20min.",
        "👀 Rotate eyes counterclockwise to relax your eye muscles.",
        "👀 Blink your eyes frequently to keep them moist.",
        "👀 Focus on a distant point. Refresh your vision.",
        "💧 Have some water. Hydration is key to eye health!"
    ];

    function randIndex(max) {
        return Math.floor(Math.random() * max);
    }

    function pickRandom(list) {
        if (!Array.isArray(list) || !list.length) return null;
        return list[randIndex(list.length)];
    }

    function byCategory(category) {
        if (!category) return QUOTES_DB.slice();
        var key = String(category).toLowerCase();
        return QUOTES_DB.filter(function (item) {
            return String(item.category).toLowerCase() === key;
        });
    }

    function getRandomQuote(category) {
        return pickRandom(byCategory(category));
    }

    function getRandomQuotes(count, category) {
        var pool = byCategory(category);
        var n = Math.max(1, Math.min(Number(count) || 1, pool.length));
        var copy = pool.slice();
        var out = [];
        while (out.length < n && copy.length) {
            out.push(copy.splice(randIndex(copy.length), 1)[0]);
        }
        return out;
    }

    function getRandomEyeTip() {
        return pickRandom(EYE_TIPS_DB);
    }

    global.SM_QUOTES = {
        all: QUOTES_DB,
        eyeTips: EYE_TIPS_DB,
        byCategory: byCategory,
        getRandomQuote: getRandomQuote,
        getRandomQuotes: getRandomQuotes,
        getRandomEyeTip: getRandomEyeTip
    };
})(typeof window !== 'undefined' ? window : this);
