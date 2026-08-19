import { v4 } from 'uuid'

import { styleBtn } from '#/common/atoms/btn'

import { CardPage } from '../common/CardPage'
import { SlashHeader } from '../common/SlashHeader'

interface TechStackItem {
  id: string
  name: string
  url: string
}

const techStack: TechStackItem[] = [
  { id: v4(), name: 'React 19', url: 'https://react.dev/' },
  { id: v4(), name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
  { id: v4(), name: 'Vite+', url: 'https://viteplus.dev/' },
  { id: v4(), name: 'Vite', url: 'https://vite.dev/' },
  { id: v4(), name: 'TanStack Router', url: 'https://tanstack.com/router/latest' },
  { id: v4(), name: 'TanStack Form', url: 'https://tanstack.com/form/latest' },
  { id: v4(), name: 'TanStack Store', url: 'https://tanstack.com/store/latest' },
  { id: v4(), name: 'TanStack Query', url: 'https://tanstack.com/query/latest' },
  { id: v4(), name: 'Tailwind CSS 4', url: 'https://tailwindcss.com/' },
  { id: v4(), name: 'Tailwind Variants', url: 'https://www.tailwind-variants.org/' },
  { id: v4(), name: 'Zod', url: 'https://zod.dev/' },
  { id: v4(), name: 'Hey API', url: 'https://heyapi.dev/' },
  { id: v4(), name: 'Vite PWA', url: 'https://github.com/vite-pwa/vite-plugin-pwa' },
  { id: v4(), name: 'Bun', url: 'https://bun.sh/' },
  { id: v4(), name: 'Chabokan', url: 'https://chabokan.net/' },
  { id: v4(), name: 'Phosphor Icons', url: 'https://phosphoricons.com/' },
  { id: v4(), name: 'Motion', url: 'https://motion.dev/' },
  { id: v4(), name: 'typesafe-i18n', url: 'https://github.com/codingcommons/typesafe-i18n' },
  { id: v4(), name: 'Task', url: 'https://taskfile.dev/' },
  { id: v4(), name: 'Oxlint', url: 'https://oxc.rs/docs/guide/usage/linter' },
  { id: v4(), name: 'Oxfmt', url: 'https://oxc.rs/docs/guide/usage/formatter' },
  { id: v4(), name: 'Vazirmatn', url: 'https://rastikerdar.github.io/vazirmatn/fa' },
  { id: v4(), name: 'Zen Maru Gothic', url: 'https://fonts.google.com/specimen/Zen+Maru+Gothic' },
  { id: v4(), name: 'Google Sans Flex', url: 'https://fonts.google.com/specimen/Google+Sans+Flex' },
  { id: v4(), name: 'React Toastify', url: 'https://fkhadra.github.io/react-toastify/introduction' },
].sort((a, b) => a.name.localeCompare(b.name))

export const ColophonPage = () => {
  return (
    <CardPage>
      <SlashHeader slash='/colophon' title='مشخصات فنی' />

      <p className=''>چیزهایی که برای ساخت این سایت استفاده کردم:</p>

      <div className='flex max-w-2xl flex-wrap gap-2' lang='en' dir='ltr'>
        {techStack.map(item => (
          <a
            key={item.id}
            href={item.url}
            target='_blank'
            rel='noopener noreferrer'
            className={styleBtn({ class: 'inline-flex flex-1', variant: 'secondary' })}
          >
            {item.name}
          </a>
        ))}
      </div>
    </CardPage>
  )
}
