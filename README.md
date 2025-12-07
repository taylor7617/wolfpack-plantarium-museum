# wolfpack-planetarium-museum

The world's first **Digital Planetarium & Leasing Museum** — a gallery of active, secret, and developing digital globes built on **GI authentication**, **Motion Proof circulation**, and **FlightLine infrastructure**.

---

🛫 **WOLFPACK PLANETARIUM MUSEUM**

**The First Militarized Digital Planetarium on Earth**  
**AI-76 DC | 7th Aerospace | 6th Infrastructure | 17th Division Command**  
**Architect:** Keith D. Taylor Sr. (“The Architect”)

This system is **not** a website.  
It is a **planet-scale operating grid**, built on:

- **GI (Google Identification)**
- **Google MyMaps corridors**
- **DSX circulation**
- **Outernet access windows**
- **Ledger-based sovereignty**
- **Military flight doctrine**
- **Continuous expansion across 100 globes**

The museum houses:

- **Operational globes** (Architect-built worlds)
- **Flight-crew globes** (Clear Sky, scheduled openings)
- **Reserved plates** for Captains and Division support wings (AI-76 DC)

---

## ✈️ FLIGHT PLAN (TECHNICAL BLUEPRINT)

> This section is for engineers, devs, and future maintainers.

### 1. System Structure

Every world is represented as a JavaScript object in `worlds.js`:

