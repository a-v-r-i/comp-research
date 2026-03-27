# Noom Onboarding Analysis
**Crawled:** 2026-03-24
**Variant:** Weight loss (Lose 1–10 kg), Female, 25–34
**Total screens:** 109 (stops at credit card entry)
**URL:** https://www.noom.com/
**Inputs used:** email = alex@example.com, name = Alex

---

## Flow Overview

Noom's onboarding is one of the longest in the space — 109 screens before the paywall. It is organized into 7 named **sections** displayed as a dot-based progress tracker, creating a journey from physical data collection → motivation → identity formation → habits → payment.

### Sections (visible on loading screen)
1. **Demographic Profile** — sex, gender identity, age, height, weight, health conditions, diabetes, eating disorders
2. **Weight Loss Goals** — ideal weight, focus area, event motivation, pace, GLP-1 medication
3. **Weight Loss History** — (within flow, not captured in detail)
4. **Eating & Nutrition** — dietary restrictions, food logging, cravings
5. **Fitness & Health** — movement frequency, activity attitude, sleep
6. **Holistic Health Connection** — stress, energy, emotional wellbeing interests
7. **Understanding Behavior Change** — habit formation, weigh-in timing, mindful eating

Between sections: animated **loading/calculation screens** (BUILDING PLAN, Analyzing Demographic Profile, Preparing Results) that simulate AI processing and reinforce perceived personalization.

---

## Screen-by-Screen Notes

### Homepage (01)
- Headline: **"Learn to eat mindfully. Psychology is the key to lasting change."**
- Orange "Continue" CTA against food photography background
- Immediate psychology differentiation — no mention of calories or diet rules

### Demographic Profile (q01–q10)

| Screen | Question | Notes |
|--------|----------|-------|
| q01 | What is your weight loss goal? | Lose 1–10 / 11–20 / 20+ kg, Maintain, Undecided |
| q02 | What sex were you assigned at birth? | Male/Female/Intersex — with rationale about hormonal metabolism |
| q03 | What is your gender identity? | Man/Woman/Non-binary/Different term/Prefer not to say |
| q04 | How old are you? | Age by decade (20s–80s+) |
| q05 | What is your height? | Numeric cm input |
| q06 | What's your current weight? | Numeric kg — "We don't mean to pry, we just need to know so we can build a plan that's right for you." |
| q07 | Do you have any of the following conditions? | Multi-select: Testosterone deficiency, Heart Disease, High BP, High Cholesterol, Depression, Other, None |
| — | Empathy interstitial | Teal background: "We're really glad you shared. Weight loss is an important goal, but Noom's mission is helping people get healthier, whatever that is for them." → orange "Next" |
| q09 | Diagnosed with diabetes? | Yes/No — "We ask this to tailor your program with the right support" |
| q10 | Active eating disorder? | Yes/No (bulimia, anorexia, similar) |

**Notable:** Sex and gender identity are asked separately — sex for clinical accuracy (hormonal calorie metabolism), gender for inclusivity. The empathy interstitial after health conditions is a friction-reducer: Noom reframes itself as a health mission before the user can feel judged.

### Social Proof / Trust (q11–q14, interstitial screens)
- "You're in trusted hands" — 3,627,436 people lose weight (pink background, non-interactive)
- Noom vs. restrictive diet chart — "78% of participants lost weight over 6 months"
- Mike testimonial: "Noom changed the way I think about food, it changed my relationship with food."
- These are tap-to-continue screens — rhythm breaks + belief-building before the goal-setting section

### Weight Loss Goals (q12–q20)

| Screen | Question | Notes |
|--------|----------|-------|
| q12 | What is your ideal weight? | Numeric kg, shows "Recommended weight range: 58–72 kg", disclaimer that users typically lose 0.5–1 kg/week |
| q14 | What area to focus on? | Nutrition / Physical activity / Building good habits / Other |
| q15 | Important event coming up? | Yes/No — triggers date question if Yes |
| q16 | When is the vacation? | Date picker + "Skip" option |
| q18 | Which pace would you prefer? | As fast as possible / Slow and steady wins the race / Somewhere in between |
| q19 | Taking GLP-1 medication? | Yes / I have a prescription but haven't started / No, but I am considering / No |

