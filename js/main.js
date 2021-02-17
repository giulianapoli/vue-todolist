const toDoApp = new Vue ({
  el: "#root",
  data: {
    logoImg: "https://images.corsidia.com/schools/logos/000/000/263/original/logo.png?1552646804",
    userInputArr: [],
    userText: '',
    isActive: false,
    notActive: false
  },
  methods: {
    pushingInputArr () {
      this.userInputArr.push({
        text: this.userText,
        isActive: this.isActive,
      }),
      this.userText = '';
      console.log(this.userInputArr);
    },

    deleteInput(index) {
            this.userInputArr.splice(index, 1);
    },

    printGreen(index) {

      console.log(this.userInputArr);

      if (this.userInputArr[index].isActive === false) {
        this.userInputArr[index].isActive = true;
      } else {
        this.userInputArr[index].isActive = false;
      }
    }
  }


});

