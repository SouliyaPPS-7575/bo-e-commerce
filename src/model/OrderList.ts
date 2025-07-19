// Types for PocketBase data
export interface PBOrder {
  id: string;
  customer_id: string;
  customer_name: string;
  phone_number: string;
  address_id: string;
  address: string;
  status: 'pending' | 'purchased' | 'cancel' | 'delivering' | 'completed';
  reference_id: string;
  remark: string;
  total_lak: number;
  total_usd: number;
  total_thb: number;
  created: string;
  updated: string;
}

export interface PBOrderItem {
  id: string;
  order_id: string;
  product_id: string;
  quantity: number;
  price_lak: number;
  price_usd: number;
  price_thb: number;
  product_name: string;
  created: string;
  updated: string;
}

export interface PBCustomer {
  id: string;
  username: string;
  name: string;
  phone_number: string;
  avatar: string;
  verified: boolean;
  email: string;
  emailVisibility: boolean;
  address_id: string;
  created: string;
  updated: string;
}

export interface PBAddress {
  id: string;
  customer_id: string;
  province_id: string;
  district_id: string;
  village: string;
  shipping_name: string;
  created: string;
  updated: string;
}

export interface PBProduct {
  collectionId: string
  collectionName: string
  id: string
  name: string
  description: string
  price: number
  category_id: string
  image_url: string[]
  name_la: string
  details: string
  is_delete: boolean
  details_la: string
  description_la: string
  total_count: number
  sell_count: number
  created: string
  updated: string
}
