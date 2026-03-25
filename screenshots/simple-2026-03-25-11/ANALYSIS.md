# Simple.life Onboarding Analysis
**Crawl date:** 2026-03-25
**Entry URL:** https://simple.life/survey/main/ob/intermittent-fasting
**Total screenshots:** 69 (steps 01–67 survey, 68–69 pricing)
**Audience for this doc:** Fabulous product & growth team

---

## Flow Summary

**Total survey steps:** 67 screens + pricing page
**Estimated completion time:** 12–18 minutes (unusually long for a web funnel)

The flow is structured into four named phases, shown in a segmented header bar:

| Phase | Label in UI | Approximate steps | Theme |
|---|---|---|---|
| 1 | MY PROFILE | 1–18 | Demographics, diet, lifestyle, body metrics |
| 2 | MY PLAN | 19–35 | Motivation events, psychology, mindset Likert battery |
| 3 | MOTIVATION | 36–58 | Emotional goals, past failures, health & safety, supplements |
| 4 | ALMOST THERE | 59–67 | Final mindset/confidence framing, eating patterns, paywall setup |

The very first screen (`/survey/main/ob/intermittent-fasting`) has no progress bar and no section label — it exists outside the named flow and is likely an ad-traffic landing page variant keyed to an intermittent fasting audience.

Three animated "processing" interstitials punctuate the flow at steps 19, 36, and 59 — roughly every 17–20 questions. Each shows a percentage loading bar and a unique illustration. These act as psychological checkpoints signalling "the system is working on your plan" and serve as natural points to recover potential drop-off.

---

## Key Design Patterns

