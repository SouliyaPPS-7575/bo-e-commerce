import englishMessages from 'ra-language-english';
import { TranslationMessages } from 'react-admin';

const customEnglishMessages: TranslationMessages = {
  ...englishMessages,
  search: 'Search',
  configuration: 'Configuration',
  language: 'Language',
  day_revenue_history: '30 Day Revenue History',
  no_pending_orders: 'No pending orders',
  reference_id: 'Reference ID',
  customer: 'Customer',
  quantity: 'Quantity',
  amount: 'Amount',
  status: 'Status',
  created: 'Created',
  showing: 'Showing',
  month: 'Month',
  year: 'Year',
  of: 'of',
  orders: 'orders',
  filter_options: 'Filter Options',
  date_range: 'Date Range',
  start_date: 'Start Date',
  end_date: 'End Date',
  type: 'Type',
  ccy: 'Currency Code',
  rate: 'Rate',
  count: 'Count',
  title: 'Title',
  upload_image: 'Upload Image',
  upload_image_success: 'Image uploaded successfully!',
  upload_image_failure: 'Failed to upload image',
  preview: 'Preview',
  image_input_placeholder: 'Drop a picture to upload, or click to select it.',
  details_la: 'Details (Lao)',
  image_urls: 'Image URLs',
  image_url: 'Image URL',
  name_la: 'Name (Lao)',
  all_status: 'All Status',
  unverified: 'Unverified',
  has_orders: 'Has Orders',
  no_orders: 'No Orders',
  all_email_visibility: 'All Email Visibility',
  email_visible: 'Email Visible',
  email_hidden: 'Email Hidden',
  enter_email_address: 'Enter email address',
  excel_export_success: 'Excel file exported successfully',
  excel_export_failure: 'Failed to export Excel file',
  username: 'Username',
  phone: 'Phone',
  active: 'Active',
  inactive: 'Inactive',
  account_status_updated: 'Account status updated to %{status}',
  error_updating_account_status: 'Error updating account status',
  personal_information: 'Personal Information',
  account_history: 'Account History',
  created_at: 'Created at',
  last_updated: 'Last updated',
  address_line_1: 'Address Line 1',
  address_line_2: 'Address Line 2',
  city: 'City',
  state_region: 'State/Region',
  postal_code: 'Postal Code',
  country: 'Country',
  address: 'Address',
  reset_password: 'Reset Password',
  basic_information: 'Basic Information',
  username_unique_helper: 'Username must be unique',
  email_unique_helper: 'Email must be unique',
  admin_role: 'Admin',
  staff_role: 'Staff',
  password_length_helper: 'Password must be at least 6 characters long',
  account_settings: 'Account Settings',
  password_match_helper: 'Must match the password above',
  edit_user: 'Edit User',
  current_image: 'Current Image',
  change_password: 'Change Password',
  old_password: 'Old Password',
  old_password_helper: 'Required to change the password',
  password_length_helper_edit: 'Leave empty to keep current password. Must be at least 6 characters long.',
  user_information: 'User Information',
  user_id: 'User ID',
  user_avatar: 'User Avatar',
  avatar: 'Avatar',
  details: 'Details',
  fields: {
    basket: {
      date: 'Date',
      reference: 'Reference',
      quantity: 'Quantity',
      sum: 'Sum',
      tax_rate: 'Tax Rate',
      taxes: 'Tax',
      total: 'Total',
      unit_price: 'Unit Price',
      customer: 'Customer',
    },
    address: 'Address',
    date_gte: 'Passed Since',
    date_lte: 'Passed Before',
    nb_items: 'Nb Items',
    total_gte: 'Min amount',
    status: 'Status',
    returned: 'Returned',
    phone: 'Phone',
  },
  theme: {
    name: 'Theme',
    light: 'Light',
    dark: 'Dark',
  },
  dashboard: {
    monthly_revenue: 'Monthly Revenue',
    total_customers: 'Total Customers',
  },
  orders_management: 'Orders Management',
  month_history: '30 Day Revenue History',
  export_excel: 'Export Excel',
  confirm_status_change: 'Confirm Status Change',
  confirm_status_change_message: 'Are you sure you want to change the status to',
  cancel: 'Cancel',
  confirm: 'Confirm',
  'ra.action.save': 'Save',
  'ra.action.delete': 'Delete',
  'ra.action.edit': 'Edit',
  'ra.action.create': 'Create',
  'ra.action.export': 'Export',
  'ra.action.sort_by': 'Sort by',
  'ra.action.add_filter': 'Add filter',
  'ra.action.search': 'Search',
  'ra.auth.logout': 'Logout',
  verified: 'Verified',
  yes: 'Yes',
  no: 'No',
  shipping_address: 'Shipping Address',
  pending: 'Pending',
  purchased: 'Purchased',
  delivering: 'Delivering',
  completed: 'Completed',
  new_orders: 'New Orders',
  pending_reviews: 'Pending Reviews',
  all_reviews: 'See all reviews',
  new_customers: 'New Customers',
  all_customers: 'See all customers',
  pending_orders: 'Pending Orders',
  customer_details: 'Customer Details',
  name: 'Name',
  email: 'Email',
  phone_number: 'Phone Number',
  reference: 'Reference',
  remark: 'Remark',
  order_information: 'Order Information',
  district: 'District',
  province: 'Province',
  village: 'Village',
  shipping_name: 'Shipping Name',
  districtName: 'District',
  provinceName: 'Province',
  order_items: 'Order Items',
  qty: 'Qty',
  price: 'Price',
  total: 'Total',
  product: 'Product',
  image: 'Image',
  currency: 'Currency',
  no_items_found: 'No items found',
  lak: 'LAK',
  usd: 'USD',
  thb: 'THB',
  order_totals: 'Order Totals',
  current: 'Current',
  no_orders_found: 'No orders found for status:',
  no_products_found: 'No products found',
  edit: 'Edit',
  delete: 'Delete',
  delete_product: 'Delete Product',
  delete_product_confirmation: 'Are you sure you want to delete this product?',
  product_deleted: 'Product deleted',
  product_delete_error: 'Error: Product not deleted',
  filters: 'Filters',
  search_products: 'Search products...',
  loading_categories: 'Loading categories...',
  categories: 'Categories',
  updated: 'Updated',
  total_count: 'Total Count',
  sell_count: 'Sold Count',
  product_information: 'Product Information',
  description: 'Description',
  english: 'English',
  lao: 'Lao',
  product_details: 'Product Details',
  timestamps: 'Timestamps',
  product_image: 'Product image',
  information_title: 'Information Title',
  code_label: 'Code label',
  code_helper: 'Code Helper',
  rate_helper: 'Rate Helper',
  type_label: 'Type',
  type_required: 'Type is required',
  rate_label: 'Rate',
  rate_positive: 'Rate must be positive',
  all: 'All',
  buy: 'BUY',
  sell: 'SELL',
  order: {
    items:
      'by %{customer_name}, one item |||| by %{customer_name}, %{nb_items} items',
  },
  welcome: {
    title: 'Welcome to the react-admin e-commerce demo',
    subtitle:
      "This is the admin of an imaginary poster shop. Feel free to explore and modify the data - it's local to your computer, and will reset each time you reload.",
    ra_button: 'react-admin site',
    demo_button: 'Source for this demo',
  },
  menu: {
    sales: 'Sales',
    catalog: 'Catalog',
    customers: 'Customers',
  },
  events: {
    review: {
      title: 'Posted review on "%{product}"',
    },
    order: {
      title: 'Ordered 1 poster |||| Ordered %{smart_count} posters',
    },
  },
  resources: {
    customers: {
      name: 'Customer |||| Customers',
      fields: {
        orders: 'Orders',
        first_seen: 'First seen',
        full_name: 'Name',
        groups: 'Segments',
        last_seen: 'Last seen',
        last_seen_gte: 'Visited Since',
        name: 'Name',
        total_spent: 'Total spent',
        password: 'Password',
        confirm_password: 'Confirm password',
        stateAbbr: 'State',
        email: 'Email',
      },
      filters: {
        last_visited: 'Last visited',
        today: 'Today',
        this_week: 'This week',
        last_week: 'Last week',
        this_month: 'This month',
        last_month: 'Last month',
        earlier: 'Earlier',
        has_ordered: 'Has ordered',
        has_newsletter: 'Has newsletter',
        group: 'Segment',
      },
      fieldGroups: {
        identity: 'Identity',
        address: 'Address',
        stats: 'Stats',
        history: 'History',
        password: 'Password',
        change_password: 'Change Password',
      },
      page: {
        delete: 'Delete Customer',
      },
      errors: {
        password_mismatch:
          'The password confirmation is not the same as the password.',
      },
      notifications: {
        created: 'Customer created |||| %{smart_count} customers created',
        updated: 'Customer updated |||| %{smart_count} customers updated',
        deleted: 'Customer deleted |||| %{smart_count} customers deleted',
      },
    },
    orders: {
      name: 'Order |||| Orders',
      amount: '1 order |||| %{smart_count} orders',
      title: 'Order %{reference}',
      invalid_data_format: 'Invalid data format for orders',
      fields: {
        basket: {
          delivery: 'Delivery',
          reference: 'Reference',
          quantity: 'Quantity',
          sum: 'Sum',
          tax_rate: 'Tax Rate',
          taxes: 'Tax',
          total: 'Total',
          unit_price: 'Unit Price',
          customer_id: 'Customer ID',
        },
        address: 'Address',
        date_gte: 'Passed Since',
        date_lte: 'Passed Before',
        nb_items: 'Nb Items',
        total_gte: 'Min amount',
        status: 'Status',
        returned: 'Returned',
        phone: 'Phone',
      },
      section: {
        order: 'Order',
        customer: 'Customer',
        shipping_address: 'Shipping Address',
        items: 'Items',
        total: 'Totals',
      },
      notifications: {
        created: 'Order created |||| %{smart_count} orders created',
        updated: 'Order updated |||| %{smart_count} orders updated',
        deleted: 'Order deleted |||| %{smart_count} orders deleted',
      },
    },
    blogs: {
      name: 'Blog |||| Blogs',
      fields: {
        image: 'Image',
        title: 'Title',
        description: 'Description',
        description_la: 'Description (Lao)',
        count: 'Count',
        created: 'Created',
        updated: 'Updated',
        current_image: 'Current Image',
      },
    },
    upload_image: 'Upload Image',
    upload_image_success: 'Image link copied to clipboard!',
    upload_image_failure: 'Failed to upload image',
    preview: 'Preview',
    users: {
      name: 'User admin |||| User admin',
      fields: {
        full_name: 'Full Name',
        username: 'Username',
        email: 'Email',
        phone_number: 'Phone Number',
        verified: 'Verified',
        emailVisibility: 'Email Visibility',
        password: 'Password',
        passwordConfirm: 'Confirm Password',
        avatar: 'Avatar',
        role: 'Role',
      },
    },
    user_verified_status_updated: 'User %{status} successfully',
    error_updating_verification_status: 'Error updating verification status',
    reset_password: 'Reset Password',
    user_email_not_found: 'User email not found',
    password_reset_email_sent: 'Password reset email sent to %{email}',
    failed_to_send_password_reset_email: 'Failed to send password reset email to %{email}',
    reset: 'Reset',
    confirm_password_reset: 'Are you sure you want to send a password reset email to %{email}?',
    username_required: 'Username is required',
    email_required: 'Email is required',
    full_name_required: 'Full name is required',
    password_required: 'Password is required',
    password_length: 'Password must be at least 6 characters long',
    passwords_do_not_match: 'Passwords do not match',
    create_user: 'Create User',
    user_created_successfully: 'User created successfully',
    error_creating_user: 'Error creating user: %{message}',
    basic_information: 'Basic Information',
    username_unique_helper: 'Username must be unique',
    email_unique_helper: 'Email must be unique',
    admin_role: 'Admin',
    staff_role: 'Staff',
    account_settings: 'Account Settings',
    password_length_helper: 'Password must be at least 6 characters long',
    password_match_helper: 'Must match the password above',
    currencies: {
      name: 'Currency |||| Currencies',
      fields: {
        ccy: 'Currency Code',
        type: 'Type',
        rate: 'Exchange Rate',
        created: 'Created',
        updated: 'Updated',
      },
      notifications: {
        created: 'Currency created |||| %{smart_count} currencies created',
        updated: 'Currency updated |||| %{smart_count} currencies updated',
        deleted: 'Currency deleted |||| %{smart_count} currencies deleted',
      },
    },
    invoices: {
      name: 'Invoice |||| Invoices',
      fields: {
        date: 'Invoice date',
        customer_id: 'Customer',
        order_id: 'Order',
        date_gte: 'Passed Since',
        date_lte: 'Passed Before',
        total_gte: 'Min amount',
        address: 'Address',
      },
      notifications: {
        created: 'Invoice created |||| %{smart_count} invoices created',
        updated: 'Invoice updated |||| %{smart_count} invoices updated',
        deleted: 'Invoice deleted |||| %{smart_count} invoices deleted',
      },
    },
    products: {
      name: 'Products |||| Products',
      fields: {
        category_id: 'Category',
        height_gte: 'Min height',
        height_lte: 'Max height',
        height: 'Height',
        image: 'Image',
        price: 'Price',
        reference: 'Reference',
        sales: 'Sales',
        stock_lte: 'Low Stock',
        stock: 'Stock',
        thumbnail: 'Thumbnail',
        width_gte: 'Min width',
        width_lte: 'Max width',
        width: 'Width',
        name: 'Name',
        image_url: 'Image URL',
        name_la: 'Name (Lao)',
        total_count: 'Total Count',
        image_urls: 'Image URLs',
        details: 'Details',
        details_la: 'Details (Lao)',
      },
      tabs: {
        image: 'Image',
        details: 'Details',
        description: 'Description',
        description_la: 'Description (Lao)',
        reviews: 'Reviews',
      },
      filters: {
        categories: 'Categories',
        stock: 'Stock',
        no_stock: 'Out of stock',
        low_stock: '1 - 9 items',
        average_stock: '10 - 49 items',
        enough_stock: '50 items & more',
        sales: 'Sales',
        best_sellers: 'Best sellers',
        average_sellers: 'Average',
        low_sellers: 'Low',
        never_sold: 'Never sold',
      },
      notifications: {
        created: 'Poster created |||| %{smart_count} posters created',
        updated: 'Poster updated |||| %{smart_count} posters updated',
        deleted: 'Poster deleted |||| %{smart_count} posters deleted',
      },
      errors: {
        total_count_less_than_sell_count: 'Total count cannot be less than sell count',
      },

    },
    categories: {
      name: 'Category |||| Categories',
      create_title: 'Create New Category',
      form_title: 'New Category Information',
      form_title_edit: 'Edit Category Information',
      fields: {
        products: 'Products',
        name: 'Category Name',
        name_la: 'Lao Name',
        image: 'Category Image',
        current_image: 'Current Image',
        price: 'Price',
      },
      notifications: {
        created: 'Category created |||| %{smart_count} categories created',
        updated: 'Category updated |||| %{smart_count} categories updated',
        deleted: 'Category deleted |||| %{smart_count} categories deleted',
      },
    },
    reviews: {
      name: 'Review |||| Reviews',
      amount: '1 review |||| %{smart_count} reviews',
      relative_to_poster: 'Review on poster',
      detail: 'Review detail',
      fields: {
        customer_id: 'Customer',
        order_id: 'Order',
        product_id: 'Product',
        date_gte: 'Posted since',
        date_lte: 'Posted before',
        date: 'Date',
        comment: 'Comment',
        rating: 'Rating',
      },
      action: {
        accept: 'Accept',
        reject: 'Reject',
      },
      notifications: {
        created: 'Review created |||| %{smart_count} reviews created',
        updated: 'Review updated |||| %{smart_count} reviews updated',
        deleted: 'Review deleted |||| %{smart_count} reviews deleted',
        approved_success: 'Review approved',
        approved_error: 'Error: Review not approved',
        rejected_success: 'Review rejected',
        rejected_error: 'Error: Review not rejected',
      },
    },
    segments: {
      name: 'Segment |||| Segments',
      fields: {
        customers: 'Customers',
        name: 'Name',
      },
      data: {
        compulsive: 'Compulsive',
        collector: 'Collector',
        ordered_once: 'Ordered once',
        regular: 'Regular',
        returns: 'Returns',
        reviewer: 'Reviewer',
      },
    },
  },
};

export default customEnglishMessages;