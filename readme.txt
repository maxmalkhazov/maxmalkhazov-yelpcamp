RESTFUL ROUTES

NAME         URL            VERB               DESCRIPTION                       MONGOOSE METHOD
=========================================================================================================   
INDEX       /dogs           GET                Display a list of all dogs         Dog.find()
NEW         /dogs/new       GET                Displays a form to make new dogs   N/A
CREATE      /dogs           POST               Add new dog to DB                  Dog.create()
SHOW        /dogs/:id       GET                Show info about one dog            Dog.findById()
EDIT        /dogs/:id/edit  GET                Show edit form for one dog         Dog.findById()
UPDATE      /dogs/:id       PUT                Update a particular dog            Dog.findByIdAndUpdate()
DESTROY     /dogs/:id       DELETE             Delete a particular dog            Dog.findByIdAndRemove()
