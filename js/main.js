const toDoApp = new Vue ({
  el: "#root",
  data: {
    logoImg: "https://images.corsidia.com/schools/logos/000/000/263/original/logo.png?1552646804",
    userInputArr: [],
    greenItems: [],
    userText: '',
    isActive: false
  },
  methods: {
    pushingInputArr: function () {
      this.userInputArr.push(this.userText),
      this.userText = ''
    },
    deleteInput: function (index) {
      this.userInputArr.splice(index, 1);
    },
    printGreen: function () {
      if(this.isActive == false) {
        this.isActive = true;
        greenItems.push(this.isActive);
      } else {
        this.isActive = false;
      }


    }
  }
});
