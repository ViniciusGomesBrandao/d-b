import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Analytical',
    iconName: 'aperture',
    route: 'pages/dashboards/dashboard1',
  },
  {
    displayName: 'eCommerce',
    iconName: 'shopping-cart',
    route: 'pages/dashboards/dashboard2',
  },
  {
    navCap: 'Recursos',
  },
  {
    displayName: 'Categorias',
    iconName: 'album',
    route: 'pages/category/list',
  },
  {
    displayName: 'Relatórios',
    iconName: 'address-book',
    route: 'pages/reports/list',
  },
  {
    displayName: 'Suporte',
    iconName: 'message',
    route: 'pages/support/chat',
  },
  {
    displayName: 'Chat',
    iconName: 'message-2',
    route: 'pages/apps/chat',
  },
  {
    displayName: 'Calendar',
    iconName: 'calendar-event',
    route: 'pages/apps/calendar',
  },
  {
    displayName: 'Email',
    iconName: 'mail',
    route: 'pages/apps/email/inbox',
  },
  {
    displayName: 'Contacts',
    iconName: 'phone',
    route: 'pages/apps/contacts',
  },
  {
    displayName: 'Courses',
    iconName: 'certificate',
    route: 'pages/apps/courses',
  },
  {
    displayName: 'Employee',
    iconName: 'brand-ctemplar',
    route: 'pages/apps/employee',
  },
  {
    displayName: 'Notes',
    iconName: 'note',
    route: 'pages/apps/notes',
  },
  {
    displayName: 'Tickets',
    iconName: 'ticket',
    route: 'pages/apps/tickets',
  },
  {
    displayName: 'Invoice',
    iconName: 'file-invoice',
    route: 'pages/apps/invoice',
  },
  {
    displayName: 'ToDo',
    iconName: 'edit',
    route: 'pages/apps/todo',
  },
  {
    displayName: 'Taskboard',
    iconName: 'checklist',
    route: 'pages/apps/taskboard',
  },
  {
    displayName: 'Blog',
    iconName: 'chart-donut-3',
    route: 'pages/apps/blog',
    children: [
      {
        displayName: 'Post',
        iconName: 'point',
        route: 'pages/apps/blog/post',
      },
      {
        displayName: 'Detail',
        iconName: 'point',
        route: 'pages/apps/blog/detail/Early Black Friday Amazon deals: cheap TVs, headphones, laptops',
      },
    ],
  },
  {
    navCap: 'Pages',
  },
  {
    displayName: 'Roll Base Access',
    iconName: 'lock-access',
    route: 'pages/pps/permission',
  },
  {
    displayName: 'Treeview',
    iconName: 'git-merge',
    route: 'pages/theme-pages/treeview',
  },
  {
    displayName: 'Pricing',
    iconName: 'currency-dollar',
    route: 'pages/theme-pages/pricing',
  },
  {
    displayName: 'Account Setting',
    iconName: 'user-circle',
    route: 'pages/theme-pages/account-setting',
  },
  {
    displayName: 'FAQ',
    iconName: 'help',
    route: 'pages/theme-pages/faq',
  },
  {
    displayName: 'Landingpage',
    iconName: 'app-window',
    route: 'pages/landingpage',
  },
  {
    displayName: 'Widgets',
    iconName: 'layout',
    route: 'pages/widgets',
    children: [
      {
        displayName: 'Cards',
        iconName: 'point',
        route: 'pages/widgets/cards',
      },
      {
        displayName: 'Banners',
        iconName: 'point',
        route: 'pages/widgets/banners',
      },
      {
        displayName: 'Charts',
        iconName: 'point',
        route: 'pages/widgets/charts',
      },
    ],
  },
  {
    navCap: 'Forms',
  },
  {
    displayName: 'Form elements',
    iconName: 'apps',
    route: 'pages/formspages/forms-elements',
    children: [
      {
        displayName: 'Autocomplete',
        iconName: 'point',
        route: 'pages/formspages/forms-elements/autocomplete',
      },
      {
        displayName: 'Button',
        iconName: 'point',
        route: 'pages/formspages/forms-elements/button',
      },
      {
        displayName: 'Checkbox',
        iconName: 'point',
        route: 'pages/formspages/forms-elements/checkbox',
      },
      {
        displayName: 'Radio',
        iconName: 'point',
        route: 'pages/formspages/forms-elements/radio',
      },
      {
        displayName: 'Datepicker',
        iconName: 'point',
        route: 'pages/formspages/forms-elements/datepicker',
      },
    ],
  },
  {
    displayName: 'Form Layouts',
    iconName: 'file-description',
    route: 'pages/forms/form-layouts',
  },
  {
    displayName: 'Form Horizontal',
    iconName: 'box-align-bottom',
    route: 'pages/forms/form-horizontal',
  },
  {
    displayName: 'Form Vertical',
    iconName: 'box-align-left',
    route: 'pages/forms/form-vertical',
  },
  {
    displayName: 'Form Wizard',
    iconName: 'files',
    route: 'pages/forms/form-wizard',
  },
  {
    navCap: 'Tables',
  },
  {
    displayName: 'Tables',
    iconName: 'layout',
    route: 'tables',
    children: [
      {
        displayName: 'Basic Table',
        iconName: 'point',
        route: 'pages/tables/basic-table',
      },
      {
        displayName: 'Dynamic Table',
        iconName: 'point',
        route: 'pages/tables/dynamic-table',
      },
      {
        displayName: 'Expand Table',
        iconName: 'point',
        route: 'pages/tables/expand-table',
      },
      {
        displayName: 'Filterable Table',
        iconName: 'point',
        route: 'pages/tables/filterable-table',
      },
      {
        displayName: 'Footer Row Table',
        iconName: 'point',
        route: 'pages/tables/footer-row-table',
      },
      {
        displayName: 'HTTP Table',
        iconName: 'point',
        route: 'pages/tables/http-table',
      },
      {
        displayName: 'Mix Table',
        iconName: 'point',
        route: 'pages/tables/mix-table',
      },
      {
        displayName: 'Multi Header Footer',
        iconName: 'point',
        route: 'pages/tables/multi-header-footer-table',
      },
      {
        displayName: 'Pagination Table',
        iconName: 'point',
        route: 'pages/tables/pagination-table',
      },
      {
        displayName: 'Row Context Table',
        iconName: 'point',
        route: 'pages/tables/row-context-table',
      },
      {
        displayName: 'Selection Table',
        iconName: 'point',
        route: 'pages/tables/selection-table',
      },
      {
        displayName: 'Sortable Table',
        iconName: 'point',
        route: 'pages/tables/sortable-table',
      },
      {
        displayName: 'Sticky Column',
        iconName: 'point',
        route: 'pages/tables/sticky-column-table',
      },
      {
        displayName: 'Sticky Header Footer',
        iconName: 'point',
        route: 'pages/tables/sticky-header-footer-table',
      },
    ],
  },
  {
    navCap: 'Chart',
  },
  {
    displayName: 'Line',
    iconName: 'chart-line',
    route: '/pages/charts/line',
  },
  {
    displayName: 'Gredient',
    iconName: 'chart-arcs',
    route: '/pages/charts/gredient',
  },
  {
    displayName: 'Area',
    iconName: 'chart-area',
    route: '/pages/charts/area',
  },
  {
    displayName: 'Candlestick',
    iconName: 'chart-candle',
    route: '/pages/charts/candlestick',
  },
  {
    displayName: 'Column',
    iconName: 'chart-dots',
    route: '/pages/charts/column',
  },
  {
    displayName: 'Doughnut & Pie',
    iconName: 'chart-donut-3',
    route: '/pages/charts/doughnut-pie',
  },
  {
    displayName: 'Radialbar & Radar',
    iconName: 'chart-radar',
    route: '/pages/charts/radial-radar',
  },
  {
    navCap: 'UI',
  },
  {
    displayName: 'Ui Components',
    iconName: 'box',
    route: 'ui-components',
    children: [
      {
        displayName: 'Badge',
        iconName: 'point',
        route: 'pages/ui-components/badge',
      },
      {
        displayName: 'Expansion Panel',
        iconName: 'point',
        route: 'pages/ui-components/expansion',
      },
      {
        displayName: 'Chips',
        iconName: 'point',
        route: 'pages/ui-components/chips',
      },
      {
        displayName: 'Dialog',
        iconName: 'point',
        route: 'pages/ui-components/dialog',
      },
      {
        displayName: 'Lists',
        iconName: 'point',
        route: 'pages/ui-components/lists',
      },
      {
        displayName: 'Divider',
        iconName: 'point',
        route: 'pages/ui-components/divider',
      },
      {
        displayName: 'Menu',
        iconName: 'point',
        route: 'pages/ui-components/menu',
      },
      {
        displayName: 'Paginator',
        iconName: 'point',
        route: 'pages/ui-components/paginator',
      },
      {
        displayName: 'Progress Bar',
        iconName: 'point',
        route: 'pages/ui-components/progress',
      },
      {
        displayName: 'Progress Spinner',
        iconName: 'point',
        route: 'pages/ui-components/progress-spinner',
      },
      {
        displayName: 'Ripples',
        iconName: 'point',
        route: 'pages/ui-components/ripples',
      },
      {
        displayName: 'Slide Toggle',
        iconName: 'point',
        route: 'pages/ui-components/slide-toggle',
      },
      {
        displayName: 'Slider',
        iconName: 'point',
        route: 'pages/ui-components/slider',
      },
      {
        displayName: 'Snackbar',
        iconName: 'point',
        route: 'pages/ui-components/snackbar',
      },
      {
        displayName: 'Tabs',
        iconName: 'point',
        route: 'pages/ui-components/tabs',
      },
      {
        displayName: 'Toolbar',
        iconName: 'point',
        route: 'pages/ui-components/toolbar',
      },
      {
        displayName: 'Tooltips',
        iconName: 'point',
        route: 'pages/ui-components/tooltips',
      },
    ],
  },
  {
    navCap: 'Auth',
  },
  {
    displayName: 'Login',
    iconName: 'login',
    route: '/authentication',
    children: [
      {
        displayName: 'Side Login',
        iconName: 'point',
        route: '/pages/pages/authentication/side-login',
      },
      {
        displayName: 'Boxed Login',
        iconName: 'point',
        route: '/pages/pages/authentication/boxed-login',
      },
    ],
  },
  {
    displayName: 'Register',
    iconName: 'user-plus',
    route: '/pages/authentication',
    children: [
      {
        displayName: 'Side Login',
        iconName: 'point',
        route: '/pages/pages/authentication/side-register',
      },
      {
        displayName: 'Boxed Login',
        iconName: 'point',
        route: '/pages/pages/authentication/boxed-register',
      },
    ],
  },
  {
    displayName: 'Forgot Password',
    iconName: 'rotate',
    route: '/pages/authentication',
    children: [
      {
        displayName: 'Side Forgot Password',
        iconName: 'point',
        route: '/pages/pages/authentication/side-forgot-pwd',
      },
      {
        displayName: 'Boxed Forgot Password',
        iconName: 'point',
        route: '/pages/pages/authentication/boxed-forgot-pwd',
      },
    ],
  },
  {
    displayName: 'Two Steps',
    iconName: 'zoom-code',
    route: '/authentication',
    children: [
      {
        displayName: 'Side Two Steps',
        iconName: 'point',
        route: '/pages/authentication/side-two-steps',
      },
      {
        displayName: 'Boxed Two Steps',
        iconName: 'point',
        route: '/pages/authentication/boxed-two-steps',
      },
    ],
  },
  {
    displayName: 'Error',
    iconName: 'alert-circle',
    route: '/pages/authentication/error',
  },
  {
    displayName: 'Maintenance',
    iconName: 'settings',
    route: '/pages/authentication/maintenance',
  },
  {
    navCap: 'Other',
  },
  {
    displayName: 'Menu Level',
    iconName: 'box-multiple',
    route: 'pages/menu-level',
    children: [
      {
        displayName: 'Menu 1',
        iconName: 'point',
        route: 'pages/menu-1',
        children: [
          {
            displayName: 'Menu 1',
            iconName: 'point',
            route: 'pages/menu-1',
          },

          {
            displayName: 'Menu 2',
            iconName: 'point',
            route: 'pages/menu-2',
          },
        ],
      },

      {
        displayName: 'Menu 2',
        iconName: 'point',
        route: 'pages/menu-2',
      },
    ],
  },
  {
    displayName: 'Disabled',
    iconName: 'ban',
    route: 'pages/disabled',
    disabled: true,
  },
  {
    displayName: 'Chip',
    iconName: 'mood-smile',
    route: '/',
    chip: true,
    chipClass: 'bg-primary text-white',
    chipContent: '9',
  },
  {
    displayName: 'Outlined',
    iconName: 'mood-smile',
    route: '/',
    chip: true,
    chipClass: 'b-1 border-primary text-primary',
    chipContent: 'outlined',
  },
  {
    displayName: 'External Link',
    iconName: 'star',
    route: 'https://www.google.com/',
    external: true,
  },
];
