import englishMessages from 'ra-language-english';
import { TranslationMessages } from 'react-admin';

const customLaoMessages: TranslationMessages = {
  ...englishMessages,
  search: 'ຄົ້ນຫາ',
  configuration: 'ການຕັ້ງຄ່າ',
  language: 'ພາສາ',
  day_revenue_history: 'ປະຫວັດລາຍຮັບ 30 ມື້',
  no_pending_orders: 'ບໍ່ພົບຄໍາສັ່ງຊື້ທີ່ລໍຖ້າດໍາເນີນການ',
  reference_id: 'ເລກອ້າງອີງ',
  customer: 'ລູກຄ້າ',
  quantity: 'ຈໍານວນ',
  amount: 'ຈໍານວນ',
  status: 'ສະຖານະ',
  created: 'ສ້າງເມື່ອ',
  showing: 'ກຳລັງສະແດງ',
  of: 'ຂອງ',
  orders: 'ຄໍາສັ່ງຊື້',
  filter_options: 'ຕົວເລືອກການກັ່ນຕອງ',
  month: 'ເດືອນ',
  year: 'ປີ',
  date_range: 'ຊ່ວງວັນທີ',
  start_date: 'ເລີ່ມວັນທີ',
  end_date: 'ວັນທີສິ້ນສຸດ',
  product_image: 'ຮູບພາບສິນຄ້າ',
  product: 'ສິນຄ້າ',
  information_title: 'ຊື່ຂໍ້ມູນ',
  code_required: 'ກະລຸນາປ່ຽນສະກຸນເງິນ',
  type_required: 'ກະລຸນາປ່ຽນປະເພດ',
  rate_positive: 'ອັດຕາແລກປ່ຽນຕໍ່ເປັນ0',
  code_label: 'ສະກຸນເງິນ',
  code_helper: 'ສະກຸນເງິນ',
  type_label: 'ປະເພດ',
  rate_label: 'ອັດຕາພາສີ',
  rate_helper: 'ອັດຕາພາສີ',
  all: 'ທັງໝົດ',
  buy: 'ຊື້',
  sell: 'ຂາຍ',
  count: 'ຈໍານວນ',
  title: 'ຫົວຂໍ້',
  upload_image: 'ອັບໂຫລດຮູບພາບ',
  upload_image_success: 'ສຳເນົາລິ້ງຮູບພາບສຳເລັດແລ້ວ!',
  upload_image_failure: 'ອັບໂຫລດຮູບພາບບໍ່ສຳເລັດ',
  preview: 'ເບິ່ງຕົວຢ່າງ',
  image_input_placeholder: 'ລາກຮູບພາບເພື່ອອັບໂຫລດ, ຫຼືຄລິກເພື່ອເລືອກ.',
  details_la: 'ລາຍລະອຽດ (ລາວ)',
  image_urls: 'ລິ້ງຮູບພາບ',
  image_url: 'ລິ້ງຮູບພາບ',
  name_la: 'ຊື່ (ລາວ)',
  all_status: 'ທັງໝົດ',
  unverified: 'ຍົກເລີກ',
  has_orders: 'ມີການສັ່ງຊື້',
  no_orders: 'ບໍ່ມີການສັ່ງຊື້',
  all_email_visibility: 'ທັງໝົດ',
  email_visible: 'ສະຫຼາດ',
  email_hidden: 'ບໍ່ສະຫຼາດ',
  enter_email_address: 'ປ່ຽນອີເມວ',
  excel_export_success: 'ສຳເນົາລິ້ງ Excel file ສຳເລັດແລ້ວ',
  excel_export_failure: 'ບໍ່ສາມາດລິ້ງ Excel file',
  username: 'ຊື່ຜູ້ໃຊ້',
  phone: 'ເບີໂທ',
  active: 'ເຄື່ອນໄຫວ',
  inactive: 'ບໍ່ເຄື່ອນໄຫວ',
  account_status_updated: 'ສະຖານະບັນຊີຖືກປ່ຽນແປງເປັນ%{status}',
  error_updating_account_status: 'ເກີດຂໍ້ຜິດພາດໃນການອັບເດດສະຖານະບັນຊີ',
  personal_information: 'ຂໍ້ມູນສ່ວນຕົວ',
  account_history: 'ປະຫວັດບັນຊີ',
  created_at: 'ສ້າງເມື່ອ',
  last_updated: 'ອັບເດດຫຼ້າສຸດ',
  address_line_1: 'ທີ່ຢູ່ແຖວ 1',
  address_line_2: 'ທີ່ຢູ່ແຖວ 2',
  city: 'ເມືອງ',
  state_region: 'ລັດ/ພາກພື້ນ',
  postal_code: 'ລະຫັດໄປສະນີ',
  country: 'ປະເທດ',
  address: 'ທີ່ຢູ່',
  reset_password: 'ຕັ້ງລະຫັດຜ່ານໃໝ່',
  basic_information: 'ຂໍ້ມູນພື້ນຖານ',
  username_unique_helper: 'ຊື່ຜູ້ໃຊ້ຕ້ອງບໍ່ຊ້ຳກັນ',
  email_unique_helper: 'ອີເມວຕ້ອງບໍ່ຊ້ຳກັນ',
  admin_role: 'ຜູ້ເບິ່ງແຍງລະບົບ',
  staff_role: 'ພະນັກງານ',
  password_length_helper: 'ລະຫັດຜ່ານຕ້ອງມີຢ່າງໜ້ອຍ 8 ຕົວອັກສອນ',
  password_match_helper: 'ຕ້ອງກົງກັນກັບລະຫັດຜ່ານຂ້າງເທິງ',
  account_settings: 'ການຕັ້ງຄ່າບັນຊີ',
  user_information: 'ຂໍ້ມູນຜູ້ໃຊ້',
  avatar: 'ຮູບໂປຣໄຟລ໌',
  user_id: 'ລະຫັດຜູ້ໃຊ້',
  change_password: 'ປ່ຽນລະຫັດຜ່ານ',
  old_password: 'ລະຫັດຜ່ານເກົ່າ',
  old_password_helper: 'ກະລຸນາປ່ຽນລະຫັດຜ່ານ',
  password_length_helper_edit: 'ປ່ອຍຫວ່າງໄວ້ເພື່ອຮັກສາລະຫັດຜ່ານປັດຈຸບັນ. ຕ້ອງມີຢ່າງໜ້ອຍ 6 ຕົວອັກສອນ.',
  details: 'ລາຍລະອຽດ',
  fields: {
    basket: {
      date: 'ວັນທີ',
      reference: 'ເລກອ້າງອີງ',
      quantity: 'ຈໍານວນ',
      sum: 'ລວມ',
      tax_rate: 'ອັດຕາພາສີ',
      taxes: 'ພາສີ',
      total: 'ລວມ',
      unit_price: 'ລາຄາຕໍ່ໜ່ວຍ',
      customer: 'ລູກຄ້າ',
    },
    address: 'ທີ່ຢູ່',
    date_gte: 'ຜ່ານມາຕັ້ງແຕ່',
    date_lte: 'ຜ່ານມາກ່ອນ',
    nb_items: 'ຈໍານວນລາຍການ',
    total_gte: 'ຈໍານວນຕໍ່າສຸດ',
    status: 'ສະຖານະ',
    returned: 'ສົ່ງຄືນ',
    phone: 'ເບີໂທລະສັບ',
  },
  theme: {
    name: 'ຮູບແບບສີສັນ',
    light: 'ແຈ້ງ',
    dark: 'ມືດ',
  },
  dashboard: {
    monthly_revenue: 'ລາຍຮັບປະຈໍາເດືອນ',
    total_customers: 'ລູກຄ້າທັງໝົດ',
  },
  orders_management: 'ການຈັດການຄໍາສັ່ງຊື້',
  month_history: 'ປະຫວັດລາຍຮັບ 30 ວັນ',
  export_excel: 'ສົ່ງອອກ Excel',
  confirm_status_change: 'ຢືນຢັນການປ່ຽນສະຖານະ',
  confirm_status_change_message: 'ທ່ານແນ່ໃຈບໍວ່າຕ້ອງການປ່ຽນສະຖານະເປັນ',
  cancel: 'ຍົກເລີກ',
  confirm: 'ຢືນຢັນ',
  'ra.action.save': 'ບັນທຶກ',
  'ra.action.delete': 'ລຶບ',
  'ra.action.edit': 'ແກ້ໄຂ',
  'ra.action.create': 'ສ້າງ',
  'ra.action.export': 'ສົ່ງອອກ',
  'ra.action.sort_by': 'ຈັດຮຽງຕາມ',
  'ra.action.add_filter': 'ເພີ່ມຕົວກອງ',
  'ra.action.search': 'ຄົ້ນຫາ',
  'ra.auth.logout': 'ອອກຈາກລະບົບ',
  verified: 'ຢືນຢັນແລ້ວ',
  yes: 'ແມ່ນ',
  no: 'ບໍ່',
  shipping_address: 'ທີ່ຢູ່ຈັດສົ່ງ',
  pending: 'ລໍຖ້າ',
  purchased: 'ຊື້ແລ້ວ',
  delivering: 'ກໍາລັງຈັດສົ່ງ',
  completed: 'ສໍາເລັດ',
  new_orders: 'ຄໍາສັ່ງຊື້ໃໝ່',
  pending_reviews: 'ຄໍາຕິຊົມທີ່ລໍຖ້າການກວດສອບ',
  all_reviews: 'ເບິ່ງຄໍາຕິຊົມທັງໝົດ',
  new_customers: 'ລູກຄ້າໃໝ່',
  all_customers: 'ເບິ່ງລູກຄ້າທັງໝົດ',
  pending_orders: 'ຄໍາສັ່ງຊື້ທີ່ລໍຖ້າດໍາເນີນການ',
  customer_details: 'ລາຍລະອຽດລູກຄ້າ',
  name: 'ຊື່',
  email: 'ອີເມວ',
  phone_number: 'ເບີໂທລະສັບ',
  reference: 'ເລກອ້າງອີງ',
  remark: 'ໝາຍເຫດ',
  order_information: 'ຂໍ້ມູນຄໍາສັ່ງຊື້',
  district: 'ເມືອງ',
  province: 'ແຂວງ',
  village: 'ບ້ານ',
  shipping_name: 'ຊື່ຜູ້ຮັບ',
  districtName: 'ເມືອງ',
  provinceName: 'ແຂວງ',
  order_items: 'ລາຍການສັ່ງຊື້',
  qty: 'ຈໍານວນ',
  price: 'ລາຄາ',
  total: 'ລວມ',
  image: 'ຮູບພາບ',
  currency: 'ສະກຸນເງິນ',
  no_items_found: 'ບໍ່ພົບລາຍການ',
  lak: 'ກີບ',
  usd: 'ໂດລາສະຫະລັດ',
  thb: 'ບາດໄທ',
  order_totals: 'ຍອດລວມຄໍາສັ່ງຊື້',
  current: 'ປັດຈຸບັນ',
  no_orders_found: 'ບໍ່ພົບຄໍາສັ່ງຊື້ສໍາລັບສະຖານະ:',
  no_products_found: 'ບໍ່ພົບສິນຄ້າ',
  edit: 'ແກ້ໄຂ',
  delete: 'ລຶບ',
  delete_product: 'ລຶບສິນຄ້າ',
  delete_product_confirmation: 'ທ່ານແນ່ໃຈບໍວ່າຕ້ອງການລຶບສິນຄ້ານີ້?',
  product_deleted: 'ສິນຄ້າຖືກລຶບແລ້ວ',
  product_delete_error: 'ຜິດພາດ: ບໍ່ສາມາດລຶບສິນຄ້າໄດ້',
  filters: 'ຕົວກອງ',
  search_products: 'ຄົ້ນຫາສິນຄ້າ...',
  loading_categories: 'ກຳລັງໂຫຼດໝວດໝູ່...',
  categories: 'ໝວດໝູ່',
  updated: 'ອັບເດດແລ້ວ',
  total_count: 'ຈໍານວນທັງໝົດ',
  sell_count: 'ຈໍານວນຂາຍແລ້ວ',
  product_information: 'ຂໍ້ມູນສິນຄ້າ',
  description: 'ລາຍລະອຽດ',
  description_la: 'ລາຍລະອຽດ (ລາວ)',
  english: 'ພາສາອັງກິດ',
  lao: 'ພາສາລາວ',
  product_details: 'ລາຍລະອຽດສິນຄ້າ',
  timestamps: 'ເວລາ',
  ccy: 'ລະຫັດສະກຸນເງິນ',
  type: 'ປະເພດ',
  rate: 'ອັດຕາແລກປ່ຽນ',
  order: {
    items:
      'ໂດຍ %{customer_name}, ຫນຶ່ງລາຍການ |||| ໂດຍ %{customer_name}, %{nb_items} ລາຍການ',
  },
  welcome: {
    title: 'ຍິນດີຕ້ອນຮັບສູ່ການສາທິດ e-commerce ຂອງ react-admin',
    subtitle:
      'ນີ້ແມ່ນລະບົບຄຸ້ມຄອງຂອງຮ້ານຂາຍໂປສເຕີຈິນຕະນາການ. ຮູ້ສຶກວ່າຈະສຳຫຼວດ ແລະ ແກ້ໄຂຂໍ້ມູນ - ມັນຢູ່ໃນຄອມພິວເຕີຂອງທ່ານ, ແລະ ຈະຖືກຣີເຊັດທຸກຄັ້ງທີ່ທ່ານໂຫຼດໜ້າໃໝ່.',
    ra_button: 'ເວັບໄຊ react-admin',
    demo_button: 'ແຫຼ່ງຂໍ້ມູນສໍາລັບການສາທິດນີ້',
  },
  menu: {
    sales: 'ການຂາຍ',
    catalog: 'ລາຍການສິນຄ້າ',
    customers: 'ລູກຄ້າ',
  },
  events: {
    review: {
      title: 'ຄໍາຕິຊົມທີ່ລົງໃນ "%{product}"',
    },
    order: {
      title: 'ສັ່ງຊື້ 1 ໂປສເຕີ |||| ສັ່ງຊື້ %{smart_count} ໂປສເຕີ',
    },
  },
  resources: {
    customers: {
      name: 'ລູກຄ້າ |||| ລູກຄ້າ',
      fields: {
        orders: 'ຄໍາສັ່ງຊື້',
        first_seen: 'ເຫັນຄັ້ງທໍາອິດ',
        full_name: 'ຊື່ເຕັມ',
        groups: 'ກຸ່ມ',
        last_seen: 'ເຫັນຫຼ້າສຸດ',
        last_seen_gte: 'ເຂົ້າເບິ່ງຕັ້ງແຕ່',
        name: 'ຊື່',
        total_spent: 'ລວມລາຍຈ່າຍ',
        password: 'ລະຫັດຜ່ານ',
        confirm_password: 'ຢືນຢັນລະຫັດຜ່ານ',
        stateAbbr: 'ແຂວງ',
        email: 'ອີເມວ',
      },
      filters: {
        last_visited: 'ເຂົ້າເບິ່ງຫຼ້າສຸດ',
        today: 'ມື້ນີ້',
        this_week: 'ອາທິດນີ້',
        last_week: 'ອາທິດຜ່ານມາ',
        this_month: 'ເດືອນນີ້',
        last_month: 'ເດືອນຜ່ານມາ',
        earlier: 'ກ່ອນໜ້ານີ້',
        has_ordered: 'ໄດ້ສັ່ງຊື້ແລ້ວ',
        has_newsletter: 'ມີຈົດໝາຍຂ່າວ',
        group: 'ກຸ່ມ',
      },
      fieldGroups: {
        identity: 'ຂໍ້ມູນສ່ວນຕົວ',
        address: 'ທີ່ຢູ່',
        stats: 'ສະຖິຕິ',
        history: 'ປະຫວັດ',
        password: 'ລະຫັດຜ່ານ',
        change_password: 'ປ່ຽນລະຫັດຜ່ານ',
      },
      page: {
        delete: 'ລຶບລູກຄ້າ',
      },
      errors: {
        password_mismatch:
          'ການຢືນຢັນລະຫັດຜ່ານບໍ່ກົງກັນກັບລະຫັດຜ່ານ.',
      },
      notifications: {
        created: 'ລູກຄ້າຖືກສ້າງ |||| %{smart_count} ລູກຄ້າຖືກສ້າງ',
        updated: 'ລູກຄ້າຖືກອັບເດດ |||| %{smart_count} ລູກຄ້າຖືກອັບເດດ',
        deleted: 'ລູກຄ້າຖືກລຶບ |||| %{smart_count} ລູກຄ້າຖືກລຶບ',
      },
    },
    orders: {
      name: 'ຄໍາສັ່ງຊື້ |||| ຄໍາສັ່ງຊື້',
      amount: '1 ຄໍາສັ່ງຊື້ |||| %{smart_count} ຄໍາສັ່ງຊື້',
      title: 'ຄໍາສັ່ງຊື້ %{reference}',
      invalid_data_format: 'ຮູບແບບຂໍ້ມູນບໍ່ຖືກຕ້ອງສໍາລັບຄໍາສັ່ງຊື້',
      fields: {
        basket: {
          delivery: 'ຄ່າຈັດສົ່ງ',
          reference: 'ເລກອ້າງອີງ',
          quantity: 'ຈໍານວນ',
          sum: 'ລວມ',
          tax_rate: 'ອັດຕາພາສີ',
          taxes: 'ພາສີ',
          total: 'ລວມທັງໝົດ',
          unit_price: 'ລາຄາຕໍ່ໜ່ວຍ',
          customer_id: 'ລະຫັດລູກຄ້າ',
        },
        address: 'ທີ່ຢູ່',
        date_gte: 'ຜ່ານມາຕັ້ງແຕ່',
        date_lte: 'ຜ່ານມາກ່ອນ',
        nb_items: 'ຈໍານວນລາຍການ',
        total_gte: 'ຈໍານວນຕໍ່າສຸດ',
        status: 'ສະຖານະ',
        returned: 'ສົ່ງຄືນ',
        phone: 'ເບີໂທລະສັບ',
      },
      section: {
        order: 'ຄໍາສັ່ງຊື້',
        customer: 'ລູກຄ້າ',
        shipping_address: 'ທີ່ຢູ່ຈັດສົ່ງ',
        items: 'ລາຍການ',
        total: 'ລວມ',
      },
      notifications: {
        created: 'ຄໍາສັ່ງຊື້ຖືກສ້າງ |||| %{smart_count} ຄໍາສັ່ງຊື້ຖືກສ້າງ',
        updated: 'ຄໍາສັ່ງຊື້ຖືກອັບເດດ |||| %{smart_count} ຄໍາສັ່ງຊື້ຖືກອັບເດດ',
        deleted: 'ຄໍາສັ່ງຊື້ຖືກລຶບ |||| %{smart_count} ຄໍາສັ່ງຊື້ຖືກລຶບ',
      },
    },
    blogs: {
      name: 'ບລັອກ |||| ບລັອກ',
      fields: {
        image: 'ຮູບພາບ',
        title: 'ຫົວຂໍ້',
        description: 'ລາຍລະອຽດ',
        description_la: 'ລາຍລະອຽດ (ລາວ)',
        count: 'ຈຳນວນ',
        created: 'ສ້າງเมื่อ',
        updated: 'อัปเดตเมื่อ',
        current_image: 'ຮູບພາບປັດຈຸບັນ',
      },
    },
    upload_image: 'ອັບໂຫລດຮູບພາບ',
    upload_image_success: 'ສຳເນົາລິ້ງຮູບພາບສຳເລັດແລ້ວ!',
    upload_image_failure: 'ອັບໂຫລດຮູບພາບບໍ່ສຳເລັດ',
    preview: 'ເບິ່ງຕົວຢ່າງ',
    users: {
      name: 'ຜູ້ໃຊ້ແອັດມິນ |||| ຜູ້ໃຊ້ແອັດມິນ',
      fields: {
        full_name: 'ຊື່ເຕັມ',
        username: 'ຊື່ຜູ້ໃຊ້',
        email: 'ອີເມວ',
        phone_number: 'ເບີໂທລະສັບ',
        verified: 'ຢືນຢັນແລ້ວ',
        emailVisibility: 'ການເບິ່ງເຫັນອີເມວ',
        password: 'ລະຫັດຜ່ານ',
        passwordConfirm: 'ຢືນຢັນລະຫັດຜ່ານ',
        avatar: 'ຮູບໂປຣໄຟລ໌',
        role: 'ບົດບາດ',
      },
    },
    user_verified_status_updated: 'ຜູ້ໃຊ້ %{status} ສຳເລັດແລ້ວ',
    error_updating_verification_status: 'ເກີດຂໍ້ຜິດພາດໃນການອັບເດດສະຖານະການຢືນຢັນ',
    reset_password: 'ຕັ້ງລະຫັດຜ່ານໃໝ່',
    user_email_not_found: 'ບໍ່ພົບອີເມວຜູ້ໃຊ້',
    password_reset_email_sent: 'ອີເມວຕັ້ງລະຫັດຜ່ານໃໝ່ຖືກສົ່ງໄປທີ່ %{email}',
    failed_to_send_password_reset_email: 'ລົ້ມເຫຼວໃນການສົ່ງອີເມວຕັ້ງລະຫັດຜ່ານໃໝ່ໄປທີ່ %{email}',
    reset: 'ຕັ້ງຄ່າໃໝ່',
    confirm_password_reset: 'ທ່ານແນ່ໃຈບໍວ່າຕ້ອງການສົ່ງອີເມວຕັ້ງລະຫັດຜ່ານໃໝ່ໄປທີ່ %{email}?',
    username_required: 'ຊື່ຜູ້ໃຊ້ແມ່ນຈຳເປັນ',
    email_required: 'ອີເມວແມ່ນຈຳເປັນ',
    full_name_required: 'ຊື່ເຕັມແມ່ນຈຳເປັນ',
    password_required: 'ລະຫັດຜ່ານແມ່ນຈຳເປັນ',
    password_length: 'ລະຫັດຜ່ານຕ້ອງມີຢ່າງໜ້ອຍ 8 ຕົວອັກສອນ',
    passwords_do_not_match: 'ລະຫັດຜ່ານບໍ່ກົງກັນ',
    create_user: 'ສ້າງຜູ້ໃຊ້',
    user_created_successfully: 'ສ້າງຜູ້ໃຊ້ສຳເລັດແລ້ວ',
    error_creating_user: 'ເກີດຂໍ້ຜິດພາດໃນການສ້າງຜູ້ໃຊ້: %{message}',
    basic_information: 'ຂໍ້ມູນພື້ນຖານ',
    username_unique_helper: 'ຊື່ຜູ້ໃຊ້ຕ້ອງບໍ່ຊ້ຳກັນ',
    email_unique_helper: 'ອີເມວຕ້ອງບໍ່ຊ້ຳກັນ',
    admin_role: 'ຜູ້ເບິ່ງແຍງລະບົບ',
    staff_role: 'ພະນັກງານ',
    account_settings: 'ການຕັ້ງຄ່າບັນຊີ',
    password_length_helper: 'ລະຫັດຜ່ານຕ້ອງມີຢ່າງໜ້ອຍ 8 ຕົວອັກສອນ',
    password_match_helper: 'ຕ້ອງກົງກັນກັບລະຫັດຜ່ານຂ້າງເທິງ',
    currencies: {
      name: 'ສະກຸນເງິນ |||| ສະກຸນເງິນ',
      fields: {
        ccy: 'ລະຫັດສະກຸນເງິນ',
        type: 'ປະເພດ',
        rate: 'ອັດຕາແລກປ່ຽນ',
        created: 'ສ້າງເມື່ອ',
        updated: 'ອັບເດດເມື່ອ',
      },
      notifications: {
        created: 'ສະກຸນເງິນຖືກສ້າງ |||| %{smart_count} ສະກຸນເງິນຖືກສ້າງ',
        updated: 'ສະກຸນເງິນຖືກອັບເດດ |||| %{smart_count} ສະກຸນເງິນຖືກອັບເດດ',
        deleted: 'ສະກຸນເງິນຖືກລຶບ |||| %{smart_count} ສະກຸນເງິນຖືກລຶບ',
      },
    },
    invoices: {
      name: 'ໃບແຈ້ງໜີ້ |||| ໃບແຈ້ງໜີ້',
      fields: {
        date: 'ວັນທີໃບແຈ້ງໜີ້',
        customer_id: 'ລູກຄ້າ',
        order_id: 'ຄໍາສັ່ງຊື້',
        date_gte: 'ຜ່ານມາຕັ້ງແຕ່',
        date_lte: 'ຜ່ານມາກ່ອນ',
        total_gte: 'ຈໍານວນຕໍ່າສຸດ',
        address: 'ທີ່ຢູ່',
      },
      notifications: {
        created: 'ໃບແຈ້ງໜີ້ຖືກສ້າງ |||| %{smart_count} ໃບແຈ້ງໜີ້ຖືກສ້າງ',
        updated: 'ໃບແຈ້ງໜີ້ຖືກອັບເດດ |||| %{smart_count} ໃບແຈ້ງໜີ້ຖືກອັບເດດ',
        deleted: 'ໃບແຈ້ງໜີ້ຖືກລຶບ |||| %{smart_count} ໃບແຈ້ງໜີ້ຖືກລຶບ',
      },
    },
    products: {
      name: 'ສິນຄ້າ |||| ສິນຄ້າ',
      fields: {
        category_id: 'ໝວດໝູ່',
        height_gte: 'ຄວາມສູງຕໍ່າສຸດ',
        height_lte: 'ຄວາມສູງສູງສຸດ',
        height: 'ຄວາມສູງ',
        image: 'ຮູບພາບ',
        price: 'ລາຄາ',
        reference: 'ເລກອ້າງອີງ',
        sales: 'ການຂາຍ',
        stock_lte: 'ສະຕັອກຕໍ່າ',
        stock: 'ສະຕັອກ',
        thumbnail: 'ຮູບນ້ອຍ',
        width_gte: 'ຄວາມກວ້າງຕໍ່າສຸດ',
        width_lte: 'ຄວາມກວ້າງສູງສຸດ',
        width: 'ຄວາມກວ້າງ',
        name: 'ຊື່',
        image_url: 'ຮູບພາບ',
        name_la: 'ຊື່ (ລາວ)',
        total_count: 'ຈຳນວນທັງໝົດ',
        image_urls: 'ລິ້ງຮູບພາບ',
        details: 'ລາຍລະອຽດ',
        details_la: 'ລາຍລະອຽດ (ລາວ)',
      },
      tabs: {
        image: 'ຮູບພາບ',
        details: 'ລາຍລະອຽດ',
        description: 'ຄໍາອະທິບາຍ',
        reviews: 'ຄໍາຕິຊົມ',
      },
      filters: {
        categories: 'ໝວດໝູ່',
        stock: 'ສະຕັອກ',
        no_stock: 'ສິນຄ້າໝົດ',
        low_stock: '1 - 9 ລາຍການ',
        average_stock: '10 - 49 ລາຍການ',
        enough_stock: '50 ລາຍການຂຶ້ນໄປ',
        sales: 'ການຂາຍ',
        best_sellers: 'ສິນຄ້າຂາຍດີທີ່ສຸດ',
        average_sellers: 'ປົກກະຕິ',
        low_sellers: 'ຂາຍໜ້ອຍ',
        never_sold: 'ບໍ່ເຄີຍຂາຍ',
      },
      notifications: {
        created: 'ໂປສເຕີຖືກສ້າງ |||| %{smart_count} ໂປສເຕີຖືກສ້າງ',
        updated: 'ໂປສເຕີຖືກອັບເດດ |||| %{smart_count} ໂປສເຕີຖືກອັບເດດ',
        deleted: 'ໂປສເຕີຖືກລຶບ |||| %{smart_count} ໂປສເຕີຖືກລຶບ',
      },
      errors: {
        total_count_less_than_sell_count: 'ຈຳນວນທັງໝົດບໍ່ສາມາດໜ້ອຍກວ່າຈຳນວນທີ່ຂາຍໄດ້',
      },
    },
    categories: {
      name: 'ໝວດໝູ່ |||| ໝວດໝູ່',
      create_title: 'ສ້າງໝວດໝູ່ໃໝ່',
      form_title: 'ຂໍ້ມູນໝວດໝູ່ໃໝ່',
      form_title_edit: 'ແກ້ໄຂຂໍ້ມູນໝວດໝູ່',
      fields: {
        products: 'ສິນຄ້າ',
        name: 'ຊື່ໝວດໝູ່',
        name_la: 'ຊື່ພາສາລາວ',
        image: 'ຮູບພາບໝວດໝູ່',
        current_image: 'ຮູບພາບປັດຈຸບັນ',
        price: 'ລາຄາ',
      },
      notifications: {
        created: 'ໝວດໝູ່ຖືກສ້າງ |||| %{smart_count} ໝວດໝູ່ຖືກສ້າງ',
        updated: 'ໝວດໝູ່ຖືກອັບເດດ |||| %{smart_count} ໝວດໝູ່ຖືກອັບເດດ',
        deleted: 'ໝວດໝູ່ຖືກລຶບ |||| %{smart_count} ໝວດໝູ່ຖືກລຶບ',
      },
    },
    reviews: {
      name: 'ຄໍາຕິຊົມ |||| ຄໍາຕິຊົມ',
      amount: '1 ຄໍາຕິຊົມ |||| %{smart_count} ຄໍາຕິຊົມ',
      relative_to_poster: 'ຄໍາຕິຊົມກ່ຽວກັບໂປສເຕີ',
      detail: 'ລາຍລະອຽດຄໍາຕິຊົມ',
      fields: {
        customer_id: 'ລູກຄ້າ',
        order_id: 'ຄໍາສັ່ງຊື້',
        product_id: 'ສິນຄ້າ',
        date_gte: 'ລົງວັນທີຕັ້ງແຕ່',
        date_lte: 'ລົງວັນທີກ່ອນ',
        date: 'ວັນທີ',
        comment: 'ຄໍາເຫັນ',
        rating: 'ຄະແນນ',
      },
      action: {
        accept: 'ຍອມຮັບ',
        reject: 'ປະຕິເສດ',
      },
      notifications: {
        created: 'ຄໍາຕິຊົມຖືກສ້າງ |||| %{smart_count} ຄໍາຕິຊົມຖືກສ້າງ',
        updated: 'ຄໍາຕິຊົມຖືກອັບເດດ |||| %{smart_count} ຄໍາຕິຊົມຖືກອັບເດດ',
        deleted: 'ຄໍາຕິຊົມຖືກລຶບ |||| %{smart_count} ຄໍາຕິຊົມຖືກລຶບ',
        approved_success: 'ຄໍາຕິຊົມຖືກອະນຸມັດ',
        approved_error: 'ຜິດພາດ: ຄໍາຕິຊົມບໍ່ຖືກອະນຸມັດ',
        rejected_success: 'ຄໍາຕິຊົມຖືກປະຕິເສດ',
        rejected_error: 'ຜິດພາດ: ຄໍາຕິຊົມບໍ່ຖືກປະຕິເສດ',
      },
    },
    segments: {
      name: 'ກຸ່ມ |||| ກຸ່ມ',
      fields: {
        customers: 'ລູກຄ້າ',
        name: 'ຊື່',
      },
      data: {
        compulsive: 'ຜູ້ຊື້ແບບບໍ່ຢຸດຢັ້ງ',
        collector: 'ຜູ້ເກັບ',
        ordered_once: 'ສັ່ງຊື້ຄັ້ງດຽວ',
        regular: 'ປົກກະຕິ',
        returns: 'ສົ່ງຄືນ',
        reviewer: 'ຜູ້ໃຫ້ຄໍາຕິຊົມ',
      },
    },
  },
};

export default customLaoMessages;