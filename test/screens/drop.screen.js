class DropScreen {
    get #optionFromMenu(){ return $('android=new UiSelector().index(1)')}

    async selectFromMenu(){ await this.#optionFromMenu.click()}
}

module.exports = new DropScreen