export default {
  items: [
    {
      id: 'navigation',
      title: 'Navigation',
      type: 'group',
      icon: 'icon-navigation',
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          url: '/web-app',
          icon: 'feather icon-home',
        },
        {
          id: 'siswa',
          title: 'Siswa',
          type: 'item',
          url: '/siswa',
          icon: 'feather icon-users',
        },
      ],
    },
    // {
    //   id: "ui-element",
    //   title: "UI ELEMENT",
    //   type: "group",
    //   icon: "icon-ui",
    //   children: [
    //     {
    //       id: "basic",
    //       title: "Component",
    //       type: "collapse",
    //       icon: "feather icon-box",
    //       children: [
    //         {
    //           id: "button",
    //           title: "Button",
    //           type: "item",
    //           url: "/basic/button",
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],
};
