var puzzleID=1;
var puzzle = { "rows" : [
  ["प्र", "व", "च", "न", "भ", "क्ति", "_" , "स", "त", "_", "_", "आ", "क", "स्मि", "क", "_", "_", "म", "_", "का"],
  ["भा", "_", "क", "_", "य", "_", "सो", "मा", "_",  "बो", "_", "हा", "र", "_", "व", "न", "स्प", "ति", "का", "य"],
  ["व", "न", "वा", "स", "_", "म", "_", "स", "मा", "धि", "म", "र", "ण", "_", "ला", "_", "_", "_", "_", "क्ले"],
  ["ना", "म", "_", "_", "ज", "न", "क", "_", "_", "दु", "_", "क", "_", "म", "हा", "व्र", "त", "_", "दो", "ष" ],
  ["_", "स्का", "_", "म", "य", "_", "_", "श", "_", "र्ल",  "_",  "_", "बा", "द", "र",  "_", "_", "_", "_", "_"],
  ["व", "र", "_",  "_", "मा", "या", "चा", "र", "_", "भ", "द्र", "बा", "हु",  "_",  "_",  "_",  "_",  "_",  "_", "दा"],
  ["र्ध", "_", "मं", "ग", "ला", "च", "र", "ण", "_", "_", "व्या", "_", "ब", "क", "री", "_", "_", "इ", "शा", "न"],
  ["मा", "_", "_", "_", "_", "क", "ण", "_", "बा", "_", "नु", "_", "ली", "_", "_", "न", "_", "त", "_", "_"],
  ["न", "मि", "ना", "थ", "_", "_", "_", "अ", "ली", "_", "यो", "_", "_", "वि", "ष्णु", "कु", "मा", "र", "_", "स"],
  ["_", "थ्या", "_", "_", "_", "_", "_", "ने", "_", "सा", "ग", "र", "_", "भी", "_", "ल", "_", "नि", "य", "म"],
  ["त", "त्व", "_", "_", "_", "गि", "_", "कां", "_", "_", "_", "त्न", "_", "ष", "ठ", "_", "_", "गो", "_", "य"],
  ["प", "_", "_", "उ", "_", "र", "_", "त", "त्वा", "र्थ", "सू", "त्र", "_", "ण", "_", "गं", "धो", "द", "क", "_"],
  ["_", "_", "_", "पा", "र्श्व", "ना", "थ", "_", "_", "_", "_", "य", "म", "_", "_", "ध", "_", "_", "षा", "_"],
  ["_", "अ", "यो", "ध्या", "_", "र", "_", "_", "_", "वि", "_", "_", "हं", "_", "ब", "कु", "श", "_", "य", "_"],
  ["_", "भ", "_", "य", "क्ष", "_", "_", "_", "_", "दे", "श", "व्र", "त", "_", "_", "टी", "_", "क", "_", "अ"],
  ["अ", "क्ष", "य", "_", "मा", "_", "क्षी", "ण", "मो", "ह", "_", "_", "_", "_", "के", "_", "क", "ल्प", "वृ", "क्ष"],
  ["श", "_", "_", "_", "_", "_", "र", "_", "ह", "_", "अ", "_", "लं", "के", "श", "_", "_", "का", "_", "य"],
  ["र", "त्न", "प्र", "भा", "_", "ना", "सा", "_", "नी", "लां", "ज", "ना", "_", "व", "_", "स", "_", "ल", "_", "अ"],
  ["ण", "_", "_", "मं", "_", "_", "ग", "_", "य", "_", "_", "रा", "जु", "ल", "_", "म", "_", "_", "_", "नं"],
  ["_", "_", "कुं", "ड", "ल", "पु", "र", "_", "_", "_", "का", "य", "_", "ज्ञा", "ना", "व", "र", "णी", "_", "त"],
  ["_", "से", "_", "ल", "_", "रा", "_", "_", "सा", "धा", "र", "ण", "_", "न", "_", "स", "_", "_", "_", "_"],
  ["_", "म", "_", "_", "_", "ण", "मो", "का", "र", "_", "ण", "_", "_", "_", "_", "र", "_", "_", "_", "ना"],
  ["ख", "र", "दू", "ष", "ण", "_", "ह", "_", "_", "_", "_", "प", "_", "_", "गु", "ण", "स्था", "न", "_", "स्ति"],
  ["ड", "_", "रा", "_", "_", "_", "_", "_", "वी", "र्या", "न्त", "रा", "य", "_", "_", "_", "_", "र", "म्य", "क"],
  ["गा", "_", "न्दू", "_", "_", "य", "था", "ख्या", "त", "_", "_", "व", "_", "मा", "र", "णां", "ति", "क", "_", "_"],
  ["स", "म", "र", "म्भ", "_", "शो", "_", "_", "रा", "_", "आ", "र्त", "ध्या", "न", "_", "_", "_", "_", "क", "_"],
  ["न", "_", "_", "_", "_", "ध", "_", "रा", "ग", "_", "_", "न", "_", "तुं", "_", "_", "_", "चे", "ल", "ना"],
  ["_", "_", "व्य", "व", "हा", "र", "_", "म", "_", "रू", "द्र", "_", "_", "ग", "ज", "पं", "था", "_", "श", "_"]
]};

