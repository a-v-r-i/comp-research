# Liven Onboarding Analysis
**Date captured:** 2026-03-20
**URL:** https://theliven.com
**Quiz URL:** https://quiz.theliven.com/en/[variant]/quiz
**Flow variant tested:** Female, 25–34
**Inputs used:** email = alex@example.com, name = Alex
**Stopped at:** "Scratch & Save" gamified discount screen (pre-payment)

---

## Screenshot Index

| # | Filename | Screen |
|---|----------|--------|
| 01 | 01-homepage.png | Homepage — "Meet your well-being app and self-discovery companion" |
| 02 | 02-gender-selection.png | Quiz entry — "Is your nervous system dysregulated?" (Male / Female) |
| 03 | 03-age-selection.png | Age selection — 18–24, 25–34, 35–44, 45–54, 55–64, 65+ |
| 04 | 04-welcome-honest-reflection.png | Welcome — "We're glad you are here" / honest reflection framing |
| 05–34 | 05-q01.png … 34-q30.png | 30 emoji Likert-scale statement questions (strongly disagree → strongly agree) |
| 35 | 35-q31.png | "Did you experience ongoing stress or emotional distance in childhood?" (Yes / Sometimes / No / Hard to say) |
| 36 | 36-q32.png | "Do you feel like there is additional stress in your life?" |
| 37 | 37-q33.png | "Are you going through any of these?" (multi-select: Healing from trauma, Financial difficulties, Loneliness, Relationship issues, Parenthood, Health issues, Caring for parents) |
| 39 | 39-post-name.png | "Do you experience any of these mental symptoms?" (multi-select: Overthinking, Mental fog, Self-criticism, Burnout, Anxiety, Loss of interest) |
| 41 | 41-post-name.png | "Do you experience any of these physical symptoms?" |
| 43 | 43-post-name.png | "What areas would you like to improve?" |
| 45 | 45-post-name.png | Credibility — Harvard / Oxford / Cambridge logos + "Liven was developed using evidence-based psychological practices" |
| 46 | 46-q38.png | "What do you want to feel like during your journey?" (Energized, Focused, Calm, Motivated, Appreciated, Balanced, Rested) |
| 48 | 48-post-name.png | "How much do you know about Cognitive Behavioral Therapy?" |
| 49 | 49-q40.png | "Did you hear about Liven from a therapist?" |
| 50 | 50-q41.png | Social proof wall — "Join over 2,500,000 people" + user avatar grid with short quotes |
| 51 | 51-q42.png | Email gate — "Enter your email to see your personal Profile Summary" |
| 53 | 53-post-email.png | Marketing opt-in — "Do you want to receive emails with well-being tips and our product updates?" (Sure, I'm in! / I don't want to receive tips or updates) |
| 54 | 54-q44.png | Name — "What's your first name?" |
| 56 | 56-post-name.png | **Results summary** — "Summary of your nervous system profile" (face photo, gauge, metrics: Functional Freeze, Low, High, Systemic Overload) |
| 57–68 | 57-q46.png … | **Loading screen** — "Creating your Neurobalance Plan for women 25–34" — animated progress bar cycling through testimonials |
| 69 | 69-q58.png | **Offer screen** — "Alex, Scratch & Save on your personal Neurobalance Plan" — gamified scratch card to reveal discount |

---

## Onboarding Flow Summary

The Liven onboarding is a **39-question diagnostic quiz** framed as a nervous system health test. Total run time feels like ~8–10 minutes. It is split into clear psychological stages:

### Stage 1 — Hook & Problem Framing (screens 1–2)
The homepage and quiz entry immediately stake a clinical-feeling claim: **"Is your nervous system dysregulated?"** This is a loaded question — most users don't know the answer, creating curiosity and mild anxiety. The phrase "survival mode" appears in the subtitle, connecting to a real feeling most stressed adults recognise. The CTA is "Start with a test" rather than "Sign up" — low commitment framing.

### Stage 2 — Segmentation (screens 3–4)
Gender and age are collected first. This serves double duty: personalisation data AND increasing investment (micro-commitment before any content is consumed). The "We're glad you are here" welcome screen + "honest reflection" framing is a **psychological safety setter** — it signals this is a non-judgmental space, lowering defences before the hard questions begin.

