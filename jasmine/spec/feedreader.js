/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page? Error: Expected 0 not to be 0.  Put back the value 
         in allFeeds.
         */
         
         it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


       




        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
done      */

            
         it('check url', function() {
            for(let feed of allFeeds) //feed here grabs one feed at each iteration
            {
            expect(feed.url).toBeDefined(); //checks that the url of that feed is defined
            expect(feed.url.length).not.toBe(0); //checks that the url of that feed is not empty
            } 
          });



        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
done       */
        it('check name', function() { //feed here grabs one feed at each iteration
            for(let feed of allFeeds) { 
             expect(feed.name).toBeDefined();//checks that the name of that feed is defined
            expect(feed.name.length).not.toBe(0); //checks that the name of that feed is not empty
            }

            
        });



    });

    describe('The menu', function() {
    /* TODO: Write a new test suite named "The menu" 
    Done
    */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
    Done     */
         it('check for hidden menu', function(){
        
          let body = $('body');//stores body element 
          expect(body.hasClass('menu-hidden')).toBe(true);
          //checks body element 
          //to have class of menu-hidden 
          //and expects true
          });





         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          Done*/


          it('toggles visibility on click', function() {
            let menuIcon = $('.menu-icon-link');//stores menu-icon element
            let body = $('body');//stores body element 

            menuIcon.trigger('click'); // shows menu
            expect(body.hasClass('menu-hidden')).toBe(false);
            menuIcon.trigger('click'); // hides menu again
            expect(body.hasClass('menu-hidden')).toBe(true);
         });

     });

    /* TODO: Write a new test suite named "Initial Entries"
    Done */

    describe('Initial Entries', function() {


      /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
    
    
        it('check single entry element', function() {

        const feed = $('.feed');//varable storing all entries from .feed
        let feed1; //empty varable for at least on entry from parent .feed
   

        beforeEach(function (done) {  
        loadFeed(0, function() {  //calling loadFeed function at 0 id
            //this is from app.js function loadFeed(id, cb)
           feed1 = feed.innerHTML; //prior to function completing adding .innerHTML of .feed
            //heres were should have at least one entry element
            done(); //this is when the function starts and ends.
           });
       
        });

        expect(feed1.hasClass('entry-link')).toBe(true);
    
        });
     

    });


      




        /* TODO: Write a new test suite named "New Feed Selection" */



        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

     
});
