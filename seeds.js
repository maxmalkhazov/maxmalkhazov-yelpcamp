var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://images.unsplash.com/photo-1504311640015-772816fba558?auto=format&fit=crop&w=1498&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
        description: "Bacon ipsum dolor amet biltong pork belly shank picanha bresaola capicola short loin andouille tail sirloin swine. Cow landjaeger shank hamburger burgdoggen alcatra doner buffalo pork pork belly cupim frankfurter. Burgdoggen alcatra capicola sausage brisket t-bone turkey. Kielbasa tail salami doner biltong andouille. Buffalo picanha ball tip brisket swine prosciutto turducken ribeye fatback bresaola. Andouille pork picanha, turducken swine bacon rump frankfurter landjaeger burgdoggen jowl pork belly alcatra t-bone. Venison cupim porchetta, bacon tri-tip kielbasa bresaola meatball meatloaf ground round."
    },
    {
        name: "Forest Grove",
        image: "https://images.unsplash.com/photo-1472132858735-6313c7962473?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
        description: "Bacon ipsum dolor amet biltong pork belly shank picanha bresaola capicola short loin andouille tail sirloin swine. Cow landjaeger shank hamburger burgdoggen alcatra doner buffalo pork pork belly cupim frankfurter. Burgdoggen alcatra capicola sausage brisket t-bone turkey. Kielbasa tail salami doner biltong andouille. Buffalo picanha ball tip brisket swine prosciutto turducken ribeye fatback bresaola. Andouille pork picanha, turducken swine bacon rump frankfurter landjaeger burgdoggen jowl pork belly alcatra t-bone. Venison cupim porchetta, bacon tri-tip kielbasa bresaola meatball meatloaf ground round."
    },
    {
        name: "Night Falls",
        image: "https://images.unsplash.com/photo-1486758206125-94d07f414b1c?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
        description: "Bacon ipsum dolor amet biltong pork belly shank picanha bresaola capicola short loin andouille tail sirloin swine. Cow landjaeger shank hamburger burgdoggen alcatra doner buffalo pork pork belly cupim frankfurter. Burgdoggen alcatra capicola sausage brisket t-bone turkey. Kielbasa tail salami doner biltong andouille. Buffalo picanha ball tip brisket swine prosciutto turducken ribeye fatback bresaola. Andouille pork picanha, turducken swine bacon rump frankfurter landjaeger burgdoggen jowl pork belly alcatra t-bone. Venison cupim porchetta, bacon tri-tip kielbasa bresaola meatball meatloaf ground round."
    }
];

function seedDB() {
    // remove all campgrouds
    Campground.remove({}, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("removed campgrounds!");
            // add a few campgrounds
            // data.forEach(function(seed) {
            //     Campground.create(seed, function(err, campground) {
            //         if (err) {
            //             console.log(err);
            //         } else {
            //             console.log("added a campground!");
            //             // create a comment
            //             Comment.create(
            //                 {
            //                     text:"This is a cool campground",
            //                     author: "Steve"
            //                 }, function(err, comment) {
            //                     if (err) {
            //                         console.log(err);
            //                     } else {
            //                         campground.comments.push(comment);
            //                         campground.save();
            //                         console.log("created new comment");
            //                     }
            //                 });
            //         }
            //     });
            // });
        }
    });
    // add a few comments
};

module.exports = seedDB;