var clues = {
  1 : {across:"सोलह-कारण भावना में से एक भावना (6)", down:"सम्यक्त्व का एक अंग (4)"},
  2 : {down:"एक तीर्थंकर का चिन्ह (3)"},
  3 : {down:"डर (2)"},
  4 : {across:"द्र्व्य का लक्षण (2)", down:"जिन धर्मविशेषों के द्वारा नाना जीव और उनकी नाना प्रकार की जातियां जानी जाती है (3)"},
  5 : {across:"सात भय में से एक भय (4)", down:"मुनि के शरीर से पुतला निकलता है वो इस शरीर का प्रकार होता है (4)"},
  6 : {down:"एक लब्धी (3)"},
  7 : {down:"देवों के मानसिक आहार होता है, मनुष्य और तिर्यंच के _______ (आहार का प्रकार) (5)"},
  8 : {down:"ज्ञान का एक प्रकार (2)"},
  9 : {down:"मुनी द्वारा तप के लिये अपने शरीर को जान-बूझकर कष्ट देना (4)"},
  10 : {across:"एक सती जिसके प्रभाव से सांप फूल की माला बन गयी (2)"},
  11 : {down:"एक भावना (5)"},
  12 : {across:"माला, पराजय (2)"},
  13 : {across:"षठकाय जीवों में से सबसे ज्यादा ये जीव पाए जाते हैं (6)"},
  14 : {across:"रामचंद्र जी को १४ वर्ष के लिये मिला था (4)"},
  15 : {down:"प्रणाम (4)"},
  16 : {down:"___ सहित जीव = संज्ञी जीव (2)"},
  17 : {across:"मरण निकट जानकर एक-एक करके चीजों को छोडते जाना और म्रुत्यु को अंगीकार करना (6)"},
  18 : {across:"एक निक्षेप, कर्म का एक भेद (2)"},
  19 : {across:"सीता के पिता (3)", down:"प्रत्येक पूजा के बाद पढी जाती है (4)"},
  20 : {across:"सकल व्रत (4)"},
  21 : {across:"अरिहंत भगवान में 18 ____ नहीं पाए जाते (2)"},
  22 : {across:"रावण के ससुर, मंदोदरी के पिता (2)"},
  23 : {down:"सहारा (3)"},
  24 : {across:"वे जीव जिनके शरीर को रोका जा सके, काटा जा सके (3)", down:"आदिनाथ भगवान के पहले ये मोक्ष गए थे (4)"},
  25 : {across:"दुल्हा (2)", down:"अवधीज्ञान का एक प्रकार, एक तीर्थंकर का बाल्य-काल का नाम (4)"},
  26 : {across:"मन में कुछ, वचन में कुछ और और काया से कुछ और व्यक्त करना (4)"},
  27 : {down:"मांगने वाला (3)"},
  28 : {down:"एक रिद्धी (3)"},
  29 : {across:"अंतिम श्रुत केवली"},
  30 : {down:"एक अनुयोग (5)"},
  31 : {down:"षठ आवश्यक में से एक (2)"},
  32 : {across:"कोई भी शास्त्र लिखने या पढने के पहले किया जाता है (6)"},
  33 : {across:"कुंथुनाथ भगवान का चिन्ह (3)"},
  34 : {across:"सोलह स्वर्ग में से दूसरा (3)", down:"पहली बार निगोद में से निकलनें के बाद फ़िर निगोद (6)"},
  35 : {across:"छोटा टुकडा (2)"},
  36 : {down:"एक मुनी जिन्होने रावण का मान भंग किया था (2)"},
  37 : {down:"पांच पांडव में से एक (3)"},
  38 : {across:"एक तीर्थंकर (4)"},
  39 : {down:"सबसे बडा पाप, मोह"},
  40 : {across:"सखी (2)", down:"जैन आगम इससे चिन्हित होता है (4)"},
  41 : {across:"वे मुनी जिन्होने 700 मुनियों का उपसर्ग दूर किया था (5)", down:"रावण का भाइ (4)"},
  42 : {down:"व्यवहार काल की इकाई (3)"},
  43 : {across:"दस कोडाकोडी पल्य बराबर (3)"},
  44 : {down:"सम्यक दर्शन-ज्ञान-चारित्र (4)"},
  45 : {across:"नियत समय तक के लिये ली गई प्रतिज्ञा (3)"},
  46 : {across:"वस्तु (द्रव्य) का भाव (2)", down:"कर्मों की निर्जरा इससे होती है (2)"},
  47 : {down:"नेमिनाथ भगवान की निर्वाण भूमि (4)"},
  48 : {across:"पांच स्थावर जीव + त्रस = __काय जीव (2)"},
  49 : {down:"११ अंग १४ पूर्व के ज्ञाता एक परमेष्ठी (4)"},
  50 : {across:"एक शास्त्र जिसमें सात तत्वों का निरूपण किया है (5)"},
  51 : {across:"अरिहंत प्रतिमा से स्पर्शित जल (4)", down:"सामान्य केवली का समवसरण नहीं होता ____ होती है (4)"},
  52 : {down:"जो आत्मा को कसे, दुख दे (3)"},
  53 : {across:"एक तीर्थंकर जिनकी रक्षा धरणेंद्र-पद्मावती ने की थी (4)"},
  54 : {across:"जीवन पर्यंत के लिये ली गई प्रतिज्ञा (2)"},
  55 : {down:"विद्वान, ज्ञानवान (3)"},
  56 : {across:"तीर्थंकर की जन्म नगरी (अक्रतिम) (3)", down:"नहीं खाने योग्य (3)"},
  57 : {down:"जम्बू द्वीप के मध्य का क्षेत्र (3)"},
  58 : {across:"एक प्रकार के मुनी (3)"},
  59 : {across:"भवनवासी देवों में एक प्रकार (2)"},
  60 : {down:"___ वीरस्य भूषणम (2)"},
  61 : {across:"आंशिक व्रत (4)"},
  62 : {down:"20 कोडा कोडी सागर का काल (4)"},
  63 : {down:"जीव राशि _ _ _ - _ _ _ है (3,3)"},
  64 : {across:"जिसका कभी नाश ना हो (3)", down:"मरती विरियां जीव को कोइ न राखनहार यहां कौनसी भवना भाई है (4)"},
  65 : {across:"नष्ट हॊ गया है मोह्नीय कर्म जिनका, एक गुणस्थान (4)", down:"मध्य लोक का पांचवां समुद्र, यहां के जल से तीर्थंकर का जन्माभिषेक होता है (5)"},
  66 : {down:"कर्म की यह प्रक्रति संसार का कारण है (4)"},
  67 : {down:"मुनिराज के 28 मूलगुणों मे से एक ___लोंच (2)"},
  68 : {across:"भोग भूमि में पाए जाने वाले वृक्ष (4)"},
  69 : {down:"इस शब्द का गलत अर्थ बताने के लिये राजा वसु सिंघासन सहित सातवें नरक गया था (2)"},
  70 : {across:"दशानन (3)"},
  71 : {down:"ज्ञानावर्णी कर्म के नाश से प्रकट होता है (5)"},
  72 : {across:"एक नरक की धरती का प्रकार (4)"},
  73 : {down:"अष्ट प्रातिहार्यों में से एक, सीता का भाई (4)"},
  74 : {across:"अरिहंत भगवान की दृष्टी का जिस जगह केन्द्रित होना (2)"},
  75 : {across:"इस देवी का नृत्य देखते हुए रिषभदेव को वैराग्य हुआ था (4)"},
  76 : {down:"लक्षमण व श्रीकृष्ण इस पदवी के धारी थे (4)"},
  77 : {down:"तीर्थंकर के देवकृत अतिशय में से एक (6)"},
  78 : {across:"नेमिनाथ के साथ इनका विवाह तय हुआ था (3)"},
  79 : {across:"बालक वर्धमान की जन्म भूमि (5)"},
  80 : {down:"महान पुरुषों की जीवनी (3)"},
  81 : {across:"एक मार्गणा, शरीर (2)", down:"निमित्त और नैमैत्तिक में ___-कार्य सम्बन्ध है (3)"},
  82 : {across:"कर्म का एक प्रकार (5)"},
  83 : {down:"नरक में भीषण दुख देने वाले वृक्ष (3)"},
  84 : {across:"इस नाम कर्म के उदय से एक शरीर के अनेक मालिक होते हैं (4)", down:"निष्कर्ष (2)"},
  85 : {across:"महामंत्र (4)"},
  86 : {down:"मित्थ्यात्व (2)"},
  87 : {down:"वस्तू को देख-परखकर ही नतीजे पर पहंचना, बिना देखी वस्तू को नहीं मानना :- ____वाद (3)"},
  88 : {across:"रावण का भानजा, जिसका वध लक्ष्मण के द्वारा हुआ था, वही सीता-हरण का कारण बना (5)", down:"अरिहंत परमेष्ठी के खडे रहने की मुद्रा (5)"},
  89 : {down:"एसे भव्य जीव जो कभी मोक्ष नहीं जाएगे = ____भव्य (5)"},
  90 : {down:"जीवन चक्र (5)"},
  91 : {across:"मोह और योग से संसारी जीवों में दर्शन व चारित्र गुण मे हीनाधिकता (4)"},
  92 : {down:"श्रीकृष्ण, लक्षमण, श्रेणिक के जीव अभी इस गति में हैं (3)"},
  93 : {across:"इस कर्म का नाश = अनन्त बल (5)", down:"राग-द्वेष से रहित (4)"},
  94 : {across:"जम्बू द्वीप में एक भोग भूमि (3)"},
  95 : {across:"मोह कर्म के उपशम या नाश से ______ चारित्र प्रकट होता है (5)", down:"राजा श्रेणिक ने इन मुनी के गले में मरा हुआ सर्प डाला था (4)"},
  96 : {across:"एक प्रकार का समुदघात (5)", down:"भक्त्तामर के रचयिता ____ आचार्य़ (4)"},
  97 : {across:"कार्य करने से पहले मन में संकल्प करना (4)"},
  98 : {across:"एक दुखरूप ध्यान (4)"},
  99 : {down:"अष्ट मंगल द्रव्य में से एक (3)"},
  100 : {across:"पर वस्तु को अच्छा जानकर उसमें इष्ट भाव (2)", down:"राजा रघू के पौत्र (2)"},
  101 : {across:"राजा श्रेणिक की पत्नी (3)"},
  102 : {across:"नय का एक प्रकार (4)"},
  103 : {across:"विशिष्ठ पुरुषों में से एक पद (2)"},
  104 : {across:"एक सिद्धक्षेत्र जहां से सारे बलभद्र मोक्ष गए (4)"}
}
