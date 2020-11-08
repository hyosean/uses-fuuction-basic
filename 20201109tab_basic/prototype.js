function Tab(prop) {
    this.initDOM(prop);
    this.bindingEvent();
}
Tab.prototype.initDOM = function (prop) {
    this.el = document.querySelector(prop.wrap);
    this.btns = this.el.querySelectorAll(prop.link);
    this.boxs = this.el.querySelectorAll(prop.panel);

}

Tab.prototype.bindingEvent = function () {
    var self = this;
    for (var i = 0; i < self.btns.length; i++) {
        (function (index) {
            self.btns[index].onclick = function (e) {
                e.preventDefault();

                self.activation(index, self.btns);
                self.activation(index, self.boxs);
            }
        })(i);
    }

}

Tab.prototype.activation = function (activeNum, items) {
    for (var k = 0; k < items.length; k++) {
        items[k].classList.remove("on");
    }
    items[activeNum].classList.add("on");

}