type DrinkItem = {
  id: string
  name: string
  description: string
  price: number
  is_promo: boolean
  is_new: boolean
  is_profit: boolean
  old_price: number
  promo_title: string
  img_url: string
}

const drinkItems: DrinkItem[] = [
  {
    id: "101",
    name: "Кола 0.33л",
    description: "Сильногазированный напиток",
    price: 159,
    is_promo: false,
    is_new: false,
    is_profit: false,
    old_price: 999,
    promo_title: "",
    img_url: "/drinks-photo/cola.png",
  },
  {
    id: "102",
    name: "Кола без сахара 0.33л",
    description: "Сильногазированный напиток без добавления сахара",
    price: 159,
    is_promo: false,
    is_new: false,
    is_profit: false,
    old_price: 999,
    promo_title: "",
    img_url: "/drinks-photo/cola-zero.png",
  },
  {
    id: "103",
    name: "Спрайт 0.33л",
    description: "Сильногазированный напиток",
    price: 159,
    is_promo: false,
    is_new: false,
    is_profit: false,
    old_price: 999,
    promo_title: "",
    img_url: "/drinks-photo/lime.png",
  },
  {
    id: "104",
    name: "Фанта 0.33л",
    description: "Сильногазированный напиток",
    price: 159,
    is_promo: false,
    is_new: false,
    is_profit: false,
    old_price: 999,
    promo_title: "",
    img_url: "/drinks-photo/orange.png",
  },
  {
    id: "105",
    name: "Доктор пеппер, 0.33л",
    description: "Сильногазированный напиток",
    price: 159,
    is_promo: false,
    is_new: false,
    is_profit: false,
    old_price: 999,
    promo_title: "",
    img_url: "/drinks-photo/doctor.png",
  },
  {
    id: "201",
    name: "Морковный сок",
    description: "100% морковный сок",
    price: 259,
    is_promo: false,
    is_new: false,
    is_profit: false,
    old_price: 999,
    promo_title: "",
    img_url: "/drinks-photo/carrot.png",
  },
  {
    id: "303",
    name: "Lipton 0.5л",
    description: "",
    price: 219,
    is_promo: false,
    is_new: false,
    is_profit: false,
    old_price: 999,
    promo_title: "",
    img_url: "/drinks-photo/lipton.png",
  },
  {
    id: "304",
    name: "Вода негазированная 0.5л",
    description: "",
    price: 129,
    is_promo: false,
    is_new: false,
    is_profit: false,
    old_price: 999,
    promo_title: "",
    img_url: "/drinks-photo/bonaqua.png",
  },
]

export default drinkItems
