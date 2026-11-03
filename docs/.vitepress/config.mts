import { defineConfig } from 'vitepress'
import { writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const repositorio = 'https://github.com/em4nu3i69dll/e4studios-docs'
const discord = 'https://discord.e4studios.xyz/'
const origen = process.env.DOCS_ORIGIN || 'https://docs.e4studios.xyz'
const base = process.env.DOCS_BASE || '/'
const menus = {
  es: {
    nombre: 'Español', idioma: 'es-AR', descripcion: 'Guías de instalación, cuenta y soporte de E4Studios.',
    grupo: 'Primeros pasos', paginas: ['Introducción', 'Cuenta y compras', 'Instalación', 'Actualizaciones', 'Problemas frecuentes', 'Soporte'],
    tienda: 'Tienda', editar: 'Editar en GitHub', anterior: 'Anterior', siguiente: 'Siguiente', indice: 'En esta página',
    buscar: 'Buscar', sinResultados: 'No se encontraron resultados', menu: 'Menú', tema: 'Apariencia',
    oscuro: 'Cambiar a oscuro', claro: 'Cambiar a claro', idiomas: 'Idioma', arriba: 'Volver arriba', cerrar: 'Cerrar',
    navegar: 'para navegar', seleccionar: 'para abrir', salir: 'para cerrar', pie: 'E4Studios · Guías de uso y soporte'
  },
  en: {
    nombre: 'English', idioma: 'en-US', descripcion: 'E4Studios installation, account and support guides.',
    grupo: 'Getting started', paginas: ['Introduction', 'Account and purchases', 'Installation', 'Updates', 'Troubleshooting', 'Support'],
    tienda: 'Store', editar: 'Edit on GitHub', anterior: 'Previous', siguiente: 'Next', indice: 'On this page',
    buscar: 'Search', sinResultados: 'No results found', menu: 'Menu', tema: 'Appearance',
    oscuro: 'Switch to dark theme', claro: 'Switch to light theme', idiomas: 'Language', arriba: 'Back to top', cerrar: 'Close',
    navegar: 'to navigate', seleccionar: 'to select', salir: 'to close', pie: 'E4Studios · Usage and support guides'
  },
  pt: {
    nombre: 'Português', idioma: 'pt-BR', descripcion: 'Guias de instalação, conta e suporte da E4Studios.',
    grupo: 'Primeiros passos', paginas: ['Introdução', 'Conta e compras', 'Instalação', 'Atualizações', 'Problemas frequentes', 'Suporte'],
    tienda: 'Loja', editar: 'Editar no GitHub', anterior: 'Anterior', siguiente: 'Próximo', indice: 'Nesta página',
    buscar: 'Buscar', sinResultados: 'Nenhum resultado encontrado', menu: 'Menu', tema: 'Aparência',
    oscuro: 'Mudar para tema escuro', claro: 'Mudar para tema claro', idiomas: 'Idioma', arriba: 'Voltar ao topo', cerrar: 'Fechar',
    navegar: 'para navegar', seleccionar: 'para abrir', salir: 'para fechar', pie: 'E4Studios · Guias de uso e suporte'
  }
}
const rutas = ['', 'cuenta', 'instalacion', 'actualizaciones', 'problemas', 'soporte']
const locales = Object.fromEntries(Object.entries(menus).map(([codigo, t]) => [codigo, {
  label: t.nombre, lang: t.idioma, link: '/' + codigo + '/', description: t.descripcion,
  themeConfig: {
    nav: [{ text: t.tienda, link: 'https://e4studios.xyz/' + codigo + '/' }, { text: 'Discord', link: discord }],
    sidebar: [{ text: t.grupo, items: rutas.map((ruta, i) => ({ text: t.paginas[i], link: '/' + codigo + '/' + (ruta ? ruta + '.html' : '') })) }],
    editLink: { pattern: repositorio + '/edit/main/docs/:path', text: t.editar },
    docFooter: { prev: t.anterior, next: t.siguiente },
    outline: { label: t.indice, level: [2, 3] },
    sidebarMenuLabel: t.menu, darkModeSwitchLabel: t.tema, lightModeSwitchTitle: t.claro,
    darkModeSwitchTitle: t.oscuro, langMenuLabel: t.idiomas, returnToTopLabel: t.arriba,
    footer: { message: t.pie, copyright: 'E4Studios' }
  }
}]))

export default defineConfig({
  title: 'E4Studios Docs', description: menus.es.descripcion, lang: 'es-AR',
  appearance: true, base, locales,
  srcExclude: ['README.md'],
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: base + 'e4.svg' }], ['meta', { name: 'theme-color', content: '#f14b67' }]],
  sitemap: {
    hostname: new URL(origen).origin,
    transformItems(items) {
      return items.map(item => ({
        ...item, url: base + item.url.replace(/^\//, ''),
        links: item.links?.map(link => ({ ...link, url: base + link.url.replace(/^\//, '') }))
      }))
    }
  },
  async buildEnd(config) {
    await writeFile(join(config.outDir, 'robots.txt'), 'User-agent: *\nAllow: /\nSitemap: ' + origen + '/sitemap.xml\n')
  },
  transformHead({ pageData }) {
    const ruta = pageData.relativePath.replace(/index\.md$/, '').replace(/\.md$/, '.html')
    return [['link', { rel: 'canonical', href: origen + '/' + ruta }]]
  },
  themeConfig: {
    logo: { src: '/e4.svg', alt: 'E4Studios' }, siteTitle: 'E4Studios Docs',
    socialLinks: [{ icon: 'github', link: repositorio }],
    externalLinkIcon: true,
    search: {
      provider: 'local', options: { locales: Object.fromEntries(Object.entries(menus).map(([codigo, t]) => [codigo, {
        translations: { button: { buttonText: t.buscar, buttonAriaLabel: t.buscar }, modal: {
          noResultsText: t.sinResultados, resetButtonTitle: t.cerrar, displayDetails: t.indice,
          footer: { navigateText: t.navegar, selectText: t.seleccionar, closeText: t.salir }
        } }
      }])) }
    }
  }
})
