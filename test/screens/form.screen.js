
class FormScreen {
    get #inputField(){ return $('~text-input')}
    get #inputResult(){ return $('~input-text-result')}
    get #switchButton(){ return $('~switch')}
    get #switchResult(){ return $('~switch-text')}
    get #dropdownMenu(){ return $('~Dropdown')}
    get #button(){ return $('~button-Active')}
    get #dropdownMenuText(){ return $('android=new UiSelector().text("webdriver.io is awesome")')}
    
    // interações
    async typeInput(inputValue){ await this.#inputField.setValue(inputValue)}
    async turnSwitch(){ await this.#switchButton.click()}
    async openDropdownMenu(){ await this.#dropdownMenu.click()}
    async clickButton(){ await this.#button.click()}
    
    // asserções
    async getSwitchResult(){ return await this.#switchResult.getText()}
    async getInputResult(){ return await this.#inputResult.getText()}
    async getDropdownResult(){ return await this.#dropdownMenuText.getText()}
    

}

module.exports = new FormScreen