**Notable:** The GLP-1 question (Ozempic/Mounjaro/Wegovy/Zepbound) signals Noom's awareness of the pharmaceutical weight loss market and likely triggers specialized messaging about behavioral support alongside medication.

### Calculation loading screens (q20–q28)
- "Lose twice as much weight with Noom vs. trying on your own" — animated 2x bar chart (based on 12-week active user study)
- Progress animation: "ANALYZING RESPONSES 15%" → "CALCULATING WEIGHT LOSS PACE 34%" → "PREPARING RESULTS 68%"
- ~7 screens on this one visual — not real computation, but effectively frames Noom as data-driven

### Email gate (q29)
- **Placement:** After calculation screens, before showing the result
- Copy: "Enter your email to see when Noom can help you reach **70 kg**"
- CTA: "See My Result" (disabled until email entered)
- Sub-copy: "We'll email you a copy of your results for convenient access."
- Legal: Clicking acknowledges Terms of Use and Privacy Policy

**Key mechanic:** The target weight (70 kg) is already personalized before email entry — creates investment in the result before the gate is crossed.

### Post-email (q29–q31)
- Marketing opt-in: "Would you like us to occasionally send you weight loss research, advice, and special offers?" Yes/No radio buttons
- **Weight prediction result (full-page):** "THE LAST WEIGHT LOSS PROGRAM YOU'LL EVER NEED"
  - "WE PREDICT YOU'LL BE **70 kg by 9 Aug**" — personalized downward curve chart (current → goal)
  - "Great news! Based on Noom users like you, we predict you'll conservatively hit your weight loss goal by 9 August."
  - "Next, tell us a bit about your habits and behavior so we can determine if you can reach your goal sooner."
  - CTA: "Continue" (orange)

**Notable:** This is the strongest commitment hook in the flow. Noom gives you a concrete end date before any payment ask — you now have a personal prediction to fulfill, which creates pull through the remaining 70+ screens.

### Name input → WEIGHT LOSS PROFILE begins (q30/q32)
- "What is your preferred first name?" — header changes to WEIGHT LOSS PROFILE
- Name used throughout downstream copy (e.g., "So let's do this, Alex")

### Behavioral Profile Quiz intro (screen 34)
- Teal background: **"Behavioral Profile Quiz"** — framed as a quiz, not a questionnaire
- "Start Your Quiz" CTA

### Behavioral Profile Quiz — 10 drag-sliders (q32–q41)
- First question: "Drag the slider" instruction
- Questions 2–10: "If both fit, choose one you agree with more"
- Slider has 5 discrete positions between two opposing statements
- Example: "Reach a lower weight" ↔ "Change my lifestyle"
- Unique interaction mechanic — not seen in other wellness competitors

### Behavioral Profile result (screen 46)
- Full-screen teal reveal: **"YOUR BEHAVIORAL PROFILE: Proof Seeker"**
- Users get a named archetype — creates identity before purchase

### Weight Loss Profile — emotional questions (q44–q46)
Yes/No illustrated cards with collage imagery:
- "My weight has affected my ability to socialize or engage with friends and family."
- "I have been thinking about weight loss for a while, but life is so busy I find myself putting convenience first."
- Habit setup: "When will you read your daily lesson?" — time picker for daily engagement

### Eating and Nutrition section (q48–q60)
- "Do you have any dietary restrictions or food allergies?" (Yes/No)
- Educational insert: "Noom doesn't follow a 'one-diet-fits-all' approach, and what you're already eating can likely be adapted to your weight loss goals."
- "In the last week, which of these foods have you eaten?" — White Rice / Eggs / Chicken / Avocado / None
- "Do you crave or enjoy any of the following?" — food cravings mapping
- "Lastly, which of these are foods you would eat?" — Tomatoes / Salad Greens / Bananas / Cucumbers / None
- Multiple rounds of food preference questions, building a diet profile without imposing a diet label

### Holistic Health & Weight Loss (q61–q62)
- "As we build your weight loss plan, what else do you want to explore?"
- Multi-select: Healthy aging / Changes in metabolism / Digestion / Improving sleep / Reducing stress / Increasing energy / Emotional wellbeing / Rest and recovery / ...

### Fitness & Movement (q67–q71)
- "MOVEMENT 2/3" subsection badge visible
- "How often do you engage in physical activity?" (frequency)
- "How do you feel when you think about physical activity?" — Excited / Anxious / Reluctant / Indifferent / Proud
- "Are you interested in finding movements that resonate well with your body?"
- Emotional framing rather than intensity/duration questions

