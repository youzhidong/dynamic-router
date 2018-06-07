let item1 = {
  index: 'sales',
  title: '菜单一',
  icon: '/static/images/money.png',
  subs: [
    {
      index: '/menu1_item1',
      title: '选项1'
    },
    {
      index: '/menu1_item2',
      title: '选项2'
    },
    {
      index: '/menu1_item3',
      title: '选项3'
    },
    {
      index: '/menu1_item4',
      title: '选项4'
    },
    {
      index: '/menu1_item5',
      title: '选项5'
    },
    {
      index: '/menu1_item6',
      title: '选项6'
    },
    {
      index: '/menu1_item7',
      title: '选项7'
    }
  ]
}
let item2 = {
  index: '',
  title: '菜单二',
  icon: '/static/images/analysis.png',
  subs: [
    {
      index: '/menu2_item1',
      title: '选项1'
    },
    {
      index: '/menu2_item2',
      title: '选项2'
    },
    {
      index: '/menu2_item3',
      title: '选项3'
    }
  ]
}
let item3 = {
  index: 'mm',
  title: '菜单三',
  icon: '/static/images/checklist.png',
  subs: [
    {
      index: '/menu3_item1',
      title: '选项1'
    },
    {
      index: '/menu3_item2',
      title: '选项2'
    },
    {
      index: '/menu3_item3',
      title: '选项3'
    }
  ]
}
let item4 = {
  index: 'procurement_plan',
  title: '菜单四',
  icon: '/static/images/barchart.png',
  subs: [
    {
      index: '/menu4_item1',
      title: '选项1'
    },
    {
      index: '/menu4_item2',
      title: '选项2'
    },
    {
      index: '/menu4_item3',
      title: '选项3'
    },
    {
      index: '/menu4_item4',
      title: '选项4'
    },
    {
      index: '/menu4_item5',
      title: '选项5'
    }
  ]
}
let routerData = {
  path: '/',
  name: 'main',
  component: "dashboard",
  children: [
    {
      path: 'menu1_item1',
      component: "menu1_item1",
      name: 'menu1_item1'
    },
    {
      path: 'menu1_item2',
      component: "menu1_item2",
      name: 'menu1_item2'
    },
    {
      path: 'menu1_item3',
      component: "menu1_item3",
      name: 'menu1_item3'
    },
    {
      path: 'menu1_item4',
      component: "menu1_item4",
      name: 'menu1_item4'
    },
    {
      path: 'menu1_item5',
      component: "menu1_item5",
      name: 'menu1_item5'
    },
    {
      path: 'menu1_item6',
      component: "menu1_item6",
      name: 'menu1_item6'
    },
    {
      path: 'menu1_item7',
      component: "menu1_item7",
      name: 'menu1_item7'
    },
    {
      path: 'menu2_item1',
      component: "menu2_item1",
      name: 'menu2_item1'
    },
    {
      path: 'menu2_item2',
      component: "menu2_item2",
      name: 'menu2_item2'
    },
    {
      path: 'menu2_item3',
      component: "menu2_item3",
      name: 'menu2_item3'
    },
    {
      path: 'menu3_item1',
      component: "menu3_item1",
      name: 'menu3_item1'
    },
    {
      path: 'menu3_item2',
      component: "menu3_item2",
      name: 'menu3_item2'
    },
    {
      path: 'menu3_item3',
      component: "menu3_item3",
      name: 'menu3_item3'
    },
    {
      path: 'menu4_item1',
      component: "menu4_item1",
      name: 'menu4_item1'
    },
    {
      path: 'menu4_item2',
      component: "menu4_item2",
      name: 'menu4_item2'
    },
    {
      path: 'menu4_item3',
      component: "menu4_item3",
      name: 'menu4_item3'
    },
    {
      path: 'menu4_item4',
      component: "menu4_item4",
      name: 'menu4_item4'
    },
    {
      path: 'menu4_item5',
      component: "menu4_item5",
      name: 'menu4_item5'
    }
  ]
}
let navData = [item1, item2, item3, item4]
module.exports = {
  navData: navData,
  routerData: [routerData]
}
