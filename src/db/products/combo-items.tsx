type ComboItem = {
    id: string
    name: string
    description: string
  
    price_sm: number
    old_price_sm: number
    weight_sm: number
    meat_weight_sm: number
    cheese_weight_sm: number
  
    price_lg: number
    old_price_lg: number
    weight_lg: number
    meat_weight_lg: number
    cheese_weight_lg: number
  
    is_promo: boolean
    is_new: boolean
    is_top: boolean
    is_meatless: boolean
    is_profit: boolean
  
    promo_title: string
    img_url: string
  }
  
  const comboItems: ComboItem[] = [
  ]
  
  export default comboItems
