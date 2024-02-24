import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';

export interface Menu {
  headTitle1?: string;
  headTitle2?: string;
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  badgeType?: string;
  badgeValue?: string;
  active?: boolean;
  bookmark?: boolean;
  children?: Menu[];
}
@Injectable({
  providedIn: 'root',
})
export class NavService {
  private unsubscriber: Subject<any> = new Subject();
  public screenWidth: BehaviorSubject<number> = new BehaviorSubject(
    window.innerWidth
  );
  private url = new BehaviorSubject('default message');
  currentUrl = this.url.asObservable();

  fullScreen: any;

  // Language
  public language: boolean = false;

  // Collapse Sidebar
  public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;

  // For Horizontal Layout Mobile
  public horizontal: boolean = window.innerWidth < 991 ? false : true;

  // Search Box
  public search: boolean = false;

  constructor(private router: Router) {
    this.setScreenWidth(window.innerWidth);
    fromEvent(window, 'resize')
      .pipe(debounceTime(1000), takeUntil(this.unsubscriber))
      .subscribe((evt: any) => {
        this.setScreenWidth(evt.target.innerWidth);
        if (evt.target.innerWidth < 991) {
          this.collapseSidebar = true;
          // this.megaMenu = false;
          // this.levelMenu = false;
        }
        if (evt.target.innerWidth < 1199) {
          // this.megaMenuColapse = true;
        }
      });
    if (window.innerWidth < 991) {
      // Detect Route change sidebar close
      this.router.events.subscribe((event) => {
        this.collapseSidebar = true;
        // this.megaMenu = false;
        // this.levelMenu = false;
      });
    }
  }

  changeUrl(val: string): void {
    this.url.next(val);
  }

