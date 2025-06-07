# REM Waste Skip Selection Page Redesign

## Description

This is a redesign of the REM Waste skip selection step in the skip hire process.

---

## Process

### Tools Used

- **Bolt AI**
- **ChatGPT**

---

### Initial Prompt (Bolt AI)

> Create a webpage for choosing skips by size in waste management. Each skip should have its own card. The card should have an image of a skip model, the skip yard size, hire period, price before VAT, and a button that says **"select this skip"** with a small arrow pointing right.  
> When either the button or the card is clicked, the button changes to blue and reads **"selected"**.  
> Only one skip can be selected at a time. Selecting a new skip deselects the previous one.  
> Here is an example of the data used for the cards:

```json
{
  "id": 17933,
  "size": 4,
  "hire_period_days": 14,
  "transport_cost": null,
  "per_tonne_cost": null,
  "price_before_vat": 278,
  "vat": 20,
  "postcode": "NR32",
  "area": "",
  "forbidden": false,
  "created_at": "2025-04-03T13:51:46.897146",
  "updated_at": "2025-04-07T13:16:52.813",
  "allowed_on_road": true,
  "allows_heavy_waste": true
}
```

> 🔹 Result: Page was generated without the header. The selection summary was displayed at the bottom of the page instead of being fixed at the bottom of the screen.

---

### Second Prompt (Bolt AI)

> This page is part of a form-filling process. The pages are:
Postcode → Waste Type → Select Skip → Permit Check → Choose Date → Payment  
>Each page name has a corresponding icon.
The active page is highlighted.
Lines between each step highlight when a step is completed.
Future steps are disabled and not clickable, while previous and current steps are clickable.

> 🔹 Result: Header was generated as expected.

---

### Redesign Continuation (ChatGPT)

- Redesigned the selection summary.

- Reworked and improved the entire page layout.

Follow this link to see the chat conversation:  
[https://chatgpt.com/share/68447eb7-4044-8011-8224-42aaaa0d2ca4](https://chatgpt.com/share/68447eb7-4044-8011-8224-42aaaa0d2ca4)

---

### Repository and Live Preview

- 🗂 GitHub Repository: [https://github.com/Muramara/skip-selection](https://github.com/Muramara/skip-selection)

- 🚀 Live Preview (CodeSandbox): [https://58h23y-5173.csb.app/](https://58h23y-5173.csb.app/)

---

### Installation & Setup

If you'd like your own copy of the project, follow the steps below:

1. Clone repository:
```bash
git clone https://github.com/Muramara/skip-selection.git
cd skip-selection
```

2. Install dependencies:
```bash
npm install
```

3. Run in development mode:
```bash
npm run dev
```

4. Build the project
```bash
npm run build
```

5. Preview the production build
```bash
npm run preview
```
