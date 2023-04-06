Installation:

1. npm create vite
    - follow the prompts and get started with project!



Project: To-do List

once initial setup done... break down into components
1. input field component
    - create a state to handle tasks
        - one state to manage the task you are entering in the field
        - one state to hold all the tasks



Note:
1. useRef
    - used in the handleSubmit
    - similar to getElementByID, where we are getting that properties html
    - the purpose of using in this project is to once we have submittied tasks to add to the tasklist, I want to blur out the effects of when i clicked the enter task input box.

Model.ts file:
1. file to hold all the types / interfaces
