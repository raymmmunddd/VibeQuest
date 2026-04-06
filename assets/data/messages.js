// ========== FORTUNE MESSAGES ==========

const FORTUNES = {
  romance: [
    { name: "The Topak Forecast", text: "Forecast: 50% lambing, 50% topak, so bring snacks and say sorry kasi kasalanan mo talaga." },
    { name: "The Mood Swing Warning", text: "Mood swings ahead, best response today: \"Yes baby, tama ka.\"" },
    { name: "The Phone Inspection Day", text: "Random security check detected, so prepare to open your gallery, chats, and following list." },
    { name: "The Food Peace Treaty", text: "Conflict detected, but the universe confirms McDo + fries = away cancelled." },
    { name: "The Picture Duty", text: "Prophecy says ikaw ang official photographer today, expected output: 300 pictures hanggang may pang \"IG story.\"" },
    { name: "The Random Lambing Event", text: "Unexpected lambing detected, cause unknown but accept the blessing immediately." },
    { name: "Heart Loading…", text: "Love sometimes appears when you're busy doing other things. Baka habang nagccram ka pa." },
    { name: "Soft Launch ng Feelings", text: "Someone might be slowly noticing you. Parang WiFi signal - mahina ngayon, pero lumalakas." },
    { name: "Love Adventure", text: "A random conversation today could turn into something unexpectedly nice." },
    { name: "Sweet Atmosphere", text: "Mukhang may romantic energy in the air today. Just enjoy the vibe." },
    { name: "Heart Alignment", text: "Minsan dalawang tao meet at the right moment. Baka today yun." },
    { name: "Cute Interaction", text: "A simple interaction today might leave a surprisingly good feeling." },
    { name: "Unexpected Sweetness", text: "Today might bring a small but sweet moment you'll remember later." },
    { name: "Warm Connection", text: "You might meet someone today na madaling ka-vibes." },
    { name: "Spark Moment", text: "Minsan isang simple moment lang ang kailangan for something new to begin." },
    { name: "The Laban o Bawi", text: "Baka pag nakakain na kayo dalawa, okay na kayo ulit. Gutom lang yan." },
    { name: "The OOTD Photographer", text: "A test of patience! You will be tasked to take 500 photos of your partner until your back hurts. \"Isa pa, 'yung candid!\"" },
    { name: "The Memory Test", text: "A sudden chill in the air! Check your calendar, mima, bawal ang lutang!" },
    { name: "Secret Glance", text: "Someone keeps looking your way lately. Lowkey crush vibes." },
    { name: "Rent-Free", text: "Your name might be living rent-free in someone's mind lately." },
    { name: "Hallway Feels", text: "May someone na masaya pag nakikita ka sa hallway." },
    { name: "Still Pending", text: "Someone might be waiting for the right moment to message you." },
    { name: "Secret Crush", text: "May secret admirer ka… hindi lang siya ready magpakilala yet." },
    { name: "In The Moment", text: "Someone smiled when you walked in. Oo, ikaw talaga yun." },
    { name: "Take Notice", text: "Someone actually hopes you notice them too." },
    { name: "Eye Contact", text: "That random eye contact earlier? Hmm… baka may meaning." },
    { name: "Vibe Check", text: "Someone enjoys your vibe more than you realize." },
  ],

  career: [
    { name: "The Absent Prof Prophecy", text: "Good news, ferson! Pagdating mo sa class, the universe reveals: walang klase today." },
    { name: "The Coffee Powered Career", text: "The cards reveal your success today will be 70% effort and 30% kape." },
    { name: "The Salary Day Blessing", text: "Sweldo has arrived, but the prophecy warns bills are already waiting." },
    { name: "The Deadline Survivor", text: "Mima, akala mo hindi aabot pero the universe says naipasa mo before 11:59 PM. Crammers stay winning." },
    { name: "The Thesis Warrior", text: "Pagod ka na, pero the cosmos sees your struggle. Malapit na ang defense victory arc mo." },
    { name: "The WiFi Dependent Student", text: "Your academic future today depends on stable internet. Sana malakas ang signal, mima." },
    { name: "The Group Leader by Default", text: "Plot twist, ikaw na naman ang naging leader sa group project. The universe trusts your \"ikaw na bahala\" energy." },
    { name: "The Surprise Quiz", text: "Pagpasok mo sa class, biglang sinabi ni prof: \"Take out 1/4 sheet.\" Stay calm, the stars are with you." },
    { name: "The Reviewer Hoarder", text: "You downloaded 10 reviewers, pero the cosmos confirms isa lang ang mabubuksan mo." },
    { name: "The AI Warrior", text: "Hindi mo alam ang sagot pero the universe gave you AI assistance. Just remember: edit mo muna bago ipasa kay prof." },
    { name: "Opportunity Window", text: "May chance today na pwede mong i-grab. Don't overthink it too much." },
    { name: "Right Timing", text: "Timing matters today. The right move at the right moment can change things." },
    { name: "Confidence Move", text: "Minsan kailangan lang ng konting lakas ng loob. Today might be that moment." },
    { name: "Leadership Energy", text: "People might naturally look to you today when decisions need to be made." },
    { name: "Focus Mode", text: "Clear focus today could help you finish something important." },
    { name: "Momentum Shift", text: "Something small today might suddenly move things forward." },
    { name: "Power Decision", text: "A decision you make today could shape your direction." },
    { name: "Bold Energy", text: "Showing initiative today might lead to something interesting." },
    { name: "Breakthrough Day", text: "Today might bring a moment where things suddenly make sense." },
    { name: "Next Chapter", text: "A new direction might quietly start forming today." },
    { name: "The Corporate Slave/Student", text: "Omsim, pagod ka na, pero the universe sees your hustle. Malapit na ang payoff (at ang sahod/grades)!" },
    { name: "The Promoted Ferson", text: "Pa-kape ka naman diyan! A major step up is coming. Slay mo 'yang bagong title mo, mima." },
    { name: "The No Syntax Error", text: "Nakshie, tumakbo ang code mo on the first try! Walang bugs, walang red marks, pure success." },
    { name: "The Pabida", text: "Mapapansin ang effort mo. Your bibo kid energy will finally pay off!" },
    { name: "The Approved Leave", text: "The universe is giving you the ultimate green light to rest." },
    { name: "The Raketera", text: "Sidelines are booming! Daming gigs na papasok, magiging bilyonaryang mima ka na." },
    { name: "The Sahod Reveal", text: "Parating na ang grasya! The cosmos is raining cash. Pero wag ubusin sa Shopee/TikTok shop agad, okay?" },
    { name: "The Smooth Defense", text: "Kung may presentation, panel, or pitch ka, the cosmos guarantees tatango-tango lang sila. Perfect score, ferson!" },
    { name: "The Bossing Energy", text: "Hindi ka na inuutusan, ikaw na ang mag-uutos. Step into your CEO era and own the room." },
    { name: "The Ako Na To", text: "Yung goal mo? Hindi ka na maghahabol, ito na ang lalapit sa'yo." },
    { name: "Step by Step", text: "Relax, you're figuring things out step by step." },
    { name: "Future Skill", text: "Something you're learning now will help you big time later. Trust the process." },
    { name: "Notice", text: "Your effort doesn't go unnoticed. Someone might see it soon." },
    { name: "Big Idea", text: "May idea ka na pwedeng maging something big someday." },
    { name: "Slow & Steady", text: "Chill lang, your path is slowly forming." },
    { name: "Try New", text: "Trying something new soon might open a cool opportunity." },
    { name: "Stacking Up", text: "Your hard work is stacking up kahit hindi mo pa feel." },
    { name: "Help Call", text: "Someone might ask for your help soon. You got this." },
    { name: "Stay Curious", text: "Stay curious, minsan dun nanggagaling the best opportunities." },
    { name: "Future You", text: "The skills you're building now will help future you." },
  ],

  goodJuju: [
    { name: "The Lucky Aura", text: "The universe says swerte ka today. Small wins are coming your way." },
    { name: "The Phone Battery Miracle", text: "Kahit 10% na lang battery mo, the universe says aabot pa 'yan hanggang makauwi ka." },
    { name: "The Perfect Outfit", text: "Today your outfit hits exactly the right vibe." },
    { name: "The Cosmic Confidence", text: "Today you'll walk around with extra confidence. The universe says you're doing better than you think." },
    { name: "The Complete Sleep", text: "The universe finally gave you maayos na tulog. Fresh ka today, hindi mukhang zombie sa class or work." },
    { name: "The Perfect Selfie", text: "Today the universe aligned the lighting. First shot pa lang, pang-IG na agad." },
    { name: "The Surprise Cash Drop", text: "Biglang may unexpected money na darating sa'yo today." },
    { name: "The Extra Sukli Moment", text: "The universe whispered: \"Keep the change.\"" },
    { name: "The Perfect Score", text: "Yung quiz, exam, o activity mo today? Perfect score, walang bawas." },
    { name: "Right Place Moment", text: "You might be in the right place at the right time today." },
    { name: "Smooth Flow", text: "Today might flow a little smoother than expected. Enjoy the momentum." },
    { name: "Happy Coincidence", text: "A simple coincidence today might make you smile." },
    { name: "Golden Mood", text: "Your mood today might spread positivity to people around you." },
    { name: "Lucky Break", text: "May moment today where things just work out nicely." },
    { name: "Sweet Timing", text: "Something big today might happen at the perfect moment." },
    { name: "Fortune Breeze", text: "There's good energy floating around you today." },
    { name: "Positive Ripple", text: "A small good moment today could create more good moments later." },
    { name: "Bright Turn", text: "Something ordinary today might turn into something pleasant." },
    { name: "Feel Good Moment", text: "Expect a moment today that simply feels nice and light." },
    { name: "The Dasurv", text: "All the good karma you've been planting is blooming." },
    { name: "The Free Coffee", text: "May manlilibre sa'yo ng kape. Caffeine levels: Restored!" },
    { name: "The Clear Skin", text: "The universe is healing your breakouts. Glowing ka for today's video!" },
    { name: "The Naka-Sale", text: "Sakto sa budget! Bilihin mo na yang item na nabubulok na sa cart mo." },
    { name: "The Green Light", text: "Walang traffic at no long lines, smooth sailing ang buong araw mo." },
    { name: "The Found One", text: "Yung nawawala sayo... lilitaw na out of nowhere." },
    { name: "The Unexpected Ayuda", text: "Makakakita ka ng 500 pesos sa pantalon o bag mo. Instant yaman!" },
    { name: "Lucky Day", text: "Mukhang may konting good luck coming your way today." },
    { name: "Good Vibes", text: "Your vibe today is attracting good energy." },
    { name: "Small Luck", text: "You might get lucky in a small but fun way." },
    { name: "Surprise Time", text: "Today feels like a good day for a surprise." },
    { name: "Memory Alert", text: "A random moment today might turn into a core memory." },
    { name: "Following Vibes", text: "Good vibes are following you around lately." },
    { name: "Wish Come True", text: "Something you've been hoping for might finally happen soon." },
    { name: "Mini Win", text: "Baka may small win ka today. Watch out." },
    { name: "Keep Eyes Open", text: "Keep your eyes open, may magandang moment somewhere today." },
    { name: "Universe Support", text: "The universe might be on your side today." },
  ],

  vibeBoost: [
    { name: "The Inner Hype Squad", text: "The universe whispers: \"Go lang, kaya mo 'yan.\"" },
    { name: "The Self-Love Reminder", text: "Look in the mirror and remember: you're doing better than you think." },
    { name: "The Lakasan ng Loob", text: "Today the universe lends you extra lakas ng loob. Try mo lang." },
    { name: "The Tiny Victory", text: "May small win today na magpapasabi sa'yo ng \"Nice!\"" },
    { name: "The Kind Reminder", text: "You're allowed to rest and still be worthy." },
    { name: "The Good Day Energy", text: "Walang malaking miracle today, pero everything just feels… good." },
    { name: "Fresh Start Energy", text: "Today feels like a good day to reset your mindset. New vibes, new energy." },
    { name: "Confidence Switch", text: "Try walking today like you already believe in yourself. Aura agad." },
    { name: "Light Mind", text: "Let go of one small worry today. You'll feel lighter." },
    { name: "Calm Power", text: "Minsan the strongest move is staying calm while everything else is noisy." },
    { name: "Glow Quietly", text: "Hindi kailangan laging loud ang confidence. Quiet confidence works too." },
    { name: "Good Mood Button", text: "Find one small thing today that makes you happy. Press that mood button." },
    { name: "Brave Minute", text: "One brave moment today might change your whole day." },
    { name: "Energy Reset", text: "Kung medyo heavy ang day, take a deep breath. Reset lang." },
    { name: "Keep Moving", text: "No pressure, just keep moving forward today." },
    { name: "Inner Spark", text: "May spark sa'yo na hindi madaling mawala. Let it show today." },
    { name: "The Main Character", text: "Cue the indie pop music. Ikaw ang bida today, lahat sila NPCs lang sa story mo." },
    { name: "The Unbothered", text: "Kahit anong stress ang ibato sa'yo, hindi ka tatablan." },
    { name: "The Bagong Ligo Freshness", text: "Kahit pawisan sa commute, amoy baby powder ka pa rin." },
    { name: "The Eyyy", text: "Kahit anong gawin mo, you make it look effortless. Eyyy ka muna eyyy!" },
    { name: "The Pakak na Confidence", text: "You will look in the mirror and say, \"Ang ganda/gwapo ko teh.\" Hold onto that feeling." },
    { name: "The Kaya Ko To", text: "Yung kaba mo? Papalitan ng tapang. Kayang-kaya mong iraos ang araw na 'to." },
    { name: "The Boundary", text: "You will successfully say \"No\" to something you don't want to do, and it will feel SO liberating." },
    { name: "The Validated Ferson", text: "Your feelings are valid, mima." },
    { name: "The Laban Lang", text: "Kahit feeling mo drain na drain ka na, the universe is giving you a sudden burst of energy. Go fighting!" },
    { name: "You Got This", text: "Hey, you're doing better than you think." },
    { name: "Lowkey Idol", text: "Someone probably looks up to you lowkey." },
    { name: "Solid Energy", text: "Your energy today? Pretty solid actually." },
    { name: "Don't Doubt", text: "Don't doubt yourself too much. Kaya mo 'yan." },
    { name: "Effort Counts", text: "Your effort matters more than you realize." },
    { name: "Smile Maker", text: "You might be the reason someone smiles today." },
    { name: "Uniquely You", text: "Just keep being you. That's already enough." },
    { name: "Strong Vibes", text: "Your vibe today feels stronger than yesterday." },
    { name: "Progress", text: "Small progress is still progress." },
    { name: "Be Proud", text: "Be proud of yourself sometimes. Deserve mo yan!" },
  ],

  wildCard: [
    { name: "The Awkward Hi", text: "May babati sa'yo ng \"Uy!\" pero hindi mo maalala kung saan mo siya kilala. Smile na lang." },
    { name: "The Memory Attack", text: "Out of nowhere, maaalala mo isang embarrassing moment from years ago." },
    { name: "The Weird Coincidence", text: "May mangyayaring maliit na coincidence today na magpapasabi sa'yo ng \"ha???\"" },
    { name: "The Kain Na Lang", text: "Wala kang gana sa ginagawa mo today. Solution ng universe: kumain ka muna." },
    { name: "The Random Energy Burst", text: "Bigla kang magkakaroon ng 5 minutes of productivity. Sulitin mo na." },
    { name: "The Phone Flip", text: "Malalaglag ang phone mo today. Good news: hindi siya masisira." },
    { name: "The Auto Laugh", text: "May tatawa sa paligid mo… tatawa ka rin kahit hindi mo alam bakit." },
    { name: "The Extra Rice Decision", text: "Magde-decide ka kung magdadagdag ng rice o hindi. Spoiler: magdadagdag ka." },
    { name: "The Marites Omen", text: "You will be the main topic of the group chat for at least 24 hours." },
    { name: "The Tupperware Prophecy", text: "You will find the missing lid to the Tupperware but the container will disappear." },
    { name: "The Ghostly Snub", text: "The ghost in your house isn't haunting you; it's just judging your life choices." },
    { name: "The Payong Paradox", text: "It will start raining the exact moment you decide to leave your umbrella at home." },
    { name: "The Titos of Manila Energy", text: "You will soon achieve the ultimate power of falling asleep instantly in front of a loud TV." },
    { name: "The K-Drama Twist", text: "You are one slow-motion trip away from meeting a rich heir at a convenience store." },
    { name: "The Sabaw Moment", text: "Maghahanap ka ng gamit na hawak mo lang pala. Accept the lutang moments, tao lang tayo!" },
    { name: "The Budol", text: "Isang innocent scroll lang sa TikTok, bigla ka na lang mag-o-order. Oops, secured ang parcel!" },
    { name: "The Wrong Send", text: "Mag-ingat sa pag-send ng screenshot. Baka ma-send mo mismo sa pinag-uusapan niyo! Awit." },
    { name: "The Kape Palpitations", text: "Energetic ka today, to the point na nanginginig na kalamnan mo. Kalmahan mo lang, drink water!" },
    { name: "The Tiyan Problems", text: "May slightly chaotic energy ang tiyan mo today. Always locate the nearest CR, mima." },
    { name: "The Spaghetti Code", text: "Gulo ng takbo ng araw mo, parang spaghetti code!" },
    { name: "The Eme Lang", text: "Expect a major plot twist today. Akala mo seryoso pero prank o charot lang pala!" },
    { name: "Funny Twist", text: "Something random today might turn into a funny story later." },
    { name: "Unexpected Talk", text: "Someone unexpected might start talking to you soon." },
    { name: "Random Chika", text: "Baka may marinig kang chika today that makes your day." },
    { name: "Random Invite", text: "Don't ignore random invites today. Baka fun pala." },
    { name: "Mind Talk", text: "Someone might say something that stays in your mind all day." },
    { name: "Unexpected Place", text: "You might end up somewhere you didn't plan today." },
    { name: "Chaos Fun", text: "May konting gulo today… pero masaya." },
  ],
};

