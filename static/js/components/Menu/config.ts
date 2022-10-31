import { MenuEntry } from '@mozartfinance/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Exchange',
    icon: 'TradeIcon',
    href: '/swap',
  },
  {
    label: 'Liquidity',
    icon: 'PoolIcon',
    href: '/pool',
  },
  {
    label: 'Presale',
    icon: 'MoreIcon',
    href: 'https://gti.finance/presale/',
  },
  {
    label: 'Airdrop',
    icon: 'MoreIcon',
    href: 'https://airdrop.gti.finance/',
  },
  {
    label: 'GTI Token',
    icon: 'MoreIcon',
    href: 'https://bscscan.com/token/0xf06Be7919E41394C7087ac2B2549C9c769d0fb04',
  },
  /*
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://mozartfinance.io/pools',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/mozartfinance',
      },
      {
        label: 'Docs',
        href: 'https://mozartfinance.gitbook.io/mozart-finance/',
      },
      {
        label: 'Blog',
        href: 'https://mozart-finance.medium.com/',
      },
    ],
  },
  {
    label: 'Audit by IB',
    icon: 'TicketIcon',
    href: 'https://github.com/ImmuneBytes/Smart-Contract-Audit-Reports/blob/main/Mozart%20Finance/Mozart%20Finance%20(PIANO)%20-%20Final%20Audit%20Report.pdf',
  }, */
]

export default config
