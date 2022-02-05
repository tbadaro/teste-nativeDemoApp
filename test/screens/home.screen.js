class HomeScreen {
    get #enterFormPage(){ return $('~Forms')}

    async goToForms(){ this.#enterFormPage.click()}

}

module.exports = new HomeScreen