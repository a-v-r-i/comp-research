# Simple.life Male Onboarding — Flow Analysis
**Captured:** 2026-03-25 | **Path:** `/survey/m/ob/` | **Screenshots:** 59 (57 unique screens + 2 pricing scroll states)

---

## Flow Summary

The male onboarding covers **57 unique screens** across a single-page quiz format, compared to **67 screens** in the female (`/f/`) path. The male flow is roughly 15% shorter — primarily because it omits several female-specific sections (hormonal health, menstrual cycle, pregnancy) and replaces them with a smaller set of male-specific screens.

### Phase structure

| Phase | Screens | Content |
|---|---|---|
| **Entry** | 1 | IF awareness (gender-neutral, `/survey/main/ob/`) |
| **Nutrition** | 2–4 | Carbs, diet type, Simple vs restrictive diet reframe |
| **Lifestyle** | 5–11 | Physical struggles, sleep, water, activity, time for self, plan adherence |
| **Body metrics** | 12–14 | Height, weight, target weight |
| **Engagement** | 15–17 | Daily app usage pitch, motivation event, event date |
| **Eating habits** | 18–21 | Lunch type, meal frequency, snacking, alcohol |
| **Mindfulness** | 22–27 | Eating patterns banner + 5× Likert scale statements |
| **Processing** | 28 | Animated "Analyzing your answers…" loader |
| **Goals & body** | 29–32 | Main weight-loss drive, six-pack, workout preference, workout reframe banner |
| **Emotional** | 33–38 | Clothes frustration, unsettling feeling, aspirational feelings, mindset boosts, happy-weight self-image, food relationship at goal |
| **More goals** | 39–40 | Additional exploration areas, supercharge energy banner |
| **Health & safety** | 41–46 | Medical conditions, eating disorder, medications, supplement familiarity, supplement preference, testosterone/stamina |
| **Health banner** | 47 | Vitality uplift banner |
| **Past attempts** | 48–50 | Other weight-loss apps, previous attempts, "almost there" banner |
| **Mindset closing** | 51–54 | Weight gain causes, motivation patterns, current motivation level, goal-weight confidence echo-back |
| **Final analysis** | 55 | "The #1 reason men give up" loader screen |
| **Fasting pref** | 56 | Weekend fasting question |
| **Plan ready** | 57–59 | "Your action plan is ready" pace question, pricing (top + scrolled) |

---

## Male-Specific Content

These screens and framings are unique to the `/m/` path and absent from the female flow:

### 1. Six-pack question (screen 30)
"When was the last time you've seen a six-pack? (We're talking about abs here)" with options: 0–6 months ago / 6–12 months ago / 1–3 years ago / Never. Light, self-deprecating tone. Signals body-composition aspiration (ab definition), not just weight loss.

### 2. Workout-preference question (screen 31)
"I'd prefer a weight loss plan that doesn't require working out" — Yes/No binary. This is a qualifying/segmentation question: if the user says "Yes," screen 32 serves a reassurance banner.

### 3. Workout reframe banner (screen 32)
Full-screen photo of a lean, athletic male body on a beach. Headline: **"Get the lean, attractive body you've always wanted."** Body: "Workouts that include aerobic exercise ('cardio') and resistance training are a great addition to any weight loss plan." CTA: "Sounds good." Classic aspiration + permission framing — acknowledges they may not want to work out but plants the seed that light exercise amplifies results.