### Holistic Health Connection — sleep + stress (q66, q72–q75)
- "On a weekly basis, how often do you feel stressed or overwhelmed?"
- "Please select any of the following things you might do if you're feeling stressed or overwhelmed:"
- "How would you rate the quality of your sleep over the past month?"
- "Which of the following have you experienced in the past month?" — sleep symptoms
- "How often do you feel rested and alert during the day after a night's sleep?"

### Understanding Behavior Change (q77–q85)
- Motivation tracking: "How has your motivation to lose weight changed over the past month?"
- Current motivation level scale
- Motivational teal card: "A goal without a plan is just a wish. Did you know... Setting small goals allows for more frequent wins. Staying motivated helps you crush more goals. So let's do this, Alex" → "Set My First Goal" CTA
- Personal goal setting: "In addition to your weight loss goal, what's a goal you would like to achieve?"
- Mindful eating: "Let's say you're reaching for a snack. Which is the healthier choice?"
- "How can mindful eating help you?"
- Daily weigh-in: "Scientific studies have shown that daily weigh-ins promote long-term weight loss. When is the best time to weigh yourself?" — First thing after you wake / Once you've eaten your last meal
- Attribution: "Where did you hear about us?" — with podcast sub-question ("On which podcast?") via dropdown

### Building Plan loading (screens 63, 89–94)
Three distinct loading phases:
1. **BUILDING PLAN** — mint green with Newton's cradle food animation, "WHY NOOM IS DIFFERENT" header
2. **Analyzing Demographic Profile** — full dashboard with 7 labeled category bars animating (Demographic Profile → 69%, others → 0%), "Sit tight! We're building your perfect plan based on millions of data points from successful Noom users"
3. **Preparing results** — percentage progress bar

### Post-loading cinematic transition (screens 95–103)
- Dark teal splash: "WELCOME TO NOOM WEIGHT" (logo centered)
- White background: "we've created a personalized plan"
- White background: "and build healthy habits." (fading in)
- ~9 frames total — a polished "arrival" moment borrowed from native app onboarding

### Pricing: pay-what-you-can trial (screen 107)
- "Try Noom for 2 weeks."
- **Three price points:** €1 / €11 (pre-selected) / €16.41 per trial period
- This structure removes price as an objection by anchoring at €1

### "Start Your 14-Day Trial" page (screen 108)
- Personalized plan summary bullet points: Lose 10 kg by 18 June / Continue developing healthy habits / Live a healthier life
- Weight loss curve chart (80 kg → 70 kg goal, Apr–Jun)
- **Urgency block:** "FREE COURSE ENHANCEMENTS OFFER — Sign up in the next 15 minutes and you'll get all of your Course Enhancements for **free!** EXPIRES IN: 15:00" — countdown timer visible

### Payment (screen 109)
- Credit card form — crawler stops here (by design)

---

## Key Strategic Observations

### 1. Psychology-first positioning, sustained throughout
Every section label, interstitial card, and loading screen reinforces "behavioral change" and "psychology" rather than diet or exercise rules. This is not just a headline claim — it runs from the first screen through the "Behavioral Profile" quiz to the "Understanding Behavior Change" section. The positioning is fully integrated.

### 2. Identity formation before the paywall
The Behavioral Profile Quiz assigns users a named type ("Proof Seeker") before money is asked. This is a classic commitment-and-consistency mechanism: once you have an identity that explains your relationship with food, you want the program designed for that type. Abandoning the funnel means abandoning self-knowledge you just earned.

### 3. Personalized data is reflected back immediately
Each data entry screen is framed as enabling personalization. The data is reflected back in:
- The email gate ("help you reach **70 kg**")
- The prediction screen ("you'll reach **70 kg by 9 Aug**")
- The paywall plan summary ("Lose 10 kg by 18 June")
- CTAs personalized with name ("So let's do this, Alex")

This loop — collect data → show it back personalized — makes the quiz feel productive rather than intrusive.

### 4. Empathy interruptions reduce abandonment at hard questions
After sensitive disclosures (health conditions, eating disorders), Noom inserts non-question teal interstitial cards: "We're really glad you shared. Noom's mission is helping people get healthier, whatever that is for them." These serve as pacing devices and signal that Noom won't judge users for their answers.