// ========== PERSONALIZED QUESTIONS ==========

const QUIZ_TREES = {
  romance: {
    label: 'ROMANCE',
    icon: 'fa-heart',
    color: '#FF4FD8',
    start: 'r1',
    nodes: {
      r1: {
        q: "What's your love situation right now?",
        options: [
          { text: "I'm in a relationship", next: 'r2_taken' },
          { text: "I'm single and looking", next: 'r2_single' },
          { text: "It's complicated", next: 'r2_complicated' },
          { text: "I'm crushing hard", next: 'r2_crush' },
        ]
      },
      r2_taken: {
        q: "How's the vibe with your partner lately?",
        options: [
          { text: "Amazing, pero may kulang", next: 'r3_taken_sweet', tags: ['taken_sweet'] },
          { text: "Medyo may away kami", next: 'r3_taken_conflict', tags: ['taken_conflict'] },
          { text: "Smooth sailing, all good", next: 'r3_taken_peace', tags: ['taken_peace'] },
        ]
      },
      r2_single: {
        q: "What kind of love energy are you hoping for?",
        options: [
          { text: "I want someone to notice me", next: 'r3_single_noticed', tags: ['single_noticed'] },
          { text: "I want a surprise connection", next: 'r3_single_surprise', tags: ['single_surprise'] },
          { text: "I'm just enjoying my own vibe", next: 'r3_single_solo', tags: ['single_solo'] },
        ]
      },
      r2_complicated: {
        q: "What kind of complicated?",
        options: [
          { text: "Unspoken feelings", next: 'r3_complicated_unsaid', tags: ['crush_secret'] },
          { text: "On and off energy", next: 'r3_complicated_onoff', tags: ['taken_conflict', 'single_surprise'] },
          { text: "Someone from the past", next: 'r3_complicated_past', tags: ['single_solo', 'crush_secret'] },
        ]
      },
      r2_crush: {
        q: "Does your crush know you exist?",
        options: [
          { text: "I think so...", next: 'r3_crush_known', tags: ['crush_known'] },
          { text: "Probably not yet", next: 'r3_crush_hidden', tags: ['crush_secret'] },
          { text: "We interact but it's subtle", next: 'r3_crush_subtle', tags: ['crush_known', 'crush_secret'] },
        ]
      },
      r3_taken_sweet: {
        q: "Last question! What small gesture means the most to you?",
        options: [
          { text: "Acts of service", tags: ['taken_peace'] },
          { text: "Quality time together", tags: ['taken_sweet'] },
          { text: "Random messages to check in", tags: ['taken_conflict'] },
        ]
      },
      r3_taken_conflict: {
        q: "How do you usually resolve conflicts?",
        options: [
          { text: "Food solves everything ", tags: ['taken_conflict'] },
          { text: "Talk it out (eventually)", tags: ['taken_peace'] },
          { text: "Silence first, then lambing", tags: ['taken_sweet'] },
        ]
      },
      r3_taken_peace: {
        q: "What's your love language?",
        options: [
          { text: "Physical touch", tags: ['taken_sweet'] },
          { text: "Words of affirmation", tags: ['taken_peace'] },
          { text: "Gifts (kahit maliit lang)", tags: ['taken_conflict'] },
        ]
      },
      r3_single_noticed: {
        q: "Where are you most likely to meet someone?",
        options: [
          { text: "In class or at work", tags: ['crush_known'] },
          { text: "Through mutual friends", tags: ['single_surprise'] },
          { text: "Just randomly, out of nowhere", tags: ['single_noticed'] },
        ]
      },
      r3_single_surprise: {
        q: "What's your ideal first impression?",
        options: [
          { text: "A deep conversation", tags: ['single_surprise'] },
          { text: "A funny moment together", tags: ['single_noticed'] },
          { text: "Eye contact across a room", tags: ['crush_known'] },
        ]
      },
      r3_single_solo: {
        q: "If love comes, you'd want it to be...",
        options: [
          { text: "Slow and meaningful", tags: ['single_solo'] },
          { text: "Spontaneous and fun", tags: ['single_surprise'] },
          { text: "Something I didn't plan for", tags: ['single_noticed'] },
        ]
      },
      r3_complicated_unsaid: {
        q: "Would you ever say something first?",
        options: [
          { text: "Maybe, if I got a sign", tags: ['crush_secret'] },
          { text: "I'll wait a bit longer", tags: ['crush_known'] },
          { text: "Probably not, pero sana sila", tags: ['single_noticed'] },
        ]
      },
      r3_complicated_onoff: {
        q: "What does this person make you feel most?",
        options: [
          { text: "Hopeful, somehow", tags: ['single_surprise'] },
          { text: "Confused but drawn", tags: ['taken_conflict'] },
          { text: "Like I deserve better", tags: ['single_solo'] },
        ]
      },
      r3_complicated_past: {
        q: "What do you actually want?",
        options: [
          { text: "Closure", tags: ['single_solo'] },
          { text: "A second chance", tags: ['taken_sweet'] },
          { text: "To just move forward", tags: ['single_surprise'] },
        ]
      },
      r3_crush_known: {
        q: "What energy do you give off around them?",
        options: [
          { text: "Confident but calm", tags: ['crush_known'] },
          { text: "Trying not to be too obvious", tags: ['crush_secret'] },
          { text: "I become a different person tbh", tags: ['single_noticed'] },
        ]
      },
      r3_crush_hidden: {
        q: "Why haven't you made a move yet?",
        options: [
          { text: "Waiting for the right moment", tags: ['crush_secret'] },
          { text: "I'm scared of ruining things", tags: ['crush_known'] },
          { text: "They feel out of reach", tags: ['single_noticed'] },
        ]
      },
      r3_crush_subtle: {
        q: "What's your next move (honestly)?",
        options: [
          { text: "Drop a hint and see", tags: ['crush_known'] },
          { text: "Let the universe decide", tags: ['crush_secret'] },
          { text: "Keep enjoying the mystery", tags: ['single_solo'] },
        ]
      },
    },
    tagPools: {
      taken_conflict: [0, 1, 2, 3, 15, 16], 
      taken_sweet: [3, 4, 5, 15],           
      taken_peace: [4, 5, 16],              
      single_noticed: [6, 8, 12, 13, 18, 20, 21],  
      single_surprise: [7, 9, 11, 14, 18, 23, 24], 
      single_solo: [6, 10, 11, 13, 14],      
      crush_known: [19, 21, 22, 25, 26, 27],
      crush_secret: [18, 19, 20, 23, 24, 25, 26, 28],
    }
  },

  career: {
    label: 'CAREER',
    icon: 'fa-graduation-cap',
    color: '#6FA8FF',
    start: 'c1',
    nodes: {
      c1: {
        q: "What best describes your current hustle?",
        options: [
          { text: "Student life is killing me", next: 'c2_student' },
          { text: "Working and grinding", next: 'c2_work' },
          { text: "Both (send help)", next: 'c2_both' },
          { text: "Looking for my next move", next: 'c2_searching' },
        ]
      },
      c2_student: {
        q: "What's your biggest student struggle rn?",
        options: [
          { text: "Cramming everything last minute", next: 'c3_student_cram', tags: ['student_cram'] },
          { text: "Group projects (ako na naman)", next: 'c3_student_group', tags: ['student_lead'] },
          { text: "Thesis/finals pressure", next: 'c3_student_thesis', tags: ['student_thesis'] },
          { text: "Nawala motivation ko", next: 'c3_student_lost', tags: ['hustle_burn'] },
        ]
      },
      c2_work: {
        q: "How's work going honestly?",
        options: [
          { text: "Exhausted but okay", next: 'c3_work_grind', tags: ['work_grind'] },
          { text: "Feeling undervalued", next: 'c3_work_under', tags: ['work_rise'] },
          { text: "Eyeing a new opportunity", next: 'c3_work_opp', tags: ['work_opp'] },
          { text: "Thriving actually", next: 'c3_work_thrive', tags: ['work_thrive'] },
        ]
      },
      c2_both: {
        q: "Which is draining you more?",
        options: [
          { text: "School is the main villain", next: 'c3_student_cram', tags: ['student_cram', 'hustle_burn'] },
          { text: "Work is the main villain", next: 'c3_work_grind', tags: ['work_grind', 'hustle_burn'] },
          { text: "Equal chaos", next: 'c3_both_chaos', tags: ['student_thesis', 'work_rise'] },
        ]
      },
      c2_searching: {
        q: "What kind of opportunity are you after?",
        options: [
          { text: "Something creative", next: 'c3_search_creative', tags: ['work_opp', 'student_lost'] },
          { text: "Stability and good pay", next: 'c3_search_stable', tags: ['work_thrive', 'hustle_burn'] },
          { text: "I just need a sign", next: 'c3_search_sign', tags: ['student_lost', 'work_opp'] },
        ]
      },
      // Terminal nodes
      c3_student_cram: {
        q: "Finals are tomorrow. Your move?",
        options: [
          { text: "All-nighter + caffeine", tags: ['student_cram'] },
          { text: "Cram for 2hrs and pray", tags: ['student_thesis'] },
          { text: "Download reviewers I won't open", tags: ['student_cram'] },
        ]
      },
      c3_student_group: {
        q: "Your groupmates are MIA. You:",
        options: [
          { text: "Do it all. Ikaw na ang grupo.", tags: ['student_lead'] },
          { text: "Chase them down in the GC", tags: ['student_lead'] },
          { text: "Tell the prof the truth", tags: ['student_thesis'] },
        ]
      },
      c3_student_thesis: {
        q: "How close are you to your goal?",
        options: [
          { text: "Sobrang layo pa", tags: ['student_thesis'] },
          { text: "Almost there, just need a push", tags: ['student_lead'] },
          { text: "Not sure, pero I'm going", tags: ['hustle_burn'] },
        ]
      },
      c3_student_lost: {
        q: "What would bring back your motivation?",
        options: [
          { text: "One small win", tags: ['student_lost'] },
          { text: "Someone to believe in me", tags: ['hustle_burn'] },
          { text: "A break honestly", tags: ['work_thrive'] },
        ]
      },
      c3_work_grind: {
        q: "What keeps you going through the grind?",
        options: [
          { text: "Sweldo day is coming", tags: ['work_grind'] },
          { text: "Future goals, always", tags: ['work_rise'] },
          { text: "Kape lang 'to, kaya mo 'yan", tags: ['student_cram'] },
        ]
      },
      c3_work_under: {
        q: "What do you wish people noticed about your work?",
        options: [
          { text: "My effort and dedication", tags: ['work_rise'] },
          { text: "That I go above and beyond", tags: ['work_thrive'] },
          { text: "That I'm ready for more", tags: ['work_opp'] },
        ]
      },
      c3_work_opp: {
        q: "What's holding you back from going for it?",
        options: [
          { text: "Fear of failure", tags: ['work_opp'] },
          { text: "Timing doesn't feel right yet", tags: ['work_rise'] },
          { text: "Waiting for a sign", tags: ['student_lost'] },
        ]
      },
      c3_work_thrive: {
        q: "What's your next big move?",
        options: [
          { text: "Level up my title", tags: ['work_thrive'] },
          { text: "Start my own thing", tags: ['work_opp'] },
          { text: "Keep growing where I am", tags: ['work_rise'] },
        ]
      },
      c3_both_chaos: {
        q: "One word for how you feel rn:",
        options: [
          { text: "Exhausted", tags: ['hustle_burn', 'work_grind'] },
          { text: "Determined", tags: ['student_thesis', 'work_rise'] },
          { text: "Hopeful", tags: ['work_opp', 'student_lead'] },
        ]
      },
      c3_search_creative: {
        q: "How do you want to feel in your next role?",
        options: [
          { text: "Inspired and challenged", tags: ['work_opp'] },
          { text: "Supported and valued", tags: ['work_thrive'] },
          { text: "Free to make things", tags: ['student_lost'] },
        ]
      },
      c3_search_stable: {
        q: "What matters more right now?",
        options: [
          { text: "Security first", tags: ['work_thrive'] },
          { text: "Growth and experience", tags: ['work_rise'] },
          { text: "Both, please", tags: ['hustle_burn'] },
        ]
      },
      c3_search_sign: {
        q: "Which sign would make you move?",
        options: [
          { text: "An unexpected offer", tags: ['work_opp'] },
          { text: "A friend who believes in me", tags: ['student_lost'] },
          { text: "Just waking up ready one day", tags: ['hustle_burn'] },
        ]
      },
    },
    tagPools: {
      student_cram: [0, 3, 4, 7, 8, 9],        
      student_lead: [6, 9, 12, 13, 23],         
      student_thesis: [4, 5, 7, 8, 22, 26, 27],  
      student_lost: [10, 11, 12, 16, 24, 25, 34], 
      hustle_burn: [1, 2, 4, 16, 17, 20, 22],    
      work_grind: [2, 17, 20, 21, 22, 26, 28],   
      work_rise: [11, 13, 23, 27, 29, 31, 32],   
      work_opp: [10, 11, 14, 15, 25, 29, 30],   
      work_thrive: [18, 19, 27, 28, 29, 30, 39],  
    }
  },

  goodJuju: {
    label: 'GOOD JUJU',
    icon: 'fa-clover',
    color: '#8A5CFF',
    start: 'g1',
    nodes: {
      g1: {
        q: "What kind of good luck are you calling in?",
        options: [
          { text: "Money and unexpected blessings", next: 'g2_money' },
          { text: "Good vibes and easy days", next: 'g2_vibes' },
          { text: "Right place, right time energy", next: 'g2_timing' },
          { text: "Physical glow-up luck", next: 'g2_glow' },
        ]
      },
      g2_money: {
        q: "How's your relationship with money rn?",
        options: [
          { text: "Waiting for my comeback arc", next: 'g3_money_comeback', tags: ['cash_luck'] },
          { text: "Budget: stable but boring", next: 'g3_money_stable', tags: ['daily_luck'] },
          { text: "Manifesting big things", next: 'g3_money_manifest', tags: ['cash_luck', 'surprise_luck'] },
        ]
      },
      g2_vibes: {
        q: "What would make today feel extra good?",
        options: [
          { text: "No hassle, smooth energy", next: 'g3_vibes_smooth', tags: ['daily_luck'] },
          { text: "A surprise that makes me smile", next: 'g3_vibes_surprise', tags: ['surprise_luck'] },
          { text: "My mood spreading to others", next: 'g3_vibes_mood', tags: ['mood_luck'] },
        ]
      },
      g2_timing: {
        q: "Timing-wise, where do you need luck most?",
        options: [
          { text: "Finding something I lost", next: 'g3_timing_lost', tags: ['find_luck'] },
          { text: "Being in the right place", next: 'g3_timing_place', tags: ['daily_luck', 'surprise_luck'] },
          { text: "Something finally clicking", next: 'g3_timing_click', tags: ['mood_luck', 'daily_luck'] },
        ]
      },
      g2_glow: {
        q: "What kind of glow are you after?",
        options: [
          { text: "Skin and physical energy", next: 'g3_glow_skin', tags: ['glow_luck'] },
          { text: "Outfit and presentation vibes", next: 'g3_glow_outfit', tags: ['glow_luck'] },
          { text: "Just feeling fresh and rested", next: 'g3_glow_rest', tags: ['daily_luck', 'glow_luck'] },
        ]
      },
      // Terminal nodes
      g3_money_comeback: {
        q: "When you finally get that money, you:",
        options: [
          { text: "Save it (for real this time)", tags: ['cash_luck'] },
          { text: "Treat yourself first", tags: ['surprise_luck'] },
          { text: "Ibalik sa universe bilang kindness", tags: ['mood_luck'] },
        ]
      },
      g3_money_stable: {
        q: "What small luxury would feel like a blessing today?",
        options: [
          { text: "Free coffee from someone", tags: ['daily_luck'] },
          { text: "Finding cash in your pocket", tags: ['cash_luck'] },
          { text: "A discount on something you need", tags: ['surprise_luck'] },
        ]
      },
      g3_money_manifest: {
        q: "Your manifestation style is:",
        options: [
          { text: "Vision board and journaling", tags: ['cash_luck'] },
          { text: "Acting like I already have it", tags: ['surprise_luck'] },
          { text: "Gratitude for what I have", tags: ['mood_luck'] },
        ]
      },
      g3_vibes_smooth: {
        q: "What would ruin a good day fastest for you?",
        options: [
          { text: "Traffic or long lines", tags: ['daily_luck'] },
          { text: "Unexpected bad news", tags: ['mood_luck'] },
          { text: "Low battery and no charger", tags: ['glow_luck'] },
        ]
      },
      g3_vibes_surprise: {
        q: "Best kind of surprise?",
        options: [
          { text: "Something material", tags: ['surprise_luck'] },
          { text: "A kind word from someone", tags: ['mood_luck'] },
          { text: "Something totally random", tags: ['daily_luck'] },
        ]
      },
      g3_vibes_mood: {
        q: "How do you usually spread good vibes?",
        options: [
          { text: "Smiling at strangers", tags: ['mood_luck'] },
          { text: "Complimenting people genuinely", tags: ['daily_luck'] },
          { text: "Just being in a good mood", tags: ['surprise_luck'] },
        ]
      },
      g3_timing_lost: {
        q: "What's been lost that you hope returns?",
        options: [
          { text: "A physical thing", tags: ['find_luck'] },
          { text: "A connection with someone", tags: ['mood_luck'] },
          { text: "My motivation or energy", tags: ['daily_luck'] },
        ]
      },
      g3_timing_place: {
        q: "If luck put you somewhere today, where?",
        options: [
          { text: "Exactly where I needed to be", tags: ['daily_luck'] },
          { text: "Somewhere I didn't expect", tags: ['surprise_luck'] },
          { text: "Near someone who matters", tags: ['find_luck'] },
        ]
      },
      g3_timing_click: {
        q: "What area needs that \"click\" most?",
        options: [
          { text: "Understanding something hard", tags: ['daily_luck'] },
          { text: "A relationship or friendship", tags: ['mood_luck'] },
          { text: "A decision I've been avoiding", tags: ['surprise_luck'] },
        ]
      },
      g3_glow_skin: {
        q: "Self-care lately?",
        options: [
          { text: "Skincare routine is consistent", tags: ['glow_luck'] },
          { text: "Barely, but I'm trying", tags: ['daily_luck'] },
          { text: "Does sleep count?", tags: ['glow_luck'] },
        ]
      },
      g3_glow_outfit: {
        q: "Today's fit energy is:",
        options: [
          { text: "Clean and confident", tags: ['glow_luck'] },
          { text: "Cozy but cute", tags: ['daily_luck'] },
          { text: "Manifesting best outfit day", tags: ['surprise_luck'] },
        ]
      },
      g3_glow_rest: {
        q: "How did you sleep last night?",
        options: [
          { text: "Actually well for once", tags: ['glow_luck'] },
          { text: "Could've been better", tags: ['daily_luck'] },
          { text: "What is sleep", tags: ['surprise_luck'] },
        ]
      },
    },
    tagPools: {
      cash_luck: [6, 7, 20, 23, 24, 26, 27],
      daily_luck: [0, 3, 8, 10, 13, 17, 18, 27, 28, 29, 33, 34],
      surprise_luck: [2, 5, 7, 11, 14, 22, 23, 26, 31],
      mood_luck: [1, 3, 9, 12, 13, 16, 18, 30, 32],
      glow_luck: [2, 4, 8, 15, 21, 22, 28],
      find_luck: [5, 7, 25, 26, 34, 35],
    }
  },

  vibeBoost: {
    label: 'VIBE BOOST',
    icon: 'fa-rocket',
    color: '#FFD93D',
    start: 'v1',
    nodes: {
      v1: {
        q: "Be honest. How are you feeling today?",
        options: [
          { text: "Tired but still showing up", next: 'v2_tired' },
          { text: "Meh, need a spark", next: 'v2_meh' },
          { text: "Actually pretty good", next: 'v2_good' },
          { text: "A lil anxious or overwhelmed", next: 'v2_anxious' },
        ]
      },
      v2_tired: {
        q: "What kind of tired are you?",
        options: [
          { text: "Sleep-deprived", next: 'v3_tired_sleep', tags: ['rest_boost'] },
          { text: "Emotionally drained", next: 'v3_tired_emo', tags: ['valid_boost'] },
          { text: "Just need a W today", next: 'v3_tired_win', tags: ['win_boost'] },
        ]
      },
      v2_meh: {
        q: "What would flip your mood fastest?",
        options: [
          { text: "A compliment or validation", next: 'v3_meh_compliment', tags: ['valid_boost'] },
          { text: "A small unexpected win", next: 'v3_meh_win', tags: ['win_boost'] },
          { text: "Some alone time to reset", next: 'v3_meh_alone', tags: ['calm_boost'] },
          { text: "Just vibe and enjoy the moment", next: 'v3_meh_vibe', tags: ['hype_boost'] },
        ]
      },
      v2_good: {
        q: "What's your good energy source today?",
        options: [
          { text: "I just feel it in my bones", next: 'v3_good_feel', tags: ['hype_boost'] },
          { text: "Something good is coming", next: 'v3_good_coming', tags: ['win_boost'] },
          { text: "People around me are lifting me up", next: 'v3_good_people', tags: ['valid_boost'] },
        ]
      },
      v2_anxious: {
        q: "What's making you feel off?",
        options: [
          { text: "Too many things to juggle", next: 'v3_anxious_juggle', tags: ['calm_boost'] },
          { text: "Scared of what comes next", next: 'v3_anxious_fear', tags: ['brave_boost'] },
          { text: "Not sure, just low-key uneasy", next: 'v3_anxious_uneasy', tags: ['calm_boost', 'valid_boost'] },
        ]
      },
      // Terminal nodes
      v3_tired_sleep: {
        q: "Last question: what mantra do you need today?",
        options: [
          { text: "\"Rest is productive too.\"", tags: ['rest_boost'] },
          { text: "\"I've survived worse.\"", tags: ['brave_boost'] },
          { text: "\"Kaya ko pa 'to, sandali.\"", tags: ['win_boost'] },
        ]
      },
      v3_tired_emo: {
        q: "What would make you feel most seen today?",
        options: [
          { text: "Someone just gets it", tags: ['valid_boost'] },
          { text: "A quiet moment with myself", tags: ['calm_boost'] },
          { text: "A small gesture from someone I care about", tags: ['valid_boost'] },
        ]
      },
      v3_tired_win: {
        q: "What's your smallest possible W today?",
        options: [
          { text: "Finishing one thing on my list", tags: ['win_boost'] },
          { text: "Getting through the day", tags: ['rest_boost'] },
          { text: "Being kind to myself", tags: ['valid_boost'] },
        ]
      },
      v3_meh_compliment: {
        q: "What would you want to hear right now?",
        options: [
          { text: "\"You're doing great.\"", tags: ['valid_boost'] },
          { text: "\"People notice your effort.\"", tags: ['win_boost'] },
          { text: "\"You look amazing today.\"", tags: ['hype_boost'] },
        ]
      },
      v3_meh_win: {
        q: "What kind of win?",
        options: [
          { text: "Academic or work achievement", tags: ['win_boost'] },
          { text: "Something social or personal", tags: ['valid_boost'] },
          { text: "Just a smooth, easy day", tags: ['calm_boost'] },
        ]
      },
      v3_meh_alone: {
        q: "Your ideal reset spot is:",
        options: [
          { text: "Bed with snacks", tags: ['rest_boost'] },
          { text: "Outside, fresh air", tags: ['calm_boost'] },
          { text: "Anywhere quiet and mine", tags: ['calm_boost'] },
        ]
      },
      v3_meh_vibe: {
        q: "Best way to enjoy the moment?",
        options: [
          { text: "Music on, world off", tags: ['hype_boost'] },
          { text: "Eat something good", tags: ['rest_boost'] },
          { text: "Just exist without pressure", tags: ['calm_boost'] },
        ]
      },
      v3_good_feel: {
        q: "How will you use this energy?",
        options: [
          { text: "Be extra kind to others", tags: ['hype_boost'] },
          { text: "Push toward something I've been avoiding", tags: ['brave_boost'] },
          { text: "Just enjoy it, no pressure", tags: ['calm_boost'] },
        ]
      },
      v3_good_coming: {
        q: "When good things happen, you usually:",
        options: [
          { text: "Celebrate, even if small", tags: ['win_boost'] },
          { text: "Stay humble but grateful", tags: ['calm_boost'] },
          { text: "Share it with someone", tags: ['valid_boost'] },
        ]
      },
      v3_good_people: {
        q: "Who's lifting you up most lately?",
        options: [
          { text: "Friends and barkada", tags: ['hype_boost'] },
          { text: "Family, my constant", tags: ['valid_boost'] },
          { text: "Myself, honestly", tags: ['brave_boost'] },
        ]
      },
      v3_anxious_juggle: {
        q: "How do you usually cope with overwhelm?",
        options: [
          { text: "Make a to-do list", tags: ['calm_boost'] },
          { text: "Talk to someone about it", tags: ['valid_boost'] },
          { text: "Power through na lang", tags: ['brave_boost'] },
        ]
      },
      v3_anxious_fear: {
        q: "The thing you're scared of... you actually:",
        options: [
          { text: "Know you can handle it", tags: ['brave_boost'] },
          { text: "Wish someone helped you through it", tags: ['valid_boost'] },
          { text: "Just need to start somewhere", tags: ['win_boost'] },
        ]
      },
      v3_anxious_uneasy: {
        q: "What would bring peace right now?",
        options: [
          { text: "Knowing it will be okay", tags: ['calm_boost'] },
          { text: "A reminder that I'm enough", tags: ['valid_boost'] },
          { text: "Doing one small good thing", tags: ['win_boost'] },
        ]
      },
    },
    tagPools: {
      hype_boost: [0, 3, 5, 16, 17, 18, 19, 20],
      win_boost: [1, 3, 5, 11, 12, 14, 26, 27, 29],
      calm_boost: [4, 8, 9, 10, 12, 13, 22, 23],
      valid_boost: [1, 4, 7, 22, 23, 24, 25, 32, 33],
      brave_boost: [2, 5, 6, 20, 21, 26, 27],
      rest_boost: [4, 7, 8, 10, 12, 16, 23],
    }
  },

  wildCard: {
    label: 'WILD CARD',
    icon: 'fa-dice',
    color: '#00E5FF',
    start: 'w1',
    nodes: {
      w1: {
        q: "Pick your chaotic energy today:",
        options: [
          { text: "My brain is absolute sabaw", next: 'w2_sabaw' },
          { text: "Something weird is definitely gonna happen", next: 'w2_weird' },
          { text: "I'm in my unhinged era", next: 'w2_unhinged' },
          { text: "Just vibing, whatever comes", next: 'w2_vibe' },
        ]
      },
      w2_sabaw: {
        q: "How sabaw are we talking?",
        options: [
          { text: "Forgot my own name level", next: 'w3_sabaw_max', tags: ['lutang'] },
          { text: "Phone in hand, forgot what I was doing", next: 'w3_sabaw_mid', tags: ['lutang', 'random'] },
          { text: "Just a little slow today", next: 'w3_sabaw_lite', tags: ['random'] },
        ]
      },
      w2_weird: {
        q: "What kind of weird are we expecting?",
        options: [
          { text: "Social awkwardness incoming", next: 'w3_weird_social', tags: ['awkward'] },
          { text: "A wild coincidence", next: 'w3_weird_coincidence', tags: ['coincidence'] },
          { text: "Something unexplainable", next: 'w3_weird_ghost', tags: ['chaos'] },
        ]
      },
      w2_unhinged: {
        q: "Your unhinged era looks like:",
        options: [
          { text: "Impulse purchases", next: 'w3_unhinged_buy', tags: ['budol'] },
          { text: "Oversharing to the wrong person", next: 'w3_unhinged_share', tags: ['awkward', 'chaos'] },
          { text: "Laughing at the wrong time", next: 'w3_unhinged_laugh', tags: ['random'] },
        ]
      },
      w2_vibe: {
        q: "What random thing might happen to you today?",
        options: [
          { text: "A funny story to tell later", next: 'w3_vibe_funny', tags: ['random'] },
          { text: "Unexpected encounter", next: 'w3_vibe_encounter', tags: ['coincidence', 'awkward'] },
          { text: "A plot twist nobody saw coming", next: 'w3_vibe_twist', tags: ['chaos'] },
        ]
      },
      // Terminal nodes
      w3_sabaw_max: {
        q: "Last question: How will you handle the sabaw?",
        options: [
          { text: "Accept and move on", tags: ['lutang'] },
          { text: "Blame Mercury retrograde", tags: ['chaos'] },
          { text: "Eat first, think later", tags: ['random'] },
        ]
      },
      w3_sabaw_mid: {
        q: "Antidote to the sabaw?",
        options: [
          { text: "Coffee. Now.", tags: ['lutang'] },
          { text: "15-minute scroll then snap out", tags: ['budol'] },
          { text: "Talk to someone, mapupukaw ako", tags: ['random'] },
        ]
      },
      w3_sabaw_lite: {
        q: "Something small that will throw you off today:",
        options: [
          { text: "Misread a message", tags: ['awkward'] },
          { text: "Say something embarrassing", tags: ['lutang'] },
          { text: "Trip sa flat ground", tags: ['random'] },
        ]
      },
      w3_weird_social: {
        q: "Awkward encounter with:",
        options: [
          { text: "Someone I forgot I knew", tags: ['awkward'] },
          { text: "My ex or ex-crush", tags: ['chaos'] },
          { text: "A prof or boss randomly", tags: ['lutang'] },
        ]
      },
      w3_weird_coincidence: {
        q: "The coincidence will probably involve:",
        options: [
          { text: "Thinking of someone right before they message", tags: ['coincidence'] },
          { text: "Being in the right place at the right time", tags: ['random'] },
          { text: "Saying the same thing as someone else", tags: ['awkward'] },
        ]
      },
      w3_weird_ghost: {
        q: "Paranormal preference:",
        options: [
          { text: "Just watching me sleep", tags: ['chaos'] },
          { text: "Moving my stuff", tags: ['lutang'] },
          { text: "Judging my choices (same)", tags: ['random'] },
        ]
      },
      w3_unhinged_buy: {
        q: "Your cart currently has:",
        options: [
          { text: "Stuff I'll use once", tags: ['budol'] },
          { text: "Items that made sense at 2am", tags: ['chaos'] },
          { text: "Actually useful things tbh", tags: ['random'] },
        ]
      },
      w3_unhinged_share: {
        q: "You accidentally sent a meme to:",
        options: [
          { text: "The person the meme is about", tags: ['chaos'] },
          { text: "Family group chat", tags: ['awkward'] },
          { text: "A crush", tags: ['lutang'] },
        ]
      },
      w3_unhinged_laugh: {
        q: "You laughed at the worst possible time during:",
        options: [
          { text: "A serious conversation", tags: ['random'] },
          { text: "A class or work meeting", tags: ['awkward'] },
          { text: "A sad moment (bad timing)", tags: ['chaos'] },
        ]
      },
      w3_vibe_funny: {
        q: "The funny story will probably involve:",
        options: [
          { text: "Your own clumsiness", tags: ['random'] },
          { text: "Something embarrassing you said", tags: ['awkward'] },
          { text: "A very Filipino moment 🇵🇭", tags: ['lutang'] },
        ]
      },
      w3_vibe_encounter: {
        q: "The unexpected encounter will be:",
        options: [
          { text: "Someone from your past", tags: ['coincidence'] },
          { text: "A stranger with a funny interaction", tags: ['random'] },
          { text: "A moment that connects somehow", tags: ['chaos'] },
        ]
      },
      w3_vibe_twist: {
        q: "The twist is probably:",
        options: [
          { text: "Totally absurd", tags: ['chaos'] },
          { text: "Mildly chaotic but manageable", tags: ['budol'] },
          { text: "Something only I would experience", tags: ['random'] },
        ]
      },
    },
    tagPools: {
      lutang: [0, 1, 2, 3, 4, 5, 14, 15],
      random: [3, 4, 6, 7, 8, 10, 11, 21, 22, 23, 24],
      budol: [15, 16, 19, 21, 26],
      awkward: [0, 2, 9, 10, 17, 18, 22],
      coincidence: [1, 8, 9, 10, 11, 13, 24],
      chaos: [12, 13, 14, 15, 17, 18, 19, 20, 25, 26],
    }
  },
};

// ========== SPIN PRIZES ==========

const WHEEL_PRIZES = [
  { label: 'Softcopy Photo', icon: 'fa-image', color: '#FF4FD8' },
  { label: 'Premium Accounts', icon: 'fa-crown', color: '#FFD93D' },
  { label: 'Tarot Keychain', icon: 'fa-key', color: '#8A5CFF' },
  { label: 'Spin Again (Dare)', icon: 'fa-rotate', color: '#00E5FF' },  
  { label: 'Softcopy Photo', icon: 'fa-image', color: '#FF6B9D' },
  { label: 'Spin Again!', icon: 'fa-dice', color: '#4ADE80' },
  { label: 'Premium Accounts', icon: 'fa-crown', color: '#6FA8FF' },
  { label: 'Tarot Keychain', icon: 'fa-key', color: '#FFA500' },
  { label: 'Softcopy Photo', icon: 'fa-image', color: '#FF4FD8' },
  { label: 'Spin Again (Dare)', icon: 'fa-rotate', color: '#00E5FF' },
];