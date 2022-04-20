import button from 'bundle-text:./button.hbs';
import Handlebars from 'handlebars';
import './button.scss'

const templateData = Handlebars.compile(button)({
    buttonText: 'button text123'
});

export default templateData;