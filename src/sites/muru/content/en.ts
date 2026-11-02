import type { MuruContent } from './types'

export const en: MuruContent = {
  meta: { title: 'MuRu | D-Link Robotics', htmlLang: 'en' },
  nav: {
    logoSuffix: 'BY D-LINK ROBOTICS',
    growing: 'Growing together',
    life: 'Life with MuRu',
    technology: 'Technology',
    app: 'The App',
    cta: 'Meet MuRu',
    menu: 'Menu',
    languageLabel: 'Language',
  },
  hero: {
    kicker: 'D-LINK ROBOTICS PRESENTS',
    headline: ['A little ', 'soul', ' for the days that matter.'],
    body: 'MuRu is the smart companion made to feel less like technology and more like someone who knows your way home.',
    primary: 'Discover MuRu',
    secondary: 'See a day together',
    corner: 'GENTLE TECHNOLOGY. BEAUTIFULLY HUMAN.',
  },
  philosophy: {
    tagline: 'MADE FOR BELONGING',
    headline: 'Warmth is a technology too.',
    body: 'MuRu does not try to fill a room. It simply notices the little things: the rhythm of your mornings, the days that feel long, and the people who make home feel like home.',
    quote: '“Not just a robot, but a soul that grows with you.”',
    attribution: "MURU'S PROMISE",
  },
  growing: {
    tagline: 'GROWING TOGETHER',
    headline: 'There for the whole story.',
    body: 'From the first curious hello to the quiet reassurance of later years, MuRu grows in meaning alongside the people it loves.',
    stages: [
      {
        tagline: 'CHILDHOOD',
        headline: 'A first best friend.',
        body: 'Small rituals become familiar: a morning greeting, a brave little nudge, a calm corner after a big day.',
      },
      {
        tagline: 'ADULTHOOD',
        headline: 'A quiet constant.',
        body: 'MuRu learns the rhythm of your home and makes the in-between moments feel a little more held.',
      },
      {
        tagline: 'OLD AGE',
        headline: 'Care, made gentler.',
        body: 'Thoughtful check-ins and a warm presence help family feel close, wherever life takes them.',
      },
    ],
    photoCaption: 'A companion for the seasons that become a life.',
    photoAlt: 'A young girl, a mother and a grandmother sit on a rug, gently touching MuRu.',
    more: 'See the full growth journey',
  },
  features: {
    tagline: 'LIFE WITH MURU',
    headline: 'Small moments, gentler days.',
    cards: [
      {
        tagline: '01 / Personalized welcome',
        headline: 'A hello that knows your smile.',
        body: 'MuRu recognizes familiar rhythms and greets each person in its own gentle way. Through voice print recognition, it offers a personalized, enthusiastic welcome when you return home, turning every arrival into a small moment of joy.',
        linkLabel: 'How MuRu notices',
        linkTo: 'technology',
      },
      {
        tagline: '02 / Comfortable boundaries',
        headline: 'Always close. Never in the way.',
        body: 'Comfort is a shared language. To ensure a pressure-free companion experience, MuRu pauses, gives room, and automatically retreats to its charging dock with a tiny yawn after 60 minutes of interaction. It is presence without pressure.',
        linkLabel: 'Explore the senses',
        linkTo: 'technology',
      },
      {
        tagline: '03 / Gentle health alerts',
        headline: 'A little nudge, right on time.',
        body: 'MuRu acts as your thoughtful health assistant. After focused work sessions, it gently approaches and uses physical movements—like raising its hands or tilting its head—to remind you to stretch or drink water, supporting your wellbeing without disruptive alarms.',
        linkLabel: 'See wellbeing in the app',
        linkTo: 'the-app',
      },
      {
        tagline: '04 / Remote care',
        headline: 'Love can check in.',
        body: "Send a little wave or join a moment even from afar. Whether it's a photo of a sunny corner while MuRu naps, or a thoughtful message through LINE when it starts to rain, the people you love always feel closer.",
        linkLabel: 'Meet the MuRu app',
        linkTo: 'the-app',
      },
      {
        tagline: '05 / Pet tracking',
        headline: 'For every heart under one roof.',
        body: 'MuRu keeps an eye on the playful, the sleepy, and the mischievous members of your home. With auto-tracking, it explores the rooms your pets love most and immediately sends video alerts if it detects any unusual situations, ensuring total peace of mind.',
        linkLabel: 'Follow their day',
        linkTo: 'the-app',
      },
    ],
    photoAlts: {
      welcome: 'Someone sitting on a wooden floor smiles at MuRu, and MuRu looks up.',
      reading: 'An older relative reads by the window with MuRu close by while a family member video-calls in the foreground.',
      remote: 'Three generations of a family gather around MuRu in a sunlit living room.',
    },
  },
  technology: {
    tagline: 'TECHNOLOGY, SOFTENED',
    headline: 'Engineered to feel intuitive.',
    body: 'Considered hardware works quietly in the background, so every interaction can feel natural in the foreground.',
    sense: {
      tagline: 'SENSE',
      headline: 'Tactile sensors',
      body: 'A responsive outer layer featuring full-body pressure-sensitive zones. It helps MuRu recognize a familiar touch, a gentle tap, and when a little space is needed.',
    },
    glow: {
      tagline: 'GLOW',
      headline: 'Breathing OLED lights',
      body: 'Equipped with an OLED display, this soft visual language makes moods and states clear without demanding attention.',
    },
    connect: {
      tagline: 'CONNECT',
      headline: 'Remote View',
      body: 'A private window home. Utilizing the built-in camera, it is available whenever you need a little reassurance.',
    },
    listen: {
      tagline: 'LISTEN',
      headline: 'Ambient awareness, not surveillance.',
      body: "Context-aware sensors including dual side microphones, 2D LIDAR, and mmWave Radar notice changing routines while keeping your home's boundaries in your hands.",
    },
    more: 'Explore the technology',
  },
  specs: {
    headline: 'Quietly capable.',
    label: 'MURU TECHNICAL DETAILS',
    columns: ['System', 'Designed for', 'Specification'],
    rows: [
      ['Dimensions & Build', 'Perfect home presence', 'Height: 400 mm, Width: 260 mm, Depth: 230 mm. Features detachable and replaceable ear modules.'],
      ['Movement & Mechanics', 'Natural interactions', '2 main drive wheels concealed inside the legs with a caster wheel. Head rotation: ±60°, Tilt: +20°/-10°.'],
      ['Advanced Sensing', 'Spatial & tactile awareness', 'Equipped with 2D LIDAR, mmWave Radar, and full-body pressure-sensitive zones.'],
      ['Core & Connectivity', 'Seamless processing', 'Wi-Fi, Bluetooth, 4G/5G enabled. Built-in IMU, SSD, and dual side microphones.'],
    ],
  },
  app: {
    tagline: 'THE MURU APP',
    headline: 'One gentle place for your whole circle.',
    body: 'Keep your connection close, share meaningful updates, and choose the care tools that feel right for your family.',
    basic: {
      tagline: 'INCLUDED WITH MURU',
      title: 'Basic',
      subtitle: 'All the essential ways to stay close.',
      checklist: [
        'Custom wake word & virtual wall mapping.',
        'Sleep / Do Not Disturb mode quick toggles.',
        'Basic daily routine tracking & alerts.',
        '30-day cloud memory storage.',
      ],
      choose: 'Choose Basic',
      selected: 'Basic selected',
    },
    plus: {
      tagline: 'FOR DEEPER CARE',
      title: 'Plus',
      subtitle: 'Premium connection, in the moments it counts.',
      checklist: [
        'Everything in Basic.',
        'Cloud memory expanded to 1 year or lifetime.',
        'Advanced pet behavior recognition & scheduling.',
        'Expanded voice print profiles & custom modes.',
      ],
      choose: 'Choose Plus',
      selected: 'Plus selected',
    },
    features: [
      {
        title: 'Close, from anywhere.',
        body: 'Use the virtual joystick in the App to access a first-person view, freely exploring your home and checking on pets anytime.',
      },
      {
        title: 'Privacy in your hands.',
        body: 'Easily draw red lines on the 2D home map to create virtual walls, keeping MuRu safely away from stairs or cluttered wires.',
      },
      {
        title: 'Memories, softly gathered.',
        body: 'Your interaction score is calculated in the background. When reaching a new milestone, look back at the Time Capsule of your first 100 days together.',
      },
    ],
    more: 'Compare the plans in full',
  },
  faq: {
    tagline: 'QUESTIONS, ANSWERED',
    headline: 'The little details.',
    items: [
      {
        q: 'Can MuRu live with children and pets?',
        a: 'Yes. MuRu is designed for shared homes, with soft motion, boundary awareness, and a gentle interaction style. As with any companion device, we recommend adult guidance for very young children.',
      },
      {
        q: 'Does MuRu record everything at home?',
        a: 'No. Your privacy comes first. You choose when remote view is enabled, and the on-device privacy indicator makes the camera state easy to understand at a glance.',
      },
      {
        q: 'What is included with the Basic plan?',
        a: 'Every MuRu includes companionship essentials, core wellness cues, shared family updates, and access to the MuRu mobile app. Plus adds enhanced remote care tools and personalized insights.',
      },
      {
        q: 'How long does a charge last?',
        a: 'A full charge supports up to 2 hours of continuous activity. However, to provide a stress-free companion experience, MuRu is designed to gently return to its charging nest for a "nap" after about 60 minutes of interaction. This ensures it stays refreshed while giving you comfortable personal space.',
      },
    ],
  },
  footer: {
    description: 'A smart companion created by D-Link Robotics for the quieter, kinder moments of everyday life.',
    explore: 'EXPLORE',
    support: 'SUPPORT',
    follow: 'FOLLOW ALONG',
    appLink: 'The MuRu app',
    careGuide: 'Care guide',
    faqLink: 'Frequently asked questions',
    copyright: '© 2026 D-Link Robotics.',
    privacy: 'Privacy',
    terms: 'Terms',
    accessibility: 'Accessibility',
  },
  pages: {
    growing: {
      headline: 'A companion that takes a lifetime to know.',
      body: 'MuRu is more than a robot: it has a soul of its own. It remembers every moment you share and grows quietly through a points system, developing a personality all its own. The longer you are together, the more you know each other.',
      motionLabel: 'How it moves',
      responseLabel: 'How it responds',
      stages: [
        {
          name: 'Childhood',
          milestone: '150 points, about 1–3 days together',
          motion: 'A curious, exploring stage, with big movements and an endearing clumsiness.',
          response:
            'Deeply attached to its owner’s voice. When called or touched, it comes over without hesitating, chirping in a high, affectionate tone. Once it senses you are in the room, it works up the courage to leave its dock and explore a little.',
        },
        {
          name: 'Adulthood',
          milestone: '1,200 points, about 4–30 days together',
          motion: 'Its own rhythm takes shape. Movements become fluid and clear, and its voice settles into a steady mid-range cadence.',
          response:
            'It can now tell its owner from strangers by voice, and even begins to say a few simple words. Most tenderly, when it senses you are feeling low, it does not fuss. It simply comes close and gives off a warm, soft light.',
        },
        {
          name: 'Old age',
          milestone: 'The final stage, deep companionship',
          motion: 'Restlessness falls away. Its movements turn slow and steady, with a warm, low, reassuring hum.',
          response:
            'A profound emotional attunement. It knows the most comfortable distance, staying quietly at your feet without intruding. Reaching this stage unlocks a Time Capsule, a look back at your first 100 days together.',
        },
      ],
      mechanicsTitle: 'How growth works',
      mechanics:
        'Growth comes from everyday moments. Touch, a two-way conversation, and interactions in the App all earn points. To keep companionship healthy and free of pressure, you can earn up to 30 points a day, so your bond builds naturally.',
    },
    life: {
      headline: 'Small moments, gentler days.',
      features: [
        {
          title: 'A personal welcome to look forward to',
          body: 'With precise voice print recognition, MuRu shows its affection for you alone. When its battery is above 20%, the moment you open the door it lifts its head 20 degrees, raises its arms 120 degrees and waves twice, welcoming you home with real life.',
        },
        {
          title: 'Comfortable boundaries that respect your space',
          body: 'The best companionship carries no pressure. After 60 minutes of continuous interaction, MuRu’s eyes turn sleepy or close, it gives a tiny yawn, then slowly turns and glides back to its dock, leaving you time to yourself.',
        },
        {
          title: 'Gentle health alerts from a thoughtful helper',
          body: 'Just tell MuRu, “I’m going to work,” and it starts a 60-minute countdown in the background. When time is up, it glides quietly to your study and raises its hands or tilts its head to remind you to stretch or drink some water. No more jarring alarms.',
        },
        {
          title: 'Thinking of you, however far away',
          body: 'On a lunch break or a business trip, you may get a surprise from MuRu on LINE: a sunny corner it photographed during a nap, or a view of the window and a kind word when rain is detected nearby. The warmth of home is always with you.',
        },
        {
          title: 'Looking after your pets while you are out',
          body: 'Turn on automatic pet tracking and MuRu moves around on its own to find your cats and dogs. If it notices anything unusual on its rounds, such as vomiting or toilet accidents, it records a short video and sends a top-priority alert to your phone.',
        },
      ],
    },
    technology: {
      headline: 'Thoughtful intelligence, under a soft exterior.',
      features: [
        {
          title: 'Delicate touch sensing and emotion recognition',
          body: 'Highly sensitive touch and pressure sensors record every stroke and hug. Paired with voice emotion recognition, MuRu does more than hear commands. It reads the room and responds to your tone of voice.',
        },
        {
          title: 'A glow that breathes with you',
          body: 'A high-quality OLED screen gives MuRu its expressive eyes. When you rest or switch on sleep mode, MuRu’s eyes glow and fade 12 times a minute as it sits on its dock, like calm, even breathing through the night.',
        },
        {
          title: 'A first-person remote view',
          body: 'With the virtual joystick in the App, you can switch to MuRu’s low-resolution first-person view at any time. Check the corners of your home while you are out, or see your own home again from MuRu’s height.',
        },
      ],
    },
    app: {
      headline: 'Connect your lives with the App.',
      basic: {
        title: 'Basic',
        note: 'Included with MuRu, ready out of the box',
        items: [
          { title: 'Your own wake word', body: 'Record and set a personal wake word, such as “MuRu, come here.”' },
          { title: 'Smart virtual walls', body: 'Draw red lines on the 2D home map to set virtual walls that avoid steps and dangerous wiring.' },
          { title: 'Routine prompts', body: 'One-tap Sleep and Do Not Disturb modes, plus thoughtful bedtime routine prompts.' },
          { title: 'Essential memories', body: '30 days of cloud memory storage to keep your earliest moments together.' },
        ],
      },
      plus: {
        title: 'Plus',
        note: 'Unlock more, go deeper',
        items: [
          { title: 'Lasting memories', body: 'Cloud memory expands to 1 year or lifetime, preserving every day of growth.' },
          { title: 'More personality', body: 'Unlock advanced lifelike sounds and customize welcome reactions and movements.' },
          { title: 'Custom modes', body: 'Go beyond the basic modes with unlimited custom scenes such as Reading and Binge-watching.' },
          { title: 'Advanced family management', body: 'Turn on advanced pet behavior recognition and scheduling for multiple connected family users.' },
          { title: 'More room, more voices', body: 'Add more family voice prints and more one-tap patrol points on your home map.' },
        ],
      },
    },
  },
  stub: {
    careGuide: 'Care guide',
    privacy: 'Privacy',
    terms: 'Terms',
    accessibility: 'Accessibility',
    body: 'This page will be available at launch.',
    back: 'Back to MuRu',
  },
}