### Stage 3 — Problem Amplification (screens 5–34, 30 questions)
The heart of the funnel: 30 Likert-scale statements about body tension, shallow breathing, overstimulation, emotional flatness, libido drop, guilt about resting, phone scrolling to avoid thoughts, digestive issues, sleep problems, and "survival mode." Every question is worded as **"I often…" / "I feel…"** in first person — users read and internalise each statement as their own experience. Answering "strongly agree" repeatedly is a micro-confession pattern that builds emotional resonance. The UI is minimal (large question, emoji scale at the bottom) with a progress counter (1/39) that creates commitment momentum.

**Key symptom categories covered:**
- Physical arousal: tension, racing heart, restlessness, jaw clenching
- Cognitive load: overthinking, focus loss, overwhelm
- Emotional dysregulation: 0-to-100 reactions, inability to calm down, emotional flatness, low libido
- Behavioural avoidance: phone scrolling, dissociation, carb cravings
- Somatic: bloating, sleep issues, morning stiffness, fatigue
- Relational: isolation, no support system

### Stage 4 — Context & Life Circumstances (screens 35–37)
Switches from Likert scale to yes/no and multi-select. Questions about childhood stress, current life stressors (financial difficulty, loneliness, trauma, parenthood) and mental symptoms (burnout, anxiety, overthinking). This deepens the personalisation story and adds **therapeutic context** — the user feels understood on a human level, not just assessed clinically.

### Stage 5 — Aspiration Pivot (screens 38, Q37)
The tone shifts from "what's wrong" to "what do you want to feel" — Energized / Focused / Calm / Motivated / Appreciated / Balanced / Rested. This is a classic **pain-to-gain transition** that reframes the user's identity as someone on a healing journey, not just someone with problems.

### Stage 6 — Credibility Building (screen 45)
Mid-quiz interstitial: Harvard, Oxford, and Cambridge university logos with "Liven was developed using evidence-based psychological practices. Your journey is based on decades of research." Placed after the emotional amplification stage, when trust is most needed. Combines **authority bias** (elite institutions) and **scientific legitimacy** framing.

### Stage 7 — Social Proof & Community (screen 50)
"Join over 2,500,000 people" with a grid of real user avatars and short quotes ("Finally understood I wasn't lazy", "Eye opening", "I'm feeling hopeful"). This uses **bandwagon effect** and **aspirational identity** — the user can see themselves in the community grid. Placed just before the email gate.

### Stage 8 — Email Gate / Value Exchange (screens 51–52)
"Enter your email to see your personal Profile Summary." The framing **withholds the results** you've just spent 10 minutes generating — a classic sunk cost + curiosity gap play. The privacy lock icon and "We respect your privacy" text reduces friction. Email is collected before results are revealed.

### Stage 9 — Name & Personalisation (screen 54)
After email, the quiz asks for a first name. This enables **name personalisation** in the offer screen ("Alex, Scratch & Save…"). Micro-commitment that also increases psychological ownership of the plan.

### Stage 10 — Results & Identity Labelling (screen 56)
The profile summary shows a photo (personalised to the gender selected), a severity gauge in the red zone ("High" dysregulation), and four named metrics: **Functional Freeze, Low, High, Systemic Overload.** This is an **identity crystallisation** moment — giving the user a named diagnosis-like label for what they're experiencing. The framing is alarming enough to motivate action but not so clinical as to be scary.

### Stage 11 — Plan Creation Loading Screen (screens 57–68)
An animated progress bar showing "Creating your Neurobalance Plan for women 25–34" cycling through steps (Setting goals, 38%…). This shows **rotating Trustpilot-style testimonials** while the user waits. Classic perceived personalisation + anticipation building. The plan isn't generic — it's for "women 25–34", repeating the exact demographic segmentation.

### Stage 12 — Gamified Offer / Pre-Payment (screen 69)
"Alex, Scratch & Save on your personal Neurobalance Plan — A little support, right when you need it." A **scratch card interaction** to reveal a personalised discount. This is a multi-layer conversion mechanic:
1. Uses the name ("Alex") — personal ownership
2. Frames discount as a gift, not a sale
3. Gamification (scratching) creates active participation = higher commitment
4. "A little support, right when you need it" — empathy framing at the moment of purchase decision

