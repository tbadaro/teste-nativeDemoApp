const buttonScreen = require("../screens/button.screen");
const dropScreen = require("../screens/drop.screen");
const formScreen = require("../screens/form.screen");
const homeScreen = require("../screens/home.screen");

describe('Fill forms', () => {
    it('should access forms pannel and fill form', async () => {
        await homeScreen.goToForms();
        await formScreen.typeInput('teste');
        expect (await formScreen.getInputResult()).toEqual('teste')
        await formScreen.turnSwitch();
        expect (await formScreen.getSwitchResult()).toEqual('Click to turn the switch OFF')
        await formScreen.openDropdownMenu();
        await dropScreen.selectFromMenu();
        expect (await formScreen.getDropdownResult()).toEqual('webdriver.io is awesome')
        await formScreen.clickButton();
        expect (await buttonScreen.buttonResult()).toEqual('This button is active')
        await buttonScreen.clickOk();          
    });
})