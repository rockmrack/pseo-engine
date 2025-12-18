// ============================================================================
// PSEO ENGINE - PROBLEM-SOLUTION DATABASE
// Targeting informational searches: "radiator not heating up"
// 5x SEO Domination - Strategy 3
// ============================================================================

export interface ProblemPage {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: 'plumbing' | 'electrical' | 'heating' | 'structural' | 'damp' | 'general';
  urgency: 'emergency' | 'urgent' | 'routine';
  
  // Content
  problem: {
    description: string;
    commonCauses: string[];
    warningSignsTitle: string;
    warningSigns: string[];
    riskIfIgnored: string;
  };
  
  diagnosis: {
    title: string;
    steps: {
      step: number;
      title: string;
      description: string;
      safetyNote?: string;
    }[];
    whenToCallPro: string[];
  };
  
  solutions: {
    diyPossible: boolean;
    diyDifficulty?: 'easy' | 'moderate' | 'difficult';
    diySteps?: string[];
    professionalSolution: string;
    typicalCost: string;
    timeToFix: string;
  };
  
  prevention: {
    title: string;
    tips: string[];
  };
  
  faqs: {
    question: string;
    answer: string;
  }[];
  
  relatedProblems: string[];
  relatedServices: string[];
}

export const problemPages: ProblemPage[] = [
  // ============================================================================
  // PLUMBING PROBLEMS
  // ============================================================================
  {
    slug: 'radiator-not-heating-up',
    title: 'Radiator Not Heating Up',
    metaTitle: 'Radiator Not Heating Up? Causes & Fixes | Expert Guide',
    metaDescription: 'Radiator cold or not heating properly? Our expert guide explains common causes and fixes. From DIY bleeding to when you need a professional.',
    category: 'heating',
    urgency: 'routine',
    
    problem: {
      description: 'One or more radiators in your home aren\'t heating up properly, staying cold while others work normally. This is one of the most common heating issues in North London homes.',
      commonCauses: [
        'Trapped air in the radiator (most common)',
        'Sludge buildup blocking water flow',
        'Thermostatic valve stuck or faulty',
        'Balance issue in the heating system',
        'Pump pressure too low',
        'Radiator valve closed accidentally',
      ],
      warningSignsTitle: 'Signs Your Radiator Needs Attention',
      warningSigns: [
        'Radiator cold at the top, warm at bottom (trapped air)',
        'Radiator warm at top, cold at bottom (sludge)',
        'Radiator completely cold (valve or system issue)',
        'Radiator makes gurgling or bubbling noises',
        'Other radiators in the house work fine',
        'Radiator takes much longer to heat up than others',
      ],
      riskIfIgnored: 'A cold radiator means you\'re paying to heat water that isn\'t warming your room. Over time, sludge buildup can spread to other radiators and damage your boiler.',
    },
    
    diagnosis: {
      title: 'How to Diagnose Your Cold Radiator',
      steps: [
        {
          step: 1,
          title: 'Check Both Valves Are Open',
          description: 'Locate the valves at each end of the radiator. The thermostatic valve (TRV) should be set to a number, not 0. The lockshield valve (covered with a plastic cap) should be open - turn anticlockwise to open.',
        },
        {
          step: 2,
          title: 'Feel Where It\'s Cold',
          description: 'Carefully feel the radiator when heating is on. Cold at top = air. Cold at bottom = sludge. Cold throughout = valve or system issue.',
          safetyNote: 'Radiators can be very hot. Touch carefully.',
        },
        {
          step: 3,
          title: 'Check Other Radiators',
          description: 'If all radiators are cold, it\'s likely a boiler or pump issue. If just one or two, it\'s radiator-specific.',
        },
        {
          step: 4,
          title: 'Listen for Noises',
          description: 'Gurgling suggests trapped air. Banging might indicate water hammer. Silence when expecting heating may mean no flow.',
        },
      ],
      whenToCallPro: [
        'Bleeding doesn\'t solve the problem',
        'Multiple radiators are affected',
        'You suspect sludge buildup',
        'The TRV appears stuck or broken',
        'The problem returns repeatedly',
        'You\'re not confident with DIY',
      ],
    },
    
    solutions: {
      diyPossible: true,
      diyDifficulty: 'easy',
      diySteps: [
        'Turn off your heating and wait 30 minutes for radiators to cool',
        'Locate the bleed valve at the top corner of the radiator',
        'Place a cloth underneath to catch water drips',
        'Use a radiator key (available at hardware stores for ~£1) to turn the valve anticlockwise',
        'You\'ll hear a hissing sound as air escapes - this is normal',
        'Once water starts dripping (no more air), close the valve quickly',
        'Check your boiler pressure (should be 1-1.5 bar) and top up if needed',
        'Turn heating back on and check if radiator heats evenly',
      ],
      professionalSolution: 'If bleeding doesn\'t work, we\'ll diagnose and fix the underlying issue - this might involve clearing sludge with a power flush, replacing a stuck TRV, or rebalancing your system.',
      typicalCost: 'DIY: ~£5 for a radiator key. Professional: £75-£150 for valve/balancing. Power flush: £300-£500',
      timeToFix: 'DIY bleeding: 10-15 minutes. Professional visit: 1-2 hours',
    },
    
    prevention: {
      title: 'How to Prevent Cold Radiators',
      tips: [
        'Bleed radiators annually before winter',
        'Add inhibitor to your system (ask during annual boiler service)',
        'Consider a power flush every 5-10 years',
        'Don\'t let radiators go unused for long periods',
        'Install a magnetic filter (MagnaClean) to catch sludge',
        'Get annual boiler servicing - engineers check system health',
      ],
    },
    
    faqs: [
      {
        question: 'Why do I need to keep bleeding the same radiator?',
        answer: 'Recurring air usually means a system issue: a leak somewhere letting air in, a faulty auto air vent, or hydrogen gas from corrosion (indicating sludge). A professional should investigate.',
      },
      {
        question: 'What is a power flush and do I need one?',
        answer: 'A power flush forces high-velocity water through your system to remove sludge. Signs you need one: multiple cold radiators, black water when bleeding, boiler making noise. Cost: £300-£500 for typical home.',
      },
      {
        question: 'Can a cold radiator damage my boiler?',
        answer: 'Indirectly, yes. Sludge that blocks radiators can circulate to your boiler, blocking the heat exchanger and causing breakdowns. Fixing radiator issues protects your boiler.',
      },
      {
        question: 'Should I replace old radiators?',
        answer: 'If radiators are old, corroded, or inefficient, replacement can improve heating performance and reduce bills. Modern radiators heat up faster and look better. We can advise during a service visit.',
      },
    ],
    
    relatedProblems: ['boiler-losing-pressure', 'no-hot-water', 'heating-not-coming-on'],
    relatedServices: ['radiator-installation', 'power-flush', 'heating-system', 'boiler-service'],
  },

  {
    slug: 'leaking-tap',
    title: 'Leaking or Dripping Tap',
    metaTitle: 'Leaking Tap? How to Fix or When to Call a Plumber | Expert Guide',
    metaDescription: 'Dripping tap driving you mad? Learn DIY fixes and when to call a plumber. North London plumbing experts explain causes and solutions.',
    category: 'plumbing',
    urgency: 'routine',
    
    problem: {
      description: 'A dripping tap wastes water (up to 5,500 litres per year!), increases bills, and the constant drip can be maddening. The good news: it\'s usually an easy fix.',
      commonCauses: [
        'Worn washer (most common cause)',
        'Damaged O-ring',
        'Corroded valve seat',
        'Worn ceramic disc (in mixer taps)',
        'High water pressure damaging seals',
        'Limescale buildup in hard water areas',
      ],
      warningSignsTitle: 'Signs of Tap Problems',
      warningSigns: [
        'Constant drip when tap is fully closed',
        'Water dripping from base of tap',
        'Tap difficult to turn',
        'Tap handle feels loose',
        'Squeaking noise when turning tap',
        'Water coming from behind the tap',
      ],
      riskIfIgnored: 'A dripping tap wastes up to 5,500 litres of water per year - that\'s around £18 on a metered bill. The drip can also cause staining and limescale buildup in sinks.',
    },
    
    diagnosis: {
      title: 'Diagnosing Your Dripping Tap',
      steps: [
        {
          step: 1,
          title: 'Identify Tap Type',
          description: 'Traditional taps have separate hot/cold handles and use washers. Mixer taps with single lever usually have ceramic cartridges. This affects the repair approach.',
        },
        {
          step: 2,
          title: 'Locate the Drip',
          description: 'Dripping from spout when closed = washer or cartridge. Dripping from base = O-ring. Dripping from behind = supply connection.',
        },
        {
          step: 3,
          title: 'Check Both Taps',
          description: 'If both hot and cold drip (on traditional taps), both washers likely need replacing. Single handle mixers only need one cartridge.',
        },
      ],
      whenToCallPro: [
        'You\'re not confident isolating the water supply',
        'It\'s a mixer tap with complex cartridge',
        'The tap is old and parts may be seized',
        'Water is leaking behind the tap (supply issue)',
        'You want the tap replaced entirely',
        'Multiple taps have problems',
      ],
    },
    
    solutions: {
      diyPossible: true,
      diyDifficulty: 'moderate',
      diySteps: [
        'Turn off water supply at isolation valve under sink or main stopcock',
        'Turn tap on to release residual water',
        'Remove decorative cap on handle and unscrew handle',
        'Use an adjustable spanner to remove the headgear (inner mechanism)',
        'Remove old washer and replace with new one (available at hardware stores)',
        'Reassemble in reverse order',
        'Turn water back on and test',
      ],
      professionalSolution: 'We carry a range of washers, O-rings, and cartridges. For mixer taps or if parts are seized, professional service is faster and avoids potential damage.',
      typicalCost: 'DIY: £2-£10 for washer/O-ring. Professional: £60-£120 including parts. New tap installation: £120-£250',
      timeToFix: 'DIY: 30-60 minutes. Professional: 20-30 minutes',
    },
    
    prevention: {
      title: 'How to Extend Tap Life',
      tips: [
        'Don\'t overtighten taps when closing - this damages washers',
        'In hard water areas (like London), clean limescale from aerators',
        'Replace washers at first sign of dripping - delays make it worse',
        'Consider upgrading to ceramic disc taps - they last longer',
        'If water pressure is very high, consider a pressure reducing valve',
      ],
    },
    
    faqs: [
      {
        question: 'How much water does a dripping tap waste?',
        answer: 'A tap dripping once per second wastes about 5,500 litres per year. At London water rates, that\'s around £18 annually on a metered supply - plus the environmental impact.',
      },
      {
        question: 'Should I replace or repair an old tap?',
        answer: 'If the tap is over 15-20 years old, corroded, or needs frequent repairs, replacement is often better value. Modern taps use ceramic cartridges that last much longer than rubber washers.',
      },
      {
        question: 'Can I fix a mixer tap myself?',
        answer: 'Mixer taps are more complex than traditional taps. The cartridge replacement requires specific parts for your tap model. If you can identify the make/model and source parts, DIY is possible. Otherwise, call us.',
      },
      {
        question: 'Why does my tap still drip after changing the washer?',
        answer: 'Possible causes: wrong size washer, damaged valve seat (requires reseating), or the tap needs O-rings as well as washers. Persistent drips after washer changes need professional diagnosis.',
      },
    ],
    
    relatedProblems: ['low-water-pressure', 'blocked-sink', 'running-toilet'],
    relatedServices: ['plumbing-repairs', 'tap-installation', 'bathroom-plumbing'],
  },

  {
    slug: 'blocked-drain',
    title: 'Blocked Drain',
    metaTitle: 'Blocked Drain? How to Unblock & When to Call for Help | Expert Tips',
    metaDescription: 'Drain blocked? Learn DIY solutions and when to call a professional. From simple plunger fixes to when you need drainage experts in North London.',
    category: 'plumbing',
    urgency: 'urgent',
    
    problem: {
      description: 'A blocked drain causes water to back up, bad smells, and potential flooding. Whether it\'s a blocked sink, shower, or outside drain, quick action prevents worse problems.',
      commonCauses: [
        'Hair and soap scum (bathroom drains)',
        'Grease and food waste (kitchen sinks)',
        'Wet wipes and sanitary products (toilets)',
        'Tree roots growing into pipes (external)',
        'Limescale buildup narrowing pipes',
        'Collapsed or damaged pipe',
        'Foreign objects flushed down',
      ],
      warningSignsTitle: 'Signs of Drain Problems',
      warningSigns: [
        'Water draining slowly',
        'Gurgling sounds when water drains',
        'Bad smells from drains',
        'Water backing up in sink/shower/bath',
        'Multiple fixtures draining slowly (indicates main drain)',
        'Outside drain overflowing',
        'Damp patches near drain runs',
      ],
      riskIfIgnored: 'Ignored blockages worsen and can cause flooding, sewage backup, and expensive damage. Outside drain blockages can back up into your home. Act quickly on slow drains.',
    },
    
    diagnosis: {
      title: 'Identifying Your Blockage',
      steps: [
        {
          step: 1,
          title: 'Identify Which Drain',
          description: 'Single fixture (sink only) = localised blockage. Multiple fixtures = main drain issue. Outside drain = likely external blockage.',
        },
        {
          step: 2,
          title: 'Listen and Look',
          description: 'Gurgling from other fixtures when one drains indicates shared drainage issue. Check outside drains for standing water.',
        },
        {
          step: 3,
          title: 'Check Outside Drains',
          description: 'Lift manhole covers (carefully!) to see if water is backed up. If so, blockage is downstream. If dry, blockage is between house and that point.',
          safetyNote: 'Wear gloves. Be careful of confined space gases.',
        },
      ],
      whenToCallPro: [
        'Plunging and drain cleaner don\'t work',
        'Multiple drains are blocked',
        'Outside drains are backing up',
        'You suspect tree root intrusion',
        'There\'s a bad smell you can\'t locate',
        'Sewage is backing up into home',
        'Blockages recur frequently',
      ],
    },
    
    solutions: {
      diyPossible: true,
      diyDifficulty: 'easy',
      diySteps: [
        'Try a plunger first - create a seal and pump vigorously',
        'Remove and clean the trap (U-bend) under sinks - have a bucket ready!',
        'Pour boiling water to clear grease (kitchen sinks only)',
        'Try a drain snake for stubborn blockages (available at hardware stores)',
        'Enzyme-based drain cleaners can help maintain clear drains',
        'Never mix chemical cleaners - dangerous fumes',
      ],
      professionalSolution: 'We use CCTV drain cameras to locate blockages precisely, then clear with high-pressure water jetting. For damaged pipes, we can repair or reline without excavation.',
      typicalCost: 'DIY: £5-£30 for plunger/snake. Professional drain clearing: £80-£150. CCTV survey: £150-£250. Drain repair: £200-£1000+',
      timeToFix: 'DIY: 15-30 minutes if successful. Professional: 1-2 hours typical',
    },
    
    prevention: {
      title: 'Preventing Blocked Drains',
      tips: [
        'Never pour grease down sinks - collect in jar and bin it',
        'Use drain guards to catch hair in showers',
        'Don\'t flush wet wipes - even "flushable" ones cause blockages',
        'Run hot water after using kitchen sink',
        'Monthly enzyme cleaner keeps drains clear',
        'Have outside drains inspected if near trees',
        'Don\'t plant trees near drain runs',
      ],
    },
    
    faqs: [
      {
        question: 'Why do wet wipes block drains?',
        answer: 'Even "flushable" wet wipes don\'t break down like toilet paper. They snag on pipe joints and build up, combining with grease to form "fatbergs". Bin all wipes - never flush them.',
      },
      {
        question: 'What causes recurring blockages?',
        answer: 'Recurring blockages suggest: damaged/displaced pipe, tree root intrusion, or accumulated scale. A CCTV survey (£150-£250) identifies the cause and guides permanent solutions.',
      },
      {
        question: 'Are chemical drain cleaners safe?',
        answer: 'Occasional use is fine, but they can damage old pipes and aren\'t effective on serious blockages. Enzyme cleaners are gentler for regular maintenance. Never mix different chemicals.',
      },
      {
        question: 'Who is responsible for blocked drains?',
        answer: 'You\'re responsible for drains within your property boundary. Shared drains and sewers beyond your boundary are usually Thames Water\'s responsibility. We can advise on this.',
      },
    ],
    
    relatedProblems: ['slow-draining-sink', 'toilet-wont-flush', 'bad-smell-from-drain'],
    relatedServices: ['drain-unblocking', 'drainage', 'cctv-drain-survey', 'plumbing-repairs'],
  },

  {
    slug: 'boiler-losing-pressure',
    title: 'Boiler Losing Pressure',
    metaTitle: 'Boiler Losing Pressure? Causes, Fixes & When to Worry | Expert Guide',
    metaDescription: 'Boiler pressure keeps dropping? Learn why, how to top up safely, and when you need a Gas Safe engineer. North London heating experts.',
    category: 'heating',
    urgency: 'urgent',
    
    problem: {
      description: 'Your boiler pressure gauge shows pressure below 1 bar, or keeps dropping and needs frequent topping up. This affects heating and hot water performance.',
      commonCauses: [
        'Small leak somewhere in the system (most common)',
        'Recently bled radiators',
        'Faulty pressure relief valve',
        'Expansion vessel needs recharging',
        'Leak at radiator valve or fitting',
        'Microleaks invisible to the eye',
        'System hasn\'t been topped up after work',
      ],
      warningSignsTitle: 'Signs of Pressure Problems',
      warningSigns: [
        'Pressure gauge below 1 bar (or in red zone)',
        'Boiler lockout with low pressure error code',
        'Need to top up pressure more than twice a year',
        'Visible leaks at radiators or pipes',
        'Wet patches appearing under boiler',
        'Water staining on ceilings (leak in system)',
        'Hearing filling loop running when it shouldn\'t',
      ],
      riskIfIgnored: 'Persistent low pressure indicates a leak somewhere, causing ongoing water damage and potentially serious problems. The boiler will eventually stop working entirely.',
    },
    
    diagnosis: {
      title: 'Diagnosing Pressure Loss',
      steps: [
        {
          step: 1,
          title: 'Check the Pressure Gauge',
          description: 'Normal operating pressure is 1-1.5 bar when cold, rising to 2 bar when hot. Below 1 bar = needs topping up. Above 3 bar = overpressured.',
        },
        {
          step: 2,
          title: 'Inspect for Visible Leaks',
          description: 'Check all radiator valves, pipe connections, and under the boiler. Look for drips, staining, or green corrosion marks.',
        },
        {
          step: 3,
          title: 'Check the Pressure Relief Pipe',
          description: 'Find the copper pipe exiting through your wall from the boiler. If it\'s wet or has white limescale marks, the PRV may be discharging.',
          safetyNote: 'Don\'t interfere with the PRV - it\'s a safety device.',
        },
        {
          step: 4,
          title: 'Note How Often You Top Up',
          description: 'Once after bleeding radiators is normal. Monthly topping up suggests a small leak. Weekly suggests a significant leak.',
        },
      ],
      whenToCallPro: [
        'Topping up more than twice per year',
        'You can\'t find any visible leak',
        'Pressure drops rapidly (hours not weeks)',
        'Water is dripping from the boiler itself',
        'Boiler is showing error codes',
        'You\'re uncomfortable using the filling loop',
        'The problem started after recent work',
      ],
    },
    
    solutions: {
      diyPossible: true,
      diyDifficulty: 'easy',
      diySteps: [
        'Locate the filling loop (flexible braided hose under or near boiler)',
        'Ensure both filling loop valves are fully closed',
        'Watch the pressure gauge',
        'Slowly open one valve, then the other',
        'Watch pressure rise to 1.5 bar (no higher)',
        'Close both valves firmly',
        'If external filling loop, disconnect one end after topping up',
      ],
      professionalSolution: 'We\'ll pressure test the system to find leaks, check the expansion vessel, and inspect the PRV. For hidden leaks, we use thermal imaging and specialist detection.',
      typicalCost: 'DIY top-up: Free. Professional leak finding: £80-£150. Leak repair: £100-£300. Expansion vessel: £150-£300',
      timeToFix: 'Top-up: 5 minutes. Professional diagnosis: 1-2 hours',
    },
    
    prevention: {
      title: 'Maintaining Boiler Pressure',
      tips: [
        'Check pressure monthly - catch drops early',
        'After bleeding radiators, top up pressure',
        'Annual boiler service includes pressure system check',
        'Don\'t ignore small leaks - they worsen',
        'Have expansion vessel checked every few years',
        'Use inhibitor to prevent internal corrosion',
      ],
    },
    
    faqs: [
      {
        question: 'How often should I need to top up boiler pressure?',
        answer: 'A healthy sealed system should rarely need topping up - maybe once or twice a year after bleeding radiators. More frequent top-ups indicate a leak.',
      },
      {
        question: 'What is an expansion vessel?',
        answer: 'The expansion vessel absorbs pressure increase when water heats up. If its internal diaphragm fails or it loses charge, pressure fluctuates wildly. Recharging costs £80-£150; replacement £150-£300.',
      },
      {
        question: 'Can I find hidden leaks myself?',
        answer: 'Check visible pipework and under radiators. Hidden leaks under floors often show as damp patches or warped boards. Thermal imaging cameras can locate hidden leaks precisely - we offer this service.',
      },
      {
        question: 'My boiler shows F1 error - what does this mean?',
        answer: 'F1 on most boilers indicates low pressure lockout. Top up pressure to 1.5 bar and reset the boiler. If it locks out again quickly, call us to find the leak.',
      },
    ],
    
    relatedProblems: ['radiator-not-heating-up', 'no-hot-water', 'boiler-making-noise'],
    relatedServices: ['boiler-repair', 'boiler-service', 'leak-detection', 'heating-system'],
  },

  // ============================================================================
  // ELECTRICAL PROBLEMS
  // ============================================================================
  {
    slug: 'lights-flickering',
    title: 'Lights Flickering',
    metaTitle: 'Lights Flickering? Causes & When to Call an Electrician | Safety Guide',
    metaDescription: 'Flickering lights can be simple or serious. Learn what causes it and when you need an electrician. North London electrical safety experts.',
    category: 'electrical',
    urgency: 'urgent',
    
    problem: {
      description: 'Lights flickering occasionally might be nothing, but persistent flickering can indicate serious electrical problems requiring immediate attention.',
      commonCauses: [
        'Loose bulb or poor bulb contact',
        'Faulty light switch',
        'Loose wiring connections',
        'Overloaded circuit',
        'Voltage fluctuations from grid',
        'Faulty dimmer switch compatibility',
        'Failing light fixture',
        'Serious: arcing in wiring',
      ],
      warningSignsTitle: 'When Flickering Is Serious',
      warningSigns: [
        'Flickering with burning smell - URGENT',
        'Flickering increases when using appliances',
        'Multiple lights/circuits flickering',
        'Flickering accompanied by buzzing',
        'Scorch marks around switches or sockets',
        'Lights dim significantly when large appliances run',
        'Flickering started after DIY work',
      ],
      riskIfIgnored: 'Flickering from loose connections can cause arcing - electrical sparks that generate extreme heat. This is a leading cause of electrical fires. Don\'t ignore persistent flickering.',
    },
    
    diagnosis: {
      title: 'Diagnosing Flickering Lights',
      steps: [
        {
          step: 1,
          title: 'Test the Bulb',
          description: 'Tighten the bulb, or try a new bulb. If flickering stops, problem solved. If LED, ensure it\'s compatible with any dimmer switch.',
        },
        {
          step: 2,
          title: 'Check How Many Lights Affected',
          description: 'Single light = likely bulb/fitting issue. Multiple lights on one circuit = circuit problem. Whole house = main supply issue.',
        },
        {
          step: 3,
          title: 'Note When It Happens',
          description: 'Random flickering = loose connection. Flickers when appliance starts = overloaded circuit. Constant flicker = failing component.',
        },
        {
          step: 4,
          title: 'Check for Warning Signs',
          description: 'Smell for burning, look for scorch marks, feel if switches are hot. Any of these = turn off circuit and call electrician immediately.',
          safetyNote: 'If you smell burning or see scorching, turn off the circuit at the consumer unit and call us.',
        },
      ],
      whenToCallPro: [
        'Burning smell from any electrical fitting',
        'Multiple circuits affected',
        'Scorch marks visible',
        'Switches or sockets feel hot',
        'Flickering when appliances run',
        'The problem persists after changing bulbs',
        'Your wiring is pre-1970s',
      ],
    },
    
    solutions: {
      diyPossible: true,
      diyDifficulty: 'easy',
      diySteps: [
        'Turn off light and let bulb cool',
        'Tighten bulb securely',
        'Try a new bulb of same type',
        'If LED with dimmer, try non-dimmable LED or check dimmer compatibility',
        'Check the lamp/fixture for loose connections if visible',
        'For anything beyond this, call an electrician',
      ],
      professionalSolution: 'We\'ll test circuits with professional meters, check connections at switches and fittings, and inspect your consumer unit. If wiring is suspect, we recommend an EICR.',
      typicalCost: 'New bulb: £2-£10. Professional callout: £80-£120. Switch replacement: £60-£100. Circuit investigation: £100-£200',
      timeToFix: 'Bulb change: 5 minutes. Professional diagnosis: 1-2 hours',
    },
    
    prevention: {
      title: 'Preventing Electrical Problems',
      tips: [
        'Use quality bulbs and avoid cheap imports',
        'Don\'t exceed fixture wattage ratings',
        'Have an EICR every 10 years (or when buying)',
        'Upgrade old wiring (pre-1970s) proactively',
        'Use LED-compatible dimmer switches with LEDs',
        'Don\'t ignore early warning signs',
      ],
    },
    
    faqs: [
      {
        question: 'Are flickering LED lights dangerous?',
        answer: 'LEDs can flicker due to incompatible dimmers or poor quality drivers - annoying but not usually dangerous. However, if LEDs that previously worked fine start flickering, investigate the cause.',
      },
      {
        question: 'Why do lights dim when I turn on the kettle?',
        answer: 'High-power appliances draw significant current on startup. Brief dimming is normal if circuits are shared. Significant dimming suggests your main supply or circuits are undersized for your usage.',
      },
      {
        question: 'Should I worry about occasional flickers?',
        answer: 'Occasional flickers (especially during storms or if neighbours are doing building work) can be grid-related. Persistent or worsening flickering needs investigation.',
      },
      {
        question: 'How old is dangerous wiring?',
        answer: 'Pre-1970s wiring (rubber or fabric insulated) is considered at end of life and should be replaced. 1970s-80s PVC wiring may have another 10-20 years but benefits from testing. Post-1990s should be fine with regular testing.',
      },
    ],
    
    relatedProblems: ['fuse-keeps-blowing', 'socket-not-working', 'burning-smell-electrical'],
    relatedServices: ['electrical-repairs', 'electrical-testing', 'consumer-unit', 'rewiring'],
  },

  {
    slug: 'fuse-keeps-blowing',
    title: 'Fuse or Circuit Breaker Keeps Tripping',
    metaTitle: 'Fuse Keeps Blowing? Why Breakers Trip & What to Do | Safety Guide',
    metaDescription: 'Circuit breaker keeps tripping? Learn common causes and when it\'s serious. Expert electrical advice from North London electricians.',
    category: 'electrical',
    urgency: 'urgent',
    
    problem: {
      description: 'Your RCD or MCB keeps tripping, cutting power to circuits. While annoying, this is a safety feature protecting you from electrical faults.',
      commonCauses: [
        'Overloaded circuit (too many appliances)',
        'Faulty appliance causing trip',
        'Water ingress to electrics',
        'Earth fault in wiring',
        'Worn or damaged cable insulation',
        'Faulty RCD or MCB',
        'Nuisance tripping (sensitive RCD)',
        'Outdoor electrics getting wet',
      ],
      warningSignsTitle: 'When Tripping Is Serious',
      warningSigns: [
        'Trips immediately upon reset - DO NOT keep trying',
        'Burning smell when circuit is on',
        'Trip happens with specific appliance',
        'Tripping becomes more frequent over time',
        'Water has entered electrical areas',
        'Trip happens after rain (outdoor circuit)',
        'Scorching visible on consumer unit',
      ],
      riskIfIgnored: 'Repeated tripping indicates a fault that the safety device is protecting you from. Ignoring it, or worse, bypassing the protection, risks fire and electrocution.',
    },
    
    diagnosis: {
      title: 'Finding What\'s Causing the Trip',
      steps: [
        {
          step: 1,
          title: 'Identify What Tripped',
          description: 'RCD (usually wider, may say 30mA) protects against earth faults. MCB (narrow, numbered) protects against overload. Note which one tripped.',
        },
        {
          step: 2,
          title: 'Unplug Everything on Circuit',
          description: 'If an MCB tripped, unplug all appliances on that circuit, then reset. If it stays on, a plugged appliance is the cause.',
        },
        {
          step: 3,
          title: 'Test Appliances One by One',
          description: 'Plug appliances back in one at a time. When the circuit trips, you\'ve found the faulty appliance.',
        },
        {
          step: 4,
          title: 'Check for Water',
          description: 'Has water entered the circuit? Check outdoor sockets, under-cabinet areas, or anywhere water could reach electrics.',
          safetyNote: 'Don\'t touch electrics if water is present. Call an electrician.',
        },
      ],
      whenToCallPro: [
        'Circuit trips immediately on reset',
        'Can\'t identify which appliance causes it',
        'RCD trips randomly (earth fault)',
        'Water has entered electrics',
        'Burning smell or scorching',
        'Tripping started after DIY work',
        'No obvious cause found',
      ],
    },
    
    solutions: {
      diyPossible: true,
      diyDifficulty: 'easy',
      diySteps: [
        'Don\'t repeatedly reset a breaker that keeps tripping',
        'Unplug all devices from the affected circuit',
        'Reset the breaker',
        'Plug devices back one at a time to find faulty one',
        'Faulty appliance: stop using it, get it repaired/replaced',
        'Overload: redistribute appliances to different circuits',
        'If no appliance found, call electrician',
      ],
      professionalSolution: 'We use insulation resistance testing and RCD testing to locate faults precisely. Common fixes include repairing damaged cables, replacing faulty RCDs, or upgrading circuits.',
      typicalCost: 'Appliance repair: varies. Electrician fault-finding: £100-£200. RCD replacement: £150-£250. Cable repair: £100-£300',
      timeToFix: 'DIY identification: 15-30 minutes. Professional diagnosis: 1-3 hours',
    },
    
    prevention: {
      title: 'Preventing Circuit Problems',
      tips: [
        'Don\'t overload circuits with extension leads',
        'Use correct fuses in plugs (3A for lamps, 13A for heaters)',
        'Protect outdoor electrics from water',
        'Replace old appliances with safety issues',
        'Have consumer unit upgraded if still has rewirable fuses',
        'Regular EICR testing catches problems early',
      ],
    },
    
    faqs: [
      {
        question: 'Why does my RCD trip but MCBs don\'t?',
        answer: 'The RCD detects earth faults (current leaking to earth) which MCBs don\'t monitor. This could be a faulty appliance, water in wiring, or deteriorating cable insulation. RCD trips need investigation.',
      },
      {
        question: 'Is it safe to keep resetting a tripped breaker?',
        answer: 'A few resets while investigating is fine. Repeatedly forcing a breaker that immediately trips is dangerous - you\'re trying to override a safety device. Stop and call an electrician.',
      },
      {
        question: 'Should I upgrade my fuse box?',
        answer: 'If you have an old fuse box with rewirable fuses, yes - upgrade to a modern consumer unit with RCDs and MCBs. Better protection and may be required for insurance. Cost: £400-£700.',
      },
      {
        question: 'Can humidity cause trips?',
        answer: 'Yes, especially in bathrooms without proper ventilation. Moisture can cause earth faults. Ensure bathroom extract fans work properly and electricals are IP-rated for wet areas.',
      },
    ],
    
    relatedProblems: ['lights-flickering', 'socket-not-working', 'power-cut'],
    relatedServices: ['electrical-repairs', 'consumer-unit', 'electrical-testing', 'rewiring'],
  },

  // ============================================================================
  // DAMP PROBLEMS
  // ============================================================================
  {
    slug: 'damp-on-walls',
    title: 'Damp Patches on Walls',
    metaTitle: 'Damp on Walls: Identify Type & Fix Properly | Expert Damp Guide',
    metaDescription: 'Damp patches on your walls? Learn to identify rising damp, penetrating damp, and condensation. North London damp treatment specialists.',
    category: 'damp',
    urgency: 'urgent',
    
    problem: {
      description: 'Damp patches on walls can indicate different problems: condensation (most common), penetrating damp from outside, or rising damp from below. Correct diagnosis is essential for effective treatment.',
      commonCauses: [
        'Condensation (most common - 80% of cases)',
        'Penetrating damp (rain getting through)',
        'Rising damp (moisture rising from ground)',
        'Plumbing leak behind wall',
        'Bridged damp proof course',
        'Blocked cavity in wall',
        'Failed pointing or rendering',
      ],
      warningSignsTitle: 'Identifying Your Damp Type',
      warningSigns: [
        'Condensation: on windows, cold walls, often in bathrooms/kitchens',
        'Penetrating: appears after rain, on external walls',
        'Rising: tide marks at low level, salt deposits',
        'Mould growth: black spots, musty smell',
        'Peeling wallpaper or bubbling paint',
        'Wet patches that come and go',
      ],
      riskIfIgnored: 'Untreated damp causes structural damage, destroys decorations, and creates health hazards through mould. Rising damp can damage timber floor joists. Address promptly.',
    },
    
    diagnosis: {
      title: 'Diagnosing Your Damp',
      steps: [
        {
          step: 1,
          title: 'Check Location',
          description: 'Damp at low level (under 1m) = possibly rising damp. Damp at any height on external wall = penetrating damp. Damp in bathroom/kitchen/bedroom = likely condensation.',
        },
        {
          step: 2,
          title: 'Note When It\'s Worst',
          description: 'Worse in winter/after rain = penetrating. Worse in cold weather with heating on = condensation. Constant regardless of weather = rising/structural.',
        },
        {
          step: 3,
          title: 'Look for Salt Deposits',
          description: 'White crystalline deposits at low level are a classic sign of rising damp - salts are carried up from the ground.',
        },
        {
          step: 4,
          title: 'Check Outside',
          description: 'Inspect external wall for cracked pointing, damaged render, leaking gutters, or anything allowing water in.',
        },
      ],
      whenToCallPro: [
        'You\'re unsure what type of damp it is',
        'Rising damp signs are present',
        'Damp is causing mould growth',
        'Structural damage is visible',
        'Condensation won\'t reduce with ventilation',
        'DIY fixes haven\'t worked',
        'You want a proper damp survey',
      ],
    },
    
    solutions: {
      diyPossible: true,
      diyDifficulty: 'moderate',
      diySteps: [
        'For condensation: improve ventilation, use extractor fans, reduce humidity sources',
        'Install trickle vents in windows',
        'Use a dehumidifier in problem rooms',
        'Heat home consistently (avoid cold spots)',
        'Check outside: repair obvious pointing/render damage',
        'Ensure gutters and downpipes aren\'t leaking onto walls',
        'Check soil level isn\'t above DPC',
      ],
      professionalSolution: 'We provide proper damp surveys to identify the true cause. Treatment depends on type: improving ventilation, external waterproofing, or DPC injection for genuine rising damp.',
      typicalCost: 'Damp survey: £150-£300. Condensation fixes: £200-£500. External pointing: £500-£1500. Rising damp treatment: £1500-£4000 per wall',
      timeToFix: 'Condensation management: ongoing. Professional repairs: 1-5 days depending on cause',
    },
    
    prevention: {
      title: 'Preventing Damp Problems',
      tips: [
        'Ensure good ventilation throughout home',
        'Use extract fans in bathrooms and kitchens',
        'Don\'t block air bricks or vents',
        'Keep gutters and downpipes clear',
        'Maintain pointing and render',
        'Don\'t pile soil above the DPC',
        'Open windows regularly to air rooms',
      ],
    },
    
    faqs: [
      {
        question: 'Is it rising damp or condensation?',
        answer: 'True rising damp is rare in homes built after 1930s (they have DPCs). Most "rising damp" diagnoses are actually condensation or penetrating damp. We provide honest assessments - many damp proofing companies have a vested interest in finding rising damp.',
      },
      {
        question: 'Why do I get more damp in winter?',
        answer: 'Cold walls create condensation when warm moist air meets them. In winter, we produce more moisture (drying clothes, cooking, breathing) while keeping windows closed. Better ventilation is usually the answer.',
      },
      {
        question: 'Will a damp survey tell me what\'s wrong?',
        answer: 'A good survey uses moisture meters, salt analysis, and investigation to correctly diagnose the issue. Beware free surveys from damp proofing companies - they may recommend unnecessary treatments.',
      },
      {
        question: 'Is mould dangerous?',
        answer: 'Yes, especially for people with asthma or allergies. Black mould (Stachybotrys) is particularly concerning. Mould indicates excess moisture - fix the cause, don\'t just clean the mould.',
      },
    ],
    
    relatedProblems: ['mould-in-bathroom', 'condensation-on-windows', 'musty-smell'],
    relatedServices: ['damp-proofing', 'ventilation', 'pointing', 'plastering'],
  },

  {
    slug: 'mould-in-bathroom',
    title: 'Mould in Bathroom',
    metaTitle: 'Bathroom Mould: Safe Removal & Prevention | Health Guide',
    metaDescription: 'Black mould in your bathroom? Learn safe removal methods and how to prevent it returning. North London damp and ventilation specialists.',
    category: 'damp',
    urgency: 'routine',
    
    problem: {
      description: 'Black mould in bathrooms is extremely common due to high humidity. It\'s unsightly, smells musty, and can trigger respiratory problems. The key is treating the cause, not just cleaning the mould.',
      commonCauses: [
        'Poor ventilation (no fan or fan inadequate)',
        'Showering/bathing without ventilation',
        'Leaking shower or bath seal',
        'Cold walls causing condensation',
        'Blocked extract fan',
        'No heating in bathroom',
        'Drying towels in bathroom',
      ],
      warningSignsTitle: 'Signs of Bathroom Mould',
      warningSigns: [
        'Black spots on ceiling corners',
        'Mould on silicone sealant around bath/shower',
        'Musty smell in bathroom',
        'Mould around windows',
        'Peeling paint on ceiling',
        'Black patches spreading on walls',
        'Mould returning shortly after cleaning',
      ],
      riskIfIgnored: 'Bathroom mould indicates excess moisture that can damage decorations and spread to other rooms. Mould spores affect air quality and health, especially for asthmatics.',
    },
    
    diagnosis: {
      title: 'Why Do You Have Bathroom Mould?',
      steps: [
        {
          step: 1,
          title: 'Check Your Extract Fan',
          description: 'Hold tissue paper to the fan - it should be pulled towards it when running. If no suction, fan is blocked or broken. No fan at all? That\'s likely your problem.',
        },
        {
          step: 2,
          title: 'Check Seals and Grout',
          description: 'Black mould on silicone indicates water getting behind. Cracked grout also allows water penetration.',
        },
        {
          step: 3,
          title: 'Feel the Walls',
          description: 'Cold external walls are condensation magnets. Internal walls should be warmer.',
        },
        {
          step: 4,
          title: 'Note Your Habits',
          description: 'Do you run the fan during/after showers? Open a window? Close the door to trap steam? These behaviours affect mould growth.',
        },
      ],
      whenToCallPro: [
        'Mould returns rapidly after cleaning',
        'Mould is on more than surface (in walls)',
        'You have no extract fan',
        'Fan isn\'t working properly',
        'Mould is causing health issues',
        'Silicone needs complete replacement',
        'You suspect a leak',
      ],
    },
    
    solutions: {
      diyPossible: true,
      diyDifficulty: 'easy',
      diySteps: [
        'Wear gloves and a mask when cleaning mould',
        'Use mould killer spray (or 1 part bleach to 10 parts water)',
        'Leave cleaner on for 20+ minutes before wiping',
        'Replace mouldy silicone sealant (cut out old, apply new)',
        'Always run extract fan during and 20 mins after showering',
        'Open window slightly if no fan, or leave door open after',
        'Wipe down wet surfaces after bathing',
      ],
      professionalSolution: 'We install or upgrade extract fans (including humidity-sensing fans), improve ventilation, replace silicone professionally, and address underlying moisture sources.',
      typicalCost: 'Mould cleaner: £5-£10. New silicone DIY: £10-£20. Professional silicone replacement: £80-£150. Extract fan installation: £200-£400. Humidity fan: £250-£450',
      timeToFix: 'Cleaning: 1 hour. Fan installation: half day',
    },
    
    prevention: {
      title: 'Preventing Bathroom Mould',
      tips: [
        'Run extract fan during bath/shower AND for 20 mins after',
        'Install a humidity-sensing fan (runs automatically)',
        'Wipe shower screens and tiles after use',
        'Hang wet towels to dry outside bathroom',
        'Keep bathroom door open after bathing (let moisture escape)',
        'Heat bathroom in winter (radiator or heated towel rail)',
        'Check silicone annually and replace when deteriorating',
        'Use anti-mould paint on ceilings',
      ],
    },
    
    faqs: [
      {
        question: 'Is bathroom mould dangerous?',
        answer: 'It can be. Mould releases spores that irritate airways, potentially triggering asthma and allergies. People with compromised immune systems are at greater risk. Children and elderly are more vulnerable.',
      },
      {
        question: 'Why does mould keep coming back?',
        answer: 'You\'re treating the symptom (mould) not the cause (excess moisture). Until you improve ventilation or reduce moisture production, mould will return. A powerful extract fan is usually the answer.',
      },
      {
        question: 'What\'s the best extract fan?',
        answer: 'Look for: sufficient extraction rate (minimum 15 litres/second for bathrooms), humidity sensor (turns on automatically), run-on timer (keeps running after you leave), and low noise rating.',
      },
      {
        question: 'Should I use anti-mould paint?',
        answer: 'Anti-mould paint helps but isn\'t a solution on its own. It\'s good for ceilings in well-ventilated bathrooms. In poorly ventilated spaces, mould will eventually appear on anti-mould paint too.',
      },
    ],
    
    relatedProblems: ['damp-on-walls', 'condensation-on-windows', 'extract-fan-not-working'],
    relatedServices: ['ventilation', 'bathroom-fitting', 'extract-fan-installation', 'tiling'],
  },

  // ============================================================================
  // STRUCTURAL PROBLEMS
  // ============================================================================
  {
    slug: 'cracks-in-walls',
    title: 'Cracks in Walls',
    metaTitle: 'Cracks in Walls: When to Worry & What to Do | Expert Guide',
    metaDescription: 'Cracks appearing in your walls? Learn which are harmless and which need urgent attention. North London structural specialists.',
    category: 'structural',
    urgency: 'urgent',
    
    problem: {
      description: 'Not all cracks are cause for concern. Hairline cracks from settlement are normal in houses. Larger cracks, especially diagonal ones, may indicate structural movement that needs investigation.',
      commonCauses: [
        'Normal settlement (especially new builds)',
        'Seasonal movement (shrinkage/expansion)',
        'Tree roots affecting foundations',
        'Subsidence (ground sinking)',
        'Heave (ground rising)',
        'Poor original construction',
        'Removed load-bearing wall',
        'Vibration from traffic/building work',
      ],
      warningSignsTitle: 'When Cracks Are Serious',
      warningSigns: [
        'Cracks wider than 5mm (width of a pencil)',
        'Diagonal cracks (especially step-pattern in brickwork)',
        'Cracks getting wider over time',
        'Doors/windows sticking (frames distorting)',
        'Cracks appearing at weak points (corners, lintels)',
        'External cracks matching internal',
        'New cracks after nearby building work',
      ],
      riskIfIgnored: 'Most cracks are cosmetic, but structural cracks indicate ongoing movement that worsens over time. Early investigation can catch problems before they become expensive.',
    },
    
    diagnosis: {
      title: 'Assessing Your Cracks',
      steps: [
        {
          step: 1,
          title: 'Measure the Width',
          description: 'Hairline to 1mm = usually fine. 1-5mm = worth monitoring. Over 5mm = needs professional assessment.',
        },
        {
          step: 2,
          title: 'Check the Pattern',
          description: 'Horizontal above windows = lintel issue. Vertical at corners = settlement. Diagonal/stepped = structural movement. Random craze pattern = plaster issue.',
        },
        {
          step: 3,
          title: 'Monitor for Movement',
          description: 'Put tape across crack with date written on it. If tape breaks, crack is active. Monitor monthly.',
        },
        {
          step: 4,
          title: 'Check External Walls',
          description: 'Are there matching cracks outside? External cracks visible in brickwork are more significant than internal plaster cracks.',
        },
      ],
      whenToCallPro: [
        'Cracks wider than 5mm',
        'Cracks are growing/active',
        'Diagonal step-pattern cracks',
        'Doors/windows sticking shut',
        'You\'re concerned about any crack',
        'Planning to sell and need assessment',
        'Building work happening nearby',
      ],
    },
    
    solutions: {
      diyPossible: true,
      diyDifficulty: 'easy',
      diySteps: [
        'For hairline cracks in plaster:',
        'Open crack slightly with a scraper',
        'Fill with flexible filler',
        'Allow to dry, sand smooth',
        'Repaint',
        'For anything larger, get professional assessment first',
        'Don\'t fill structural cracks - they need proper repair',
      ],
      professionalSolution: 'We provide structural assessments and crack monitoring. Treatments range from repointing to underpinning depending on cause. We work with structural engineers for complex cases.',
      typicalCost: 'Structural survey: £300-£600. Crack stitching: £1000-£3000. Underpinning: £10,000-£50,000+ (varies hugely)',
      timeToFix: 'Cosmetic repair: 1-2 hours. Structural: depends on cause',
    },
    
    prevention: {
      title: 'Preventing Structural Damage',
      tips: [
        'Don\'t plant large trees within 10m of house',
        'Maintain existing tree watering during dry spells',
        'Fix gutters and drains promptly (water erosion)',
        'Never remove walls without structural advice',
        'Get survey before buying older properties',
        'Address subsidence early - it\'s progressive',
      ],
    },
    
    faqs: [
      {
        question: 'Are cracks covered by insurance?',
        answer: 'Subsidence damage is usually covered by buildings insurance (subject to excess, typically £1,000). However, insurers may require investigation and may increase premiums or add exclusions after a claim.',
      },
      {
        question: 'Will cracks affect my property value?',
        answer: 'Minor settlement cracks are expected and don\'t affect value. Structural cracks or history of subsidence must be disclosed and can significantly impact value. Professional repair with warranty helps mitigate this.',
      },
      {
        question: 'What is subsidence?',
        answer: 'Subsidence is when ground beneath foundations sinks, causing the building to move. Common causes: clay soil shrinkage in drought (often due to tree roots), leaking drains washing away soil, or mining/excavation nearby.',
      },
      {
        question: 'How do I know if it\'s just old house settling?',
        answer: 'Old settlement cracks are stable - they\'ve been there for years and aren\'t changing. Active cracks widen over time. Monitoring with a dated crack gauge over several months reveals whether movement is ongoing.',
      },
    ],
    
    relatedProblems: ['damp-on-walls', 'doors-not-closing', 'uneven-floors'],
    relatedServices: ['structural-work', 'underpinning', 'foundation-repair', 'surveying'],
  },
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export function getProblemPage(slug: string): ProblemPage | undefined {
  return problemPages.find(p => p.slug === slug);
}

export function getProblemsByCategory(category: ProblemPage['category']): ProblemPage[] {
  return problemPages.filter(p => p.category === category);
}

export function getEmergencyProblems(): ProblemPage[] {
  return problemPages.filter(p => p.urgency === 'emergency');
}

export function generateProblemParams(): { problem: string }[] {
  return problemPages.map(p => ({ problem: p.slug }));
}

export function countProblemPages(): number {
  return problemPages.length;
}

// Get related problems as full objects
export function getRelatedProblems(slug: string): ProblemPage[] {
  const page = getProblemPage(slug);
  if (!page) return [];
  
  return page.relatedProblems
    .map(s => getProblemPage(s))
    .filter((p): p is ProblemPage => p !== undefined);
}