---

## Psychological Mechanisms Summary

| Mechanism | Where Used |
|-----------|-----------|
| Curiosity gap / diagnostic hook | Homepage: "Is your nervous system dysregulated?" |
| Micro-commitment ladder | Gender → age → 30 Likert questions → email → name |
| Problem amplification (pain stacking) | 30 questions mapping every possible stress symptom |
| First-person statement framing | All Likert questions start with "I…" — user internalises them |
| Sunk cost / investment effect | 10 min quiz before results gated behind email |
| Curiosity gap (withheld results) | "Enter your email to see your personal Profile Summary" |
| Authority bias | Harvard / Oxford / Cambridge logos mid-quiz |
| Social proof | 2,500,000 users + avatar grid with quotes |
| Personalisation at scale | Name, gender, age used throughout ("Alex, women 25–34") |
| Identity labelling | "Systemic Overload" / "Functional Freeze" — named diagnoses |
| Pain-to-gain pivot | "What do you want to feel like?" after problem questions |
| Gamification | Scratch card discount reveal |
| Gift framing | Discount positioned as gift ("A little support, right when you need it") |
| CBT legitimacy signal | "How much do you know about Cognitive Behavioral Therapy?" (positions product in evidence-based category) |
| Therapist channel signal | "Did you hear about Liven from a therapist?" (primes trust, tracks referral) |

---

## Ideas to Test for Fabulous Web Onboarding

1. **Diagnostic/test framing on entry** — "Is your [X] out of sync?" instead of a generic signup. Liven gets users to answer their own pain before we ask anything.

2. **Pain stacking with Likert scales** — 30 self-referential "I…" statements before the offer. Each answer is a micro-confession that builds emotional investment. We could do a shorter version (10–15 questions) specific to habit/routine struggles.

3. **Sunk cost before email gate** — Gate results/profile behind email after quiz completion. Currently we may ask for email too early. Liven waits until the user has invested 10 minutes.

4. **Identity labels from quiz results** — Give the user a named profile type ("Reactive Overloader", "Avoidant Drifter") tied to their specific answers. Creates ownership and makes the plan feel personalised.

5. **Credibility interstitial mid-quiz** — Insert a "science behind this" screen during the diagnostic phase (not just at the end). Timing matters — show it after pain has been established.

6. **Name personalisation in offer** — Use the user's first name in the pricing/offer CTA. "Alex, your plan is ready" feels very different from a generic offer.

7. **"What do you want to feel like?" question** — A positive aspirational question at the end of the diagnostic phase before showing results. We use "goals" but this is more emotionally specific.

8. **Gamified discount reveal** — Scratch card / spin / reveal mechanic instead of a static discount banner. Active participation increases commitment.

9. **Social proof community screen** — "Join X,000,000 people" with real faces and quotes just before the email gate. Timing (pre-gate) is key.

10. **Loading/plan creation screen with testimonials** — The animated "Creating your plan for [segment]" with cycling reviews fills wait time and reinforces personalisation. If we have any plan generation step, this pattern is worth testing.

---

## How to Detect Changes in Future Runs

To check if Liven has changed their onboarding:
1. Re-run this script: `/tmp/playwright-liven-v3.js`
2. Compare the new screenshots against this folder
3. Key change indicators:
   - **Number of questions** (currently 39, counter visible top-right of each quiz screen)
   - **Question order** — compare Q1–Q5 text
   - **New stages** — check if a loading screen, new interstitial, or new question type appears
   - **Offer screen** — the "Scratch & Save" gamification may be A/B tested; look for changes in the offer mechanic
   - **Email gate position** — currently placed after Q42 (of 39 quiz questions + interstitials)
   - **Credibility screen content** — currently Harvard/Oxford/Cambridge; may change institutions or add more

**Quiz URL pattern:** `https://quiz.theliven.com/en/[variant_id]/quiz` — the variant ID changes per session, not indicative of A/B test alone; use question content as the reference.
