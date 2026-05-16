# E21 ADV

Landing page da E21 ADV — produtora de autoridade digital para advogados.

Stack: Next.js (App Router) + TypeScript + Tailwind CSS v4.

## Como rodar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Estrutura de pastas

```
e21adv/
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Layout raiz (Playfair Display + DM Sans, metadata)
│   │   ├── page.tsx                  # Monta as seções
│   │   └── globals.css               # Tema Tailwind v4 (marrom/dourado, fonts, scroll suave)
│   ├── components/
│   │   ├── Hero.tsx                  # Título, CTA, placeholder de vídeo + popups
│   │   ├── NotificationPopup.tsx     # Card flutuante (notificações sobre o vídeo)
│   │   ├── PainPoints.tsx            # Seção "Isso é sobre você?"
│   │   ├── PhotoDivider.tsx          # Divisor visual full-width reutilizável
│   │   ├── PhotoPlaceholder.tsx      # Placeholder de mídia (16:9, 4:3, 1:1)
│   │   ├── Differentiator.tsx        # "Aqui, sua imagem é protagonista"
│   │   ├── HowItWorks.tsx            # Fases 1 e 2
│   │   ├── Testimonials.tsx          # Depoimentos
│   │   ├── ApplicationForm.tsx       # Form de agendamento (#formulario)
│   │   └── Footer.tsx
│   ├── lib/
│   │   └── constants.ts              # Todos os textos da página
│   └── hooks/
│       └── useFadeIn.ts              # Intersection Observer pra animação de fade-in
├── public/
│   └── images/                       # Substitua os placeholders pelas fotos reais
├── next.config.ts
└── README.md
```

## Como editar textos

Tudo em [`src/lib/constants.ts`](src/lib/constants.ts). Cada seção tem seu próprio objeto (`HERO`, `PAIN_POINTS`, `TESTIMONIALS`, etc).

## Como trocar fotos e o vídeo do hero

1. Dropar os arquivos reais em `/public/images/` (ou `/public/video/` pro vídeo).
2. Em cada componente que usa `PhotoPlaceholder`, trocar pelo `next/image`:

```tsx
// antes
<PhotoPlaceholder description="FOTO: Advogado gravando" ratio="4:3" />

// depois
<Image src="/images/hero.jpg" alt="Advogado gravando" width={800} height={600} />
```

**Vídeo do hero**: edite [src/components/Hero.tsx](src/components/Hero.tsx) e troque o `<PhotoPlaceholder>` por um `<video autoPlay muted loop playsInline>`.

**Popups do hero**: cada `NotificationPopup` é um placeholder. Pra usar a imagem real, troque por `<Image>`. Posições em `POPUP_POSITIONS` no topo do `Hero.tsx`.

## Cores do tema (em `globals.css`)

- `brown` — `#3B2314` (principal)
- `brown-light` — `#5A3A24` (hover)
- `brown-dark` — `#1A1008` (footer)
- `gold` — `#C8A96E` (accent / botão do form)
- `gold-light` — `#D9BE85` (hover do botão dourado)
- `cream` — `#FAF8F5` (fundo)
- `photo-placeholder` — `#EDE8E0` (fundo dos placeholders)

Uso em Tailwind: `bg-brown`, `text-gold`, `bg-cream`, etc.
