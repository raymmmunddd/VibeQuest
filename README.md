# FortunePop

## Vercel + MongoDB Atlas setup

This project is ready for Vercel hosting with serverless API routes.

1. Create a MongoDB Atlas cluster.
2. In Atlas, create a database user and copy your connection string.
3. In Atlas Network Access, allow Vercel to connect. For a school/demo project, `0.0.0.0/0` is the simplest option.
4. In Vercel Project Settings > Environment Variables, add:

```text
MONGODB_URI=your_atlas_connection_string
MONGODB_DB=fortunepop
```

5. Redeploy the Vercel project after adding the variables.
6. Test one spin, then check MongoDB Atlas:
   - `prizes` should contain seeded prize choices.
   - `prizeClaims` should contain the saved spin result.

## Local testing

Install the Vercel CLI if needed:

```bash
npm install -g vercel
```

Then run:

```bash
npm install
npm run dev
```

Open the local Vercel URL shown in the terminal.

## API routes

- `GET /api/prizes` returns active prizes for the wheel.
- `POST /api/prizes/spin` picks a prize, reduces stock when limited, saves the claim, then returns the prize.

The frontend waits for `/api/prizes/spin` to save successfully before animating the wheel result. If the DB save fails, it shows a retry message instead of showing an unrecorded prize.
