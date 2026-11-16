# Project memory

## Product intent & audience

- Institutional landing page for **Horus Reparos Automotivos**, an automotive repair shop.
- Built with Vite + React + TypeScript + Tailwind CSS.
- Key sections: services, photo gallery, WhatsApp integration.
- Target audience: local vehicle owners seeking reliable repair services; imagery should feature popular/common consumer cars, not luxury or sports models.

## Brand personality & voice

- Professional, trustworthy automotive service brand.
- User communicates in Brazilian Portuguese; UI copy is in Portuguese.

## Visual design & UX direction

- Custom logo image supplied by the user; rendered in header, hero/top of page, and footer.
- Logo asset is low resolution — may appear soft at large sizes; high-res version preferred if available.
- Hero imagery features popular SUV in a modern garage setting (replaced earlier sports car).
- Gallery images retained; should align with popular-car theme.
- Icons from `lucide-react`; `@/` path alias for imports; Tailwind for styling.

## Decisions, constraints & rationale

- Logo swapped across all three locations (header, hero, footer) per user request.
- Hero photo changed from sports car to popular SUV to match user preference for popular cars.
- Gallery left unchanged after the swap; user intent for "popular cars" partially addressed in hero only.
- No extra UI packages installed beyond the default template stack.

## Open questions & assumptions

- Clarify whether gallery images should also be replaced/filtered to show popular cars specifically.
- A higher-resolution logo file is assumed to be available from the user; not yet provided.
- Exact WhatsApp number and service details assumed placeholder unless confirmed by user.