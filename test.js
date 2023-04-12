const app = {
    currentIndex : 0,
    users: [
        {
            name:"hùng",
            age:20
        }
    ],
    defineProperties: function () {
        Object.defineProperty(this, "currentUser", {
            get: function () {
                return this.users[this.currentIndex];
            },
        });
    },
    loadUser: function(){
        console.log(this.currentUser.name);
    },
    start: function(){
        this.defineProperties();
        this.loadUser();
    }
}
app.start();