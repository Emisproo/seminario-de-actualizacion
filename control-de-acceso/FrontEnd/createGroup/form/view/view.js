import {Controller} from '../controller/controller.js';
class View extends HTMLElement
{
    constructor(model)
    {
        super();

        this.model = model;
        this.controller = new Controller(this, this.model);

        this.container = document.createElement('div');
        this.container.classList.add("w3-container", "w3-modal-content", "w3-card-4", "w3-animate-zoom", "w3-center");
        this.container.style.maxWidth ='600px';

        this.createGroupForm = document.createElement('form');
        this.createGroupForm.classList.add("w3-container", "w3-section");
        //this.createGroupForm.action = "/action_page.php";

        this.groupnameLabel = document.createElement('label');
        this.groupnameLabel.innerText = 'Group Name';
        this.groupnameLabel.style.fontWeight = 'bolder';

        this.groupnameInput = document.createElement('input');
        this.groupnameInput.classList.add("w3-input", "w3-border", "w3-margin-bottom");
        this.groupnameInput.placeholder = "Enter Group name";
        this.groupnameInput.setAttribute('required','true');
        this.groupnameInput.id = 'groupNameInput';

        this.actionLabel = document.createElement('label');
        this.actionLabel.innerText = 'Action';
        this.actionLabel.style.fontWeight = 'bold';

        this.actionInput = document.createElement('input');
        this.actionInput.type = 'Action';
        this.actionInput.classList.add("w3-input", "w3-border", "w3-margin-bottom");
        this.actionInput.placeholder = "Enter action";
        this.actionInput.setAttribute('required','true');
        this.actionInput.id = 'actionInput';

        this.createGroupButton = document.createElement('button');
        this.createGroupButton.innerText = 'Create Group';
        this.createGroupButton.classList.add("w3-button", "w3-block", "w3-green", "w3-section", "w3-padding");
        this.createGroupButton.addEventListener('click', ()=> this.controller.onCreateGroupButtonClick());
    }

    connectedCallback()
    {
        this.createGroupForm.appendChild(this.groupnameLabel);
        this.createGroupForm.appendChild(this.groupnameInput);
        this.createGroupForm.appendChild(this.actionLabel);
        this.createGroupForm.appendChild(this.actionInput);
        this.createGroupForm.appendChild(this.createGroupButton);

        this.container.appendChild(this.createGroupForm);

        this.appendChild(this.container);

        

    }
    
    getData()
    {
        let data =
        {
            groupname: this.groupnameInput.value,
            description: this.actionInput.value
        };

       // data.groupname = document.getElementById('groupNameInput').value;
        //data.description = document.getElementById('actionInput').value;

        return data;
    }

}
customElements.define( 'x-view', View);

export {View};