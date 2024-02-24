import { Routes } from '@angular/router';

export const content: Routes = [
  {
    path: 'dashboard',
    data: {
      title: "Dashboard",
      breadcrumb: "Dashboard"
    },
    loadChildren: () => import('../../components/default/dashboard.module').then(m => m.DashboardModule),
  },  
  {
    path: 'widgets',
    data: {
      title: "Widgets",
      breadcrumb: "Widgets"
    },
    loadChildren: () => import('../../components/widgets/widgets.module').then(m => m.WidgetsModule),
  },
  {
    path: 'page-layout',
    data: {
      title: "Page Layout",
      breadcrumb: "Page Layout"
    },
    loadChildren: () => import('../../components/page-layout/page-layout.module').then(m => m.PageLayoutModule),
  },
  {
    path: 'ui-kits',
    data: {
      title: "Ui Kits",
      breadcrumb: "Ui Kits"
    },
    loadChildren: () => import('../../components/ui-elements/ui-elements.module').then(m => m.UiElementsModule),
  },
  {
    path: 'bonus-ui',
    data: {
      title: "Bonus UI",
      breadcrumb: "Bonus UI"
    },
    loadChildren: () => import('../../components/bonus-ui/bonus-ui.module').then(m => m.BonusUiModule),
  },
  {
    path: 'icon',
    data: {
      title: "Icons",
      breadcrumb: "Icons"
    },
    loadChildren: () => import('../../components/icon/icon.module').then(m => m.IconModule),
  },
  {
    path: 'button',
    data: {
      title: "Icons",
      breadcrumb: "Icons"
    },
    loadChildren: () => import('../../components/button/button.module').then(m => m.ButtonModule),
  },
  {
    path: 'forms-controls',
    data: {
      title: "Forms Controls",
      breadcrumb: "Forms Controls"
    },
    loadChildren: () => import('../../components/forms/forms-controls/forms-controls.module').then(m => m.FormsControlsModule),
  },
  {
    path: 'forms-widgets',
    data: {
      title: "Forms Widgets",
      breadcrumb: "Forms Widgets"
    },
    loadChildren: () => import('../../components/forms/forms-widgets/forms-widgets.module').then(m => m.FormsWidgetsModule),
  },
  {
    path: 'default-forms',
    data: {
      title: "Default Forms",
      breadcrumb: "Default Forms"
    },
    loadChildren: () => import('../../components/forms/forms-layout/forms-layout.module').then(m => m.FormsLayoutModule),
  },
  {
    path: 'bootstrap-tables',
    data: {
      title: "Bootstrap Tables",
      breadcrumb: "Bootstrap Tables"
    },
    loadChildren: () => import('../../components/tables/bootstrap-tables/bootstrap-tables.module').then(m => m.BootstrapTablesModule),
  },
  {
    path: 'charts',
    data: {
      title: "Charts",
      breadcrumb: "Charts"
    },
    loadChildren: () => import('../../components/charts/charts.module').then(m => m.ChartsModule),
  },
  {
    path: 'data-table',
    data: {
      title: "Charts",
      breadcrumb: "Charts"
    },
    loadChildren: () => import('../../components/tables/data-table/data-table.module').then(m => m.DataTableModule),
  },
  {
    path: 'project',
    data: {
      title: "Project",
      breadcrumb: "Project"
    },
    loadChildren: () => import('../../components/project/project.module').then(m => m.ProjectModule),
  },
  {
    path: 'file-manager',
    data: {
      title: "File Manager",
      breadcrumb: "File Manager"
    },
    loadChildren: () => import('../../components/file-manager/file-manager.module').then(m => m.FileManagerModule),
  },
  {
    path: 'ecommerce',
    data: {
      title: "E-commerce",
      breadcrumb: "E-commerce"
    },
    loadChildren: () => import('../../components/ecommerce/ecommerce.module').then(m => m.EcommerceModule),
  },
  {
    path: 'chat',
    data: {
      title: "Chat",
      breadcrumb: "Chat"
    },
    loadChildren: () => import('../../components/chat/chat.module').then(m => m.ChatModule),
  },
  {
    path: 'social-app',
    loadChildren: () => import('../../components/social-app/social-app.module').then(m => m.SocialAppModule),
  },
  {
    path: 'email',
    data: {
      title: "Email",
      breadcrumb: "Email"
    },
    loadChildren: () => import('../../components/email/email.module').then(m => m.EmailModule),
  },
  {
    path: 'users',
    data: {
      title: "Users",
      breadcrumb: "Users"
    },
    loadChildren: () => import('../../components/users/users.module').then(m => m.UsersModule),
  },
  {
    path: 'bookmark',
    loadChildren: () => import('../../components/bookmark/bookmark.module').then(m => m.BookmarkModule),
  },
  {
    path: 'contacts',
    loadChildren: () => import('../../components/contacts/contacts.module').then(m => m.ContactsModule),
  },
  {
    path: 'task',
    loadChildren: () => import('../../components/task/task.module').then(m => m.TaskModule),
  },
  {
    path: 'calender',
    loadChildren: () => import('../../components/calender/calender.module').then(m => m.CalenderModule),
  },
  {
    path: 'to-do',
    loadChildren: () => import('../../components/to-do/to-do.module').then(m => m.ToDoModule),
  },
  {
    path: 'search-website',
    loadChildren: () => import('../../components/search-website/search-website.module').then(m => m.SearchWebsiteModule),
  },
  {
    path: 'gallery',
    loadChildren: () => import('../../components/gallery/all-gallery.module').then(m => m.AllGalleryModule),
  },
  {
    path: 'blog',
    data: {
      title: "Blog",
      breadcrumb: "Blog"
    },
    loadChildren: () => import('../../components/blog/blog.module').then(m => m.BlogModule),
  },
  {
    path: 'faq',
    loadChildren: () => import('../../components/faq/faq.module').then(m => m.FaqModule),
  },
  {
    path: 'job-search',
    data: {
      title: "Job Search",
      breadcrumb: "Job Search"
    },
    loadChildren: () => import('../../components/job-search/job-search.module').then(m => m.JobSearchModule),
  },
  {
    path: 'learning',
    data: {
      title: "Learning",
      breadcrumb: "Learning"
    },
    loadChildren: () => import('../../components/learning/learning.module').then(m => m.LearningModule),
  },
  {
    path: 'sample-page',
    loadChildren: () => import('../../components/sample-page/sample-page.module').then(m => m.SamplePageModule),
  },
  {
    path: 'maps',
    data: {
      title: "Maps",
      breadcrumb: "Maps"
    },
    loadChildren: () => import('../../components/maps/maps.module').then(m => m.MapsModule)
  },
  {
    path: 'editors',
    data: {
      title: "Editors",
      breadcrumb: "Editors"
    },
    loadChildren: () => import('../../components/editors/editors.module').then(m => m.EditorsModule)
  },
  {
    path: 'knowledgebases',
    data: {
      title: "Knowledgebases",
      breadcrumb: "Knowledgebases"
    },
    loadChildren: () => import('../../components/knowledgebases/knowledgebases.module').then(m => m.KnowledgebasesModule)
  },
  {
    path: 'support-ticket',
    loadChildren: () => import('../../components/support-ticket/support-ticket.module').then(m => m.SupportTicketModule)
  },
];
