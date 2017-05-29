export default {
  menu: {
    visible: true,
    items: [
      { key: "write", text: "Write" },
      { key: "home", text: "Home" },
      { key: "explore", selected: true, text: "Explore" },
      // { key: "tags", text: "Tags" }
    ]
  },
  auth: {
    loggedIn: true,
  },
  user: {
    id: 2,
    name: 'Salvador Dali',
    image: '/site/dev/images/users/1.png',
    follows: [ 1 ],
    likes: [ ]
  },
  explore: {
    posts: []
  },
  home: {
    posts: []
  }
};
