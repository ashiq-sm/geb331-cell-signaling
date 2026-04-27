(function (global) {
    'use strict';

    var DUAS_DB = [
        {
            id: 'd1',
            topic: 'knowledge',
            arabic: 'رَبِّ زِدْنِي عِلْمًا',
            english: 'My Lord, increase me in knowledge.',
            bengali: 'হে আমার রব, আমাকে জ্ঞানে বৃদ্ধি দান করুন।',
            reference: 'Quran 20:114'
        },
        {
            id: 'd2',
            topic: 'guidance',
            arabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
            english: 'Guide us to the straight path.',
            bengali: 'আমাদেরকে সরল পথ দেখান।',
            reference: 'Quran 1:6'
        },
        {
            id: 'd3',
            topic: 'steadfastness',
            arabic: 'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا',
            english: 'Our Lord, do not let our hearts deviate after You have guided us.',
            bengali: 'হে আমাদের রব, হেদায়াত দেওয়ার পর আমাদের অন্তরকে বক্র করবেন না।',
            reference: 'Quran 3:8'
        },
        {
            id: 'd4',
            topic: 'mercy',
            arabic: 'رَبِّ اغْفِرْ وَارْحَمْ وَأَنْتَ خَيْرُ الرَّاحِمِينَ',
            english: 'My Lord, forgive and have mercy; You are the best of the merciful.',
            bengali: 'হে আমার রব, ক্ষমা করুন ও দয়া করুন; আপনিই সর্বশ্রেষ্ঠ দয়ালু।',
            reference: 'Quran 23:118 (part)'
        },
        {
            id: 'd5',
            topic: 'ease',
            arabic: 'رَبِّ يَسِّرْ وَلَا تُعَسِّرْ',
            english: 'My Lord, make it easy and do not make it difficult.',
            bengali: 'হে আমার রব, সহজ করুন, কঠিন করবেন না।',
            reference: 'Prophetic supplication meaning'
        },
        {
            id: 'd6',
            topic: 'beneficial_knowledge',
            arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا',
            english: 'O Allah, I ask You for beneficial knowledge.',
            bengali: 'হে আল্লাহ, আমি আপনার কাছে উপকারী জ্ঞান প্রার্থনা করি।',
            reference: 'Sunan Ibn Majah 925 (part)'
        },
        {
            id: 'd7',
            topic: 'wellbeing',
            arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ',
            english: 'O Allah, I ask You for forgiveness and well-being in this world and the Hereafter.',
            bengali: 'হে আল্লাহ, আমি আপনার কাছে দুনিয়া ও আখিরাতে ক্ষমা ও নিরাপত্তা প্রার্থনা করছি।',
            reference: 'Sunan Abi Dawud 5074'
        },
        {
            id: 'd8',
            topic: 'gratitude',
            arabic: 'اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ',
            english: 'O Allah, help me remember You, thank You, and worship You well.',
            bengali: 'হে আল্লাহ, আপনাকে স্মরণ, কৃতজ্ঞতা এবং সুন্দর ইবাদত করতে আমাকে সাহায্য করুন।',
            reference: 'Sunan Abi Dawud 1522'
        },
        {
            id: 'd9',
            topic: 'forgiveness',
            arabic: 'رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ',
            english: 'Our Lord, we have wronged ourselves. If You do not forgive us and have mercy on us, we will be among the losers.',
            bengali: 'হে আমাদের রব, আমরা নিজেদের প্রতি জুলুম করেছি; আপনি ক্ষমা ও দয়া না করলে আমরা ক্ষতিগ্রস্তদের অন্তর্ভুক্ত হব।',
            reference: 'Quran 7:23'
        },
        {
            id: 'd10',
            topic: 'good_end',
            arabic: 'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَتَوَفَّنَا مُسْلِمِينَ',
            english: 'Our Lord, pour upon us patience and let us die as Muslims.',
            bengali: 'হে আমাদের রব, আমাদের উপর ধৈর্য বর্ষণ করুন এবং মুসলিম অবস্থায় মৃত্যু দিন।',
            reference: 'Quran 7:126'
        },
        {
            id: 'd11',
            topic: 'parents',
            arabic: 'رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',
            english: 'My Lord, have mercy upon them (my parents) as they raised me when I was small.',
            bengali: 'হে আমার রব, আমার পিতা-মাতার প্রতি দয়া করুন যেমন তারা ছোটবেলায় আমাকে লালন করেছেন।',
            reference: 'Quran 17:24'
        },
        {
            id: 'd12',
            topic: 'guidance_mercy',
            arabic: 'رَبَّنَا آتِنَا مِنْ لَدُنْكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا',
            english: 'Our Lord, grant us from Yourself mercy and prepare for us from our affair right guidance.',
            bengali: 'হে আমাদের রব, আপনার পক্ষ থেকে আমাদের রহমত দান করুন এবং আমাদের জন্য আমাদের কাজ সঠিকভাবে পরিচালনার ব্যবস্থা করুন।',
            reference: 'Quran 18:10'
        },
        {
            id: 'd13',
            topic: 'dunya_akhira',
            arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
            english: 'Our Lord, grant us good in this world and good in the Hereafter, and protect us from the punishment of the Fire.',
            bengali: 'হে আমাদের রব, আমাদের দুনিয়াতে কল্যাণ দিন, আখিরাতে কল্যাণ দিন এবং জাহান্নামের শাস্তি থেকে রক্ষা করুন।',
            reference: 'Quran 2:201'
        },
        {
            id: 'd14',
            topic: 'family',
            arabic: 'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ',
            english: 'Our Lord, grant us from among our wives and offspring comfort to our eyes.',
            bengali: 'হে আমাদের রব, আমাদের স্ত্রী ও সন্তানদের আমাদের জন্য নয়নপ্রীতিকর করুন।',
            reference: 'Quran 25:74'
        },
        {
            id: 'd15',
            topic: 'heart_opening',
            arabic: 'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي',
            english: 'My Lord, expand for me my chest [with assurance] and ease for me my task.',
            bengali: 'হে আমার রব, আমার বক্ষ প্রশস্ত করে দিন এবং আমার কাজ সহজ করে দিন।',
            reference: 'Quran 20:25-26'
        },
        {
            id: 'd16',
            topic: 'protection_grief',
            arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ',
            english: 'O Allah, I seek refuge in You from worry and grief.',
            bengali: 'হে আল্লাহ, আমি আপনার কাছে দুশ্চিন্তা ও দুঃখ থেকে আশ্রয় প্রার্থনা করছি।',
            reference: 'Sahih Bukhari 6363'
        },
        {
            id: 'd17',
            topic: 'guidance_piety',
            arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى',
            english: 'O Allah, I ask You for guidance, piety, chastity, and self-sufficiency.',
            bengali: 'হে আল্লাহ, আমি আপনার কাছে হেদায়াত, তাকওয়া, পবিত্রতা ও সচ্ছলতা প্রার্থনা করছি।',
            reference: 'Sahih Muslim 2721'
        },
        {
            id: 'd18',
            topic: 'steadfastness_heart',
            arabic: 'يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ',
            english: 'O Turner of the hearts, keep my heart steadfast upon Your religion.',
            bengali: 'হে অন্তরসমূহের পরিবর্তনকারী, আমার অন্তরকে আপনার দ্বীনের ওপর অবিচল রাখুন।',
            reference: 'Sunan al-Tirmidhi 3522'
        },
        {
            id: 'd19',
            topic: 'purification',
            arabic: 'اللَّهُمَّ آتِ نَفْسِي تَقْوَاهَا وَزَكِّهَا أَنْتَ خَيْرُ مَنْ زَكَّاهَا',
            english: 'O Allah, grant my soul its piety and purify it; You are the best to purify it.',
            bengali: 'হে আল্লাহ, আমার নফসকে তাকওয়া দান করুন এবং একে পবিত্র করুন; আপনিই নফস পবিত্র করার জন্য শ্রেষ্ঠ।',
            reference: 'Sahih Muslim 2722'
        },
        {
            id: 'd20',
            topic: 'wisdom',
            arabic: 'رَبِّ هَبْ لِي حُكْمًا وَأَلْحِقْنِي بِالصَّالِحِينَ',
            english: 'My Lord, grant me wisdom and join me with the righteous.',
            bengali: 'হে আমার রব, আমাকে হিকমত (প্রজ্ঞা) দান করুন এবং আমাকে নেককারদের অন্তর্ভুক্ত করুন।',
            reference: 'Quran 26:83'
        }
    ];

    function randIndex(max) {
        return Math.floor(Math.random() * max);
    }

    function pickRandom(list) {
        if (!Array.isArray(list) || !list.length) return null;
        return list[randIndex(list.length)];
    }

    function byTopic(topic) {
        if (!topic) return DUAS_DB.slice();
        var key = String(topic).toLowerCase();
        return DUAS_DB.filter(function (item) {
            return String(item.topic).toLowerCase() === key;
        });
    }

    function getRandomDua(topic) {
        return pickRandom(byTopic(topic));
    }

    function getRandomDuas(count, topic) {
        var pool = byTopic(topic);
        var n = Math.max(1, Math.min(Number(count) || 1, pool.length));
        var copy = pool.slice();
        var out = [];
        while (out.length < n && copy.length) {
            out.push(copy.splice(randIndex(copy.length), 1)[0]);
        }
        return out;
    }

    var shuffledQueue = [];

    function getShuffledDua() {
        if (shuffledQueue.length === 0) {
            // Refill and reshuffle
            shuffledQueue = DUAS_DB.slice().sort(function() { return 0.5 - Math.random(); });
        }
        return shuffledQueue.pop();
    }

    global.SM_DUAS = {
        all: DUAS_DB,
        byTopic: byTopic,
        getRandomDua: getRandomDua,
        getRandomDuas: getRandomDuas,
        getShuffledDua: getShuffledDua
    };
})(typeof window !== 'undefined' ? window : this);