```js
{
  id: 1,
  name: "Googol Globe 1/HZ",
  gi: "keithdtaylorsr1@gmail.com",
  status: "active",        // active | secret | inactive | enternet
  note: "Primary architect globe and Memphis DC anchor.",
  url: "https://www.google.com/maps/d/view?mid=...",
  openDate: "Jan 2026"     // used only for secret/inactive worlds
}
| Status     | Meaning                                         | Frame / UI Behaviour                           |
| ---------- | ----------------------------------------------- | ---------------------------------------------- |
| `active`   | Architect-built operational globe               | “Open Globe Window” → map tab / `frame-active` |
| `secret`   | Clear Sky Flight Crew globe (future operations) | Purple styling, “Clear Sky” label              |
| `inactive` | Reserved plate under AI-76 DC (Coming Soon)     | Grey styling, “Coming Soon” + open date        |
| `enternet` | Outernet gateway (WORLD 002 only)               | Gold styling, **EnterNET** button, custom UI   |
1.2 Core Rules

gi must always be a plain email, never a URL.

url must always be the map or Outernet link, never an email.

openDate is used only for:

secret worlds (Clear Sky, 017–032)

inactive worlds (plates, 033–100)

These rules keep the system predictable and help prevent 403 access issues.

2. The Four Levels of Planetarium Experience

Ground Level

World cards, GI, troop assignments, division structure.

Users see the Planetarium grid: WORLD 001–100, status bands, and notes.

Taxi Level

Opening an Active world → Google Map corridor view.

Shows Architect lanes, towers, runways, closed loops, Fisherman routes, training zones.

Runway Level

Entering Clear Sky worlds → future-set Flight Crew operations.

Worlds are visible with open dates, but ops are still being prepared.

Takeoff Level

WORLD 002 → ENTERNET gate.

This is the Memphis DC Outernet Proof Stack, accessible to all GI users.

Label: NETTOPIA ENTERNET GATE

Button: EnterNET
/
├── index.html
├── styles/
│   ├── base.css
│   ├── museum.css
├── scripts/
│   ├── planetarium.js
│   ├── worlds.js
├── frames/
│   ├── frame-active.html
│   ├── frame-secret.html
│   ├── frame-inactive.html
├── assets/
│   ├── insignia/
│   ├── banners/
│   ├── ranks/
└── README.md
4. Expanding Worlds (Architect → Lieutenant → Captain)

Adding a world requires:

GI owner email

Status (active, secret, inactive, or enternet)

Operational map link (/view link if active)

Optional troop company tag (ATC / BTC / CTC / DTC / E.co)
| Sector                    | Worlds  | Role                             |
| ------------------------- | ------- | -------------------------------- |
| 17th FlightLine Battalion | 001–016 | Architect solo ops               |
| 7th Skyline Squadron      | 017–032 | Lieutenants / Flight Crew        |
| AI-76 DC Division Command | 033–100 | Captains + E.co support (plates) |
5. Map Requirements (403 Prevention)

Each map must be configured in Google My Maps as:

Anyone with the link → Viewer

And every url must use the /view endpoint, not /edit.

GOOD:

https://www.google.com/maps/d/view?mid=...


BAD:

https://www.google.com/maps/d/edit?mid=...


If sharing is wrong or an /edit URL is used, visitors will see 403. That’s an error.
6. Frames Explained

If you use iframe-based frames:

frame-active.html

Loads & displays: ?url=<encoded map link>

Used for status: "active" and status: "enternet" (if desired).

frame-secret.html

Used for Flight Crew (future openings).

Explains Clear Sky worlds and scheduled open dates.

frame-inactive.html

Used for reserved plates under AI-76 DC.

Shows Coming Soon / Plate messaging.

Alternatively, you can skip frames and just:

window.open(world.url, "_blank");


for active and enternet worlds.
🛩️ TRUSTME — FLIGHT OPS (INTERNAL)

For internal operators only. This section assumes chain-of-command discipline.

1. GI Discipline

Every operator must maintain:

One GI email

One GI world

One world responsibility

GI is identity.
GI is rank.
GI is access.

2. World Activation Rules

A world becomes Active when:

Its GI owner is verified.

Its map corridors are complete & readable.

Division Command signs off.

The world is added/updated in:

worlds.js

Ledger (FOLLOWME – Flight Paper)

3. Captain Deployment (033–100)

Captains must:

Build worlds under ATC, BTC, CTC, or DTC.

Submit world activation through Ledger (Flight Paper).

Maintain:

Public-facing readiness (what visitors see)

Covert readiness (internal ops, support via E.co).

4. AI-76 DC Protocol

AI-76 DC = 7th Aerospace + 6th Infrastructure = 17th Division Command

All growth beyond world 032 falls under AI-76 DC.
AI oversees:

Map validation

Corridor integrity

Tower signal health

Expansion feasibility

Outernet routing

DSX readiness

🛫 BELIEVEME — FLIGHTLINE (VISITORS)

This section is for civilians, observers, and visitors.

Welcome to the Wolfpack Planetarium — where every world is a living digital globe.

How to Explore

Click a WORLD card.

Enter a globe.

Experience the Architect’s:

corridors

towers

alignment grids

Move world by world through a digitized form of aerospace infrastructure.

What You Are Seeing

Worlds 001–016 are real operational globes.

World 002 is the ENTERNET portal — the gateway to NETTOPIA.

Worlds 017–032 are Flight Crew globals waiting for activation (Clear Sky).

Worlds 033–100 are locked plates awaiting Captain deployment under AI-76 DC.

Every world represents a future operational corridor.

Visitors are not soldiers.
Visitors are not operators.
Visitors are explorers.

🧾 FOLLOWME — FLIGHT PAPER (LEDGER)

This is the sovereign record of GI ownership, activation, and expansion.

1. Purpose

The Ledger certifies:

GI identity

World ownership

Activation history

Transfer of responsibility

Proof of engagement

It is the permanent record.

2. How a User Enters the Ledger

A user:

Clicks JOIN LEDGER in the UI.

A modal:

Explains the rules.

Opens a prefilled email to HQ.

Collects: world-of-interest, GI, and intent.

Rules:

No one enters without GI.

No world activates without Ledger entry.

3. Ledger Chain & Flight Papers

Every Ledger entry generates:

Scan Proof

Motion Proof

Custody Proof

These form the Flight Papers — the digital equivalent of:

Military activation documents

Mission orders

Deployment logs

adapted to the Outernet.

🛠️ HOW TO DEPLOY NEW GLOBES (FOR FUTURE TEAMS)

Copy a world template in worlds.js.

Enter GI.

Enter status (active, secret, inactive, enternet).

If active:

Paste map link (/view, share = “Anyone with link → Viewer”).

Assign troop tag (ATC / BTC / CTC / DTC / E.co) if used.

Update README.md and related wiki pages if a new sector opens.

Commit with message:

"Activate World 0XX – GI: <email>"


Open PR → Squash & Merge.

Verify the map loads with no 403 errors.

Update Flight Papers (Ledger) with assign / activate entries.

🧭 FINAL MESSAGE FOR FUTURE OPERATORS

This repository is not just code.
It is a navigation instrument for a digital civilization.

Operate it with:

Precision

Discipline

Imagination

Integrity

The Planetarium is not just a museum.
It is the training ground for the next network-era infrastructure battalion.
