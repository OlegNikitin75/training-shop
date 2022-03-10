


import goods_r1 from "./img/product-img/related-img1.jpg";
import goods_r2 from "./img/product-img/related-img2.jpg";
import goods_r3 from "./img/product-img/related-img3.jpg";
import goods_r4 from "./img/product-img/related-img4.jpg";

import label1 from "./img/icons/label1.png";
import label2 from "./img/icons/label2.png";
import label3 from "./img/icons/label3.png";
import label4 from "./img/icons/label4.png";
import label5 from "./img/icons/label5.png";
import label6 from "./img/icons/label6.png";
import label7 from "./img/icons/label7.png";




export const DATA = {


  "blogs": [
    {
      "id": "0",
      "title": "The Easiest Way to Break",
      "desc": "But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor"
    },
    {
      "id": "1",
      "title": "Wedding Season",
      "desc": "But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor"
    },
    {
      "id": "2",
      "title": "Recent Favorites On Repeat",
      "desc": "But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor"
    }
  ],
  "filters": {
    "colors": [
      {
        "name": "black",
        "color": "#000000"
      },
      {
        "name": "cyan",
        "color": "#26BDB0"
      },
      {
        "name": "green",
        "color": "#8FDB7B"
      },
      {
        "name": "grey",
        "color": "#C4C4C4"
      },
      {
        "name": "pink",
        "color": "#E74A8C"
      },
      {
        "name": "white",
        "color": "#ffffff"
      },
      {
        "name": "Blue",
        "color": "#4095E3"
      },
      {
        "name": "red",
        "color": "#FF0000"
      },
      {
        "name": "tomato",
        "color": "#FF6347"
      },
      {
        "name": "yellow",
        "color": "#FFFF00"
      },
      {
        "name": "brown",
        "color": "#8B4513"
      },
      {
        "name": "indigo",
        "color": "#4B0082"
      }
    ],
    "sizes": [
      {
        "size": "XL"
      },
      {
        "size": "L"
      },
      {
        "size": "M"
      },
      {
        "size": "S"
      },
      {
        "size": "Xs"
      }

    ],
    "brands": [
      {
        "brand": "Ck"
      },
      {
        "brand": "H&M"
      },
      {
        "brand": "Kalles"
      },
      {
        "brand": "Levi's"
      },
      {
        "brand": "Monki"
      },
      {
        "brand": "Nike"
      }

    ],
    "prices": [
      {
        "price": "$1200+"
      },
      {
        "price": "$600-$1200"
      },
      {
        "price": "$300-$600"
      },
      {
        "price": "$150-$300"
      },
      {
        "price": "$50-$150"
      },
      {
        "price": "$50-$150"
      }

    ]
  },
  "related": [
    {
      "id": "1",
      "category": "women",
      "name": "Women's tracksuit Q109",
      "rating": "3",
      "src": goods_r1,
      "price": "10.00",
      "discounts": false
    },
    {
      "id": "2",
      "category": "women",
      "name": "Women's tracksuit Q109",
      "rating": "4",
      "src": goods_r2,
      "price": "20.00",
      "discounts": false
    },
    {
      "id": "3",
      "category": "women",
      "name": "Women's tracksuit Q109",
      "rating": "3",
      "src": goods_r3,
      "price": "30.00",
      "discounts": false
    },
    {
      "id": "4",
      "category": "women",
      "name": "Women's tracksuit Q109",
      "rating": "2",
      "src": goods_r4,
      "price": "40.00",
      "discounts": false
    },{
      "id": "5",
      "category": "women",
      "name": "Women's tracksuit Q109",
      "rating": "4",
      "src": goods_r1,
      "price": "35.00",
      "discounts": false
    },
    {
      "id": "6",
      "category": "women",
      "name": "Women's tracksuit Q109",
      "rating": "2",
      "src": goods_r2,
      "price": "15.00",
      "discounts": {
        "discount": true,
        "size": "20"
      }
    },
    {
      "id": "7",
      "category": "women",
      "name": "Women's tracksuit Q109",
      "rating": "5",
      "src": goods_r3,
      "price": "25.00",
      "discounts": false
    },
    {
      "id": "8",
      "category": "women",
      "name": "Women's tracksuit Q109",
      "rating": "2",
      "src": goods_r4,
      "price": "30.00",
      "discounts": false
    }
  ],
  "slider": [goods_r1, goods_r2, goods_r3, goods_r4],
  "navItems": [
    {
      name: 'About Us',
      path: 'about'
    },
    {
      name: 'Women',
      path: 'women'
    },
    {
      name: 'Men',
      path: 'men'
    },
    {
      name: 'Beauty',
      path: 'beauty'
    },
    {
      name: 'Accessories',
      path: 'accessories'
    },
    {
      name: 'Contact',
      path: 'contact'
    }
  ],
  "footerNavItems": {
    "categories": [
      {
        name: 'Men',
        path: 'men'
      },
      {
        name: 'Women',
        path: 'women'
      },
      {
        name: 'Accessories',
        path: 'accessories'
      },
      {
        name: 'Beauty',
        path: 'beauty'
      }
    ],
    "information": [
      {
        name: 'About Us',
        path: 'about'
      },
      {
        name: 'Contact us',
        path: 'contact'
      },
      {
        name: 'Blog',
        path: 'blog'
      },
      {
        name: 'FAQs',
        path: 'faq'
      }
    ],
    "links": [
      {
        name: 'Terms & Conditions',
        path: 'terms'
      },
      {
        name: 'Returns & Exchanges',
        path: 'return'
      },
      {
        name: 'Shipping & Delivery',
        path: 'shipping'
      },
      {
        name: 'Privacy Policy',
        path: 'policy'
      }
    ],
    "labels" : [
      {
        path: '/',
        img: label1
      },
      {
        path: '/',
        img: label2
      },
      {
        path: '/',
        img: label3
      },
      {
        path: '/',
        img: label4
      },
      {
        path: '/',
        img: label5
      },
      {
        path: '/',
        img: label6
      },
      {
        path: '/',
        img: label7
      }
    ]
  }

}
