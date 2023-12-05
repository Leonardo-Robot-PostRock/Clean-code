(() => {

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

    interface IHtmlElement {
        id: string,
        type: HtmlType
    }

    class HtmlElement {
        public id: string;
        public type: HtmlType;
        constructor({
            id,
            type,
        }: IHtmlElement) {
            this.id = id;
            this.type = type;
        }
    }

    interface IInputAtrributes {
        value: string,
        placeholder: string,
    }

    class InputAttributes {
        public value: string;
        public placeholder: string;
        constructor({
            value,
            placeholder,
        }: IInputAtrributes) {
            this.value = value;
            this.placeholder = placeholder;
        }
    }

    class InputEvents {
        constructor() {
        }

        setFocus() { };
        getValue() { };
        isActive() { };
        removeValue() { };
    }

    interface InputElementProps {
        value: string;
        placeholder: string;
        id: string;
    }

    //? Idea para la nueva clase InputElement
    class InputElement {
        public html: HtmlElement;
        public attibutes: InputAttributes;
        public events: InputEvents;
        constructor({ value, placeholder, id }: InputElementProps) {
            this.html = new HtmlElement({ id, type: 'input' });
            this.attibutes = new InputAttributes({ value, placeholder });
            this.events = new InputEvents();
        }
    }

    const nameField = new InputElement({
        value: 'Fernando',
        placeholder: 'Enter first name',
        id: 'txtName'
    });

    console.log({ nameField });

})()