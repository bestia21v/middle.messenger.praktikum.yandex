import button from './button.hbs';
import Handlebars from 'handlebars';

const template = Handlebars.compile(button);

const templateData = template({
    buttonText: 'Button text'
});

console.log(template);
console.log(templateData);

export default templateData;