### 4. Testosterone/stamina question (screen 46)
"Are you interested in boosting your stamina and energy levels?" (Yes / No / I don't know). Sub-label: "Rest assured this information is for your safety." Positioned within the health & supplements cluster. This is effectively a proxy for testosterone/energy supplement upsell intent — the URL slug is literally `/testosterone`.

### 5. Social-proof chart uses male data (screen 15)
The "Triple your weight loss by using Simple on a daily basis" chart explicitly cites **"a study over 12 weeks of Simple male user activity"** — actively gendering the social proof.

### 6. Struggles question uses male body imagery (screen 5)
Options (sensitive back, tight hips, achy knees) are illustrated with photos of male bodies with the relevant pain point highlighted in red. The female flow uses female body photos for the equivalent question.

### 7. Physical struggles options differ
Male path asks about **sensitive back, tight hips, achy knees** — typical male musculoskeletal complaints. The female path includes options more commonly associated with female-specific complaints (e.g. pelvic-floor issues are absent from the male path).

### 8. Diet comparison chart is male-gendered (screen 4)
The "Fasting for men" label explicitly appears on the weight-loss trajectory chart comparing restrictive dieting vs. Simple's IF approach.

---

## Key Design Patterns

### Visual style
- **Dark theme throughout** (`#16162A` near-black background, white text, muted purple accents). This applies from screen 2 onward — the entry screen alone uses a light theme.
- Informational/banner screens use **full-bleed photography** of men: smiling while using a phone, running, on a beach, at an outdoor selfie vantage point. All subjects are male, typically 30–50s, lean or actively working toward it.
- Brand color is a medium periwinkle/indigo. Progress bar is a thin three-segment indicator (not numerical).
- Question option tiles are rounded rectangles with no icons on most question screens; emoji icons appear on lifestyle and dietary pattern questions.
- No progress percentage shown to the user — only the segmented bar. The percentage values visible in the loader animations (59%, 70%, 78%) are internal-facing artifacts.

### Question types
| Type | Count (approx.) | Examples |
|---|---|---|
| Single-select tap-to-advance | ~25 | Sleep, carbs, lifestyle, frustration, workout pref |
| Multi-select with "Next" | ~18 | Diet type, motivation events, medical conditions, supplement choice |
| Numeric input | 3 | Height, current weight, target weight |
| Likert 1–5 scale | 5 | Following-statement series |
| Date picker | 1 | Motivation event date |
| Full-screen banner (tap "Got it" / "Sounds good" / "Next") | ~10 | Diet reframe, time-for-yourself, workout, supercharge, health |

### Navigation
Fixed "Back / Next" footer on all question screens. Next is disabled (greyed) until a selection is made. Banners use a single centred CTA. No exit or skip options visible.

---

## Persuasion & Motivation Techniques

### Investment building
The flow collects a large amount of personal data before the paywall (height, weight, goal weight, event date, medical history). By the time the user reaches pricing they have invested significant self-disclosure, which raises the psychological cost of abandoning. The **"Your action plan is ready!"** framing on screen 57 (which is still a question) makes them feel the product already exists for them.

### Anti-diet / permission framing
Screen 4 explicitly tells men they "don't need a special diet" — a direct counter-positioning against keto, Whole30, etc. A scientific-looking chart shows Simple outperforming "restrictive diet." This removes a common objection early.

### Time commitment minimisation
Screen 10 (time-for-yourself banner): **"Just 5 minutes a day — That's all you need to develop a routine that works for you. You've got this!"** Accompanied by a photo of a man checking his watch with a smile. Classic micro-commitment framing.

### Social proof gendered to men
"Triple your weight loss" chart (screen 15) is presented as a study specifically on "Simple male user activity," making the social proof feel directly applicable, not generic.

### Pain amplification before payoff
Screens 33–34 ask about clothes frustration before transitioning to aspirational futures (screens 35–38). The emotional arc is: identify pain → imagine relief. This is a standard loss-aversion + aspiration sandwich.

### Aspirational self-projection
Multiple multi-select questions ask men to describe their future self: "When I think of reaching my happy weight, I am: [Full of energy each day / More confident / More social…]." These aren't informational — they function as positive self-affirmations the user writes about themselves.

### Reframing failure
Screen 55 loader: **"The #1 reason men give up on weight loss is starting too big, too quickly. Your plan starts small — and is built to stick."** This pre-empts the most common male objection (past failures) and positions those failures as a system problem, not a personal one. Notably gendered — "men give up."

### Urgency without a countdown
The weekend-fasting question (screen 56) and pace question (screen 57 — "As quickly as possible / Slow and steady / Somewhere between") effectively prime the user to think about immediate action before hitting the paywall.

---

## Personalization Signals

| Data collected | Where echoed back |
|---|---|
| Target weight (e.g. 70 kg) | Screen 54: "How do you feel about hitting **70 kg by June 25th, 2026**?" |
| Motivation event date (e.g. entered June 25) | Same echo-back above |
| Male gender | Social proof chart cites male study; imagery is male; "men give up" framing; six-pack question; testosterone question |
| Height | Used to frame "ideal weight loss pace" (screen 12 sub-label) |

The echo-back on screen 54 is the most visible personalisation moment: the user's target weight and a projected date are combined into a specific question, making the plan feel already computed and real.

---

## Health & Safety Handling

### Medical conditions (screen 41)
"Have you been diagnosed with any of the following health conditions? Rest assured this information is for your safety." Multi-select list: No, I haven't / Type 1 diabetes / Type 2 diabetes / Heart disease / High blood pressure / High cholesterol / Mental health disorders / Chronic kidney disease (CKD) / [at least one more below fold]. The reassurance sub-label ("for your safety") reduces friction on disclosure.

### Eating disorder (screen 42)
Dedicated screen. Question likely asks about history of disordered eating. This is positioned immediately after medical conditions, suggesting a standard safety-screening cluster. The flow does not appear to gate or hard-block based on answers — users continue regardless.

### Medications (screen 43)
"Do you take any medications?" Appears to be a general disclosure screen, not a specific list.

### Supplement familiarity & preference (screens 44–45)
Two-screen supplement-intent qualification: familiarity level → what they value in a supplement (clean ingredients / backed by science / athlete-safe / easy to take / real results). This signals an upsell pathway for a supplement product, not a safety screen.

### Testosterone/stamina (screen 46)
URL slug `/testosterone`, question framed as stamina/energy interest. Positioned within the health cluster but clearly serves a supplement upsell signal. The framing ("Rest assured this information is for your safety") is reused from the medical screens, which may be slightly misleading — this is appetite qualification, not safety screening.

---

## The Offer / Paywall

Screenshots 58 (top) and 59 (scrolled) capture the pricing page. The URL remains `/your-plan-ready`, so the paywall is presented as the plan reveal, not as a separate sales page.

**Visible from the screenshots taken:** the paywall is reached after the final question on screen 57 (pace preference). Screen 57 itself carries the headline "Your action plan is ready!" before the pace question — this is a deliberate conflation of "plan ready" with "answer one more question," building anticipation. The pricing page follows immediately.

Both pricing screenshots appear identical in framing, suggesting the page design did not differ dramatically when scrolled (the scrolled version likely showed plan tier details and the subscribe CTA lower on the page). Exact pricing figures were not legible at screenshot scale.

---

## Notable Differences from the Female Flow

This is the section with the highest relevance for Fabulous product decisions.

### 1. Shorter by ~10 screens (57 vs. 67)
The female path includes several screens absent from the male path: hormonal/menstrual health, pregnancy/postpartum context, menopause-related content, and additional body-image questions tied to female-specific experiences. The male path does not add equivalent screens — the six-pack, workout, and testosterone questions together replace only ~3 of those 10 removed screens.

### 2. Body goal framing: abs vs. overall weight
The female flow focuses on "happy weight" and feeling comfortable. The male flow keeps that language ("happy weight" is used throughout) but layers on a body-composition aspiration with the six-pack question. Men are implicitly given permission to want ab definition, not just weight loss.

### 3. Workout relationship handled explicitly
The male path has a dedicated workout-preference question and a workout reframe banner. The female path does not have an equivalent. This likely reflects that men are more likely to associate weight loss with exercise, and Simple needs to establish that its IF approach is sufficient on its own (while still encouraging exercise as a bonus).

### 4. Testosterone/stamina screen is male-only
No equivalent exists in the female path. This screen directly enables a male-specific supplement upsell (likely a testosterone-support or energy product) and represents a meaningful revenue differentiation opportunity absent from the female funnel.

### 5. Social proof is gender-segmented
The "3x weight loss" chart cites a "male user study" in the male flow. The female flow uses equivalent data but framed for women. This is a small but deliberate personalization signal that tells men the evidence applies to people like them.

### 6. Physical struggles imagery is gender-matched
Both paths ask about physical struggles, but the male version illustrates options with photos of male bodies. Lower-friction for men to identify with.

### 7. Emotional language is softer but still present
The male flow does include emotional questions (clothes frustration, aspiration at goal weight, self-worth boosts). Simple has not stripped out emotional/psychological depth for men — they ask almost the same emotional questions as the female flow. The difference is framing: male copy uses "lean, attractive body," "energy," "confidence" rather than the softer emotional language in some female screens.

### 8. No pregnancy/hormonal cluster
The female path has a multi-screen section covering hormonal health, menstrual cycle, pregnancy history, and related context. The male path has nothing equivalent. This is the biggest structural gap.

### 9. Diet reframe is male-gendered from screen 4
The chart on screen 4 labels one line "Fasting for men." The female equivalent labels it differently. Small but signals that Simple is running genuinely gendered copy throughout, not just swapping pronouns.

### 10. Pace question is placed very late (screen 57) in male flow
This question ("How quickly do you want to lose the weight?") is used as the final question before the paywall, framed under "Your action plan is ready." It serves as a commitment device — selecting "As quickly as possible" primes urgency just before the subscribe CTA.

---

## Full Question List

A concise enumeration of every screen in order.

| # | URL slug | Type | Content |
|---|---|---|---|
| 1 | `/main/ob/intermittent-fasting` | Single-select | Have you heard about intermittent fasting? (Just the name / I know a few things / Yes, I know everything) |
| 2 | `/m/ob/do-you-eat-carbs` | Single-select | How often do you eat carb-dense foods? (Very often / Sometimes / Rarely / Not at all) |
| 3 | `/m/ob/any-specific-diet` | Multi-select | Are you currently following a specific dietary pattern? (No / Low-carb / Vegetarian / Fully plant-based / Pescatarian / Lactose-free / Gluten-free / …) |
| 4 | `/m/ob/regular-diet-vs-simple` | Banner | "You don't need a special diet to reach your happy weight" — chart comparing restrictive diet vs. Fasting for men |
| 5 | `/m/ob/struggling` | Single-select | Do you struggle with any of the following? (Sensitive back / Tight hips / Achy knees / None of the above) — illustrated with male body photos |
| 6 | `/m/ob/how-do-you-sleep` | Single-select | How much sleep do you usually get? (< 5 hrs / 5–6 hrs / 7–8 hrs / > 8 hrs) |
| 7 | `/m/ob/how-much-water-you-take` | Single-select | Daily water intake |
| 8 | `/m/ob/lifestyle` | Single-select | Activity level / lifestyle description |
| 9 | `/m/ob/time-for-yourself` | Single-select | How much time do you make for yourself? |
| 10 | `/m/ob/time-for-yourself-banner` | Banner | "Just 5 minutes a day — That's all you need to develop a routine that works for you" |
| 11 | `/m/ob/sticking-to-plan` | Banner | Male social proof testimonial: "I'm literally a different person now" — before/after photo |
| 12 | `/m/ob/h-input` | Numeric input | What's your height? (cm / ft toggle; health data consent checkbox) |
| 13 | `/m/ob/w-input` | Numeric input | What's your current weight? |
| 14 | `/m/ob/target-w-input` | Numeric input | What's your target weight? |
| 15 | `/m/ob/simple-daily-basis` | Banner | "Triple your weight loss by using Simple on a daily basis" — bar chart citing male user study; progress loader at 59% |
| 16 | `/m/ob/motivation-events` | Multi-select | Is there anything specific motivating you to lose weight right now? (Vacation / Wedding / Sports event / Summer / School reunion / Family gathering / Birthday party / …) |
| 17 | `/m/ob/motivation-event-date` | Date picker | When is [selected event]? |
| 18 | `/m/ob/typical-lunch` | Single-select | What does your typical lunch look like? |
| 19 | `/m/ob/how-often-you-eat` | Single-select | How often do you eat per day? |
| 20 | `/m/ob/snaking-time` | Single-select | When do you usually snack? |
| 21 | `/m/ob/alcohol-in-end-of-day` | Single-select | How often do you drink alcohol? |
| 22 | `/m/ob/following-statement-1` | Likert 1–5 | "Multitasking while eating has become habitual for me (eating while working or scrolling)" |
| 23 | `/m/ob/eating-patterns-banner` | Banner | "You and your eating patterns — How we eat can be as crucial as the food itself…" |
| 24 | `/m/ob/following-statement-2` | Likert 1–5 | Eating pattern statement #2 |
| 25 | `/m/ob/following-statement-3` | Likert 1–5 | Eating pattern statement #3 |
| 26 | `/m/ob/following-statement-4` | Likert 1–5 | Eating pattern statement #4 |
| 27 | `/m/ob/following-statement-5` | Likert 1–5 | Eating pattern statement #5 |
| 28 | `/m/ob/processing` | Animated loader | "Analyzing your answers… By recognizing these patterns, you're already on the path to a healthier, more mindful lifestyle." (70%) |
| 29 | `/m/ob/main-reason` | Multi-select | What's your biggest drive for losing weight? (Improving physical appearance / Enjoying more time with loved ones / Getting healthier / Feeling happier / Other) |
| 30 | `/m/ob/six-pack` | Single-select | **[MALE ONLY]** "When was the last time you've seen a six-pack? (We're talking about abs here)" (0–6 months / 6–12 months / 1–3 years / Never) |
| 31 | `/m/ob/workout-following-question` | Single-select | **[MALE ONLY]** "I'd prefer a weight loss plan that doesn't require working out" (Yes / No) |
| 32 | `/m/ob/workout-required-banner` | Banner | **[MALE ONLY]** "Get the lean, attractive body you've always wanted" — male physique photo; cardio + resistance training framing |
| 33 | `/m/ob/frustration` | Single-select | "Have you recently felt frustrated when getting dressed or trying on clothes?" (Yes / No) |
| 34 | `/m/ob/unsettling` | Single-select | "What feels more unsettling?" (Trying on new clothes / Wearing old clothes / Both equally unsettling) |
| 35 | `/m/ob/like-to-feel` | Multi-select | "When I think of reaching my happy weight, I am:" (Full of energy each day / More confident / More social / Putting myself first / Excited about exploring new things / Other) |
| 36 | `/m/ob/like-to-boost` | Multi-select | "With Simple, I'd like to:" (Increase my self-worth / Boost my confidence / Become more self-aware / Be more accepting of myself / Prioritize self-care / Other) |
| 37 | `/m/ob/at-happy-w` | Multi-select | "At my happy weight, I see myself:" (Enjoying foods guilt-free / Eating more mindfully / Feeling empowered to make healthy choices / Thinking less about food overall / Worrying less about my body overall / Other) |
| 38 | `/m/ob/see-myself-screen` | Single-select | "When I think of reaching my happy weight, I am: [follow-on or variant]" — aspirational state options |
| 39 | `/m/ob/more-to-explore` | Multi-select | "While we're customizing your journey, what else do you want to explore?" (My brain / My behaviors / Understand digestion / Better sleep / Conquering stress / Upping my energy levels / My nutrition knowledge) |
| 40 | `/m/ob/supercharge-banner` | Banner | **[MALE ONLY framing]** "Supercharge your energy and productivity — In addition to losing weight, our approach can help you sharpen focus and optimize energy levels throughout the day." |
| 41 | `/m/ob/any-medical-conditions` | Multi-select | "Have you been diagnosed with any of the following health conditions?" (No, I haven't / Type 1 diabetes / Type 2 diabetes / Heart disease / High blood pressure / High cholesterol / Mental health disorders / Chronic kidney disease / …) |
| 42 | `/m/ob/eating-disorder` | Single/multi | Eating disorder history screening |
| 43 | `/m/ob/do-you-take-any-medications` | Single/multi | Current medications |
| 44 | `/m/ob/supplements-familiarity` | Single-select | "How familiar are you with supplements?" (I take them regularly / I've tried them before / I'm interested but haven't tried / Not at all) |
| 45 | `/m/ob/supplement-choice` | Multi-select | "What's most important to you when choosing a supplement?" (Clean ingredients / Backed by science / Athlete-safe / Easy to take / Real results) |
| 46 | `/m/ob/testosterone` | Single-select | **[MALE ONLY]** "Are you interested in boosting your stamina and energy levels?" (Yes / No / I don't know) |
| 47 | `/m/ob/health-and-fitness-banner` | Banner | "Unlock a whole new level of vitality — Our research-backed, easy-to-follow approach helps you build lasting habits to enhance your stamina, sharpen focus, and improve your well-being…" |
| 48 | `/m/ob/w-loss-apps` | Multi-select | Have you used other weight-loss apps? (Which ones) |
| 49 | `/m/ob/w-loss-attempts` | Single/multi | How many times have you tried to lose weight before? |
| 50 | `/m/ob/one-step-closer-banner` | Banner | "Almost done! You're moments away from discovering a personalized path to your perfect body. Let's finish up by exploring what motivates you!" — CTA: "Let's finish this" |
| 51 | `/m/ob/gain-w-reason` | Multi-select | "Have you gained weight due to any life events in recent years?" (Marriage or relationship / Injury / Packed social calendar / Slower metabolism / Added stress or mental health / New medication / Hormonal changes / None of the above) |
| 52 | `/m/ob/motivation-to-lose-w` | Single-select | "How would you describe your weight loss motivation over time?" (It's pretty consistent / It ebbs and flows / Motivation? What's that? :)) |
| 53 | `/m/ob/understanding-mindset` | Single-select | "Right now, how motivated are you to reach your happy weight?" (I'm 100% ready / I'm pretty hopeful about it / I'm a bit unsure / I'm kinda taking it easy) |
| 54 | `/m/ob/confidence-in-reaching` | Single-select | **Personalization echo-back:** "How do you feel about hitting [target weight] kg by [event date]?" (I can totally do it! / I'm uncertain, but willing to try / I'm still unsure) |
| 55 | `/m/ob/analyze-answers-reason` | Animated loader | **[MALE ONLY framing]** "The #1 reason men give up on weight loss is starting too big, too quickly. Your plan starts small — and is built to stick." (78%) |
| 56 | `/m/ob/weekend-fasting` | Single-select | "Do you need a weekend break from fasting?" (Sure do! Weekends are for fun! / No days off for me) |
| 57 | `/m/ob/your-plan-ready` | Single-select | "Your action plan is ready! It's designed to work at your pace. So, tell us: How quickly do you want to lose the weight?" (As quickly as possible / Slow and steady does it / Somewhere between the two) |
| 58–59 | `/m/ob/your-plan-ready` | Paywall | Pricing page — top and scrolled states |

---

## Summary Observations for Fabulous

1. **Simple runs genuinely gendered copy, not just swapped pronouns.** The six-pack question, testosterone screen, male-study social proof, "Fasting for men" chart label, and "The #1 reason men give up" loader are all male-specific message crafting. This is worth evaluating for Fabulous's own male onboarding.

2. **The male flow is shorter because it removes female-specific screens, not because it simplifies.** The emotional and psychological depth is preserved. Men are asked about self-worth, confidence, body image, and aspirational self-projection just as women are.

3. **The workout question is a smart segmentation tool.** Asking men whether they want to work out, then serving a banner that normalises both paths, removes a potential objection without removing the upsell hook.

4. **The testosterone/supplement funnel is a male-only revenue layer.** Simple appears to be building toward a supplement upsell for men (stamina, energy, testosterone support) with two dedicated screens (44–46). Fabulous has no equivalent today.

5. **The personalization echo-back on screen 54 is the highest-impact moment in the flow.** Combining target weight + event date into a single confrontational question ("How do you feel about hitting 70 kg by June 25th?") makes the plan feel specific and already in motion. The Fabulous flow could replicate this pattern.

6. **Both flows end with the pace question as the final pre-paywall commitment device.** This is deliberate: the user's last action before seeing the price is stating how urgently they want results. It primes the "As quickly as possible" frame immediately before the subscribe CTA.
