export const headerData = {
  links: [
    {
      text: 'Characters',
      href: '/characters',
    },
    {
      text: 'Bomb',
      href: '/bomb',
    },
    {
      text: 'Wallpapers',
      href: '/wallpapers',
    },
    {
      text: 'News',
      href: '/news',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Navigation',
      links: [
        { text: 'Characters', href: '/characters' },
        { text: 'bangboo', href: '/bangboo' },
        { text: 'Wallpapers', href: '/wallpapers' },
        { text: 'News', href: '/news' },
      ],
    },
    {
      title: 'whats more',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Contact', href: '/contact' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: '#' },
    { text: 'Privacy Policy', href: '#' },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    powered by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com"> onWidget</a> · All rights reserved.
  `,
};