  private setScreenWidth(width: number): void {
    this.screenWidth.next(width);
  }
  MENUITEMS: Menu[] = [
    {
      headTitle1: 'General',
      headTitle2: 'Dashboards & widgets.',
    },
    // {
    //   title: 'Dashboard',
    //   icon: 'home',
    //   type: 'sub',
    //   badgeType: 'success',
    //   badgeValue: '2',
    //   active: true,
    //   children: [
    //     { path: '/dashboard/default', title: 'Default', type: 'link' },
    //     { path: '/dashboard/ecommerce', title: 'Comercio Electrónico', type: 'link' },
    //   ],
    // },
    // {
    //   title: 'Widgets',
    //   icon: 'airplay',
    //   type: 'sub',
    //   active: false,
    //   children: [
    //     { path: '/widgets/general', title: 'General', type: 'link' },
    //     { path: '/widgets/chart', title: 'Chart', type: 'link' },
    //   ],
    // },
    // {
    //   title: 'Page layout',
    //   icon: 'layout',
    //   type: 'sub',
    //   active: false,
    //   children: [
    //     {
    //       path: '/page-layout/footer-light',
    //       title: 'Footer Light',
    //       type: 'link',
    //     },
    //     {
    //       path: '/page-layout/footer-dark',
    //       title: 'footer Dark',
    //       type: 'link',
    //     },
    //     {
    //       path: '/page-layout/footer-fixed',
    //       title: 'Footer Fixed',
    //       type: 'link',
    //     },
    //   ],
    // },
    // {
    //   headTitle1: 'Components',
    //   headTitle2: 'UI Components & Elements.',
    // },
    // {
    //   title: 'Ui-Kits',
    //   icon: 'box',
    //   type: 'sub',
    //   active: false,
    //   children: [
    //     { path: '/ui-kits/avatars', title: 'Avatars', type: 'link' },
    //     { path: '/ui-kits/grid', title: 'Grid', type: 'link' },
    //     {
    //       path: '/ui-kits/helper-classes',
    //       title: 'Helper-Classes',
    //       type: 'link',
    //     },
    //     { path: '/ui-kits/list', title: 'List', type: 'link' },
    //     { path: '/ui-kits/shadow', title: 'Shadow', type: 'link' },
    //     { path: '/ui-kits/spinner', title: 'Spinner', type: 'link' },
    //     { path: '/ui-kits/tag-n-pills', title: 'Tag and Pills', type: 'link' },
    //     { path: '/ui-kits/typography', title: 'Typography', type: 'link' },
    //     { path: '/ui-kits/progress-bar', title: 'Progress Bar', type: 'link' },
    //     { path: '/ui-kits/ui-modal', title: 'Modal', type: 'link' },
    //     { path: '/ui-kits/popover', title: 'Popover', type: 'link' },
    //     { path: '/ui-kits/tooltip', title: 'Tooltip', type: 'link' },
    //     { path: '/ui-kits/dropdown', title: 'Dropdown', type: 'link' },
    //     { path: '/ui-kits/according', title: 'According', type: 'link' },
    //     {
    //       path: '/ui-kits/tabs',
    //       title: 'Tabs',
    //       type: 'sub',
    //       children: [
    //         {
    //           path: '/ui-kits/tabs/bootstrap-tabs',
    //           title: 'Bootstraps Tabs',
    //           type: 'link',
    //         },
    //         {
    //           path: '/ui-kits/tabs/line-tabs',
    //           title: 'Line tabs',
    //           type: 'link',
    //         },
    //       ],
    //     },
    //     { path: '/ui-kits/navs', title: 'Navs', type: 'link' },
    //   ],
    // },
    // {
    //   title: 'Bonus Ui',
    //   icon: 'folder-plus',
    //   type: 'sub',
    //   active: false,
    //   children: [
    //     { path: 'bonus-ui/rating', title: 'Rating', type: 'link' },
    //     { path: 'bonus-ui/dropzone', title: 'Dropzone', type: 'link' },
    //     { path: 'bonus-ui/sweetalert2', title: 'SweetAlert2', type: 'link' },
    //     { path: 'bonus-ui/owl-carousel', title: 'Owl Carousel', type: 'link' },
    //     { path: 'bonus-ui/ribbons', title: 'Ribbons', type: 'link' },
    //     { path: 'bonus-ui/pagination', title: 'Pagination', type: 'link' },
    //     { path: 'bonus-ui/steps', title: 'Steps', type: 'link' },
    //     { path: 'bonus-ui/range-slider', title: 'Range slider', type: 'link' },
    //     { path: 'bonus-ui/breadcrumb-ui', title: 'Breadcrumb', type: 'link' },
    //     {
    //       path: 'bonus-ui/image-cropper',
    //       title: 'Image Cropper',
    //       type: 'link',
    //     },
    //     { path: 'bonus-ui/sticky', title: 'Sticky', type: 'link' },
    //     { path: 'bonus-ui/basic-card', title: 'Basic Card', type: 'link' },
    //     {
    //       path: 'bonus-ui/creative-card',
    //       title: 'Creative Card',
    //       type: 'link',
    //     },
    //     { path: 'bonus-ui/tabbed-card', title: 'Tabbed Card', type: 'link' },
    //     {
    //       path: 'bonus-ui/draggable-card',
    //       title: 'Draggable Card',
    //       type: 'link',
    //     },
    //     { path: '/bonus-ui/timeline1', title: 'Time Line', type: 'link' },
    //   ],
    // },
    // {
    //   title: 'Icons',
    //   icon: 'command',
    //   type: 'sub',
    //   active: false,
    //   children: [
    //     { path: '/icon/flag-icon', title: 'Flag Icon', type: 'link' },
    //     {
    //       path: '/icon/fontawesome-icon',
    //       title: 'Fontawesome Icon',
    //       type: 'link',
    //     },
    //     { path: '/icon/ico-icon', title: 'Ico Icon', type: 'link' },
    //     { path: '/icon/thimify-icon', title: 'Themify Icon', type: 'link' },
    //     { path: '/icon/feather-ico', title: 'Feather Icon', type: 'link' },
    //     { path: '/icon/whether-icon', title: 'Whether Icon', type: 'link' },
    //   ],
    // },
    // {
    //   title: 'Buttons',
    //   icon: 'cloud',
    //   type: 'sub',
    //   active: false,
    //   children: [
    //     { path: '/button/default-style', title: 'Default Style', type: 'link' },
    //     { path: '/button/flat-style', title: 'Flat Style', type: 'link' },
    //     { path: '/button/edge-style', title: 'Edge Style', type: 'link' },
    //     { path: '/button/raised-style', title: 'Raised Style', type: 'link' },
    //     { path: '/button/button-group', title: 'Button Group', type: 'link' },
    //   ],
    // },
    // {
    //   title: 'Charts',
    //   icon: 'bar-chart',
    //   type: 'sub',
    //   active: false,
    //   children: [
    //     { path: '/charts/apex-chart', title: 'Apex Chart', type: 'link' },
    //     { path: '/charts/google-chart', title: 'Google Chart', type: 'link' },
    //     { path: '/charts/chartjs', title: 'Chartjs Chart', type: 'link' },
    //     { path: '/charts/chartist', title: 'Chartist Chart', type: 'link' },
    //   ],
    // },
    // {
    //   headTitle1: 'Forms',
    // },
    // {
    //   title: 'Forms Controls',
    //   icon: 'sliders',
    //   type: 'sub',
    //   active: false,
    //   children: [
    //     {
    //       path: '/forms-controls/validation',
    //       title: 'Form Validation',
    //       type: 'link',
    //     },
    //     { path: '/forms-controls/inputs', title: 'Base Inputs', type: 'link' },
    //     {
    //       path: '/forms-controls/checkbox-radio',
    //       title: 'Checkbox & Radio',
    //       type: 'link',
    //     },
    //     {
    //       path: '/forms-controls/input-groups',
    //       title: 'Input Groups',
    //       type: 'link',
    //     },
    //     {
    //       path: '/forms-controls/mega-options',
    //       title: 'Mega Options',
    //       type: 'link',
    //     },
    //   ],
    // },
    // {
    //   title: 'Forms Widgets',
    //   icon: 'package',
    //   type: 'sub',
    //   active: false,
    //   children: [
    //     {
    //       path: '/forms-widgets/datepicker',
    //       title: 'Datepicker',
    //       type: 'link',
    //     },
    //     { path: '/forms-widgets/touchspin', title: 'Touchspin', type: 'link' },
    //     { path: '/forms-widgets/select2', title: 'Select2', type: 'link' },
    //     { path: '/forms-widgets/switch', title: 'Switch', type: 'link' },
    //     { path: '/forms-widgets/typeahead', title: 'Typeahead', type: 'link' },
    //     { path: '/forms-widgets/clipboard', title: 'Clipboard', type: 'link' },
    //   ],
    // },
    // {
    //   title: 'Default Forms',
    //   icon: 'layout',
    //   type: 'link',
    //   path: '/default-forms',
    //   active: false,
    // },
    // {
    //   headTitle1: 'Table',
    // },
    // {
    //   path: '/bootstrap-tables',
    //   title: 'Bootstrap Tables',
    //   icon: 'server',
    //   type: 'link',
    //   active: false,
    // },  
    // {
    //   title: 'Data table',
    //   icon: 'database',
    //   active: false,
    //   type: 'link',
    //   bookmark: true,
    //   path: '/data-table',
    // },
    // {
    //   headTitle1: 'Applications',
    // },
    // {
    //   title: 'Project',
    //   icon: 'box',
    //   type: 'sub',
    //   badgeType: 'danger',
    //   badgeValue: 'New',
    //   active: false,
    //   children: [
    //     { path: '/project/project-list', title: 'Project List', type: 'link' },
    //     { path: '/project/create-new', title: 'Create New', type: 'link' },
    //   ],
    // },
    // {
    //   path: '/file-manager',
    //   title: 'File Manager',
    //   icon: 'git-pull-request',
    //   type: 'link',
    // },
    {
      title: 'Comercio Electrónico',
      type: 'sub',
      icon: 'shopping-bag',
      active: false,
      children: [
        { path: '/ecommerce/product', title: 'Product', type: 'link' },
        // { path: '/ecommerce/add-product', title: 'Agregar Producto', type: 'link' },
        // {
        //   path: '/ecommerce/product-page',
        //   title: 'Product page',
        //   type: 'link',
        // },
        // {
        //   path: '/ecommerce/product-list',
        //   title: 'Lista de Productos',
        //   type: 'link',
        // },
        // {
        //   path: '/ecommerce/payment-details',
        //   title: 'Payment Details',
        //   type: 'link',
        // },
        // {
        //   path: '/ecommerce/order-history',
        //   title: 'Order History',
        //   type: 'link',
        // },
        // { path: '/ecommerce/invoice', title: 'Invoice', type: 'link' },
        { path: '/ecommerce/cart', title: 'Cart', type: 'link' },
        // { path: '/ecommerce/wishlist', title: 'Wishlist', type: 'link' },
        { path: '/ecommerce/checkout', title: 'Checkout', type: 'link' },
        // { path: '/ecommerce/pricing', title: 'Pricing', type: 'link' },
      ],
    }
  ];

  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}