### 5. GLP-1 integration
The Ozempic/Mounjaro/Wegovy/Zepbound question signals Noom's positioning as a behavioral complement to pharmaceutical weight loss. This is strategically important as GLP-1 medications expand — Noom is building the bridge between medication and behavior change.

### 6. Loading screens as trust theater
Three distinct loading animations reinforce the perception of AI-powered personalization. The multi-category progress bar ("Analyzing Demographic Profile... Analyzing Weight Loss Goals...") is particularly effective — it looks like real computation, maps back to the sections the user just completed, and fills perceived wait time with meaning.

### 7. Extreme funnel length as commitment device
~100 questions across 8+ named sections. By screen 109, the user has invested 20–40 minutes, received a named behavioral profile, a personalized goal date, and a visual plan. Abandoning now means discarding all of that — the sunk cost effect works in Noom's favor.

### 8. Pay-what-you-can pricing removes objection at entry
€1/€11/€16.41 trial period options. The €1 option removes all price-based objections while the €11 pre-selected anchor steers most users toward a meaningful trial. This converts users who would otherwise bounce on pricing, presumably converting many to full subscribers post-trial.

### 9. Countdown timer urgency at paywall
15-minute countdown for "FREE COURSE ENHANCEMENTS OFFER" is a classic conversion pressure tactic. After 40 minutes of investment in the quiz, a 15-minute deadline feels urgent.

### 10. Cinematic "arrival" transition
The post-loading "WELCOME TO NOOM WEIGHT" animation (9 frames) treats plan completion as an app-launch moment. Most web funnels skip this entirely and go straight to pricing — Noom creates a beat of celebration before the ask.

---

## Psychological Mechanisms Summary

| Mechanism | Where Used |
|-----------|-----------|
| Investment / sunk cost | ~100-screen funnel before paywall |
| Commitment & consistency | Behavioral archetype reveal, named quiz sections |
| Personalization illusion | Data reflected back at email gate, prediction, paywall |
| Social proof | 3.6M users, 78% success rate, 2x weight loss chart, testimonial |
| Authority | "Scientific studies have shown...", clinical-looking loading bars |
| Empathy / rapport | Interstitial cards after sensitive questions |
| Loss aversion | Urgency countdown timer at paywall |
| Identity labeling | "Proof Seeker" behavioral archetype |
| Anchoring | €1 trial creates low anchor; €11 pre-selected as default |
| Predictive commitment | Goal date shown ("70 kg by 9 Aug") before payment |

---

## Ideas to Test for Fabulous Web Onboarding

1. **Behavioral archetype reveal pre-paywall** — assigning users a named type ("Consistency Seeker", "Momentum Builder") between assessment and paywall could increase commitment. Low lift: map existing assessment answers to 3–4 archetypes.

2. **Personalized goal-date prediction** — "Based on users like you, we predict you'll build your morning routine by [date]" — showing a concrete end date dramatically increases commitment. Doesn't need real ML, just a reasonable estimate based on answers.

3. **Empathy interstitials after hard questions** — after users disclose stress, sleep issues, or past failures, a brief affirming card before the next question reduces abandonment. Example: "Lots of Fabulous users felt exactly this way before finding a routine that worked."

4. **Loading theater** — a multi-category progress bar ("Analyzing your sleep patterns... daily rhythms... stress triggers...") after the assessment creates perceived AI personalization with minimal engineering.

5. **GLP-1 / medication awareness** — worth adding a question about medication or supplement use for future positioning as a behavioral health complement.

6. **Pay-what-you-can trial** — if Fabulous hasn't tested €1 trials, Noom's model suggests high conversion potential. The key is that the value must already be established (personal plan, prediction, profile result) before the price is shown.

7. **Cinematic "welcome" moment** — a brief branded transition between "plan ready" and pricing creates a psychological arrival that makes the product feel more substantial before the ask.

---

## How to Detect Changes in Future Runs

- Re-run: `cd ~/.claude/skills/competitor-crawl && SITE=noom node runner.js`
- Compare screenshot count (currently 109)
- Key screens to diff: q01 (first question), q19 (GLP-1 question presence), q29 (email gate screen number), screen 107 (pricing amounts)
- Note any new section labels on the progress tracker (currently 7 sections + payment)
