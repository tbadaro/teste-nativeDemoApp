class ButtonScreen {
    get #buttonText(){ return $('android=new UiSelector().text("This button is active")')}
    get #okButton(){ return $('android=new UiSelector().index(2)')}

    async clickOk(){ await this.#okButton.click()}
    async buttonResult(){ return await this.#buttonText.getText()}
}

module.exports = new ButtonScreen