**Visual style**
Clean, minimal, light grey background (#f4f4f7) throughout. The Simple logo appears only on the first screen; all subsequent screens drop branding in favour of a section label (MY PROFILE, MY PLAN, etc.). Typography is dark navy on white cards. The brand accent — a medium periwinkle/cornflower blue — is used for progress bar fill, CTA buttons, and inline emphasis text in headlines.

**Progress indicator**
A segmented horizontal bar divided into three segments (one per named phase after the entry screen), displayed below the section label. No numeric step counter is shown anywhere in the flow. Users never know they are on screen 34 of 67. This deliberately conceals the true length of the funnel.

**Question types observed**
- Single-select radio list (most common) — rounded white cards, tap-to-advance on early screens
- Multi-select checkbox list (later screens) — same card style, checkbox right-aligned, requires explicit "Next" tap
- Age bracket with portrait photos (step 2): five ranges each accompanied by a different woman's photo, implicitly signals the app is designed for women
- Body-part illustrated multi-select (step 7): target zones (Legs, Belly, Arms, Butt, Face and neck) with cropped body photography
- Numeric input (steps 15–18): height, weight, target weight, birth year
- Likert 1–5 scale (steps 30–35): six consecutive "following statement" questions, five numbered square tiles anchored "Not at all" / "Totally"
- Date picker (step 21): motivation event date
- Educational interstitial screens (no input): full-bleed photo or illustration with headline and body copy, single CTA button ("Next", "Got it", "Sounds good")

**Auto-advance vs. explicit Next**
Single-select questions auto-advance on tap (no "Next" visible). Multi-select and numeric questions require an explicit "Next" tap. Info/education screens use a large filled blue button. This maintains early momentum while slowing users at emotionally significant or confirmatory screens.

---

## Persuasion & Motivation Techniques

**1. Benefit reframe after negative answers**
After almost every topic where a user might admit a weakness, Simple shows a full-screen educational interstitial that reframes the weakness as a reason the plan will work specifically for them. Examples:

- Sleep quality asked (step 8) → "Great sleep sets you up for weight loss success. You're already ahead of the game." (step 10)
- Hunger levels asked (step 26) → "You don't need to be hungry!" with an image of a woman happily eating pizza (step 27)
- Fruit/vegetable intake asked (step 24) → "Even one fruit or veggie a day can make a big difference" (step 25)
- Skin-related question (step 44) → "Intermittent fasting restores your skin's natural glow" (step 45)
- Menopause question (step 55) → "Weight loss at every stage of life" (step 56)

This pattern means nearly every honest answer is followed by validation, never discouragement. The user never feels judged.

**2. Social proof testimonial before biometrics**
Step 14 shows a full-screen before/after testimonial: "Staying on track can be hard. We'll make it SIMPLE." alongside a side-by-side photo of a woman labelled "Hanna, 100+ lb lost" with a 5-star rating and a quote. This screen appears immediately before height/weight/target weight inputs (steps 15–17) — the most vulnerable data-entry moment in any weight loss funnel. The placement primes users with what's possible before they commit their personal numbers.

**3. "Simple Method vs. Restrictive Diet" chart (step 6)**
An early-flow graph shows two crossing curves over four weeks: the "Restrictive Diet" line rises (weight returning) while the "Simple Method" line falls and stabilises. Headline: "Say hello to a simpler, more sustainable weight loss journey." Body copy: "We help women like you look and feel their best — without excluding foods you love most." This delivers the brand's core positioning as an educational data visualisation. The chart is not sourced; it functions rhetorically.

**4. Competitor acknowledgment and switching frame (step 46)**
A direct question: "Have you tried any of these weight loss programs in the last year?" lists Noom, WW (Weight Watchers), Nutrisystem, Jenny Craig, Other, None. This surfaces prior failure history, which Simple subsequently uses to position itself as the solution that works when others didn't. It also harvests competitive intelligence on their acquisition sources.

**5. Event-based urgency and specific deadline injection (steps 20–21, 60)**
After the first processing screen, users select a motivating event (Vacation, Wedding, Losing baby weight, Summer, Birthday party, School reunion, Family gathering) and enter a specific date. The system calculates from target weight and event date and later asks: "How do you feel about hitting 70 kg by June 25th, 2026?" — using the user's own numbers. This manufactured specificity makes the plan feel real and creates time pressure that generic plans lack.

**6. "Weight Loss Boost unlocked!" pre-pricing upsell (step 61)**
An interstitial titled "Weight Loss Boost unlocked!" shows two trajectories: "Without Boost" (slow decline) vs "With Boost" (steeper decline). Copy reads: "Based on your answers, you're a great fit for our accelerated program designed to speed up weight loss results through personalised changes to your daily fasting schedule. Your early results achieved with our Weight Loss Boost can help you sustain motivation on your path to 70 kg." This frames a premium tier as something the user has already "earned" through their answers, before the pricing page renders.

**7. Likert battery as psychological investment (steps 30–35)**
Six consecutive 1–5 scale questions ask about emotional eating and self-perception. The observed example: "Eating is one of the ways I usually deal with my emotions." No answer gates or disqualifies — any value proceeds. The purpose is depth of self-disclosure, which creates sunk-cost investment. The more you've shared, the more the plan feels personally yours.

**8. Confidence scaffolding near the end (step 60)**
The question echoes the user's own data: "How do you feel about hitting 70 kg by June 25th, 2026?" with options "I can totally do it!", "I'm uncertain, but willing to try", "I'm still unsure." All answers proceed. The question functions as a verbal micro-commitment — even selecting "I'm uncertain, but willing to try" is an expression of intent that increases follow-through likelihood at the paywall.

---

## Personalization Signals

Simple builds a dense profile and makes the personalisation visible at key moments:

| Data point | Collected at | How used |
|---|---|---|
| IF knowledge level | Step 1 | Calibrates educational framing in the plan |
| Age bracket | Step 2 | Portrait photos match user's age group; menopause question gated on age |
| Carb eating frequency | Step 3 | Nutrition plan framing |
| Eating habits | Step 4 | Meal plan customisation |
| Current diet type | Step 5 | Dietary plan copy |
| Target body zones | Step 7 | Visual goal framing |
| Sleep quality | Step 8 | Educational interstitial content at step 10 |
| Water intake | Step 11 | Hydration coaching |
| Lifestyle / activity level | Step 12 | Plan intensity |
| Has children | Step 13 | Lifestyle context |
| Height / weight / target weight | Steps 15–17 | Generates specific goal (e.g. "70 kg") echoed throughout later screens |
| Birth year | Step 18 | Age-specific messaging |
| Motivation event + date | Steps 20–21 | Generates a specific deadline ("June 25th, 2026") reflected back verbatim in later questions |
| Desired feelings on journey | Steps 37–38 | Emotional framing of plan copy |
| Happy weight self-image | Steps 39–40 | Visualisation and identity work |
| Main reason for loss | Step 41 | Personalised motivation copy |
| Past apps / programs tried | Step 46 | Competitor switching narrative |
| Medical conditions | Step 49 | Safety gating, plan adjustments |
| Eating disorder diagnosis | Step 50 | Safety gating |
| Medications | Step 51 | Plan adjustments |
| Supplement preferences | Steps 52–53 | Supplement upsell personalisation |
| Pregnancy / Menopause | Steps 54–55 | Hormonal context, targeted educational interstitials |
| Pace preference | Step 67 | Likely determines which pricing plan or trial length is shown first |

The weight goal + event date combination is the most powerful personalisation hook. It gets reflected verbatim in at least two later questions and presumably on the pricing page. Users never feel they are completing a generic funnel.

---

## Health & Safety Handling

The sensitive questions (steps 49–58) are grouped under a "HEALTH & SAFETY" section label in the progress bar, making them feel like a responsible, caring section rather than legal gatekeeping.

**Medical conditions (step 49):** Multi-select list including Type 1 diabetes, Type 2 diabetes, Heart disease, High blood pressure, High cholesterol, Mental health disorders, Chronic kidney disease (CKD), and more (list scrolls). Subheadline on both medical and eating disorder questions: "Rest assured this information is for your safety." The "No, I haven't" option is positioned first, making it easy to skip. No visible disqualification path was captured — responses appear to be used for plan copy customisation rather than hard exclusion.

**Eating disorder (step 50):** Binary Yes / No with the same "Rest assured" subheadline. The question uses clinical language: "Are you currently diagnosed with an eating disorder?" The qualifier "currently diagnosed" (rather than "have you ever experienced") may allow users with a history but no current diagnosis to continue without triggering an exclusion path.

**Pregnancy and menopause (steps 54–55):** Both questions are likely gated behind a female-identifying gender signal earlier in the flow (not captured in this crawl). The menopause question triggers a dedicated interstitial: "Weight loss at every stage of life" explaining hormonal fat storage changes and how fasting and nutrition can address them. A potentially discouraging disclosure is immediately converted into affirmation.

**Supplements (steps 52–53):** Placed inside the Health & Safety section, lending supplement preference questions a medically informed framing. Step 52 gauges supplement familiarity; step 53 asks "What's most important to you when choosing a supplement?" (Clean ingredients / Backed by science / Athlete-safe / Easy to take / Real results). This is pure preference capture to personalise a supplement upsell at checkout.

Overall tone: Simple treats health disclosures as inclusion signals rather than exclusion gates. The "Rest assured" micro-copy and universal forward progression reinforce a message of radical acceptance.

---

## The Offer / Paywall

**Note on the crawl:** Screenshots 68–69 (labelled pricing-top and pricing-scrolled) appear to show the same "Your action plan is ready!" screen as step 67. The actual pricing/checkout page may require a further click or scroll that was not captured. The analysis below is based on what was captured plus strong inference from the funnel framing.

**Last question before pricing (step 67):** "Your action plan is ready! It's designed to work at your pace. So, tell us: How quickly do you want to lose the weight?" — options: As quickly as possible / Slow and steady does it / Somewhere between the two. This final question, placed on the plan-ready screen itself, likely segments users into different pricing tiers or trial lengths.

**Pre-pricing priming (step 61):** The "Weight Loss Boost unlocked!" screen plants the idea of a premium accelerated tier before the user sees prices. The user arrives at the paywall already framing themselves as "a great fit for the accelerated program" — a premium-first anchoring move.

**Inferred pricing page structure:**
- Personalised plan header echoing the user's specific target weight and deadline
- Primary subscription option (likely monthly or annual, possibly with a trial)
- Weight Loss Boost as a premium add-on or default upsell tier, already pre-validated by step 61
- Supplement bundle likely present given the two supplement-preference questions embedded in the flow
- Urgency element tied to the motivation event date

---

## Notable Insights for Fabulous

**1. Three mid-funnel processing interstitials as retention mechanics**
Simple uses three "analysing your answers" loading screens across 67 steps — each at a different percentage (53%, 79%, 69%) and with a different illustration. These act as mini reward moments at natural fatigue points. Fabulous uses a single results/promise screen at the end of onboarding. Testing a mid-funnel "calculating your plan" screen after the first 15–20 Fabulous questions could reduce abandonment at the cognitive exhaustion point.

**2. Social proof placed before the most sensitive data request, not after**
Simple shows the before/after testimonial at step 14 — immediately before height, weight, and target weight inputs. Fabulous could test a testimonial or success story screen immediately before the goal-setting or habit commitment steps where users are most vulnerable to abandonment.

**3. Specific goal echo as conversion driver**
Reflecting the user's own numbers ("hit 70 kg by June 25th") back verbatim in multiple later questions is a high-signal personalisation move. Fabulous collects a goal date for challenges — surfacing that date back in onboarding copy ("Your streak could reach 47 days by your birthday") could deepen commitment before the paywall.

**4. Competitor listing as positioning signal**
Asking "Have you tried Noom, WW, Nutrisystem, Jenny Craig?" positions Simple as the alternative for users who have already failed elsewhere. Fabulous could consider a softer equivalent: "Have you tried a habit or wellness app before?" — both as positioning (we're different) and to segment onboarding copy for experienced vs. first-time users.

**5. Likert battery for psychological investment**
Six consecutive emotional self-assessment questions create deep sunk-cost investment. Fabulous's onboarding is comparatively light on self-reflection. Even 2–3 introspective questions about relationship with habits, self-discipline, or emotional wellbeing could meaningfully increase perceived personalisation and paywall conversion intent.

**6. Supplement funnel embedded in the health section**
Simple collects supplement preferences inside "Health & Safety" — a placement that lends the supplement upsell credibility. If Fabulous ever bundles a supplement or premium coaching product, anchoring the lead-in questions in a health/wellbeing section of onboarding is more credible than a post-paywall upsell screen.

**7. Pace-preference question as pricing segmentation lever**
Asking "how quickly do you want results?" at the plan-ready screen — rather than as a general lifestyle question — likely routes users into different pricing plans or trial lengths. Fabulous could test this framing to segment users into different plan durations or intensity tiers, particularly for the annual vs. monthly decision.

**8. Length mitigation playbook**
67 questions is genuinely long for a web funnel. Simple mitigates attrition through: no visible step counter, three processing interstitials, early testimonial, and a benefit-reframe interstitial after almost every sensitive topic. If Fabulous ever deepens its onboarding questionnaire (which LTV data may justify), these are the specific patterns that make long funnels survivable.

---

## Questions Asked: Full List

"Info" marks educational interstitial screens (no user input required).

| # | Slug | Question / Content |
|---|---|---|
| 1 | intermittent-fasting | Have you heard about intermittent fasting? (Just the name / I know a few things / Yes, I know everything about it!) |
| 2 | a-input | How old are you? (18–29 / 30–39 / 40–49 / 50–59 / 60–80, each with a representative woman's photo) |
| 3 | do-you-eat-carbs | How often do you eat carb-dense foods like bread, dairy, pasta? (Very often / Sometimes / Rarely / Not at all) |
| 4 | habbits | [Eating habits — question text not captured] |
| 5 | any-specific-diet | Do you follow any specific diet? |
| 6 | regular-diet-vs-simple | INFO: "Say hello to a simpler, more sustainable weight loss journey" — Simple Method vs. Restrictive Diet crossing-curves chart; CTA: "Got it" |
| 7 | target-zones | What are your target zones? (Legs / Belly / Arms / Butt / Face and neck — illustrated multi-select) |
| 8 | how-do-you-sleep | How do you sleep? |
| 9 | sleep-improvement | [Sleep improvement follow-up — question text not captured] |
| 10 | sleep-w-loss-benefits | INFO: "Great sleep sets you up for weight loss success — now let's use that sleep advantage to unlock even more weight loss progress with your plan." |
| 11 | how-much-water-you-take | How much water do you drink each day? |
| 12 | lifestyle | What is your lifestyle like? (activity level) |
| 13 | children | Do you have children? |
| 14 | sticking-to-plan | INFO + Testimonial: "Staying on track can be hard. We'll make it SIMPLE." — before/after photo of Hanna, 100+ lb lost, 5-star rating |
| 15 | h-input | What is your height? (numeric input) |
| 16 | w-input | What is your current weight? (numeric input) |
| 17 | target-w-input | What is your target weight? (numeric input) |
| 18 | birth-year | What is your birth year? (numeric input) |
| 19 | processing | INTERSTITIAL: "Preliminary processing" — weight-loss chart animation, loading bar at 53% |
| 20 | motivation-events | Is there anything specific motivating you to lose weight right now? (Vacation / Wedding / Losing baby weight / Summer / Birthday party / School reunion / Family gathering) |
| 21 | motivation-event-date | When is that event? (date picker) |
| 22 | additional-question-2 | [Not captured] |
| 23 | additional-question-3 | [Not captured] |
| 24 | fruit-vegetable-intake | How many fruits or vegetables do you eat daily? |
| 25 | plant-foods-advantage | INFO: "Even one fruit or veggie a day can make a big difference — Every fruit and veggie regularly can help reduce cravings, improve digestion, and support fat loss." |
| 26 | hunger-levels | How often do you feel hungry between meals? |
| 27 | no-hunger-benefit | INFO: "You don't need to be hungry! With smart meal choices that help you meet your nutrition needs, plus a touch of mindful eating, you can say bye-bye to growly stomach and cravings — for good!" |
| 28 | energy | How are your energy levels throughout the day? |
| 29 | energy-check | [Energy follow-up — not captured] |
| 30 | following-statement-1 | Do you relate to the following statement? "Eating is one of the ways I usually deal with my emotions." (1–5 Likert: Not at all → Totally) |
| 31 | following-statement-2 | [Emotional eating / mindset Likert statement 2] |
| 32 | following-statement-3 | [Likert statement 3] |
| 33 | following-statement-4 | [Likert statement 4] |
| 34 | following-statement-5 | [Likert statement 5] |
| 35 | following-statement-6 | [Likert statement 6] |
| 36 | analyze-answers | INTERSTITIAL: "Analyzing your answers… By recognizing these patterns, you're already on the path to a healthier, more mindful lifestyle." — heart puzzle animation, loading bar at 79% |
| 37 | like-to-feel | During my Simple journey, I'd like to feel: (Happy / Calm and relaxed / Energetic / In control of my choices / Empowered / Other) |
| 38 | like-to-boost | [What would you like to boost? — not captured in detail] |
| 39 | at-happy-w | What does being at your happy weight mean to you? |
| 40 | see-myself-screen | When I think of reaching my happy weight, I am: (Full of energy each day / More confident / More social / Putting myself first / Excited about exploring new things / Other) |
| 41 | main-reason | What is your main reason for wanting to lose weight? |
| 42 | current-priorities | What are your current priorities? |
| 43 | gain-w-reason | What do you think caused your weight gain? |
| 44 | skin-improvements | [Skin improvement question — not captured in detail] |
| 45 | fasting-antiaging | INFO: "Intermittent fasting restores your skin's natural glow — By supporting balanced blood sugar and lower inflammation, fasting can help you experience less irritation, fewer breakouts, and healthier glow that starts from within." |
| 46 | w-loss-apps | Have you tried any of these weight loss programs in the last year? (Noom / WW (Weight Watchers) / Nutrisystem / Jenny Craig / Other / None) |
| 47 | w-loss-attempts | How many times have you tried to lose weight? |
| 48 | motivation-exploration | [Motivation depth question — not captured in detail] |
| 49 | any-medical-conditions | Have you been diagnosed with any of the following health conditions? (No, I haven't / Type 1 diabetes / Type 2 diabetes / Heart disease / High blood pressure / High cholesterol / Mental health disorders / Chronic kidney disease (CKD) / [list scrolls]) — subheadline: "Rest assured this information is for your safety." |
| 50 | eating-disorder | Are you currently diagnosed with an eating disorder? (Yes / No) — same "Rest assured" subheadline |
| 51 | do-you-take-any-medications | Do you take any medications? |
| 52 | supplements-familiarity | How familiar are you with dietary supplements? |
| 53 | supplement-choice | What's most important to you when choosing a supplement? (Clean ingredients / Backed by science / Athlete-safe / Easy to take / Real results) |
| 54 | pregnancy | Are you pregnant or trying to become pregnant? |
| 55 | menopause | Are you going through menopause? |
| 56 | unlock-vitality | INFO: "Weight loss at every stage of life — Menopause can make weight loss harder due to hormonal changes impacting fat storage patterns and metabolism. Regular exercise and good nutrition can help address these changes, making weight loss and wellness goals more achievable." |
| 57 | motivation-to-lose-w | How would you describe your weight loss motivation over time? (It's pretty consistent / It ebbs and flows / Motivation? What's that? :)) — subheadline: "Understanding your emotions" |
| 58 | understanding-mindset | [Mindset question — not captured in detail] |
| 59 | analyze-answers-reason | INTERSTITIAL: "The #1 reason women give up on weight loss is starting too big, too quickly. Your plan starts small — and is built to stick." — scale animation, loading bar at 69% |
| 60 | confidence-in-reaching-1 | How do you feel about hitting [target weight] by [event date]? (I can totally do it! / I'm uncertain, but willing to try / I'm still unsure) |
| 61 | w-loss-boost | INFO: "Weight Loss Boost unlocked!" — before/after trajectory graph, copy references user's specific target weight |
| 62 | eating-habits | [Eating habits detail — not captured] |
| 63 | snakcing-triggers | What triggers your snacking? |
| 64 | more-to-explore | While we're customizing your journey, what else do you want to explore? (My brain / My behaviors / Understand digestion / Better sleep / Conquering stress / Upping my energy levels / My nutrition knowledge) — subheadline: "Our holistic approach goes beyond weight loss to improve your well-being, mood, and health." |
| 65 | typical-meal | What does a typical meal look like for you? |
| 66 | weekend-fasting | Do your fasting habits change on weekends? |
| 67 | your-plan-ready | "Your action plan is ready! It's designed to work at your pace. So, tell us: How quickly do you want to lose the weight?" (As quickly as possible / Slow and steady does it / Somewhere between the two) |
| 68–69 | pricing | Pricing / checkout page — not fully captured in this crawl |

---

*Analysis completed 2026-03-25. Screenshots at `/competitor-research/simple-onboarding-2026-03-25-11/`.*
