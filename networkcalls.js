var PopupController = function() {
    this.turnOn_ = document.getElementById("turnOn");
    this.turnOff_ = document.getElementById("turnOff");
    this.addListeners_();
};

PopupController.prototype = {
    turnOn_: null,
    turnOff_: null,

    addListeners_: function() {
        this.turnOn_.addEventListener("click", this.turnOnHandleClick.bind(this));
        this.turnOff_.addEventListener("click", this.turnOffHandleClick.bind(this));
    },

    turnOnHandleClick: function() {
        alert("Turn On");
    },

    turnOffHandleClick: function() {
        alert("Turn Off");
    },
};

document.addEventListener("DOMContentLoaded", function() {
    window.PC = new PopupController();
});